(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{150:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},37:function(e,t,a){},476:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),s=a(64),c=a.n(s),o=a(5),i=a(7),l=(a(98),a.p+"static/media/logo.0db0b608.svg"),d=a(0),u=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("div",{className:"my-5 col-sm-12",children:Object(d.jsxs)("div",{className:"blog-card shadow-lg",style:{borderRadius:"17px"},children:[Object(d.jsx)("div",{className:"title-content",children:Object(d.jsx)("h3",{children:Object(d.jsx)(o.b,{href:"#",style:{color:"ButtonHighlight"},children:"Welcome to SafeTree First"})})}),Object(d.jsxs)("div",{className:"card-info",children:[Object(d.jsx)("img",{className:"img-fluid",src:l,style:{width:"200px",height:"30%"}}),Object(d.jsx)("p",{style:{color:"ButtonHighlight"},children:"If you are an employee and/or Administator, Please login using the Login button!"}),Object(d.jsx)(o.b,{style:{outline:"none",border:"none",borderRadius:"8px",color:"white",backgroundColor:"darkgreen"},to:"/login",children:"Login"}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{style:{color:"ButtonHighlight"},children:"If you're just here to visit and explore on Environment awareness programmes, surveys, click the following button"}),Object(d.jsx)(o.b,{style:{outline:"none",border:"none",borderRadius:"8px",color:"white",backgroundColor:"darkgreen"},to:"/api/blog/bloglist/",children:"Blog Posts"})]}),Object(d.jsx)("div",{className:"gradient-overlay"})]})})})})},j=a(15),b=a(4),h=a(8),p=a(10),m=a(6),x=a.n(m),O=a(16),g=a(11),f=a.n(g),v="LOGIN_SUCCESS",y="LOGIN_FAIL",w="SIGNUP_SUCCESS",N="SIGNUP_FAIL",S="ACTIVATION_SUCCESS",C="ACTIVATION_FAIL",k="USER_LOADED_SUCCESS",_="USER_LOADED_FAIL",A="AUTHENTICATED_SUCCESS",I="AUTHENTICATED_FAIL",T="PASSWORD_RESET_FAIL",R="PASSWORD_RESET_SUCCESS",L="PASSWORD_RESET_CONFIRM_FAIL",E="PASSWORD_RESET_CONFIRM_SUCCESS",P="LOGOUT",D="SURVEYFORM",F=function(){return function(){var e=Object(O.a)(x.a.mark((function e(t){var a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=14;break}return a={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,f.a.get("".concat("http://safetree.herokuapp.com/","/auth/users/me/"),a);case 5:r=e.sent,t({type:k,payload:r.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:_});case 12:e.next=15;break;case 14:t({type:_});case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},H=function(e,t,a,r){return function(){var n=Object(O.a)(x.a.mark((function n(s){var c,o;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},o=JSON.stringify({uid:e,token:t,new_password:a,re_new_password:r}),n.prev=2,n.next=5,f.a.post("".concat("http://safetree.herokuapp.com/","/auth/users/reset_password_confirm/"),o,c);case 5:s({type:E}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),s({type:L});case 11:case"end":return n.stop()}}),n,null,[[2,8]])})));return function(e){return n.apply(this,arguments)}}()},q=(a(37),Object(p.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(O.a)(x.a.mark((function a(r){var n,s,c;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={headers:{"Content-Type":"application/json"}},s=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,f.a.post("".concat("http://safetree.herokuapp.com/","/auth/jwt/create/"),s,n);case 5:c=a.sent,r({type:v,payload:c.data}),r(F()),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),r({type:y});case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,n=Object(r.useState)({email:"",password:""}),s=Object(h.a)(n,2),c=s[0],u=s[1],p=c.email,m=c.password,x=function(e){return u(Object(b.a)(Object(b.a)({},c),{},Object(j.a)({},e.target.name,e.target.value)))};return a?Object(d.jsx)(i.a,{to:"/"}):Object(d.jsx)("div",{className:"mx-5 my-5",children:Object(d.jsxs)("div",{className:"card container col-lg-4 col-md-4 col-sm-12 p-4 shadow-lg bg-white",style:{borderRadius:"17px"},children:[Object(d.jsx)("div",{className:"container text-center",children:Object(d.jsx)("img",{className:"img-fluid",src:l,style:{width:"50%",height:"50%"}})}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{className:"card-body container",method:"POST",onSubmit:function(e){return function(e){e.preventDefault(),t(p,m)}(e)},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlfor:"email",children:"Email"}),Object(d.jsx)("input",{className:"form-control",placeholder:"Your Email ID",type:"email",name:"email",value:p,onChange:function(e){return x(e)},required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlfor:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"Your password",name:"password",value:m,onChange:function(e){return x(e)},minLength:"6",required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"text-right",children:Object(d.jsx)("button",{type:"submit",className:"ml-auto btn btn-success",title:"Login to SafeTrees",children:"LOGIN"})}),Object(d.jsx)("br",{})]}),Object(d.jsx)("hr",{style:{width:"50%",margin:"0 auto",backgroundColor:"green"}}),Object(d.jsx)("div",{className:"text-center p-3",children:Object(d.jsxs)("small",{children:["Forgot Password? ",Object(d.jsx)(o.b,{to:"/reset-password",children:"Reset Password"})]})}),Object(d.jsx)("div",{className:"text-center p-3",children:Object(d.jsxs)("small",{children:["Don't have an account? ",Object(d.jsx)(o.b,{to:"/signup",children:"Sign up!"})]})})]})})}))),G=Object(p.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,a,r,n){return function(){var s=Object(O.a)(x.a.mark((function s(c){var o,i,l;return x.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return o={headers:{"Content-Type":"application/json"}},i=JSON.stringify({first_name:e,last_name:t,email:a,password:r,re_password:n}),s.prev=2,s.next=5,f.a.post("".concat("http://safetree.herokuapp.com/","/auth/users/"),i,o);case 5:l=s.sent,c({type:w,payload:l.data}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),c({type:N});case 12:case"end":return s.stop()}}),s,null,[[2,9]])})));return function(e){return s.apply(this,arguments)}}()}})((function(e){var t=e.signup,a=e.isAuthenticated,n=Object(r.useState)(!1),s=Object(h.a)(n,2),c=s[0],u=s[1],p=Object(r.useState)({first_name:"",last_name:"",email:"",password:"",re_password:""}),m=Object(h.a)(p,2),x=m[0],O=m[1],g=x.first_name,f=x.last_name,v=x.email,y=x.password,w=x.re_password,N=function(e){return O(Object(b.a)(Object(b.a)({},x),{},Object(j.a)({},e.target.name,e.target.value)))};return a?Object(d.jsx)(i.a,{to:"/"}):c?Object(d.jsx)(i.a,{to:"/login"}):Object(d.jsx)("div",{className:"mx-5 my-5",children:Object(d.jsxs)("div",{className:"card container mt-5 col-lg-4 col-md-4 col-sm-12 p-4 shadow-lg bg-white",style:{borderRadius:"17px"},children:[Object(d.jsx)("div",{className:"container text-center",children:Object(d.jsx)("img",{className:"img-fluid",src:l,style:{width:"50%",height:"50%"}})}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{className:"card-body container",method:"POST",onSubmit:function(e){return function(e){e.preventDefault(),y===w&&(t(g,f,v,y,w),u(!0))}(e)},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"first_name",children:"First Name"}),Object(d.jsx)("input",{className:"form-control",placeholder:"Your First Name",type:"text",name:"first_name",value:g,onChange:function(e){return N(e)},required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"last_name",children:"Last Name"}),Object(d.jsx)("input",{className:"form-control",placeholder:"Your Last Name",type:"text",name:"last_name",value:f,onChange:function(e){return N(e)},required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlfor:"email",children:"Email"}),Object(d.jsx)("input",{className:"form-control",placeholder:"Your Email ID",type:"email",name:"email",value:v,onChange:function(e){return N(e)},required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"Your password",name:"password",value:y,onChange:function(e){return N(e)},minLength:"6",required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"re_password",children:"Confirm password"}),Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"Confirm password",name:"re_password",value:w,onChange:function(e){return N(e)},minLength:"6",required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"submit",className:"btn btn-success align-items-center",title:"Login to SafeTrees",children:"Register"}),Object(d.jsx)("br",{})]}),Object(d.jsx)("hr",{style:{width:"50%",margin:"0 auto",backgroundColor:"green"}}),Object(d.jsx)("div",{className:"text-center p-3",children:Object(d.jsxs)("small",{children:["Already have an account? ",Object(d.jsx)(o.b,{to:"/login",children:"Login"})]})})]})})})),U=Object(p.b)(null,{verify:function(e,t){return function(){var a=Object(O.a)(x.a.mark((function a(r){var n,s;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={headers:{"Content-Type":"application/json"}},s=JSON.stringify({uid:e,token:t}),a.prev=2,a.next=5,f.a.post("".concat("http://safetree.herokuapp.com/","/auth/users/activation/"),s,n);case 5:r({type:S}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),r({type:C});case 11:case"end":return a.stop()}}),a,null,[[2,8]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.verify,a=e.match,n=Object(r.useState)(!1),s=Object(h.a)(n,2),c=s[0],o=s[1];return c?Object(d.jsx)(i.a,{to:"/"}):Object(d.jsxs)("div",{className:"card container mt-5 col-lg-4 col-md-4 col-sm-12 p-4 shadow-lg bg-white",style:{borderRadius:"17px"},children:[Object(d.jsx)("div",{className:"container text-center",children:Object(d.jsx)("i",{className:"fas fa-tree fa-3x border border-success rounded-circle p-5",style:{color:"darkgreen"}})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{marginTop:"200px"}}),Object(d.jsx)("button",{onClick:function(e){var r=a.params.uid,n=a.params.token;t(r,n),o(!0)},style:{marginTop:"50px"},type:"button",className:"btn btn-success",children:"verify"}),Object(d.jsx)("hr",{style:{width:"50%",margin:"0 auto",backgroundColor:"green"}}),Object(d.jsx)("div",{className:"text-center p-3"})]})})),z=Object(p.b)(null,{reset_password:function(e){return function(){var t=Object(O.a)(x.a.mark((function t(a){var r,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={headers:{"Content-Type":"application/json"}},n=JSON.stringify({email:e}),t.prev=2,t.next=5,f.a.post("".concat("http://safetree.herokuapp.com/","/auth/users/reset_password/"),n,r);case 5:a({type:R}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),a({type:T});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.reset_password,a=Object(r.useState)(!1),n=Object(h.a)(a,2),s=n[0],c=n[1],o=Object(r.useState)({email:""}),u=Object(h.a)(o,2),p=u[0],m=u[1],x=p.email;return s?Object(d.jsx)(i.a,{to:"/"}):Object(d.jsx)("div",{className:"resetpass",children:Object(d.jsxs)("div",{id:"card-content",children:[Object(d.jsx)("div",{id:"card-title",children:Object(d.jsx)("img",{className:"img-fluid",src:l,style:{width:"35%",height:"35%"}})}),Object(d.jsx)("h3",{children:"Request Password Reset"}),Object(d.jsx)("div",{children:Object(d.jsxs)("form",{method:"post",className:"form",onSubmit:function(e){return function(e){e.preventDefault(),t(x),c(!0)}(e)},children:[Object(d.jsx)("legend",{children:Object(d.jsx)("label",{for:"email",style:{"padding-top":"10px"},children:"\xa0Enter your Email Address"})}),Object(d.jsx)("input",{className:"form-content",id:"email",type:"email",name:"email",placeholder:"Email",value:x,onChange:function(e){return function(e){return m(Object(b.a)(Object(b.a)({},p),{},Object(j.a)({},e.target.name,e.target.value)))}(e)},required:!0}),Object(d.jsx)("button",{id:"submit-btn",className:"btn btn-primary",type:"submit",children:"Reset Password"})]})})]})})})),Y=Object(p.b)(null,{reset_password_confirm:H})((function(e){var t=e.match,a=e.reset_password_confirm,n=Object(r.useState)(!1),s=Object(h.a)(n,2),c=s[0],o=s[1],u=Object(r.useState)({new_password:"",re_new_password:""}),p=Object(h.a)(u,2),m=p[0],x=p[1],O=m.new_password,g=m.re_new_password,f=function(e){return x(Object(b.a)(Object(b.a)({},m),{},Object(j.a)({},e.target.name,e.target.value)))};return c?Object(d.jsx)(i.a,{to:"/"}):Object(d.jsx)("div",{className:"resetpassconf",children:Object(d.jsxs)("div",{id:"card-content",children:[Object(d.jsx)("div",{id:"card-title",children:Object(d.jsx)("img",{className:"img-fluid",src:l,style:{width:"50%",height:"50%"}})}),Object(d.jsx)("div",{children:Object(d.jsxs)("form",{method:"post",className:"form",onSubmit:function(e){return function(e){e.preventDefault();var r=t.params.uid,n=t.params.token;a(r,n,O,g),o(!0)}(e)},children:[Object(d.jsx)("legend",{children:Object(d.jsx)("label",{for:"password",style:{"padding-top":"40px"},children:"\xa0Enter New Password"})}),Object(d.jsx)("input",{className:"form-content",id:"password",type:"password",placeholder:"New Password",name:"new_password",value:O,onChange:function(e){return f(e)},minLength:"6",required:!0}),Object(d.jsx)("legend",{children:Object(d.jsx)("label",{for:"password",style:{"padding-top":"40px"},children:"\xa0Confirm Your Password"})}),Object(d.jsx)("input",{className:"form-content",id:"password",type:"password",placeholder:"Confirm New Password",name:"re_new_password",value:g,onChange:function(e){return f(e)},minLength:"6",required:!0}),Object(d.jsx)("button",{id:"submit-btn",className:"btn btn-primary",type:"submit",children:"Reset Password"})]})})]})})})),W=(Object(p.b)(null,{reset_password_confirm:H})((function(e){var t=e.reset_password_confirm,a=Object(r.useState)(!1),n=Object(h.a)(a,2),s=n[0],c=n[1],o=Object(r.useState)({new_password:"",re_new_password:""}),l=Object(h.a)(o,2),u=l[0],p=l[1],m=u.new_password,x=u.re_new_password,O=function(e){return p(Object(b.a)(Object(b.a)({},u),{},Object(j.a)({},e.target.name,e.target.value)))};return s?Object(d.jsx)(i.a,{to:"/"}):Object(d.jsx)("div",{className:"resetpassconf",children:Object(d.jsxs)("div",{id:"card-content",children:[Object(d.jsx)("div",{id:"card-title",children:Object(d.jsx)("i",{className:"fas fa-tree"})}),Object(d.jsx)("div",{children:Object(d.jsxs)("form",{method:"post",className:"form",onSubmit:function(e){return function(e){e.preventDefault(),t("asd","asd",m,x),c(!0)}(e)},children:[Object(d.jsx)("legend",{children:Object(d.jsx)("label",{for:"password",style:{"padding-top":"40px"},children:"\xa0Enter New Password"})}),Object(d.jsx)("input",{className:"form-content",id:"password",type:"password",placeholder:"New Password",name:"new_password",value:m,onChange:function(e){return O(e)},minLength:"6",required:!0}),Object(d.jsx)("legend",{children:Object(d.jsx)("label",{for:"password",style:{"padding-top":"40px"},children:"\xa0Confirm Your Password"})}),Object(d.jsx)("input",{className:"form-content",id:"password",type:"password",placeholder:"Confirm New Password",name:"re_new_password",value:x,onChange:function(e){return O(e)},minLength:"6",required:!0}),Object(d.jsx)("button",{id:"submit-btn",className:"btn btn-primary",type:"submit",children:"Reset Password"})]})})]})})})),a(66)),B=a(67),J=a(69),M=a(68),X=(r.Component,a(180),a(181),a(182),Object(p.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:P})}}})((function(e){var t=e.logout,a=e.isAuthenticated;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{}),Object(d.jsx)("div",{className:"container-fluid m-0 p-0",children:Object(d.jsxs)("nav",{className:"navbar navbar-expand-xl navbar-dark m-30 p-10 clearfix",id:"nav-colors",children:[Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav mr-auto",style:{position:"relative",zIndex:"99"},children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(o.b,{className:"nav-link hvr-glow",to:"/",children:Object(d.jsx)("img",{src:l,style:{width:"50px",height:"25px"}})})}),Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsxs)(o.b,{className:"nav-link hvr-glow mr-5",to:"/api/blog/about",style:{borderRadius:"15px"},children:["About Us ",Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(d.jsx)("br",{}),Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsxs)(o.b,{className:"nav-link hvr-glow mr-5",to:"/api/survey/treedatasurvey/",style:{borderRadius:"15px"},children:["Surveys",Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsxs)(o.b,{className:"nav-link hvr-glow mr-5",to:"/api/posts/",style:{borderRadius:"15px"},children:["Blog ",Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]})}),a?Object(d.jsx)(r.Fragment,{children:Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link hvr-glow active",href:"#!",onClick:t,style:{borderRadius:"15px"},children:"Logout"})})}):Object(d.jsx)(r.Fragment,{children:Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{className:"nav-link hvr-glow active",to:"/login",style:{borderRadius:"15px"},children:"Login/Signup"})})})]}),Object(d.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(d.jsx)("input",{className:"form-control mr-md-2 active mr-5",type:"search",placeholder:"Search",style:{borderRadius:"15px"},"aria-label":"Search"}),Object(d.jsx)("button",{className:"hvr-glow btn btn-outline-success",style:{borderRadius:"15px"},type:"submit",children:Object(d.jsx)("label",{getAllByLabelText:!0,children:"Search"})})]})]})]})})]})}))),V=Object(p.b)(null,{checkAuthenticated:function(){return function(){var e=Object(O.a)(x.a.mark((function e(t){var a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return a={headers:{"Content-Type":"application/json",Accept:"application/json"}},r=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,f.a.post("".concat("http://safetree.herokuapp.com/","/auth/jwt/verify/"),r,a);case 6:"token_not_valid"!==e.sent.data.code?t({type:A}):t({type:I}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:I});case 13:e.next=16;break;case 15:t({type:I});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},load_user:F})((function(e){return Object(r.useEffect)((function(){e.checkAuthenticated(),e.load_user()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(X,{}),Object(d.jsx)("section",{style:{margin:"0px",padding:"0px"},className:"main",children:e.children})]})})),$=(a(150),function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(O.a)(x.a.mark((function e(){var t,a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("http://safetree.herokuapp.com/","api/posts/"),a={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,f.a.get(t,a);case 5:if(r=e.sent,console.log(r.data),!n(r.data)){e.next=10;break}return e.abrupt("return",200);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){s(),console.log(a)}),[]),Object(d.jsx)("div",{className:"container mt-5",children:Object(d.jsx)("div",{className:"row my-5",children:a.length>0?a.map((function(e,t){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"col-sm-12 col-md-4 col-lg-4 mt-3",children:Object(d.jsxs)("div",{className:"card bloglist shadow-lg p-3",style:{borderRadius:"10px",position:"relative"},children:[e.featured?Object(d.jsx)("div",{style:{position:"absolute",right:"0px"}}):"",Object(d.jsxs)("div",{className:"bg-white",children:[Object(d.jsx)("img",{className:"card-img-top",style:{height:"200px",width:"100%"},src:e.thumbnail,alt:e.title}),Object(d.jsx)("h5",{className:"card-header",style:{color:"darkolivegreen",border:"none",padding:"0px"},children:e.title}),Object(d.jsxs)("small",{className:"text-muted text-capitalize",children:[e.month,", ",e.day]}),Object(d.jsx)("br",{}),Object(d.jsx)("small",{className:"text-capitalize",style:{color:"darkgreen"},children:e.category}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"card-body p-1",style:{maxHeight:"100px",minHeight:"100px",overflowX:"scroll",overflowY:"scroll"},children:Object(d.jsx)("h6",{children:e.excerpt})}),Object(d.jsx)(o.b,{to:"/post/".concat(e.id),className:"stretched-link",children:"Continue reading"})]})]})},t)})})):Object(d.jsx)("h1",{children:"LOADING"})})})}),K=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(O.a)(x.a.mark((function e(){var t,a,r,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(window.location.href),t=window.location.href.split("/"),a=t[t.length-1],console.log(a),"${process.env.REACT_APP_API_URL}api/blog/category/",r={headers:{"Content-Type":"application/json",Authorization:"0&"+a}},e.next=8,f.a.get("${process.env.REACT_APP_API_URL}api/blog/category/",r);case 8:s=e.sent,console.log(s.data),200===s.status&&n(s.data);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){s()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container-fluid col-md-9 text-center",style:{position:"relative",width:"100%",height:"100%",backgroundColor:"transparent"},children:Object(d.jsx)("div",{className:"blogpage card mx-5 my-5",style:{borderRadius:"4px",maxHeight:"600px",minHeight:"300px",overflowX:"scroll",overflowY:"scroll"},children:a.length>0?a.map((function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{style:{color:"whitesmoke"},children:e.title}),Object(d.jsx)("img",{src:"".concat("http://safetree.herokuapp.com/").concat(e.thumbnail),alt:e.title,style:{width:"50%",height:"30%",borderRadius:"7px"}}),Object(d.jsx)("br",{}),Object(d.jsx)("h3",{style:{borderRadius:"7px",color:"whitesmoke"},children:e.excerpt}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{className:"w-20 bg-white text-capitalize p-3",style:{color:"whitesmoke"},children:e.category}),Object(d.jsx)("br",{}),Object(d.jsx)("small",{className:"text-capitalize",style:{color:"whitesmoke",fontSize:"25px"},children:e.content}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"card-body p-1",style:{maxHeight:"100px",minHeight:"100px",overflowX:"scroll",overflowY:"scroll"},children:Object(d.jsxs)("big",{className:"text-muted text-capitalize",children:["Posted On: ",e.month,", ",e.day]})})]},t)})):"No Such Post"})})})},Q=function(){return Object(d.jsx)("div",{className:"container mt-5 col-lg-4 col-md-5 col-sm-12 p-4 shadow-lg bg-white",style:{borderRadius:"17px"},children:"Category"})},Z=function(e){Object(J.a)(a,e);var t=Object(M.a)(a);function a(){var e;Object(W.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={areaName:"",treeName:"",treeAge:"",treeImage:null,treeHealth:"",treeGirth:"",treeHeight:"",treeLocation:"",surveyDate:""},e.handleChange=function(t){e.setState(Object(j.a)({},t.target.id,t.target.value))},e.handleImageChange=function(t){e.setState({treeImage:t.target.files[0]})},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state);var a=new FormData;a.append("areaName",e.state.areaName),a.append("treeName",e.state.treeName),a.append("treeAge",e.state.treeAge),a.append("treeImage",e.state.treeImage,e.state.treeImage.name),a.append("treeHealth",e.state.treeHealth),a.append("treeGirth",e.state.treeGirth),a.append("treeHeight",e.state.treeHeight),a.append("treeLocation",e.state.treeLocation),a.append("surveyDate",e.state.surveyDate);var r="".concat("http://safetree.herokuapp.com/","api/survey/treedatasurvey/");f.a.post(r,a,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e.data)})).catch((function(e){return console.log(e)}))},e.getLoc=function(){navigator.geolocation.getCurrentPosition((function(e){console.log("Latitude is :",e.coords.latitude),console.log("Longitude is :",e.coords.longitude),console.log("More or less",e.coords.accuracy),document.getElementById("treeLocation").value=String(e.coords.latitude)+","+String(e.coords.longitude)}))},e}return Object(B.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{children:Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"mx-5 my-5",children:Object(d.jsxs)("div",{className:"card container col-lg-4 col-md-4 col-sm-12 my-5 p-4 shadow-lg bg-white",style:{borderRadius:"4px",maxHeight:"600px",minHeight:"300px",overflowX:"scroll",overflowY:"scroll"},children:[Object(d.jsx)("div",{className:"container text-center",children:Object(d.jsx)("img",{className:"img-fluid",src:l,style:{width:"50%",height:"50%"}})}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit,className:"card-body container",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"areaName",children:"Area Name"}),Object(d.jsx)("input",{className:"form-control",placeholder:"Area Name",id:"areaName",type:"text",name:"areaName",value:this.state.areaName,onChange:function(t){return e.handleChange(t)},required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"treeName",children:"Tree Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Tree Name",id:"treeName",name:"treeName",value:this.state.treeName,onChange:function(t){return e.handleChange(t)},required:!0})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"treeAge",children:"Tree Age"}),Object(d.jsx)("input",{className:"form-control",placeholder:"Tree Age",id:"treeAge",type:"text",name:"treeAge",value:this.state.treeAge,onChange:function(t){return e.handleChange(t)},required:!0})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"treeImage",children:"Iree Image"}),Object(d.jsx)("input",{className:"form-control",placeholder:"Tree Image",type:"file",id:"treeImage",name:"treeImage",onChange:this.handleImageChange,required:!0})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"treeHealth",children:"Tree Health"}),Object(d.jsx)("input",{className:"form-control",placeholder:"Tree Health",type:"text",name:"treeHealth",id:"treeHealth",value:this.state.treeHealth,onChange:function(t){return e.handleChange(t)},required:!0})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"treeGirth",children:"Tree Girth"}),Object(d.jsx)("input",{className:"form-control",placeholder:"Tree Girth",type:"text",id:"treeGirth",name:"treeGirth",value:this.state.treeGirth,onChange:function(t){return e.handleChange(t)},required:!0})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"treeHeight",children:"Tree Height"}),Object(d.jsx)("input",{className:"form-control",placeholder:"Tree Height",type:"text",id:"treeHeight",name:"treeHeight",value:this.state.treeHeight,onChange:function(t){return e.handleChange(t)},required:!0})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"treeLocation",children:"Tree Location"}),Object(d.jsx)("input",{className:"form-control",placeholder:"Tree Location",type:"text",name:"treeLocation",id:"treeLocation",value:this.state.treeLocation,onChange:function(t){return e.handleChange(t)},required:!0}),Object(d.jsx)("button",{className:"btn btn-success",onClick:this.getLoc,children:"Get Location"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"surveyDate",children:"Survey Date"}),Object(d.jsx)("input",{className:"form-control",placeholder:"Survey Date",type:"date",id:"surveyDate",name:"surveyDate",value:this.state.surveyDate,onChange:function(t){return e.handleChange(t)},required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"text-right",children:Object(d.jsx)("button",{type:"submit",className:"ml-auto btn btn-success",title:"Submit Data",children:"Submit"})}),Object(d.jsx)("br",{})]})]})})})})}}]),a}(r.Component),ee=a.p+"static/media/about.99c19bd4.jpg",te=function(){return Object(d.jsx)("div",{className:"container col-md-9 text-center aboutpage",style:{position:"relative",backgroundImage:{about:ee},borderRadius:"7px",backgroundSize:"cover"},children:Object(d.jsx)("div",{className:"mx-5 my-5",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{style:{color:"whitesmoke"},children:"About SafeTree First"}),Object(d.jsx)("div",{children:Object(d.jsx)("img",Object(j.a)({className:"img-fluid",src:l,style:{backgroundBlendMode:"hard-light"},alt:"item.title"},"style",{width:"30%",height:"70%",borderRadius:"7px"}))}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{style:{borderRadius:"7px",color:"whitesmoke"},children:"Who are we?"}),Object(d.jsx)("medium",{style:{color:"whitesmoke",textWeight:"500"},children:"We are an organization working towards the betterment of our environment. With this goal in our mind, we are working towards the mission of saving trees, the life and companion of our planet and it's fullfilling nature. We help Government organizations, privatized corporations with our extensive and experienced team in conducting surveys, carrying out plantation drives, cleanup drives, etc. The Purpose of our organization is to mainly maintain the flora and fauna of the surrounding environment. In collaboration with other organizations, we are planning to take up forest maintainence, tree transplantations, uprooting critical conditioned trees, and saving them for a greener, healthier environment."}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)("big",{className:"text-capitalize",style:{borderRadius:"7px",color:"whitesmoke"},children:"Head over to the blog section to read our blogs"})})]})})})},ae=a(43),re=a(152),ne=a(153),se={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),IsAuthenticated:null,user:null},ce=Object(ae.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case A:return Object(b.a)(Object(b.a)({},e),{},{IsAuthenticated:!0});case v:return localStorage.setItem("access",r.access),Object(b.a)(Object(b.a)({},e),{},{IsAuthenticated:!0,access:r.access,refresh:r.refresh});case w:return Object(b.a)(Object(b.a)({},e),{},{IsAuthenticated:!1});case k:return Object(b.a)(Object(b.a)({},e),{},{user:r});case I:return Object(b.a)(Object(b.a)({},e),{},{IsAuthenticated:!1});case _:return Object(b.a)(Object(b.a)({},e),{},{user:null});case y:case N:case P:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(b.a)(Object(b.a)({},e),{},{access:null,refresh:null,IsAuthenticated:!1,user:null});case D:return Object(b.a)({},e);case R:case T:case E:case L:case S:case C:return Object(b.a)({},e);default:return e}}}),oe=[ne.a],ie=Object(ae.createStore)(ce,{},Object(re.composeWithDevTools)(ae.applyMiddleware.apply(void 0,oe))),le=function(){return Object(d.jsx)(p.a,{store:ie,children:Object(d.jsx)(o.a,{children:Object(d.jsx)(V,{children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{exact:!0,path:"/",component:u}),Object(d.jsx)(i.b,{exact:!0,path:"/login",component:q}),Object(d.jsx)(i.b,{exact:!0,path:"/signup",component:G}),Object(d.jsx)(i.b,{exact:!0,path:"/reset-password",component:z}),Object(d.jsx)(i.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:Y}),Object(d.jsx)(i.b,{exact:!0,path:"/activate/:uid/:token",component:U}),Object(d.jsx)(i.b,{exact:!0,path:"/api/blog/about",component:te}),Object(d.jsx)(i.b,{exact:!0,path:"/api/blog/category",component:Q}),Object(d.jsx)(i.b,{exact:!0,path:"/api/posts/",component:$}),Object(d.jsx)(i.b,{exact:!0,path:"/api/survey/treedatasurvey/",component:Z}),Object(d.jsx)(i.b,{exact:!0,path:"/post/:id",component:K})]})})})})};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(le,{})}),document.getElementById("root"))},98:function(e,t,a){}},[[476,1,2]]]);
//# sourceMappingURL=main.c34fee9f.chunk.js.map