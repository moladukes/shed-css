!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(1);var a=window.fabricator={};a.options={toggles:{labels:!0,notes:!0,code:!0},menu:!0,mq:"(min-width: 60em)"},a.options.menu=window.matchMedia(a.options.mq).matches,a.test={},a.test.sessionStorage=function(){var e="_f";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}(),a.test.sessionStorage&&(sessionStorage.fabricator=sessionStorage.fabricator||JSON.stringify(a.options)),a.dom={root:document.querySelector("html"),primaryMenu:document.querySelector(".f-menu"),menuItems:document.querySelectorAll(".f-menu li a"),menuToggle:document.querySelector(".f-menu-toggle")},a.getOptions=function(){return a.test.sessionStorage?JSON.parse(sessionStorage.fabricator):a.options},a.buildColorChips=function(){for(var e,t=document.querySelectorAll(".f-color-chip"),n=t.length-1;n>=0;n--)e=t[n].querySelector(".f-color-chip__color").innerHTML,t[n].style.borderTopColor=e,t[n].style.borderBottomColor=e;return this},a.setActiveItem=function(){var e=function(){for(var e,t=(window.location.pathname+window.location.hash).replace(/(^\/)([^#]+)?(#[\w\-\.]+)?$/gi,function(e,t,n,a){return a=a||"",n=n||"",n+a.split(".")[0]})||"index.html",n=a.dom.menuItems.length-1;n>=0;n--){var r=a.dom.menuItems[n];e=r.getAttribute("href").replace(/^\//g,""),e===t?r.classList.add("f-active"):r.classList.remove("f-active")}};return window.addEventListener("hashchange",e),e(),this},a.menuToggle=function(){var e=a.dom.menuToggle,t=a.getOptions(),n=function(){t.menu=!a.dom.root.classList.contains("f-menu-active"),a.dom.root.classList.toggle("f-menu-active"),a.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(t))};document.onkeydown=function(e){e=e||event,e.ctrlKey&&e.keyCode=="M".charCodeAt(0)&&n()},e.addEventListener("click",function(){n()});for(var r=function(){window.matchMedia(a.options.mq).matches||n()},s=0;s<a.dom.menuItems.length;s++)a.dom.menuItems[s].addEventListener("click",r);return this},a.allItemsToggles=function(){for(var e={labels:document.querySelectorAll('[data-f-toggle="labels"]'),notes:document.querySelectorAll('[data-f-toggle="notes"]'),code:document.querySelectorAll('[data-f-toggle="code"]')},t=document.querySelectorAll(".f-controls [data-f-toggle-control]"),n=a.getOptions(),r=function(t,r){for(var s=document.querySelector(".f-controls [data-f-toggle-control="+t+"]"),o=e[t],i=0;i<o.length;i++)r?o[i].classList.remove("f-item-hidden"):o[i].classList.add("f-item-hidden");r?s.classList.add("f-active"):s.classList.remove("f-active"),n.toggles[t]=r,a.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(n))},s=0;s<t.length;s++)t[s].addEventListener("click",function(e){var t=e.currentTarget.getAttribute("data-f-toggle-control"),n=e.currentTarget.className.indexOf("f-active")<0;r(t,n)});for(var o in n.toggles)n.toggles.hasOwnProperty(o)&&r(o,n.toggles[o]);return this},a.singleItemToggle=function(){for(var e=document.querySelectorAll(".f-item-group [data-f-toggle-control]"),t=function(e){var t=this.parentNode.parentNode.parentNode,n=e.currentTarget.getAttribute("data-f-toggle-control");t.querySelector("[data-f-toggle="+n+"]").classList.toggle("f-item-hidden")},n=0;n<e.length;n++)e[n].addEventListener("click",t);return this},a.bindCodeAutoSelect=function(){for(var e=document.querySelectorAll(".f-item-code"),t=function(e){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(e.querySelector("code")),t.removeAllRanges(),t.addRange(n)},n=e.length-1;n>=0;n--)e[n].addEventListener("click",t.bind(this,e[n]))},a.setInitialMenuState=function(){var e=document.querySelector("html"),t=window.matchMedia(a.options.mq),n=function(t){t.matches&&a.getOptions().menu?e.classList.add("f-menu-active"):e.classList.remove("f-menu-active")};return t.addListener(n),n(t),this},function(){a.setInitialMenuState().menuToggle().allItemsToggles().singleItemToggle().buildColorChips().setActiveItem().bindCodeAutoSelect()}()},function(e,t){(function(t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,a=n.Prism={util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=a.util.type(e);switch(t){case"Object":var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=a.util.clone(e[r]));return n;case"Array":return e.map&&e.map(function(e){return a.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){r=r||a.languages;var s=r[e];if(2==arguments.length){n=arguments[1];for(var o in n)n.hasOwnProperty(o)&&(s[o]=n[o]);return s}var i={};for(var l in s)if(s.hasOwnProperty(l)){if(l==t)for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);i[l]=s[l]}return a.languages.DFS(a.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=i)}),r[e]=i},DFS:function(e,t,n,r){r=r||{};for(var s in e)e.hasOwnProperty(s)&&(t.call(e,s,e[s],n||s),"Object"!==a.util.type(e[s])||r[a.util.objId(e[s])]?"Array"!==a.util.type(e[s])||r[a.util.objId(e[s])]||(r[a.util.objId(e[s])]=!0,a.languages.DFS(e[s],t,s,r)):(r[a.util.objId(e[s])]=!0,a.languages.DFS(e[s],t,null,r)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var r,s=n.elements||document.querySelectorAll(n.selector),o=0;r=s[o++];)a.highlightElement(r,e===!0,n.callback)},highlightElement:function(t,r,s){for(var o,i,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(o=(l.className.match(e)||[,""])[1].toLowerCase(),i=a.languages[o]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var u=t.textContent,c={element:t,language:o,grammar:i,code:u};if(a.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return void a.hooks.run("complete",c);if(a.hooks.run("before-highlight",c),r&&n.Worker){var g=new Worker(a.filename);g.onmessage=function(e){c.highlightedCode=e.data,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,s&&s.call(c.element),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},g.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=a.highlight(c.code,c.grammar,c.language),a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,s&&s.call(t),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},highlight:function(e,t,n){var s=a.tokenize(e,t);return r.stringify(a.util.encode(s),n)},tokenize:function(e,t){var n=a.Token,r=[e],s=t.rest;if(s){for(var o in s)t[o]=s[o];delete t.rest}e:for(var o in t)if(t.hasOwnProperty(o)&&t[o]){var i=t[o];i="Array"===a.util.type(i)?i:[i];for(var l=0;l<i.length;++l){var u=i[l],c=u.inside,g=!!u.lookbehind,d=!!u.greedy,p=0,f=u.alias;u=u.pattern||u;for(var m=0;m<r.length;m++){var h=r[m];if(r.length>e.length)break e;if(!(h instanceof n)){u.lastIndex=0;var b=u.exec(h),v=1;if(!b&&d&&m!=r.length-1){var y=r[m+1].matchedStr||r[m+1],k=h+y;if(m<r.length-2&&(k+=r[m+2].matchedStr||r[m+2]),u.lastIndex=0,b=u.exec(k),!b)continue;var w=b.index+(g?b[1].length:0);if(w>=h.length)continue;var S=b.index+b[0].length,x=h.length+y.length;if(v=3,x>=S){if(r[m+1].greedy)continue;v=2,k=k.slice(0,x)}h=k}if(b){g&&(p=b[1].length);var w=b.index+p,b=b[0].slice(p),S=w+b.length,A=h.slice(0,w),j=h.slice(S),$=[m,v];A&&$.push(A);var _=new n(o,c?a.tokenize(b,c):b,f,b,d);$.push(_),j&&$.push(j),Array.prototype.splice.apply(r,$)}}}}}return r},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,s=0;r=n[s++];)r(t)}}},r=a.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.matchedStr=a||null,this.greedy=!!r};if(r.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(n){return r.stringify(n,t,e)}).join("");var s={type:e.type,content:r.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if("comment"==s.type&&(s.attributes.spellcheck="true"),e.alias){var o="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(s.classes,o)}a.hooks.run("wrap",s);var i="";for(var l in s.attributes)i+=(i?" ":"")+l+'="'+(s.attributes[l]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+i+">"+s.content+"</"+s.tag+">"},!n.document)return n.addEventListener?(n.addEventListener("message",function(e){var t=JSON.parse(e.data),r=t.language,s=t.code,o=t.immediateClose;n.postMessage(a.highlight(s,a.languages[r],r)),o&&n.close()},!1),n.Prism):n.Prism;var s=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return s&&(a.filename=s.src,document.addEventListener&&!s.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",a.highlightAll)),n.Prism}();"undefined"!=typeof e&&e.exports&&(e.exports=a),"undefined"!=typeof t&&(t.Prism=a),a.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.util.clone(a.languages.css),a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css"}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),a.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript"}}),a.languages.js=a.languages.javascript,!function(e){var t={variable:[{pattern:/\$?\(\([\w\W]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\w\W]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]};e.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:"important"},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,lookbehind:!0,greedy:!0,inside:t},{pattern:/(["'])(?:\\\\|\\?[^\\])*?\1/g,greedy:!0,inside:t}],variable:t.variable,"function":{pattern:/(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,lookbehind:!0},keyword:{pattern:/(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,lookbehind:!0},"boolean":{pattern:/(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var n=t.variable[1].inside;n["function"]=e.languages.bash["function"],n.keyword=e.languages.bash.keyword,n["boolean"]=e.languages.bash["boolean"],n.operator=e.languages.bash.operator,n.punctuation=e.languages.bash.punctuation}(a),a.languages.css.selector={pattern:/[^\{\}\s][^\{\}]*(?=\s*\{)/,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+(?:\(.*\))?/,"class":/\.[-:\.\w]+/,id:/#[-:\.\w]+/}},a.languages.insertBefore("css","function",{hexcode:/#[\da-f]{3,6}/i,entity:/\\[\da-f]{1,8}/i,number:/[\d%\.]+/}),!function(e){var t=/\{\{\{[\w\W]+?\}\}\}|\{\{[\w\W]+?\}\}/g;e.languages.handlebars=e.languages.extend("markup",{handlebars:{pattern:t,inside:{delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(\\?.)*?\1/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/,"boolean":/\b(true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\w\W]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/}}}),e.languages.insertBefore("handlebars","tag",{"handlebars-comment":{pattern:/\{\{![\w\W]*?\}\}/,alias:["handlebars","comment"]}}),e.hooks.add("before-highlight",function(e){"handlebars"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(t,function(t){return e.tokenStack.push(t),"___HANDLEBARS"+e.tokenStack.length+"___"}))}),e.hooks.add("before-insert",function(e){"handlebars"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),e.hooks.add("after-highlight",function(t){if("handlebars"===t.language){for(var n,a=0;n=t.tokenStack[a];a++)t.highlightedCode=t.highlightedCode.replace("___HANDLEBARS"+(a+1)+"___",e.highlight(n,t.grammar,"handlebars").replace(/\$/g,"$$$$"));t.element.innerHTML=t.highlightedCode}})}(a),a.languages.json={property:/".*?"(?=\s*:)/gi,string:/"(?!:)(\\?[^"])*?"(?!:)/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,punctuation:/[{}[\]);,]/g,operator:/:/g,"boolean":/\b(true|false)\b/gi,"null":/\bnull\b/gi},a.languages.jsonp=a.languages.json,!function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i;var n=e.util.clone(e.languages.jsx);delete n.punctuation,n=e.languages.insertBefore("jsx","operator",{punctuation:/=(?={)|[{}[\];(),.:]/},{jsx:n}),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{[^}]*\}|[^}])+\})/i,inside:n,alias:"language-javascript"}},e.languages.jsx.tag)}(a),a.languages.scss=a.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,inside:{placeholder:/%[-_\w]+/}}}),a.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),a.languages.insertBefore("scss","property",{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}),a.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-_\w]+/,alias:"selector"},statement:/\B!(?:default|optional)\b/i,"boolean":/\b(?:true|false)\b/,"null":/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),a.languages.scss.atrule.inside.rest=a.util.clone(a.languages.scss)}).call(t,function(){return this}())}]);