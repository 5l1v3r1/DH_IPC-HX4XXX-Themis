!function(a){a.widget("dui.select",{version:"1.0.1",widgetName:"select",widgetEventPrefix:"select",_create:function(){var b=this;b.prevValue=b.element.val(),b.element.on("change",function(){b._trigger("change",null,{value:a(this).val(),prevValue:b.prevValue}),b.prevValue=a(this).val()})},val:function(a){var b=this.element;return arguments.length?(b.val(a),-1==b[0].selectedIndex&&(b[0].selectedIndex=0),this.prevValue=b.val(),b):b.val()}})}(jQuery);