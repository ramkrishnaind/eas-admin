(this["webpackJsonpcsv-reader"]=this["webpackJsonpcsv-reader"]||[]).push([[0],{40:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(8),s=n.n(r),a=(n(40),n(32),n(5)),i=(n(18),n(9)),l=n.n(i),o=n(10),u=n(7),j=n(77),f=(n(17),n(12)),b=n.n(f),p=n(4),d=n(3);function h(e){var t=Object(c.useState)(),n=Object(u.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)([]),f=Object(u.a)(i,2),h=f[0],O=f[1],m=Object(c.useState)([]),v=Object(u.a)(m,2),x=v[0],g=v[1],k=Object(c.useState)([]),y=Object(u.a)(k,2),S=y[0],w=y[1],E=Object(c.useState)({}),N=Object(u.a)(E,2),P=N[0],C=N[1],F=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)(r);case 2:t=e.sent,O(t[0]),J(t[0],t.slice(1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e,t){var n=Object(a.a)(x),c=t.map((function(t){var c,r=e.reduce((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,s=arguments.length>2?arguments[2]:void 0;if(s<=5){var i=t[s];if(1===s&&(c=i),"Jobs"===r){var l=n.find((function(e){return e.secSkill===c}));i=(i=(i=i||"").split(",")).map((function(e){return e.replace("\t","").trim()}));var o=[];if(i.forEach((function(e){o.includes(e)||o.push(e)})),(i=o).length>0)if(l){var u=[];l.jobs.forEach((function(e){u.includes(e)||u.push(e)})),l.jobs=u}else l={secSkill:c,jobs:Object(a.a)(i)};var j=n.some((function(e){return e.secSkill===c}));j||n.push(l),n=n.map((function(e){return e.secSkill===c?l:e}))}"Top Products"===r&&(i=(i=i.split(",")).map((function(e){return e.trim()}))),e[r]=i}return e}),{});return r}));g(n),w(c);var r={};t.forEach((function(t){e.forEach((function(e,c){if(c<=5){if(0===c){var s=t[0];null===s||0!==Object.keys(r).length&&r[s]||(r[s]={})}if(1===c){var a=n.find((function(e){return e.secSkill===t[1]})),i={};a&&(i.jobs=a.jobs),null!==t[0]?r[t[0]][t[1]]&&0!==Object.keys(r[t[0]]).length||(r[t[0]][t[1]]=i):r[t[1]]||(r[t[1]]=i)}if(2===c&&(null!==t[0]?r[t[0]][t[1]][t[2]]&&0!==Object.keys(r[t[0]][t[1]]).length||(r[t[0]][t[1]][t[2]]={}):(0===Object.keys(r[t[1]]).length||r[t[1]].keys&&!r[t[1]][t[2]])&&(r[t[1]][t[2]]={})),"Top Products"===e){var l=t[c];l=(l=l.split(",")).map((function(e){return e.trim()})),null!==t[0]?r[t[0]][t[1]][t[2]]=l:r[t[1]][t[2]]=l}}}))})),C(r)};console.log("csvArray",S),console.log("secSkillUniqueJobs",x),console.log("stepsObject",P);var A=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("talentProfileFile",r),t.append("steps",JSON.stringify(P)),e.prev=3,e.next=6,b.a.post("".concat("https://eas-works.herokuapp.com","/api/talentProfile/setTalentProfileSteps"),t);case 6:n=e.sent,console.log("file upload",n.data.talentProfileUpload),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("form",{id:"csv-form",className:"col-xs-9",children:Object(d.jsxs)(p.b,{className:"mt-5",children:[Object(d.jsxs)(p.f,{className:"justify-content-center mb-3",children:[Object(d.jsx)(p.a,{sm:10,children:Object(d.jsx)(p.d,{name:"file",type:"file",accept:".xlsx",id:"csvFile",onClick:function(e){w([])},onChange:function(e){s(e.target.files[0])}})}),Object(d.jsx)(p.a,{sm:"auto",className:"p-0",children:Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),r&&F()},style:{padding:"5px"},children:"Upload Excel"})})]}),S.length>0&&Object(d.jsx)(p.f,{className:"justify-content-center mb-3",children:Object(d.jsx)(p.a,{xs:1,children:Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),A()},style:{padding:"5px"},children:"Submit"})})})]})}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),S.length>0?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(p.g,{bordered:!0,striped:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{className:"question-header",children:h.map((function(e,t){return Object(d.jsx)("th",{children:e},t)}))})}),Object(d.jsx)("tbody",{children:S.map((function(e,t){return Object(d.jsx)("tr",{children:h.map((function(t,n){return n<=3?Object(d.jsx)("td",{children:e[h[n]]}):null}))},t)}))})]})}):null]})}n(68);console.log("REACT_APP_SERVER_URL","https://eas-works.herokuapp.com");var O=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(h,{})})};n(69);s.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.dc357f54.chunk.js.map