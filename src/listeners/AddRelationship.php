<?php


namespace michaelbelgium\profileviews\listeners;

use Illuminate\Contracts\Events\Dispatcher;
use DirectoryIterator;
use Flarum\Event\GetModelRelationship;
use Flarum\Core\User;
use michaelbelgium\profileviews\models\ProfileView;
use Flarum\Event\GetApiRelationship;
use Flarum\Api\Serializer\UserBasicSerializer;
use Flarum\Event\ConfigureApiController;
use Illuminate\Routing\Controller;
use Flarum\Api\Controller\ShowUserController;
use michaelbelgium\profileviews\serializers\ProfileViewSerializer;

class AddRelationship
{
    const RELATIONSHIP_NAME = "userViewers";

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetModelRelationship::class, [$this, 'getModelRelationship']);
        $events->listen(GetApiRelationship::class, [$this, 'getApiRelationship']);
        $events->listen(ConfigureApiController::class, [$this, 'configureApiController']);
    }

    /**
     * @param GetModelRelationship $event
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany|null
     */
    public function getModelRelationship(GetModelRelationship $event)
    {
        if($event->isRelationship(User::class, self::RELATIONSHIP_NAME))
        {
            return $event->model->hasMany(ProfileView::class, 'viewed_id', 'id');
        }
    }

    /**
     * @param GetApiRelationship $event
     */
    public function getApiRelationship(GetApiRelationship $event)
    {
        if($event->isRelationship(UserBasicSerializer::class, self::RELATIONSHIP_NAME))
        {
            return $event->serializer->hasMany($event->model, ProfileViewSerializer::class, self::RELATIONSHIP_NAME);
        }
    }

    public function configureApiController(ConfigureApiController $event)
    {
        if($event->isController(ShowUserController::class))
        {
            $event->addInclude(self::RELATIONSHIP_NAME);
        }
    }
}