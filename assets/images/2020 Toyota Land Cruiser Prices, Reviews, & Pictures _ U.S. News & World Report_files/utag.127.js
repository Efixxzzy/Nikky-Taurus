//tealium universal tag - utag.127 ut4.0.201811081658, Copyright 2018 Tealium.com Inc. All Rights Reserved.
(function(){if(window.BOOMR&&window.BOOMR.version){return;}
var dom,doc,where,iframe=document.createElement("iframe"),win=window;function boomerangSaveLoadTime(e){win.BOOMR_onload=(e&&e.timeStamp)||new Date().getTime();}
if(win.addEventListener){win.addEventListener("load",boomerangSaveLoadTime,false);}else if(win.attachEvent){win.attachEvent("onload",boomerangSaveLoadTime);}
iframe.src="javascript:void(0)";iframe.title="";iframe.role="presentation";(iframe.frameElement||iframe).style.cssText="width:0;height:0;border:0;display:none;";where=document.getElementsByTagName("script")[0];where.parentNode.insertBefore(iframe,where);try{doc=iframe.contentWindow.document;}catch(e){dom=document.domain;iframe.src="javascript:var d=document.open();d.domain='"+dom+"';void(0);";doc=iframe.contentWindow.document;}
doc.open()._l=function(){var js=this.createElement("script");if(dom){this.domain=dom;}
js.id="boomr-if-as";js.src="//c.go-mpulse.net/boomerang/"+
"VV9FZ-N5VWJ-J2FX4-8SJPK-T26TC";BOOMR_lstart=new Date().getTime();this.body.appendChild(js);};doc.write('<body onload="document._l();">');doc.close();})();try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;u.ev={'view':1,"link":1};u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||typeof u.ev.all!="undefined"){var c,d,e,f,g;u.data={"timing_event":"","pggp_name":""};g={};for(d in utag.loader.GV(u.map)){if(typeof b[d]!="undefined"&&b[d]!=""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(/^(timing_event|pggp_name)$/.test(e[f])){u.data[e[f]]=b[d];}else{g[e[f]]=b[d];}}}}
if(u.data.timing_event==="start"&&typeof BOOMR!=="undefined"){u.req_timer=BOOMR.requestStart(u.data.pggp_name);}
if(u.data.timing_event==="stop"&&typeof u.req_timer!=="undefined"){if(typeof BOOMR!=="undefined"){for(var i in utag.loader.GV(g)){BOOMR.addVar(i,g[i]);}}
u.req_timer.loaded();}}};utag.o[loader].loader.LOAD(id);})('127','usnews.main');}catch(e){utag.DB(e);}
