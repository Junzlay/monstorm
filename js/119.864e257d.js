"use strict";(self["webpackChunkmonstorm_fe"]=self["webpackChunkmonstorm_fe"]||[]).push([[119],{3119:(e,l,t)=>{t.r(l),t.d(l,{default:()=>O});t(71);var a=t(3673),o=t(2323),n=t(1959),s=t(2301),i=t(3774),u=t(5446),r=t(5616),d=t(2841),c=t(2635),p=t(3617),m=t(9582),w=t(5225),g=t(8272),b=t(7946);const f=(0,a.Uk)("Filter by Date Range "),v=(0,a.Uk)(" List View "),k=(0,a.Uk)("Visible Columns"),_={class:"text-grey-8"},y={class:"text-grey-8"},D={setup(e){w.Z.addLocale(b);const l=(0,n.iH)(!0),t=(0,n.iH)(!1),D=(0,n.iH)(!1),W=(0,n.iH)(["customer","product","quantity","type","pickup","delivery","actions"]),q=(new w.Z("en-US"),[{name:"product",label:"Product",align:"left",field:e=>e.product.product_name,format:e=>`${e}`,sortable:!0,icon:"o_local_drink"},{name:"quantity",align:"center",label:"Quantity",field:e=>e.booking.quantity+" item(s)",sortable:!0,icon:"money"},{name:"type",align:"center",field:e=>e.booking.booking_type,label:"Type",sortable:!0,icon:"lock_open"},{icon:"lock_open",name:"delivery",sortable:!0,align:"center",label:"Delivery Date",field:e=>h(e.booking.delivery_date,"MMMM DD, YYYY")},{name:"pickup",icon:"lock_open",align:"center",label:"Pickup Date",field:e=>h(e.booking.pickup_date,"MMMM DD, YYYY")},{name:"date",align:"center",label:"Issued Date",icon:"event",field:e=>h(e.created_at,"MMMM DD, YYYY")},{name:"actions",align:"right",label:"Transaction",icon:"o_settings"}]),x=((0,m.tv)(),(0,n.iH)([1]),(0,n.iH)(!1),(0,n.iH)(null),(0,p.oR)()),{formatDate:h}=r.ZP,U=(0,n.iH)(""),Y=(0,n.qj)(JSON.parse(localStorage.getItem("user"))),Z=((0,n.iH)(!0),(0,n.iH)(!0)),M=(0,a.f3)("getStatus"),S=(0,a.f3)("pusher"),Q=((0,a.f3)("emitter"),(0,n.iH)(!1)),V=((0,n.iH)([]),(0,n.iH)([{name:"All",status:10},{name:"Delivering",status:3},{name:"Pending",status:0},{name:"Ready to pick up",status:6},{name:"Processing",status:1},{name:"Not Approved",status:2},{name:"Done",status:5}])),j=(0,n.iH)(V.value[0]),T=S.subscribe("monstorm-notify-user-"+Y.id);T.bind("User",(function(e){x.dispatch("getTransactionByID",Y.id)})),x.dispatch("getTransactionByID",Y.id);const H=(0,a.Fl)((()=>10!==j.value.status||4==j.value.status||5==j.value.status?x.getters.userTransaction.filter((e=>e.booking.status==j.value.status)):x.getters.userTransaction)),z=(0,a.Fl)((()=>10!==j.value.status||4==j.value.status||5==j.value.status?x.getters.userTransaction.filter((e=>e.booking.status==j.value.status)):x.getters.userTransaction)),C=e=>{if(!e||!e.includes("/"))return e;const[l,t,a]=e.split("/");return new Date(`${t}/${a}/${l}`)},$=(0,n.iH)(null),P=(0,n.iH)(null),I=(0,a.Fl)((()=>{j.value.status;let e=C($.value),l=C(P.value);return z.value.filter((t=>{const a=new Date(t.created_at);return e&&l?e<=a&&a<=l:e&&!l?e<=a:!(!e&&l)||a<=l}))}));(0,a.bv)((()=>{"complete"===document.readyState?Z.value=!1:document.addEventListener("readystatechange",(function(){"complete"===document.readyState&&(Z.value=!1)}))}));const F=(0,a.f3)("temitter"),L=async(e,l)=>{F.emit("viewTransaction",l)},B=(e,l,t)=>{let a=void 0!==l?l(e,t):e;return a=void 0===a||null===a?"":String(a),a=a.split('"').join('""'),`"${a}"`},R=()=>{const e=[q.map((e=>B(e.label)))].concat(H.value.map((e=>q.map((l=>B("function"===typeof l.field?l.field(e):e[void 0===l.field?l.name:l.field],l.format,e))).join(",")))).join("\r\n"),l=(0,d.Z)("transaction.csv",e,"text/csv");!0!==l&&$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})};return(e,r)=>{const d=(0,a.up)("q-select"),p=(0,a.up)("q-toolbar-title"),m=(0,a.up)("q-tooltip"),w=(0,a.up)("q-btn"),b=(0,a.up)("q-card"),x=(0,a.up)("q-dialog"),Y=(0,a.up)("q-toolbar"),S=(0,a.up)("q-page-sticky"),T=(0,a.up)("q-separator"),H=(0,a.up)("q-icon"),z=(0,a.up)("q-th"),C=(0,a.up)("q-input"),B=(0,a.up)("q-space"),A=(0,a.up)("q-item-label"),E=(0,a.up)("q-badge"),K=(0,a.up)("q-item-section"),N=(0,a.up)("q-td"),G=(0,a.up)("q-chip"),J=(0,a.up)("q-item"),O=(0,a.up)("q-list"),X=(0,a.up)("q-table"),ee=(0,a.up)("q-page-scroller"),le=(0,a.up)("q-page"),te=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)(le,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g.Z),(0,a.Wm)(S,{expand:"",position:"top",class:"bg-white",style:(0,o.j5)(e.$q.screen.xs?"z-index:1;height:65px; margin-left:15px;margin-right:15px;border-bottom:1px solid #DDDDDD;padding-bottom:15px":"z-index:1;height:65px; margin-left:40px;margin-right:40px;border-bottom:1px solid #DDDDDD;padding-bottom:15px")},{default:(0,a.w5)((()=>[(0,a.Wm)(Y,{class:"text-grey-8 bg-white",style:{"margin-top":"5px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:j.value,"onUpdate:modelValue":r[0]||(r[0]=e=>j.value=e),filled:"","options-dense":"",dense:"","bg-color":"indigo-1","option-label":e=>e.name,options:V.value,style:{width:"200px"},label:"Filter by Status"},null,8,["modelValue","option-label","options"])])),_:1}),(0,a.Wm)(w,{flat:"",round:"",icon:"date_range",class:"lt-sm",onClick:r[1]||(r[1]=e=>t.value=!0)},{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[f])),_:1})])),_:1}),(0,a.Wm)(s.Z,{class:"gt-xs",startDate:$.value,"onUpdate:startDate":r[2]||(r[2]=e=>$.value=e),endDate:P.value,"onUpdate:endDate":r[3]||(r[3]=e=>P.value=e)},null,8,["startDate","endDate"]),(0,a.Wm)(x,{modelValue:t.value,"onUpdate:modelValue":r[6]||(r[6]=e=>t.value=e),position:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{style:{width:"220px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(s.Z,{startDate:$.value,"onUpdate:startDate":r[4]||(r[4]=e=>$.value=e),endDate:P.value,"onUpdate:endDate":r[5]||(r[5]=e=>P.value=e)},null,8,["startDate","endDate"])])),_:1})])),_:1},8,["modelValue"]),l.value?((0,a.wg)(),(0,a.j4)(w,{key:0,onClick:r[7]||(r[7]=e=>l.value=!1),flat:"",round:"",dense:"",icon:"o_view_list"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[v])),_:1})])),_:1})):((0,a.wg)(),(0,a.j4)(w,{key:1,onClick:r[8]||(r[8]=e=>l.value=!0),flat:"",round:"",dense:"",icon:"o_table_view"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$q.screen.sm||e.$q.screen.xs?"Grid View ":"Table View "),1)])),_:1})])),_:1}))])),_:1})])),_:1},8,["style"]),((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(5,(e=>(0,a.Wm)(T,{spaced:"",class:"bg-transparent",key:e}))),64)),Z.value?((0,a.wg)(),(0,a.j4)((0,n.SU)(c.Z),{key:0})):(0,a.kq)("",!0),l.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(i.Z,{key:1,data:(0,n.SU)(I),class:"q-mt-lg"},null,8,["data"])),!Z.value&&l.value?((0,a.wg)(),(0,a.j4)(X,{key:2,flat:"",class:"q-pb-lg",grid:e.$q.screen.sm||e.$q.screen.xs,"virtual-scroll":"",style:{height:"100%",background:"white",padding:"0px"},title:"Transactions",rows:(0,n.SU)(I),columns:q,"row-key":"id",filter:U.value,onRowClick:L,loading:Q.value,"visible-columns":W.value},{"header-cell":(0,a.w5)((e=>[(0,a.Wm)(z,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{name:e.col.icon,size:"1.5em"},null,8,["name"]),(0,a.Uk)(" "+(0,o.zw)(e.col.label),1)])),_:2},1032,["props"])])),top:(0,a.w5)((l=>[(0,a.Wm)(C,{borderless:"",dense:"",debounce:"300",modelValue:U.value,"onUpdate:modelValue":r[9]||(r[9]=e=>U.value=e),placeholder:"Search"},{append:(0,a.w5)((()=>[(0,a.Wm)(H,{name:"search"})])),_:1},8,["modelValue"]),(0,a.Wm)(B),(0,a.Wm)(w,{flat:"",round:"",icon:"o_view_column",class:"lt-sm text-grey-9",onClick:r[10]||(r[10]=e=>D.value=!0)},{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[k])),_:1})])),_:1}),(0,a.Wm)(x,{modelValue:D.value,"onUpdate:modelValue":r[12]||(r[12]=e=>D.value=e),position:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{style:{width:"220px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:W.value,"onUpdate:modelValue":r[11]||(r[11]=e=>W.value=e),multiple:"",filled:"",dense:"","options-dense":"","display-value":e.$q.lang.table.columns,"emit-value":"","map-options":"",options:q,"option-value":"name","options-cover":"",style:{"min-width":"150px"},"bg-color":"indigo-1"},null,8,["modelValue","display-value"])])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(d,{class:"gt-xs",modelValue:W.value,"onUpdate:modelValue":r[13]||(r[13]=e=>W.value=e),multiple:"",borderless:"",dense:"","options-dense":"","display-value":e.$q.lang.table.columns,"emit-value":"","map-options":"",options:q,"option-value":"name","options-cover":"",style:{}},null,8,["modelValue","display-value"]),(0,a.Wm)(w,{class:"q-ml-xs",color:"primary","icon-right":"archive",label:e.$q.screen.xs?"":"Export","no-caps":"",size:"sm",onClick:R},null,8,["label"]),e.$q.screen.xs?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(w,{key:0,flat:"",round:"",dense:"",icon:l.inFullscreen?"fullscreen_exit":"fullscreen",onClick:l.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"]))])),"body-cell-product":(0,a.w5)((e=>[(0,a.Wm)(N,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(A,{class:"text-dark"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.row.product.product_name),1)])),_:2},1024),(0,a.Wm)(A,{"text-caption":""},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{color:(0,n.SU)(M)(e.row.booking.status,"color"),label:(0,n.SU)(M)(e.row.booking.status,"label")},null,8,["color","label"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"])])),"body-cell-type":(0,a.w5)((e=>[(0,a.Wm)(N,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(A,{class:"text-dark"},{default:(0,a.w5)((()=>["Free Delivery"===e.row.booking.booking_type?((0,a.wg)(),(0,a.j4)(H,{key:0,name:"directions_car",size:"20px"})):((0,a.wg)(),(0,a.j4)(H,{key:1,name:"hail",size:"20px"})),(0,a.Uk)((0,o.zw)(e.row.booking.booking_type),1)])),_:2},1024)])),_:2},1032,["props"])])),"body-cell-delivery":(0,a.w5)((e=>[(0,a.Wm)(N,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.row.booking.delivery_date?(0,n.SU)(h)(e.row.booking.delivery_date,"MMMM DD, YYYY"):""),1)])),_:2},1024),(0,a.Wm)(A,{caption:""},{default:(0,a.w5)((()=>[(0,a._)("div",_,(0,o.zw)((0,n.SU)(h)(e.row.booking.delivery_date,"MMMM DD, YYYY")==(0,n.SU)(h)(new Date,"MMMM DD, YYYY")?"Today":""),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"])])),"body-cell-pickup":(0,a.w5)((e=>[(0,a.Wm)(N,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.row.booking.pickup_date?(0,n.SU)(h)(e.row.booking.pickup_date,"MMMM DD, YYYY"):""),1)])),_:2},1024),(0,a.Wm)(A,{caption:""},{default:(0,a.w5)((()=>[(0,a._)("div",y,(0,o.zw)((0,n.SU)(h)(e.row.booking.pickup_date,"MMMM DD, YYYY")==(0,n.SU)(h)(new Date,"MMMM DD, YYYY")?"Today":""),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"])])),"body-cell-actions":(0,a.w5)((e=>[(0,a.Wm)(N,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(u.Z,{data:e.row},null,8,["data"])])),_:2},1032,["props"])])),item:(0,a.w5)((e=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,o.j5)(e.selected?"transform: scale(0.95);":"")},[(0,a.wy)(((0,a.wg)(),(0,a.j4)(b,{clickable:"",style:{cursor:"pointer"},class:(0,o.C_)(e.selected?"bg-grey-2":""),onClick:l=>(0,n.SU)(F).emit("viewTransaction",e.row)},{default:(0,a.w5)((()=>[(0,a.Wm)(O,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(l=>((0,a.wg)(),(0,a.j4)(J,{key:l.name},{default:(0,a.w5)((()=>[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(l.label),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(K,{side:""},{default:(0,a.w5)((()=>["Product"===l.name?((0,a.wg)(),(0,a.j4)(G,{key:0,color:e.row.carbs>24?"green":"red","text-color":"white",dense:"",size:"sm",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(l.value),1)])),_:2},1032,["color"])):"actions"===l.name?((0,a.wg)(),(0,a.j4)(N,{key:1},{default:(0,a.w5)((()=>[(0,a.Wm)(u.Z,{data:e.row},null,8,["data"])])),_:2},1024)):((0,a.wg)(),(0,a.j4)(A,{key:2,class:(0,o.C_)(l.classes?l.classes:"")},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(l.value),1)])),_:2},1032,["class"])),"product"===l.name?((0,a.wg)(),(0,a.j4)(A,{key:3,"text-caption":""},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{color:(0,n.SU)(M)(e.row.booking.status,"color"),label:(0,n.SU)(M)(e.row.booking.status,"label")},null,8,["color","label"])])),_:2},1024)):(0,a.kq)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class","onClick"])),[[te]])],4)])),_:1},8,["grid","rows","filter","loading","visible-columns"])):(0,a.kq)("",!0),(0,a.Wm)(ee,{position:"bottom-right","scroll-offset":150,offset:[18,80]},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{fab:"",icon:"keyboard_arrow_up",class:"shadow-5",color:"blue"})])),_:1}),(0,a.Wm)(ee,{reverse:"",position:"bottom-right","scroll-offset":25,offset:[18,18]},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{fab:"",icon:"keyboard_arrow_down",class:"shadow-5",color:"blue"})])),_:1})])),_:1})}}};var W=t(4379),q=t(4264),x=t(9570),h=t(2165),U=t(3747),Y=t(3314),Z=t(8870),M=t(6778),S=t(151),Q=t(1598),V=t(3812),j=t(5869),T=t(1278),H=t(2414),z=t(4554),C=t(4842),$=t(2025),P=t(3884),I=t(2035),F=t(2350),L=t(9721),B=t(7011),R=t(3414),A=t(7030),E=t(4710),K=t(6489),N=t(7518),G=t.n(N);const J=D,O=J;G()(D,"components",{QPage:W.Z,QPageSticky:q.Z,QToolbar:x.Z,QBtn:h.Z,QToolbarTitle:U.Z,QSelect:Y.Z,QTooltip:Z.Z,QDialog:M.Z,QCard:S.Z,QLinearProgress:Q.Z,QHeader:V.Z,QSeparator:j.Z,QTable:T.Z,QTh:H.Z,QIcon:z.Z,QInput:C.Z,QSpace:$.Z,QTd:P.Z,QItemSection:I.Z,QItemLabel:F.Z,QBadge:L.Z,QList:B.Z,QItem:R.Z,QChip:A.Z,QPageScroller:E.Z}),G()(D,"directives",{Ripple:K.Z})}}]);