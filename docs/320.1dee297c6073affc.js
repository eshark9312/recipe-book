"use strict";(self.webpackChunkmy_courseProj_basic=self.webpackChunkmy_courseProj_basic||[]).push([[320],{3320:(_,u,d)=>{d.r(u),d.d(u,{ShoppingListModule:()=>S});var p=d(4719),g=d(1438),h=d(4466),c=d(3584),t=d(4650),a=d(5411),l=d(6895),f=d(9985);const C=["f"];function b(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.onDelete(o.editedItemIndex))}),t._uU(1,"Delete"),t.qZA()}}let Z=(()=>{class e{constructor(n){this.store=n,this.editMode=!1}ngOnInit(){this.store.select("shoppingList").subscribe(n=>{n.editedIndex>-1?(this.editMode=!0,this.editedItem=n.editedIngredient,this.editedItemIndex=n.editedIndex,this.editForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})):this.editMode=!1})}ngOnDestroy(){}onAddItem(n){const i=n.value,o=new f.o(i.name,i.amount);this.store.dispatch(this.editMode?new c.D6(o):new c.eh(o)),this.editMode=!1,n.reset()}onDelete(n){this.store.dispatch(new c.cB),this.editMode=!1}onClear(n){n.reset()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-edit"]],viewQuery:function(n,i){if(1&n&&t.Gf(C,5),2&n){let o;t.iGM(o=t.CRH())&&(i.editForm=o.first)}},decls:19,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],[1,"row","col-xs-12"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(o);const r=t.MAs(3);return t.KtG(i.onAddItem(r))}),t.TgZ(4,"div",0)(5,"div",4)(6,"label",5),t._uU(7,"Name"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",7)(10,"label",8),t._uU(11,"Amount"),t.qZA(),t._UZ(12,"input",9),t.qZA()(),t.TgZ(13,"div",10)(14,"button",11),t._uU(15),t.qZA(),t.YNc(16,b,2,0,"button",12),t.TgZ(17,"button",13),t.NdJ("click",function(){t.CHM(o);const r=t.MAs(3);return t.KtG(i.onClear(r))}),t._uU(18,"Clear"),t.qZA()()()()()}if(2&n){const o=t.MAs(3);t.xp6(14),t.Q6J("disabled",!o.valid),t.xp6(1),t.Oqu(i.editMode?"Update":"add"),t.xp6(1),t.Q6J("ngIf",i.editMode)}},dependencies:[l.O5,p._Y,p.Fj,p.wV,p.JJ,p.JL,p.Q7,p.c5,p.On,p.F]}),e})();function v(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"a",4),t.NdJ("click",function(){const m=t.CHM(n).index,r=t.oxw();return t.KtG(r.onEditIngredient(m))}),t._uU(1),t.qZA()}if(2&e){const n=s.$implicit;t.xp6(1),t.AsE(" ",n.name," (",n.amount,") ")}}let y=(()=>{class e{constructor(n){this.store=n}ngOnInit(){this.ingredients=this.store.select("shoppingList")}ngOnDestroy(){}onEditIngredient(n){this.store.dispatch(new c.cd(n))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-list"]],decls:9,vars:3,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-shopping-edit")(3,"hr"),t.TgZ(4,"ul",2),t.YNc(5,v,2,2,"a",3),t.ALo(6,"async"),t.qZA(),t.TgZ(7,"p"),t._uU(8,"The List"),t.qZA()()()),2&n&&(t.xp6(5),t.Q6J("ngForOf",t.lcZ(6,1,i.ingredients).ingredients))},dependencies:[l.sg,Z,l.Ov]}),e})(),S=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.m,p.u5,g.Bz.forChild([{path:"",component:y}])]}),e})()}}]);