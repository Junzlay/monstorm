"use strict";(self["webpackChunkmonstorm_fe"]=self["webpackChunkmonstorm_fe"]||[]).push([[545],{5545:(e,l,o)=>{o.r(l),o.d(l,{default:()=>I});var a=o(3673),t=o(2323),d=o(1959),i=o(3617),s=o(9582);const n={props:{data:Object},setup(e){const l=e,o=(0,i.oR)(),t=(0,s.tv)(),d=async e=>{const a=await o.dispatch("manageBooking",{id:l.data.id,user:l.data.user_id,status:e,booking:l.data.booking});console.log(a),200==a.status&&o.dispatch("getTodayTransaction"),t.back()};return(l,o)=>{const t=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(t,{align:"left",onClick:o[0]||(o[0]=e=>l.$router.back()),class:"btn-fixed-width",flat:"",color:"primary",label:"go back"}),0==e.data.status?((0,a.wg)(),(0,a.j4)(t,{key:0,align:"left",onClick:o[1]||(o[1]=e=>d(2)),class:"btn-fixed-width",unelevated:"",color:"red",label:" Disapprove",icon:"thumb_down"})):(0,a.kq)("",!0),0==e.data.status?((0,a.wg)(),(0,a.j4)(t,{key:1,onClick:o[2]||(o[2]=e=>d(1)),icon:"thumb_up",type:"submit",unelevated:"",style:{background:"#4b88fe",color:"white"},label:"Approve"})):(0,a.kq)("",!0)],64)}}};var r=o(2165),u=o(7518),c=o.n(u);const p=n,m=p;c()(n,"components",{QBtn:r.Z});var b=o(8825),g=o(5616);const _=(0,a._)("div",{class:"text-subtitle1"},"Booking Details",-1),y={class:"row"},v={class:"col-12 col-md"},k={class:"col-12 col-md"},q={class:"row items-center justify-end"},f={class:"row items-center justify-end"},w=(0,a._)("div",{class:"text-subtitle1 q-mb-sm q-mt-md"},"Customer Information",-1),S={class:"row"},U={class:"col-12 col-md"},V={class:"col-12 col-md"},h={setup(e){const{formatDate:l}=g.ZP,o=(0,a.f3)("store"),i=(0,b.Z)(),n=e=>{if(!/\d/.test(e.key)&&"."!==e.key)return e.preventDefault()},r=(0,d.qj)(JSON.parse(localStorage.getItem("user")));o.dispatch("getAllProducts");(0,d.iH)(null),(0,d.iH)(null);const u=(0,d.iH)(!1),c=(0,s.tv)(),p=e=>e>=l(Date.now(),"YYYY/MM/DD"),h=async()=>{u.value=!0,u?setTimeout((async()=>{u.value=!1}),1e3):setTimeout((()=>{u.value=!1}),1e3)};i.iconSet.arrow.dropdown="expand_more";const W=(0,a.Fl)((()=>o.getters.allProducts)),D=(0,d.iH)(0),Z=(0,d.iH)("Date"),j=(0,d.qj)({address:r.address,phone_number:r.phone_number,quantity:1,status:0,pickup_date:null}),C=e=>{Z.value="Free Delivery"===e?"Delivery Date":"Pickup Date"},Q=((0,a.Fl)((()=>{let e=j.product_id.id;return{...j,product_id:e}})),e=>{D.value=String(Number(j.product_id.price*e).toFixed(3).slice(0,-1))}),x=e=>{D.value=String(Number(e.price*j.quantity).toFixed(3).slice(0,-1))};if(c.currentRoute.value.params){const e=JSON.parse(c.currentRoute.value.params.data);C(e.booking.booking_type),j.product_id=e.product,j.pickup_date=e.booking.pickup_date,j.quantity=e.booking.quantity,j.delivery_date=e.booking.delivery_date,j.booking_type=e.booking.booking_type,j.status=e.booking.status,j.id=e.booking.id,j.user_id=e.booking.user.id,j.booking=e.booking,Q(e.booking.quantity)}return(e,l)=>{const o=(0,a.up)("q-select"),s=(0,a.up)("q-input"),r=(0,a.up)("q-btn-group"),u=(0,a.up)("q-btn"),c=(0,a.up)("q-date"),b=(0,a.up)("q-popup-proxy"),g=(0,a.up)("q-icon"),P=(0,a.up)("q-card-actions"),F=(0,a.up)("q-form"),B=(0,a.up)("q-card"),H=(0,a.up)("q-page"),T=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(H,{class:"items-center"},{default:(0,a.w5)((()=>[_,(0,a.Wm)(B,{class:"shadow-0 q-pb-lg"},{default:(0,a.w5)((()=>[(0,a.Wm)(F,{class:"q-mt-sm",onSubmit:h},{default:(0,a.w5)((()=>[(0,a._)("div",y,[(0,a._)("div",v,[(0,a._)("div",{class:(0,t.C_)((0,d.SU)(i).screen.lt.md?"":"q-pr-lg q-mr-lg")},[(0,a.Wm)(o,{readonly:"",filled:"","bg-color":"indigo-1","transition-show":"jump-up","transition-hide":"jump-up",modelValue:(0,d.SU)(j).product_id,"onUpdate:modelValue":[l[0]||(l[0]=e=>(0,d.SU)(j).product_id=e),l[1]||(l[1]=e=>x(e))],options:(0,d.SU)(W),"option-label":e=>e.product_name+" - ₱"+e.price,label:"Product",rules:[e=>!!e||"*Field is required"]},null,8,["modelValue","options","option-label","rules"]),(0,a.Wm)(o,{filled:"",readonly:"","bg-color":"indigo-1","transition-show":"jump-up","transition-hide":"jump-up",class:"q-mt-lg q-mb-lg",modelValue:(0,d.SU)(j).booking_type,"onUpdate:modelValue":[l[2]||(l[2]=e=>(0,d.SU)(j).booking_type=e),l[3]||(l[3]=e=>C(e))],options:["Free Delivery","Pickup Item"],label:"Booking Type",rules:[e=>!!e||"*Field is required"]},null,8,["modelValue","rules"])],2)]),(0,a._)("div",k,[(0,a._)("div",{class:(0,t.C_)((0,d.SU)(i).screen.lt.md||(0,d.SU)(i).screen.lt.sm?"":"q-pl-lg q-ml-lg ")},[(0,a.Wm)(r,{spread:"",class:"bg-white border-0 shadow-0"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{readonly:"",modelValue:(0,d.SU)(j).quantity,"onUpdate:modelValue":l[4]||(l[4]=e=>(0,d.SU)(j).quantity=e),modelModifiers:{number:!0},onKeypress:n,"bg-color":"indigo-1",onKeyup:l[5]||(l[5]=e=>Q(e)),label:"Quantity",filled:"",rules:[e=>!!e||"*Field is required"]},null,8,["modelValue","rules"]),(0,a.Wm)(s,{class:"q-ml-lg",modelValue:D.value,"onUpdate:modelValue":l[6]||(l[6]=e=>D.value=e),modelModifiers:{number:!0},prefix:"₱",type:"number","bg-color":"indigo-1",label:"Total",filled:"",readonly:""},null,8,["modelValue"])])),_:1}),"Free Delivery"===(0,d.SU)(j).booking_type?((0,a.wg)(),(0,a.j4)(s,{key:0,readonly:"",label:Z.value,filled:"","bg-color":"indigo-1",modelValue:(0,d.SU)(j).delivery_date,"onUpdate:modelValue":l[8]||(l[8]=e=>(0,d.SU)(j).delivery_date=e),mask:"date",class:"q-mt-lg"},{append:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{ref:"qDateProxy",cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{readonly:"",modelValue:(0,d.SU)(j).delivery_date,"onUpdate:modelValue":l[7]||(l[7]=e=>(0,d.SU)(j).delivery_date=e),options:p},{default:(0,a.w5)((()=>[(0,a._)("div",q,[(0,a.wy)((0,a.Wm)(u,{label:"Save",color:"primary",flat:""},null,512),[[T]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["label","modelValue"])):((0,a.wg)(),(0,a.j4)(s,{key:1,readonly:"",label:Z.value,filled:"","bg-color":"indigo-1",modelValue:(0,d.SU)(j).pickup_date,"onUpdate:modelValue":l[10]||(l[10]=e=>(0,d.SU)(j).pickup_date=e),mask:"date",class:"q-mt-lg"},{append:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{ref:"qDateProxy",cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{readonly:"",modelValue:(0,d.SU)(j).pickup_date,"onUpdate:modelValue":l[9]||(l[9]=e=>(0,d.SU)(j).pickup_date=e),options:p},{default:(0,a.w5)((()=>[(0,a._)("div",f,[(0,a.wy)((0,a.Wm)(u,{label:"Save",color:"primary",flat:""},null,512),[[T]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["label","modelValue"]))],2)])]),w,(0,a._)("div",S,[(0,a._)("div",U,[(0,a._)("div",{class:(0,t.C_)((0,d.SU)(i).screen.lt.md?"":"q-pr-lg q-mr-lg")},[(0,a.Wm)(s,{readonly:"",class:"q-mb-lg","bg-color":"indigo-1",filled:"",modelValue:(0,d.SU)(j).address,"onUpdate:modelValue":l[11]||(l[11]=e=>(0,d.SU)(j).address=e),label:"Address"},null,8,["modelValue"])],2)]),(0,a._)("div",V,[(0,a._)("div",{class:(0,t.C_)((0,d.SU)(i).screen.lt.md||(0,d.SU)(i).screen.lt.sm?"":"q-pl-lg q-ml-lg ")},[(0,a.Wm)(s,{readonly:"",class:"q-mb-sm","bg-color":"indigo-1",filled:"",modelValue:(0,d.SU)(j).phone_number,"onUpdate:modelValue":l[12]||(l[12]=e=>(0,d.SU)(j).phone_number=e),onKeypress:n,label:"Contact Number"},null,8,["modelValue"])],2)])]),(0,a.Wm)(P,{align:"right",class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,d.SU)(m),{data:(0,d.SU)(j)},null,8,["data"])])),_:1})])),_:1})])),_:1})])),_:1})}}};var W=o(4379),D=o(151),Z=o(5269),j=o(3314),C=o(6375),Q=o(4842),x=o(4554),P=o(3944),F=o(6915),B=o(9367),H=o(677);const T=h,I=T;c()(h,"components",{QPage:W.Z,QCard:D.Z,QForm:Z.Z,QSelect:j.Z,QBtnGroup:C.Z,QInput:Q.Z,QIcon:x.Z,QPopupProxy:P.Z,QDate:F.Z,QBtn:r.Z,QCardActions:B.Z}),c()(h,"directives",{ClosePopup:H.Z})}}]);