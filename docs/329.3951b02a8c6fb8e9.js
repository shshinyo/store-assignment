"use strict";(self.webpackChunkstore_assignment=self.webpackChunkstore_assignment||[]).push([[329],{5329:(jt,U,r)=>{r.r(U),r.d(U,{ProductsModule:()=>Mt});var x=r(4755),h=r(2480),E=r(394),Z=r(6223),z=r(5588);class F extends z.X{constructor(s){super(s),s&&Object.keys(s).length&&Object.assign(this,s)}}var C=r(2076),w=r(5698),M=r(9300),K=r(4351),v=r(3900),_=r(8372),u=r(8505),g=r(5855),L=r(2618),t=r(2223),l=r(9401),R=r(6602),B=r(2602),y=r(3081),H=r(2018);let D=(()=>{class o{constructor(e,a,d){this._connectionService=e,this._translateService=a,this._toasterService=d,this.endpoints=new R.A,this.allProducts$=this._connectionService.get(this.endpoints.products.getAllProducts),this.getProduct=i=>this._connectionService.get(this.endpoints.products.getProduct+i),this.deleteProduct=i=>this._connectionService.delete(this.endpoints.products.deleteProduct+i).pipe((0,u.b)(()=>this._toasterService.success(this._translateService.instant("deleteSuccess")))),this.createNewProduct=i=>this._connectionService.post(this.endpoints.products.addNewProduct,i).pipe((0,u.b)(()=>this._toasterService.success(this._translateService.instant("prodCreatedSuccess")))),this.updateProduct=i=>this._connectionService.put(this.endpoints.products.updateProduct+i?.data.id,i).pipe((0,u.b)(()=>this._toasterService.success(this._translateService.instant("prodUpdateSuccess"))))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(B.M),t.LFG(y.sK),t.LFG(H._W))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var $=r(3785),G=r(3276),W=r(6709),j=r(6782),J=r(846),X=r(1954),q=r(5965);function k(o,s){1&o&&(t.TgZ(0,"th",12),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.TgZ(3,"th",12),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"th",12),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"th",12),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"th",12),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"th",12),t._uU(16),t.ALo(17,"translate"),t.qZA(),t._UZ(18,"th",12)),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,6,"image")," "),t.xp6(3),t.hij(" ",t.lcZ(5,8,"name")," "),t.xp6(3),t.hij(" ",t.lcZ(8,10,"price")," "),t.xp6(3),t.hij(" ",t.lcZ(11,12,"description")," "),t.xp6(3),t.hij(" ",t.lcZ(14,14,"discountPercentage")," "),t.xp6(3),t.hij(" ",t.lcZ(17,16,"createdAt")," "))}const tt=function(o){return["/dashboard/products/edit",o]};function et(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td",13),t._UZ(1,"img",14),t.qZA(),t.TgZ(2,"td",15),t._uU(3),t.qZA(),t.TgZ(4,"td",13),t._uU(5),t.qZA(),t.TgZ(6,"td",13),t._uU(7),t.qZA(),t.TgZ(8,"td",13),t._uU(9),t.qZA(),t.TgZ(10,"td",13),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td",16),t.NdJ("click",function(d){return d.stopPropagation()}),t.TgZ(14,"div",17),t._UZ(15,"app-button",18),t.ALo(16,"translate"),t.TgZ(17,"app-button",19),t.NdJ("clicked",function(){const i=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.onDeleteProduct(i))}),t.ALo(18,"translate"),t.qZA()()()}if(2&o){const e=s.$implicit,a=t.oxw();let d,i,m,n,f;t.xp6(1),t.Q6J("ngSrc",(null==e||null==e.attributes?null:e.attributes.imageUrl)||"assets/images/istockphoto.jpg"),t.xp6(2),t.hij(" ",null!==(d=null==e||null==e.attributes?null:e.attributes.name)&&void 0!==d?d:"\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640"," "),t.xp6(2),t.hij(" ",null!==(i=null==e||null==e.attributes?null:e.attributes.price)&&void 0!==i?i:"\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640"," "),t.xp6(2),t.hij(" ",null!==(m=null==e||null==e.attributes?null:e.attributes.desc)&&void 0!==m?m:"\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640"," "),t.xp6(2),t.hij(" ",null!==(n=null==e||null==e.attributes?null:e.attributes.discountPercentage)&&void 0!==n?n:"\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640"," "),t.xp6(2),t.hij(" ",null!==(f=t.xi3(12,13,null==e||null==e.attributes?null:e.attributes.createdAt,"dd-MM-YYYY"))&&void 0!==f?f:"\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640"," "),t.xp6(4),t.Q6J("routerLink",t.VKq(20,tt,null==e?null:e.id))("matType",a.ButtonTypes.miniFap)("color",a.ButtonColors.primary)("toolTip",t.lcZ(16,16,"edit")),t.xp6(2),t.Q6J("color",a.ButtonColors.warn)("matType",a.ButtonTypes.miniFap)("toolTip",t.lcZ(18,18,"delete"))}}function ot(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"mat-paginator",22),t.NdJ("page",function(d){t.CHM(e);const i=t.oxw(2);return t.KtG(i.onPageChange(d))}),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("length",e.productListController.totalLength)("pageSize",e.productListController.size)("pageSizeOptions",e.productListController.pageSizeOptions)}}function rt(o,s){if(1&o&&(t.TgZ(0,"div",20),t.YNc(1,ot,1,3,"mat-paginator",21),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",!!e.productListController)}}function at(o,s){1&o&&(t._UZ(0,"no-data",23),t.ALo(1,"translate")),2&o&&t.Q6J("text",t.lcZ(1,1,"noData"))}const nt=function(){return{value:"100"}},st=function(){return{x:"-40px",delay:"150ms"}},I=function(o){return{value:"*",params:o}},it=function(){return{x:"40px",delay:"150ms"}};let V=(()=>{class o{constructor(e,a,d,i,m,n,f){this._fb=e,this._router=a,this._route=d,this._destroyRef=i,this._productsService=m,this._confirmService=n,this._translateService=f,this.search=this._fb.control(null),this.productListController=new F,this.ButtonTypes=Z.qh,this.ButtonColors=Z.Tt,this.onDeleteProduct=c=>{this._confirmService.Confirm(`${this._translateService.instant("from")+" "+this._translateService.instant("delete")} (${c.attributes?.name.split("").slice(0,40).join("")}...) ?`,this._translateService.instant("sure"),this._translateService.instant("delete")).pipe((0,w.q)(1),(0,M.h)(Boolean),(0,K.b)(()=>this._productsService.deleteProduct(c.id)),(0,v.w)(()=>this._getProducts())).subscribe()},this.onPageChange=c=>{(0,C.D)(this._router.navigate([],{queryParams:{index:c.pageIndex||null,size:c.pageSize||null},queryParamsHandling:"merge"})).pipe((0,w.q)(1)).subscribe()},this._searchChangeHandler=()=>{this.search.valueChanges.pipe((0,_.b)(500),(0,v.w)(c=>(0,C.D)(this._router.navigate([],{queryParams:{search:c||null},queryParamsHandling:"merge"}))),(0,g.sL)(this._destroyRef)).subscribe()},this._paramsChanges=()=>{this._route.queryParamMap.pipe((0,u.b)(c=>{const P={index:L.T.indexPage(c,"index"),size:L.T.indexSize(c,"size"),search:L.T.search(c,"search")};this.productListController=new F({...this.productListController,...P}),this.search.patchValue(P?.search)}),(0,v.w)(()=>this._getProducts()),(0,g.sL)(this._destroyRef)).subscribe()},this._getProducts=()=>{this.productListController.dataLoaded=!1;const{index:c,size:P,search:Y}=this.productListController;return this._productsService.allProducts$.pipe((0,u.b)(T=>{T?.data.length&&(this.productListController.list=(Y?T?.data.filter(Dt=>Dt?.attributes?.name?.toLowerCase().includes(Y?.toLowerCase())):T?.data)?.slice(c?c*P:0,c?c*P+10:P),this.productListController.totalLength=T?.meta?.pagination?.total),this.productListController.dataLoaded=!0}))}}ngOnInit(){this._paramsChanges(),this._searchChangeHandler()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.qu),t.Y36(h.F0),t.Y36(h.gz),t.Y36(t.ktI),t.Y36(D),t.Y36($.OX),t.Y36(y.sK))},o.\u0275cmp=t.Xpm({type:o,selectors:[["products-list"]],decls:18,vars:22,consts:[[1,"w-full","h-full","flex","flex-col","justify-center","items-stretch"],[1,"h-32","bg-blue-200"],[1,"flex","justify-center","items-start"],[1,"sm:w-11/12","w-full","flex","flex-col","justify-center","items-stretch","sm:gap-2","gap-1","-mt-24"],[1,"flex","flex-wrap","justify-between","items-center"],["outlineOption","2.5px solid #03a9f4",1,"sm:h-11","h-8",3,"formControl","placeholder"],["routerLink","/dashboard/products/create","icon","post_add","btnClass","bg-gray-600 outline-none text-white text-lg py-1 shadow-md",3,"matType","color","text"],[1,"table-scrollable","max-h-[77vh]","shadow-md","bg-white",3,"data","dataLoaded","colSpanCount"],["headers",""],["row",""],["pagination",""],["noData",""],[1,"sm:text-[14px]","text-xs","text-start"],[1,"sm:text-[15px]","text-xs","break-words"],["width","100","height","80","loading","lazy",1,"rounded-xl","border-2","border-gray-200","shadow-md","hover:scale-110",3,"ngSrc"],[1,"max-w-[300px]","sm:text-[14px]","leading-5","text-xs","break-words"],[3,"click"],[1,"h-full","w-auto","flex","justify-start","items-center","sm:gap-2","gap-[3px]"],["icon","edit_note","btnClass","bg-gray-600 text-white",3,"routerLink","matType","color","toolTip"],["icon","delete",3,"color","matType","toolTip","clicked"],[1,"h-auto","w-full","bg-white","flex","justify-end","items-center","px-2"],["panelClass","bg-transparent","class","w-1/2",3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],["panelClass","bg-transparent",1,"w-1/2",3,"length","pageSize","pageSizeOptions","page"],[3,"text"]],template:function(e,a){1&e&&(t.TgZ(0,"page-component",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"magic-search-input",5),t.ALo(6,"translate"),t._UZ(7,"app-button",6),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"app-table",7),t.YNc(10,k,19,18,"ng-template",null,8,t.W1O),t.YNc(12,et,19,22,"ng-template",null,9,t.W1O),t.YNc(14,rt,2,1,"ng-template",null,10,t.W1O),t.YNc(16,at,2,3,"ng-template",null,11,t.W1O),t.qZA()()()()),2&e&&(t.Q6J("@animateStagger",t.DdM(15,nt)),t.xp6(5),t.Q6J("@animate",t.VKq(17,I,t.DdM(16,st)))("formControl",a.search)("placeholder",t.lcZ(6,11,"search")+"..."),t.xp6(2),t.Q6J("@animate",t.VKq(20,I,t.DdM(19,it)))("matType",a.ButtonTypes.round_stroked)("color",a.ButtonColors.primary)("text",t.lcZ(8,13,"create")),t.xp6(2),t.Q6J("data",a.productListController.list)("dataLoaded",a.productListController.dataLoaded)("colSpanCount",6))},dependencies:[x.O5,h.rH,l.JJ,l.oH,G.NW,W.a,j.U,x.Zd,J.r,X.d,q.C,x.uU,y.X$],data:{animation:[E.F]}}),o})();var dt=r(4040);const ct={name:{required:"Name is required"},price:{required:"Price is required",min:"Price should be grater than 1$"},fromDate:{required:"From date is required"},toDate:{required:"To date is required"}};var lt=r(4968),ut=r(6451),S=r(4004),O=r(8746),pt=r(6775),mt=r(6373),b=r(9114),ht=r(8097),gt=r(430),ft=r(1368);const N=function(){return{y:"-40px",delay:"100ms"}},p=function(o){return{value:"*",params:o}};function xt(o,s){if(1&o&&t._UZ(0,"img",24),2&o){const e=t.oxw(2);t.Q6J("@animate",t.VKq(3,p,t.DdM(2,N)))("ngSrc",e.imageUrl()||"assets/images/istockphoto.jpg")}}function vt(o,s){1&o&&t._UZ(0,"img",25),2&o&&t.Q6J("@animate",t.VKq(2,p,t.DdM(1,N)))}const Pt=function(){return{y:"-40px",delay:"150ms"}},Zt=function(){return{y:"-40px",delay:"200ms"}},Ct=function(){return{y:"-40px",delay:"250ms"}},yt=function(){return{y:"-40px",delay:"300ms"}},bt=function(){return{y:"-40px",delay:"350ms"}},Tt=function(){return{y:"-40px",delay:"550ms"}},_t=function(){return{y:"-40px",delay:"600ms"}};function Lt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"form",5)(1,"div",6)(2,"div",7),t.YNc(3,xt,1,5,"img",8),t.YNc(4,vt,1,4,"img",9),t.TgZ(5,"div",10)(6,"span",11),t._uU(7),t.ALo(8,"number"),t.qZA(),t.TgZ(9,"span",12),t._uU(10),t.ALo(11,"translate"),t.qZA()()(),t.TgZ(12,"mat-form-field",13)(13,"mat-label"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t._UZ(16,"input",14),t.qZA()(),t.TgZ(17,"mat-form-field",15)(18,"mat-label"),t._uU(19),t.ALo(20,"translate"),t.qZA(),t._UZ(21,"textarea",16),t.TgZ(22,"mat-error"),t._uU(23),t.qZA()(),t.TgZ(24,"mat-form-field",15)(25,"mat-label"),t._uU(26),t.ALo(27,"translate"),t.qZA(),t._UZ(28,"input",17),t.TgZ(29,"mat-error"),t._uU(30),t.qZA()(),t.TgZ(31,"mat-form-field",15)(32,"mat-label"),t._uU(33),t.ALo(34,"translate"),t.qZA(),t._UZ(35,"input",18),t.TgZ(36,"mat-icon",19),t._uU(37,"$"),t.qZA(),t.TgZ(38,"mat-error"),t._uU(39),t.qZA()(),t.TgZ(40,"promotion-form-field",20)(41,"div",21),t._UZ(42,"app-button",22),t.ALo(43,"translate"),t.TgZ(44,"app-button",23),t.NdJ("clicked",function(){t.CHM(e);const d=t.oxw();return t.KtG(d.onSubmit())}),t.ALo(45,"translate"),t.qZA()()()()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.addEditProductForm),t.xp6(3),t.Q6J("ngIf",e.imageUrl()),t.xp6(1),t.Q6J("ngIf",!e.imageUrl()),t.xp6(1),t.Q6J("@animate",t.VKq(45,p,t.DdM(44,Pt))),t.xp6(2),t.Oqu(t.xi3(8,27,e.totalPriceAfterDesc(),"1.2-2")),t.xp6(3),t.Oqu(t.lcZ(11,30,"totalPrice")),t.xp6(2),t.Q6J("@animate",t.VKq(48,p,t.DdM(47,Zt))),t.xp6(2),t.Oqu(t.lcZ(15,32,"imageUrl")),t.xp6(3),t.Q6J("@animate",t.VKq(51,p,t.DdM(50,Ct))),t.xp6(2),t.Oqu(t.lcZ(20,34,"description")),t.xp6(4),t.Oqu(e.displayErrorMessages.desc),t.xp6(1),t.Q6J("@animate",t.VKq(54,p,t.DdM(53,yt))),t.xp6(2),t.Oqu(t.lcZ(27,36,"name")),t.xp6(4),t.Oqu(e.displayErrorMessages.name),t.xp6(1),t.Q6J("@animate",t.VKq(57,p,t.DdM(56,bt))),t.xp6(2),t.Oqu(t.lcZ(34,38,"price")),t.xp6(6),t.Oqu(e.displayErrorMessages.price),t.xp6(3),t.Q6J("@animate",t.VKq(60,p,t.DdM(59,Tt)))("matType",e.buttonTypes.raised)("color",e.buttonColors.warn)("text",t.lcZ(43,40,"cancel")),t.xp6(2),t.Q6J("@animate",t.VKq(63,p,t.DdM(62,_t)))("disabled",e.addEditProductForm.invalid||!e.formChanges)("isLoading",e.submitProcess())("text",t.lcZ(45,42,e.editMode()?"update":"save"))("matType",e.buttonTypes.raised)("color",e.buttonColors.primary)}}function St(o,s){1&o&&(t.TgZ(0,"div",26)(1,"div",27),t._UZ(2,"div")(3,"div")(4,"div")(5,"div")(6,"div")(7,"div")(8,"div")(9,"div")(10,"div")(11,"div")(12,"div")(13,"div"),t.qZA()())}const At=function(o){return{value:o}};let A=(()=>{class o extends mt.S{constructor(e,a,d,i,m){super(),this._fb=e,this._router=a,this._route=d,this._productsService=i,this._destroyRef=m,this.addEditProductForm=this._fb.group({imageUrl:[""],name:["",[l.kI.required]],price:[0,[l.kI.required,l.kI.min(1)]],desc:[""],promotion:[{fromDate:new Date,toDate:new Date,discountPercentage:0}]}),this.buttonTypes=Z.qh,this.buttonColors=Z.Tt,this.displayErrorMessages={},this.prodId=(0,t.tdS)(null),this.editMode=(0,t.Flj)(()=>!!this.prodId()),this.dataLoaded=(0,t.tdS)(!1),this.submitProcess=(0,t.tdS)(!1),this.imageUrl=(0,g.O4)(this.addEditProductForm.get("imageUrl")?.valueChanges.pipe((0,S.U)(n=>n||"")),{initialValue:""}),this.totalPriceAfterDesc=(0,g.O4)(this.addEditProductForm.valueChanges.pipe((0,S.U)(n=>(n.price||0)-(n?.promotion?.discountPercentage||0)/100*(n.price||0))),{initialValue:0}),this._genericValidator=new dt.f(ct),this._cashedFormValues=this.addEditProductForm.getRawValue(),this.onSubmit=()=>{const n={data:{id:this.prodId(),name:this.addEditProductForm.value?.name,imageUrl:this.addEditProductForm.value?.imageUrl,price:this.addEditProductForm.value?.price+"$",desc:this.addEditProductForm.value?.desc,fromDate:this.addEditProductForm.value.promotion?.fromDate,toDate:this.addEditProductForm.value.promotion?.toDate,discountPercentage:this.addEditProductForm.value.promotion?.discountPercentage+"%"}};this.submitProcess.set(!0),this.editMode()?this._updateHandler(n):this._createHandler(n)},this._createHandler=n=>{delete n.data.id,this._productsService.createNewProduct({...n}).pipe((0,u.b)(()=>{this._cashedFormValues=this.addEditProductForm.getRawValue()}),(0,_.b)(500),(0,v.w)(()=>(0,C.D)(this._router.navigate(["/dashboard/products"]))),(0,O.x)(()=>this.submitProcess.set(!1)),(0,g.sL)(this._destroyRef)).subscribe()},this._updateHandler=n=>{this._productsService.updateProduct({...n}).pipe((0,u.b)(()=>{this._cashedFormValues=this.addEditProductForm.getRawValue()}),(0,_.b)(500),(0,v.w)(()=>(0,C.D)(this._router.navigate(["/dashboard/products"]))),(0,O.x)(()=>this.submitProcess.set(!1)),(0,g.sL)(this._destroyRef)).subscribe()},this._paseProduct=()=>{this._route.paramMap.pipe((0,S.U)(n=>{const f=n.get("id");return this.prodId.set(f),f}),(0,M.h)(Boolean),(0,v.w)(n=>this._productsService.getProduct(Number(n))),(0,u.b)(n=>{this._patchFormData(n),this.dataLoaded.set(!0),this._cashedFormValues=this.addEditProductForm.getRawValue()}),(0,g.sL)(this._destroyRef)).subscribe()},this._patchFormData=n=>{this.addEditProductForm.patchValue({...n?.data?.attributes,price:Number((n?.data.attributes?.price||"0").replace(/[$]/g,"")),promotion:{fromDate:n?.data?.attributes?.fromDate,toDate:n?.data?.attributes?.toDate,discountPercentage:Number((n?.data.attributes?.discountPercentage||"0").replace(/[%]/g,""))}})}}get formChanges(){return!(0,pt.i3)(this.addEditProductForm.getRawValue(),this._cashedFormValues)}ngOnInit(){this._paseProduct()}ngAfterViewInit(){const e=this.formInputElements.map(a=>(0,lt.R)(a.nativeElement,"blur"));(0,ut.T)(this.addEditProductForm.valueChanges,...e).pipe((0,u.b)(()=>{this.displayErrorMessages=this._genericValidator.processMessages(this.addEditProductForm)}),(0,g.sL)(this._destroyRef)).subscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.qu),t.Y36(h.F0),t.Y36(h.gz),t.Y36(D),t.Y36(t.ktI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["create-edit-product"]],viewQuery:function(e,a){if(1&e&&t.Gf(l.u,5,t.SBq),2&e){let d;t.iGM(d=t.CRH())&&(a.formInputElements=d)}},features:[t.qOj],decls:7,vars:8,consts:[[1,"w-full","h-full","flex","flex-col","justify-center","items-stretch",3,"pageTitle"],[1,"h-32","bg-slate-200"],[1,"flex","justify-center","items-start"],["class","w-11/12 h-full grid sm:grid-cols-2 grid-cols-1 sm:gap-3 gap-2 content-start p-0 m-0 -mt-24 pb-10",3,"formGroup",4,"ngIf","ngIfElse"],["loader",""],[1,"w-11/12","h-full","grid","sm:grid-cols-2","grid-cols-1","sm:gap-3","gap-2","content-start","p-0","m-0","-mt-24","pb-10",3,"formGroup"],[1,"flex","flex-col","justify-center","items-center","gap-2"],[1,"flex","flex-wrap","justify-center","items-stretch","gap-2"],["width","200","height","200","loading","lazy","class","max-h-[200px] rounded-xl border-2 border-gray-200 shadow-md hover:scale-110 place-self-center",3,"ngSrc",4,"ngIf"],["ngSrc","assets/images/istockphoto.jpg","width","200","height","200","loading","lazy","class","rounded-xl border-2 border-gray-200 shadow-md hover:scale-110 place-self-center",4,"ngIf"],[1,"min-w-[200px]","flex","flex-col","justify-center","items-center","shadow-md","rounded-md","bg-white","border-2","border-slate-300","p-2"],[1,"font-semibold","text-2xl","truncate"],[1,"font-medium","text-xs"],["appearance","fill",1,"w-full"],["formControlName","imageUrl","matInput",""],["appearance","fill"],["formControlName","desc","matInput","","rows","6"],["formControlName","name","matInput",""],["formControlName","price","matInput","","type","number"],["matSuffix",""],["formControlName","promotion",1,"sm:col-span-2"],[1,"flex","justify-center","items-center","gap-3"],["routerLink","/dashboard/products","btnClass","sm:w-40",3,"matType","color","text"],["btnClass","sm:w-40",3,"disabled","isLoading","text","matType","color","clicked"],["width","200","height","200","loading","lazy",1,"max-h-[200px]","rounded-xl","border-2","border-gray-200","shadow-md","hover:scale-110","place-self-center",3,"ngSrc"],["ngSrc","assets/images/istockphoto.jpg","width","200","height","200","loading","lazy",1,"rounded-xl","border-2","border-gray-200","shadow-md","hover:scale-110","place-self-center"],[1,"p-0","h-auto","min-h-[50vh]","w-full","flex","justify-center","items-center"],[1,"lds-spinner"]],template:function(e,a){if(1&e&&(t.TgZ(0,"page-component",0),t.ALo(1,"translate"),t._UZ(2,"div",1),t.TgZ(3,"div",2),t.YNc(4,Lt,46,65,"form",3),t.qZA()(),t.YNc(5,St,14,0,"ng-template",null,4,t.W1O)),2&e){const d=t.MAs(6);let i;t.Q6J("@animateStagger",t.VKq(6,At,a.editMode()?"150":"50"))("pageTitle",a.editMode()?null==(i=a.addEditProductForm.get("name"))?null:i.value:t.lcZ(1,4,"newProd")),t.xp6(4),t.Q6J("ngIf",!a.editMode()||a.editMode()&&a.dataLoaded())("ngIfElse",d)}},dependencies:[x.O5,h.rH,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.sg,l.u,b.KE,b.hX,b.TO,b.R9,ht.Nt,gt.Hw,x.Zd,ft.P,J.r,q.C,x.JJ,y.X$],data:{animation:[E.F]}}),o})();var Q=r(1157);const Ut=[{path:"",component:V},{path:"create",component:A,canDeactivate:[Q.v]},{path:"edit/:id",component:A,canDeactivate:[Q.v]}];let Et=(()=>{class o{}return o.Components=[V,A],o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.Bz.forChild(Ut),h.Bz]}),o})();var Ft=r(3461),wt=r(7479);let Mt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[x.ez,Et,Ft.m,j.U,wt.Q]}),o})()}}]);