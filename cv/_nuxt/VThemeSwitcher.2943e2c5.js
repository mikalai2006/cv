import{e as c,f as m}from"./useIcons.21fbceff.js";import{C as l,v as d,a as h,r as a,o as k,c as u,l as n,i as p,k as _,j as f,t as g,u as o}from"./entry.16dc278f.js";const T=l({id:"ui",state:()=>({theme:{dark:!1}}),getters:{getTheme(e){return e.theme}},actions:{onSetThemeOption(e){this.theme=Object.assign({},this.theme,e)},onToggleDark(){const e=d(),t=this.theme.dark,s=document.documentElement;t?(s.classList.remove("dark"),e.set("dark",!1)):(s.classList.add("dark"),e.set("dark",!0)),this.onSetThemeOption({dark:!this.theme.dark})}}}),x={class:"flex items-center"},v=h({__name:"VThemeSwitcher",setup(e){const t=T();return(s,C)=>{const r=a("LIcon"),i=a("FButton");return k(),u(i,{mode:"link",class:"text-xl","aria-label":"change mode",onClick:o(t).onToggleDark},{default:n(()=>[p("span",x,[_(r,{role:"presentation"},{default:n(()=>[f(g(o(t).getTheme.dark?o(c):o(m)),1)]),_:1})])]),_:1},8,["onClick"])}}});export{v as default};
