import{d as x,I as v,a0 as C,b as a,c,e as i,F as w,Y as B,a1 as I,t as r,f as s,g as u,w as m,X as N,M as f,n as D,a2 as L,E as p,l as E}from"./entry.7e887afd.js";import{f as V}from"./date.824a539b.js";const z=["data-content-id"],A={class:"image"},F={key:0},S={class:"content"},$={class:"description"},g={key:0},j=x({__name:"ArticlesListItem",props:{article:{type:Object,required:!0,validator:t=>!!(t!=null&&t._path&&t.title)},featured:{type:Boolean,default:!1}},setup(t){const _=t,h=v(()=>{var n,o;return(n=C())!=null&&n.isEnabled()?(o=_.article)==null?void 0:o._id:void 0});return(n,o)=>{var d;const y=L,l=p;return t.article._path&&t.article.title?(a(),c("article",{key:0,class:D({featured:t.featured}),"data-content-id":f(h)},[i("div",A,[(d=t.article)!=null&&d.badges?(a(),c("div",F,[(a(!0),c(w,null,B(t.article.badges,(e,k)=>(a(),c("span",{key:k,style:I({backgroundColor:(e==null?void 0:e.bg)||"rgba(0, 0, 0, 0.3)",color:(e==null?void 0:e.color)||"white"})},r(typeof e=="string"?e:e.content),5))),128))])):s("",!0),u(l,{to:t.article._path},{default:m(()=>[t.article.cover?(a(),N(y,{key:0,src:t.article.cover,alt:t.article.title,width:"16",height:"9"},null,8,["src","alt"])):s("",!0)]),_:1},8,["to"])]),i("div",S,[u(l,{to:t.article._path,class:"headline"},{default:m(()=>[i("h1",null,r(t.article.title),1)]),_:1},8,["to"]),i("p",$,r(t.article.description),1),t.article.date?(a(),c("time",g,r(("formatDate"in n?n.formatDate:f(V))(t.article.date)),1)):s("",!0)])],10,z)):s("",!0)}}});const O=E(j,[["__scopeId","data-v-a395d52a"]]);export{O as default};
