!function(a){define(function(require,b,c){function d(){function a(){k.Alarm.getOutState().done(function(a){for(var b=0;b<webApp.ALARM_OUT_NUMBER;b++)a&1<<b?p.$("[data-index="+b+"]").addClass("current"):p.$("[data-index="+b+"]").removeClass("current")})}n.chkAuthority("Alarm")&&webApp.ALARM_OUT_NUMBER&&(u=setInterval((a(),a),5e3))}function e(){clearInterval(u),u=null}function f(){g(),"Original Rate"===webApp.DisplayMode&&setTimeout(g,100)}function g(){var a=10,b=p.$(".main-right-container").width()||-10,c=p.$(".main-bottom").width(),d=p.$(".main-right-container").parent(),e=c-a-b,f=Math.max(document.documentElement.clientHeight-56-54-33,390),g=webApp.DisplayMode;switch(s.videoBar("hasItem","video_triggerTrack")&&"Original Rate"==webApp.DisplayMode&&(g="adapted window"),g){case"Original Size":Video.resolution.x&&Video.resolution.y&&("nacl"!==l.type||e>=Video.resolution.x)&&(e=Video.resolution.x,f=Video.resolution.y),d.css({width:e+a+b,margin:"0 auto"});break;case"Original Rate":e=c-a-b,e/Video.rate<f?f=e/Video.rate:e=f*Video.rate,d.css({width:e+a+b,margin:"0 auto"});break;default:d.css({width:c,margin:"0"})}return r.css({width:e,height:f,background:"inherit"}),s.css("width",e),v||l.cover(r),!1}function h(){k.ConfigManager.getConfig(["Encode","EncodeEncrypt"]).done(function(a){var b=a[0].params.table[0].MainFormat[0].Video,c=a[1].result&&a[1].params.table[0][0];return"SVAC"===b.Compression&&(c.EncryptEnable&&l.SetDecodeKey(c.Key),b.SVCTLayer-1)?(s.videoBar("hideItem","video_svac",!1),void l.ChooseFrame(s.videoBar("isCurrent","video_svac",1)?1:0)):(s.videoBar("hideItem","video_svac",!0),void l.ChooseFrame(0))})}function i(a,b){l.SetVisibleVideoWnd(b,0),webApp.CHANNEL_NUMBER>1?(n.chkAuthority("Monitor_01")&&n.chkAuthority("Monitor_02")&&l.open(a,0,2),!n.chkAuthority("Monitor_01")&&n.chkAuthority("Monitor_02")&&(l.open(a,1,1),l.SetVideoWndTip(0,tl("noVideoAuthoity"))),n.chkAuthority("Monitor_01")&&!n.chkAuthority("Monitor_02")&&(l.open(a,0,1),l.SetVideoWndTip(1,tl("noVideoAuthoity"))),n.chkAuthority("Monitor_01")||n.chkAuthority("Monitor_02")||(l.SetVideoWndTip(0,tl("noVideoAuthoity")),l.SetVideoWndTip(1,tl("noVideoAuthoity")))):n.chkAuthority("Monitor_01")?l.open(a,0,1):l.SetVideoWndTip(0,tl("noVideoAuthoity"))}function j(){a.when(m.get("AudioInputCaps"),k.ConfigManager.getConfig("AudioInput")).done(function(a,b){var c=b[0].AudioSource;"LineIn"==c&&a.LineIn<2||"Mic"==c&&a.Mic<2?p.$("[btn-for=onVoice2]").hide():p.$("[btn-for=onVoice2]").show()})}var k=require("jsCore/rpc"),l=require("jsCore/plugin"),m=require("jsCore/ability"),n=(require("common/common").Cookie,require("jsCore/rpcLogin")),o=require("jsCore/pageBase");require("jsCore/modules/ptzControl"),require("jsCore/modules/ptzSetting"),require("jsCore/modules/zoomFocus"),require("jsCore/modules/videoBar"),require("jsCore/modules/imageAdjust"),require("jsCore/modules/triggerTrack"),require("jsCore/modules/fishEye");var p=null,q=".preview",r=null,s=null,t=null;c.exports=o.extend({init:function(){p=this,r=p.$(".main-video"),s=p.$(".ui-video-bar").videoBar(),n.chkAuthority("MPTZ")&&webApp.HasPtz&&((-1!==webApp.DeviceType.indexOf("SD")||-1!==webApp.DeviceType.indexOf("TPC"))&&(t=p.$(".main-ptz-control").ptzControl({autoFocus:!0,isLaserDistMeasure:!0,channel:l.windowId}),p.$(".main-ptz-setting").ptzSetting()),-1!==webApp.DeviceType.indexOf("SD")&&s.videoBar("toggleCurrent","video_ptz")),p.$(".main-image-adjust").imageAdjust(),p.$(".main-zoom-focus").zoomFocus({type:"preview"}),p.$(".main-trigger-track").triggerTrack(),m.get("VideoInputCaps").done(function(a){a&&a.FishEye&&p.$(".main-fisheye").fishEye({closeIVS:function(){s.videoBar("isCurrent","video_ivsRule",0)&&(l.SetIVSEnable(!1),s.videoBar("hideItem","video_ivsRule",!0))},openIVS:function(){s.videoBar("isCurrent","video_ivsRule",0)&&(l.SetIVSEnable(!0),s.videoBar("hideItem","video_ivsRule",!1))}})}),a.when(m.get("MaxExtraStream"),m.is("ExtraConflict")).then(function(a,b){1==a?(p.$("[btn-for=onConnectExtra]").show(),p.$("[btn-for=onConnectExtra2]").remove()):2==a?(p.$("[btn-for=onConnectExtra]").attr("t","w_SecondStream1").text(tl("w_SecondStream1")).show(),!b&&p.$("[btn-for=onConnectExtra2]").show()):(p.$("[btn-for=onConnectExtra]").remove(),p.$("[btn-for=onConnectExtra2]").remove())}),webApp.GongAnDetect&&(p.$("[btn-for=onConnectExtra3]").show(),p.$("[btn-for=onConnectExtra4]").show()),m.is("DSPConflict").done(function(a){a&&s.videoBar("hideItem","video_ivsRule",!0)});var b=p.$("#pre_type").empty().append('<option value="0">TCP</option>').off("change").on("change",p.onTypeChange);l.CheckFuncSupport(0).done(function(a){a&&b.append('<option value="4">UDP</option>')}),l.CheckFuncSupport(1).done(function(a){a&&b.append('<option value="3" t="w_multicast"></option>').translation()}),""!==l.type&&p.$("a[btn-for=onConnectMain]").addClass("current last"),w.init(),h(),p._initButtons(),-1!=webApp.DeviceType.indexOf("TPC")&&(-1!=webApp.DeviceType.indexOf("-T")&&x.render(),p.$("[sel-for=onChangeResolute]").remove(),p.$("[btn-for=onCutResolute]").remove(),p.bind()),p.render()},_initButtons:function(){var a=p.$("#pre_alarm_wrap").empty().off("click").on("click",function(a){var b=p.$(a.target),c=b.data("index");k.ConfigManager.getConfig("AlarmOut").done(function(a){b.hasClass("current")?(b.removeClass("current"),1==a[c].Mode?(a[c].Mode=0,k.ConfigManager.setConfig("AlarmOut",a)):(a[c].Mode=1,k.ConfigManager.setConfig("AlarmOut",a).done(function(){a[c].Mode=0,k.ConfigManager.setConfig("AlarmOut",a)}))):(b.addClass("current"),a[c].Mode=1,k.ConfigManager.setConfig("AlarmOut",a))})});if(n.chkAuthority("Alarm")&&webApp.ALARM_OUT_NUMBER){if(1===webApp.ALARM_OUT_NUMBER)a.append('<a class="main-top-icon-alarm" href="javascript:;" data-index="0" hidefocus="true" t="title::w_Alarm Out"></a>');else for(var b=webApp.ALARM_OUT_NUMBER;b>0;b--)a.append('<a class="main-top-icon-alarm" href="javascript:;" data-index="'+(b-1)+'" hidefocus="true" t="title::w_Alarm Out+'+b+'"></a>');a.translation()}0===webApp.AUDIO_OUT_NUMBER?p.$("[btn-for=onTalk]").remove():p.$("[btn-for=onTalk]").show(),0===webApp.AUDIO_IN_NUMBER?p.$("[btn-for=onVoice],[btn-for=onVoice1],[btn-for=onVoice2]").remove():1===webApp.AUDIO_IN_NUMBER?(p.$("[btn-for=onVoice]").show(),p.$("[btn-for=onVoice1],[btn-for=onVoice2]").remove()):2===webApp.AUDIO_IN_NUMBER&&(p.$("[btn-for=onVoice1],[btn-for=onVoice2]").show(),p.$("[btn-for=onVoice]").remove()),m.get("VideoInputCaps").done(function(a){a&&a.AutofocusPeak?p.$("[btn-for=onSetAF]").show():p.$("[btn-for=onSetAF]").remove()}),m.get("IntelliTracker").done(function(a){a&&a.Support?p.$("[btn-for=onTrackObject]").show():p.$("[btn-for=onTrackObject]").remove()}),m.get("PTZCaps").done(function(a){a&&a.SupportRegionFocus&&-1!==webApp.DeviceType.indexOf("SD")?p.$("[btn-for=onRegionFocus]").show():p.$("[btn-for=onRegionFocus]").remove(),a&&a.SDMeasureDistance&&a.SDMeasureDistance.Support?p.$("[btn-for=onMeasureDistance]").show():p.$("[btn-for=onMeasureDistance]").remove()}),webApp.GongAnDetect?(p.$("[btn-for=onZoneExpose]").show(),p.$("[sel-for=onChangeResolute]").show().change(),p.$("[btn-for=onCutResolute]").show()):(p.$("[btn-for=onZoneExpose]").remove(),p.$("[sel-for=onChangeResolute]").remove(),p.$("[btn-for=onCutResolute]").remove()),-1!==webApp.DeviceType.indexOf("SD")&&isEnable("is_show_mousecontrolptz")?p.$("[btn-for=onFigure]").show():p.$("[btn-for=onFigure]").remove();var c=-1!==webApp.DeviceType.indexOf("SD")&&isEnable("is_show_duck");c?(p.$("#b_duck").show(),p.$("#b_duckdrawn").show()):(p.$("#b_duck").remove(),p.$("#b_duckdrawn").remove()),-1!==webApp.DeviceType.indexOf("TPC")?(p.$("[btn-for=onSnap]").remove(),p.$("[btn-for=onSnap3]").remove(),p.$("[btn-for=onRecord]").remove(),webApp.CHANNEL_NUMBER>1?(p.$("[btn-for=onFixedFocus]").show(),p.$("[btn-for=onRecordAll]").show()):(p.$("[btn-for=onFixedFocus]").remove(),p.$("[btn-for=onRecordAll]").remove())):(p.$("[btn-for=onFixedFocus]").remove(),p.$("[btn-for=onRecordAll]").remove())},bind:function(){l.addEvent("WndSwitch",function(a){l.state("setAFEnable")&&l.state("setAFEnable",!1),l.state("partialEnlarged")&&l.state("partialEnlarged",!1),l.state("activeLocalFocus")&&l.state("activeLocalFocus",!1),l.state("enableMousePtz")&&l.state("enableMousePtz",!1),l.state("activePTZLocate")&&l.state("activePTZLocate",!1),l.state("activeManualLocate")&&l.state("activeManualLocate",!1),l.windowId=a,-1!=webApp.DeviceType.indexOf("-T")&&x.render(),t.ptzControl("changeChannel",l.windowId)}),l.addEvent("VideoAnalyzeConfig",function(a){var b=JSON.parse(a);l.state("activeLocalFocus")?y.render(b):l.state("activeManualLocate")?z.render(b):x.getTemper(b)})},render:function(){switch(a(window).off("resize"+q),a(window).on("resize"+q,f),s.videoBar("render",{showImage:!0,showPtz:n.chkAuthority("MPTZ")&&webApp.HasPtz&&-1!==webApp.DeviceType.indexOf("SD"),showRayRight:-1!==webApp.DeviceType.indexOf("TPC"),ptzOn:function(){p.$(".main-ptz-setting").show().ptzSetting("render"),p.$(".main-ptz-control").show(),f()},ptzOff:function(){p.$(".main-ptz-setting").hide(),p.$(".main-ptz-control").hide(),f()},imageOn:function(){p.$(".main-image-adjust").show(),f()},imageOff:function(){p.$(".main-image-adjust").hide(),f()},modeChange:f,zoomOn:function(){p.$(".main-zoom-focus").zoomFocus("render").show(),f()},zoomOff:function(){p.$(".main-zoom-focus").zoomFocus("leave").hide(),f()},wideviewOn:function(a){w._loginWideView(),a.isTrigger?l.ShowWideView(!0):(w.config[0].Enable=!0,k.ConfigManager.setConfig("WideViewControl",w.config).done(function(){l.ShowWideView(!0)}))},wideviewOff:function(a){a.isTrigger?l.ShowWideView(!1):(w.config[0].Enable=!1,k.ConfigManager.setConfig("WideViewControl",w.config).done(function(){l.ShowWideView(!1)}))},trackOn:function(){p._clearOCXFunction(),p.$(".main-trigger-track").triggerTrack("render").show(),f()},trackOff:function(){p.$(".main-trigger-track").triggerTrack("leave").hide(),f()},trackMode:function(){return p.$(".main-trigger-track").triggerTrack("getScreenMode")},fishEyeOn:function(){p._clearOCXFunction(),p.$(".main-fisheye").fishEye("render").show(),f()},fishEyeOff:function(){p.$(".main-fisheye").fishEye("leave").hide(),f()}}),s.videoBar("isCurrent","video_ptz")?(p.$(".main-ptz-setting").show().ptzSetting("render"),p.$(".main-ptz-control").show()):(p.$(".main-ptz-setting").hide(),p.$(".main-ptz-control").hide()),s.videoBar("isCurrent","video_zoomFocus")?p.$(".main-zoom-focus").zoomFocus("render").show():p.$(".main-zoom-focus").zoomFocus("leave").hide(),s.videoBar("isCurrent","video_image")?p.$(".main-image-adjust").show():p.$(".main-image-adjust").hide(),webApp.DisplayMode){case"Adaptive Window":s.videoBar("toggleCurrent","video_whRate",1);break;case"Original Rate":s.videoBar("toggleCurrent","video_whRate",0);break;case"Original Size":s.videoBar("isCurrent","video_original")?f():s.videoBar("toggleCurrent","video_original")}s.videoBar("isCurrent","video_triggerTrack")?p.$(".main-trigger-track").triggerTrack("render").show():p.$(".main-trigger-track").triggerTrack("leave").hide(),l.cover(r,function(a){l.SetModuleMode(0);var b=p.$(a?"a[btn-for=onConnectMain]":"a.last[btn-for^=onConnect]");if(p.$("a[btn-for^=onConnect]").removeClass("current"),b.length||(b=p.$("a[btn-for=onConnectMain]")),b.click(),s.videoBar("isCurrent","video_ivsRule",0)?l.SetIVSEnable(!0):s.videoBar("hasItem","video_triggerTrack")&&(l.SetIVSEnable(!0),l.ShowRuleState(!1)),s.videoBar("hasItem","video_triggerTrack")&&"Original Rate"==webApp.DisplayMode){var c=0!=p.$(".main-trigger-track").triggerTrack("getScreenMode")?2:1;l.SetShowMode(c)}s.videoBar("isCurrent","video_fisheye")&&p.$(".main-fisheye").fishEye("render"),m.is("OcxStabilization").done(function(a){a&&k.ConfigManager.getConfig("VideoInPreviewOptions").done(function(a){var b=a[0];3===b.SwitchMode?l.ControlVideoStable(!!b.DayOptions.ImageStabilizationEnable):5===b.SwitchMode?l.ControlVideoStable(!!b.NightOptions.ImageStabilizationEnable):0===b.SwitchMode?l.ControlVideoStable(!!b.NormalOptions.ImageStabilizationEnable):2===b.SwitchMode&&k.Global.getCurrentTime().done(function(a){var c=new Date(a),d=new Date(a);d.setHours(b.DayOptions.BeginHour,b.DayOptions.BeginMinute,b.DayOptions.BeginSecond);var e=new Date(a);e.setHours(b.DayOptions.EndHour,b.DayOptions.EndMinute,b.DayOptions.EndSecond),l.ControlVideoStable(c>d&&e>c?!!b.DayOptions.ImageStabilizationEnable:!!b.NightOptions.ImageStabilizationEnable)})})}),h()}),l.addEvent("ResolutionChangePreview",f),l.addEvent("StateChangedPreview",function(){f(),s.videoBar("isCurrent","video_ivsRule",0)&&l.SetIVSEnable(!0),s.videoBar("isCurrent","video_triggerTrack")&&p.$(".main-trigger-track").triggerTrack("render").show(),1!=l.stream?s.videoBar("hideItem","video_svac",!0):h(),s.videoBar("isCurrent","video_fisheye")&&p.$(".main-fisheye").fishEye("render")}),l.addEvent("DeviceReconnectedPreview",function(){s.videoBar("isCurrent","video_ivsRule",0)&&l.SetIVSEnable(!0)}),d(),w.render(),-1!=webApp.DeviceType.indexOf("TPC")&&-1!=webApp.DeviceType.indexOf("-T")&&x.render(),2===webApp.AUDIO_IN_NUMBER&&j()},leave:function(){a(window).off("resize"+q),s.videoBar("isCurrent","video_zoomFocus")&&p.$(".main-zoom-focus").zoomFocus("leave").hide(),s.videoBar("isCurrent","video_fisheye")&&p.$(".main-fisheye").fishEye("leave"),l.state("recordVideo")||l.close(),p._clearOCXFunction(),l.SetIVSEnable(!1),l.hide(),l.addEvent("ResolutionChangePreview",null),l.addEvent("StateChangedPreview",null),l.addEvent("DeviceReconnectedPreview",null),e(),w.leave(),-1!=webApp.DeviceType.indexOf("TPC")&&-1!=webApp.DeviceType.indexOf("-T")&&x.leave()},destory:function(){a(window).off("resize"+q),p.$("a[btn-for^=onConnect]").removeClass("current"),s.videoBar("isCurrent","video_zoomFocus")&&p.$(".main-zoom-focus").zoomFocus("leave").hide(),s.videoBar("destroy"),w.destory(),-1!=webApp.DeviceType.indexOf("TPC")&&-1!=webApp.DeviceType.indexOf("-T")&&x.destory()},_clearOCXFunction:function(){l.state("dualAudioEnable1")&&l.state("dualAudioEnable1",!1),l.state("dualAudioEnable14")&&l.state("dualAudioEnable14",!1),l.state("dualAudioEnable15")&&l.state("dualAudioEnable15",!1),l.state("setAFEnable")&&l.state("setAFEnable",!1),l.state("partialEnlarged")&&l.state("partialEnlarged",!1),l.state("activeLocalFocus")&&l.state("activeLocalFocus",!1),l.state("activeZoneExpose")&&l.state("activeZoneExpose",!1),l.state("enableMousePtz")&&l.state("enableMousePtz",!1),l.state("activePTZLocate")&&l.state("activePTZLocate",!1),l.state("activeManualLocate")&&l.state("activeManualLocate",!1),l.state("activeMeasureDistance")&&l.state("activeMeasureDistance",!1)},onConnectMain:function(){if(p._clearOCXFunction(),p.$("[btn-for=onConnectMain]").hasClass("current"))l.close(!0).done(function(a){a&&p.$("[btn-for=onConnectMain]").removeClass("current")});else{if(-1!=webApp.DeviceType.indexOf("TPC"))return i(1,webApp.CHANNEL_NUMBER),p.$("[btn-for=onConnectMain],[btn-for=onConnectExtra],[btn-for=onConnectExtra2]").removeClass("current last"),void p.$("[btn-for=onConnectMain]").addClass("current last");l.open(1).done(function(a){p.$("[btn-for=onConnectMain],[btn-for=onConnectExtra],[btn-for=onConnectExtra2]").removeClass("current last"),webApp.GongAnDetect&&p.$("[btn-for^=onConnect]").removeClass("current"),a&&p.$("[btn-for=onConnectMain]").addClass("current last")})}},onConnectExtra:function(){if(p._clearOCXFunction(),p.$("[btn-for=onConnectExtra]").hasClass("current"))l.close(!0).done(function(a){a&&p.$("[btn-for=onConnectExtra]").removeClass("current")});else{if(-1!=webApp.DeviceType.indexOf("TPC"))return i(2,webApp.CHANNEL_NUMBER),p.$("[btn-for=onConnectMain],[btn-for=onConnectExtra],[btn-for=onConnectExtra2]").removeClass("current last"),void p.$("[btn-for=onConnectExtra]").addClass("current last");l.open(2).done(function(a){p.$("[btn-for=onConnectMain],[btn-for=onConnectExtra],[btn-for=onConnectExtra2]").removeClass("current last"),webApp.GongAnDetect&&p.$("[btn-for^=onConnect]").removeClass("current"),a&&p.$("[btn-for=onConnectExtra]").addClass("current last")})}},onConnectExtra2:function(){if(p._clearOCXFunction(),p.$("[btn-for=onConnectExtra2]").hasClass("current"))l.close(!0).done(function(a){a&&p.$("[btn-for=onConnectExtra2]").removeClass("current")});else{if(-1!=webApp.DeviceType.indexOf("TPC"))return i(3,webApp.CHANNEL_NUMBER),p.$("[btn-for=onConnectMain],[btn-for=onConnectExtra],[btn-for=onConnectExtra2]").removeClass("current last"),void p.$("[btn-for=onConnectExtra2]").addClass("current last");l.open(3).done(function(a){p.$("[btn-for=onConnectMain],[btn-for=onConnectExtra],[btn-for=onConnectExtra2]").removeClass("current last"),webApp.GongAnDetect&&p.$("[btn-for^=onConnect]").removeClass("current"),a&&p.$("[btn-for=onConnectExtra2]").addClass("current last")})}},onConnectExtra3:function(){p._clearOCXFunction(),p.$("[btn-for=onConnectExtra3]").hasClass("current")?l.close(!0).done(function(a){a&&p.$("[btn-for=onConnectExtra3]").removeClass("current")}):l.open(2).done(function(a){p.$("[btn-for^=onConnect]").removeClass("current last"),a&&p.$("[btn-for=onConnectExtra3]").addClass("current last")})},onConnectExtra4:function(){p._clearOCXFunction(),p.$("[btn-for=onConnectExtra4]").hasClass("current")?l.close(!0).done(function(a){a&&p.$("[btn-for=onConnectExtra4]").removeClass("current")}):l.open(3).done(function(a){p.$("[btn-for^=onConnect]").removeClass("current last"),a&&p.$("[btn-for=onConnectExtra4]").addClass("current last")})},onTypeChange:function(){var a=n.getLoginInfo().logintype,b=p.$("#pre_type").val()-0;"ActiveDirectory"===a&&(b=13),"LDAP"===a&&(b=12),p.$("[btn-for=onConnectMain],[btn-for=onConnectExtra],[btn-for=onConnectExtra2]").removeClass("current"),p._clearOCXFunction(),l.state("recordVideo")&&l.state("recordVideo",!1),l.state("controlTalking")&&l.state("controlTalking",!1),l.setSocketType(b).done(function(){1===l.stream?p.onConnectMain():2===l.stream?p.onConnectExtra():3===l.stream?p.onConnectExtra2():4===l.stream?p.onConnectExtra3():5===l.stream&&p.onConnectExtra4()})},onSnap:function(){l.CatchPicture(6,"LiveSnapshot")},onSnap3:function(){l.CatchPictures(1,"LiveSnapshot")},onTalk:function(){l.controlTalking(p.$("[btn-for=onTalk]"))},onVoice:function(){l.dualAudioEnable(p.$("[btn-for=onVoice]"))},onVoice1:function(){l.dualAudioEnable(p.$("[btn-for=onVoice1]"))},onVoice2:function(){l.dualAudioEnable(p.$("[btn-for=onVoice2]"))},onSetAF:function(){l.setAFEnable(p.$("[btn-for=onSetAF]"))},onRecord:function(){l.recordVideo(p.$("[btn-for=onRecord]"))},onRecordAll:function(){l.recordAllVideo(p.$("[btn-for=onRecordAll]"))},onTrackObject:function(){l.activeManualLocate(p.$("[btn-for=onTrackObject]"))},onEnlarged:function(){!l.state("partialEnlarged")&&s.videoBar("isCurrent","video_triggerTrack")&&s.videoBar("toggleCurrent","video_triggerTrack"),l.partialEnlarged(p.$("[btn-for=onEnlarged]")).done(function(){l.state("partialEnlarged")?(s.videoBar("hideItem","video_ivsRule"),s.videoBar("isCurrent","video_ivsRule",0)&&l.SetIVSEnable(!1),s.videoBar("isCurrent","video_fisheye")&&s.videoBar("toggleCurrent","video_fisheye")):m.is("DSPConflict").done(function(a){a||(s.videoBar("hideItem","video_ivsRule",!1),s.videoBar("isCurrent","video_ivsRule",0)&&l.SetIVSEnable(!0))})})},onRegionFocus:function(){l.activeLocalFocus(p.$("[btn-for=onRegionFocus]"))},onZoneExpose:function(){l.activeZoneExpose(p.$("[btn-for=onZoneExpose]"))},onDuckColorClick1:function(){l.messageMarkColorClick(1)},onDuckColorClick2:function(){l.messageMarkColorClick(2)},onDuckColorClick3:function(){l.messageMarkColorClick(3)},onDuckDrawnClick:function(){l.messageMarkDuckDrawnClick()},onDuckClick:function(){l.messageMarkDuckClick(p.$("[btn-for=onDuckClick]"))},onFigure:function(){l.enableMousePtz(p.$("[btn-for=onFigure]"))},onMeasureDistance:function(){l.activeMeasureDistance(p.$("[btn-for=onMeasureDistance]"))},onFixedFocus:function(){k.ThermographyManager.fixFocus(0,[0,1],0)},onCutResolute:function(){l.cutResolute(p.$("[btn-for=onCutResolute]"))},onChangeResolute:function(b){var c=a(b.target).val(),d=c.split("x");l.SetCalWndSize(d[0]-0,d[1]-0)}});var u=null,v=!1,w={support:!1,login:!1,init:function(){m.get("WideViewControl").done(function(a){a&&a[0]&&a[0].Support&&(w.support=!0,w._loginWideView(),w.render())})},render:function(){w.support&&k.ConfigManager.getConfig("WideViewControl").done(function(a){w.config=a,(w.config&&w.config[0].Enable&&""!==l.type)!==s.videoBar("isCurrent","video_wideview")&&s.videoBar("toggleCurrent","video_wideview")})},leave:function(){w.support&&s.videoBar("isCurrent","video_wideview")&&s.videoBar("toggleCurrent","video_wideview")},destory:function(){w.support&&w.login&&l.LogoutWideView()},_loginWideView:function(){w.login!==!0&&l.LoginWideView(l.ip,l.port,n.getLoginInfo().username,n.getLoginInfo().password,0).done(function(b){if(b){var c={1:tl("Password is error."),2:tl("The user is not exited."),3:tl("Login is overtime."),4:tl("The user has logined."),5:tl("The user is locked."),6:tl("The user is invalid."),7:tl("System is busying."),8:tl("Sub Connect Fail"),9:tl("Main Connect Fail"),10:tl("the number of connection is maximal.request is refused!")};l.hide(),a.alert(tl("WideView")+c[b]||tl("Login control failure!"),function(){l.cover(p.$(".main-video"))})}else w.login=!0})}},x={render:function(){l.clearShape(l.containerId,l.shapeId),l.creatShape("ReSpot","green")},leave:function(){l.DeleteAllIntelShape(l.containerId)},destory:function(){l.DeleteAllIntelShape(l.containerId)},getTemper:function(a){if(a.EventParam.ShapeData){var b=a.EventParam.ShapeData[0];k.RadiometryManager.getRandomPointTemper(b,l.windowId).done(function(a){var b=a.params.pointTempInfo,c="Centigrade"==a.params.TemperatureUnit?"°C":"°F";b=b.TemperAver.round(2)+c,l.ResetOneIntelShapeData(l.shapeId,b)})}}},y={render:function(a){if(a.ShapeData&&a.ShapeData.RectangleShape){var b=a.ShapeData.RectangleShape,c=[b[0][0],b[0][1],b[1][0],b[1][1]];-1!==webApp.DeviceType.indexOf("SD")?k.PTZ.focusRegion("InROIRegion",c,l.windowId):k.DevVideoInput.focusRegion("InROIRegion",c,l.windowId),l.state("activeLocalFocus",!1)}},leave:function(){l.clearShape(l.containerId,l.shapeId),l.creatShape("ReSpot","green")}},z={render:function(a){if(a.ShapeData&&a.ShapeData.RectangleShape){var b=a.ShapeData.RectangleShape,c=[b[0][0],b[0][1],b[1][0],b[1][1]];k.DevIntelliTracker.trackObject({ObjectID:-1,BoundingBox:c},l.windowId),l.state("activeManualLocate",!1)}},leave:function(){l.clearShape(l.containerId,l.shapeId),l.creatShape("ReSpot","green")}}})}(jQuery);