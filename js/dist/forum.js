module.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat["models/User"]},function(e,t){e.exports=flarum.core.compat["components/UserCard"]},function(e,t){e.exports=flarum.core.compat["helpers/icon"]},function(e,t){e.exports=flarum.core.compat.Model},function(e,t){e.exports=flarum.core.compat.extend},function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),u=r(1),i=r.n(u),a=r(2),c=r.n(a),f=r(3),l=r.n(f),p=r(4),s=r.n(p),d=r(5);n.a.initializers.add("michaelbelgium-flarum-profile-views",function(){i.a.prototype.views=s.a.attribute("views"),Object(d.extend)(c.a.prototype,"infoItems",function(e){var t=this.props.user;e.add("profile-views",m("span",null,l()("far fa-eye")," ",n.a.translator.trans("flarum_profile_views.forum.user.views_count_text",{viewcount:0==t.views()?"0":t.views()})))})})}]);
//# sourceMappingURL=forum.js.map