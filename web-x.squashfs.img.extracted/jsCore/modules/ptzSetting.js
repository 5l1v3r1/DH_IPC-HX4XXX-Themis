!function(a){define(function(require,b,c){function d(b,c){var d=this;d.options=a.extend({},h,c),d.e=a(b).empty().append(g).translation(),d.$(".u-tab.menu").tab(),d.$(".u-tab.fn-hide").tab(),d.$("a[data-action]").on("click",function(a){d.$("[data-target="+d.$(a.currentTarget).attr("data-action")+"]").toggleClass("fn-hide")}),d.$("a[cmd],div[cmd]").on("click",function(a){var b=d.$(a.currentTarget).attr("cmd");d._chkCmd(b).done(function(){var a=d._buildArgs(b);f.PTZ.start(b,a.arg2,a.arg3,a.arg4)})}),d.$("a[data-light]").on("click",function(a){f.PTZ.start("LampWaterClear",d.$(a.currentTarget).attr("data-light")-0,0,0)}),d.$("#ptz_set_azi_show").on("click",function(a){var b=d.$(a.target);b.hasClass("current")?(b.removeClass("current"),b.attr("t","w_AzimuthDispShowBtn").parent().translation()):(b.addClass("current"),b.attr("t","w_AzimuthDispShowBtn_stop").parent().translation(),d._getStatus())}),e.get("PtzFunctionMenu").done(function(a){a&&d.$("a[data-cap=PtzFunctionMenu]").remove()}),d.$(".ui-boat-intel-current div[data-css]").on({mouseover:function(a){var b=d.$(a.currentTarget);b.parent().addClass("ui-boat-intel-current-"+b.attr("data-css"))},mouseout:function(a){var b=d.$(a.currentTarget);b.parent().removeClass("ui-boat-intel-current-"+b.attr("data-css"))}}),d.render()}var e=(require("../plugin"),require("../ability")),f=require("../rpc"),g=require("./ptzSetting.html"),h=null;a.fn.ptzSetting=function(){var b=arguments[0],c=2<=arguments.length?Array.prototype.slice.call(arguments,1):[],e=this;return this.each(function(){var f=a(this),g=f.data("ptzSetting");if(g||f.data("ptzSetting",g=new d(f,b)),"string"===a.type(b)&&a.isFunction(g[b])){var h=g[b].apply(g,c);if(void 0!==h)return e=h,!1}}),e},d.prototype.render=function(){var b=this;e.get("PTZCaps",!0).done(function(c){c&&c.PtzFunctionMenu&&c.PtzFunctionMenu.SupportOSDMenu||b.$("[data-for=ptz_menu],[data-page=ptz_menu]").remove();var d=b.$("#ptz_set_select").empty();c&&c.AutoScan===!1||d.append('<option value="AutoScan" t="w_Auto-Scan"></option>'),c&&c.Preset===!1||d.append('<option value="Preset" t="w_Preset"></option>'),c&&c.Tour===!1||d.append('<option value="Tour" t="w_Auto-Tour"></option>'),c&&c.Pattern===!1||d.append('<option value="Pattern" t="w_Pattern"></option>'),c&&c.Aux===!1||d.append('<option value="Aux" t="Assistant"></option>'),c&&c.Wiper===!1||-1!==webApp.DeviceType.indexOf("SD")||d.append('<option value="Wiper" t="LightWiper"></option>'),c&&c.AutoPan===!0&&d.append('<option value="AutoPan" t="autoPan"></option>'),c&&-1!==a.inArray("Absolutely",c.Move)&&d.append('<option value="Absolutely" t="positionABS"></option>'),isEnable("is_show_azimuthDisp")&&d.append('<option value="Azimuth" t="w_AzimuthDispShowBtn"></option>'),d.get(0).selectedIndex=0,d.translation().on("change",function(a){b.$(".u-tab.fn-hide").tab("select",b.$(a.target).val())}).change(),b.$(":text[capKey]").each(function(a,d){var e=b.$(d),f=e.attr("capKey"),g=e.attr("capMin")-0,h=c&&c[f+"Min"]||g,i=c&&c[f+"Max"]||255;e.numberfield({allowDecimal:!1,allowNegative:!1,min:h,max:i});var j=e.nextAll("span");j.eq(0).text(h),j.eq(1).text(i)}),b.$("#ptz_set_abs_zoom").numberfield({allowDecimal:!1,allowNegative:!1,min:1,max:128});var e=c&&c.PtzMotionRange&&10*c.PtzMotionRange.HorizontalAngle[0]||0,f=c&&c.PtzMotionRange&&10*c.PtzMotionRange.HorizontalAngle[1]||3600,g=c&&c.PtzMotionRange&&10*c.PtzMotionRange.VerticalAngle[0]||0,h=c&&c.PtzMotionRange&&10*c.PtzMotionRange.VerticalAngle[1]||900,i=b.$("#ptz_set_abs_x").numberfield({allowDecimal:!1,allowNegative:!0,min:e,max:f}).prev("p").find("span");i.eq(1).text(e),i.eq(2).text(f);var j=b.$("#ptz_set_abs_y").numberfield({allowDecimal:!1,allowNegative:!0,min:g,max:h}).prev("p").find("span");j.eq(1).text(g),j.eq(2).text(h)})},d.prototype.$=function(a){return this.e.find(a)},d.prototype._buildArgs=function(a){var b=this,c={arg2:0,arg3:0,arg4:0};switch(a){case"GotoPreset":case"SetPreset":case"ClearPreset":c.arg2=b.$("#ptz_set_preset").numberfield("value");break;case"StartTour":case"StopTour":case"ClearTour":c.arg2=b.$("#ptz_set_tour").numberfield("value");break;case"AddTour":case"DelTour":c.arg2=b.$("#ptz_set_tour").numberfield("value"),c.arg3=b.$("#ptz_set_tour_add").numberfield("value");break;case"StartPattern":case"StopPattern":case"SetPatternBegin":case"SetPatternEnd":case"ClearPattern":c.arg2=b.$("#ptz_set_pattern").numberfield("value");break;case"AuxOn":case"AuxOff":c.arg2=b.$("#ptz_set_aux").numberfield("value");break;case"PositionABS":c.arg2=b.$("#ptz_set_abs_x").numberfield("value"),c.arg3=b.$("#ptz_set_abs_y").numberfield("value"),c.arg4=b.$("#ptz_set_abs_zoom").numberfield("value")}return c},d.prototype._chkCmd=function(b){var c=this,d={StartTour:"StopTour",AutoPanOn:"AutoPanOff",AutoScanOn:"AutoScanOff",StartPattern:"StopPattern"},e=["StartTour","AutoPanOn","AutoScanOn","StartPattern","GotoPreset","PositionABS"],g=["StopTour","AutoPanOff","AutoScanOff","StopPattern"];return a.Deferred(function(h){if(-1!==a.inArray(b,e)){if(d.hasOwnProperty(c.lastCommand)){var i=c._buildArgs(d[c.lastCommand]);f.PTZ.start(d[c.lastCommand],i.arg2,i.arg3,i.arg4).done(h.resolve).fail(h.reject)}else h.resolve();c.lastCommand=b}else-1!==a.inArray(b,g)?(h.resolve(),c.lastCommand=b):h.resolve()}).promise()},d.prototype._getStatus=function(){var a=this,b=a.$("#ptz_set_azi_show");!b.is(":hidden")&&b.hasClass("current")?(f.PTZ.getStatus().done(function(b){var c=b.Postion;a.$("#ptz_set_azi_x").val(c[0]<0?(1800*c[0]+3600).round()/10:(1800*c[0]).round()/10),a.$("#ptz_set_azi_y").val((-1*c[1]*1800).round()/10)}),setTimeout(function(){a._getStatus()},200)):(b.removeClass("current"),b.attr("t","w_AzimuthDispShowBtn").parent().translation())},c.exports=d})}(jQuery);