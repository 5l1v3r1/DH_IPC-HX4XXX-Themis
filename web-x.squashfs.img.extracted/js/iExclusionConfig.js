!function(a){define(function(require,a,b){b.exports=require("jsCore/pageTab"),b.exports.prototype.iss_ipc=-1===webApp.DeviceType.indexOf("SD"),b.exports.prototype.iss_sd=-1!==webApp.DeviceType.indexOf("SD")}),define("iss_ipc",function(require,b,c){var d,e,f,g,h=require("jsCore/pageBase"),i=require("jsCore/rpc"),j=0;c.exports=h.extend({init:function(){f=this,d=[],ability.get("IVSCaps").done(function(a){for(var b in a.SupportedScenes)d.push(b);f.initTemplate(d),e=a.SupportedComp||[]}),f.render()},render:function(){g_videoInConflict.DSP.hasConflict().then(function(){f.tip("warning","dspTvoutConflict")}),f.onRefresh(!1)},initTemplate:function(b){var c=f.$(".ivsSche"),d={Normal:"w_IVS_Analyse",FaceDetection:"w_faceDetection",NumberStat:"w_flowrate",HeatMap:"HeatMap",Track:"Track",Traffic:"Traffic",VideoDiagnosis:"VideoDiagnosis",WideView:"WideView",Gate:"Gate",SCR:"ShootingScoreRecognition"};c.empty();for(var e=0;e<b.length;e++)c.append('<li><div class="img '+b[e]+'" data-sch="'+b[e]+'"></div><span class="tip" t="'+d[b[e]]+";title::"+d[b[e]]+'"></span></li>');c.translation(),c.on("click",function(b){f.onChooseIvs(a(b.target))})},onChooseIvs:function(a){return a.hasClass("disable")||!a.attr("data-sch")?!1:(a.toggleClass("select"),void f._checkDisable())},_checkDisable:function(){var b=[],c=f.$(".ivsSche .select");a.each(c,function(c,d){b.push(a(d).attr("data-sch"))});for(var g=[],h=0;h<e.length;h++)f.arrInclude(e[h],b)&&(g=g.concat(e[h]));a.each(d,function(b,c){-1===a.inArray(c,g)?f.$('[data-sch="'+c+'"]').addClass("disable"):f.$('[data-sch="'+c+'"]').removeClass("disable")})},arrInclude:function(b,c){var d=!0;return a.each(c,function(c,e){-1===a.inArray(e,b)&&(d=!1)}),d},renderElement:function(){g[j].Scene.TypeList||(g[j].Scene.TypeList=[]);var b=g[j].Scene.TypeList;b.push(g[j].Scene.Type),f.$(".ivsSche [data-sch]").removeClass("select").removeClass("disable"),a.each(b,function(a,b){f.$('.ivsSche [data-sch="'+b+'"]').addClass("select")}),f._checkDisable()},saveElement:function(){g[j].Scene.TypeList||(g[j].Scene.TypeList=[]);var b=[],c=f.$(".ivsSche .select");return 0==c.length?(g[j].Scene.Type=null,void(g[j].Scene.TypeList=null)):(a.each(c,function(c,d){b.push(a(d).attr("data-sch"))}),g[j].Scene.Type=b.shift(),void(g[j].Scene.TypeList=0!==b.length?b:null))},onDefault:function(){i.ConfigManager.getDefault("VideoAnalyseGlobal").done(function(a){g=a,f.renderElement(),f.tip("success","Defaultsuccess")}).fail(function(){f.tip("error","Defaultfailure")})},onRefresh:function(a){i.ConfigManager.getConfig("VideoAnalyseGlobal").done(function(b){g=b,f.renderElement(),a!==!1&&f.tip("success","Operateingsuccess")}).fail(function(){f.tip("error","Operateingfailure")})},onSave:function(){f.saveElement(),i.ConfigManager.setConfig("VideoAnalyseGlobal",g).done(function(){f.tip("success","Succeed in saving configure")}).fail(function(){f.tip("error","Saving failure")})},leave:function(){}})}),define("iss_sd",function(require,b,c){var d,e,f,g,h,i,j=require("jsCore/pageBase"),k=require("jsCore/rpc"),l=0;c.exports=j.extend({init:function(){g=this,h=g.$('[data-list="scheme"]'),d=[],ability.get("IVSCaps").done(function(b){for(var c in b.SupportedScenes)d.push(c);e=b.SupportedComp,a.each(e,function(a,b){e[a]=g.protocolChange(b)}),-1===d.indexOf("HeatMapPlan")?g.$('[data-cap="HeatMap"]').remove():d.splice(d.indexOf("HeatMapPlan"),1)}),k.VideoInAnalyse.getTemplateGlobal().done(function(a){i=a}),g.bind(),g.render()},render:function(){g_videoInConflict.DSP.hasConflict().then(function(){g.tip("warning","dspTvoutConflict")}),k.PTZ.getPresets().done(function(b){var c=g.$('[data-list="presets"]').empty();b&&a.each(b,function(a,b){c.append('<li title="'+b.Name+'" value="'+b.Index+'">'+b.Name+"</li>")}),g.presets=b||[],g.onRefresh(!1)})},protocolChange:function(a,b){return b?(-1!==a.indexOf("FaceDetection")&&a.splice(a.indexOf("FaceDetection"),1,"SDFaceDetect"),-1!==a.indexOf("HeatMap")&&a.splice(a.indexOf("HeatMap"),1,"HeatMapPlan")):(-1!==a.indexOf("SDFaceDetect")&&a.splice(a.indexOf("SDFaceDetect"),1,"FaceDetection"),-1!==a.indexOf("HeatMapPlan")&&a.splice(a.indexOf("HeatMapPlan"),1,"HeatMap")),a},bind:function(){g.$('ul[data-list="presets"]').on("click",function(b){if(h.data("heatmapPlan")!==!0){var c=a(b.target).val();if(void 0==g.$('[data-presetId="'+c+'"]').attr("data-global")){var d="";for(var e in f[l])-1!==e.indexOf("Scene")&&(d+=e);for(var j,k=0;255>k&&(j="Scene"+(0==k?"":k),-1!==d.indexOf(j));k++);var m=j.replace("Scene","CalibrateArea");f[l][j]=jQuery.extend(!0,{},i.Scene),f[l][m]=null!==i.CalibrateArea?jQuery.extend(!0,{},i.CalibrateArea):null,f[l][j].PtzPresetId=c,g.addShe(j)}g.$('div[data-list="preset"]').removeClass("select")}}),h.on("click",function(b){if(h.data("heatmapPlan")!==!0){var c=a(b.target);switch(c.attr("data-for")){case"choose":g.onChooseIvs(c),g.checkDisable(c.parents("[data-global]"));break;case"del":g.delShe(c.parents("[data-global]").attr("data-global"))}}}),g.element.on("click",function(){g.$('div[data-list="preset"]').removeClass("select")}),g.$("a[data-css]").on("click",function(b){var c=a(b.target).attr("data-css"),d=a(b.target).parent().hasClass("alarmconfig-flashbtn-on");"on"==c&&d||"off"==c&&!d||("on"==c?(a(b.target).parent().addClass("alarmconfig-flashbtn-on"),h.addClass("heatmapPlan").data("heatmapPlan",!0),g.addHeatmapGlobal()):(a(b.target).parent().removeClass("alarmconfig-flashbtn-on"),h.removeClass("heatmapPlan").data("heatmapPlan",!1),g.delHeatmapGlobal()))})},addHeatmapGlobal:function(){var a="Scene";for(var b in f[l])if(-1!==b.indexOf("Scene")&&0==f[l][b].PtzPresetId){a=b;break}f[l][a].TypeList=f[l][a].TypeList||[],"HeatMapPlan"!==f[l][a].Type&&""!==f[l][a].Type&&f[l][a].TypeList.push(f[l][a].Type),f[l][a].Type="HeatMapPlan"},delHeatmapGlobal:function(){for(var a in f[l])-1!==a.indexOf("Scene")&&"HeatMapPlan"==f[l][a].Type&&(f[l][a].TypeList=f[l][a].TypeList||[],f[l][a].Type=f[l][a].TypeList.length>0?f[l][a].TypeList.shift():"")},onChooseIvs:function(a){return!a.attr("data-sch")||a.hasClass("disable")?!1:void a.toggleClass("select")},initSheTemplate:function(a,b){a=g.protocolChange(a);var c=f[l][b],d=g.$('[data-template="scheme"]').clone();d.removeClass("fn-hide").removeAttr("data-template"),d.attr("data-global",b).attr("data-presetId",c.PtzPresetId),0==c.PtzPresetId&&d.addClass("fn-hide");for(var e=0;e<g.presets.length;e++)if(g.presets[e].Index==c.PtzPresetId){d.find("label").text(g.presets[e].Name);break}for(var i=d.find("ul"),j={Normal:"w_IVS_Analyse",FaceDetection:"w_faceDetection",SDFaceDetect:"w_faceDetection",NumberStat:"w_flowrate",HeatMap:"HeatMap",HeatMapPlan:"HeatMap",Track:"Track",Traffic:"Traffic",VideoDiagnosis:"VideoDiagnosis",WideView:"WideView"},e=0;e<a.length;e++)i.append('<li><div data-for="choose" class="img '+a[e]+'" data-sch="'+a[e]+'"></div><span class="tip" t="'+j[a[e]]+";title::"+j[a[e]]+'"></span></li>');i.translation(),d.appendTo(h)},renderShe:function(b){var c=f[l][b],d=g.$('[data-global="'+b+'"]'),e=jQuery.extend(!0,[],c.TypeList);c.Type&&e.push(c.Type),d.find("[data-sch]").removeClass("select").removeClass("disable"),e=g.protocolChange(e),a.each(e,function(a,b){b&&d.find("[data-sch="+b+"]").addClass("select")}),g.checkDisable(d)},checkDisable:function(b){var c=[],f=b.find(".select");a.each(f,function(b,d){c.push(a(d).attr("data-sch"))});for(var h=[],i=0;i<e.length;i++)g.arrInclude(e[i],c)&&(h=h.concat(e[i]));a.each(d,function(c,d){-1===a.inArray(d,h)?b.find('[data-sch="'+d+'"]').addClass("disable"):b.find('[data-sch="'+d+'"]').removeClass("disable")})},arrInclude:function(b,c){var d=!0;return a.each(c,function(c,e){-1===a.inArray(e,b)&&(d=!1)}),d},addShe:function(a){g.initSheTemplate(d,a),g.renderShe(a)},delShe:function(a){var b=g.$("[data-global="+a+"]");b.remove();var c=a.replace("Scene","CalibrateArea");delete f[l][a],delete f[l][c]},saveShe:function(b){var c={Type:"",TypeList:[]},d=[],e=g.$("[data-global="+b+"] .select");return 0!==e.length&&(a.each(e,function(b,c){d.push(a(c).attr("data-sch"))}),d=g.protocolChange(d,!0),c.Type=d.shift(),c.TypeList=0!==d.length?d:[]),c},selectPreset:function(a){return h.data("heatmapPlan")!==!0?(g.$(a.currentTarget).parent().addClass("select"),!1):void 0},renderElement:function(){if(h.empty(),null==f[l])return void(f[l]={});var a=!1;for(var b in f[l])-1!==b.indexOf("Scene")&&(g.addShe(b),"HeatMapPlan"==f[l][b].Type&&(a=!0));a?(g.$("#iss_sd_heat").addClass("alarmconfig-flashbtn-on"),h.addClass("heatmapPlan").data("heatmapPlan",!0)):(g.$("#iss_sd_heat").removeClass("alarmconfig-flashbtn-on"),h.removeClass("heatmapPlan").data("heatmapPlan",!1))},saveElement:function(){var a=!1;for(var b in f[l])if(-1!==b.indexOf("Scene")){if(0!=f[l][b].PtzPresetId){var c=g.saveShe(b);f[l][b].Type=c.Type,f[l][b].TypeList=c.TypeList}a=!0}a||(f[l]=null)},checkTable:function(b){for(var c=a.extend(!0,{},{}),d=h.children("div[data-global]"),e=["Scene","CalibrateArea","TimePeriod"],f=0;f<d.length;f++){var i="Scene"+(0==f?"":f),j=g.$(d[f]).attr("data-global");a.each(e,function(d,e){var f=i.replace("Scene",e),g=j.replace("Scene",e);switch(a.type(b[g])){case"null":c[f]=null;break;case"undefined":break;case"array":c[f]=a.extend(!0,[],b[g]);break;default:c[f]=a.extend(!0,{},b[g])}}),g.$(d[f]).attr("data-global",i)}return c},onDefault:function(){k.ConfigManager.getDefault("VideoAnalyseGlobal").done(function(a){f=a,g.renderElement(),g.tip("success","Defaultsuccess")}).fail(function(){g.tip("error","Defaultfailure")})},onRefresh:function(a){k.ConfigManager.getConfig("VideoAnalyseGlobal").done(function(b){f=b,g.renderElement(),a!==!1&&g.tip("success","Operateingsuccess")}).fail(function(){g.tip("error","Operateingfailure")})},onSave:function(){g.saveElement(),f[l]=g.checkTable(f[l]),k.ConfigManager.setConfig("VideoAnalyseGlobal",f).done(function(){g.tip("success","Succeed in saving configure"),null==f[l]&&(f[l]={})}).fail(function(){g.tip("error","Saving failure")})},leave:function(){}})})}(jQuery);