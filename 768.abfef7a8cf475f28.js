"use strict";(self.webpackChunkposts=self.webpackChunkposts||[]).push([[768],{768:(L,c,u)=>{u.r(c),u.d(c,{LandingModule:()=>J});var p=u(808),a=u(459),t=u(223);let d=(()=>{class e{constructor(){this.users=[{username:"admin",password:"12345"}],this.usersStorage=localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[]}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const f=function(){return["/landing/posts"]},h=function(){return["/landing/new-post"]};let v=(()=>{class e{constructor(o){this.users=o}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-landing"]],decls:12,vars:4,consts:[[1,"navbar","navbar-expand","navbar-light","bg-light"],["id","navbarTogglerDemo01",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto","mt-2","mt-lg-0"],[1,"nav-item","active"],[1,"nav-link",3,"routerLink"],[1,"nav-item"]],template:function(o,n){1&o&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"ul",2)(3,"li",3)(4,"a",4),t._uU(5,"Posts "),t.qZA()(),t.TgZ(6,"li",5)(7,"a",4),t._uU(8,"New Post"),t.qZA()(),t._UZ(9,"li",5),t.qZA()()(),t.TgZ(10,"div"),t._UZ(11,"router-outlet"),t.qZA()),2&o&&(t.xp6(4),t.Q6J("routerLink",t.DdM(2,f)),t.xp6(3),t.Q6J("routerLink",t.DdM(3,h)))},directives:[a.yS,a.lC],styles:["nav[_ngcontent-%COMP%]{font-size:21px;padding-left:33px}"]}),e})();var g=u(520);let m=(()=>{class e{constructor(o){this.http=o,this.newPosts=[]}updateposts(){localStorage.setItem("newPosts",JSON.stringify(this.newPosts))}getposts(){return this.http.get("https://jsonplaceholder.typicode.com/posts")}postData(o){return this.http.post("https://reqres.in/api/users",o)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(g.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var r=u(382);let _=(()=>{class e{transform(o,n){return o.filter(i=>i.title.includes(n))?o.filter(i=>i.title.includes(n)):[{title:"not found"}]}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=t.Yjl({name:"filter",type:e,pure:!0}),e})();function b(e,s){if(1&e&&(t.TgZ(0,"div",4)(1,"div",5)(2,"h2"),t._uU(3),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"p"),t._uU(6),t.qZA()()()),2&e){const o=s.$implicit;t.xp6(3),t.Oqu(o.title),t.xp6(3),t.Oqu(o.body)}}function Z(e,s){if(1&e&&(t.TgZ(0,"div",4)(1,"div",5)(2,"h2"),t._uU(3),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"p"),t._uU(6),t.qZA()()()),2&e){const o=s.$implicit;t.xp6(3),t.Oqu(o.title),t.xp6(3),t.Oqu(o.body)}}let w=(()=>{class e{constructor(o,n){this.service=o,this.http=n,this.p="",this.newPost=this.service.newPosts}ngOnInit(){this.getposts()}getposts(){this.service.getposts().subscribe(o=>{this.posts=o})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(m),t.Y36(g.eN))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-posts"]],decls:8,vars:9,consts:[["type","text","placeholder","Search",1,"serach",3,"ngModel","ngModelChange"],[1,"container"],[1,"row"],["class","col-12",4,"ngFor","ngForOf"],[1,"col-12"],[1,"post"]],template:function(o,n){1&o&&(t.TgZ(0,"input",0),t.NdJ("ngModelChange",function(l){return n.p=l}),t.qZA(),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,b,7,2,"div",3),t.ALo(4,"filter"),t.qZA(),t.TgZ(5,"div",2),t.YNc(6,Z,7,2,"div",3),t.ALo(7,"filter"),t.qZA()()),2&o&&(t.Q6J("ngModel",n.p),t.xp6(3),t.Q6J("ngForOf",t.xi3(4,3,n.newPost,n.p)),t.xp6(3),t.Q6J("ngForOf",t.xi3(7,6,n.posts,n.p)))},directives:[r.Fj,r.JJ,r.On,p.sg],pipes:[_],styles:[".serach[_ngcontent-%COMP%]{width:300px;position:absolute;top:11px;right:33px;padding:9px;outline:0;border:0;border-radius:10px;box-shadow:1px 1px 5px}.container[_ngcontent-%COMP%]{padding-top:20px}.post[_ngcontent-%COMP%]{background-color:#fff;margin:20px;box-shadow:1px 1px 25px #00000080;padding:25px;border-radius:10px}.post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5em;padding-left:30px}"]}),e})();function y(e,s){1&e&&(t.TgZ(0,"span",8),t._uU(1,"Enter Title"),t.qZA())}function C(e,s){1&e&&(t.TgZ(0,"span",8),t._uU(1,"Enter Content"),t.qZA())}let P=(()=>{class e{constructor(o,n,i){this.service=o,this.formBuilder=n,this.router=i,this.addPost=n.group({title:["",r.kI.required],body:["",r.kI.required,r.kI.minLength(300)]}),console.log(this.addPost)}ngOnInit(){}newpost(){console.log(this.service.newPosts),this.service.newPosts.unshift(this.addPost.value),this.updatePosts(),this.router.navigate([""])}updatePosts(){localStorage.setItem("newPosts",JSON.stringify(this.service.newPosts))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(m),t.Y36(r.qu),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-new-post"]],decls:16,vars:4,consts:[[1,"container"],[1,"col-sm-12","col-lg-6",3,"formGroup","ngSubmit"],[1,"form-group"],["for",""],["type","text","placeholder","Title for the new post","formControlName","title","required",""],["style","color: red;",4,"ngIf"],["required","","formControlName","body"],["type","submit",1,"btn","btn-primary",3,"disabled"],[2,"color","red"]],template:function(o,n){if(1&o&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return n.newpost()}),t.TgZ(2,"div",2)(3,"label",3),t._uU(4,"Title:"),t.qZA(),t._UZ(5,"input",4),t.YNc(6,y,2,0,"span",5),t.qZA(),t._UZ(7,"br"),t.TgZ(8,"div",2)(9,"label",3),t._uU(10,"Content:"),t.qZA(),t._UZ(11,"br")(12,"textarea",6),t.YNc(13,C,2,0,"span",5),t.qZA(),t.TgZ(14,"button",7),t._uU(15," post "),t.qZA()()()),2&o){let i,l;t.xp6(1),t.Q6J("formGroup",n.addPost),t.xp6(5),t.Q6J("ngIf",(null==(i=n.addPost.get("title"))?null:i.touched)&&(null==(i=n.addPost.get("title"))?null:i.hasError("required"))),t.xp6(7),t.Q6J("ngIf",(null==(l=n.addPost.get("body"))?null:l.touched)&&(null==(l=n.addPost.get("body"))?null:l.hasError("required"))),t.xp6(1),t.Q6J("disabled",!n.addPost.valid)}},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.Q7,p.O5],styles:["textarea[_ngcontent-%COMP%]{width:100%;height:200px;overflow:auto}"]}),e})();function T(e,s){1&e&&(t.TgZ(0,"p",9),t._uU(1,"worng username or password"),t.qZA())}const q=function(){return["/landing/register"]};let F=(()=>{class e{constructor(o,n,i){this.users=o,this.formBuilder=n,this.router=i,this.failed=!1,this.loginForm=n.group({username:["",r.kI.required],password:["",r.kI.required]})}ngOnInit(){}login(){for(let o=0;o<this.users.users.length;o++)this.loginForm.value.username==this.users.users[o].username&&this.loginForm.value.password==this.users.users[o].password&&(this.users.login=!0,this.router.navigate(["/landing/new-post"]));for(let o=0;o<this.users.usersStorage.length;o++)this.loginForm.value.username&&this.loginForm.value.password==this.users.usersStorage[o].username&&this.users.usersStorage[o].password?(this.users.login=!0,this.router.navigate(["/landing/new-post"])):this.failed=!0}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d),t.Y36(r.qu),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:22,vars:5,consts:[[1,"container"],["align","center"],[1,"col-md-12","col-lg-6",3,"formGroup","ngSubmit"],["style","color: red;","align","center",4,"ngIf"],["for",""],["type","text","formControlName","username","required",""],["type","password","formControlName","password","required",""],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"btn","btn-primary",3,"routerLink"],["align","center",2,"color","red"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Login"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return n.login()}),t.YNc(4,T,2,0,"p",3),t.TgZ(5,"label",4),t._uU(6," Username: "),t.qZA(),t._UZ(7,"br")(8,"input",5)(9,"br")(10,"br"),t.TgZ(11,"label",4),t._uU(12,"Password:"),t.qZA(),t._UZ(13,"br")(14,"input",6)(15,"br")(16,"br"),t.TgZ(17,"button",7),t._uU(18,"Login"),t.qZA(),t._uU(19," \xa0 \xa0 "),t.TgZ(20,"button",8),t._uU(21,"Register"),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("formGroup",n.loginForm),t.xp6(1),t.Q6J("ngIf",n.failed),t.xp6(13),t.Q6J("disabled",!n.loginForm.valid),t.xp6(3),t.Q6J("routerLink",t.DdM(4,q)))},directives:[r._Y,r.JL,r.sg,p.O5,r.Fj,r.JJ,r.u,r.Q7,a.rH],styles:[""]}),e})();function U(e,s){1&e&&(t.TgZ(0,"span",9),t._uU(1,"Password does not match"),t.qZA())}const x=[{path:"",component:v,children:[{path:"",redirectTo:"posts",pathMatch:"full"},{path:"posts",component:w},{path:"new-post",component:P,canActivate:[(()=>{class e{constructor(o,n){this.users=o,this.router=n}canActivate(o,n){return!!this.users.login||(this.router.navigate(["/landing/login"]),!1)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(d),t.LFG(a.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()]},{path:"login",component:F},{path:"register",component:(()=>{class e{constructor(o,n,i){this.users=o,this.formBuilder=n,this.router=i,this.registerForm=n.group({username:["",r.kI.required],password:["",r.kI.required],confirmPassword:["",r.kI.required]},{validators:this.passwordMatchValidator})}ngOnInit(){}register(){this.users.users.push(this.registerForm.value),console.log(this.registerForm.value),console.log(this.users.users),localStorage.setItem("users",JSON.stringify(this.users.users)),this.router.navigate(["/landing/login"])}passwordMatchValidator(o){return o.get("password").value===o.get("confirmPassword").value?null:{mismatch:!0}}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d),t.Y36(r.qu),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:26,vars:3,consts:[[1,"container"],["align","center"],[1,"col-sm-12","col-lg-6",3,"formGroup","ngSubmit"],["for",""],["type","text","formControlName","username"],["type","password","formControlName","password"],["type","password","formControlName","confirmPassword"],["style","color: red;",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],[2,"color","red"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Register"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return n.register()}),t.TgZ(4,"label",3),t._uU(5," Username: "),t.qZA(),t._UZ(6,"br")(7,"input",4)(8,"br")(9,"br"),t.TgZ(10,"label",3),t._uU(11,"Password:"),t.qZA(),t._UZ(12,"br")(13,"input",5)(14,"br")(15,"br"),t.TgZ(16,"label"),t._uU(17,"Confirm Password:"),t.qZA(),t._UZ(18,"br")(19,"input",6)(20,"br"),t.YNc(21,U,2,0,"span",7),t._UZ(22,"br")(23,"br"),t.TgZ(24,"button",8),t._uU(25,"Register"),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("formGroup",n.registerForm),t.xp6(18),t.Q6J("ngIf",n.registerForm.hasError("mismatch")),t.xp6(3),t.Q6J("disabled",!n.registerForm.valid))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,p.O5],styles:[""]}),e})()}]}];let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.Bz.forChild(x)],a.Bz]}),e})(),J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,A]]}),e})()}}]);