(this["webpackJsonpbook-catalog-spa"]=this["webpackJsonpbook-catalog-spa"]||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(3),r=a(23),s=a.n(r),o=a(6),l=a(25),i=a(11),u=a(16),b=a(10),j=a(5),d=a(18),O="CREATE_BOOK",h="GET_REDACTION_FORM",m="DEACTIVATE_CHANGE_FORM",p="HIDE_ALERT_SUCCESS",v="SIGN_IN",f="SIGN_OUT",x="WILL_CREATE_ACCOUNT",g="WILL_SIGN_IN",N=function(){return{type:p}},y=function(e){return{type:v,payload:e}},k=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(o.c)(),l=Object(o.d)((function(e){return e.regActive})),u=Object(o.d)((function(e){return e.hasAccountGlobal})),b=Object(o.d)((function(e){return e.email}));return l?null:u?Object(c.jsxs)("div",{className:"container",children:["\u0412\u0445\u043e\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d: ",Object(c.jsx)("br",{}),Object(c.jsxs)("span",{slassName:"user-name",children:[b,Object(c.jsx)("button",{type:"button",className:"user-out",onClick:function(){i.a.auth().signOut().then((function(){s({type:f})})).catch((function(e){console.log(e)}))},children:"\u0412\u044b\u0439\u0442\u0438"})]})]}):Object(c.jsxs)("div",{className:"container auth-wrapper",children:[Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=/@/i.test(a.email);a.password.length<6?alert("\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 \u0448\u0435\u0441\u0442\u0438 \u0437\u043d\u0430\u043a\u043e\u0432!"):a.email.length<5||!t?alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 Email"):function(){var e=a.email,t=a.password;i.a.auth().signInWithEmailAndPassword(e,t).then((function(){s(y())})).catch((function(e){"auth/user-not-found"===e.code&&alert("\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430! \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0434\u043e \u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c!")}))}(),r({email:"",password:""})},children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",value:a.email,onChange:function(e){return r(Object(j.a)(Object(j.a)({},a),{},{email:e.target.value}))},required:!0}),Object(c.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",value:a.password,onChange:function(e){return r(Object(j.a)(Object(j.a)({},a),{},{password:e.target.value}))},required:!0})]}),Object(c.jsx)("button",{type:"submit",className:"btn btn-outline-success",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("span",{className:"buttonToRegistration",onClick:function(){s({type:x})},children:"\u0418\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})})]})},w=function(){var e=Object(n.useState)({email:"",password:"",registration:!1}),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(o.c)(),l=Object(o.d)((function(e){return e.regActive})),u=Object(o.d)((function(e){return e.hasAccountGlobal}));return l&&!1===u?Object(c.jsxs)("div",{className:"container auth-wrapper",children:[Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=/@/i.test(a.email);a.password.length<6?alert("\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 \u0448\u0435\u0441\u0442\u0438 \u0437\u043d\u0430\u043a\u043e\u0432!"):a.email.length<5||!t?alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 Email"):function(){var e=a.email,t=a.password;i.a.auth().createUserWithEmailAndPassword(e,t).then((function(){s(y())})).catch((function(e){console.log(e),alert("\u041e\u0448\u0438\u0431\u043a\u0430! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.")}))}(),r({email:"",password:""})},children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",value:a.email,onChange:function(e){return r(Object(j.a)(Object(j.a)({},a),{},{email:e.target.value}))},required:!0}),Object(c.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",value:a.password,onChange:function(e){return r(Object(j.a)(Object(j.a)({},a),{},{password:e.target.value}))},required:!0})]}),Object(c.jsx)("button",{type:"submit",className:"btn btn-outline-success",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})]}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("span",{className:"buttonToRegistration",onClick:function(){s({type:g})},children:"\u0418\u043b\u0438 \u0432\u043e\u0439\u0442\u0438 \u0432 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442."})})]}):null},C=function(){var e=Object(o.d)((function(e){return e.hasAccountGlobal}));return Object(c.jsxs)("div",{className:"navbar-wrapper",children:[Object(c.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(c.jsxs)("div",{className:"container-fluid menu-wrapper",children:[Object(c.jsx)("ul",{className:"navbar-nav",children:Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(u.b,{className:"navbar-brand nav-link",to:"/",exact:!0,children:"Book Catalog"})})}),Object(c.jsx)(k,{}),Object(c.jsx)(w,{})]})}),e?null:Object(c.jsx)("div",{className:"warning-reg-wrapper",children:Object(c.jsx)("span",{className:"warning-reg",children:"\u0427\u0442\u043e\u0431\u044b \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f."})})]})},A=a(34),S=a(35),E=a(37),_=a(36),I=function(e){var t=e.book,a=Object(o.c)(),n=Object(o.d)((function(e){return e.hasAccountGlobal}));return Object(c.jsx)("div",{className:"book-item container",children:Object(c.jsxs)("div",{className:"row row-cols-3",children:[Object(c.jsxs)("div",{className:"col",children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",t.title]}),Object(c.jsxs)("div",{className:"col",children:["\u0410\u0432\u0442\u043e\u0440: ",t.autor]}),Object(c.jsx)("div",{className:"btn-container col",children:n?Object(c.jsx)(u.b,{className:"nav-link",to:"/card",onClick:function(){a({type:h,payload:t})},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}):null}),Object(c.jsxs)("div",{className:"col",children:["\u0413\u043e\u0434 \u0438\u0437\u0434\u0430\u043d\u0438\u044f: ",t.year]}),Object(c.jsxs)("div",{className:"col",children:["ISBN: ",t.isbn]}),n?Object(c.jsx)("div",{className:"btn-container col",children:Object(c.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:function(){i.a.database().ref("books/"+t.uniqKey).remove()},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})}):null]})})},q=function(e){Object(E.a)(a,e);var t=Object(_.a)(a);function a(e){var c;return Object(A.a)(this,a),(c=t.call(this,e)).state={isloaded:!1,books:[]},c}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;i.a.database().ref("books").on("value",(function(t){var a=[];for(var c in t.val())if(t.val().hasOwnProperty(c)){var n=Object(j.a)(Object(j.a)({},t.val()[c]),{},{uniqKey:c});a.push(n)}e.setState({books:a})}))}},{key:"componentWillUnmount",value:function(){i.a.database().ref("books").off()}},{key:"render",value:function(){return console.log("hasAccountGlobal: ",this.props.hasAccountGlobal),0===this.state.books.length?Object(c.jsx)("div",{className:"alert alert-warning",role:"alert",children:"loading..."}):Object(c.jsxs)("div",{children:[this.props.hasAccountGlobal?Object(c.jsx)("div",{className:"container add-book-wrapper",children:Object(c.jsx)(u.b,{className:"nav-link add-book-link",to:"/card",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443"})}):null,Object(c.jsx)("ul",{className:"list-group",children:this.state.books.map((function(e,t){return Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)(I,{book:e})},e.id=t+1)}))})]})}}]),a}(n.Component),G=Object(o.b)((function(e){return{hasAccountGlobal:e.hasAccountGlobal}}))(q),T=function(){return Object(c.jsx)(n.Fragment,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(C,{}),Object(c.jsx)(G,{})]})})},D=function(){var e=Object(n.useState)({title:"",autor:"",year:"",isbn:""}),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(o.d)((function(e){return e.activeChangeForm}));return s?null:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(a),i.a.database().ref("books").push(a),r({title:"",autor:"",year:"",isbn:""})},children:[Object(c.jsx)("div",{className:"container redact-title",children:Object(c.jsx)("h3",{children:" \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u043a\u043d\u0438\u0433\u0438: "})}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",value:a.title,onChange:function(e){return r(Object(j.a)(Object(j.a)({},a),{},{title:e.target.value}))},required:!0}),Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0410\u0432\u0442\u043e\u0440",value:a.autor,onChange:function(e){return r(Object(j.a)(Object(j.a)({},a),{},{autor:e.target.value}))},required:!0}),Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0413\u043e\u0434 \u0438\u0437\u0434\u0430\u043d\u0438\u044f",value:a.year,onChange:function(e){return r(Object(j.a)(Object(j.a)({},a),{},{year:e.target.value}))},required:!0}),Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"ISBN",value:a.isbn,onChange:function(e){return r(Object(j.a)(Object(j.a)({},a),{},{isbn:e.target.value}))},required:!0})]}),Object(c.jsx)("button",{type:"submit",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})},F=function(){var e=Object(o.c)(),t=Object(o.d)((function(e){return e.changedBook})),a=Object(o.d)((function(e){return e.activeChangeForm})),r=Object(n.useState)(t),s=Object(d.a)(r,2),l=s[0],u=s[1];return a?Object(c.jsxs)("form",{onSubmit:function(a){a.preventDefault(),i.a.database().ref("books/"+t.uniqKey).update({autor:l.autor,title:l.title,year:l.year,isbn:l.isbn}),e({type:m})},children:[Object(c.jsx)("div",{className:"container redact-title",children:Object(c.jsx)("h3",{children:" \u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445: "})}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",defaultValue:t.title,onChange:function(e){return u(Object(j.a)(Object(j.a)({},l),{},{title:e.target.value}))},required:!0}),Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0410\u0432\u0442\u043e\u0440",defaultValue:t.autor,onChange:function(e){return u(Object(j.a)(Object(j.a)({},l),{},{autor:e.target.value}))},required:!0}),Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0413\u043e\u0434 \u0438\u0437\u0434\u0430\u043d\u0438\u044f",defaultValue:t.year,onChange:function(e){return u(Object(j.a)(Object(j.a)({},l),{},{year:e.target.value}))},required:!0}),Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"ISBN",defaultValue:t.isbn,onChange:function(e){return u(Object(j.a)(Object(j.a)({},l),{},{isbn:e.target.value}))},required:!0})]}),Object(c.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"})]}):null},R=function(){var e=Object(o.c)();return Object(o.d)((function(e){return e.showAlertSuccess}))?Object(c.jsxs)("div",{className:"alert alert-success",role:"alert",children:[Object(c.jsx)("span",{className:"book-change-msg",children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u044d\u0442\u043e\u0439 \u043a\u043d\u0438\u0433\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u044b!"}),Object(c.jsx)(u.b,{className:"nav-link",to:"/",children:Object(c.jsx)("span",{className:"book-change-msg",onClick:function(){return e(N())},children:"\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a, \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u043a\u043d\u0438\u0433\u0443 \u0432 \u0444\u043e\u0440\u043c\u0435 \u043d\u0438\u0436\u0435."})}),Object(c.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:function(){return e(N())}})]}):null},B=function(){return Object(c.jsxs)(n.Fragment,{children:[Object(c.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsx)("ul",{className:"navbar-nav",children:Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(u.b,{className:"nav-link back-to-main",to:"/",exact:!0,children:"\u21d0 \u041d\u0430\u0437\u0430\u0434 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})})})})}),Object(c.jsx)(R,{}),Object(c.jsx)(D,{}),Object(c.jsx)(F,{})]})};function L(){var e=Object(o.c)();return Object(n.useEffect)((function(){i.a.auth().onAuthStateChanged((function(t){t?(console.log(t.email),e(y(t.email))):console.log("no-user")}))})),Object(c.jsx)(u.a,{children:Object(c.jsx)("div",{className:"container pt-4",children:Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{path:"/",exact:!0,component:T}),Object(c.jsx)(b.a,{path:"/card",component:B})]})})})}a(50);var U={hiddenForm:!1,activeChangeForm:!1,showAlertSuccess:!1,hasAccountGlobal:!1,regActive:!1,email:"",veriError:null};i.a.initializeApp({apiKey:"AIzaSyATMJ6bMFCbQ6xtS_iqlMzqh7m4KibMZiw",authDomain:"book-catalog-spa.firebaseapp.com",databaseURL:"https://book-catalog-spa-default-rtdb.firebaseio.com",projectId:"book-catalog-spa",storageBucket:"book-catalog-spa.appspot.com",messagingSenderId:"878044568330",appId:"1:878044568330:web:4851aa5a655179d90df8f3"});var M=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(j.a)(Object(j.a)({},e),{hasAccountGlobal:!0,email:t.payload,regActive:!1});case f:return Object(j.a)(Object(j.a)({},e),{hasAccountGlobal:!1,email:""});case x:return Object(j.a)(Object(j.a)({},e),{},{regActive:!0});case g:return Object(j.a)(Object(j.a)({},e),{},{regActive:!1});case O:return Object(j.a)(Object(j.a)({},e),{},{created:!0});case h:return Object(j.a)(Object(j.a)({},e),{changedBook:t.payload,activeChangeForm:!0});case m:return Object(j.a)(Object(j.a)({},e),{activeChangeForm:!1,showAlertSuccess:!0});case p:return Object(j.a)(Object(j.a)({},e),{},{showAlertSuccess:!1});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(c.jsx)(o.a,{store:M,children:Object(c.jsx)(L,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.3a212b4d.chunk.js.map