"use strict";(self.webpackChunkmy_courseProj_basic=self.webpackChunkmy_courseProj_basic||[]).push([[590],{2590:(D,h,c)=>{c.r(h),c.d(h,{RecipesModule:()=>O});var r=c(4719),p=c(1438),A=c(4466),l=c(5411),e=c(4650),v=c(4850),m=c(2986),f=c(2868),y=c(3584),d=c(6990),u=c(6895),U=c(8975);function w(i,o){if(1&i&&(e.TgZ(0,"li",10),e._uU(1),e.qZA()),2&i){const t=o.$implicit;e.xp6(1),e.AsE(" ",t.name,"-",t.amount," ")}}let I=(()=>{class i{constructor(t,n,s){this.route=t,this.router=n,this.store=s}ngOnInit(){this.route.params.subscribe(t=>{this.id=+t.id,this.store.select("recipes").pipe((0,m.q)(1),(0,f.b)(n=>{const s=n.recipes[this.id];s?this.recipe=s:this.router.navigate(["/","recipes"])})).subscribe()})}onAddToShoppingList(){this.store.dispatch(new y.Rw(this.recipe.ingredients))}onEdit(){this.router.navigate(["edit"],{relativeTo:this.route})}onDelete(t){this.store.dispatch(new d.BU(t)),this.router.navigate([""],{relativeTo:this.route})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p.gz),e.Y36(p.F0),e.Y36(l.yh))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-detail"]],decls:30,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"pointer","cursor",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA()(),e.TgZ(3,"div",0)(4,"div",1)(5,"h2"),e._uU(6),e.qZA(),e._UZ(7,"hr"),e.TgZ(8,"p"),e._uU(9),e.qZA()()(),e.TgZ(10,"div",0)(11,"div",1)(12,"div",3)(13,"button",4),e._uU(14," Manage Recipe "),e._UZ(15,"span",5),e.qZA(),e.TgZ(16,"ul",6)(17,"li")(18,"a",7),e.NdJ("click",function(){return n.onAddToShoppingList()}),e._uU(19,"To shopping List"),e.qZA()(),e.TgZ(20,"li")(21,"a",7),e.NdJ("click",function(){return n.onEdit()}),e._uU(22,"Edit Recipe"),e.qZA()(),e.TgZ(23,"li")(24,"a",7),e.NdJ("click",function(){return n.onDelete(n.id)}),e._uU(25,"Delete Recipe"),e.qZA()()()()()(),e.TgZ(26,"div",0)(27,"div",1)(28,"ul",8),e.YNc(29,w,2,2,"li",9),e.qZA()()()),2&t&&(e.xp6(2),e.s9C("alt",n.recipe.name),e.Q6J("src",n.recipe.imagePath,e.LSH),e.xp6(4),e.Oqu(n.recipe.name),e.xp6(3),e.Oqu(n.recipe.description),e.xp6(20),e.Q6J("ngForOf",n.recipe.ingredients))},dependencies:[u.sg,U.R]}),i})();function b(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",17)(1,"div",18),e._UZ(2,"input",19),e.qZA(),e.TgZ(3,"div",20),e._UZ(4,"input",21),e.qZA(),e.TgZ(5,"div",22)(6,"button",23),e.NdJ("click",function(){const g=e.CHM(t).index,a=e.oxw();return e.KtG(a.onDeleteIngredient(g))}),e._uU(7,"X"),e.qZA()()()}2&i&&e.Q6J("formGroupName",o.index)}let Z=(()=>{class i{constructor(t,n,s){this.route=t,this.router=n,this.store=s,this.editMode=!1}ngOnInit(){this.route.params.subscribe(t=>{this.id=+t.id,this.editMode=null!=t.id,this.initForm()})}onSubmit(){this.store.dispatch(this.editMode?new d.JY({id:this.id,recipe:this.recipeForm.value}):new d.N0(this.recipeForm.value)),this.onCancel()}onAddIngredient(){this.recipeForm.get("ingredients").push(new r.cw({name:new r.NI(null,r.kI.required),amount:new r.NI(null,[r.kI.required,r.kI.pattern(/^[1-9]+[0-9]*$/)])}))}onDeleteIngredient(t){this.recipeForm.get("ingredients").removeAt(t)}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}initForm(){let t="",n="",s="";this.recipeIngredients=new r.Oe([]),this.editMode&&this.store.select("recipes").pipe((0,m.q)(1),(0,f.b)(g=>{const a=g.recipes[this.id];if(t=a.name,n=a.imagePath,s=a.description,a.ingredients)for(let C of a.ingredients)this.recipeIngredients.push(new r.cw({name:new r.NI(C.name,r.kI.required),amount:new r.NI(C.amount,[r.kI.required,r.kI.pattern(/^[1-9]+[0-9]*$/)])}))})).subscribe(),this.recipeForm=new r.cw({name:new r.NI(t,r.kI.required),imagePath:new r.NI(n,r.kI.required),description:new r.NI(s,r.kI.required),ingredients:this.recipeIngredients})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p.gz),e.Y36(p.F0),e.Y36(l.yh))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-edit"]],decls:38,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",2,"max-height","300px",3,"src"],["for","description"],["type","text","id","description","formControlName","description","rows","6",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top:10px;",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary","pull-right",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-3"],["type","number","formControlName","amount",1,"form-control"],[1,"col-xs-1"],[1,"btn","btn-danger",3,"click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(3,"div",0)(4,"div",1)(5,"button",3),e._uU(6,"Save"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return n.onCancel()}),e._uU(8,"Cancel"),e.qZA()()(),e.TgZ(9,"div",0)(10,"div",1)(11,"div",5)(12,"label",6),e._uU(13,"Name"),e.qZA(),e._UZ(14,"input",7),e.qZA()()(),e.TgZ(15,"div",0)(16,"div",1)(17,"div",5)(18,"label",8),e._uU(19,"Image URL"),e.qZA(),e._UZ(20,"input",9,10),e.qZA()()(),e.TgZ(22,"div",0)(23,"div",1),e._UZ(24,"img",11),e.qZA()(),e.TgZ(25,"div",0)(26,"div",1)(27,"div",5)(28,"label",12),e._uU(29,"Description"),e.qZA(),e._UZ(30,"textarea",13),e.qZA()()(),e.TgZ(31,"div",0)(32,"div",14),e.YNc(33,b,8,1,"div",15),e.qZA()(),e._UZ(34,"hr"),e.TgZ(35,"div",0)(36,"button",16),e.NdJ("click",function(){return n.onAddIngredient()}),e._uU(37,"Add New Ingredient"),e.qZA()()()()()),2&t){const s=e.MAs(21);e.xp6(2),e.Q6J("formGroup",n.recipeForm),e.xp6(3),e.Q6J("disabled",!n.recipeForm.valid),e.xp6(19),e.Q6J("src",s.value,e.LSH),e.xp6(9),e.Q6J("ngForOf",n.recipeIngredients.controls)}},dependencies:[u.sg,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,r.x0,r.CE]}),i})();var R=c(8562),F=c(7545),N=c(1086);let T=(()=>{class i{constructor(t,n){this.store=t,this.actions$=n}resolve(t,n){return this.store.select("recipes").pipe((0,m.q)(1),(0,F.w)(s=>0===s.recipes.length?(this.store.dispatch(new d.sP),this.actions$.pipe((0,R.l4)(d.St),(0,m.q)(1))):(0,N.of)(s.recipes)))}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(l.yh),e.LFG(R.eX))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),x=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(t,n){1&t&&(e.TgZ(0,"h4"),e._uU(1,"Please Select a Recipe"),e.qZA())}}),i})(),q=(()=>{class i{ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:5,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(t,n){1&t&&(e.TgZ(0,"a",0)(1,"div",1)(2,"h4",2),e._uU(3),e.qZA(),e.TgZ(4,"p",3),e._uU(5),e.qZA()(),e.TgZ(6,"span",4),e._UZ(7,"img",5),e.qZA()()),2&t&&(e.Q6J("routerLink","/recipes/"+n.index),e.xp6(3),e.Oqu(n.recipe.name),e.xp6(2),e.Oqu(n.recipe.description),e.xp6(2),e.Q6J("src",n.recipe.imagePath,e.LSH)("alt",n.recipe.name))},dependencies:[p.rH,p.Od]}),i})();function J(i,o){if(1&i&&e._UZ(0,"app-recipe-item",4),2&i){const t=o.$implicit;e.Q6J("index",o.index)("recipe",t)}}let S=(()=>{class i{constructor(t,n,s){this.router=t,this.route=n,this.store=s}ngOnInit(){this.recipes=this.store.select("recipes")}ngOnDestroy(){}onNew(){this.router.navigate(["new"],{relativeTo:this.route})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p.F0),e.Y36(p.gz),e.Y36(l.yh))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-list"]],decls:9,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"index","recipe",4,"ngFor","ngForOf"],[3,"index","recipe"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.onNew()}),e._uU(3,"New Recipe"),e.qZA()()(),e._UZ(4,"hr"),e.TgZ(5,"div",0)(6,"div",1),e.YNc(7,J,1,2,"app-recipe-item",3),e.ALo(8,"async"),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("ngForOf",e.lcZ(8,1,n.recipes).recipes))},dependencies:[u.sg,q,u.Ov]}),i})();const k=[{path:"",component:(()=>{class i{constructor(t){this.store=t}ngOnInit(){this.store.dispatch(new d.sP)}ngOnDestroy(){}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.yh))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-recipe-list"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"router-outlet"),e.qZA()())},dependencies:[p.lC,S]}),i})(),canActivate:[(i,o)=>{const t=(0,e.f3M)(p.F0).createUrlTree(["/auth"]);return(0,e.f3M)(l.yh).select("auth").pipe((0,v.U)(s=>s.user),(0,m.q)(1),(0,v.U)(s=>!!s||t))}],children:[{path:"",component:x},{path:"new",component:Z},{path:":id",component:I,resolve:[T]},{path:":id/edit",component:Z,resolve:[T]}]}];let L=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.Bz.forChild(k),p.Bz]}),i})(),O=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[A.m,r.UX,p.Bz,L]}),i})()}}]);