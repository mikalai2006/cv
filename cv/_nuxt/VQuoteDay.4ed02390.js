import{a as A,p as w,m as r,r as B,o as u,e as h,i as t,k as f,l as p,j as x,u as e,c as C,t as o,w as M,z as N,A as R,T as j}from"./entry.16dc278f.js";import{b as E,c as F}from"./useIcons.21fbceff.js";const K={class:"p-4 md:p-12"},L={class:"max-w-screen-lg mx-auto bg-white dark:bg-s-800 p-4 rounded-md"},Q={class:"text-center flex flex-wrap items-center gap-4"},S={class:"relative group hidden md:block"},z={class:"absolute bg-s-200 rounded-md px-2 text-sm -top-5 hidden group-hover:block"},O=["disabled"],U={class:"relative overflow-hidden px-4"},$={cite:"https://quotesondesign.com/"},G={class:"flex"},H=t("div",{class:"text-lg md:text-9xl"},"“",-1),J={class:"p-6 italic font-bold text-xl md:text-5xl"},W=t("div",{class:"text-lg md:text-9xl"},"”",-1),X={class:""},Y={class:"text-xl font-medium text-p-500"},Z={class:"relative"},ee=t("div",{class:"h-1 bg-s-100 dark:bg-s-700 rounded"},null,-1),oe=A({__name:"VQuoteDay",props:{blok:{type:Object,default:()=>({})}},setup(T){const q=T,_=w(()=>{var n;return((n=q.blok.quotes)==null?void 0:n.map(s=>({cite:s.cite,text:s.text,author:s.author})))||[]}),d=r(0),v=w(()=>_.value[d.value]||{}),i=r(!1),m=()=>{i.value=!0;let n=0;const s=()=>{n=Math.floor(Math.random()*_.value.length),n==d.value?s():(d.value=n,D())};s()},a=r(null),V=()=>{a.value&&(a.value.style.width="100%",a.value.style.transition=`width ${c.value}ms linear`)},g=()=>{a.value&&(a.value.style.transition="",a.value.style.width=0)};let b=null;const D=()=>{clearTimeout(b),b=setTimeout(()=>{i.value=!1,g(),l.value&&m()},parseInt(c.value)+500)},l=r(!1),I=()=>{l.value=!l.value,l.value?m():(g(),i.value=!1)},c=r(2e3);return(n,s)=>{const y=B("FButton"),k=B("LIcon");return u(),h("div",K,[t("div",L,[t("div",Q,[f(y,{disabled:e(i),onClick:m},{default:p(()=>[x(" Random quote ")]),_:1},8,["disabled"]),f(y,{class:"rounded-full block !px-2 py-2",disabled:e(i)&&!e(l),onClick:I},{default:p(()=>[e(l)?(u(),C(k,{key:0,class:"text-2xl"},{default:p(()=>[x(o(e(E)),1)]),_:1})):(u(),C(k,{key:1,class:"text-2xl"},{default:p(()=>[x(o(e(F)),1)]),_:1}))]),_:1},8,["disabled"]),t("div",S,[t("div",z,o(e(c))+"ms ",1),M(t("input",{type:"range",disabled:e(l)||e(i),"onUpdate:modelValue":s[0]||(s[0]=P=>R(c)?c.value=P:null),min:"1000",max:"10000",step:"500",class:"disabled:cursor-not-allowed h-1 bg-s-200 rounded-lg appearance-none cursor-pointer dark:bg-s-700"},null,8,O),[[N,e(c)]])])]),t("div",U,[f(j,{appear:"",name:"slidetotop",onAfterEnter:V},{default:p(()=>[(u(),h("figure",{key:e(d),class:"py-12 px-4"},[t("blockquote",$,[t("div",G,[H,t("p",J,o(e(v).text),1),W])]),t("figcaption",X,[t("div",Y," — "+o(e(v).author),1),t("cite",null,o(e(v).cite),1),t("div",null,o(e(d)+1)+" of "+o(e(_).length),1)])]))]),_:1}),t("div",Z,[(u(),h("div",{key:e(d),ref_key:"progressBar",ref:a,class:"absolute bg-p-500 rounded w-0 top-0 h-1"})),ee])])])])}}});export{oe as default};