import{_ as h}from"./BannerBl.vue_vue_type_script_setup_true_lang-CjRgK514.js";import{d as x,k,l as w,m as v,r as d,o as s,c as m,w as l,f as g,h as y,_ as e,b as r,a,F as u,n as D,p as b,q as $}from"./index-tJHZTtbx.js";const B={tags:"article",position:"relative",margin:{xl:"0 auto"},width:{xl:"1440px",lg:"100%",md:"100%",sm:"100%",xs:"100%"}},C={tags:"div",display:"grid",margin:"100px 0",styles:{xl:"grid-template-columns: repeat(4, 264px); gap: 50px; place-content: center;",lg:"grid-template-columns: repeat(4, 216px); gap: clamp(0.875rem, -3.98rem + 7.895vw, 3.125rem); place-content: center;",md:"grid-template-columns: repeat(3, 216px); gap: 14px; place-content: center;",sm:"grid-template-columns: repeat(3, 128px); gap: clamp(0.875rem, -2.713rem + 12.371vw, 3.125rem); place-content: center;",xs:"grid-template-columns: repeat(2, 128px); gap: 14px; place-content: center;"}},E={tags:"div",display:"flex",flexDirection:"column",justifyContent:"center",width:{xl:"264px",lg:"216px",md:"216px",sm:"128px",xs:"128px"},height:{xl:"393px",lg:"347px",md:"347px",sm:"242px",xs:"242px"},borderRadius:"10px",styles:"box-shadow: 2px 2px 15px var(--black-10);"},L={tags:"img",src:"",alt:"",margin:"0 auto",width:{xl:"198px",lg:"158px",md:"158px",sm:"100px",xs:"100px"},height:"auto"},T={tags:"h4",marginTop:{xl:"70px",lg:"50px",md:"50px",sm:"25px",xs:"25px"},marginLeft:"10px",classes:{xl:"lig-16",lg:"lig-14",md:"lig-14",sm:"lig-11",xs:"lig-11"}},j={tags:"p",marginTop:"10px",marginLeft:"10px",width:{xl:"240px",lg:"210px",md:"210px",sm:"90px",xs:"90px"},classes:{xl:"reg-18",lg:"reg-16",md:"reg-16",sm:"reg-14",xs:"reg-14"}},F=x({__name:"CardEl",setup(i){const o=k(),t=w({loading:!0,data:null,error:!1}),_="https://gsergeyp.github.io/lumber_camp/mock/";return v(()=>o.params.product,p=>{D(_+p+".data.mock.json","GET").then(n=>{t.value={loading:n.loading,data:n.data,error:n.error}})},{immediate:!0}),(p,n)=>t.value.loading?d(p.$slots,"loading",{key:0}):t.value.error?d(p.$slots,"error",{key:1}):(s(),m(e,{key:2,data:r(C)},{default:l(()=>[(s(!0),g(u,null,y(t.value.data,(c,f)=>(s(),m(e,{key:f,data:r(E)},{default:l(()=>[a(e,{data:{...r(L),src:c.src,alt:c.alt}},null,8,["data"]),a(e,{data:{...r(T),title:c.title}},null,8,["data"]),a(e,{data:{...r(j),title:c.msg}},null,8,["data"])]),_:2},1032,["data"]))),128))]),_:1},8,["data"]))}}),P=x({__name:"ProductsBl",setup(i){return(o,t)=>(s(),m(e,{data:r(B)},{default:l(()=>[a(F,null,{loading:l(()=>[a(b)]),error:l(()=>[a($)]),_:1})]),_:1},8,["data"]))}}),q=x({__name:"ProductsView",setup(i){return(o,t)=>(s(),g(u,null,[a(h),a(P)],64))}});export{q as default};
