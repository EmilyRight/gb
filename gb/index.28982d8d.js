var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},o=i.parcelRequire052b;null==o&&((o=function(i){if(i in e)return e[i].exports;if(i in t){var o=t[i];delete t[i];var n={id:i,exports:{}};return e[i]=n,o.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(i,e){t[i]=e},i.parcelRequire052b=o),(0,o.register)("2Yl7J",function(i,e){!function(t,o){var n="function",a="undefined",r="object",s="string",l="major",d="model",c="name",b="type",u="vendor",w="version",m="architecture",h="console",p="mobile",f="tablet",v="smarttv",g="wearable",y="embedded",x="Amazon",k="Apple",E="ASUS",A="BlackBerry",S="Browser",_="Chrome",C="Firefox",T="Google",L="Huawei",z="Microsoft",q="Motorola",O="Opera",N="Samsung",H="Sharp",P="Sony",D="Xiaomi",M="Zebra",U="Facebook",B="Chromium OS",R="Mac OS",j=function(i,e){var t={};for(var o in i)e[o]&&e[o].length%2==0?t[o]=e[o].concat(i[o]):t[o]=i[o];return t},I=function(i){for(var e={},t=0;t<i.length;t++)e[i[t].toUpperCase()]=i[t];return e},V=function(i,e){return typeof i===s&&-1!==G(e).indexOf(G(i))},G=function(i){return i.toLowerCase()},W=function(i,e){if(typeof i===s)return i=i.replace(/^\s\s*/,""),typeof e===a?i:i.substring(0,500)},$=function(i,e){for(var t,a,s,l,d,c,b=0;b<e.length&&!d;){var u=e[b],w=e[b+1];for(t=a=0;t<u.length&&!d&&u[t];)if(d=u[t++].exec(i))for(s=0;s<w.length;s++)c=d[++a],typeof(l=w[s])===r&&l.length>0?2===l.length?typeof l[1]==n?this[l[0]]=l[1].call(this,c):this[l[0]]=l[1]:3===l.length?typeof l[1]!==n||l[1].exec&&l[1].test?this[l[0]]=c?c.replace(l[1],l[2]):void 0:this[l[0]]=c?l[1].call(this,c,l[2]):void 0:4===l.length&&(this[l[0]]=c?l[3].call(this,c.replace(l[1],l[2])):void 0):this[l]=c||o;b+=2}},F=function(i,e){for(var t in e)if(typeof e[t]===r&&e[t].length>0){for(var n=0;n<e[t].length;n++)if(V(e[t][n],i))return"?"===t?o:t}else if(V(e[t],i))return"?"===t?o:t;return i},Y={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Z={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[w,[c,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[w,[c,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[c,w],[/opios[\/ ]+([\w\.]+)/i],[w,[c,O+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[w,[c,O+" GX"]],[/\bopr\/([\w\.]+)/i],[w,[c,O]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[w,[c,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[c,w],[/\bddg\/([\w\.]+)/i],[w,[c,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[w,[c,"UC"+S]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[w,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[w,[c,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[w,[c,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[w,[c,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[w,[c,"Smart Lenovo "+S]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure "+S],w],[/\bfocus\/([\w\.]+)/i],[w,[c,C+" Focus"]],[/\bopt\/([\w\.]+)/i],[w,[c,O+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[w,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[w,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[w,[c,O+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[w,[c,"MIUI "+S]],[/fxios\/([-\w\.]+)/i],[w,[c,C]],[/\bqihu|(qi?ho?o?|360)browser/i],[[c,"360 "+S]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 "+S],w],[/samsungbrowser\/([\w\.]+)/i],[w,[c,N+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],w],[/metasr[\/ ]?([\d\.]+)/i],[w,[c,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[c,"Sogou Mobile"],w],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[c,w],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[c],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[c,U],w],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[c,w],[/\bgsa\/([\w\.]+) .*safari\//i],[w,[c,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[w,[c,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[w,[c,_+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[c,_+" WebView"],w],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[w,[c,"Android "+S]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[c,w],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[w,[c,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[w,c],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[c,[w,F,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[c,w],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[c,"Netscape"],w],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[w,[c,C+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[c,w],[/(cobalt)\/([\w\.]+)/i],[c,[w,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,G]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[m,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[m,"armhf"]],[/windows (ce|mobile); ppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[m,/ower/,"",G]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[m,G]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[u,N],[b,f]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[d,[u,N],[b,p]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[d,[u,k],[b,p]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[d,[u,k],[b,f]],[/(macintosh);/i],[d,[u,k]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[d,[u,H],[b,p]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[d,[u,L],[b,f]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[d,[u,L],[b,p]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[d,/_/g," "],[u,D],[b,p]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[d,/_/g," "],[u,D],[b,f]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[d,[u,"OPPO"],[b,p]],[/\b(opd2\d{3}a?) bui/i],[d,[u,"OPPO"],[b,f]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[d,[u,"Vivo"],[b,p]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[d,[u,"Realme"],[b,p]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[d,[u,q],[b,p]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[d,[u,q],[b,f]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[u,"LG"],[b,f]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[d,[u,"LG"],[b,p]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[d,[u,"Lenovo"],[b,f]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[d,/_/g," "],[u,"Nokia"],[b,p]],[/(pixel c)\b/i],[d,[u,T],[b,f]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[d,[u,T],[b,p]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[u,P],[b,p]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[d,"Xperia Tablet"],[u,P],[b,f]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[d,[u,"OnePlus"],[b,p]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[d,[u,x],[b,f]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[d,/(.+)/g,"Fire Phone $1"],[u,x],[b,p]],[/(playbook);[-\w\),; ]+(rim)/i],[d,u,[b,f]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[d,[u,A],[b,p]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[d,[u,E],[b,f]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[d,[u,E],[b,p]],[/(nexus 9)/i],[d,[u,"HTC"],[b,f]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[u,[d,/_/g," "],[b,p]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[d,[u,"Acer"],[b,f]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[d,[u,"Meizu"],[b,p]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[d,[u,"Ulefone"],[b,p]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[u,d,[b,p]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[u,d,[b,f]],[/(surface duo)/i],[d,[u,z],[b,f]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[d,[u,"Fairphone"],[b,p]],[/(u304aa)/i],[d,[u,"AT&T"],[b,p]],[/\bsie-(\w*)/i],[d,[u,"Siemens"],[b,p]],[/\b(rct\w+) b/i],[d,[u,"RCA"],[b,f]],[/\b(venue[\d ]{2,7}) b/i],[d,[u,"Dell"],[b,f]],[/\b(q(?:mv|ta)\w+) b/i],[d,[u,"Verizon"],[b,f]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[d,[u,"Barnes & Noble"],[b,f]],[/\b(tm\d{3}\w+) b/i],[d,[u,"NuVision"],[b,f]],[/\b(k88) b/i],[d,[u,"ZTE"],[b,f]],[/\b(nx\d{3}j) b/i],[d,[u,"ZTE"],[b,p]],[/\b(gen\d{3}) b.+49h/i],[d,[u,"Swiss"],[b,p]],[/\b(zur\d{3}) b/i],[d,[u,"Swiss"],[b,f]],[/\b((zeki)?tb.*\b) b/i],[d,[u,"Zeki"],[b,f]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[u,"Dragon Touch"],d,[b,f]],[/\b(ns-?\w{0,9}) b/i],[d,[u,"Insignia"],[b,f]],[/\b((nxa|next)-?\w{0,9}) b/i],[d,[u,"NextBook"],[b,f]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[u,"Voice"],d,[b,p]],[/\b(lvtel\-)?(v1[12]) b/i],[[u,"LvTel"],d,[b,p]],[/\b(ph-1) /i],[d,[u,"Essential"],[b,p]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[d,[u,"Envizen"],[b,f]],[/\b(trio[-\w\. ]+) b/i],[d,[u,"MachSpeed"],[b,f]],[/\btu_(1491) b/i],[d,[u,"Rotor"],[b,f]],[/(shield[\w ]+) b/i],[d,[u,"Nvidia"],[b,f]],[/(sprint) (\w+)/i],[u,d,[b,p]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[u,z],[b,p]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[d,[u,M],[b,f]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[d,[u,M],[b,p]],[/smart-tv.+(samsung)/i],[u,[b,v]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[u,N],[b,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[u,"LG"],[b,v]],[/(apple) ?tv/i],[u,[d,k+" TV"],[b,v]],[/crkey/i],[[d,_+"cast"],[u,T],[b,v]],[/droid.+aft(\w+)( bui|\))/i],[d,[u,x],[b,v]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[d,[u,H],[b,v]],[/(bravia[\w ]+)( bui|\))/i],[d,[u,P],[b,v]],[/(mitv-\w{5}) bui/i],[d,[u,D],[b,v]],[/Hbbtv.*(technisat) (.*);/i],[u,d,[b,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[u,W],[d,W],[b,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[b,v]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[u,d,[b,h]],[/droid.+; (shield) bui/i],[d,[u,"Nvidia"],[b,h]],[/(playstation [345portablevi]+)/i],[d,[u,P],[b,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[d,[u,z],[b,h]],[/((pebble))app/i],[u,d,[b,g]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[d,[u,k],[b,g]],[/droid.+; (glass) \d/i],[d,[u,T],[b,g]],[/droid.+; (wt63?0{2,3})\)/i],[d,[u,M],[b,g]],[/(quest( \d| pro)?)/i],[d,[u,U],[b,g]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[u,[b,y]],[/(aeobc)\b/i],[d,[u,x],[b,y]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[d,[b,p]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[d,[b,f]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[b,f]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[b,p]],[/(android[-\w\. ]{0,9});.+buil/i],[d,[u,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[w,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[c,w],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[w,c]],os:[[/microsoft (windows) (vista|xp)/i],[c,w],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[c,[w,F,Y]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[w,F,Y],[c,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[w,/_/g,"."],[c,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[c,R],[w,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[w,c],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[c,w],[/\(bb(10);/i],[w,[c,A]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[w,[c,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[w,[c,C+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[w,[c,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[w,[c,"watchOS"]],[/crkey\/([\d\.]+)/i],[w,[c,_+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[c,B],w],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[c,w],[/(sunos) ?([\w\.\d]*)/i],[[c,"Solaris"],w],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[c,w]]},X=function(i,e){if(typeof i===r&&(e=i,i=o),!(this instanceof X))return new X(i,e).getResult();var h=typeof t!==a&&t.navigator?t.navigator:o,v=i||(h&&h.userAgent?h.userAgent:""),g=h&&h.userAgentData?h.userAgentData:o,y=e?j(Z,e):Z,x=h&&h.userAgent==v;return this.getBrowser=function(){var i,e={};return e[c]=o,e[w]=o,$.call(e,v,y.browser),e[l]=typeof(i=e[w])===s?i.replace(/[^\d\.]/g,"").split(".")[0]:o,x&&h&&h.brave&&typeof h.brave.isBrave==n&&(e[c]="Brave"),e},this.getCPU=function(){var i={};return i[m]=o,$.call(i,v,y.cpu),i},this.getDevice=function(){var i={};return i[u]=o,i[d]=o,i[b]=o,$.call(i,v,y.device),x&&!i[b]&&g&&g.mobile&&(i[b]=p),x&&"Macintosh"==i[d]&&h&&typeof h.standalone!==a&&h.maxTouchPoints&&h.maxTouchPoints>2&&(i[d]="iPad",i[b]=f),i},this.getEngine=function(){var i={};return i[c]=o,i[w]=o,$.call(i,v,y.engine),i},this.getOS=function(){var i={};return i[c]=o,i[w]=o,$.call(i,v,y.os),x&&!i[c]&&g&&g.platform&&"Unknown"!=g.platform&&(i[c]=g.platform.replace(/chrome os/i,B).replace(/macos/i,R)),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return v},this.setUA=function(i){return v=typeof i===s&&i.length>500?W(i,500):i,this},this.setUA(v),this};X.VERSION="1.0.38",X.BROWSER=I([c,w,l]),X.CPU=I([m]),X.DEVICE=I([d,u,b,h,p,v,f,g,y]),X.ENGINE=X.OS=I([c,w]),typeof e!==a?(i.exports&&(e=i.exports=X),e.UAParser=X):typeof define===n&&define.amd?define(function(){return X}):typeof t!==a&&(t.UAParser=X);var J=typeof t!==a&&(t.jQuery||t.Zepto);if(J&&!J.ua){var K=new X;J.ua=K.getResult(),J.ua.get=function(){return K.getUA()},J.ua.set=function(i){K.setUA(i);var e=K.getResult();for(var t in e)J.ua[t]=e[t]}}}("object"==typeof window?window:this)});var n=o("2Yl7J");const a=()=>{let{userAgent:i}=navigator,e=new n.UAParser,t="unknown";return"Huawei"===e.getDevice().vendor&&(t="huawei"),/android/i.test(i)&&(t="android"),"Apple"===e.getDevice().vendor&&(t="ios"),t};var r=function(){let i=a();document.body.classList.add(`platform_${i}`),function(){let i=a(),e={ios:"https://redirect.appmetrica.yandex.com/serve/315401363163010541",android:"https://redirect.appmetrica.yandex.com/serve/388180713033187193",huawei:"https://redirect.appmetrica.yandex.com/serve/244065662866049837"};e.android,"ios"===i?e.ios:"huawei"===i&&e.huawei}()};function s(i){return`0${i.toString(16)}`.substring(-2)}var l=class{constructor(){this.scrollHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),this.clientHeight=document.documentElement.clientHeight,this.fullEventData={},this.scrollGtm=new Set([10,30,50,70,90])}handleClick(i){let e="js-gtm-event",t=i.target.classList.contains(e)?i.target:i.target.closest(`.${e}`);if(t){let i={eventAction:"click",eventLabel:t.getAttribute("data-event")||null,eventLocation:t.getAttribute("data-section")||null,eventContext:t.getAttribute("data-context")||null,eventCategory:t.getAttribute("data-event-category")||"Interactions"};this.gaPush(i)}}handleScroll(){let i=100*(window.scrollY/(this.scrollHeight-this.clientHeight));this.scrollEvt(i)}scrollEvt(i){this.scrollGtm.forEach(e=>{i>=e&&(this.scrollGtm.delete(e),this.scrollEventPush(e))})}scrollEventPush(i){let e={eventAction:"scroll",eventLabel:`scrollPage-${i}%`,eventCategory:"Interactions"};this.gaPush(e)}gaPush(i){this.fullEventData={eventLabel:i.eventLabel,eventLocation:i.eventLocation||null,eventContext:i.eventContext||null,hitsTime:Date.now(),requestId:function(i){let e=new Uint8Array(3.5);return window.crypto.getRandomValues(e),Array.from(e,s).join("")}(0),firingOptions:"onesPerEvent",event:"event",eventStream:"flight",eventAction:i.eventAction,eventCategory:i.eventCategory,eventContent:i.eventContent||null,eventValue:i.eventValue||null,ecommerce:null,ecommerceAction:!1,noninteraction:!1};try{dataLayer.push(this.fullEventData)}catch(i){console.log(this.fullEventData)}}addEventListeners(){document.body.addEventListener("click",this.handleClick.bind(this)),document.addEventListener("scroll",()=>{this.handleScroll()})}},d={};/*! WOW - v0.1.4 - 2014-03-03
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var i,e=function(i,e){return function(){return i.apply(e,arguments)}};i=function(){function i(){}return i.prototype.extend=function(i,e){var t,o;for(t in i)null!=(o=i[t])&&(e[t]=o);return e},i.prototype.isMobile=function(i){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(i)},i}(),this.WOW=function(){function t(i){null==i&&(i={}),this.scrollCallback=e(this.scrollCallback,this),this.scrollHandler=e(this.scrollHandler,this),this.start=e(this.start,this),this.scrolled=!0,this.config=this.util().extend(i,this.defaults)}return t.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},t.prototype.init=function(){var i;return this.element=window.document.documentElement,this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length?this.disabled()?this.resetStyle():"interactive"===(i=document.readyState)||"complete"===i?this.start():document.addEventListener("DOMContentLoaded",this.start):void 0},t.prototype.start=function(){var i,e,t,o;for(o=this.boxes,e=0,t=o.length;t>e;e++)i=o[e],this.applyStyle(i,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)},t.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},t.prototype.show=function(i){return this.applyStyle(i),i.className=""+i.className+" "+this.config.animateClass},t.prototype.applyStyle=function(i,e){var t,o,n;return o=i.getAttribute("data-wow-duration"),t=i.getAttribute("data-wow-delay"),n=i.getAttribute("data-wow-iteration"),i.setAttribute("style",this.customStyle(e,o,t,n))},t.prototype.resetStyle=function(){var i,e,t,o,n;for(o=this.boxes,n=[],e=0,t=o.length;t>e;e++)i=o[e],n.push(i.setAttribute("style","visibility: visible;"));return n},t.prototype.customStyle=function(i,e,t,o){var n;return n=i?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",e&&(n+="-webkit-animation-duration: "+e+"; -moz-animation-duration: "+e+"; animation-duration: "+e+";"),t&&(n+="-webkit-animation-delay: "+t+"; -moz-animation-delay: "+t+"; animation-delay: "+t+";"),o&&(n+="-webkit-animation-iteration-count: "+o+"; -moz-animation-iteration-count: "+o+"; animation-iteration-count: "+o+";"),n},t.prototype.scrollHandler=function(){return this.scrolled=!0},t.prototype.scrollCallback=function(){var i;return this.scrolled&&(this.scrolled=!1,this.boxes=(function(){var e,t,o,n;for(o=this.boxes,n=[],e=0,t=o.length;t>e;e++)(i=o[e])&&(this.isVisible(i)?this.show(i):n.push(i));return n}).call(this),!this.boxes.length)?this.stop():void 0},t.prototype.offsetTop=function(i){var e;for(e=i.offsetTop;i=i.offsetParent;)e+=i.offsetTop;return e},t.prototype.isVisible=function(i){var e,t,o,n,a;return t=i.getAttribute("data-wow-offset")||this.config.offset,n=(a=window.pageYOffset)+this.element.clientHeight-t,e=(o=this.offsetTop(i))+i.clientHeight,n>=o&&e>=a},t.prototype.util=function(){return this._util||(this._util=new i)},t.prototype.disabled=function(){return!1===this.config.mobile&&this.util().isMobile(navigator.userAgent)},t}()}).call(d),new l,document.addEventListener("DOMContentLoaded",()=>{new(0,d.WOW)().init(),r(),document.querySelectorAll(".current-year").forEach(i=>{i.innerHTML=new Date().getFullYear().toString()}),function(){let{hash:i}=window.location;if(i){let e=i.slice(1);(function(i){let e=i.getBoundingClientRect().top+window.scrollY+0;window.scrollTo({top:e,behavior:"smooth"})})(document.getElementById(e))}}()});