!function(a){define(function(require,b,c){function d(b,c){var d=this;d.o=a.extend({},h,c),d.e=a(b),d.$=function(a){return d.e.find(a)},d.e.html(g).translation(),d.$(".camera-time-slider-left,.camera-time-slider-right").on({mouseenter:function(a){var b=d.$(a.target);d.$(".camera-time-title").text(f(b,d.o)).css("left",b.position().left).show()},mouseleave:function(){d.$(".camera-time-title").hide()}}),d.$(".camera-time-bar").drag({dragElements:".camera-time-slider-left,.camera-time-slider-right",limit:["y"],drag:function(b,c){var g=d.$(c.ui.target),h=d.$(".camera-time-slider-left").position().left,i=d.$(".camera-time-slider-right").position().left-d.$(".camera-time-slider-right").width(),j=i-h;d.$(".camera-time-day").css("left",h+1).width(j),g.hasClass("camera-time-slider-left")?0>=j?(g.css("left",i),d.o.startTime=e(i,d.$(".camera-time-line").width())):d.o.startTime=e(h,d.$(".camera-time-line").width()):0>=j?(g.css("left",h+d.$(".camera-time-slider-right").width()),d.o.endTime=e(h,d.$(".camera-time-line").width())):d.o.endTime=e(i,d.$(".camera-time-line").width()),d.$(".camera-time-title").text(f(g,d.o)).css("left",c.position.x),a.isFunction(d.o.drag)&&d.o.drag(b,c)},stop:d.o.stop,start:d.o.start})}function e(b,c){var d=c/24/60/60,e=b/d,f=e%60,g=(e-f)/60%60,h=(e-f-60*g)/3600;return a.pad(h,2)+":"+a.pad(g,2)+":00"}function f(a,b){var c=(a.hasClass("camera-time-slider-left")?b.startTime:b.endTime).split(":");return c[0]+":"+c[1]}var g=require("./timeDrag.html");require("widget/js/dui.drag");var h={start:a.noop,drag:a.noop,stop:a.noop,startTime:"00:00:00",endTime:"24:00:00"};a.fn.timeDrag=function(){var b=arguments[0],c=2<=arguments.length?Array.prototype.slice.call(arguments,1):[],e=this;return this.each(function(){var f=a(this),g=f.data("timeDrag");if(g||f.data("timeDrag",g=new d(f,b)),"string"===a.type(b)&&a.isFunction(g[b])){var h=g[b].apply(g,c);if(void 0!==h)return e=h,!1}}),e},d.prototype.startTime=function(a){var b=this;return a?(b.o.startTime=a,void b._render()):b.o.startTime},d.prototype.endTime=function(a){var b=this;return a?(b.o.endTime=a,void b._render()):b.o.endTime},d.prototype._render=function(){var a=this,b=a.$(".camera-time-line").width(),c=a.$(".camera-time-slider-left").width(),d=b/24/60/60,e=a.o.startTime.split(":"),f=a.o.endTime.split(":"),g=e[0],h=e[1],i=e[2],j=f[0],k=f[1],l=f[2],m=((3600*j+60*k+1*l)*d+c).round(),n=((3600*g+60*h+1*i)*d).round();0===g-0&&0===h-0&&(n=0),m>b+c&&(m=b+c),c>=m-n&&(n=m-c),a.$(".camera-time-slider-right").css("left",m),a.$(".camera-time-slider-left").css("left",n),a.$(".camera-time-day").width(m-n-c).css("left",n+1).text("")},c.exports=d})}(jQuery);