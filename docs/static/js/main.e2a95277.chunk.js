(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),a=n.n(r),i=(n(15),n(2)),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(c.useState)(),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a].concat(Object(s.a)(e))})),o(""))},children:[Object(u.jsxs)("h2",{children:[" ",a]}),Object(u.jsx)("input",{type:"text",value:a,onChange:function(e){o(e.target.value)}})]})},j=n(10),d=n(6),l=n.n(d),b=n(8),p=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,c,r,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=OMiXoC35cGBjOE62O5agYdb6Fk501Lm1"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,a=r.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.url,n=e.title;return Object(u.jsxs)("div",{class:"card animate__bounceIn",children:[Object(u.jsx)("img",{src:t,alt:n}),Object(u.jsx)("p",{children:n})]})},f=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){p(e).then((function(e){setTimeout((function(){a({data:e,loading:!1})}),3e3)}))}),[e]),r}(t),r=n.data,a=n.loading;return console.log(),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"animate__shakeX",children:t}),Object(u.jsxs)("div",{class:"card-grid",children:[a&&"Cargando...",r.map((function(e){return Object(u.jsx)(O,Object(j.a)({},e),e.id)}))]})]})},h=function(){var e=Object(c.useState)(["One Piece"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"animate__backInDown",children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(f,{category:e},e)}))})]})};document.querySelector("#root");a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e2a95277.chunk.js.map