(()=>{"undefined"!=typeof browser&&void 0!==browser.sidebarAction&&browser.browserAction.onClicked.addListener((function(){browser.sidebarAction.toggle()})),importScripts("scripts/constants.js"),chrome.sidePanel.setPanelBehavior({openPanelOnActionClick:!0}).catch((e=>console.error(e))),chrome.runtime.onMessage.addListener((function(e){return"bckreload"===e.name&&y(),!0}));var e=chrome.i18n.getMessage("firsttext");chrome.contextMenus&&chrome.contextMenus.removeAll((function(){}));var t=chrome.i18n.getMessage("sharemenusharetitle"),n=chrome.i18n.getMessage("sharemenuwelcomeguidetitle"),s=chrome.i18n.getMessage("sharemenutellafriend"),o=chrome.i18n.getMessage("sharemenusendatweet"),a=chrome.i18n.getMessage("sharemenupostonfacebook"),r=chrome.i18n.getMessage("sharemenuratetitle"),c=chrome.i18n.getMessage("sharemenudonatetitle"),i=chrome.i18n.getMessage("desremyoutube"),m=chrome.i18n.getMessage("sharemenupostonweibo"),u=chrome.i18n.getMessage("sharemenupostonvkontakte"),g=chrome.i18n.getMessage("sharemenupostonwhatsapp"),l=chrome.i18n.getMessage("sharemenupostonqq");function h(e,t,n,s){var o,a={title:e,type:"normal",id:t,contexts:b};""!=s&&(a=Object.assign({},a,{parentId:s})),""!=n&&(o=Object.assign({},a,{icons:n}));try{return chrome.contextMenus.create(o)}catch(e){return chrome.contextMenus.create(a)}}var d=!1;if(chrome.contextMenus&&0==d){d=!0;var p,b=["browser_action"];h(n,"totlguideemenu",{16:"images/IconGuide.png",32:"images/IconGuide@2x.png"}),h(c,"totldevelopmenu",{16:"images/IconDonate.png",32:"images/IconDonate@2x.png"}),h(r,"totlratemenu",{16:"images/IconStar.png",32:"images/IconStar@2x.png"}),p=h(t,"totlsharemenu",{16:"images/IconShare.png",32:"images/IconShare@2x.png"}),h(s,"totlshareemail",{16:"images/IconEmail.png",32:"images/IconEmail@2x.png"},p),chrome.contextMenus.create({title:"",type:"separator",id:"totlsepartorshare",contexts:b,parentId:p});var v=chrome.i18n.getUILanguage();v.includes("zh")?(h(m,"totlshareweibo",{16:"images/IconWeibo.png",32:"images/IconWeibo@2x.png"},p),h(l,"totlshareqq",{16:"images/IconQQ.png",32:"images/IconQQ@2x.png"},p)):v.includes("ru")?(h(u,"totlsharevkontakte",{16:"images/IconVkontakte.png",32:"images/IconVkontakte@2x.png"},p),h(a,"totlsharefacebook",{16:"images/IconFacebook.png",32:"images/IconFacebook@2x.png"},p),h(g,"totlsharewhatsapp",{16:"images/IconWhatsApp.png",32:"images/IconWhatsApp@2x.png"},p),h(o,"totlsharetwitter",{16:"images/IconTwitter.png",32:"images/IconTwitter@2x.png"},p)):(h(a,"totlsharefacebook",{16:"images/IconFacebook.png",32:"images/IconFacebook@2x.png"},p),h(g,"totlsharewhatsapp",{16:"images/IconWhatsApp.png",32:"images/IconWhatsApp@2x.png"},p),h(o,"totlsharetwitter",{16:"images/IconTwitter.png",32:"images/IconTwitter@2x.png"},p)),chrome.contextMenus.create({title:"",type:"separator",id:"totlsepartor",contexts:b}),h(i,"totlsubscribe",{16:"images/IconYouTube.png",32:"images/IconYouTube@2x.png"}),chrome.contextMenus.onClicked.addListener((function(t){if("totlguideemenu"==t.menuItemId)chrome.tabs.create({url:linkguide,active:!0});else if("totldevelopmenu"==t.menuItemId)chrome.tabs.create({url:linkdonate,active:!0});else if("totlratemenu"==t.menuItemId)chrome.tabs.create({url:writereview,active:!0});else if("totlshareemail"==t.menuItemId){var n="mailto:your@email.com?subject="+chrome.i18n.getMessage("sharetexta")+"&body="+chrome.i18n.getMessage("sharetextb")+" "+linkproduct;chrome.tabs.create({url:n,active:!0})}else if("totlsharetwitter"==t.menuItemId){var s=encodeURIComponent(chrome.i18n.getMessage("sharetextd")+" "+linkproduct);chrome.tabs.create({url:"https://twitter.com/intent/tweet?text="+s,active:!0})}else if("totlsharefacebook"==t.menuItemId)chrome.tabs.create({url:"https://www.facebook.com/sharer/sharer.php?u="+linkproduct,active:!0});else if("totlsubscribe"==t.menuItemId)chrome.tabs.create({url:linkyoutube,active:!0});else if("totlshareqq"==t.menuItemId)chrome.tabs.create({url:"https://connect.qq.com/widget/shareqq/index.html?url="+encodeURIComponent(linkproduct)+"&title="+encodeURIComponent(chrome.i18n.getMessage("sharetextd")),active:!0});else if("totlshareweibo"==t.menuItemId)chrome.tabs.create({url:"https://service.weibo.com/share/share.php?url="+linkproduct+"&title="+encodeURIComponent(chrome.i18n.getMessage("sharetextd")),active:!0});else if("totlsharevkontakte"==t.menuItemId)chrome.tabs.create({url:"https://vk.com/share.php?url="+linkproduct,active:!0});else if("totlsharewhatsapp"==t.menuItemId)chrome.tabs.create({url:"https://api.whatsapp.com/send?text="+chrome.i18n.getMessage("sharetextd")+"%0a"+linkproduct,active:!0});else if("snpage"==t.menuItemId){var o=t.selectionText;chrome.storage.sync.get(["txtvalue"],(function(t){var n=t.txtvalue;null==n&&(n=e);var s=n+" "+o;chrome.storage.sync.set({txtvalue:s})}))}}))}chrome.storage.sync.get(["contextmenus"],(function(e){e.contextmenus,e.contextmenus&&f()}));var I=null,k=!1,x=[],w=null,M=chrome.i18n.getMessage("pagetitle");function f(){chrome.contextMenus&&0==k&&(k=!0,w=["selection"],I=chrome.contextMenus.create({title:M,type:"normal",id:"snpage",contexts:w}),x.push(I))}function V(){null!=w&&chrome.contextMenus.remove("snpage"),w=null,k=!1}function y(){chrome.storage.sync.get(["firstRun"],(function(e){if("false"!=e.firstRun&&0!=e.firstRun){chrome.tabs.create({url:linkwelcome});var t=(new Date).getTime();chrome.storage.sync.set({firstRun:!1,version:"1.0",firstDate:t})}}))}chrome.storage.onChanged.addListener((function(e){var t,n,s;n=f,s=V,(t=e)["contextmenus"]&&(1==t.contextmenus.newValue?n():s()),e.txtvalue&&e.txtvalue.newValue&&chrome.runtime.sendMessage({msg:"setnotetext",value:e.txtvalue.newValue}),e.counter&&chrome.runtime.sendMessage({msg:"setcounter",value:e.counter.newValue}),e.copy&&chrome.runtime.sendMessage({msg:"setcopy",value:e.copy.newValue}),e.speech&&chrome.runtime.sendMessage({msg:"setspeech",value:e.speech.newValue}),e.voices&&chrome.runtime.sendMessage({msg:"setvoices",value:e.voices.newValue}),e.fontsize&&chrome.runtime.sendMessage({msg:"setfontsize",value:e.fontsize.newValue}),e.lineheight&&chrome.runtime.sendMessage({msg:"setlineheight",value:e.lineheight.newValue}),e.colorlight&&chrome.runtime.sendMessage({msg:"setcolorlight",value:e.colorlight.newValue}),e.colordark&&chrome.runtime.sendMessage({msg:"setcolordark",value:e.colordark.newValue}),e.backgroundlight&&chrome.runtime.sendMessage({msg:"setbackgroundlight",value:e.backgroundlight.newValue}),e.backgrounddark&&chrome.runtime.sendMessage({msg:"setbackgrounddark",value:e.backgrounddark.newValue}),e.backgroundcolor&&chrome.runtime.sendMessage({msg:"setbackgroundcolor",value:e.backgroundcolor.newValue}),e.backgroundimage&&chrome.runtime.sendMessage({msg:"setbackgroundimage",value:e.backgroundimage.newValue}),e.backgroundsource&&chrome.runtime.sendMessage({msg:"setbackgroundsource",value:e.backgroundsource.newValue}),e.backgroundsize&&chrome.runtime.sendMessage({msg:"setbackgroundsize",value:e.backgroundsize.newValue}),e.print&&chrome.runtime.sendMessage({msg:"setprint",value:e.print.newValue})})),chrome.runtime.setUninstallURL(linkuninstall),chrome.runtime.onInstalled.addListener((function(){y()}))})();
//# sourceMappingURL=background.js.map