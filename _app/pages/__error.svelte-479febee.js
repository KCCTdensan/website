import{S as J,i as L,s as Q,w as T,k as F,e as h,t as i,x as U,m as G,c as v,a as E,h as _,d as c,b as P,y as V,g as S,K as o,j as I,q as W,o as X,B as Y}from"../chunks/vendor-9e78a147.js";import{M as Z}from"../chunks/meta-5e902eb1.js";import"../chunks/stores-7295e635.js";function ee(n){let t;return{c(){t=i("\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\uFF0E")},l(s){t=_(s,"\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\uFF0E")},m(s,r){S(s,t,r)},d(s){s&&c(t)}}}function te(n){let t;return{c(){t=i("\u304A\u63A2\u3057\u306E\u30DA\u30FC\u30B8\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u2026\u2026\u3054\u3081\u3093\u306A\u3055\u3044\u2026\u2026\u2026")},l(s){t=_(s,"\u304A\u63A2\u3057\u306E\u30DA\u30FC\u30B8\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u2026\u2026\u3054\u3081\u3093\u306A\u3055\u3044\u2026\u2026\u2026")},m(s,r){S(s,t,r)},d(s){s&&c(t)}}}function se(n){let t,s,r,f,a,b,C,M,j=n[1].message+"",N,B,p,D,g,H,y,K,q,d,k;t=new Z({props:{title:"Error_"+n[0],description:"\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\uFF0E"}});function R(e,l){return e[0]===404?te:ee}let w=R(n),u=w(n);return{c(){T(t.$$.fragment),s=F(),r=h("h1"),f=h("pre"),a=h("code"),b=h("span"),C=i("error:"),M=i(" "),N=i(j),B=i(`
  x | static_assert(`),p=h("span"),D=i("status != "),g=i(n[0]),H=i(`);
    |               `),y=h("span"),K=i("~~~~~~~^~~~~~"),q=F(),d=h("p"),u.c(),this.h()},l(e){U(t.$$.fragment,e),s=G(e),r=v(e,"H1",{class:!0});var l=E(r);f=v(l,"PRE",{class:!0});var A=E(f);a=v(A,"CODE",{class:!0});var m=E(a);b=v(m,"SPAN",{class:!0});var $=E(b);C=_($,"error:"),$.forEach(c),M=_(m," "),N=_(m,j),B=_(m,`
  x | static_assert(`),p=v(m,"SPAN",{class:!0});var O=E(p);D=_(O,"status != "),g=_(O,n[0]),O.forEach(c),H=_(m,`);
    |               `),y=v(m,"SPAN",{class:!0});var x=E(y);K=_(x,"~~~~~~~^~~~~~"),x.forEach(c),m.forEach(c),A.forEach(c),l.forEach(c),q=G(e),d=v(e,"P",{});var z=E(d);u.l(z),z.forEach(c),this.h()},h(){P(b,"class","red"),P(p,"class","red"),P(y,"class","red"),P(a,"class","svelte-1bajh7d"),P(f,"class","svelte-1bajh7d"),P(r,"class","svelte-1bajh7d")},m(e,l){V(t,e,l),S(e,s,l),S(e,r,l),o(r,f),o(f,a),o(a,b),o(b,C),o(a,M),o(a,N),o(a,B),o(a,p),o(p,D),o(p,g),o(a,H),o(a,y),o(y,K),S(e,q,l),S(e,d,l),u.m(d,null),k=!0},p(e,[l]){const A={};l&1&&(A.title="Error_"+e[0]),t.$set(A),(!k||l&2)&&j!==(j=e[1].message+"")&&I(N,j),(!k||l&1)&&I(g,e[0]),w!==(w=R(e))&&(u.d(1),u=w(e),u&&(u.c(),u.m(d,null)))},i(e){k||(W(t.$$.fragment,e),k=!0)},o(e){X(t.$$.fragment,e),k=!1},d(e){Y(t,e),e&&c(s),e&&c(r),e&&c(q),e&&c(d),u.d()}}}function oe(n){return{props:n}}function ae(n,t,s){let{status:r=void 0}=t,{error:f=void 0}=t;return n.$$set=a=>{"status"in a&&s(0,r=a.status),"error"in a&&s(1,f=a.error)},[r,f]}class ce extends J{constructor(t){super();L(this,t,ae,se,Q,{status:0,error:1})}}export{ce as default,oe as load};