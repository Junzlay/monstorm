"use strict";(self["webpackChunkmonstorm_fe"]=self["webpackChunkmonstorm_fe"]||[]).push([[351],{4351:(e,l,t)=>{t.r(l),t.d(l,{default:()=>X});t(71);var a=t(3673),o=t(2323),n=t(1959),s=t(2301),i=t(3774),u=t(8751),r=t(5616),d=t(2841),c=t(5162),p=t(2635),m=t(3617),w=t(9582),g=t(5225),b=t(8272),f=t(7946);const v=(0,a.Uk)("Filter by Date Range "),k=(0,a.Uk)(" List View "),_=(0,a.Uk)("Visible Columns"),y={class:"text-grey-8"},D={class:"text-grey-8"},W={setup(e){g.Z.addLocale(f);const l=(0,n.iH)(!0),t=(0,n.iH)(!1),W=(0,n.iH)(!1),q=(0,n.iH)(["customer","product","quantity","type","pickup","delivery","actions"]),x=new g.Z("en-US"),h=[{name:"customer",label:"Customer",align:"left",field:e=>e.booking.user.name,format:e=>`${e}`,sortable:!0,icon:"o_person"},{name:"product",label:"Product",align:"left",field:e=>e.product.product_name,format:e=>`${e}`,sortable:!0,icon:"o_local_drink"},{name:"quantity",align:"center",label:"Quantity",field:e=>e.booking.quantity+" item(s)",sortable:!0,icon:"money"},{name:"type",align:"center",field:e=>e.booking.booking_type,label:"Type",sortable:!0,icon:"lock_open"},{icon:"lock_open",name:"delivery",sortable:!0,align:"center",label:"Delivery Date",field:e=>"Today"},{name:"pickup",icon:"lock_open",align:"center",label:"Pickup Date",field:e=>e.booking.pickup_date?x.format(new Date(e.booking.pickup_date)-6e4):""},{name:"date",align:"center",label:"Issued Date",icon:"event",field:e=>U(e.created_at,"MMMM DD, YYYY")},{name:"actions",align:"right",label:"Manage Transaction",icon:"o_settings"}],Z=((0,w.tv)(),(0,n.iH)([1]),(0,n.iH)(!1),(0,n.iH)(null),(0,m.oR)()),{formatDate:U}=r.ZP,Y=(0,n.iH)(""),M=((0,n.qj)(JSON.parse(localStorage.getItem("user"))),(0,n.iH)(!0),(0,n.iH)(!0)),S=(0,a.f3)("getStatus"),Q=(0,a.f3)("pusher"),T=((0,a.f3)("emitter"),(0,n.iH)(!1)),V=((0,n.iH)([]),(0,n.iH)([{name:"All",status:10},{name:"Delivering",status:3},{name:"Pending",status:0},{name:"Ready to pick up",status:6},{name:"Processing",status:1},{name:"Not Approved",status:2},{name:"Done",status:5}])),j=(0,n.iH)(V.value[0]);Z.dispatch("getTodayTransaction");const H=(0,a.Fl)((()=>10!==j.value.status||4==j.value.status||5==j.value.status?Z.getters.todayTransactions.filter((e=>e.booking.status==j.value.status)):Z.getters.todayTransactions)),z=((0,a.Fl)((()=>Z.getters.todayTransactions)),(0,a.Fl)((()=>10!==j.value.status||4==j.value.status||5==j.value.status?Z.getters.todayTransactions.filter((e=>e.booking.status==j.value.status)):Z.getters.todayTransactions))),C=e=>{if(!e||!e.includes("/"))return e;const[l,t,a]=e.split("/");return new Date(`${t}/${a}/${l}`)},$=(0,n.iH)(null),P=(0,n.iH)(null),F=(0,a.Fl)((()=>{j.value.status;let e=C($.value),l=C(P.value);return z.value.filter((t=>{const a=new Date(t.created_at);return e&&l?e<=a&&a<=l:e&&!l?e<=a:!(!e&&l)||a<=l}))})),I=Q.subscribe("monstorm-notify-new-booking");I.bind("Admin",(function(e){Z.dispatch("getTodayTransaction")})),(0,a.bv)((()=>{"complete"===document.readyState?M.value=!1:document.addEventListener("readystatechange",(function(){"complete"===document.readyState&&(M.value=!1)}))}));const L=(0,a.f3)("temitter"),R=async(e,l)=>{L.emit("viewTransaction",l)},A=(e,l,t)=>{let a=void 0!==l?l(e,t):e;return a=void 0===a||null===a?"":String(a),a=a.split('"').join('""'),`"${a}"`},B=()=>{const e=[h.map((e=>A(e.label)))].concat(H.value.map((e=>h.map((l=>A("function"===typeof l.field?l.field(e):e[void 0===l.field?l.name:l.field],l.format,e))).join(",")))).join("\r\n"),l=(0,d.Z)("transaction.csv",e,"text/csv");!0!==l&&$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})};return(e,r)=>{const d=(0,a.up)("q-select"),m=(0,a.up)("q-toolbar-title"),w=(0,a.up)("q-tooltip"),g=(0,a.up)("q-btn"),f=(0,a.up)("q-card"),x=(0,a.up)("q-dialog"),Z=(0,a.up)("q-toolbar"),Q=(0,a.up)("q-page-sticky"),H=(0,a.up)("q-separator"),z=(0,a.up)("q-icon"),C=(0,a.up)("q-th"),I=(0,a.up)("q-input"),A=(0,a.up)("q-space"),E=(0,a.up)("q-item-label"),K=(0,a.up)("q-badge"),N=(0,a.up)("q-item-section"),G=(0,a.up)("q-td"),J=(0,a.up)("q-chip"),O=(0,a.up)("q-item"),X=(0,a.up)("q-list"),ee=(0,a.up)("q-table"),le=(0,a.up)("q-page-scroller"),te=(0,a.up)("q-page"),ae=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)(te,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c.Z),(0,a.Wm)(b.Z),(0,a.Wm)(Q,{expand:"",position:"top",class:"bg-white",style:(0,o.j5)(e.$q.screen.xs?"z-index:1;height:65px; margin-left:15px;margin-right:15px;border-bottom:1px solid #DDDDDD;padding-bottom:15px":"z-index:1;height:65px; margin-left:40px;margin-right:40px;border-bottom:1px solid #DDDDDD;padding-bottom:15px")},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{class:"text-grey-8 bg-white",style:{"margin-top":"5px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:j.value,"onUpdate:modelValue":r[0]||(r[0]=e=>j.value=e),filled:"","options-dense":"",dense:"","bg-color":"indigo-1","option-label":e=>e.name,options:V.value,style:{width:"200px"},label:"Filter by Status"},null,8,["modelValue","option-label","options"])])),_:1}),(0,a.Wm)(g,{flat:"",round:"",icon:"date_range",class:"lt-sm",onClick:r[1]||(r[1]=e=>t.value=!0)},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[v])),_:1})])),_:1}),(0,a.Wm)(s.Z,{class:"gt-xs",startDate:$.value,"onUpdate:startDate":r[2]||(r[2]=e=>$.value=e),endDate:P.value,"onUpdate:endDate":r[3]||(r[3]=e=>P.value=e)},null,8,["startDate","endDate"]),(0,a.Wm)(x,{modelValue:t.value,"onUpdate:modelValue":r[6]||(r[6]=e=>t.value=e),position:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{style:{width:"220px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(s.Z,{startDate:$.value,"onUpdate:startDate":r[4]||(r[4]=e=>$.value=e),endDate:P.value,"onUpdate:endDate":r[5]||(r[5]=e=>P.value=e)},null,8,["startDate","endDate"])])),_:1})])),_:1},8,["modelValue"]),l.value?((0,a.wg)(),(0,a.j4)(g,{key:0,onClick:r[7]||(r[7]=e=>l.value=!1),flat:"",round:"",dense:"",icon:"o_view_list"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[k])),_:1})])),_:1})):((0,a.wg)(),(0,a.j4)(g,{key:1,onClick:r[8]||(r[8]=e=>l.value=!0),flat:"",round:"",dense:"",icon:"o_table_view"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$q.screen.sm||e.$q.screen.xs?"Grid View ":"Table View "),1)])),_:1})])),_:1}))])),_:1})])),_:1},8,["style"]),((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(5,(e=>(0,a.Wm)(H,{spaced:"",class:"bg-transparent",key:e}))),64)),M.value?((0,a.wg)(),(0,a.j4)((0,n.SU)(p.Z),{key:0})):(0,a.kq)("",!0),l.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(i.Z,{key:1,data:(0,n.SU)(F),class:"q-mt-lg"},null,8,["data"])),!M.value&&l.value?((0,a.wg)(),(0,a.j4)(ee,{key:2,flat:"",class:"q-pb-lg",grid:e.$q.screen.sm||e.$q.screen.xs,"virtual-scroll":"",style:{height:"100%",background:"white",padding:"0px"},title:"Transactions",rows:(0,n.SU)(F),columns:h,"row-key":"id",filter:Y.value,onRowClick:R,loading:T.value,"visible-columns":q.value},{"header-cell":(0,a.w5)((e=>[(0,a.Wm)(C,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{name:e.col.icon,size:"1.5em"},null,8,["name"]),(0,a.Uk)(" "+(0,o.zw)(e.col.label),1)])),_:2},1032,["props"])])),top:(0,a.w5)((l=>[(0,a.Wm)(I,{borderless:"",dense:"",debounce:"300",modelValue:Y.value,"onUpdate:modelValue":r[9]||(r[9]=e=>Y.value=e),placeholder:"Search"},{append:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"search"})])),_:1},8,["modelValue"]),(0,a.Wm)(A),(0,a.Wm)(g,{flat:"",round:"",icon:"o_view_column",class:"lt-sm text-grey-9",onClick:r[10]||(r[10]=e=>W.value=!0)},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[_])),_:1})])),_:1}),(0,a.Wm)(x,{modelValue:W.value,"onUpdate:modelValue":r[12]||(r[12]=e=>W.value=e),position:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{style:{width:"220px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:q.value,"onUpdate:modelValue":r[11]||(r[11]=e=>q.value=e),multiple:"",filled:"",dense:"","options-dense":"","display-value":e.$q.lang.table.columns,"emit-value":"","map-options":"",options:h,"option-value":"name","options-cover":"",style:{"min-width":"150px"},"bg-color":"indigo-1"},null,8,["modelValue","display-value"])])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(d,{class:"gt-xs",modelValue:q.value,"onUpdate:modelValue":r[13]||(r[13]=e=>q.value=e),multiple:"",borderless:"",dense:"","options-dense":"","display-value":e.$q.lang.table.columns,"emit-value":"","map-options":"",options:h,"option-value":"name","options-cover":"",style:{}},null,8,["modelValue","display-value"]),(0,a.Wm)(g,{class:"q-ml-xs",color:"primary","icon-right":"archive",label:e.$q.screen.xs?"":"Export","no-caps":"",size:"sm",onClick:B},null,8,["label"]),e.$q.screen.xs?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(g,{key:0,flat:"",round:"",dense:"",icon:l.inFullscreen?"fullscreen_exit":"fullscreen",onClick:l.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"]))])),"body-cell-product":(0,a.w5)((e=>[(0,a.Wm)(G,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(N,null,{default:(0,a.w5)((()=>[(0,a.Wm)(E,{class:"text-dark"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.row.product.product_name),1)])),_:2},1024),(0,a.Wm)(E,{"text-caption":""},{default:(0,a.w5)((()=>[(0,a.Wm)(K,{color:(0,n.SU)(S)(e.row.booking.status,"color"),label:(0,n.SU)(S)(e.row.booking.status,"label")},null,8,["color","label"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"])])),"body-cell-type":(0,a.w5)((e=>[(0,a.Wm)(G,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{class:"text-dark"},{default:(0,a.w5)((()=>["Free Delivery"===e.row.booking.booking_type?((0,a.wg)(),(0,a.j4)(z,{key:0,name:"directions_car",size:"20px"})):((0,a.wg)(),(0,a.j4)(z,{key:1,name:"hail",size:"20px"})),(0,a.Uk)((0,o.zw)(e.row.booking.booking_type),1)])),_:2},1024)])),_:2},1032,["props"])])),"body-cell-delivery":(0,a.w5)((e=>[(0,a.Wm)(G,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(N,null,{default:(0,a.w5)((()=>[(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.row.booking.delivery_date?(0,n.SU)(U)(e.row.booking.delivery_date,"MMMM DD, YYYY"):""),1)])),_:2},1024),(0,a.Wm)(E,{caption:""},{default:(0,a.w5)((()=>[(0,a._)("div",y,(0,o.zw)((0,n.SU)(U)(e.row.booking.delivery_date,"MMMM DD, YYYY")==(0,n.SU)(U)(new Date,"MMMM DD, YYYY")?"Today":""),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"])])),"body-cell-pickup":(0,a.w5)((e=>[(0,a.Wm)(G,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(N,null,{default:(0,a.w5)((()=>[(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.row.booking.pickup_date?(0,n.SU)(U)(e.row.booking.pickup_date,"MMMM DD, YYYY"):""),1)])),_:2},1024),(0,a.Wm)(E,{caption:""},{default:(0,a.w5)((()=>[(0,a._)("div",D,(0,o.zw)((0,n.SU)(U)(e.row.booking.pickup_date,"MMMM DD, YYYY")==(0,n.SU)(U)(new Date,"MMMM DD, YYYY")?"Today":""),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"])])),"body-cell-actions":(0,a.w5)((e=>[(0,a.Wm)(G,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(u.Z,{data:e.row},null,8,["data"])])),_:2},1032,["props"])])),item:(0,a.w5)((e=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,o.j5)(e.selected?"transform: scale(0.95);":"")},[(0,a.wy)(((0,a.wg)(),(0,a.j4)(f,{clickable:"",style:{cursor:"pointer"},class:(0,o.C_)(e.selected?"bg-grey-2":""),onClick:l=>(0,n.SU)(L).emit("viewTransaction",e.row)},{default:(0,a.w5)((()=>[(0,a.Wm)(X,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(l=>((0,a.wg)(),(0,a.j4)(O,{key:l.name},{default:(0,a.w5)((()=>[(0,a.Wm)(N,null,{default:(0,a.w5)((()=>[(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(l.label),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(N,{side:""},{default:(0,a.w5)((()=>["Product"===l.name?((0,a.wg)(),(0,a.j4)(J,{key:0,color:e.row.carbs>24?"green":"red","text-color":"white",dense:"",size:"sm",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(l.value),1)])),_:2},1032,["color"])):"actions"===l.name?((0,a.wg)(),(0,a.j4)(G,{key:1},{default:(0,a.w5)((()=>[(0,a.Wm)(u.Z,{data:e.row},null,8,["data"])])),_:2},1024)):((0,a.wg)(),(0,a.j4)(E,{key:2,class:(0,o.C_)(l.classes?l.classes:"")},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(l.value),1)])),_:2},1032,["class"])),"product"===l.name?((0,a.wg)(),(0,a.j4)(E,{key:3,"text-caption":""},{default:(0,a.w5)((()=>[(0,a.Wm)(K,{color:(0,n.SU)(S)(e.row.booking.status,"color"),label:(0,n.SU)(S)(e.row.booking.status,"label")},null,8,["color","label"])])),_:2},1024)):(0,a.kq)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class","onClick"])),[[ae]])],4)])),_:1},8,["grid","rows","filter","loading","visible-columns"])):(0,a.kq)("",!0),(0,a.Wm)(le,{position:"bottom-right","scroll-offset":150,offset:[18,80]},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{fab:"",icon:"keyboard_arrow_up",class:"shadow-5",color:"blue"})])),_:1}),(0,a.Wm)(le,{reverse:"",position:"bottom-right","scroll-offset":25,offset:[18,18]},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{fab:"",icon:"keyboard_arrow_down",class:"shadow-5",color:"blue"})])),_:1})])),_:1})}}};var q=t(4379),x=t(4264),h=t(9570),Z=t(2165),U=t(3747),Y=t(3314),M=t(8870),S=t(6778),Q=t(151),T=t(1598),V=t(3812),j=t(5869),H=t(7678),z=t(2414),C=t(4554),$=t(4842),P=t(2025),F=t(3884),I=t(2035),L=t(2350),R=t(9721),A=t(7011),B=t(3414),E=t(7030),K=t(4710),N=t(6489),G=t(7518),J=t.n(G);const O=W,X=O;J()(W,"components",{QPage:q.Z,QPageSticky:x.Z,QToolbar:h.Z,QBtn:Z.Z,QToolbarTitle:U.Z,QSelect:Y.Z,QTooltip:M.Z,QDialog:S.Z,QCard:Q.Z,QLinearProgress:T.Z,QHeader:V.Z,QSeparator:j.Z,QTable:H.Z,QTh:z.Z,QIcon:C.Z,QInput:$.Z,QSpace:P.Z,QTd:F.Z,QItemSection:I.Z,QItemLabel:L.Z,QBadge:R.Z,QList:A.Z,QItem:B.Z,QChip:E.Z,QPageScroller:K.Z}),J()(W,"directives",{Ripple:N.Z})}}]);