(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{304:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return g}));const r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;const e=t.match(r),n=e?e[0]:"",i=o(t);return s.test(i)?t:i+".html"+n}function p(t,e){const n=t.hash,i=function(t){const e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&o(t.path)===o(e)}function h(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:s}=n,a=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){const e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||s.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,o);return n?n.map(e=>(function t(e,n,r,i=1){if("string"==typeof e)return h(n,e,r);if(Array.isArray(e))return Object.assign(h(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const s=e.children||[];return 0===s.length&&e.path?Object.assign(h(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}})(e,i,t)):[]}return[]}function v(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},305:function(t,e,n){},307:function(t,e,n){"use strict";var r=n(8),i=n(224)(5),s=!0;"find"in[]&&Array(1).find((function(){s=!1})),r(r.P+r.F*s,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(62)("find")},308:function(t,e,n){"use strict";var r=n(5),i=n(41),s=n(220),a=n(221);n(222)("match",1,(function(t,e,n,o){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=o(n,t,this);if(e.done)return e.value;var u=r(t),c=String(this);if(!u.global)return a(u,c);var l=u.unicode;u.lastIndex=0;for(var f,p=[],h=0;null!==(f=a(u,c));){var d=String(f[0]);p[h]=d,""===d&&(u.lastIndex=s(c,i(u.lastIndex),l)),h++}return 0===h?null:p}]}))},309:function(t,e,n){"use strict";var r=n(8),i=n(228)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(62)("includes")},310:function(t,e,n){"use strict";var r=n(8),i=n(311);r(r.P+r.F*n(312)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},311:function(t,e,n){var r=n(219),i=n(21);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},312:function(t,e,n){var r=n(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},313:function(t,e,n){"use strict";var r=n(305);n.n(r).a},315:function(t,e,n){},316:function(t,e,n){},317:function(t,e,n){},318:function(t,e,n){},319:function(t,e,n){},320:function(t,e,n){},321:function(t,e,n){},322:function(t,e,n){},323:function(t,e,n){},324:function(t,e,n){},333:function(t,e,n){"use strict";n(309),n(310),n(308);var r={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||10,r=this.$localePath,i=function(e){return e&&e.title&&e.title.toLowerCase().indexOf(t)>-1},s=[],a=0;a<e.length&&!(s.length>=n);a++){var o=e[a];if(this.getPageLocalePath(o)===r&&this.isSearchable(o))if(i(o))s.push(o);else if(o.headers)for(var u=0;u<o.headers.length&&!(s.length>=n);u++){var c=o.headers[u];i(c)&&s.push(Object.assign({},o,{path:o.path+"#"+c.slug,header:c}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},i=(n(313),n(1)),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,r){return n("li",{key:r,staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=s.exports},334:function(t,e,n){"use strict";n(15),n(223),n(355);var r=n(304),i={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=n(1),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=a.exports},335:function(t,e,n){"use strict";var r=n(5),i=n(45),s=n(41),a=n(44),o=n(220),u=n(221),c=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g;n(222)("replace",2,(function(t,e,n,d){return[function(r,i){var s=t(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,s,i):n.call(String(s),r,i)},function(t,e){var i=d(n,t,this,e);if(i.done)return i.value;var f=r(t),p=String(this),h="function"==typeof e;h||(e=String(e));var g=f.global;if(g){var m=f.unicode;f.lastIndex=0}for(var b=[];;){var k=u(f,p);if(null===k)break;if(b.push(k),!g)break;""===String(k[0])&&(f.lastIndex=o(p,s(f.lastIndex),m))}for(var _,x="",y=0,L=0;L<b.length;L++){k=b[L];for(var C=String(k[0]),$=c(l(a(k.index),p.length),0),w=[],O=1;O<k.length;O++)w.push(void 0===(_=k[O])?_:String(_));var j=k.groups;if(h){var S=[C].concat(w,$,p);void 0!==j&&S.push(j);var I=String(e.apply(void 0,S))}else I=v(C,p,$,w,j,e);$>=y&&(x+=p.slice(y,$)+I,y=$+C.length)}return x+p.slice(y)}];function v(t,e,r,s,a,o){var u=r+t.length,c=s.length,l=h;return void 0!==a&&(a=i(a),l=p),n.call(o,l,(function(n,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(u);case"<":o=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>c){var p=f(l/10);return 0===p?n:p<=c?void 0===s[p-1]?i.charAt(1):s[p-1]+i.charAt(1):n}o=s[l-1]}return void 0===o?"":o}))}}))},336:function(t,e){t.exports=function(t){return null==t}},337:function(t,e,n){var r=n(365).Symbol;t.exports=r},340:function(t,e,n){"use strict";n.r(e);var r=n(304),i={name:"SidebarGroup",components:{DropdownTransition:n(342).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(340).default},methods:{isActive:r.e}},s=(n(344),n(1)),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(307);function o(t,e,n,r,i){var s={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}};return i>2&&(s.style={"padding-left":i+"rem"}),t("RouterLink",s,n)}function u(t,e,n,i,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(r.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),u(t,e.children,n,i,s,a+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,s=(n.$site,n.$route),a=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,f=l.item,p=l.sidebarDepth,h=Object(r.e)(s,f.path),d="auto"===f.type?h||f.children.some((function(t){return Object(r.e)(s,f.basePath+"#"+t.slug)})):h,v="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):o(t,f.path,f.title||f.path,d),g=[i.frontmatter.sidebarDepth,p,c.sidebarDepth,a.sidebarDepth,1].find((function(t){return void 0!==t})),m=c.displayAllHeaders||a.displayAllHeaders;return"auto"===f.type?[v,u(t,f.children,f.basePath,s,g)]:(d||m)&&f.headers&&!r.d.test(f.path)?[v,u(t,Object(r.c)(f.headers),f.path,s,g)]:v}};n(345);function l(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?l(t,e):"page"===e.type&&Object(r.e)(t,e.path)}))}var f={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(l(t,r))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.regularPath)}}},p=Object(s.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},342:function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(343),n(1)),s=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},343:function(t,e,n){"use strict";var r=n(315);n.n(r).a},344:function(t,e,n){"use strict";var r=n(316);n.n(r).a},345:function(t,e,n){"use strict";var r=n(317);n.n(r).a},346:function(t,e,n){var r=n(6),i=n(238),s=n(12).f,a=n(72).f,o=n(219),u=n(46),c=r.RegExp,l=c,f=c.prototype,p=/a/g,h=/a/g,d=new c(p)!==p;if(n(3)&&(!d||n(9)((function(){return h[n(2)("match")]=!1,c(p)!=p||c(h)==h||"/a/i"!=c(p,"i")})))){c=function(t,e){var n=this instanceof c,r=o(t),s=void 0===e;return!n&&r&&t.constructor===c&&s?t:i(d?new l(r&&!s?t.source:t,e):l((r=t instanceof c)?t.source:t,r&&s?u.call(t):e),n?this:f,c)};for(var v=function(t){t in c||s(c,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=a(l),m=0;g.length>m;)v(g[m++]);f.constructor=c,c.prototype=f,n(17)(r,"RegExp",c)}n(347)("RegExp")},347:function(t,e,n){"use strict";var r=n(6),i=n(12),s=n(3),a=n(2)("species");t.exports=function(t){var e=r[t];s&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},348:function(t,e,n){t.exports=n(349)},349:function(t,e,n){n(67),n(350),t.exports=n(11).Array.from},350:function(t,e,n){"use strict";var r=n(230),i=n(42),s=n(227),a=n(351),o=n(352),u=n(236),c=n(353),l=n(237);i(i.S+i.F*!n(354)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,f,p=s(t),h="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,g=void 0!==v,m=0,b=l(p);if(g&&(v=r(v,d>2?arguments[2]:void 0,2)),null==b||h==Array&&o(b))for(n=new h(e=u(p.length));e>m;m++)c(n,m,g?v(p[m],m):p[m]);else for(f=b.call(p),n=new h;!(i=f.next()).done;m++)c(n,m,g?a(f,v,[i.value,m],!0):i.value);return n.length=m,n}})},351:function(t,e,n){var r=n(32);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var s=t.return;throw void 0!==s&&r(s.call(t)),e}}},352:function(t,e,n){var r=n(24),i=n(10)("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||s[i]===t)}},353:function(t,e,n){"use strict";var r=n(30),i=n(63);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},354:function(t,e,n){var r=n(10)("iterator"),i=!1;try{var s=[7][r]();s.return=function(){i=!0},Array.from(s,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var s=[7],a=s[r]();a.next=function(){return{done:n=!0}},s[r]=function(){return a},t(s)}catch(t){}return n}},355:function(t,e,n){"use strict";n(356)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},356:function(t,e,n){var r=n(8),i=n(9),s=n(21),a=/"/g,o=function(t,e,n,r){var i=String(s(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),o+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),r(r.P+r.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},357:function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},358:function(t,e,n){"use strict";var r=n(318);n.n(r).a},359:function(t,e,n){"use strict";var r=n(319);n.n(r).a},360:function(t,e,n){"use strict";var r=n(320);n.n(r).a},361:function(t,e,n){"use strict";var r=n(321);n.n(r).a},362:function(t,e,n){"use strict";var r=n(322);n.n(r).a},363:function(t,e,n){var r=n(364),i=n(369),s=n(370),a="[object String]";t.exports=function(t){return"string"==typeof t||!i(t)&&s(t)&&r(t)==a}},364:function(t,e,n){var r=n(337),i=n(367),s=n(368),a="[object Null]",o="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?o:a:u&&u in Object(t)?i(t):s(t)}},365:function(t,e,n){var r=n(366),i="object"==typeof self&&self&&self.Object===Object&&self,s=r||i||Function("return this")();t.exports=s},366:function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},367:function(t,e,n){var r=n(337),i=Object.prototype,s=i.hasOwnProperty,a=i.toString,o=r?r.toStringTag:void 0;t.exports=function(t){var e=s.call(t,o),n=t[o];try{t[o]=void 0;var r=!0}catch(t){}var i=a.call(t);return r&&(e?t[o]=n:delete t[o]),i}},368:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},369:function(t,e){var n=Array.isArray;t.exports=n},370:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},371:function(t,e,n){"use strict";var r=n(323);n.n(r).a},372:function(t,e,n){"use strict";var r=n(324);n.n(r).a},373:function(t,e,n){},374:function(t,e,n){},392:function(t,e,n){"use strict";var r=n(340),i=(n(346),n(308),n(73)),s=n.n(i);var a=n(348),o=n.n(a),u=n(77),c=n.n(u);function l(t){return function(t){if(s()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(335),n(15),n(223);var f=n(334),p=n(342),h=n(357),d=n.n(h),v={name:"DropdownLink",components:{NavLink:f.a,DropdownTransition:p.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return d()(e)===t}}},g=(n(358),n(1)),m=Object(g.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(r){return n("li",{key:r.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:r},on:{focusout:function(n){t.isLastItemOfArray(r,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,b=n(304),k={name:"NavLinks",components:{NavLink:f.a,DropdownLink:m},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,i=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(s){var a,o=e[s],u=i[s]&&i[s].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,s),r.some((function(t){return t.path===a}))||(a=s)),{text:u,link:a}}))};return[].concat(l(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(b.j)(t),{items:(t.items||[]).map(b.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}},_=(n(359),Object(g.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports),x={name:"Sidebar",components:{SidebarLinks:r.default,NavLinks:_},props:["items"]},y=(n(360),Object(g.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null));e.a=y.exports},393:function(t,e,n){"use strict";n(335);var r=n(336),i=n.n(r),s=n(304),a={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=i()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,r=e.docsDir,s=void 0===r?"":r,a=e.docsBranch,o=void 0===a?"master":a,u=e.docsRepo,c=void 0===u?n:u;return t&&c&&this.$page.relativePath?this.createEditLink(n,c,s,o,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,i){return/bitbucket.org/.test(t)?(s.i.test(e)?e:t).replace(s.a,"")+"/src"+"/".concat(r,"/")+(n?n.replace(s.a,"")+"/":"")+i+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(s.i.test(e)?e:"https://github.com/".concat(e)).replace(s.a,"")+"/edit"+"/".concat(r,"/")+(n?n.replace(s.a,"")+"/":"")+i}}},o=(n(362),n(1)),u=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports,c=n(363),l=n.n(c),f={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return h(p.PREV,this)},next:function(){return h(p.NEXT,this)}}};var p={NEXT:{resolveLink:function(t,e){return d(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return d(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function h(t,e){var n=e.$themeConfig,r=e.$page,a=e.$route,o=e.$site,u=e.sidebarItems,c=t.resolveLink,f=t.getThemeLinkConfig,p=t.getPageLinkConfig,h=f(n),d=p(r),v=i()(d)?h:d;return!1===v?void 0:l()(v)?Object(s.k)(o.pages,v,a.path):c(r,u)}function d(t,e,n){var r=[];!function t(e,n){for(var r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(var i=0;i<r.length;i++){var s=r[i];if("page"===s.type&&s.path===decodeURIComponent(t.path))return r[i+n]}}var v=f,g=(n(371),{components:{PageEdit:u,PageNav:Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),m=(n(372),Object(o.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null));e.a=m.exports},394:function(t,e,n){"use strict";var r={name:"Home",components:{NavLink:n(334).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(n(361),n(1)),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.a=s.exports}}]);