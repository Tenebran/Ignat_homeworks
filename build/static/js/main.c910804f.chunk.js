(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){e.exports={blue:"HW4_blue__3Ul5m",column:"HW4_column__1vX2o",testSpanError:"HW4_testSpanError__ggTHW"}},19:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2rpFl",errorInput:"SuperInputText_errorInput__26h5d",error:"SuperInputText_error__3A_dF"}},20:function(e,t,n){e.exports={default:"SuperButton_default__2KR1X",red:"SuperButton_red__3pb2v"}},21:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1AdJ1",spanClassName:"SuperCheckbox_spanClassName__ovqNV"}},25:function(e,t,n){e.exports={App:"App_App__1MSZ3"}},34:function(e,t,n){},35:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(24),s=n.n(a),i=(n(34),n(25)),o=n.n(i),j=n(10),l=(n(35),n(0));var u=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("nav",{className:"header__wrapper",children:[Object(l.jsx)(j.b,{className:"header__wrapper__link",to:"/pre-junior",children:"Pre-junior"}),Object(l.jsx)(j.b,{className:"header__wrapper__link",to:"/junior",children:"Junior"}),Object(l.jsx)(j.b,{className:"header__wrapper__link",to:"/junior-plus",children:"JuniorPlus"})]})})},b=n(2);n(45);var d=function(){return Object(l.jsxs)("div",{className:"error",children:[Object(l.jsx)("div",{className:"error__title",children:"404"}),Object(l.jsx)("div",{className:"error__title",children:"Page not found!"}),Object(l.jsx)("div",{className:"error__title",children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},h=n(4),O=n(8),x=n(9),m=n(19),p=n.n(m),f=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(x.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(p.a.error," ").concat(i||""),u="".concat(p.a.errorInput," ").concat(s);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(O.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:u},o)),a&&Object(l.jsx)("span",{className:j,children:a})]})},_=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,a=Object(x.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(h.a)(s,2),o=i[0],j=(i[1],c||{}),u=j.children,b=j.onDoubleClick,d=j.className,m=Object(x.a)(j,["children","onDoubleClick","className"]),p="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",d);return Object(l.jsx)(l.Fragment,{children:o?Object(l.jsx)(f,Object(O.a)({autoFocus:!0,onBlur:function(e){t&&t(e)},onEnter:function(){n&&n()}},a)):Object(l.jsx)("span",Object(O.a)(Object(O.a)({onDoubleClick:function(e){b&&b(e)},className:p},m),{},{children:u||a.value}))})},v=n(20),g=n.n(v),N=function(e){var t=e.red,n=e.className,r=Object(x.a)(e,["red","className"]),c="".concat(t?g.a.red:g.a.default," ").concat(n);return Object(l.jsx)("button",Object(O.a)({className:c},r))};function k(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}k("test",{x:"A",y:1});!function(e,t){var n=t,r=localStorage.getItem(e);null!==r&&(n=JSON.parse(r))}("test",{x:"",y:0});var C=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 6",Object(l.jsx)("div",{children:Object(l.jsx)(_,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(l.jsx)(N,{onClick:function(){k("editable-span-value",n)},children:"save"}),Object(l.jsx)(N,{onClick:function(){},children:"restore"}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},w=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(C,{})})};function S(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Junior Plus"})})}var y=function(){return Object(l.jsx)("div",{})};n(46);var P=function(e){return Object(l.jsxs)("div",{className:"message",children:[Object(l.jsx)("div",{className:"message__image-wrapper",children:Object(l.jsx)("img",{className:"message__avatar",src:e.avatar,alt:"avatar"})}),Object(l.jsxs)("div",{className:"message__text-wrapper",children:[Object(l.jsx)("div",{className:"message__text__login",children:e.name}),Object(l.jsx)("div",{className:"message__text__message",children:e.message}),Object(l.jsx)("div",{className:"message__text__time",children:e.time})]})]})},A="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",F="Some Name",T="some text",E="22:00";var I=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(l.jsx)(P,{avatar:A,name:F,message:T,time:E}),Object(l.jsx)(P,{avatar:A,name:F,message:T,time:E}),Object(l.jsx)(P,{avatar:A,name:F,message:T,time:E}),Object(l.jsx)("hr",{}),"\u0434\u043b\u044f \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u0430, \u043c\u043e\u0433\u0443 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c",Object(l.jsx)(y,{}),Object(l.jsx)("hr",{})]})};var H=function(e){return Object(l.jsxs)("div",{className:"list",children:[Object(l.jsxs)("div",{className:"list__wrapper",children:[" ",e.affair.name]}),Object(l.jsx)("button",{className:"button",onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var J=function(e){var t=e.data.map((function(t){return Object(l.jsx)(H,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(l.jsxs)("div",{className:"btn__wrapper",children:[t,Object(l.jsx)("button",{className:"btn",onClick:function(){e.setFilter("all")},children:"All"}),Object(l.jsx)("button",{className:"btn",onClick:function(){e.setFilter("high")},children:"High"}),Object(l.jsx)("button",{className:"btn",onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(l.jsx)("button",{className:"btn",onClick:function(){e.setFilter("low")},children:"Low"})]})},B=(n(47),[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}]);var U=function(){var e=Object(r.useState)(B),t=Object(h.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),s=Object(h.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)("hr",{}),Object(l.jsx)(J,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},W=n(29),K=n(28),X=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.error,a=e.totalUsers,s=e.onKeyPressHandler;return Object(l.jsxs)("div",{className:"greeting",children:[Object(l.jsx)("input",{value:t,onChange:n,className:c?"error":"greeting__input",onKeyPress:s}),c?Object(l.jsx)("div",{className:"error__title",children:c}):Object(l.jsx)(l.Fragment,{}),Object(l.jsx)("div",{className:"greeting__wrapper__btn",children:Object(l.jsx)("button",{className:"greeting__button",onClick:r,children:"add"})}),Object(l.jsxs)("div",{className:"greeting__total",children:["ToTal Users: ",a]})]})},D=function(e){var t=e.users,n=e.addUserCallback,c=Object(r.useState)(""),a=Object(h.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),j=Object(h.a)(o,2),u=j[0],b=j[1],d=function(){if(""===s.trim())return i(""),void b("Please Name");alert("Hello  ".concat(s,"!")),b(""),n(s),i("")},O=t.length;return Object(l.jsx)(X,{name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:d,error:u,totalUsers:O,onKeyPressHandler:function(e){b(""),"Enter"===e.key&&d()}})};n(50);var M=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1];return console.log(n),Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 3",Object(l.jsx)(D,{users:n,addUserCallback:function(e){var t={name:e,_id:Object(K.v1)()},r=[].concat(Object(W.a)(n),[t]);c(r)}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},q=n(15),R=n.n(q),Z=n(21),G=n.n(Z),L=function(e){e.type,e.onChange,e.onChangeChecked;var t=e.className,n=(e.spanClassName,e.children),r=Object(x.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(G.a.checkbox," ").concat(t||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(O.a)({type:"checkbox",onChange:function(e){},className:c},r)),n&&Object(l.jsx)("span",{className:G.a.spanClassName,children:n})]})};var V=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(h.a)(i,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 4",Object(l.jsxs)("div",{className:R.a.column,children:[Object(l.jsx)(f,{value:n,onChangeText:c,onEnter:s,error:a,className:R.a.testSpanError}),Object(l.jsx)(f,{className:R.a.blue}),Object(l.jsx)(N,{children:"default"}),Object(l.jsx)(N,{red:!0,onClick:s,children:"delete "}),Object(l.jsx)(N,{disabled:!0,children:"disabled"}),Object(l.jsx)(L,{checked:j,onChangeChecked:u,children:"some text "}),Object(l.jsx)(L,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var Y=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(I,{}),Object(l.jsx)(U,{}),Object(l.jsx)(M,{}),Object(l.jsx)(V,{})]})},$="/pre-junior",z="/junior",Q="/junior-plus",ee="/404";var te=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(b.d,{children:[Object(l.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(b.a,{to:$})}}),Object(l.jsx)(b.b,{path:$,render:function(){return Object(l.jsx)(Y,{})}}),Object(l.jsx)(b.b,{path:z,render:function(){return Object(l.jsx)(w,{})}}),Object(l.jsx)(b.b,{path:Q,render:function(){return Object(l.jsx)(S,{})}}),Object(l.jsx)(b.b,{path:ee,render:function(){return Object(l.jsx)(d,{})}}),Object(l.jsx)(b.a,{from:"*",to:"/404"})]})})};var ne=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(te,{})]})})};var re=function(){return Object(l.jsxs)("div",{className:o.a.App,children:[Object(l.jsx)("div",{children:"react homeworks:"}),Object(l.jsx)(ne,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(re,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.c910804f.chunk.js.map