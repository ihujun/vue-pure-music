webpackJsonp([4],{"3C+n":function(t,n,i){"use strict";n.a=function(){return Object(s.a)({url:"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",params:{g_tk:5381,format:"json",platform:"h5",notice:0,outCharset:"utf-8"},callback:"jsonpCallback"})},n.b=function(t){var n={type:1,json:1,utf8:1,onlysong:0,disstid:t,g_tk:1610954601,loginUin:1450611414,hostUin:0,format:"json",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0};return Object(s.a)({url:"/api/getDisc/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",params:n,callback:"jsonpCallback"})};var s=i("Gak4")},NSSj:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=i("4YfN"),e=i.n(s),c=i("Z7ab"),o=i("R4Sj"),a=i("4ybS"),r=i("PvFA"),u=i("3C+n"),f={data:function(){return{songs:[]}},computed:e()({},Object(o.c)(["disc"]),{title:function(){return this.disc.songListDesc},bgImage:function(){return this.disc.picUrl}}),components:{List:c.a},mounted:function(){this.getDisc()},methods:{getDisc:function(){var t=this;this.disc.id?Object(u.b)(this.disc.id).then(function(n){n.code==a.a&&(t.songs=t.initSongs(n.cdlist[0].songlist))}):this.$router.push("/recommend")},initSongs:function(t){var n=[];return t.forEach(function(t){t.songid&&t.albummid&&n.push(Object(r.a)(t))}),n}}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("List",{attrs:{title:this.title,bgImage:this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var d=i("C7Lr")(f,l,!1,function(t){i("Zzoc")},"data-v-674a8fba",null);n.default=d.exports},Zzoc:function(t,n){}});
//# sourceMappingURL=4.8c468f5552ba310ef133.js.map