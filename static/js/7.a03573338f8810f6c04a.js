webpackJsonp([7],{EvVk:function(t,e){},YOyO:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("4YfN"),n=s.n(i),r=s("4ybS"),a=s("PvFA"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t},c={version:"1.1.0",storage:window.localStorage,session:{storage:window.sessionStorage}},l={set:function(t,e){if(!this.disabled)return void 0===e?this.remove(t):(this.storage.setItem(t,function(t){return JSON.stringify(t)}(e)),e)},get:function(t,e){if(this.disabled)return e;var s=function(t){if("string"!=typeof t)return;try{return JSON.parse(t)}catch(e){return t||void 0}}(this.storage.getItem(t));return void 0===s?e:s},has:function(t){return void 0!==this.get(t)},remove:function(t){this.disabled||this.storage.removeItem(t)},clear:function(){this.disabled||this.storage.clear()},getAll:function(){if(this.disabled)return null;var t={};return this.forEach(function(e,s){t[e]=s}),t},forEach:function(t){if(!this.disabled)for(var e=0;e<this.storage.length;e++){var s=this.storage.key(e);t(s,this.get(s))}}};o(c,l),o(c.session,l);try{var u="__storejs__";c.set(u,u),c.get(u)!==u&&(c.disabled=!0),c.remove(u)}catch(t){c.disabled=!0}var h=c,d="__search__",g=15;function v(){return h.get(d,[])}var p=s("AA3o"),m=s.n(p),f=function t(e){var s=e.id,i=e.name;m()(this,t),this.id=s,this.name=i,this.avatar="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+s+".jpg?max_age=2592000"},y=s("R4Sj"),_=s("Gak4");function k(t,e){var s={format:"jsonp",w:t,n:20,p:e};return Object(_.a)({url:"https://c.y.qq.com/soso/fcgi-bin/client_search_cp",params:s,callback:"jsonpCallback"})}var b={data:function(){return{hotkeys:[],query:"",page:1,result:[],hasMore:!1,wrapperHeight:0,historyQuery:v()}},components:{},created:function(){this.getHotKey()},mounted:function(){this.wrapperHeight=document.documentElement.clientHeight-this.$refs.wrapper.getBoundingClientRect().top},methods:n()({},Object(y.d)({setSinger:"SET_SINGER"}),Object(y.b)(["insertSong"]),{getHotKey:function(){var t=this;Object(_.a)({url:"https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",params:{g_tk:5381,uin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1,_:1518414659356},callback:"jsonpCallback"}).then(function(e){e.code===r.a&&(t.hotkeys=e.data.hotkey.slice(0,10))})},search:function(t,e){var s=this;k(t,e).then(function(t){s.result=s.initResult(t.data),s.checkMore(t.data)}),function(t){var e,s,i,n,r,a=h.get(d,[]);s=t,i=function(e){return e===t},n=g,0!==(r=(e=a).findIndex(i))&&(r>0&&e.splice(r,1),e.unshift(s),n&&e.length>n&&e.pop()),h.set(d,a)}(t)},initResult:function(t){var e=[];if(t.zhida&&t.zhida.singerid&&e.push(n()({},t.zhida,{type:"singer"})),t.song){var s=this.initSongs(t.song.list);e=e.concat(s)}return e},initSongs:function(t){var e=[];return t.forEach(function(t){t.songid&&t.albummid&&e.push(Object(a.a)(t))}),e},checkMore:function(t){var e=t.song;(!e.list.length||e.curnum+20*e.curpage>e.totalnum)&&(this.hasMore=!0)},setQuery:function(t){t=t.trim(),this.query=t,this.search(t,1,!0),this.historyQuery=v()},clearHistory:function(){var t=this;this.$messagebox.confirm("",{message:"清空搜索历史？",title:"提示",confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(e){t.historyQuery=(h.remove(d),[])}).catch(function(t){})},deleteHistory:function(t){this.historyQuery=function(t){var e,s,i,n=h.get(d,[]);return s=function(e){return e===t},(i=(e=n).findIndex(s))>-1&&e.splice(i,1),h.set(d,n),n}(t)},loadBottom:function(){var t=this;this.hasMore||(this.page++,k(this.query,this.page).then(function(e){t.result=t.result.concat(t.initResult(e.data)),t.checkMore(e.data)}),this.$refs.loadmore.onBottomLoaded())},singerImg:function(t){return"https://y.gtimg.cn/music/photo_new/T001R68x68M000"+t+".jpg?max_age=2592000"},selectItem:function(t){if(t.type){var e=new f({id:t.singermid,name:t.singername});this.$router.push({path:"/search/SingerDetail/"+t.singermid}),this.setSinger(e)}else this.insertSong(t)}})},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-search"},[s("div",{staticClass:"search"},[s("div",{staticClass:"search-input"},[s("div",{staticClass:"search-input"},[s("mt-search",{attrs:{"cancel-text":"取消",placeholder:"搜索歌曲、歌手"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(t.query,1,!0)}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.result.length,expression:"result.length"}],ref:"wrapper",staticClass:"wrapper",style:{height:t.wrapperHeight+"px"}},[s("mt-loadmore",{ref:"loadmore",attrs:{"bottom-method":t.loadBottom,"bottom-all-loaded":t.hasMore,"auto-fill":!0}},t._l(this.result,function(e,i){return s("a",{staticClass:"mint-cell",on:{click:function(s){return t.selectItem(e)}}},[s("div",{staticClass:"mint-cell-wrapper"},[e.type?t._e():s("div",{staticClass:"mint-cell-title"},[s("img",{attrs:{slot:"icon",src:"https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/search_sprite.png?max_age=19830212&d=20151105145423",width:"24",height:"24"},slot:"icon"}),t._v(" "),s("span",{staticClass:"mint-cell-text"},[t._v(t._s(e.name))]),t._v(" "),s("span",{staticClass:"mint-cell-label"},[t._v(t._s(e.singer))])]),t._v(" "),e.type?s("div",{staticClass:"mint-cell-title result-singer"},[s("img",{staticStyle:{"border-radius":"999px"},attrs:{slot:"icon",src:t.singerImg(e.singermid)},slot:"icon"}),t._v(" "),s("span",{staticClass:"mint-cell-text"},[t._v(t._s(e.singername))]),t._v(" "),s("span",{staticClass:"mint-cell-label"},[t._v("单曲"+t._s(e.songnum)+"  专辑"+t._s(e.albumnum))])]):t._e()])])}),0)],1)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:""==t.query,expression:"query==''"}],staticClass:"hotkey-wrapper"},[s("div",[s("div",{staticClass:"hotkey"},[s("h3",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),s("div",{staticClass:"hotkey-tags"},t._l(t.hotkeys,function(e){return s("span",{staticClass:"tag-key",on:{click:function(s){return t.setQuery(e.k)}}},[t._v(t._s(e.k))])}),0)])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.historyQuery.length&&""==t.query,expression:"historyQuery.length && query==''"}],staticClass:"history-wrapper"},[s("div",{staticClass:"history-clear",on:{click:t.clearHistory}},[s("span",[t._v("清除搜索记录")])]),t._v(" "),s("div",{ref:"historyList",staticClass:"search-history"},t._l(t.historyQuery,function(e){return s("li",{on:{click:function(s){return t.setQuery(e)}}},[s("a",{staticClass:"history-item"},[s("span",{staticClass:"icon-clock"}),t._v(" "),s("span",{staticClass:"history-key"},[t._v(t._s(e))]),t._v(" "),s("span",{staticClass:"iconfont icon-close",on:{click:function(s){return s.stopPropagation(),t.deleteHistory(e)}}})])])}),0)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:""==!t.query&&!t.result.length,expression:"!query=='' && !result.length"}],staticClass:"no-result"},[s("img",{attrs:{src:"https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/search_null.png?max_age=19830212&d=20151105145423",width:"106px",height:"105px"}}),t._v(" "),s("p",[t._v("无匹配")]),t._v(" "),s("p",[t._v("很抱歉，没有找到与“"+t._s(t.query)+"”相关的结果。")])])],1)])]),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var C=s("C7Lr")(b,w,!1,function(t){s("EvVk")},null,null);e.default=C.exports}});
//# sourceMappingURL=7.a03573338f8810f6c04a.js.map