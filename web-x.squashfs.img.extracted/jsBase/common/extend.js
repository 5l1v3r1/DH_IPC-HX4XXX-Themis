!function(a){function b(b,c){var d=this.find(b).filter(c||"*");return a.extend(d,{val:function(b){var c=null,e=[];return arguments.length?(this.checked(!1),"array"===a.type(b)?a.each(b,a.proxy(function(a,b){this.filter("[value='"+b+"']").checked(!0)},this)):this.filter("[value='"+b+"']").checked(!0),d):(c=this.filter(":checked"),c.length>1?(a.each(c,function(b,c){e.push(a(c).val())}),e):c.val())}})}!function(){("function"!=typeof JSON.stringify||a.browser.ie&&8===a.browser.version)&&(JSON.stringify=JSON.encode),("function"!=typeof JSON.parse||a.browser.ie&&8===a.browser.version)&&(JSON.parse=JSON.decode)}(),a.extend(a.fn,{translation:function(b){function c(b){b.find("[t]").each(function(){var b=a(this),c=b.attr("t");c&&a.each(c.split(";"),function(c,e){var f=e.split("::"),g="";1===f.length?(a.each(f[0].split("+"),function(a,b){g+=d(b)}),b.text(g)):(a.each(f[1].split("+"),function(a,b){g+=d(b)}),b.attr(f[0],g))})})}function d(c){if(a.isFunction(b))return b(c)||"";if(a.isPlainObject(b))return b[c]||"";if(a.isFunction(tl)){var d=c.split(/[\[\]]/),e=tl(d[0]),f=d[1]-0;if(!isNaN(f)){var g=e.split("|");e=g[f]}return e}return c}return this.each(function(){c(a(this))})},testBackgroundImage:function(b){var c=this;return a.get(b,function(){c.css("background",'url("'+b+'") no-repeat scroll center bottom rgba(0, 0, 0, 0)')}),this},sequence:function(b,c){if(arguments.length)return b=c?b.split(c):b,a.each(this,function(c,d){a(d).val(b[c])}),this;var d=[];return a.each(this,function(b,c){d.push(a(c).val())}),d},checkboxs:function(a){return b.call(this,":checkbox",a)},radios:function(a){return b.call(this,":radio",a)},options:function(){var b=this.prop("options");return a.extend(b,{owner:this,_opt:b,addOpt:function(b,c,d){"number"!=a.type(b)&&(d=c,c=b,b=void 0);var e=a("<option>"+c+"</option>");return"undefined"!=a.type(d)&&e.prop("value",d),"undefined"==a.type(b)?this.owner.append(e):(b=0>b?this.length+b:b,b=0>b?0:b,a(this[b]).before(e)),this},removeOpt:function(b,c){if("number"==a.type(b)){var d=a(this).toArray();d.splice(b,c),this.owner.html(d)}else"undefined"==a.type(b)?this.owner.html(""):this.owner[0].options.remove(this.valueIndex(b));return this},valueIndex:function(a){for(var b=0;b<this.length;b++)if(this[b].value==a)return b;return-1}})}}),a.extend({comparVersion:function(a,b){for(var c=a.split("."),d=b.split("."),e=Math.max(c.length,d.length),f=0;e>f;++f){var g=(c[f]||0)-(d[f]||0);if(g)return g}return 0},bytesToSize:function(a){if(!a)return"0 B";var b=1024,c=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],d=Math.floor(Math.log(a)/Math.log(b));return(a/Math.pow(b,d)).toPrecision(3)+" "+c[d]},makeAryByLength:function(a,b){for(var c=[],d=a;a+b>d;d++)c.push(d);return c},compareTime:function(b,c){var d=a.type(b),e=function(a){var b=a.split(":");return 1e3*(3600*b[0]+60*b[1]+b[2])},f=0;if("date"===d)f=b-c;else{var g=/\s?\d{2}:\d{2}:\d{2}/,h=b.replace(g,""),i=c.replace(g,"");f=""===h?e(b)-e(c):new Date(a.formatDate(h,"yyyy/MM/dd")).getMilliseconds()+e(b.match(g)[0])-(new Date(a.formatDate(i,"yyyy/MM/dd")).getMilliseconds()+e(c.match(g)[0]))}return f}}),function(){Array.prototype.erase=function(a){for(var b=this.length;b--;)this[b]===a&&this.splice(b,1);return this},Number.prototype.chk10=function(){var a=this-0;return 10>this-0?"0"+(this-0):a},Number.prototype.getBitEx=function(a){var b=this-0,c=b.toString(2),d=c.length,e=c.charAt(d-a-1);return"1"==e?1:0},Number.prototype.setBit=function(a,b){var c=this-0;return b?c|=1<<a:c&=~(1<<a),c}}()}(jQuery);