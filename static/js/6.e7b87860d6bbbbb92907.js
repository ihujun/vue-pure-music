webpackJsonp([6],{Kjo5:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("4YfN"),n=e.n(i),a=e("4ybS"),o=e("vyPQ"),r=e("R4Sj"),c={data:function(){return{topList:[]}},created:function(){this.getHotList()},methods:n()({},Object(r.d)({setTopList:"SET_TOP_LIST"}),{getHotList:function(){var t=this;Object(o.a)().then(function(s){s.code===a.a&&(t.topList=s.data.topList)})},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)}})},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"rank",staticClass:"rank"},[e("div",{ref:"toplist",staticClass:"toplist"},[e("ul",t._l(t.topList,function(s){return e("li",{staticClass:"item",on:{click:function(e){return t.selectItem(s)}}},[e("div",{staticClass:"icon"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),e("ul",{staticClass:"songlist"},[e("span",{staticClass:"top-title"},[t._v(t._s(s.topTitle))]),t._v(" "),t._l(s.songList,function(s,i){return e("li",{staticClass:"song"},[e("span",[t._v(t._s(i+1))]),t._v(" "),e("span",[t._v(t._s(s.singername)+" - "),e("span",{staticClass:"songname"},[t._v(t._s(s.songname))])])])})],2)])}),0)]),t._v(" "),e("router-view")],1)},staticRenderFns:[]};var u=e("C7Lr")(c,l,!1,function(t){e("WH15")},"data-v-52bee22c",null);s.default=u.exports},WH15:function(t,s){}});
//# sourceMappingURL=6.e7b87860d6bbbbb92907.js.map