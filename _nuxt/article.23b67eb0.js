import{d as w,V as B,i as I,x as D,C as N,I as S,b as s,X as V,w as _,e as c,g as n,M as e,c as p,t as l,f as i,a5 as $,D as A,a6 as E,E as L,p as P,j,l as H}from"./entry.7e887afd.js";import M from"./ProseA.81d7726e.js";import R from"./Container.4c318be4.js";import{f as X}from"./date.824a539b.js";const q=a=>(P("data-v-67cde51f"),a=a(),j(),a),z=q(()=>c("span",null," Back ",-1)),F={key:0,class:"title"},G=["datetime"],J={class:"prose"},K={key:0,class:"back-to-top"},O=w({__name:"article",setup(a){const{page:t}=B(),d=I(),r=D().alpine;t.value&&t.value.cover&&N({title:t.value.title,meta:[{property:"og:image",content:t.value.cover}]});const y=S(()=>{const o=d.path.split("/");return o.pop(),{path:"/",hash:`#${o.pop()}Link`}});return(o,Q)=>{const u=E,T=L,g=M,C=R;return s(),V(C,null,{default:_(()=>{var m,f,h;return[c("article",null,[n(T,{to:e(y),class:"back"},{default:_(()=>[n(u,{name:"ph:arrow-left"}),z]),_:1},8,["to"]),c("header",null,[(m=e(t))!=null&&m.title?(s(),p("h1",F,l(e(t).title),1)):i("",!0),(f=e(t))!=null&&f.date?(s(),p("time",{key:1,datetime:e(t).date},l(("formatDate"in o?o.formatDate:e(X))(e(t).date)),9,G)):i("",!0)]),c("div",J,[$(o.$slots,"default",{},void 0,!0),(h=e(r))!=null&&h.backToTop?(s(),p("div",K,[n(g,{href:e(d).path},{default:_(()=>{var k,v,x,b;return[A(l(((v=(k=e(r))==null?void 0:k.backToTop)==null?void 0:v.text)||"Back to top")+" ",1),n(u,{name:((b=(x=e(r))==null?void 0:x.backToTop)==null?void 0:b.icon)||"material-symbols:arrow-upward"},null,8,["name"])]}),_:1},8,["href"])])):i("",!0)])])]}),_:3})}}});const ee=H(O,[["__scopeId","data-v-67cde51f"]]);export{ee as default};