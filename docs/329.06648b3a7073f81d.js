"use strict";(self.webpackChunkstore_assignment=self.webpackChunkstore_assignment||[]).push([[329],{5329:(Nt,M,r)=>{r.r(M),r.d(M,{ProductsModule:()=>Qt});var f=r(4755),g=r(2480),E=r(394),P=r(6223),K=r(5588);class D extends K.X{constructor(s){super(s),this.totalPrice=0,s&&Object.keys(s).length&&Object.assign(this,s)}}var C=r(2076),w=r(5698),J=r(9300),R=r(4351),v=r(3900),T=r(8372),m=r(8505),x=r(5855),L=r(2618),t=r(2223),c=r(9401),B=r(6602),H=r(2602),_=r(3081),$=r(2018);let F=(()=>{class e{constructor(o,n,a){this._connectionService=o,this._translateService=n,this._toasterService=a,this.endpoints=new B.A,this.allProducts$=this._connectionService.get(this.endpoints.products.getAllProducts),this.getProduct=i=>this._connectionService.get(this.endpoints.products.getProduct+i),this.deleteProduct=i=>this._connectionService.delete(this.endpoints.products.deleteProduct+i).pipe((0,m.b)(()=>this._toasterService.success(this._translateService.instant("deleteSuccess")))),this.createNewProduct=i=>this._connectionService.post(this.endpoints.products.addNewProduct,i).pipe((0,m.b)(()=>this._toasterService.success(this._translateService.instant("prodCreatedSuccess")))),this.updateProduct=i=>this._connectionService.put(this.endpoints.products.updateProduct+i?.data.id,i).pipe((0,m.b)(()=>this._toasterService.success(this._translateService.instant("prodUpdateSuccess"))))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(H.M),t.LFG(_.sK),t.LFG($._W))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var G=r(3785),W=r(3276),X=r(5437),k=r(6709),I=r(6782),j=r(846),tt=r(1954),O=r(5965);function et(e,s){1&e&&(t.TgZ(0,"th",13),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.TgZ(3,"th",13),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"th",13),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"th",13),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"th",13),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"th",13),t._uU(16),t.ALo(17,"translate"),t.qZA(),t._UZ(18,"th",13)),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,6,"image")," "),t.xp6(3),t.hij(" ",t.lcZ(5,8,"name")," "),t.xp6(3),t.hij(" ",t.lcZ(8,10,"price")," "),t.xp6(3),t.hij(" ",t.lcZ(11,12,"description")," "),t.xp6(3),t.hij(" ",t.lcZ(14,14,"discountPercentage")," "),t.xp6(3),t.hij(" ",t.lcZ(17,16,"createdAt")," "))}const ot=function(e){return["/dashboard/products/edit",e]};function rt(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"td",14),t._UZ(1,"img",15),t.qZA(),t.TgZ(2,"td",16),t._uU(3),t.qZA(),t.TgZ(4,"td",14),t._uU(5),t.qZA(),t.TgZ(6,"td",14),t._uU(7),t.qZA(),t.TgZ(8,"td",14),t._uU(9),t.qZA(),t.TgZ(10,"td",14),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td",17),t.NdJ("click",function(a){return a.stopPropagation()}),t.TgZ(14,"div",18),t._UZ(15,"app-button",19),t.ALo(16,"translate"),t.TgZ(17,"app-button",20),t.NdJ("clicked",function(){const i=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.onDeleteProduct(i))}),t.ALo(18,"translate"),t.qZA()()()}if(2&e){const o=s.$implicit,n=t.oxw();let a,i,u,d,h;t.xp6(1),t.Q6J("ngSrc",(null==o||null==o.attributes?null:o.attributes.imageUrl)||"assets/images/istockphoto.jpg"),t.xp6(2),t.hij(" ",null!==(a=null==o||null==o.attributes?null:o.attributes.name)&&void 0!==a?a:"\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640"," "),t.xp6(2),t.hij(" ",null!==(i=null==o||null==o.attributes?null:o.attributes.price)&&void 0!==i?i:"\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640"," "),t.xp6(2),t.hij(" ",null!==(u=null==o||null==o.attributes?null:o.attributes.desc)&&void 0!==u?u:"\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640"," "),t.xp6(2),t.hij(" ",null!==(d=null==o||null==o.attributes?null:o.attributes.discountPercentage)&&void 0!==d?d:"\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640"," "),t.xp6(2),t.hij(" ",null!==(h=t.xi3(12,13,null==o||null==o.attributes?null:o.attributes.createdAt,"dd-MM-YYYY"))&&void 0!==h?h:"\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640"," "),t.xp6(4),t.Q6J("routerLink",t.VKq(20,ot,null==o?null:o.id))("matType",n.ButtonTypes.miniFap)("color",n.ButtonColors.primary)("toolTip",t.lcZ(16,16,"edit")),t.xp6(2),t.Q6J("color",n.ButtonColors.warn)("matType",n.ButtonTypes.miniFap)("toolTip",t.lcZ(18,18,"delete"))}}function at(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"mat-paginator",23),t.NdJ("page",function(a){t.CHM(o);const i=t.oxw(2);return t.KtG(i.onPageChange(a))}),t.qZA()}if(2&e){const o=t.oxw(2);t.Q6J("length",o.productListController.totalLength)("pageSize",o.productListController.size)("pageSizeOptions",o.productListController.pageSizeOptions)}}function nt(e,s){if(1&e&&(t.TgZ(0,"div",21),t.YNc(1,at,1,3,"mat-paginator",22),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",!!o.productListController)}}function st(e,s){1&e&&(t._UZ(0,"no-data",24),t.ALo(1,"translate")),2&e&&t.Q6J("text",t.lcZ(1,1,"noData"))}const it=function(){return{y:"80px",delay:"700ms"}},A=function(e){return{value:"*",params:e}};function dt(e,s){if(1&e&&(t.TgZ(0,"div",25)(1,"span",26),t._uU(2),t.ALo(3,"number"),t.qZA(),t.TgZ(4,"span",27),t._uU(5),t.ALo(6,"translate"),t.qZA()()),2&e){const o=t.oxw();t.Q6J("@animate",t.VKq(9,A,t.DdM(8,it))),t.xp6(2),t.Oqu(t.xi3(3,3,o.productListController.totalPrice,"1.2-2")),t.xp6(3),t.Oqu(t.lcZ(6,6,"totalPrice"))}}const ct=function(){return{value:"100"}},lt=function(){return{x:"-40px",delay:"150ms"}},ut=function(){return{x:"40px",delay:"150ms"}};let Q=(()=>{class e{constructor(o,n,a,i,u,d,h){this._fb=o,this._router=n,this._route=a,this._destroyRef=i,this._productsService=u,this._confirmService=d,this._translateService=h,this.search=this._fb.control(null),this.productListController=new D,this.ButtonTypes=P.qh,this.ButtonColors=P.Tt,this.onDeleteProduct=l=>{this._confirmService.Confirm(`${this._translateService.instant("from")+" "+this._translateService.instant("delete")} (${l.attributes?.name.split("").slice(0,40).join("")}...) ?`,this._translateService.instant("sure"),this._translateService.instant("delete")).pipe((0,w.q)(1),(0,J.h)(Boolean),(0,R.b)(()=>this._productsService.deleteProduct(l.id)),(0,v.w)(()=>this._getProducts())).subscribe()},this.onPageChange=l=>{(0,C.D)(this._router.navigate([],{queryParams:{index:l.pageIndex||null,size:l.pageSize||null},queryParamsHandling:"merge"})).pipe((0,w.q)(1)).subscribe()},this._searchChangeHandler=()=>{this.search.valueChanges.pipe((0,T.b)(500),(0,v.w)(l=>(0,C.D)(this._router.navigate([],{queryParams:{search:l||null},queryParamsHandling:"merge"}))),(0,x.sL)(this._destroyRef)).subscribe()},this._paramsChanges=()=>{this._route.queryParamMap.pipe((0,m.b)(l=>{const Z={index:L.T.indexPage(l,"index"),size:L.T.indexSize(l,"size"),search:L.T.search(l,"search")};this.productListController=new D({...this.productListController,...Z}),this.search.patchValue(Z?.search)}),(0,v.w)(()=>this._getProducts()),(0,x.sL)(this._destroyRef)).subscribe()},this._getProducts=()=>{this.productListController.dataLoaded=!1;const{index:l,size:Z,search:Y}=this.productListController;return this._productsService.allProducts$.pipe((0,m.b)(y=>{y?.data.length&&(this.productListController.list=(Y?y?.data.filter(q=>q?.attributes?.name?.toLowerCase().includes(Y?.toLowerCase())):y?.data)?.slice(l?l*Z:0,l?l*Z+10:Z),this.productListController.totalLength=y?.meta?.pagination?.total,this.productListController.totalPrice=y?.data.reduce((q,Vt)=>q+Number((Vt?.attributes?.price||"0").replace(/[$]/g,"")),0)),this.productListController.dataLoaded=!0}))}}ngOnInit(){this._paramsChanges(),this._searchChangeHandler()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.qu),t.Y36(g.F0),t.Y36(g.gz),t.Y36(t.ktI),t.Y36(F),t.Y36(G.OX),t.Y36(_.sK))},e.\u0275cmp=t.Xpm({type:e,selectors:[["products-list"]],decls:19,vars:23,consts:[[1,"w-full","h-full","flex","flex-col","justify-center","items-stretch"],[1,"h-32","bg-blue-200"],[1,"flex","justify-center","items-start"],[1,"sm:w-11/12","w-full","flex","flex-col","justify-center","items-stretch","sm:gap-2","gap-1","-mt-24"],[1,"flex","flex-wrap","justify-between","items-center"],["outlineOption","2.5px solid #03a9f4",1,"sm:h-11","h-8",3,"formControl","placeholder"],["routerLink","/dashboard/products/create","icon","post_add","btnClass","bg-gray-600 outline-none text-white text-lg py-1 shadow-md",3,"matType","color","text"],[1,"table-scrollable","max-h-[77vh]","shadow-md","bg-white",3,"data","dataLoaded","colSpanCount"],["headers",""],["row",""],["pagination",""],["noData",""],["cdkDrag","","class","fixed sm:bottom-[80px] bottom-[40px] sm:right-[80px] right-[40px] z-50 h-20 min-w-28 flex flex-col justify-center items-center mat-elevation-z7 rounded-md bg-white px-2 cursor-move",4,"ngIf"],[1,"sm:text-[14px]","text-xs","text-start"],[1,"sm:text-[15px]","text-xs","break-words"],["width","100","height","80","loading","lazy",1,"rounded-xl","border-2","border-gray-200","shadow-md","hover:scale-110",3,"ngSrc"],[1,"max-w-[300px]","sm:text-[14px]","leading-5","text-xs","break-words"],[3,"click"],[1,"h-full","w-auto","flex","justify-start","items-center","sm:gap-2","gap-[3px]"],["icon","edit_note","btnClass","bg-gray-600 text-white",3,"routerLink","matType","color","toolTip"],["icon","delete",3,"color","matType","toolTip","clicked"],[1,"h-auto","w-full","bg-white","flex","justify-end","items-center","px-2"],["panelClass","bg-transparent","class","w-1/2",3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],["panelClass","bg-transparent",1,"w-1/2",3,"length","pageSize","pageSizeOptions","page"],[3,"text"],["cdkDrag","",1,"fixed","sm:bottom-[80px]","bottom-[40px]","sm:right-[80px]","right-[40px]","z-50","h-20","min-w-28","flex","flex-col","justify-center","items-center","mat-elevation-z7","rounded-md","bg-white","px-2","cursor-move"],[1,"font-semibold","text-2xl","truncate"],[1,"font-medium","text-xs"]],template:function(o,n){1&o&&(t.TgZ(0,"page-component",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"magic-search-input",5),t.ALo(6,"translate"),t._UZ(7,"app-button",6),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"app-table",7),t.YNc(10,et,19,18,"ng-template",null,8,t.W1O),t.YNc(12,rt,19,22,"ng-template",null,9,t.W1O),t.YNc(14,nt,2,1,"ng-template",null,10,t.W1O),t.YNc(16,st,2,3,"ng-template",null,11,t.W1O),t.qZA(),t.YNc(18,dt,7,11,"div",12),t.qZA()()()),2&o&&(t.Q6J("@animateStagger",t.DdM(16,ct)),t.xp6(5),t.Q6J("@animate",t.VKq(18,A,t.DdM(17,lt)))("formControl",n.search)("placeholder",t.lcZ(6,12,"search")+"..."),t.xp6(2),t.Q6J("@animate",t.VKq(21,A,t.DdM(20,ut)))("matType",n.ButtonTypes.round_stroked)("color",n.ButtonColors.primary)("text",t.lcZ(8,14,"create")),t.xp6(2),t.Q6J("data",n.productListController.list)("dataLoaded",n.productListController.dataLoaded)("colSpanCount",6),t.xp6(9),t.Q6J("ngIf",n.productListController.dataLoaded))},dependencies:[f.O5,g.rH,c.JJ,c.oH,W.NW,X.Zt,k.a,I.U,f.Zd,j.r,tt.d,O.C,f.JJ,f.uU,_.X$],data:{animation:[E.F]}}),e})();var pt=r(4040);const mt={name:{required:"Name is required"},price:{required:"Price is required",min:"Price should be grater than 1$"},fromDate:{required:"From date is required"},toDate:{required:"To date is required"}};var gt=r(4968),ht=r(6451),V=r(4004),N=r(8746),ft=r(6775),xt=r(6373),S=r(8280),b=r(9114),vt=r(8097),Zt=r(430);const yt=function(){return{y:"-40px",delay:"100ms"}},p=function(e){return{value:"*",params:e}};function Pt(e,s){if(1&e&&t._UZ(0,"img",25),2&e){const o=t.oxw(2);t.Q6J("@animate",t.VKq(3,p,t.DdM(2,yt)))("ngSrc",o.imageUrl()||"assets/images/istockphoto.jpg")}}const Ct=function(){return{y:"-40px",delay:"150ms"}};function _t(e,s){1&e&&t._UZ(0,"img",26),2&e&&t.Q6J("@animate",t.VKq(2,p,t.DdM(1,Ct)))}const bt=function(){return{y:"-40px",delay:"200ms"}},Tt=function(){return{y:"-40px",delay:"250ms"}},Lt=function(){return{y:"-40px",delay:"300ms"}},At=function(){return{y:"-40px",delay:"350ms"}},St=function(){return{y:"-40px",delay:"400ms"}},Ut=function(){return{y:"-40px",delay:"450ms"}},qt=function(){return{y:"-40px",delay:"500ms"}},Mt=function(){return{y:"-40px",delay:"550ms"}},Et=function(){return{y:"-40px",delay:"600ms"}};function Dt(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"form",5)(1,"div",6),t.YNc(2,Pt,1,5,"img",7),t.YNc(3,_t,1,4,"img",8),t.TgZ(4,"mat-form-field",9)(5,"mat-label"),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._UZ(8,"input",10),t.qZA()(),t.TgZ(9,"mat-form-field",11)(10,"mat-label"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"textarea",12),t.TgZ(14,"mat-error"),t._uU(15),t.qZA()(),t.TgZ(16,"mat-form-field",11)(17,"mat-label"),t._uU(18),t.ALo(19,"translate"),t.qZA(),t._UZ(20,"input",13),t.TgZ(21,"mat-error"),t._uU(22),t.qZA()(),t.TgZ(23,"mat-form-field",11)(24,"mat-label"),t._uU(25),t.ALo(26,"translate"),t.qZA(),t._UZ(27,"input",14),t.TgZ(28,"mat-icon",15),t._uU(29,"$"),t.qZA(),t.TgZ(30,"mat-error"),t._uU(31),t.qZA()(),t.TgZ(32,"mat-form-field",11)(33,"mat-label"),t._uU(34),t.ALo(35,"translate"),t.qZA(),t._UZ(36,"input",16),t.TgZ(37,"mat-error"),t._uU(38),t.qZA(),t._UZ(39,"mat-datepicker-toggle",17)(40,"mat-datepicker",null,18),t.qZA(),t.TgZ(42,"mat-form-field",11)(43,"mat-label"),t._uU(44),t.ALo(45,"translate"),t.qZA(),t._UZ(46,"input",19),t.TgZ(47,"mat-error"),t._uU(48),t.qZA(),t._UZ(49,"mat-datepicker-toggle",17)(50,"mat-datepicker",null,20),t.qZA(),t.TgZ(52,"mat-form-field",11)(53,"mat-label"),t._uU(54),t.ALo(55,"translate"),t.qZA(),t._UZ(56,"input",21),t.TgZ(57,"mat-icon",15),t._uU(58,"%"),t.qZA(),t.TgZ(59,"mat-error"),t._uU(60),t.qZA()(),t.TgZ(61,"div",22),t._UZ(62,"app-button",23),t.ALo(63,"translate"),t.TgZ(64,"app-button",24),t.NdJ("clicked",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.onSubmit())}),t.ALo(65,"translate"),t.qZA()()()}if(2&e){const o=t.MAs(41),n=t.MAs(51),a=t.oxw();let i,u;t.Q6J("formGroup",a.addEditProductForm),t.xp6(2),t.Q6J("ngIf",a.imageUrl()),t.xp6(1),t.Q6J("ngIf",!a.imageUrl()),t.xp6(1),t.Q6J("@animate",t.VKq(58,p,t.DdM(57,bt))),t.xp6(2),t.Oqu(t.lcZ(7,39,"imageUrl")),t.xp6(3),t.Q6J("@animate",t.VKq(61,p,t.DdM(60,Tt))),t.xp6(2),t.Oqu(t.lcZ(12,41,"description")),t.xp6(4),t.Oqu(a.displayErrorMessages.desc),t.xp6(1),t.Q6J("@animate",t.VKq(64,p,t.DdM(63,Lt))),t.xp6(2),t.Oqu(t.lcZ(19,43,"name")),t.xp6(4),t.Oqu(a.displayErrorMessages.name),t.xp6(1),t.Q6J("@animate",t.VKq(67,p,t.DdM(66,At))),t.xp6(2),t.Oqu(t.lcZ(26,45,"price")),t.xp6(6),t.Oqu(a.displayErrorMessages.price),t.xp6(1),t.Q6J("@animate",t.VKq(70,p,t.DdM(69,St))),t.xp6(2),t.Oqu(t.lcZ(35,47,"fromDate")),t.xp6(2),t.Q6J("matDatepicker",o)("max",null==(i=a.addEditProductForm.get("toDate"))?null:i.value),t.xp6(2),t.Oqu(a.displayErrorMessages.fromDate),t.xp6(1),t.Q6J("for",o),t.xp6(3),t.Q6J("@animate",t.VKq(73,p,t.DdM(72,Ut))),t.xp6(2),t.Oqu(t.lcZ(45,49,"toDate")),t.xp6(2),t.Q6J("matDatepicker",n)("min",null==(u=a.addEditProductForm.get("fromDate"))?null:u.value),t.xp6(2),t.Oqu(a.displayErrorMessages.toDate),t.xp6(1),t.Q6J("for",n),t.xp6(3),t.Q6J("@animate",t.VKq(76,p,t.DdM(75,qt))),t.xp6(2),t.Oqu(t.lcZ(55,51,"discountPercentage")),t.xp6(6),t.Oqu(a.displayErrorMessages.discountPercentage),t.xp6(2),t.Q6J("@animate",t.VKq(79,p,t.DdM(78,Mt)))("matType",a.buttonTypes.raised)("color",a.buttonColors.warn)("text",t.lcZ(63,53,"cancel")),t.xp6(2),t.Q6J("@animate",t.VKq(82,p,t.DdM(81,Et)))("disabled",a.addEditProductForm.invalid||!a.formChanges)("isLoading",a.submitProcess())("text",t.lcZ(65,55,a.editMode()?"update":"save"))("matType",a.buttonTypes.raised)("color",a.buttonColors.primary)}}function wt(e,s){1&e&&(t.TgZ(0,"div",27)(1,"div",28),t._UZ(2,"div")(3,"div")(4,"div")(5,"div")(6,"div")(7,"div")(8,"div")(9,"div")(10,"div")(11,"div")(12,"div")(13,"div"),t.qZA()())}const Jt=function(e){return{value:e}};let U=(()=>{class e extends xt.S{constructor(o,n,a,i,u){super(),this._fb=o,this._router=n,this._route=a,this._productsService=i,this._destroyRef=u,this.addEditProductForm=this._fb.group({imageUrl:[""],name:["",[c.kI.required]],price:[0,[c.kI.required,c.kI.min(1)]],desc:[""],fromDate:[new Date,c.kI.required],toDate:[new Date,c.kI.required],discountPercentage:[0]}),this.imageUrl=(0,x.O4)(this.addEditProductForm.get("imageUrl")?.valueChanges.pipe((0,V.U)(d=>d||"")),{initialValue:""}),this.prodId=(0,t.tdS)(null),this.editMode=(0,t.Flj)(()=>!!this.prodId()),this.dataLoaded=(0,t.tdS)(!1),this.submitProcess=(0,t.tdS)(!1),this.buttonTypes=P.qh,this.buttonColors=P.Tt,this.displayErrorMessages={},this._genericValidator=new pt.f(mt),this._cashedFormValues=this.addEditProductForm.getRawValue(),this.onSubmit=()=>{const d={data:{id:this.prodId(),...this.addEditProductForm.value,price:this.addEditProductForm.value?.price+"$",discountPercentage:this.addEditProductForm.value?.discountPercentage+"%"}};this.submitProcess.set(!0),this.editMode()?this._updateHandler(d):this._createHandler(d)},this._createHandler=d=>{delete d.data.id,this._productsService.createNewProduct({...d}).pipe((0,m.b)(()=>{this._cashedFormValues=this.addEditProductForm.getRawValue()}),(0,T.b)(500),(0,v.w)(()=>(0,C.D)(this._router.navigate(["/dashboard/products"]))),(0,N.x)(()=>this.submitProcess.set(!1)),(0,x.sL)(this._destroyRef)).subscribe()},this._updateHandler=d=>{this._productsService.updateProduct({...d}).pipe((0,m.b)(()=>{this._cashedFormValues=this.addEditProductForm.getRawValue()}),(0,T.b)(500),(0,v.w)(()=>(0,C.D)(this._router.navigate(["/dashboard/products"]))),(0,N.x)(()=>this.submitProcess.set(!1)),(0,x.sL)(this._destroyRef)).subscribe()},this._paseProduct=()=>{this._route.paramMap.pipe((0,V.U)(d=>{const h=d.get("id");return this.prodId.set(h),h}),(0,J.h)(Boolean),(0,v.w)(d=>this._productsService.getProduct(Number(d))),(0,m.b)(d=>{this.addEditProductForm.patchValue({...d?.data?.attributes,price:Number((d?.data.attributes?.price||"0").replace(/[$]/g,"")),discountPercentage:Number((d?.data.attributes?.discountPercentage||"0").replace(/[%]/g,""))}),this.dataLoaded.set(!0),this._cashedFormValues=this.addEditProductForm.getRawValue()}),(0,x.sL)(this._destroyRef)).subscribe()}}get formChanges(){return!(0,ft.i3)(this.addEditProductForm.getRawValue(),this._cashedFormValues)}ngOnInit(){this._paseProduct()}ngAfterViewInit(){const o=this.formInputElements.map(n=>(0,gt.R)(n.nativeElement,"blur"));(0,ht.T)(this.addEditProductForm.valueChanges,...o).pipe((0,m.b)(()=>{this.displayErrorMessages=this._genericValidator.processMessages(this.addEditProductForm)}),(0,x.sL)(this._destroyRef)).subscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.qu),t.Y36(g.F0),t.Y36(g.gz),t.Y36(F),t.Y36(t.ktI))},e.\u0275cmp=t.Xpm({type:e,selectors:[["create-edit-product"]],viewQuery:function(o,n){if(1&o&&t.Gf(c.u,5,t.SBq),2&o){let a;t.iGM(a=t.CRH())&&(n.formInputElements=a)}},features:[t.qOj],decls:7,vars:8,consts:[[1,"w-full","h-full","flex","flex-col","justify-center","items-stretch",3,"pageTitle"],[1,"h-32","bg-slate-200"],[1,"flex","justify-center","items-start"],["class","w-11/12 h-full grid sm:grid-cols-2 grid-cols-1 sm:gap-3 gap-2 content-start p-0 m-0 -mt-24 pb-10",3,"formGroup",4,"ngIf","ngIfElse"],["loader",""],[1,"w-11/12","h-full","grid","sm:grid-cols-2","grid-cols-1","sm:gap-3","gap-2","content-start","p-0","m-0","-mt-24","pb-10",3,"formGroup"],[1,"flex","flex-col","justify-center","items-center","gap-2"],["width","200","height","200","loading","lazy","class","max-h-[200px] rounded-xl border-2 border-gray-200 shadow-md hover:scale-110 place-self-center",3,"ngSrc",4,"ngIf"],["ngSrc","assets/images/istockphoto.jpg","width","200","height","200","loading","lazy","class","rounded-xl border-2 border-gray-200 shadow-md hover:scale-110 place-self-center",4,"ngIf"],["appearance","fill",1,"w-full"],["formControlName","imageUrl","matInput",""],["appearance","fill"],["formControlName","desc","matInput","","rows","6"],["formControlName","name","matInput",""],["formControlName","price","matInput","","type","number"],["matSuffix",""],["formControlName","fromDate","matInput","",3,"matDatepicker","max"],["matIconSuffix","",3,"for"],["fromDate",""],["formControlName","toDate","matInput","",3,"matDatepicker","min"],["toDate",""],["formControlName","discountPercentage","matInput","","type","number"],[1,"flex","justify-center","items-center","gap-3"],["routerLink","/dashboard/products","btnClass","sm:w-40",3,"matType","color","text"],["btnClass","sm:w-40",3,"disabled","isLoading","text","matType","color","clicked"],["width","200","height","200","loading","lazy",1,"max-h-[200px]","rounded-xl","border-2","border-gray-200","shadow-md","hover:scale-110","place-self-center",3,"ngSrc"],["ngSrc","assets/images/istockphoto.jpg","width","200","height","200","loading","lazy",1,"rounded-xl","border-2","border-gray-200","shadow-md","hover:scale-110","place-self-center"],[1,"p-0","h-auto","min-h-[50vh]","w-full","flex","justify-center","items-center"],[1,"lds-spinner"]],template:function(o,n){if(1&o&&(t.TgZ(0,"page-component",0),t.ALo(1,"translate"),t._UZ(2,"div",1),t.TgZ(3,"div",2),t.YNc(4,Dt,66,84,"form",3),t.qZA()(),t.YNc(5,wt,14,0,"ng-template",null,4,t.W1O)),2&o){const a=t.MAs(6);let i;t.Q6J("@animateStagger",t.VKq(6,Jt,n.editMode()?"150":"50"))("pageTitle",n.editMode()?null==(i=n.addEditProductForm.get("name"))?null:i.value:t.lcZ(1,4,"newProd")),t.xp6(4),t.Q6J("ngIf",!n.editMode()||n.editMode()&&n.dataLoaded())("ngIfElse",a)}},dependencies:[f.O5,g.rH,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.sg,c.u,S.Mq,S.hl,S.nW,b.KE,b.hX,b.TO,b.R9,vt.Nt,Zt.Hw,f.Zd,j.r,O.C,_.X$],data:{animation:[E.F]}}),e})();var z=r(1157);const Ft=[{path:"",component:Q},{path:"create",component:U,canDeactivate:[z.v]},{path:"edit/:id",component:U,canDeactivate:[z.v]}];let It=(()=>{class e{}return e.Components=[Q,U],e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(Ft),g.Bz]}),e})();var jt=r(9087),Ot=r(7479);let Qt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.ez,It,jt.m,I.U,Ot.Q]}),e})()}}]);