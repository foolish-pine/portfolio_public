(function(t){function i(i){for(var s,o,l=i[0],c=i[1],n=i[2],d=0,g=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&g.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(i);while(g.length)g.shift()();return r.push.apply(r,n||[]),e()}function e(){for(var t,i=0;i<r.length;i++){for(var e=r[i],s=!0,l=1;l<e.length;l++){var c=e[l];0!==a[c]&&(s=!1)}s&&(r.splice(i--,1),t=o(o.s=e[0]))}return t}var s={},a={app:0},r=[];function o(i){if(s[i])return s[i].exports;var e=s[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,i,e){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)o.d(e,s,function(i){return t[i]}.bind(null,s));return e},o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=i,l=l.slice();for(var n=0;n<l.length;n++)i(l[n]);var p=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},1205:function(t,i,e){"use strict";var s=e("64ea"),a=e.n(s);a.a},3628:function(t){t.exports=JSON.parse('[{"name":"HTML5","img":"img/svg/html-5.svg","imgWidth":"100px","text":"セマンティックなマークアップを意識してコーディングしています。テンプレートエンジンはEJSを使用しています。"},{"name":"CSS3","img":"img/svg/css-3.svg","imgWidth":"100px","text":"CSSの設計手法はBEMを使用。わかりやすく変更に強い堅牢なつくりにすることを心がけています。"},{"name":"Sass","img":"img/svg/sass.svg","imgWidth":"100px","text":"変数やファイル分割を利用してメンテナンス性のよいコードを書くようにしています。"},{"name":"JavaScript","img":"img/svg/javascript.svg","imgWidth":"100px","text":"TypeScript、Vue.js、React、Node.jsの学習も進めています。"},{"name":"jQuery","img":"img/svg/jquery.svg","imgWidth":"180px","text":"ハンバーガーメニューやスライダー等Webサイトで頻出のものは実装できます。"},{"name":"PHP","img":"img/svg/php.svg","imgWidth":"100px","text":"フルスクラッチではお問い合わせフォームを実装できる程度です。業務ではWordPressを触っています。"},{"name":"WordPress","img":"img/svg/wordpress.svg","imgWidth":"100px","text":"静的サイトのコーディングからWordPressの導入まで一貫して行うことができます。"},{"name":"Gulp","img":"img/svg/gulp.svg","imgWidth":"100px","text":"タスクランナーとしてGulpを使用しています。"},{"name":"XD / Photoshop / Illustrator","img":"img/svg/xd.svg","img2":"img/svg/photoshop.svg","img3":"img/svg/illustrator.svg","imgWidth":"60px","text":"デザインカンプからの画像の切り出し・コーディングに必要な値の取得など基本的な操作はできます。"},{"name":"Git / GitHub","img":"img/svg/git-icon.svg","img2":"img/svg/github-icon.svg","imgWidth":"80px","text":"バージョン管理のためにGitとGitHubを使用しています。"}]')},3918:function(t,i,e){"use strict";var s=e("6ae3"),a=e.n(s);a.a},"41e1":function(t){t.exports=JSON.parse('[{"name":"TypeScript","img":"img/svg/typescript-icon.svg","imgWidth":"100px","text":"JavaScriptと平行して学習を進めています。"},{"name":"React","img":"img/svg/react.svg","imgWidth":"100px","text":"最近勉強中です。JavaScriptベースでUIを書けるので気に入っています。"},{"name":"Vue.js","img":"img/svg/vue.svg","imgWidth":"100px","text":"Vue CLIを使用してアプリを自作して学習しています。当サイトはVue.jsでつくられています。"}]')},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-app",{staticStyle:{"background-color":"#fafafa"}},[e("header",[e("v-app-bar",{attrs:{app:"",dark:"",color:"#41b883",height:"80"}},[e("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(i){return i.stopPropagation(),t.toggleSideMenu(i)}}}),e("v-toolbar-title",{staticClass:"title"},[e("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v(" Pine's Portfolio Site ")])],1),e("v-spacer"),e("div",{staticClass:"hidden-sm-and-down"},t._l(t.$store.state.items,(function(i,s){return e("router-link",{key:s,staticClass:"link",attrs:{to:i.link}},[e("v-btn",{staticClass:"title",attrs:{text:""}},[t._v(" "+t._s(i.title)+" ")])],1)})),1)],1)],1),e("SideNav"),e("router-view")],1)},r=[],o=e("5530"),l=e("2f62"),c=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.$store.state.drawer,callback:function(i){t.$set(t.$store.state,"drawer",i)},expression:"$store.state.drawer"}},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("img",{attrs:{src:"img/avatar-pine.png"}})]),e("v-list-item-content",[e("v-list-item-title",[t._v("Pine's Portfolio Site")])],1)],1),e("v-divider"),t._l(t.$store.state.items,(function(i,s){return e("v-list-item",{key:s,staticClass:"item",attrs:{to:i.link}},[t._v(" "+t._s(i.title)+" ")])}))],2)],1)},n=[],p={data:function(){return{}}},d=p,g=(e("c561"),e("2877")),u=e("6544"),m=e.n(u),v=e("ce7e"),h=e("8860"),f=e("da13"),b=e("8270"),_=e("5d23"),C=e("f774"),y=Object(g["a"])(d,c,n,!1,null,"f75a1f8c",null),x=y.exports;m()(y,{VDivider:v["a"],VList:h["a"],VListItem:f["a"],VListItemAvatar:b["a"],VListItemContent:_["a"],VListItemTitle:_["b"],VNavigationDrawer:C["a"]});var S={name:"App",components:{SideNav:x},methods:Object(o["a"])({},Object(l["b"])(["toggleSideMenu"]))},w=S,V=(e("5c0b"),e("1205"),e("7496")),j=e("40dc"),k=e("5bc1"),P=e("8336"),T=e("2fa4"),I=e("2a7f"),L=Object(g["a"])(w,a,r,!1,null,"5e5d3171",null),H=L.exports;m()(L,{VApp:V["a"],VAppBar:j["a"],VAppBarNavIcon:k["a"],VBtn:P["a"],VSpacer:T["a"],VToolbarTitle:I["a"]});var W=e("8c4f"),D=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-content",{staticClass:"mb-10"},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",xs:"12"}},[e("h1",{staticClass:"my-10 text-center page-title"},[t._v("プロフィール")])])],1),e("v-card",{staticClass:"mx-auto pa-5",attrs:{elevation:"7"}},[e("v-row",[e("v-spacer"),e("v-col",{attrs:{cols:"12",xs:"12",lg:"4"}},[e("div",{staticClass:"d-flex justify-center"},[e("v-avatar",{attrs:{size:"200"}},[e("img",{attrs:{src:t.profile.about.avatar}})])],1)]),e("v-col",{attrs:{cols:"12",xs:"12",lg:"6"}},[e("p",{staticClass:"mb-2 headline font-weight-bold"},[t._v(" 🍍"+t._s(t.profile.about.name)+" ")]),e("div",[t._v(" "+t._s(t.profile.about.comment)+" ")]),e("div",[e("a",{attrs:{href:"https://twitter.com/foolish_pine"}},[e("v-icon",{staticClass:"mdi-36px",attrs:{color:"#55acee"}},[t._v("mdi-twitter")])],1),e("a",{staticClass:"mx-3",attrs:{href:"https://github.com/foolish-pine"}},[e("v-icon",{staticClass:"mdi-36px",attrs:{color:"#0a0a0a"}},[t._v("mdi-github")])],1)])]),e("v-spacer")],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",xs:"12",lg:"6"}},[e("div",{staticClass:"mt-10"},[e("v-card",{staticClass:"mx-auto pa-5",attrs:{elevation:"7"}},[e("h2",{staticClass:"mb-3 text-center"},[t._v(" 📃 "+t._s(t.profile.qualifications.title)+" ")]),e("v-simple-table",[e("thead",[e("tr",{staticClass:"col-xs-4"},[e("th",{staticClass:"text-left subtitle-2"},[t._v(" "+t._s(t.profile.qualifications.th[0])+" ")]),e("th",{staticClass:"text-left subtitle-2"},[t._v(" "+t._s(t.profile.qualifications.th[1])+" ")])])]),e("tbody",t._l(t.profile.qualifications.contents,(function(i){return e("tr",{key:i.name,staticClass:"col-xs-8"},[e("td",{staticClass:"body-1"},[t._v(t._s(i.date))]),e("td",{staticClass:"body-1"},[t._v(t._s(i.name))])])})),0)])],1)],1)]),e("v-col",{staticClass:"my-10",attrs:{cols:"12",xs:"12",lg:"6"}},[e("v-card",{staticClass:"mx-auto pa-5",attrs:{elevation:"7"}},[e("h2",{staticClass:"mb-3 text-center"},[t._v("👍 "+t._s(t.profile.like.title))]),e("v-simple-table",[e("tbody",t._l(t.profile.like.contents,(function(i){return e("tr",{key:i.label,staticClass:"tr-like"},[e("td",[e("v-chip",{staticClass:"ma-2",attrs:{color:"#41b883","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v(t._s(i.icon))])],1),t._v(" "+t._s(i.label)+" ")],1)],1),e("td",{staticClass:"body-1"},[t._v(" "+t._s(i.list)+" ")])])})),0)])],1)],1)],1)],1)],1)},M=[],O=e("807f"),R={data:function(){return{profile:O}}},A=R,Q=(e("869c"),e("8212")),E=e("b0af"),G=e("cc20"),J=e("62ad"),$=e("a523"),U=e("a75b"),N=e("132d"),X=e("0fd9"),q=e("1f4f"),B=Object(g["a"])(A,D,M,!1,null,"0629fc1e",null),F=B.exports;m()(B,{VAvatar:Q["a"],VCard:E["a"],VChip:G["a"],VCol:J["a"],VContainer:$["a"],VContent:U["a"],VIcon:N["a"],VRow:X["a"],VSimpleTable:q["a"],VSpacer:T["a"]});var K=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-content",{staticClass:"mb-10"},[e("v-container",{staticClass:"mb-10"},[e("v-row",[e("v-col",{attrs:{cols:"12",xs:"12"}},[e("h1",{staticClass:"mt-10 mb-5 text-center page-title"},[t._v(" スキル ")]),e("h2",{staticClass:"mb-5 text-center"},[t._v(" 実務経験あり ")])])],1),e("v-row",t._l(t.experience,(function(i){return e("v-col",{key:i.name,attrs:{cols:"12",xs:"12",md:"6",lg:"4"}},[e("v-card",{staticClass:"mx-auto px-5 py-8",attrs:{height:"310",elevation:"7"}},[e("div",{staticClass:"d-flex justify-center img-container"},[e("img",{attrs:{src:i.img,width:i.imgWidth}}),i.img2?e("div",{staticClass:"img-spacer"}):t._e(),i.img2?e("img",{attrs:{src:i.img2,width:i.imgWidth}}):t._e(),i.img3?e("div",{staticClass:"img-spacer"}):t._e(),i.img3?e("img",{attrs:{src:i.img3,width:i.imgWidth}}):t._e()]),e("v-card-title",{staticClass:"justify-center mb-3"},[t._v(" "+t._s(i.name)+" ")]),e("v-card-subtitle",[t._v(" "+t._s(i.text)+" ")])],1)],1)})),1)],1),e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",xs:"12"}},[e("h2",{staticClass:"mb-5 text-center"},[t._v(" 独学のみ ")])])],1),e("v-row",t._l(t.inexperience,(function(i){return e("v-col",{key:i.name,attrs:{cols:"12",xs:"12",md:"6",lg:"4"}},[e("v-card",{staticClass:"mx-auto px-5 py-8",attrs:{height:"310",elevation:"7"}},[e("div",{staticClass:"d-flex justify-center img-container"},[e("img",{attrs:{src:i.img,width:i.imgWidth}}),i.img2?e("div",{staticClass:"img-spacer"}):t._e(),i.img2?e("img",{attrs:{src:i.img2,width:i.imgWidth}}):t._e(),i.img3?e("div",{staticClass:"img-spacer"}):t._e(),i.img3?e("img",{attrs:{src:i.img3,width:i.imgWidth}}):t._e()]),e("v-card-title",{staticClass:"justify-center mb-3"},[t._v(" "+t._s(i.name)+" ")]),e("v-card-subtitle",[t._v(" "+t._s(i.text)+" ")])],1)],1)})),1)],1)],1)},z=[],Y=e("41e1"),Z=e("3628"),tt={data:function(){return{inexperience:Y,experience:Z}}},it=tt,et=(e("3918"),e("99d9")),st=Object(g["a"])(it,K,z,!1,null,"308f4d6b",null),at=st.exports;m()(st,{VCard:E["a"],VCardSubtitle:et["a"],VCardTitle:et["b"],VCol:J["a"],VContainer:$["a"],VContent:U["a"],VRow:X["a"]});var rt=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-content",{staticClass:"mb-10"},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",xs:"12"}},[e("h2",{staticClass:"mt-10 text-center page-title"},[t._v("制作物")]),e("p",{staticClass:"mb-10 text-center title"},[t._v(" 学習のアウトプットも兼ねて作成した個人制作物です。 ")])])],1),e("v-row",t._l(t.works,(function(i){return e("v-col",{key:i.img,attrs:{cols:"12",xs:"12",md:"6",lg:"4"}},[e("v-card",{staticClass:"mx-auto",attrs:{height:"310",elevation:"7"},on:{click:function(t){t.stopPropagation(),i.dialog=!0}}},[e("v-img",{attrs:{src:i.img,"lazy-src":i.img,height:"170px",position:"top center"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)}),e("v-divider"),e("v-card-title",[t._v(t._s(i.title))]),e("v-card-subtitle",[t._v(t._s(i.subtitle))]),e("div",{staticClass:"mx-4 pb-3"},[i.tag.includes("HTML/CSS")?e("v-chip",{staticClass:"caption mr-2 mb-2",attrs:{small:"",color:"#e44d26","text-color":"white"}},[t._v("HTML / CSS")]):t._e(),i.tag.includes("Sass")?e("v-chip",{staticClass:"caption mr-2 mb-2",attrs:{small:"",color:"#cd6799","text-color":"white"}},[t._v("Sass")]):t._e(),i.tag.includes("TypeScript")?e("v-chip",{staticClass:"caption mr-2 mb-2",attrs:{small:"",color:"#007acc","text-color":"white"}},[t._v("TypeScript")]):t._e(),i.tag.includes("jQuery")?e("v-chip",{staticClass:"caption mr-2 mb-2",attrs:{small:"",color:"#21609b","text-color":"white"}},[t._v("jQuery")]):t._e(),i.tag.includes("Vue.js")?e("v-chip",{staticClass:"caption mr-2 mb-2",attrs:{small:"",color:"#41b883","text-color":"white"}},[t._v("Vue.js")]):t._e(),i.tag.includes("PHP")?e("v-chip",{staticClass:"caption mr-2 mb-2",attrs:{small:"",color:"#6181b6","text-color":"white"}},[t._v("PHP")]):t._e()],1)],1),e("v-dialog",{attrs:{"max-width":"720"},model:{value:i.dialog,callback:function(e){t.$set(i,"dialog",e)},expression:"work.dialog"}},[e("v-card",{staticClass:"pa-5 hidden-xs-only"},[e("div",{staticClass:"mb-3"},[e("v-spacer"),e("v-icon",{on:{click:function(t){t.stopPropagation(),i.dialog=!i.dialog}}},[t._v("mdi-close")])],1),e("v-img",{attrs:{src:i.dialogImg?i.dialogImg:i.img,"lazy-src":i.dialogImg?i.dialogImg:i.img,height:"300px",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)}),e("v-card-title",{staticClass:"headline py-5"},[t._v(t._s(i.title))]),e("v-card-subtitle",[t._v(t._s(i.subtitle))]),e("v-simple-table",[e("tbody",[e("tr",[e("td",{staticClass:"subtitle-1 text-center py-5 td-left"},[t._v(" ポイント ")]),e("td",{staticClass:"subtitle-1 py-5"},[e("ul",t._l(i.points,(function(i,s){return e("li",{key:s,staticClass:"pb-4"},[t._v(" "+t._s(i)+" ")])})),0)])]),e("tr",[e("td",{staticClass:"subtitle-1 text-center py-5 td-left"},[t._v(" サイトURL ")]),e("td",{staticClass:"subtitle-1"},[e("a",{attrs:{href:i.url}},[t._v(t._s(i.url))])])]),e("tr",[e("td",{staticClass:"subtitle-1 text-center py-5 td-left"},[t._v("GitHub")]),e("td",{staticClass:"subtitle-1"},[e("a",{attrs:{href:i.github}},[t._v(t._s(i.github))])])]),e("tr",[e("td",{staticClass:"subtitle-1 text-center py-5 td-left"},[t._v(" 担当箇所 ")]),e("td",{staticClass:"subtitle-1"},[t._v(t._s(i.charge))])]),i.designDistributer?e("tr",[e("td",{staticClass:"subtitle-1 text-center py-5 td-left"},[t._v(" デザイン配布元 ")]),e("td",{staticClass:"subtitle-1"},[e("a",{attrs:{href:i.designURL}},[t._v(t._s(i.designDistributer))])])]):t._e(),e("tr",[e("td",{staticClass:"subtitle-1 text-center py-5 td-left"},[t._v(" 言語・ツール ")]),e("td",{staticClass:"subtitle-1"},[t._v(t._s(i.tools))])]),i.period?e("tr",[e("td",{staticClass:"subtitle-1 text-center py-5 td-left"},[t._v(" 制作時間 ")]),e("td",{staticClass:"subtitle-1"},[t._v(t._s(i.period))])]):t._e()])])],1),e("v-card",{staticClass:"pa-5 hidden-sm-and-up"},[e("div",{staticClass:"mb-3"},[e("v-spacer"),e("v-icon",{on:{click:function(t){t.stopPropagation(),i.dialog=!i.dialog}}},[t._v("mdi-close")])],1),e("v-img",{attrs:{src:i.dialogImg?i.dialogImg:i.img,"lazy-src":i.dialogImg?i.dialogImg:i.img,height:"200px",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)}),e("v-card-title",{staticClass:"headline py-5"},[t._v(t._s(i.title))]),e("v-card-subtitle",[t._v(t._s(i.subtitle))]),e("div",{staticClass:"pb-5"},[e("div",{staticClass:"title py-5"},[t._v("ポイント")]),e("ul",{staticClass:"subtitle-1"},t._l(i.points,(function(i,s){return e("li",{key:s,staticClass:"pb-4"},[t._v(" "+t._s(i)+" ")])})),0)]),e("v-divider"),e("div",{staticClass:"py-5"},[e("div",{staticClass:"title pb-3"},[t._v("サイトURL")]),e("div",{staticClass:"subtitle-1"},[e("a",{attrs:{href:i.url}},[t._v(t._s(i.url))])])]),e("v-divider"),e("div",{staticClass:"py-5"},[e("div",{staticClass:"title pb-3"},[t._v("GitHub")]),e("div",{staticClass:"subtitle-1"},[e("a",{attrs:{href:i.github}},[t._v(t._s(i.github))])])]),e("v-divider"),e("div",{staticClass:"py-5"},[e("div",{staticClass:"title pb-3"},[t._v("担当箇所")]),e("div",{staticClass:"subtitle-1"},[t._v(t._s(i.charge))])]),e("v-divider"),i.designDistributer?e("div",{staticClass:"py-5"},[e("div",{staticClass:"title pb-3"},[t._v("デザイン配布元")]),e("div",{staticClass:"subtitle-1"},[e("a",{attrs:{href:i.designURL}},[t._v(t._s(i.designDistributer))])])]):t._e(),e("v-divider"),e("div",{staticClass:"py-5"},[e("div",{staticClass:"title pb-3"},[t._v("言語・ツール")]),e("div",{staticClass:"subtitle-1"},[t._v(t._s(i.tools))])]),e("v-divider"),i.period?e("div",{staticClass:"py-5"},[e("div",{staticClass:"title pb-3"},[t._v("制作時間")]),e("div",{staticClass:"subtitle-1"},[t._v(t._s(i.period))])]):t._e()],1)],1)],1)})),1)],1)],1)},ot=[],lt=e("c20c"),ct={data:function(){return{works:lt}}},nt=ct,pt=(e("d43a"),e("169a")),dt=e("adda"),gt=e("490a"),ut=Object(g["a"])(nt,rt,ot,!1,null,"ffc335c6",null),mt=ut.exports;m()(ut,{VCard:E["a"],VCardSubtitle:et["a"],VCardTitle:et["b"],VChip:G["a"],VCol:J["a"],VContainer:$["a"],VContent:U["a"],VDialog:pt["a"],VDivider:v["a"],VIcon:N["a"],VImg:dt["a"],VProgressCircular:gt["a"],VRow:X["a"],VSimpleTable:q["a"],VSpacer:T["a"]}),s["a"].use(W["a"]);var vt=[{path:"/",name:"profile",component:F},{path:"/skills",name:"skills",component:at},{path:"/works",name:"works",component:mt}],ht=new W["a"]({mode:"history",base:"/",routes:vt}),ft=ht;s["a"].use(l["a"]);var bt=new l["a"].Store({state:{drawer:!1,items:[{title:"PROFILE",link:{name:"profile"}},{title:"SKILLS",link:{name:"skills"}},{title:"WORKS",link:{name:"works"}}]},mutations:{toggleSideMenu:function(t){t.drawer=!t.drawer}},actions:{toggleSideMenu:function(t){var i=t.commit;i("toggleSideMenu")}}}),_t=e("f309");s["a"].use(_t["a"]);var Ct=new _t["a"]({});s["a"].config.productionTip=!1,new s["a"]({router:ft,store:bt,vuetify:Ct,render:function(t){return t(H)}}).$mount("#app")},"5c0b":function(t,i,e){"use strict";var s=e("7694"),a=e.n(s);a.a},"64ea":function(t,i,e){},"6ae3":function(t,i,e){},7694:function(t,i,e){},"807f":function(t){t.exports=JSON.parse('{"about":{"title":"About","avatar":"img/avatar-pine.png","name":"ぱいん","comment":"1994年生まれ。愛知県出身。大学院修了後、会社員、団体職員を経て、現在Web制作会社でコード書いてます。肩書は一応フロントエンドエンジニアです。JavaScriptが好きです。最近はTypeScript、React、WordPressを勉強中。アウトプットも兼ねて色々つくってます。ご連絡はTwitterのDMまで。"},"qualifications":{"title":"資格","th":["取得年月","資格"],"contents":[{"date":"2019年5月","name":"TOEIC 900点"},{"date":"2020年2月","name":"Webクリエイター能力認定試験エキスパート"},{"date":"2020年3月","name":"ITパスポート試験"}]},"like":{"title":"好きなもの","contents":[{"icon":"mdi-noodles","label":"食べ物","list":"パスタ、ラーメン、寿司"},{"icon":"mdi-coffee","label":"飲み物","list":"コーヒー、ほうじ茶"},{"icon":"mdi-run-fast","label":"スポーツ","list":"マラソン、登山"},{"icon":"mdi-book","label":"本","list":"純文学、ノンフィクション、新書"},{"icon":"mdi-music-circle-outline","label":"音楽","list":"80年代の洋楽ロック"},{"icon":"mdi-television-classic","label":"ドラマ","list":"相棒(特に亀山時代)"},{"icon":"mdi-gamepad-variant","label":"ゲーム","list":"Dead by Daylight"}]}}')},"869c":function(t,i,e){"use strict";var s=e("d85d"),a=e.n(s);a.a},"8d2a":function(t,i,e){},c20c:function(t){t.exports=JSON.parse('[{"img":"img/work/concentration-game.png","title":"神経衰弱","subtitle":"Vue.jsでつくる神経衰弱ゲーム","tag":["TypeScript","Vue.js"],"dialog":false,"dialogImg":"img/work/concentration-game.gif","url":"https://concentration-game-foolish-pine.netlify.app","github":"https://github.com/foolish-pine/concentration-game","charge":"すべて","tools":"TypeScript / Vue.js","period":"50時間","points":["Vue.jsで作成したブラウザ上で遊べる神経衰弱です。","自分のみで遊ぶ練習モードと、コンピュータと対戦するモードがあります。","コンピュータの強さは「よわよわ」「ふつう」「つよつよ」の3つです。コンピュータは強さにより最適な行動（一度でも表になったカードのうち、ペアとなるカードがあればそれらを優先して選択する）を取る確率が変化します。「よわよわ」は10%、「ふつう」は50%、「つよつよ」は100%の確率で最適な行動を取ります。"]},{"img":"img/work/my-memo-board.png","title":"My Memo Board","subtitle":"ドラッグ&ドロップメモアプリ","tag":["TypeScript","Vue.js"],"dialog":false,"dialogImg":"img/work/my-memo-board.gif","url":"https://draggable-memo-app-foolish-pine.netlify.app","github":"https://github.com/foolish-pine/trello-like-app","charge":"すべて","tools":"TypeScript / Vue.js / Firebase / Vuetify","period":"50時間","points":["TypeScript + Vue.js + Firebaseで作成した認証機能つきメモアプリです。","カードとメモを新規作成、削除、編集することができます。","ドラッグ＆ドロップでカードとメモを移動させることができます。","メモは別のカードに移動させることもできます。","ヘッダー右上の「…」からテーマカラーを設定できます。"]},{"img":"img/work/chat-app.png","title":"Pine\'s Chat App","subtitle":"リアルタイムチャットアプリ","tag":["TypeScript","Vue.js"],"dialog":false,"dialogImg":"img/work/chat-app.gif","url":"https://chat-app-foolish-pine.netlify.app","github":"https://github.com/foolish-pine/chat_app","charge":"すべて","tools":"TypeScript / Vue.js / Firebase / Vuetify","period":"60時間","points":["TypeScript + Vue.js + Firebaseで作成した認証機能つきチャットアプリです。","サイドバーから参加済みのトークルームにアクセスできます。","サイドバーのJoinボタンを押し、ルームIDとパスワードを入力することで他の人が作成したルームに参加できます。","サイドバーのNewボタンを押し、ルーム名、ID、パスワードを設定することで、新しいルームを作成できます。"]},{"img":"img/work/morse-code-editor.png","title":"Morse Code Editor","subtitle":"モールス符号エディタ","tag":["TypeScript","Vue.js"],"dialog":false,"dialogImg":"img/work/morse-code-editor.gif","url":"https://morse-code-editor.netlify.app","github":"https://github.com/foolish-pine/morse_code_editor","charge":"すべて","tools":"TypeScript / Vue.js / Vuetify","period":"15時間","points":["TypeScript + Vue.jsで作成したモールス符号エディタです。","モールス符号⇔英文の翻訳をリアルタイムでプレビューできます。","モールス符号の入力はキーボードの「.」と「-」使用して入力する「キーボードモード」に加え、スペースキーを電鍵に見立てて入力する「電鍵モード」も用意！電鍵入力シミュレータとしても使えます。"]},{"img":"img/work/github-readme-previewer.png","title":"# GitHub README Previewer","subtitle":"マークダウンエディタ","tag":["TypeScript","Vue.js"],"dialog":false,"dialogImg":"img/work/github-readme-previewer.gif","url":"https://github-readme-previewer.netlify.app","github":"https://github.com/foolish-pine/github_readme_previewer","charge":"すべて","tools":"TypeScript / Vue.js / Vuetify","period":"10時間","points":["TypeScript + Vue.jsで作成したマークダウンエディタです。","テキストエリアにマークダウン形式で記述し、それをリアルタイムでプレビューできます。","プレビュー画面のCSSには「github-markdown.css」を使用させていただきました。GitHubのREADME.mdそのままの見た目でプレビューできます。","ローカルファイルを開いて内容をテキストエリアに表示できます。","テキストエリアの入力内容を名前をつけて.md形式で保存することができます。"]},{"img":"img/work/portfolio.png","title":"Pine\'s Portfolio Site","subtitle":"ポートフォリオサイト","tag":["Vue.js"],"dialog":false,"url":"https://portfolio.foolish-pine.com","github":"https://github.com/foolish-pine/portfolio_public","charge":"すべて","tools":"Vue.js / Vuetify","points":["Vue.jsで作成したポートフォリオサイト（当サイト）です。","デザインまわりはVuetifyを使用しました。","静的なコンテンツをJSONファイルに分離することで、編集や更新が容易になるようにしました。"]},{"img":"img/work/cresta-3.png","title":"架空サイトコーディング","tag":["HTML/CSS","Sass","jQuery","PHP"],"dialog":false,"url":"https://cresta-upper.foolish-pine.com","github":"https://github.com/foolish-pine/Cresta_upper","charge":"コーディングのみ","designDistributer":"【コーディング課題】XDからコーディングをしよう【上級編】","designURL":"https://crestadesign.org/cording-third/","tools":"HTML / CSS / Sass / jQuery / PHP / Adobe XD","period":"20時間","points":["XDのデザインカンプをもとにコーディングした、トップページと2つの下層ページからなるWebサイトです。","レスポンシブ対応あり(PC、タブレット、SP)。","スティッキーヘッダー、フェードイン、ドロワーメニューをjQueryで実装しました。","バリデーション機能つきのお問い合わせフォームをPHPで実装しました。"]},{"img":"img/work/cresta-2.png","title":"架空サイトコーディング","tag":["HTML/CSS","Sass","jQuery","PHP"],"dialog":false,"url":"https://cresta-intermediate.foolish-pine.com","github":"https://github.com/foolish-pine/Cresta_intermediate","charge":"コーディングのみ","designDistributer":"【コーディング課題】XDからコーディングをしよう【中級編】","designURL":"https://crestadesign.org/cording-second/","tools":"HTML / CSS / Sass / jQuery / PHP / Adobe XD","period":"12時間","points":["XDのデザインカンプをもとにコーディングした、トップページと1つの下層ページからなるWebサイトです。","レスポンシブ対応あり(PC、SP)。","スティッキーヘッダー、スライドショー、ハンバーガーメニューをjQueryで実装しました。","バリデーション機能つきのお問い合わせフォームをPHPで実装しました。"]},{"img":"img/work/daily-trial-2nd.png","title":"架空LPコーディング","tag":["HTML/CSS","Sass","jQuery","PHP"],"dialog":false,"url":"https://daily-trial-2nd.foolish-pine.com","github":"https://github.com/foolish-pine/daily_trial_2nd","charge":"コーディングのみ","designDistributer":"デイトラ(現在は配布終了)","designURL":"https://www.daily-trial.com/","tools":"HTML / CSS / Sass / jQuery / PHP / Adobe XD","period":"20時間","points":["XDのデザインカンプをもとにコーディングした、ランディングページです。","レスポンシブ対応あり(PC、SP)。","スティッキーヘッダー、スライダー(プラグイン使用)、ドロワーメニュー等をjQueryで実装しました。","バリデーション機能つきのお問い合わせフォームをPHPで実装しました。"]},{"img":"img/work/KAGU.png","title":"架空LPコーディング","tag":["HTML/CSS","Sass","jQuery"],"dialog":false,"url":"https://kagu.foolish-pine.com","github":"https://github.com/foolish-pine/KAGU","charge":"コーディングのみ","designDistributer":"【無料配布】コーディング練習用　リッチデザインデータ「KAGU」","designURL":"https://note.com/hi_roki/n/nb0c5f24f9107","tools":"HTML / CSS / Sass / jQuery / Photoshop","period":"","points":["Photoshopのデザインカンプをもとにコーディングした、ランディングページです。","レスポンシブ対応あり(PC、タブレット、SP)。","スティッキーヘッダー、スライドショー、ハンバーガーメニューをjQueryで実装しました。"]}]')},c561:function(t,i,e){"use strict";var s=e("db2c"),a=e.n(s);a.a},d43a:function(t,i,e){"use strict";var s=e("8d2a"),a=e.n(s);a.a},d85d:function(t,i,e){},db2c:function(t,i,e){}});
//# sourceMappingURL=app.bd27526b.js.map