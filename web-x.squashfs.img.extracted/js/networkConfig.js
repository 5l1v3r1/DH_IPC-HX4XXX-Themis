!function(a){define(function(require,a,b){b.exports=require("jsCore/pageTab"),b.exports.prototype.Net_P2P=!!isEnable("is_show_T2UServer")}),define("Net_Network",function(require,b,c){function d(b,c){var c=c.split(".");return a.map(b.split("."),function(a,b){return a&c[b]}).join(".")}function e(b){function c(a){return(a+256).toString(2).substring(1)}var d=a.map(b.split("."),function(a){return c(a-0)}).join("");return-1===d.indexOf("01")}function f(){var b=g();b&&(a(window).off("unload"),M.Reload(b+":"+location.port))}function g(){for(var a=location.hostname.replace(/(^\[)|(\]$)/g,""),b="",c=0,d=B.length;d>c;c++){var e=B[c];if(G[e.Name].IPAddress===a&&G[e.Name].IPAddress!=D[e.Name].IPAddress){b=D[e.Name].IPAddress;break}if(K.v6ToCanonicalForm(H[e.Name].IPAddress)===K.v6ToCanonicalForm(a)&&K.v6ToCanonicalForm(H[e.Name].IPAddress)!==K.v6ToCanonicalForm(E[e.Name].IPAddress)){b="["+E[e.Name].IPAddress+"]";break}}if(!b){var f=D.DefaultInterface;G[f].IPAddress!==D[f].IPAddress&&(b=L.ipv6(a)?"["+a+"]":a)}return b}function h(a){var b=/(^(::)$)|(^(:(:[0]{1,4}){1,7})$)|(^(([0]{1,4}:){1,7}([0]{1,4}))$)|(^(ff[a-f\d]{2}))/;return!b.test(a)}var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I=require("jsCore/pageBase"),J=require("jsCore/rpc"),K=require("common/common"),L=K.Check,M=require("jsCore/plugin");c.exports=I.extend({init:function(){var b=this;i=b.$("#NN_hostname").textfield({success:a.noop}),j=b.$("[sel-for=onSelectCard]"),k=b.$("[btn-for=onSetDefault]"),l=b.$("[NN_mode]").click(function(c){var d=a(c.target),e=d.attr("NN_mode"),f=d.closest("div.ui-form-item").attr("ipver");"IPv6"===f?(b.disabled(t,"dhcp"===e),b.disabled(u,"dhcp"===e),b.disabled(v,"dhcp"===e)):(b.disabled(o.find("input"),"dhcp"===e),b.disabled(p.find("input"),"dhcp"===e),b.disabled(q.find("input"),"dhcp"===e))}),m=b.$("#NN_macadd input"),n=b.$("[sel-for=onIPVersionChange]"),o=b.$("#NN_IPV4_IP").ipfield({type:"ip",error:function(a,c){"prevent"===c.type?b.tip("warning","ipv4_127"):"firstIPError"==c.type?b.tip("warning","w_ipv4_range"):"lastIPError"==c.type&&b.tip("warning","w_ipv4_range_last")}}),p=b.$("#NN_IPV4_SM").ipfield({type:"mask"}),q=b.$("#NN_IPV4_DG").ipfield({type:"ip",error:function(a,c){"prevent"===c.type?b.tip("warning","ipv4_127"):"firstIPError"==c.type?b.tip("warning","w_ipv4_range"):"lastIPError"==c.type&&b.tip("warning","w_ipv4_range_last")}}),r=b.$("#NN_IPV4_DNS1").ipfield({type:"ip",error:function(a,c){"prevent"===c.type?b.tip("warning","ipv4_127"):"firstIPError"==c.type?b.tip("warning","w_ipv4_range"):"lastIPError"==c.type&&b.tip("warning","w_ipv4_range_last")}}),s=b.$("#NN_IPV4_DNS2").ipfield({type:"ip",error:function(a,c){"prevent"===c.type&&b.tip("warning","ipv4_127")}}),t=b.$("#NN_IPV6_IP").textfield(),u=b.$("#NN_IPV6_IPEx").numberfield({max:128,min:1,allowDecimal:!1,allowNegative:!1}),v=b.$("#NN_IPV6_DG").textfield(),w=b.$("#NN_IPV6_DNS1").textfield(),x=b.$("#NN_IPV6_DNS2").textfield(),y=b.$("#NN_EnableARP"),z=a.validator([{element:i,check:[L.alphaNumLine,L.require],errorMsg:[tl("w_BadstringServerName"),tl("Can not be null")],events:["keyup","keyup"]},{element:t,check:[L.ipv6ornull,h],errorMsg:[tl("Bad format IPV6 address ,Gateway or DNS server !"),tl("Bad format IPV6 address ,Gateway or DNS server !")],events:"blur",errorElem:".u-input-error"},{element:v,check:[L.ipv6ornull,h],errorMsg:[tl("Bad format IPV6 address ,Gateway or DNS server !"),tl("Bad format IPV6 address ,Gateway or DNS server !")],events:"blur"},{element:w,check:[L.require,L.ipv6],errorMsg:[tl("Can not be null"),tl("Bad format IPV6 address ,Gateway or DNS server !")],events:["keyup","blur"]},{element:x,check:[L.require,L.ipv6],errorMsg:[tl("Can not be null"),tl("Bad format IPV6 address ,Gateway or DNS server !")],events:["keyup","blur"]}]),b.render()},render:function(){var b=this;J.NetApp.getNetInterfaces().done(function(c){B=a.grep(c,function(a){return"3G"!==a.Name}),b._getConfig()}).fail(function(){b.disabled("[btn-for=onSave]",!0),b.tip("error","Operateingfailure")})},_getConfig:function(b){var c=this;J.ConfigManager.getConfig(["PPPoE","Network","IPv6","ARP&Ping"]).done(function(d){C=d[0].result&&d[0].params.table,D=d[1].params.table,E=d[2].params.table,F=d[3].params.table,G=a.extend(!0,{},D),H=a.extend(!0,{},E),c._renderElement(b),c.disabled("[btn-for=onSave]",!1),b&&c.tip("success","Operateingsuccess")}).fail(function(){c.disabled("[btn-for=onSave]",!0),c.tip("error","Operateingfailure")})},_renderElement:function(b){var c=this;c.disabled("[NN_mode],div[ipver] input,[btn-for=onDefault],[btn-for=onSetDefault]",!(!C||!C.Enable)),i.textfield("value",D.Hostname),y.prop("checked",F.SettingIP);var d=j.val();j.empty(),a.each(B,function(a,b){var c=tl("eth0"===b.Name?"w_Lineate":"w_Wireless");b.Name===D.DefaultInterface&&(c+="("+tl("DEFAULT")+")"),j.append("<option value="+b.Name+">"+c+"</option>")}),B.length>1?k.show():k.hide(),b?j.val(d):(j.val(D.DefaultInterface),n.val(/:/.test(location.hostname)?"IPv6":"IPv4").change()),A=null,j.change()},onSave:function(){var b=this;if(z.isInvalid())return b.tip("warning",z.errors()[0].errorMsg);D.Hostname=i.textfield("value"),F.SettingIP=y.prop("checked"),j.change();for(var c=0;c<B.length;c++){if(!e(D[B[c].Name].SubnetMask))return b.tip("warning","w_subnetAddressesWrong");var g=d(D[B[c].Name].IPAddress,D[B[c].Name].SubnetMask),h=d(D[B[c].Name].DefaultGateway,D[B[c].Name].SubnetMask);if(g!==h)return b.tip("warning","w_Not in the same network segment!");for(var k=c+1;k<B.length;k++)if(D[B[c].Name].IPAddress===D[B[k].Name].IPAddress||E[B[c].Name].IPAddress===E[B[k].Name].IPAddress&&E[B[c].Name].IPAddress)return b.tip("warning","w_IP cannot be the same!")}var l=setTimeout(f,3e3);return J.ConfigManager.setConfig(["IPv6","ARP&Ping","Network"],[E,F,D]).done(function(c){isDDNS()?a.each(B,function(a,b){return G[b.Name].IPAddress!==D[b.Name].IPAddress||G[b.Name].DhcpEnable!==D[b.Name].DhcpEnable||H[b.Name].IPAddress!==E[b.Name].IPAddress||H[b.Name].DhcpEnable!==E[b.Name].DhcpEnable?(location.href="http://"+getDDNSMessage().ddnshost,!1):void 0}):K.chkMutilCallRet(c)?(b.tip("success","Succeed in saving configure"),f(),G=a.extend(!0,{},D),H=a.extend(!0,{},E)):b.tip("error","Saving failure"),clearTimeout(l)}),!1},onRefresh:function(){return this._getConfig(!0),!1},onDefault:function(){var a=this;return J.ConfigManager.getDefault(["Network","IPv6","ARP&Ping"]).done(function(b){D=b[0].params.table,E=b[1].params.table,F=b[2].params.table,a._renderElement(),a.disabled("[btn-for=onSave]",!1),a.tip("success","Defaultsuccess")}).fail(function(){a.disabled("[btn-for=onSave]",!0),a.tip("error","Defaultfailure")}),!1},onIPVersionChange:function(a){var b=this,c=b.$(a.target).val();return b.$("[ipver]").hide(),b.$("[ipver="+c+"]").show(),!1},onSelectCard:function(b){var c=this,d=a(b.target);if(A){if(z.isInvalid())return d.val(A),c.tip("warning",z.errors()[0].errorMsg);D[A].DhcpEnable="dhcp"===c.$("[name=NN_v4mode]:checked").attr("NN_mode")?!0:!1,D[A].IPAddress=o.ipfield("value"),D[A].SubnetMask=p.ipfield("value"),D[A].DefaultGateway=q.ipfield("value"),D[A].DnsServers[0]=r.ipfield("value"),D[A].DnsServers[1]=s.ipfield("value"),E[A].DhcpEnable="dhcp"===c.$("[name=NN_v6mode]:checked").attr("NN_mode")?!0:!1,E[A].IPAddress=t.textfield("value"),E[A].Prefix=u.numberfield("value"),E[A].DefaultGateway=v.textfield("value"),E[A].DnsServers[0]=w.textfield("value"),E[A].DnsServers[1]=x.textfield("value")}A=d.val();var e=D[A].PhysicalAddress.split(":");m.each(function(a,b){b.value=e[a]});var f=c.$("[name=NN_v4mode][NN_mode="+(D[A].DhcpEnable?"dhcp":"static")+"]").prop("checked",!0);!(C&&C.Enable)&&f.click(),o.ipfield("value",D[A].IPAddress),p.ipfield("value",D[A].SubnetMask),q.ipfield("value",D[A].DefaultGateway),r.ipfield("value",D[A].DnsServers[0]),s.ipfield("value",D[A].DnsServers[1]);var g=c.$("[name=NN_v6mode][NN_mode="+(E[A].DhcpEnable?"dhcp":"static")+"]").prop("checked",!0);return!(C&&C.Enable)&&g.click(),c.$("#NN_linkadd").text(E[A].LinkLocalAddress),t.textfield("value",E[A].IPAddress),u.numberfield("value",E[A].Prefix),v.textfield("value",E[A].DefaultGateway),w.textfield("value",E[A].DnsServers[0]),x.textfield("value",E[A].DnsServers[1]),z.validate(),!1},onSetDefault:function(){var a=this;return G.DefaultInterface=j.val(),J.ConfigManager.setConfig("Network",G).done(function(b){K.chkMutilCallRet(b)?(D.DefaultInterface=G.DefaultInterface,a._renderElement(),a.tip("success","Succeed in saving configure"),webApp.isNeedReboot(b)&&webApp.reboot("The configration take effect! The device is restarting now,please reconnect later...")):a.tip("error","Saving failure")}),!1}})}),define("Net_P2P",function(require,a,b){var c,d=require("jsCore/rpc"),e=require("jsCore/pageBase");b.exports=e.extend({init:function(){var a=this;d.MagicBox.getSerialNo().done(function(b){b&&(a.$("#NP_SN").text(b),a.$("#NP_QR").html(create_qrcode(b)))}),a.render()},render:function(){this._getConfig()},_getConfig:function(a){var b=this;d.ConfigManager.getConfig("T2UServer").done(function(d){c=d,b.$("#NP_T2UEnable").prop("checked",c.Enable),b.disabled("[btn-for=onSave]",!1),a&&b.tip("success","Operateingsuccess")}).fail(function(){b.disabled("[btn-for=onSave]",!0),b.tip("error","Operateingfailure")}),b._getStauts()},_getStauts:function(){var a=this;d.Nat.getTurnStatus().done(function(b){b.IsTurnChannel?a.$("#NP_Status").text(tl("w_online")).addClass("p2p_online"):a.$("#NP_Status").text(tl("w_not_online")).removeClass("p2p_online")})},onSave:function(){var a=this;return c.Enable=a.$("#NP_T2UEnable").prop("checked"),d.ConfigManager.setConfig("T2UServer",c).done(function(){a.tip("success","Succeed in saving configure")}).fail(function(){a.tip("error","Saving failure")}),!1},onRefresh:function(){return this._getConfig(!0),!1},onDefault:function(){var a=this;return d.ConfigManager.getDefault("T2UServer").done(function(b){c=b,a.$("#NP_T2UEnable").prop("checked",c.Enable),a.disabled("[btn-for=onSave]",!1),a.tip("success","Defaultsuccess")}).fail(function(){a.disabled("[btn-for=onSave]",!0),a.tip("error","Defaultfailure")}),a._getStauts(),!1}})})}(jQuery);