(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-302a2c26"],{"2e81":function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23");Object(n["y"])("data-v-902632f6");var b={id:"members-view",class:"page-view"},s=Object(n["h"])("h1",{class:"page-title"},"成员",-1),r=Object(n["h"])("hr",null,null,-1),a={id:"members-count"},l=Object(n["h"])("h2",null,"现任成员",-1),i={id:"present-members-list",class:"members-list"},m={class:"member-name"},j={class:"member-grade"},O=Object(n["h"])("br",null,null,-1),u=Object(n["h"])("h2",null,"历史成员",-1),h={id:"history-members-list",class:"members-list"},o={class:"member-name"},p={class:"member-grade"},d=Object(n["h"])("p",null,"注：若已为音游部成员但没有录入进成员名单，请在群内 @ 音游部部长或发起私聊，附上自己的班级和姓名（如 2021届3班 陈家乐）",-1),v=Object(n["h"])("p",{id:"rank-notice"},"*排名不分先后",-1);function f(e,t,c,f,g,y){return Object(n["v"])(),Object(n["g"])("div",b,[s,r,Object(n["h"])("p",a,"总计 "+Object(n["E"])(e.presentMembers.length+e.historyMembers.length)+" 人",1),l,Object(n["h"])("p",null,"总计 "+Object(n["E"])(e.presentMembers.length)+" 人",1),Object(n["h"])("div",i,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(e.presentMembers,(function(e,t){return Object(n["v"])(),Object(n["g"])("div",{class:"member-item",key:t},[Object(n["h"])("p",m,Object(n["E"])(e.name),1),Object(n["h"])("p",j,Object(n["E"])(e.grade)+" 届 "+Object(n["E"])(e.class)+" 班",1)])})),128))]),O,u,Object(n["h"])("p",null,"总计 "+Object(n["E"])(e.historyMembers.length)+" 人",1),Object(n["h"])("div",h,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(e.historyMembers,(function(e,t){return Object(n["v"])(),Object(n["g"])("div",{class:"member-item",key:t},[Object(n["h"])("p",o,Object(n["E"])(e.name),1),Object(n["h"])("p",p,Object(n["E"])(e.grade)+" 届 "+Object(n["E"])(e.class)+" 班",1)])})),128))]),d,v])}Object(n["w"])();var g=c("bc3a"),y=c.n(g),w=Object(n["l"])({name:"MembersView",components:{},setup:function(){var e=Object(n["A"])([]),t=Object(n["A"])([]);return y.a.get("/data/members/present.json").then((function(c){y.a.get("/data/members/history.json").then((function(n){e.value=c.data,t.value=n.data}))})),{presentMembers:e,historyMembers:t}}});c("9041");w.render=f,w.__scopeId="data-v-902632f6";t["default"]=w},9041:function(e,t,c){"use strict";c("fc17")},b0c0:function(e,t,c){var n=c("83ab"),b=c("9bf2").f,s=Function.prototype,r=s.toString,a=/^\s*function ([^ (]*)/,l="name";n&&!(l in s)&&b(s,l,{configurable:!0,get:function(){try{return r.call(this).match(a)[1]}catch(e){return""}}})},fc17:function(e,t,c){}}]);
//# sourceMappingURL=chunk-302a2c26.3d1743f8.js.map