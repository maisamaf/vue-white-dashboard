(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{305:function(t,e,s){},306:function(t,e,s){},308:function(t,e,s){"use strict";var n=s(5),a=s(41),i=s(220),r=s(221);s(222)("match",1,(function(t,e,s,o){return[function(s){var n=t(this),a=null==s?void 0:s[e];return void 0!==a?a.call(s,n):new RegExp(s)[e](String(n))},function(t){var e=o(s,t,this);if(e.done)return e.value;var c=n(t),l=String(this);if(!c.global)return r(c,l);var u=c.unicode;c.lastIndex=0;for(var f,h=[],v=0;null!==(f=r(c,l));){var d=String(f[0]);h[v]=d,""===d&&(c.lastIndex=i(l,a(c.lastIndex),u)),v++}return 0===v?null:h}]}))},309:function(t,e,s){"use strict";var n=s(8),a=s(228)(!0);n(n.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(62)("includes")},310:function(t,e,s){"use strict";var n=s(8),a=s(311);n(n.P+n.F*s(312)("includes"),"String",{includes:function(t){return!!~a(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},311:function(t,e,s){var n=s(219),a=s(21);t.exports=function(t,e,s){if(n(e))throw TypeError("String#"+s+" doesn't accept regex!");return String(a(t))}},312:function(t,e,s){var n=s(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},313:function(t,e,s){"use strict";var n=s(305);s.n(n).a},314:function(t,e,s){"use strict";var n=s(306);s.n(n).a},333:function(t,e,s){"use strict";s(309),s(310),s(308);var n={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,s=this.$site.themeConfig.searchMaxSuggestions||10,n=this.$localePath,a=function(e){return e&&e.title&&e.title.toLowerCase().indexOf(t)>-1},i=[],r=0;r<e.length&&!(i.length>=s);r++){var o=e[r];if(this.getPageLocalePath(o)===n&&this.isSearchable(o))if(a(o))i.push(o);else if(o.headers)for(var c=0;c<o.headers.length&&!(i.length>=s);c++){var l=o.headers[c];a(l)&&i.push(Object.assign({},o,{path:o.path+"#"+l.slug,header:l}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},a=(s(313),s(1)),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-box"},[s("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?s("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,n){return s("li",{key:n,staticClass:"suggestion",class:{focused:n===t.focusIndex},on:{mousedown:function(e){return t.go(n)},mouseenter:function(e){return t.focus(n)}}},[s("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[s("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?s("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=i.exports},341:function(t,e,s){"use strict";s.r(e);var n=s(333),a=s(61),i={components:{SearchBox:n.a,BaseNav:a.BaseNav}},r=(s(314),s(1)),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("base-nav",{staticClass:"main-nav flex-row align-items-md-center",attrs:{type:"",effect:"light",expand:""},scopedSlots:t._u([{key:"content-header",fn:function(e){var n=e.closeMenu;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 collapse-brand"},[s("a",{attrs:{href:"/"}})]),t._v(" "),s("div",{staticClass:"col-6 collapse-close"},[s("close-button",{on:{click:n}})],1)])}}])},[s("a",{staticClass:"navbar-brand mr-0 mr-md-2",attrs:{slot:"brand",href:"/","aria-label":"Bootstrap"},slot:"brand"},[t._v("\n        Vue White Dashboard "),s("span",{staticClass:"ml-3"},[t._v("v 1.0.1")])]),t._v(" "),t._v(" "),s("div",{staticClass:"d-none d-sm-block ml-auto"},[s("ul",{staticClass:"navbar-nav ct-navbar-nav flex-row align-items-center"})]),t._v(" "),s("div",{staticClass:"navbar-nav-scroll ml-md-auto "},[s("ul",{staticClass:"navbar-nav bd-navbar-nav flex-row"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"btn btn-round",attrs:{target:"_blank",href:"https://www.creative-tim.com/product/vue-white-dashboard-pro?ref=vwd-upgrade-pro"}},[s("i",{staticClass:"tim-icons icon-send mr-2"}),t._v("Upgrade to PRO")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link nav-link-icon",attrs:{href:"https://www.facebook.com/creativetim",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook-square"})])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link nav-link-icon",attrs:{href:"https://twitter.com/creativetim",target:"_blank"}},[s("i",{staticClass:"fab fa-twitter"})])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link nav-link-icon",attrs:{href:"https://www.instagram.com/creativetimofficial",target:"_blank"}},[s("i",{staticClass:"fab fa-instagram"})])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link nav-link-icon",attrs:{href:"https://www.instagram.com/creativetimofficial",target:"_blank"}},[s("i",{staticClass:"fab fa-dribbble"})])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link nav-link-icon",attrs:{href:"https://www.github.com/creativetimofficial",target:"_blank"}},[s("i",{staticClass:"fab fa-github"})])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"https://demos.creative-tim.com/vue-white-dashboard"}},[s("i",{staticClass:"tim-icons icon-tv-2"}),t._v(" Live Preview")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"https://github.com/creativetimofficial/vue-white-dashboard",target:"_blank",rel:"noopener"}},[s("i",{staticClass:"tim-icons icon-shape-star"}),t._v(" Help with a star")])])])]),t._v(" "),!1!==t.$site.themeConfig.search?s("SearchBox"):t._e()],1)}),[],!1,null,null,null);e.default=o.exports}}]);