import{a as C,m as B,D as T,e as i,p as D,r as p,b as F,o as c,i as e,t as r,F as x,f as w,w as g,c as v,k as _,l as b,j as h,u as y}from"./entry.16dc278f.js";import{g as L}from"./useIcons.21fbceff.js";const S=C({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:l,attrs:d}){const u=B(!1);return T(()=>{u.value=!0}),n=>{var s;if(u.value)return(s=l.default)==null?void 0:s.call(l);const a=l.fallback||l.placeholder;if(a)return a();const f=n.fallback||n.placeholder||"",m=n.fallbackTag||n.placeholderTag||"span";return i(m,d,f)}}}),j={class:"max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row print:flex-row gap-4 print:p-0"},N={class:"flex-1 flex flex-col gap-4"},O={class:"p-4 md:p-6 bg-white dark:bg-s-800 rounded-md"},P=["src","title"],V={class:"text-2xl font-bold whitespace-nowrap print:whitespace-normal"},I={class:"text-xl font-medium whitespace-nowrap my-1"},A={class:"flex-auto flex flex-col gap-4"},E={class:"text-sm text-s-500"},M={class:"print:hidden"},W=C({__name:"CvWrapper",props:{blok:{type:Object,default:()=>({})}},setup(t){const l=D(()=>window?window.location:""),d=()=>window.print();return(u,n)=>{const a=p("StoryblokComponent"),f=S,m=p("LIcon"),s=p("FButton"),k=F("editable");return c(),i("div",j,[e("div",N,[e("div",O,[e("img",{src:t.blok.photo.filename,title:t.blok.name,class:"mx-auto rounded-full mb-4 w-40 h-40"},null,8,P),e("h3",V,r(t.blok.name),1),e("h4",I,r(t.blok.job),1)]),(c(!0),i(x,null,w(t.blok.left,o=>g((c(),v(a,{key:o._uid,blok:o},null,8,["blok"])),[[k,o]])),128))]),e("div",A,[(c(!0),i(x,null,w(t.blok.right,o=>g((c(),v(a,{key:o._uid,blok:o},null,8,["blok"])),[[k,o]])),128)),e("div",E,[_(f,null,{default:b(()=>[h(r(y(l)),1)]),_:1})]),e("div",M,[_(s,{onClick:d},{default:b(()=>[_(m,{class:"inline mr-1"},{default:b(()=>[h(r(y(L)),1)]),_:1}),h(" Print cv ")]),_:1})])])])}}});export{W as default};
