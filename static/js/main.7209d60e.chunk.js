(this["webpackJsonpcsv-reader"]=this["webpackJsonpcsv-reader"]||[]).push([[0],{40:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(7),o=n.n(s),a=(n(40),n(33)),r=n(29),i=n(6),u=n(15),l=n(10),p=n.n(l),d=n(17),j=n(8),b=n(78),f=n(18),h=n.n(f),m=n(19),O=n.n(m),x=n(4),g=n(3),w=["Cert related","Domain","File name","Module (specific)","No of Questions?","Nos","Product","Product specific","Question Mode","Question Type","Skill Level","Source code","Source type","questionAnswers","commentsRow"];function v(e){var t=Object(c.useState)(),n=Object(j.a)(t,2),s=n[0],o=n[1],l=Object(c.useState)([]),f=Object(j.a)(l,2),m=f[0],v=f[1],C=Object(c.useState)([]),k=Object(j.a)(C,2),y=k[0],q=k[1],L=Object(c.useState)([]),N=Object(j.a)(L,2),S=(N[0],N[1]),A=Object(c.useState)([]),T=Object(j.a)(A,2),Q=T[0],E=T[1],R=Object(c.useState)(),D=Object(j.a)(R,2),F=D[0],M=D[1],P=Object(c.useState)(),U=Object(j.a)(P,2),_=U[0],W=U[1],I=Object(c.useRef)(),J=function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)(s);case 2:t=e.sent,v(t[0]),n=[],t[0].forEach((function(e){(e=e||"").toLowerCase().includes("option ")&&n.push(e.toLowerCase().replace("option ","").toLowerCase())})),S(n),H(t[0],t.slice(1));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=Object(c.useCallback)((function(e,t){var n=F?Object(u.a)({},F):{};n[e]=n[e].filter((function(e,n){return n!==t})),M(n)}),[F]),V=Object(c.useCallback)((function(e,t){var n=F?Object(u.a)({},F):{},c=Object(i.a)(Q);c.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))||(c[c.length]=t,E(c)),n[e].some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))||(n[e]=[].concat(Object(i.a)(n[e]),[t]),M(n))}),[F]),z=Object(c.useCallback)((function(e){var t=_?Object(i.a)(_):[];t.filter((function(t,n){return n!==e})),Object(r.a)("prevTags"),W(t)}),[F]),G=Object(c.useCallback)((function(e){var t=_?Object(i.a)(_):[],n=Object(i.a)(Q);n.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))||(n[n.length]=e,E(n)),t.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))||(t=[].concat(Object(i.a)(t),[e]),W(t))}),[_]),H=function(e,t){var n=t.map((function(t){var n=[],c=e.reduce((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0,s=arguments.length>2?arguments[2]:void 0,o=t[s];return"Answers"===c&&(o=(o=o.split(",")).map((function(e){return e.trim()})),e.single=1===o.length),"Tags"===c&&o&&(o=(o=o.split(",")).map((function(e){return e.trim()}))),c.toLowerCase().includes("option")&&o&&n.push(c.toLowerCase().replace("option ","")),e[c]=o,e}),{}),s=n.map((function(e){return{option:e,answer:c.Answers.some((function(t){return t===e}))}}));return c.questionAnswers=s,c}));q(n);var c={};n.map((function(e,t){if(e&&e.Tags){var n=e.Tags.map((function(e,t){return{id:t,name:e}}));c[t]=n}else c[t]=[]}));var s=[];n.forEach((function(e,t){e.Tags&&e.Tags.length>0&&e.Tags.forEach((function(e){s.some((function(t){return t.name===e}))||s.push({id:s.length,name:e})}))})),E(s),W(s),M(c)},K=function(){var e=Object(d.a)(p.a.mark((function e(){var t,n,c,o,r,i,l,d,j,b,f,h,m,x,g,v;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y[0],n=t["Cert related"],c=t.Domain,t["File name"],t["Module (specific)"],t["No of Questions?"],t.Nos,o=t.Product,r=t["Product specific"],i=t["Question Mode"],l=t["Question Type"],d=t["Skill Level"],j=t["Source code"],b=t["Source type"],f=t.comments,h=y.slice(1).map((function(e){e["Cert related"];var t=e.Domain,c=(e["File name"],e["Module (specific)"],e["No of Questions?"],e.Nos,e.Product),o=(e["Product specific"],e["Question Mode"],e["Question Type"],e["Skill Level"],e["Source code"],e["Source type"],e.questionAnswers),p=(e.commentsRow,Object(a.a)(e,w)),h=Object(u.a)({},p);h.certRelated=n,h.domain=t,h.product=c,h.fileName=s.name,h.productSpecific=r,h.questionMode=i,h.questionType=l,h.skillLevel=d,h.sourceCode=j,h.sourceType=b,h.comments=f;var m=[];return o.forEach((function(e){"Option ".concat(e.option)in h&&m.push({option:h["Option ".concat(e.option)],answer:e.answer})})),h.optionsWithAnswers=m,h})),(m=new FormData).append("questionFile",s),_.forEach((function(e){m.append("tags",e.name)})),m.append("certRelated",n),m.append("domain",c),m.append("noOfQuestions",h.length),m.append("product",o),m.append("productSpecific",r),m.append("questionMode",i),m.append("questionType",l),m.append("skillLevel",d),m.append("sourceCode",j),m.append("sourceType",b),m.append("comments",f),e.prev=16,e.next=19,O.a.post("".concat("http://localhost:3334","/api/questions/upload"),m);case 19:if(x=e.sent,console.log("file upload",x.data.qnsUpload),!x.data.status){e.next=27;break}return g=h.map((function(e){return{question:e.Question,optionsWithAnswers:e.optionsWithAnswers||[],single:e.single,fileName:e.fileName,tags:e.Tags||[],fileUploadId:x.data.qnsUpload._id}})),e.next=25,O.a.post("".concat("http://localhost:3334","/api/questions/setQuestions"),{questions:g});case 25:v=e.sent,console.log("questions",v.data.questions);case 27:e.next=31;break;case 29:e.prev=29,e.t0=e.catch(16);case 31:case"end":return e.stop()}}),e,null,[[16,29]])})));return function(){return e.apply(this,arguments)}}(),X=function(e,t,n){var c=function(t){var n=Object(i.a)(y),c=Object(i.a)(n[e].questionAnswers);c=c.map((function(e){return e.option===t.target.value?e.answer=!0:e.answer=!1,e})),n[e].questionAnswers=c,q(n)},s=function(t){var n=Object(i.a)(y),c=Object(i.a)(n[e].questionAnswers);c=c.map((function(e){return e.option===t.target.value&&(e.answer=!e.answer),e})),n[e].questionAnswers=c,q(n)};return t?Object(g.jsx)(x.c,{check:!0,children:Object(g.jsx)(x.b,{children:Object(g.jsx)(x.f,{children:n.map((function(t){return Object(g.jsxs)(x.a,{children:[Object(g.jsx)(x.d,{type:"radio",name:"radio".concat(e),checked:t.answer,value:t.option,onChange:c}),Object(g.jsx)(x.e,{check:!0,children:t.option})]})}))})})}):Object(g.jsx)(x.b,{children:Object(g.jsx)(x.f,{children:Object(g.jsx)(x.a,{children:n.map((function(e){return Object(g.jsxs)(x.c,{check:!0,children:[Object(g.jsx)(x.d,{type:"checkbox",checked:e.answer,value:e.option,onChange:s}),Object(g.jsx)(x.e,{check:!0,children:e.option})]})}))})})})};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("form",{id:"csv-form",className:"col-xs-9",children:Object(g.jsxs)(x.b,{className:"mt-5",children:[Object(g.jsxs)(x.f,{className:"justify-content-center mb-3",children:[Object(g.jsx)(x.a,{sm:10,children:Object(g.jsx)(x.d,{name:"file",type:"file",accept:".xlsx",id:"csvFile",onClick:function(e){q([]),W([])},onChange:function(e){o(e.target.files[0])}})}),Object(g.jsx)(x.a,{sm:"auto",className:"p-0",children:Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),s&&J()},style:{padding:"5px"},children:"Upload Excel"})})]}),Q&&Q.length>0&&Object(g.jsx)(x.f,{className:"justify-content-center mb-3",children:Object(g.jsx)(h.a,{ref:I,minQueryLength:1,tags:_||[],allowNew:!0,suggestions:Q||[],onDelete:z,onAddition:G})}),y.length>0&&Object(g.jsx)(x.f,{className:"justify-content-center mb-3",children:Object(g.jsx)(x.a,{xs:1,children:Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),K()},style:{padding:"5px"},children:"Submit"})})})]})}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),y.length>0?Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(x.g,{bordered:!0,striped:!0,hover:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsx)("tr",{className:"question-header",children:m.map((function(e,t){return Object(g.jsx)("th",{children:e})}))})}),Object(g.jsx)("tbody",{children:y.map((function(e,t){return Object(g.jsx)("tr",{children:m.map((function(n,c){return 0===c?Object(g.jsx)("td",{className:"question-first-col",children:e[m[c]]}):"Tags"===n?Object(g.jsx)("td",{children:Object(g.jsx)(h.a,{ref:I,minQueryLength:1,tags:F?F[t]:[],allowNew:!0,suggestions:Q||[],onDelete:B.bind(null,t),onAddition:V.bind(null,t)})}):"Answers"===n?Object(g.jsx)("td",{children:X(t,e.single,e.questionAnswers)}):Object(g.jsx)("td",{children:e[m[c]]})}))},t)}))})]})}):null]})}n(68);console.log("REACT_APP_SERVER_URL","http://localhost:3334");var C=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(v,{})})};n(69);o.a.render(Object(g.jsx)(C,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.7209d60e.chunk.js.map