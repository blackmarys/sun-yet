(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{2047:function(t,i,a){"use strict";a("a9e3"),a("d3b7"),a("ac1f"),a("25f0"),a("3ca3"),a("ddb0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"UniNoticeBar",emits:["click","getmore","close"],props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:Number,default:100},color:{type:String,default:"#de8c17"},moreColor:{type:String,default:"#999999"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),i="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:t,elIdBox:i,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},mounted:function(){var t=this;this.$nextTick((function(){t.initSize()}))},methods:{initSize:function(){var t=this;if(this.scrollable){var i=[],a=new Promise((function(i,a){uni.createSelectorQuery().in(t).select("#".concat(t.elId)).boundingClientRect().exec((function(a){t.textWidth=a[0].width,i()}))})),e=new Promise((function(i,a){uni.createSelectorQuery().in(t).select("#".concat(t.elIdBox)).boundingClientRect().exec((function(a){t.boxWidth=a[0].width,i()}))}));i.push(a),i.push(e),Promise.all(i).then((function(){t.animationDuration="".concat(t.textWidth/t.speed,"s"),t.animationDelay="-".concat(t.boxWidth/t.speed,"s"),setTimeout((function(){t.animationPlayState="running"}),1e3)}))}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};i.default=e},"343b":function(t,i,a){var e=a("a022");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("5c0e9424",e,!0,{sourceMap:!1,shadowMode:!1})},4186:function(t,i,a){"use strict";var e=a("343b"),n=a.n(e);n.a},5075:function(t,i,a){"use strict";a.r(i);var e=a("52c6"),n=a("a592");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("cd41");var c,s=a("f0c5"),r=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"355e078b",null,!1,e["a"],c);i["default"]=r.exports},"52c6":function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var e={uniIcons:a("86c4").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return t.show?a("v-uni-view",{staticClass:"uni-noticebar",style:{backgroundColor:t.backgroundColor},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}},[!0===t.showClose||"true"===t.showClose?a("uni-icons",{staticClass:"uni-noticebar-close uni-cursor-point",attrs:{type:"closeempty",color:t.color,size:"12"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.close.apply(void 0,arguments)}}}):t._e(),!0===t.showIcon||"true"===t.showIcon?a("uni-icons",{staticClass:"uni-noticebar-icon",attrs:{type:"sound",color:t.color,size:"14"}}):t._e(),a("v-uni-view",{ref:"textBox",staticClass:"uni-noticebar__content-wrapper",class:{"uni-noticebar__content-wrapper--scrollable":t.scrollable,"uni-noticebar__content-wrapper--single":!t.scrollable&&(t.single||t.moreText)}},[a("v-uni-view",{staticClass:"uni-noticebar__content",class:{"uni-noticebar__content--scrollable":t.scrollable,"uni-noticebar__content--single":!t.scrollable&&(t.single||t.moreText)},attrs:{id:t.elIdBox}},[a("v-uni-text",{ref:"animationEle",staticClass:"uni-noticebar__content-text",class:{"uni-noticebar__content-text--scrollable":t.scrollable,"uni-noticebar__content-text--single":!t.scrollable&&(t.single||t.moreText)},style:{color:t.color,width:t.wrapWidth+"px",animationDuration:t.animationDuration,"-webkit-animationDuration":t.animationDuration,animationPlayState:t.webviewHide?"paused":t.animationPlayState,"-webkit-animationPlayState":t.webviewHide?"paused":t.animationPlayState,animationDelay:t.animationDelay,"-webkit-animationDelay":t.animationDelay},attrs:{id:t.elId}},[t._v(t._s(t.text))])],1)],1),!0===t.showGetMore||"true"===t.showGetMore?a("v-uni-view",{staticClass:"uni-noticebar__more uni-cursor-point",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickMore.apply(void 0,arguments)}}},[t.moreText?a("v-uni-text",{staticClass:"uni-noticebar__more-text",style:{color:t.moreColor}},[t._v(t._s(t.moreText))]):t._e(),a("uni-icons",{attrs:{type:"arrowright",color:t.moreColor,size:"14"}})],1):t._e()],1):t._e()},o=[]},7382:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-noticebar[data-v-355e078b]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:6px 12px;margin-bottom:10px}.uni-cursor-point[data-v-355e078b]{cursor:pointer}.uni-noticebar-close[data-v-355e078b]{margin-right:5px}.uni-noticebar-icon[data-v-355e078b]{margin-right:5px}.uni-noticebar__content-wrapper[data-v-355e078b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden}.uni-noticebar__content-wrapper--single[data-v-355e078b]{line-height:18px}.uni-noticebar__content-wrapper--single[data-v-355e078b],\n.uni-noticebar__content-wrapper--scrollable[data-v-355e078b]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-noticebar__content-wrapper--scrollable[data-v-355e078b]{position:relative;height:18px}.uni-noticebar__content--scrollable[data-v-355e078b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:block;overflow:hidden}.uni-noticebar__content--single[data-v-355e078b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:0;-webkit-flex:none;flex:none;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-noticebar__content-text[data-v-355e078b]{font-size:14px;line-height:18px;word-break:break-all}.uni-noticebar__content-text--single[data-v-355e078b]{display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.uni-noticebar__content-text--scrollable[data-v-355e078b]{position:absolute;display:block;height:18px;line-height:18px;white-space:nowrap;padding-left:100%;-webkit-animation:notice-data-v-355e078b 10s 0s linear infinite both;animation:notice-data-v-355e078b 10s 0s linear infinite both;-webkit-animation-play-state:paused;animation-play-state:paused}.uni-noticebar__more[data-v-355e078b]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:5px}.uni-noticebar__more-text[data-v-355e078b]{font-size:14px}@-webkit-keyframes notice-data-v-355e078b{100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes notice-data-v-355e078b{100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}',""]),t.exports=i},a022:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.footer-box[data-v-198f491f]{margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%}.footer-box .share-btn[data-v-198f491f]{color:#dd524d;font-size:%?20?%;padding:%?10?% %?15?%;border:1px solid #dd524d;border-radius:%?12?%}.tags[data-v-198f491f]{margin-top:%?15?%}.sex-img[data-v-198f491f]{width:100%;height:100%}.swiper[data-v-198f491f]{width:100%;height:%?750?%}.bom-line[data-v-198f491f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?30?%}',""]),t.exports=i},a35a:function(t,i,a){"use strict";a.r(i);var e=a("ee6b"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},a592:function(t,i,a){"use strict";a.r(i);var e=a("2047"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},abd8:function(t,i,a){"use strict";a.r(i);var e=a("edb7"),n=a("a35a");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("4186");var c,s=a("f0c5"),r=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"198f491f",null,!1,e["a"],c);i["default"]=r.exports},b164:function(t,i,a){var e=a("7382");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("238e9b3e",e,!0,{sourceMap:!1,shadowMode:!1})},cd41:function(t,i,a){"use strict";var e=a("b164"),n=a.n(e);n.a},edb7:function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var e={uniNavBar:a("a0e2").default,uniNoticeBar:a("5075").default,uniCard:a("3174").default,uniCollapse:a("3f6e").default,uniCollapseItem:a("0549").default,uniList:a("6c38").default,uniListItem:a("8606").default,uniTag:a("02fd").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("uni-nav-bar",{attrs:{fixed:!0,color:"#ffffff",backgroundColor:"#000000",leftIcon:"pengyouquan","right-text":"关于",title:"孙大炮"},on:{clickLeft:function(i){arguments[0]=i=t.$handleEvent(i),t.leftClick()},clickRight:function(i){arguments[0]=i=t.$handleEvent(i),t.tipUs()}}}),a("uni-notice-bar",{attrs:{speed:50,scrollable:"true",single:"true",text:t.msg}}),t._l(t.data,(function(i,e){return a("uni-card",{key:e,attrs:{title:i.no,"is-shadow":!0}},[a("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(i.images,(function(t,i){return a("v-uni-swiper-item",{key:i,staticStyle:{width:"100%",height:"750rpx"}},[a("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t,mode:"aspectFit"}})],1)})),1),a("uni-collapse",[a("uni-collapse-item",{attrs:{title:"详情",open:t.isOpen}},[a("uni-list",[a("uni-list-item",{attrs:{title:"CUP",rightText:i.info.cup}}),a("uni-list-item",{attrs:{title:"PRICE",rightText:i.info.price}}),a("uni-list-item",{attrs:{title:"HEIGHT",rightText:i.info.height}})],1)],1)],1),a("v-uni-view",{staticClass:"tags"},t._l(i.tags,(function(t,i){return a("uni-tag",{key:i,staticStyle:{"margin-right":"10rpx"},attrs:{text:t,type:"error",circle:!0,size:"small",inverted:!1}})})),1),a("v-uni-view",{staticClass:"footer-box"},[a("v-uni-view",{staticClass:"share-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sharePage(e)}}},[t._v("分享到推特")]),a("v-uni-view",{staticClass:"share-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shareTg(e)}}},[t._v("分享到Telegram")])],1)],1)})),a("v-uni-view",{staticClass:"bom-line"},[t._v("这是底线啦~")])],2)},o=[]},ee6b:function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=getApp(),e={components:{},data:function(){return{gData:a.globalData,msg:"欢迎关注“孙大炮”频道,分享珠三角一流性息,让天下没有难打的炮",isOpen:!1,indicatorDots:!0,autoplay:!0,interval:3500,duration:500,data:[{no:"#03",info:{height:"160+",cup:"B+",price:"400/p",location:"拱北"},tags:["气质","身材好","吉大"],images:["/static/img/a02/1.jpg","/static/img/a02/2.jpg","/static/img/a02/3.jpg","/static/img/a02/4.jpg","/static/img/a02/5.jpg","/static/img/a02/6.jpg","/static/img/a02/7.jpg"]},{no:"#05",info:{height:"160+",cup:"B+",price:"1000/p",location:"拱北"},tags:["东北","拱北"],images:["/static/img/a03/1.jpg","/static/img/a03/2.jpg","/static/img/a03/3.jpg"]},{no:"#06",info:{height:"161cm",cup:"B+",price:"400/p",location:"拱北"},tags:["身形好","床技好","吉大","四川"],images:["/static/img/a04/1.jpg","/static/img/a04/2.jpg","/static/img/a04/3.jpg"]},{no:"#06",info:{height:"155+",cup:"A",price:"238/p",location:"前山"},tags:["乖巧可爱","飞机师","增值1K+"],images:["/static/img/a05/1.jpg","/static/img/a05/2.jpg","/static/img/a05/3.jpg","/static/img/a05/4.jpg"]},{no:"#07",info:{height:"160",cup:"B",price:"500/p"},tags:["E-CUP",,"温柔","反应敏感"],images:["/static/img/a07/1.jpg","/static/img/a07/2.jpg"]},{no:"#08",info:{height:"160",cup:"C",price:"600+/p"},tags:["唐果儿",,"配合度高","反应敏感"],images:["/static/img/a08/1.jpg","/static/img/a08/2.jpg"]},{no:"#09",info:{height:"160",cup:"E",price:"400+/p"},tags:["意涵",,"天然巨乳","韵味10足"],images:["/static/img/a09/1.jpg","/static/img/a09/2.jpg","/static/img/a09/3.jpg","/static/img/a09/4.jpg"]},{no:"#10",info:{height:"160",cup:"B+",price:"400+/p"},tags:["淼淼","性感"],images:["/static/img/a10/21.jpg","/static/img/a10/22.jpg"]},{no:"#11",info:{height:"160",cup:"B+",price:"200+/f"},tags:["莉莉","飞机"],images:["/static/img/a10/11.jpg","/static/img/a10/12.jpg","/static/img/a10/13.jpg"]},{no:"#12",info:{height:"160",cup:"B+",price:"400+/p"},tags:["淼淼","性感"],images:["/static/img/a10/32 (1).jpg","/static/img/a10/32 (1).png","/static/img/a10/32 (2).jpg"]},{no:"#13",info:{height:"160",cup:"B",price:"300+/f"},tags:["气质","飞机","看人增值"],images:["/static/img/a10/40 (1).jpg","/static/img/a10/40 (2).jpg","/static/img/a10/40 (3).jpg"]},{no:"#14",info:{height:"160",cup:"B",price:"350+/p"},tags:["雪儿","350","高性价比","e-cup"],images:["/static/img/a10/41 (1).jpg","/static/img/a10/41 (2).png","/static/img/a10/41 (1).png"]},{no:"#15",info:{height:"160",cup:"B",price:"300+/f"},tags:["气质","飞机","看人增值"],images:["/static/img/a10/42 (1).jpg","/static/img/a10/42 (2).jpg","/static/img/a10/42 (3).jpg"]},{no:"#16",info:{height:"160",cup:"B",price:"300+/f"},tags:["气质","飞机","看人增值"],images:["/static/img/a10/44 (1).jpg","/static/img/a10/44 (2).jpg","/static/img/a10/44 (3).jpg"]},{no:"#17",info:{height:"160",cup:"B",price:"200+/f"},tags:["气质","飞机","看人增值"],images:["/static/img/a10/43 (1).jpg","/static/img/a10/43 (2).jpg","/static/img/a10/43 (1).png","/static/img/a10/43 (2).png"]},{no:"#18",info:{height:"160",cup:"B",price:"200+/f/p"},tags:["飞机","可增值"],images:["/static/img/a10/45 (1).jpg","/static/img/a10/45 (2).jpg","/static/img/a10/45 (3).jpg"]},{no:"#19",info:{height:"160",cup:"B",price:"400/p"},tags:["SM","增值","斯文"],images:["/static/img/a10/46 (1).jpg","/static/img/a10/46 (2).jpg","/static/img/a10/46 (3).jpg","/static/img/a10/46 (4).jpg"]},{no:"#20",info:{height:"160",cup:"B",price:"200+/f"},tags:["飞机","白衣战袍"],images:["/static/img/a10/47 (1).jpg","/static/img/a10/47 (2).jpg","/static/img/a10/47 (3).jpg"]},{no:"#21",info:{height:"160",cup:"B",price:"200+/f"},tags:["飞机","看人增值"],images:["/static/img/a10/48 (1).jpg","/static/img/a10/48 (2).jpg"]},{no:"#22",info:{height:"160",cup:"B",price:"500/p"},tags:["双胞胎","姐妹花"],images:["/static/img/a10/49 (1).jpg","/static/img/a10/49 (2).jpg","/static/img/a10/49 (3).jpg"]},{no:"#23",info:{height:"160",cup:"C",price:"500/p"},tags:["性感","整型"],images:["/static/img/a10/50 (1).jpg","/static/img/a10/50 (2).jpg","/static/img/a10/50 (3).jpg","/static/img/a10/50 (4).jpg"]},{no:"#24",info:{height:"160",cup:"B-",price:"200+/p"},tags:["东北","飞机"],images:["/static/img/a10/51 (1).png","/static/img/a10/51 (2).png","/static/img/a10/51 (3).png"]},{no:"#25",info:{height:"160",cup:"B",price:"500/p"},tags:["初檬","经典","健身"],images:["/static/img/a10/52 (1).jpg","/static/img/a10/52 (2).jpg","/static/img/a10/52 (3).jpg"]},{no:"#26",info:{height:"160",cup:"B",price:"400/p"},tags:["兼职","性格开朗","中介带"],images:["/static/img/a10/53 (1).jpg","/static/img/a10/53 (2).jpg","/static/img/a10/53 (3).jpg"]},{no:"#27",info:{height:"160",cup:"B",price:"500/p"},tags:["微整","温柔","服务好"],images:["/static/img/a10/55 (1).jpg","/static/img/a10/55 (2).jpg","/static/img/a10/55 (3).jpg"]},{no:"#28",info:{height:"160",cup:"B",price:"500/p"},tags:["飞机","增值","东北味"],images:["/static/img/a10/54 (1).jpg","/static/img/a10/54 (2).jpg"]},{no:"#29",info:{height:"155",cup:"B-",price:"500+/p"},tags:["潮汕","嫩妹","身形好"],images:["/static/img/a10/56 (1).jpg","/static/img/a10/56 (2).jpg","/static/img/a10/56 (3).jpg"]},{no:"#30",info:{height:"155+",cup:"B-",price:"200+/p"},tags:["小问子","飞机","嫩口"],images:["/static/img/a10/57 (1).jpg","/static/img/a10/57 (2).jpg","/static/img/a10/57 (1).jpg"]},{no:"#31",info:{height:"155+",cup:"B-",price:"350/p"},tags:["性价比高","增值"],images:["/static/img/a10/58 (1).jpg","/static/img/a10/58 (2).jpg","/static/img/a10/58 (1).jpg"]},{no:"#32",info:{height:"155+",cup:"B+",price:"400+/p"},tags:["丰满","韵味","配合"],images:["/static/img/a10/59 (1).jpg","/static/img/a10/59 (2).jpg","/static/img/a10/59 (3).jpg"]},{no:"#33",info:{height:"155+",cup:"B+",price:"500+/p"},tags:["紫霞","服务超好","定制需求"],images:["/static/img/a10/60 (1).jpg","/static/img/a10/60 (2).jpg","/static/img/a10/60 (1).jpg"]},{no:"#35",info:{height:"155+",cup:"A+",price:"400+/p"},tags:["日语系","娇小","服务"],images:["/static/img/a10/61 (1).jpg","/static/img/a10/61 (2).jpg","/static/img/a10/61 (1).jpg"]},{no:"#36",info:{height:"158+",cup:"B",price:"500+/p"},tags:["美颜重度"],images:["/static/img/a10/62 (1).jpg","/static/img/a10/62 (2).jpg","/static/img/a10/62 (3).jpg"]},{no:"#37",info:{height:"158+",cup:"B",price:"500+/p"},tags:["配合度高"],images:["/static/img/a10/63 (1).jpg","/static/img/a10/63 (2).jpg","/static/img/a10/63 (1).jpg"]},{no:"#38",info:{height:"158+",cup:"B",price:"300+/p"},tags:["飞机","会所出身"],images:["/static/img/a10/64 (1).jpg","/static/img/a10/64 (2).jpg","/static/img/a10/64 (1).jpg"]},{no:"#39",info:{height:"160+",cup:"C",price:"500+/p"},tags:["乐乐","服务超好","柔软","女人味足"],images:["/static/img/a11/11.jpg"]},{no:"#40",info:{height:"158+",cup:"B",price:"500+/p"},tags:["米粒","颜值"],images:["/static/img/a11/12 (1).jpg","/static/img/a11/12 (2).jpg"]}]}},onLoad:function(t){},mounted:function(){this.gData},onShow:function(){},methods:{goShare:function(){uni.navigateTo({url:"/pages/share/index"})},tipUs:function(){uni.navigateTo({url:"/pages/about/index"})},leftClick:function(){uni.reLaunch({url:"/pages/index/index"})},sharePage:function(t){window.open("https://twitter.com/share?text=珠海开课"+this.data[t].tags[0]+this.data[t].tags[1]+"&url=https://blackmarys.github.io/blackmaries?id="+t)},shareTg:function(t){window.open("https://telegram.me/share/?text=珠海开课"+this.data[t].tags[0]+this.data[t].tags[1]+"&url=https://blackmarys.github.io/blackmaries?id="+t)}},onReachBottom:function(){}};i.default=e}).call(this,a("5a52")["default"])}}]);