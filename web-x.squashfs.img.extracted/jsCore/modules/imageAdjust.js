!function(a){define(function(require,b,c){function d(b,c){var d=this;d.options=a.extend({},g,c),d.e=a(b).empty().append(f).translation(),d.init()}var e=require("../plugin"),f=require("./imageAdjust.html");require("widget/js/dui.slider");var g=null;a.fn.imageAdjust=function(){var b=arguments[0],c=2<=arguments.length?Array.prototype.slice.call(arguments,1):[],e=this;return this.each(function(){var f=a(this),g=f.data("imageAdjust");if(g||f.data("imageAdjust",g=new d(f,b)),"string"===a.type(b)&&a.isFunction(g[b])){var h=g[b].apply(g,c);if(void 0!==h)return e=h,!1}}),e},d.prototype.init=function(){var a=this;a.$(".u-tab").tab(),a.$("[slider][key]").slider({min:0,max:128,change:function(){e.SetColor(0,a.$("[slider][key=Brightness]").slider("value"),a.$("[slider][key=Contrast]").slider("value"),a.$("[slider][key=Saturation]").slider("value"),a.$("[slider][key=Hue]").slider("value"))}}),a.$("a").on("click",function(){a.$("[slider][key=Brightness]").slider("value",64),a.$("[slider][key=Contrast]").slider("value",64),a.$("[slider][key=Saturation]").slider("value",64),a.$("[slider][key=Hue]").slider("value",64)}).click()},d.prototype.$=function(a){return this.e.find(a)},c.exports=d})}(jQuery);