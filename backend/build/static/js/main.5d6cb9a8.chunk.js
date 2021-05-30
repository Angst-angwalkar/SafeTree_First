(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),s=n.n(r),o=n(11),i=n(3),l=n(20),j=n(5),u=n(35),d=n(14),b=n(4),p=n.n(b),h=n(12),O=n(13),m=n.n(O),x="LOGIN_SUCCESS",f="LOGIN_FAIL",v="USER_LOADED_SUCCESS",g="USER_LOADED_FAIL",y="AUTHENTICATED_SUCCESS",S="AUTHENTICATED_FAIL",w=function(){return function(){var e=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=14;break}return n={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,m.a.get("".concat("http://localhost:8000","/auth/users/me/"),n);case 5:a=e.sent,t({type:v,payload:a.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:g});case 12:e.next=15;break;case 14:t({type:g});case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},A=n(1),k=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(h.a)(p.a.mark((function n(a){var c,r,s;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,m.a.post("http://localhost:8000/auth/jwt/create/",r,c);case 5:s=n.sent,a({type:x,payload:s.data}),a(w()),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),a({type:f});case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuthenticated,c=Object(a.useState)({email:"",password:""}),r=Object(u.a)(c,2),s=r[0],d=r[1],b=s.email,p=s.password,h=function(e){return d(Object(j.a)(Object(j.a)({},s),{},Object(l.a)({},e.target.name,e.target.value)))};return n?Object(A.jsx)(i.a,{to:"/"}):Object(A.jsxs)("div",{className:"container mt-5",children:[Object(A.jsx)("h1",{children:"Sign In"}),Object(A.jsx)("p",{children:"Please Log in to your Account"}),Object(A.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(b,p)}(e)},children:[Object(A.jsx)("div",{className:"form-group",children:Object(A.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",value:b,onChange:function(e){return h(e)},required:!0})}),Object(A.jsx)("div",{className:"form-group",children:Object(A.jsx)("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",value:p,onChange:function(e){return h(e)},minLength:"8",required:!0})}),Object(A.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Login"}),Object(A.jsxs)("p",{className:"mt-5",children:["Forgot password? ",Object(A.jsx)(o.b,{to:"/reset-password",children:"Reset Password"})]}),Object(A.jsxs)("p",{className:"mt-5",children:["Don't have an account? ",Object(A.jsx)(o.b,{to:"/signup",children:"Sign Up"})]})]})]})})),I=function(){return Object(A.jsx)("body",{background:"src/media/background1.jpg",children:Object(A.jsxs)("div",{className:"container mt-5",children:[Object(A.jsx)("h1",{className:"display-4",children:"SafeTree First"}),Object(A.jsx)("p",{className:"lead",children:"Welcome to SafeTree First Blog!"}),Object(A.jsx)("br",{}),Object(A.jsx)("hr",{className:"mt-4"}),Object(A.jsx)("p",{children:"If you are an employee and/or Administator, Please login using the Login button!"}),Object(A.jsx)(o.b,{className:"btn btn-primary btn-sm",to:"/login",role:"button",children:"Login"}),Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),Object(A.jsx)("p",{children:"If you're just here to visit and explore on Environment awareness programmes, surveys, click the following button"}),Object(A.jsx)(o.b,{className:"btn btn-primary btn-sm",href:"#",role:"button",children:"Blog Posts"})]})})},N=function(){return Object(A.jsx)("div",{children:"Signup"})},C=function(){return Object(A.jsx)("div",{children:"Activate"})},L=function(){return Object(A.jsx)("div",{children:"ResetPassword"})},T=function(){return Object(A.jsx)("div",{children:"ResetPasswordConfirm"})},E=(n(65),Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:"LOGOUT"})}}})((function(e){var t=e.logout,n=e.isAuthenticated;return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("body",{children:Object(A.jsx)("div",{className:"container-fluid m-0 p-0",children:Object(A.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-dark",id:"nav-colors",children:[Object(A.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(A.jsx)("span",{class:"navbar-toggler-icon"})}),Object(A.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(A.jsxs)("ul",{class:"navbar-nav mr-auto",children:[Object(A.jsx)("li",{class:"nav-item active",children:Object(A.jsxs)(o.b,{class:"nav-link",to:"/",children:["SafeTree First",Object(A.jsx)("span",{class:"sr-only",children:"(current)"})]})}),Object(A.jsx)("li",{class:"nav-item",children:Object(A.jsx)("a",{class:"nav-link",href:"#",children:"Link"})}),n?function(){return Object(A.jsx)(a.Fragment,{children:Object(A.jsx)("li",{class:"nav-item",children:Object(A.jsx)(o.b,{class:"nav-link",to:"/login",children:"Login/Signup"})})})}:function(){return Object(A.jsx)("li",{class:"nav-item",children:Object(A.jsx)("a",{class:"nav-link",href:"#!",onClick:t,children:"Logout"})})},Object(A.jsxs)("li",{class:"nav-item dropdown",children:[Object(A.jsx)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Dropdown"}),Object(A.jsxs)("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(A.jsx)("a",{class:"dropdown-item",href:"#",children:"Action"}),Object(A.jsx)("a",{class:"dropdown-item",href:"#",children:"Another action"}),Object(A.jsx)("div",{class:"dropdown-divider"}),Object(A.jsx)("a",{class:"dropdown-item",href:"#",children:"Something else here"})]})]})]}),Object(A.jsxs)("form",{class:"form-inline my-2 my-lg-0",children:[Object(A.jsx)("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(A.jsx)("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})]})]})})})})}))),D=Object(d.b)(null,{checkAuthenticated:function(){return function(){var e=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return n={headers:{"Content-Type":"application/json",Accept:"application/json"}},a=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,m.a.post("".concat("http://localhost:8000","/auth/jwt/verify/"),a,n);case 6:"token_not_valid"!==e.sent.data.code?t({type:y}):t({type:S}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:S});case 13:e.next=16;break;case 15:t({type:S});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},load_user:w})((function(e){return Object(a.useEffect)((function(){e.checkAuthenticated(),e.load_user()}),[]),Object(A.jsxs)("div",{children:[Object(A.jsx)(E,{}),e.children]})})),_=n(16),F=n(33),U=n(34),P={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),IsAuthenticated:null,user:null},R=Object(_.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case y:return Object(j.a)(Object(j.a)({},e),{},{IsAuthenticated:!0});case x:return localStorage.setItem("access",a.access),Object(j.a)(Object(j.a)({},e),{},{IsAuthenticated:!0,access:a.access,refresh:a.refresh});case v:return Object(j.a)(Object(j.a)({},e),{},{user:a});case S:return Object(j.a)(Object(j.a)({},e),{},{IsAuthenticated:!1});case g:return Object(j.a)(Object(j.a)({},e),{},{user:null});case f:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(j.a)(Object(j.a)({},e),{},{access:null,refresh:null,IsAuthenticated:!1,user:null});default:return e}}}),J=[U.a],B=Object(_.createStore)(R,{},Object(F.composeWithDevTools)(_.applyMiddleware.apply(void 0,J))),G=function(){return Object(A.jsx)(d.a,{store:B,children:Object(A.jsx)(o.a,{children:Object(A.jsx)(D,{children:Object(A.jsxs)(i.d,{children:[Object(A.jsx)(i.b,{exact:!0,path:"/",component:I}),Object(A.jsx)(i.b,{exact:!0,path:"/login",component:k}),Object(A.jsx)(i.b,{exact:!0,path:"/signup",component:N}),Object(A.jsx)(i.b,{exact:!0,path:"/reset-password",component:L}),Object(A.jsx)(i.b,{exact:!0,path:"/password/reset/confirm/{uid}/{token}",component:T}),Object(A.jsx)(i.b,{exact:!0,path:"/activate/{uid}/{token}",component:C})]})})})})};s.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(G,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.5d6cb9a8.chunk.js.map