(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports={default:"SuperButton_default__2KR1X",red:"SuperButton_red__3pb2v",disable:"SuperButton_disable__2ZE_p"}},,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2rpFl",superInputError:"SuperInputText_superInputError__2r69g",error:"SuperInputText_error__3A_dF"}},,,,function(e,t,n){e.exports={column:"HW4_column__1vX2o",testSpanError:"HW4_testSpanError__ggTHW"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1AdJ1",spanClassName:"SuperCheckbox_spanClassName__ovqNV"}},,,,function(e,t,n){e.exports={App:"App_App__1MSZ3"}},,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(24),s=n.n(a),i=(n(34),n(25)),o=n.n(i),j=n(10),l=(n(35),n(0));var u=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("nav",{className:"header__wrapper",children:[Object(l.jsx)(j.b,{className:"header__wrapper__link",to:"/pre-junior",children:"Pre-junior"}),Object(l.jsx)(j.b,{className:"header__wrapper__link",to:"/junior",children:"Junior"}),Object(l.jsx)(j.b,{className:"header__wrapper__link",to:"/junior-plus",children:"JuniorPlus"})]})})},b=n(2);n(45);var d=function(){return Object(l.jsxs)("div",{className:"error",children:[Object(l.jsx)("div",{className:"error__title",children:"404"}),Object(l.jsx)("div",{className:"error__title",children:"Page not found!"}),Object(l.jsx)("div",{className:"error__title",children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},h=n(4),O=n(7),x=n(6),p=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,c=Object(x.a)(e,["options","onChange","onChangeOption"]);return Object(l.jsx)("select",Object(O.a)(Object(O.a)({onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},c),{},{className:"hw7__select",children:t?t.map((function(e,t){if(e)return Object(l.jsx)("option",{value:e,children:e},"".concat(t))})):""}))},m=function(e){e.type;var t=e.name,n=e.options,r=e.value,c=e.onChange,a=e.onChangeOption,s=(Object(x.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),a&&a(e.target.value)}),i=n?n.map((function(e,n){return Object(l.jsxs)("label",{className:"hw7__checkbox",children:[Object(l.jsx)("input",{type:"radio",value:e,checked:e===r,onChange:s,name:t}),e]},t+"-"+n)})):[];return Object(l.jsx)(l.Fragment,{children:i})},v=(n(46),["x","y","z"]);var f=function(){var e=Object(r.useState)(v[1]),t=Object(h.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 7",Object(l.jsxs)("div",{className:"hw7",children:[Object(l.jsx)("div",{children:Object(l.jsx)(p,{options:v,value:n,onChangeOption:c})}),Object(l.jsx)("div",{children:Object(l.jsx)(m,{name:"radio",options:v,value:n,onChangeOption:c})}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})]})},_=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(f,{})})};function g(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Junior Plus"})})}var N=function(){return Object(l.jsx)("div",{})};n(47);var C=function(e){return Object(l.jsxs)("div",{className:"message",children:[Object(l.jsx)("div",{className:"message__image-wrapper",children:Object(l.jsx)("img",{className:"message__avatar",src:e.avatar,alt:"avatar"})}),Object(l.jsxs)("div",{className:"message__text-wrapper",children:[Object(l.jsx)("div",{className:"message__text__login",children:e.name}),Object(l.jsx)("div",{className:"message__text__message",children:e.message}),Object(l.jsx)("div",{className:"message__text__time",children:e.time})]})]})},k="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",w="Some Name",y="some text",S="22:00";var E=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(l.jsx)(C,{avatar:k,name:w,message:y,time:S}),Object(l.jsx)(C,{avatar:k,name:w,message:y,time:S}),Object(l.jsx)(C,{avatar:k,name:w,message:y,time:S}),Object(l.jsx)("hr",{}),"\u0434\u043b\u044f \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u0430, \u043c\u043e\u0433\u0443 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c",Object(l.jsx)(N,{}),Object(l.jsx)("hr",{})]})};var A=function(e){return Object(l.jsxs)("div",{className:"list",children:[Object(l.jsxs)("div",{className:"list__wrapper",children:[" ",e.affair.name]}),Object(l.jsx)("button",{className:"button",onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var T=function(e){var t=e.data.map((function(t){return Object(l.jsx)(A,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(l.jsxs)("div",{className:"btn__wrapper",children:[t,Object(l.jsx)("button",{className:"btn",onClick:function(){e.setFilter("all")},children:"All"}),Object(l.jsx)("button",{className:"btn",onClick:function(){e.setFilter("high")},children:"High"}),Object(l.jsx)("button",{className:"btn",onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(l.jsx)("button",{className:"btn",onClick:function(){e.setFilter("low")},children:"Low"})]})},F=(n(48),[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}]);var P=function(){var e=Object(r.useState)(F),t=Object(h.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),s=Object(h.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)("hr",{}),Object(l.jsx)(T,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},I=n(29),B=n(28),J=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.error,a=e.totalUsers,s=e.onKeyPressHandler;return Object(l.jsxs)("div",{className:"greeting",children:[Object(l.jsx)("input",{value:t,onChange:n,className:c?"error":"greeting__input",onKeyPress:s}),c?Object(l.jsx)("div",{className:"error__title",children:c}):Object(l.jsx)(l.Fragment,{}),Object(l.jsx)("div",{className:"greeting__wrapper__btn",children:Object(l.jsx)("button",{className:"greeting__button",onClick:r,children:"add"})}),Object(l.jsxs)("div",{className:"greeting__total",children:["ToTal Users: ",a]})]})},H=function(e){var t=e.users,n=e.addUserCallback,c=Object(r.useState)(""),a=Object(h.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),j=Object(h.a)(o,2),u=j[0],b=j[1],d=function(){if(""===s.trim())return i(""),void b("Please Name");alert("Hello  ".concat(s,"!")),b(""),n(s),i("")},O=t.length;return Object(l.jsx)(J,{name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:d,error:u,totalUsers:O,onKeyPressHandler:function(e){b(""),"Enter"===e.key&&d()}})};n(51);var K=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1];return console.log(n),Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 3",Object(l.jsx)(H,{users:n,addUserCallback:function(e){var t={name:e,_id:Object(B.v1)()},r=[].concat(Object(I.a)(n),[t]);c(r)}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},U=n(16),W=n.n(U),M=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(x.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(W.a.error," ").concat(i||""),u="".concat(W.a.superInputError," ").concat(s||"");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(O.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:a?u:W.a.superInput},o)),a&&Object(l.jsx)("span",{className:j,children:a})]})},V=n(20),L=n.n(V),X=n(12),D=n.n(X),R=function(e){var t=e.red,n=e.className,r=Object(x.a)(e,["red","className"]),c="".concat(t?"".concat(D.a.red," ").concat(D.a.default):D.a.default," ").concat(n);return Object(l.jsx)("button",Object(O.a)({className:c},r))},Z=n(21),q=n.n(Z),z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(x.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(q.a.checkbox," ").concat(r||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(O.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(l.jsx)("span",{className:q.a.spanClassName,children:c})]})};var Y=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(h.a)(i,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 4",Object(l.jsxs)("div",{className:L.a.column,children:[Object(l.jsx)(M,{value:n,onChangeText:c,onEnter:s,error:a,className:L.a.testSpanError}),Object(l.jsx)(M,{}),Object(l.jsx)(R,{children:"default"}),Object(l.jsx)(R,{red:!0,onClick:s,children:"delete "}),Object(l.jsx)(R,{className:D.a.disable,children:"disabled"}),Object(l.jsx)(z,{checked:j,onChangeChecked:u,children:"some text "}),Object(l.jsx)(z,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};function G(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function $(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}G("test",{x:"A",y:1});$("test",{x:"",y:0}),n(52);var Q=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,a=Object(x.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(h.a)(s,2),o=i[0],j=i[1],u=c||{},b=u.children,d=u.onDoubleClick,p=u.className,m=Object(x.a)(u,["children","onDoubleClick","className"]),v="spanstyle".concat(" ",p);return Object(l.jsx)(l.Fragment,{children:o?Object(l.jsx)(M,Object(O.a)({autoFocus:!0,onBlur:function(e){j(!1),G("inputValue",a.value),t&&t(e)},onEnter:function(){j(!1),G("inputValue",a.value),n&&n()}},a)):Object(l.jsxs)("span",Object(O.a)(Object(O.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:v},m),{},{children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"20",height:"20",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16",children:Object(l.jsx)("g",{fill:"currentColor",children:Object(l.jsx)("path",{d:"M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"})})}),b||a.value]}))})};n(53);var ee=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 6",Object(l.jsxs)("div",{className:"hw6",children:[Object(l.jsx)("div",{children:Object(l.jsx)(Q,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(R,{onClick:function(){G("inputValue",n)},children:"save"}),Object(l.jsx)(R,{onClick:function(){c($("inputValue",""))},children:"restore"})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})]})};var te=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(E,{}),Object(l.jsx)(P,{}),Object(l.jsx)(K,{}),Object(l.jsx)(Y,{}),Object(l.jsx)(ee,{})]})},ne="/pre-junior",re="/junior",ce="/junior-plus",ae="/404";var se=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(b.d,{children:[Object(l.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(b.a,{to:ne})}}),Object(l.jsx)(b.b,{path:ne,render:function(){return Object(l.jsx)(te,{})}}),Object(l.jsx)(b.b,{path:re,render:function(){return Object(l.jsx)(_,{})}}),Object(l.jsx)(b.b,{path:ce,render:function(){return Object(l.jsx)(g,{})}}),Object(l.jsx)(b.b,{path:ae,render:function(){return Object(l.jsx)(d,{})}}),Object(l.jsx)(b.a,{from:"*",to:"/404"})]})})};var ie=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(se,{})]})})};var oe=function(){return Object(l.jsxs)("div",{className:o.a.App,children:[Object(l.jsx)("div",{children:"react homeworks:"}),Object(l.jsx)(ie,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(oe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[54,1,2]]]);
//# sourceMappingURL=main.0a8b06f5.chunk.js.map