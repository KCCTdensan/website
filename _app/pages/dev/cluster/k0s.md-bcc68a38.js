import{S as na,i as ua,s as _a,D as Fe,x as va,y as ca,z as Ea,A as ka,B as Ot,r as da,p as xa,C as Pa,X as $t,e as p,t as o,k as m,c as f,a as i,h as r,d as s,m as n,b as v,g as t,R as a,n as wa}from"../../../chunks/index-ee3c2835.js";import{M as ba}from"../../../chunks/_md_layout-6fb15d10.js";import"../../../chunks/meta-1a427be6.js";import"../../../chunks/stores-939f4b6a.js";function Ha(F){let u,k,d,x,_,E,w,$s,Al,G,js,Ol,H,Ns,C,zs,Is,$l,P,qs,J,Nt='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>',Zs,Q,zt='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">\u2020</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">s</mi></mrow><mi mathvariant="normal">\u2020</mi></mrow><annotation encoding="application/x-tex">\\dag\\mathrm{rootfs}\\dag</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">\u2020</span><span class="mord"><span class="mord mathrm">rootfs</span></span><span class="mord">\u2020</span></span></span></span>',Bs,jl,R,It=`<code class="language-undefined"># dd if=20220121_raspi_2_bullseye.img of=/dev/sdx status=progress
# mount /dev/sdx2 /mnt</code>`,Nl,V,Ks,zl,W,Us,Il,Y,Xs,ql,c,Ml,Fs,Gs,Ll,Js,Qs,hl,Vs,Ws,yl,Ys,gs,Zl,S,qt=`<code class="language-undefined">auto eth0
iface eth0 inet static
  address 192.168.hoge.fuga/24
  gateway 192.168.hoge.1
iface eth0 inet6 auto</code>`,Bl,M,le,Dl,se,ee,Kl,g,te,Ul,A,Tl,ae,pe,Xl,O,Zt=`<code class="language-undefined">nameserver 192.168.hoge.1
nameserver 1.1.1.1</code>`,Fl,ll,fe,Gl,$,Cl,ie,oe,Jl,sl,re,Ql,el,me,Vl,L,ne,Rl,ue,_e,Wl,j,Bt=`<code class="language-diff"><span class="token coord">--- /mnt/etc/ssh/sshd_config</span>
<span class="token coord">+++ new</span>
<span class="token coord">@@ -15 +15 @@</span>
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">#Port 22
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">Port 22
</span></span><span class="token coord">@@ -34 +34 @@</span>
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">#PermitRootLogin prohibit-password
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">PermitRootLogin prohibit-password</span></span></code>`,Yl,tl,ve,gl,N,Kt=`<code class="language-undefined"># mkdir -p /mnt/root/.ssh
# echo &quot;ssh-xxxx xxxxxxxxxxxxxxxx&quot; &gt;&gt; /mnt/root/.ssh/authorized_keys</code>`,ls,al,ce,ss,h,Ee,pl,Ut='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">\u2020</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">s</mi></mrow><mi mathvariant="normal">\u2020</mi></mrow><annotation encoding="application/x-tex">\\dag\\mathrm{rootfs}\\dag</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">\u2020</span><span class="mord"><span class="mord mathrm">rootfs</span></span><span class="mord">\u2020</span></span></span></span>',ke,es,z,Xt=`<code class="language-undefined"># umount /mnt
# mount /dev/sdx1 /mnt
# touch /mnt/ssh
# umount /mnt</code>`,ts,fl,de,as,il,xe,ps,ol,Pe,fs,rl,we,is,I,Ft='<code class="language-undefined">% ssh -i /path/to/priv_key -p 22 root@192.168.hoge.fuga</code>',os,ml,be,rs,nl,He,ms,ul,Me,ns,_l,Le,us,y,he,q,ye,De,_s,vl,Te,vs,Z,Gt='<code class="language-undefined">% go install github.com/k0sproject/k0sctl@latest</code>',cs,cl,Ce,Es,El,Re,ks,kl,Se,ds,D,Ae,B,Oe,$e,xs,K,Jt='<code class="language-undefined">% k0sctl init &gt; k0sctl.yaml</code>',Ps,dl,je,ws,xl,Ne,bs,U,Qt='<code class="language-undefined">% k0sctl apply --config k0sctl.yaml</code>',Hs,Pl,ze,Ms,T,Ie,Sl,qe,Ze,Ls,X,Vt='<code class="language-undefined">% k0sctl kubeconfig &gt; kubeconfig</code>',hs,wl,Be,ys,bl,Ke;return{c(){u=p("h1"),k=o("\u30E9\u30BA\u30D1\u30A4\u3067k0s\u30AF\u30E9\u30B9\u30BF\u69CB\u7BC9"),d=m(),x=p("p"),_=o("\u3084\u3063\u305F\u306E\u3067\u30E1\u30E2\uFF0E"),E=m(),w=p("h2"),$s=o("\u30E9\u30BA\u30D1\u30A4\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7"),Al=m(),G=p("p"),js=o("\u81EA\u52D5\u5316\u3063\u3066\u4F55"),Ol=m(),H=p("p"),Ns=o("\u307E\u305A\uFF0CSD\u30AB\u30FC\u30C9\u3092\u7528\u610F\u3057\uFF0C"),C=p("a"),zs=o("raspi.debian.net"),Is=o(`\u304B\u3089\u9069\u5207\u306A\u30A4\u30E1\u30FC\u30B8\u306Exz\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B\uFF0E
\u3053\u3053\u3067\u306F11(bullseye)\u3092\u4F7F\u7528\u3059\u308B\uFF0E`),$l=m(),P=p("h3"),qs=o("1. \u30A4\u30E1\u30FC\u30B8\u3092SD\u30AB\u30FC\u30C9(/dev/sd"),J=p("span"),Zs=o(")\u306B\u713C\u304F\u30FB"),Q=p("span"),Bs=o("\u306E\u30DE\u30A6\u30F3\u30C8"),jl=m(),R=p("pre"),Nl=m(),V=p("h3"),Ks=o("2. \u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u8A2D\u5B9A"),zl=m(),W=p("p"),Us=o("\u6CE8\u610F\u3057\u3066\u9069\u5B9C\u8AAD\u307F\u66FF\u3048\u308B\u3053\u3068\uFF0E"),Il=m(),Y=p("p"),Xs=o("\u307E\u305A\uFF0CIP\u3092\u56FA\u5B9A\u3059\u308B\uFF0E"),ql=m(),c=p("p"),Ml=p("code"),Fs=o("/mnt/etc/network/interfadces.d/eth0"),Gs=o("\u306E"),Ll=p("code"),Js=o("inet"),Qs=o("\u3092"),hl=p("code"),Vs=o("auto"),Ws=o("\u304B\u3089"),yl=p("code"),Ys=o("static"),gs=o("\u306B\u5909\u66F4\u3059\u308B :"),Zl=m(),S=p("pre"),Bl=m(),M=p("p"),le=o("\u7121\u7DDA\u63A5\u7D9A\u3092\u8003\u3048\u3066\u3044\u308B\u306E\u3067\u3042\u308C\u3070"),Dl=p("code"),se=o("wpa_supplicant.conf"),ee=o("\u3092\u7528\u610F\u3059\u308C\u3070\u3088\u3055\u3052\uFF0E"),Kl=m(),g=p("p"),te=o(`\u6B21\u306B\uFF0Cresolv.conf\u3092\u7F6E\u304F\uFF0E
raspbian\u3068\u304B\u3092\u4F7F\u3063\u3066\u308B\u306A\u3089\u5FC5\u8981\u7121\u3044\u304B\u3082\uFF0E`),Ul=m(),A=p("p"),Tl=p("code"),ae=o("/mnt/etc/resolv.conf"),pe=o("\u3092\u6B21\u306E\u3088\u3046\u306B\u3059\u308B :"),Xl=m(),O=p("pre"),Fl=m(),ll=p("p"),fe=o(`\u6700\u5F8C\u306B\uFF0Chostname\u3092\u8A2D\u5B9A\u3059\u308B\uFF0E
\u3053\u308C\u306F\u30B7\u30A7\u30EB\u3067\u64CD\u4F5C\u3059\u308B\u6642\u306B\u308F\u304B\u308A\u3084\u3059\u304F\u3059\u308B\u305F\u3081\uFF0E`),Gl=m(),$=p("p"),Cl=p("code"),ie=o("/mnt/etc/hostname"),oe=o("\u3092\u7DE8\u96C6\u3059\u308B\uFF0E"),Jl=m(),sl=p("h3"),re=o("3. ssh\u306E\u8A2D\u5B9A"),Ql=m(),el=p("p"),me=o("\u4ECA\u56DE\u306Froot\u3067\u3082ssh\u304C\u4F7F\u3048\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3057\u3066\u3044\u304F\uFF0E"),Vl=m(),L=p("p"),ne=o("\u307E\u305A\uFF0C"),Rl=p("code"),ue=o("/mnt/etc/ssh/sshd_config"),_e=o("\u3092\u7DE8\u96C6\u3059\u308B :"),Wl=m(),j=p("pre"),Yl=m(),tl=p("p"),ve=o(`\u6B21\u306B\uFF0C\u516C\u958B\u9375\u3092\u767B\u9332\u3059\u308B\uFF0E
\u9375\u306E\u4F5C\u6210\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u5404\u81EAgg\u308B\u3053\u3068\uFF0E`),gl=m(),N=p("pre"),ls=m(),al=p("h3"),ce=o("4. sshd\u3092\u6709\u52B9\u5316\u3059\u308B"),ss=m(),h=p("p"),Ee=o("\u6700\u521D\u306B"),pl=p("span"),ke=o("\u3092\u30A2\u30F3\u30DE\u30A6\u30F3\u30C8\u3057\u3066\u3044\u308B\uFF0E"),es=m(),z=p("pre"),ts=m(),fl=p("p"),de=o(`\u3053\u308C\u3067\uFF0C\u3082\u3046\u3053\u306ESD\u30AB\u30FC\u30C9\u306B\u3057\u304C\u3089\u307F\u306F\u5B58\u5728\u3057\u306A\u3044\uFF0E
PC\u304B\u3089\u3076\u3063\u3053\u629C\u304F\uFF0E`),as=m(),il=p("h3"),xe=o("5. \u8D77\u52D5\u30FB\u63A5\u7D9A"),ps=m(),ol=p("p"),Pe=o(`\u30E9\u30BA\u30D1\u30A4\u306E\u30ED\u30FC\u30AB\u30EBIP\u3092\u56FA\u5B9A\u3057sshd\u3092\u6709\u52B9\u5316\u3057\u305F\u306E\u3067\uFF0C(\u3068\u304F\u306B\u30C8\u30E9\u30D6\u3089\u306A\u3044\u9650\u308A)\u5B8C\u5168\u306B\u30D8\u30C3\u30C9\u30EC\u30B9\u904B\u7528\u304C\u53EF\u80FD\uFF0E
\u3068\u3044\u3046\u3053\u3068\u3067SD\u30AB\u30FC\u30C9\u3068LAN\u30B1\u30FC\u30D6\u30EB\u3092\u523A\u3057\u3066\u96FB\u6E90\u3092\u6295\u5165\uFF0E`),fs=m(),rl=p("p"),we=o("\u3057\u3070\u3089\u304F\u5F85\u3063\u3066ping\u304C\u901A\u308B\u3088\u3046\u3067\u3042\u308C\u3070\uFF0Cssh\u3067\u63A5\u7D9A\u3059\u308B\uFF0E"),is=m(),I=p("pre"),os=m(),ml=p("h2"),be=o("\u30AF\u30E9\u30B9\u30BF\u306E\u69CB\u7BC9(k0sctl)"),rs=m(),nl=p("p"),He=o("\u3053\u308C\u3092\u4F7F\u3046\u3068\u697D\u3089\u3057\u3044\uFF0E(\u5B9F\u969B\u697D\u3060\u3063\u305F)"),ms=m(),ul=p("p"),Me=o("\u307E\u3060\u5B8C\u5168\u306A\u7406\u89E3\u306B\u81F3\u3063\u3066\u3044\u306A\u3044\u306E\u3067\u3044\u308D\u3044\u308D\u4E0D\u6B63\u78BA\u304B\u3082\uFF0E"),ns=m(),_l=p("h3"),Le=o("1. \u4F5C\u696D\u7528PC\u306Bk0sctl\u3092\u5165\u308C\u308B"),us=m(),y=p("p"),he=o("\u5B9F\u969B\u306B\u3084\u308B\u3068\u304D\u306Fgithub("),q=p("a"),ye=o("k0sproject/k0sctl"),De=o(")\u3092\u53C2\u7167\u306E\u3053\u3068\uFF0E"),_s=m(),vl=p("p"),Te=o("\u73FE\u72B6\uFF0Cgo\u304C\u52D5\u304F\u74B0\u5883\u3067"),vs=m(),Z=p("pre"),cs=m(),cl=p("p"),Ce=o("\u3068\u3059\u308B\u3068\u3088\u3044(\u3089\u3057\u3044)\uFF0E"),Es=m(),El=p("h3"),Re=o("2. \u8A2D\u5B9A\u3059\u308B"),ks=m(),kl=p("p"),Se=o("\u3053\u3053\u304B\u3089\u306F\u30E9\u30BA\u30D1\u30A4(\u30DE\u30B9\u30BF\u30FC\u30CE\u30FC\u30C9\u3092\u542B\u3080)\u3067\u306F\u306A\u304F\uFF0C\u4F5C\u696D\u7528\u306E\u74B0\u5883\u3067\u5B9F\u884C\u3059\u308B\uFF0E"),ds=m(),D=p("p"),Ae=o("\u5B9F\u969B\u306B\u3084\u308B\u3068\u304D\u306F"),B=p("a"),Oe=o("docs.k0sproject.io"),$e=o("\u3092\u53C2\u7167\uFF0E"),xs=m(),K=p("pre"),Ps=m(),dl=p("p"),je=o(`\u3067k0sctl\u306E\u8A2D\u5B9A\u306E\u96DB\u5F62\u304C\u5410\u304B\u308C\u308B\u306E\u3067\uFF0C\u3053\u308C\u3092\u7DE8\u96C6\u3059\u308B\uFF0E
\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306Fk0s\u306E\u30CE\u30FC\u30C9\u6BCE\u306E\u8A2D\u5B9A\u3068\u306F\u5225\u7269\u306A\u306E\u3067\u6CE8\u610F\uFF0E`),ws=m(),xl=p("p"),Ne=o("\u3067\u304D\u305F\u3089\u5B9F\u6A5F\u306B\u30C7\u30D7\u30ED\u30A4\u3059\u308B\uFF0E"),bs=m(),U=p("pre"),Hs=m(),Pl=p("p"),ze=o("\u3057\u3070\u3089\u304F(\u30D7\u30ED\u30F3\u30D7\u30C8\u304C\u5E30\u3063\u3066\u304F\u308B\u307E\u3067)\u5F85\u3064\uFF0E"),Ms=m(),T=p("p"),Ie=o(`\u7D42\u308F\u3063\u305F\u3089kubeconfig\u3092\u5410\u304B\u305B\u308B\uFF0E
\u3053\u308C\u306B\u3088\u3063\u3066`),Sl=p("code"),qe=o("kubectl"),Ze=o("\u304C\u4F7F\u3048\u305F\u308A\u3059\u308B\uFF0E"),Ls=m(),X=p("pre"),hs=m(),wl=p("h2"),Be=o("\u86C7\u8DB3"),ys=m(),bl=p("p"),Ke=o("\u30CE\u30FC\u30C9\u3092\u5168\u3066\u30E9\u30BA\u30D1\u30A4\u3067\u69CB\u7BC9\u3057\u305F\u5834\u5408\uFF0Ck0sctl apply\u3067\u305D\u3053\u305D\u3053\u6642\u9593\u304C\u304B\u304B\u3063\u305F\uFF0E"),this.h()},l(l){u=f(l,"H1",{});var e=i(u);k=r(e,"\u30E9\u30BA\u30D1\u30A4\u3067k0s\u30AF\u30E9\u30B9\u30BF\u69CB\u7BC9"),e.forEach(s),d=n(l),x=f(l,"P",{});var Ge=i(x);_=r(Ge,"\u3084\u3063\u305F\u306E\u3067\u30E1\u30E2\uFF0E"),Ge.forEach(s),E=n(l),w=f(l,"H2",{});var Je=i(w);$s=r(Je,"\u30E9\u30BA\u30D1\u30A4\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7"),Je.forEach(s),Al=n(l),G=f(l,"P",{});var Qe=i(G);js=r(Qe,"\u81EA\u52D5\u5316\u3063\u3066\u4F55"),Qe.forEach(s),Ol=n(l),H=f(l,"P",{});var Ds=i(H);Ns=r(Ds,"\u307E\u305A\uFF0CSD\u30AB\u30FC\u30C9\u3092\u7528\u610F\u3057\uFF0C"),C=f(Ds,"A",{href:!0,rel:!0});var Ve=i(C);zs=r(Ve,"raspi.debian.net"),Ve.forEach(s),Is=r(Ds,`\u304B\u3089\u9069\u5207\u306A\u30A4\u30E1\u30FC\u30B8\u306Exz\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B\uFF0E
\u3053\u3053\u3067\u306F11(bullseye)\u3092\u4F7F\u7528\u3059\u308B\uFF0E`),Ds.forEach(s),$l=n(l),P=f(l,"H3",{});var Hl=i(P);qs=r(Hl,"1. \u30A4\u30E1\u30FC\u30B8\u3092SD\u30AB\u30FC\u30C9(/dev/sd"),J=f(Hl,"SPAN",{class:!0});var Wt=i(J);Wt.forEach(s),Zs=r(Hl,")\u306B\u713C\u304F\u30FB"),Q=f(Hl,"SPAN",{class:!0});var Yt=i(Q);Yt.forEach(s),Bs=r(Hl,"\u306E\u30DE\u30A6\u30F3\u30C8"),Hl.forEach(s),jl=n(l),R=f(l,"PRE",{class:!0});var gt=i(R);gt.forEach(s),Nl=n(l),V=f(l,"H3",{});var We=i(V);Ks=r(We,"2. \u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u8A2D\u5B9A"),We.forEach(s),zl=n(l),W=f(l,"P",{});var Ye=i(W);Us=r(Ye,"\u6CE8\u610F\u3057\u3066\u9069\u5B9C\u8AAD\u307F\u66FF\u3048\u308B\u3053\u3068\uFF0E"),Ye.forEach(s),Il=n(l),Y=f(l,"P",{});var ge=i(Y);Xs=r(ge,"\u307E\u305A\uFF0CIP\u3092\u56FA\u5B9A\u3059\u308B\uFF0E"),ge.forEach(s),ql=n(l),c=f(l,"P",{});var b=i(c);Ml=f(b,"CODE",{});var lt=i(Ml);Fs=r(lt,"/mnt/etc/network/interfadces.d/eth0"),lt.forEach(s),Gs=r(b,"\u306E"),Ll=f(b,"CODE",{});var st=i(Ll);Js=r(st,"inet"),st.forEach(s),Qs=r(b,"\u3092"),hl=f(b,"CODE",{});var et=i(hl);Vs=r(et,"auto"),et.forEach(s),Ws=r(b,"\u304B\u3089"),yl=f(b,"CODE",{});var tt=i(yl);Ys=r(tt,"static"),tt.forEach(s),gs=r(b,"\u306B\u5909\u66F4\u3059\u308B :"),b.forEach(s),Zl=n(l),S=f(l,"PRE",{class:!0});var la=i(S);la.forEach(s),Bl=n(l),M=f(l,"P",{});var Ts=i(M);le=r(Ts,"\u7121\u7DDA\u63A5\u7D9A\u3092\u8003\u3048\u3066\u3044\u308B\u306E\u3067\u3042\u308C\u3070"),Dl=f(Ts,"CODE",{});var at=i(Dl);se=r(at,"wpa_supplicant.conf"),at.forEach(s),ee=r(Ts,"\u3092\u7528\u610F\u3059\u308C\u3070\u3088\u3055\u3052\uFF0E"),Ts.forEach(s),Kl=n(l),g=f(l,"P",{});var pt=i(g);te=r(pt,`\u6B21\u306B\uFF0Cresolv.conf\u3092\u7F6E\u304F\uFF0E
raspbian\u3068\u304B\u3092\u4F7F\u3063\u3066\u308B\u306A\u3089\u5FC5\u8981\u7121\u3044\u304B\u3082\uFF0E`),pt.forEach(s),Ul=n(l),A=f(l,"P",{});var Ue=i(A);Tl=f(Ue,"CODE",{});var ft=i(Tl);ae=r(ft,"/mnt/etc/resolv.conf"),ft.forEach(s),pe=r(Ue,"\u3092\u6B21\u306E\u3088\u3046\u306B\u3059\u308B :"),Ue.forEach(s),Xl=n(l),O=f(l,"PRE",{class:!0});var sa=i(O);sa.forEach(s),Fl=n(l),ll=f(l,"P",{});var it=i(ll);fe=r(it,`\u6700\u5F8C\u306B\uFF0Chostname\u3092\u8A2D\u5B9A\u3059\u308B\uFF0E
\u3053\u308C\u306F\u30B7\u30A7\u30EB\u3067\u64CD\u4F5C\u3059\u308B\u6642\u306B\u308F\u304B\u308A\u3084\u3059\u304F\u3059\u308B\u305F\u3081\uFF0E`),it.forEach(s),Gl=n(l),$=f(l,"P",{});var Xe=i($);Cl=f(Xe,"CODE",{});var ot=i(Cl);ie=r(ot,"/mnt/etc/hostname"),ot.forEach(s),oe=r(Xe,"\u3092\u7DE8\u96C6\u3059\u308B\uFF0E"),Xe.forEach(s),Jl=n(l),sl=f(l,"H3",{});var rt=i(sl);re=r(rt,"3. ssh\u306E\u8A2D\u5B9A"),rt.forEach(s),Ql=n(l),el=f(l,"P",{});var mt=i(el);me=r(mt,"\u4ECA\u56DE\u306Froot\u3067\u3082ssh\u304C\u4F7F\u3048\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3057\u3066\u3044\u304F\uFF0E"),mt.forEach(s),Vl=n(l),L=f(l,"P",{});var Cs=i(L);ne=r(Cs,"\u307E\u305A\uFF0C"),Rl=f(Cs,"CODE",{});var nt=i(Rl);ue=r(nt,"/mnt/etc/ssh/sshd_config"),nt.forEach(s),_e=r(Cs,"\u3092\u7DE8\u96C6\u3059\u308B :"),Cs.forEach(s),Wl=n(l),j=f(l,"PRE",{class:!0});var ea=i(j);ea.forEach(s),Yl=n(l),tl=f(l,"P",{});var ut=i(tl);ve=r(ut,`\u6B21\u306B\uFF0C\u516C\u958B\u9375\u3092\u767B\u9332\u3059\u308B\uFF0E
\u9375\u306E\u4F5C\u6210\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u5404\u81EAgg\u308B\u3053\u3068\uFF0E`),ut.forEach(s),gl=n(l),N=f(l,"PRE",{class:!0});var ta=i(N);ta.forEach(s),ls=n(l),al=f(l,"H3",{});var _t=i(al);ce=r(_t,"4. sshd\u3092\u6709\u52B9\u5316\u3059\u308B"),_t.forEach(s),ss=n(l),h=f(l,"P",{});var Rs=i(h);Ee=r(Rs,"\u6700\u521D\u306B"),pl=f(Rs,"SPAN",{class:!0});var aa=i(pl);aa.forEach(s),ke=r(Rs,"\u3092\u30A2\u30F3\u30DE\u30A6\u30F3\u30C8\u3057\u3066\u3044\u308B\uFF0E"),Rs.forEach(s),es=n(l),z=f(l,"PRE",{class:!0});var pa=i(z);pa.forEach(s),ts=n(l),fl=f(l,"P",{});var vt=i(fl);de=r(vt,`\u3053\u308C\u3067\uFF0C\u3082\u3046\u3053\u306ESD\u30AB\u30FC\u30C9\u306B\u3057\u304C\u3089\u307F\u306F\u5B58\u5728\u3057\u306A\u3044\uFF0E
PC\u304B\u3089\u3076\u3063\u3053\u629C\u304F\uFF0E`),vt.forEach(s),as=n(l),il=f(l,"H3",{});var ct=i(il);xe=r(ct,"5. \u8D77\u52D5\u30FB\u63A5\u7D9A"),ct.forEach(s),ps=n(l),ol=f(l,"P",{});var Et=i(ol);Pe=r(Et,`\u30E9\u30BA\u30D1\u30A4\u306E\u30ED\u30FC\u30AB\u30EBIP\u3092\u56FA\u5B9A\u3057sshd\u3092\u6709\u52B9\u5316\u3057\u305F\u306E\u3067\uFF0C(\u3068\u304F\u306B\u30C8\u30E9\u30D6\u3089\u306A\u3044\u9650\u308A)\u5B8C\u5168\u306B\u30D8\u30C3\u30C9\u30EC\u30B9\u904B\u7528\u304C\u53EF\u80FD\uFF0E
\u3068\u3044\u3046\u3053\u3068\u3067SD\u30AB\u30FC\u30C9\u3068LAN\u30B1\u30FC\u30D6\u30EB\u3092\u523A\u3057\u3066\u96FB\u6E90\u3092\u6295\u5165\uFF0E`),Et.forEach(s),fs=n(l),rl=f(l,"P",{});var kt=i(rl);we=r(kt,"\u3057\u3070\u3089\u304F\u5F85\u3063\u3066ping\u304C\u901A\u308B\u3088\u3046\u3067\u3042\u308C\u3070\uFF0Cssh\u3067\u63A5\u7D9A\u3059\u308B\uFF0E"),kt.forEach(s),is=n(l),I=f(l,"PRE",{class:!0});var fa=i(I);fa.forEach(s),os=n(l),ml=f(l,"H2",{});var dt=i(ml);be=r(dt,"\u30AF\u30E9\u30B9\u30BF\u306E\u69CB\u7BC9(k0sctl)"),dt.forEach(s),rs=n(l),nl=f(l,"P",{});var xt=i(nl);He=r(xt,"\u3053\u308C\u3092\u4F7F\u3046\u3068\u697D\u3089\u3057\u3044\uFF0E(\u5B9F\u969B\u697D\u3060\u3063\u305F)"),xt.forEach(s),ms=n(l),ul=f(l,"P",{});var Pt=i(ul);Me=r(Pt,"\u307E\u3060\u5B8C\u5168\u306A\u7406\u89E3\u306B\u81F3\u3063\u3066\u3044\u306A\u3044\u306E\u3067\u3044\u308D\u3044\u308D\u4E0D\u6B63\u78BA\u304B\u3082\uFF0E"),Pt.forEach(s),ns=n(l),_l=f(l,"H3",{});var wt=i(_l);Le=r(wt,"1. \u4F5C\u696D\u7528PC\u306Bk0sctl\u3092\u5165\u308C\u308B"),wt.forEach(s),us=n(l),y=f(l,"P",{});var Ss=i(y);he=r(Ss,"\u5B9F\u969B\u306B\u3084\u308B\u3068\u304D\u306Fgithub("),q=f(Ss,"A",{href:!0,rel:!0});var bt=i(q);ye=r(bt,"k0sproject/k0sctl"),bt.forEach(s),De=r(Ss,")\u3092\u53C2\u7167\u306E\u3053\u3068\uFF0E"),Ss.forEach(s),_s=n(l),vl=f(l,"P",{});var Ht=i(vl);Te=r(Ht,"\u73FE\u72B6\uFF0Cgo\u304C\u52D5\u304F\u74B0\u5883\u3067"),Ht.forEach(s),vs=n(l),Z=f(l,"PRE",{class:!0});var ia=i(Z);ia.forEach(s),cs=n(l),cl=f(l,"P",{});var Mt=i(cl);Ce=r(Mt,"\u3068\u3059\u308B\u3068\u3088\u3044(\u3089\u3057\u3044)\uFF0E"),Mt.forEach(s),Es=n(l),El=f(l,"H3",{});var Lt=i(El);Re=r(Lt,"2. \u8A2D\u5B9A\u3059\u308B"),Lt.forEach(s),ks=n(l),kl=f(l,"P",{});var ht=i(kl);Se=r(ht,"\u3053\u3053\u304B\u3089\u306F\u30E9\u30BA\u30D1\u30A4(\u30DE\u30B9\u30BF\u30FC\u30CE\u30FC\u30C9\u3092\u542B\u3080)\u3067\u306F\u306A\u304F\uFF0C\u4F5C\u696D\u7528\u306E\u74B0\u5883\u3067\u5B9F\u884C\u3059\u308B\uFF0E"),ht.forEach(s),ds=n(l),D=f(l,"P",{});var As=i(D);Ae=r(As,"\u5B9F\u969B\u306B\u3084\u308B\u3068\u304D\u306F"),B=f(As,"A",{href:!0,rel:!0});var yt=i(B);Oe=r(yt,"docs.k0sproject.io"),yt.forEach(s),$e=r(As,"\u3092\u53C2\u7167\uFF0E"),As.forEach(s),xs=n(l),K=f(l,"PRE",{class:!0});var oa=i(K);oa.forEach(s),Ps=n(l),dl=f(l,"P",{});var Dt=i(dl);je=r(Dt,`\u3067k0sctl\u306E\u8A2D\u5B9A\u306E\u96DB\u5F62\u304C\u5410\u304B\u308C\u308B\u306E\u3067\uFF0C\u3053\u308C\u3092\u7DE8\u96C6\u3059\u308B\uFF0E
\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306Fk0s\u306E\u30CE\u30FC\u30C9\u6BCE\u306E\u8A2D\u5B9A\u3068\u306F\u5225\u7269\u306A\u306E\u3067\u6CE8\u610F\uFF0E`),Dt.forEach(s),ws=n(l),xl=f(l,"P",{});var Tt=i(xl);Ne=r(Tt,"\u3067\u304D\u305F\u3089\u5B9F\u6A5F\u306B\u30C7\u30D7\u30ED\u30A4\u3059\u308B\uFF0E"),Tt.forEach(s),bs=n(l),U=f(l,"PRE",{class:!0});var ra=i(U);ra.forEach(s),Hs=n(l),Pl=f(l,"P",{});var Ct=i(Pl);ze=r(Ct,"\u3057\u3070\u3089\u304F(\u30D7\u30ED\u30F3\u30D7\u30C8\u304C\u5E30\u3063\u3066\u304F\u308B\u307E\u3067)\u5F85\u3064\uFF0E"),Ct.forEach(s),Ms=n(l),T=f(l,"P",{});var Os=i(T);Ie=r(Os,`\u7D42\u308F\u3063\u305F\u3089kubeconfig\u3092\u5410\u304B\u305B\u308B\uFF0E
\u3053\u308C\u306B\u3088\u3063\u3066`),Sl=f(Os,"CODE",{});var Rt=i(Sl);qe=r(Rt,"kubectl"),Rt.forEach(s),Ze=r(Os,"\u304C\u4F7F\u3048\u305F\u308A\u3059\u308B\uFF0E"),Os.forEach(s),Ls=n(l),X=f(l,"PRE",{class:!0});var ma=i(X);ma.forEach(s),hs=n(l),wl=f(l,"H2",{});var St=i(wl);Be=r(St,"\u86C7\u8DB3"),St.forEach(s),ys=n(l),bl=f(l,"P",{});var At=i(bl);Ke=r(At,"\u30CE\u30FC\u30C9\u3092\u5168\u3066\u30E9\u30BA\u30D1\u30A4\u3067\u69CB\u7BC9\u3057\u305F\u5834\u5408\uFF0Ck0sctl apply\u3067\u305D\u3053\u305D\u3053\u6642\u9593\u304C\u304B\u304B\u3063\u305F\uFF0E"),At.forEach(s),this.h()},h(){v(C,"href","https://raspi.debian.net/tested-images/"),v(C,"rel","nofollow"),v(J,"class","math math-inline"),v(Q,"class","math math-inline"),v(R,"class","language-undefined"),v(S,"class","language-undefined"),v(O,"class","language-undefined"),v(j,"class","language-diff"),v(N,"class","language-undefined"),v(pl,"class","math math-inline"),v(z,"class","language-undefined"),v(I,"class","language-undefined"),v(q,"href","https://github.com/k0sproject/k0sctl#installation"),v(q,"rel","nofollow"),v(Z,"class","language-undefined"),v(B,"href","https://docs.k0sproject.io/v1.23.3+k0s.1/k0sctl-install/"),v(B,"rel","nofollow"),v(K,"class","language-undefined"),v(U,"class","language-undefined"),v(X,"class","language-undefined")},m(l,e){t(l,u,e),a(u,k),t(l,d,e),t(l,x,e),a(x,_),t(l,E,e),t(l,w,e),a(w,$s),t(l,Al,e),t(l,G,e),a(G,js),t(l,Ol,e),t(l,H,e),a(H,Ns),a(H,C),a(C,zs),a(H,Is),t(l,$l,e),t(l,P,e),a(P,qs),a(P,J),J.innerHTML=Nt,a(P,Zs),a(P,Q),Q.innerHTML=zt,a(P,Bs),t(l,jl,e),t(l,R,e),R.innerHTML=It,t(l,Nl,e),t(l,V,e),a(V,Ks),t(l,zl,e),t(l,W,e),a(W,Us),t(l,Il,e),t(l,Y,e),a(Y,Xs),t(l,ql,e),t(l,c,e),a(c,Ml),a(Ml,Fs),a(c,Gs),a(c,Ll),a(Ll,Js),a(c,Qs),a(c,hl),a(hl,Vs),a(c,Ws),a(c,yl),a(yl,Ys),a(c,gs),t(l,Zl,e),t(l,S,e),S.innerHTML=qt,t(l,Bl,e),t(l,M,e),a(M,le),a(M,Dl),a(Dl,se),a(M,ee),t(l,Kl,e),t(l,g,e),a(g,te),t(l,Ul,e),t(l,A,e),a(A,Tl),a(Tl,ae),a(A,pe),t(l,Xl,e),t(l,O,e),O.innerHTML=Zt,t(l,Fl,e),t(l,ll,e),a(ll,fe),t(l,Gl,e),t(l,$,e),a($,Cl),a(Cl,ie),a($,oe),t(l,Jl,e),t(l,sl,e),a(sl,re),t(l,Ql,e),t(l,el,e),a(el,me),t(l,Vl,e),t(l,L,e),a(L,ne),a(L,Rl),a(Rl,ue),a(L,_e),t(l,Wl,e),t(l,j,e),j.innerHTML=Bt,t(l,Yl,e),t(l,tl,e),a(tl,ve),t(l,gl,e),t(l,N,e),N.innerHTML=Kt,t(l,ls,e),t(l,al,e),a(al,ce),t(l,ss,e),t(l,h,e),a(h,Ee),a(h,pl),pl.innerHTML=Ut,a(h,ke),t(l,es,e),t(l,z,e),z.innerHTML=Xt,t(l,ts,e),t(l,fl,e),a(fl,de),t(l,as,e),t(l,il,e),a(il,xe),t(l,ps,e),t(l,ol,e),a(ol,Pe),t(l,fs,e),t(l,rl,e),a(rl,we),t(l,is,e),t(l,I,e),I.innerHTML=Ft,t(l,os,e),t(l,ml,e),a(ml,be),t(l,rs,e),t(l,nl,e),a(nl,He),t(l,ms,e),t(l,ul,e),a(ul,Me),t(l,ns,e),t(l,_l,e),a(_l,Le),t(l,us,e),t(l,y,e),a(y,he),a(y,q),a(q,ye),a(y,De),t(l,_s,e),t(l,vl,e),a(vl,Te),t(l,vs,e),t(l,Z,e),Z.innerHTML=Gt,t(l,cs,e),t(l,cl,e),a(cl,Ce),t(l,Es,e),t(l,El,e),a(El,Re),t(l,ks,e),t(l,kl,e),a(kl,Se),t(l,ds,e),t(l,D,e),a(D,Ae),a(D,B),a(B,Oe),a(D,$e),t(l,xs,e),t(l,K,e),K.innerHTML=Jt,t(l,Ps,e),t(l,dl,e),a(dl,je),t(l,ws,e),t(l,xl,e),a(xl,Ne),t(l,bs,e),t(l,U,e),U.innerHTML=Qt,t(l,Hs,e),t(l,Pl,e),a(Pl,ze),t(l,Ms,e),t(l,T,e),a(T,Ie),a(T,Sl),a(Sl,qe),a(T,Ze),t(l,Ls,e),t(l,X,e),X.innerHTML=Vt,t(l,hs,e),t(l,wl,e),a(wl,Be),t(l,ys,e),t(l,bl,e),a(bl,Ke)},p:wa,d(l){l&&s(u),l&&s(d),l&&s(x),l&&s(E),l&&s(w),l&&s(Al),l&&s(G),l&&s(Ol),l&&s(H),l&&s($l),l&&s(P),l&&s(jl),l&&s(R),l&&s(Nl),l&&s(V),l&&s(zl),l&&s(W),l&&s(Il),l&&s(Y),l&&s(ql),l&&s(c),l&&s(Zl),l&&s(S),l&&s(Bl),l&&s(M),l&&s(Kl),l&&s(g),l&&s(Ul),l&&s(A),l&&s(Xl),l&&s(O),l&&s(Fl),l&&s(ll),l&&s(Gl),l&&s($),l&&s(Jl),l&&s(sl),l&&s(Ql),l&&s(el),l&&s(Vl),l&&s(L),l&&s(Wl),l&&s(j),l&&s(Yl),l&&s(tl),l&&s(gl),l&&s(N),l&&s(ls),l&&s(al),l&&s(ss),l&&s(h),l&&s(es),l&&s(z),l&&s(ts),l&&s(fl),l&&s(as),l&&s(il),l&&s(ps),l&&s(ol),l&&s(fs),l&&s(rl),l&&s(is),l&&s(I),l&&s(os),l&&s(ml),l&&s(rs),l&&s(nl),l&&s(ms),l&&s(ul),l&&s(ns),l&&s(_l),l&&s(us),l&&s(y),l&&s(_s),l&&s(vl),l&&s(vs),l&&s(Z),l&&s(cs),l&&s(cl),l&&s(Es),l&&s(El),l&&s(ks),l&&s(kl),l&&s(ds),l&&s(D),l&&s(xs),l&&s(K),l&&s(Ps),l&&s(dl),l&&s(ws),l&&s(xl),l&&s(bs),l&&s(U),l&&s(Hs),l&&s(Pl),l&&s(Ms),l&&s(T),l&&s(Ls),l&&s(X),l&&s(hs),l&&s(wl),l&&s(ys),l&&s(bl)}}}function Ma(F){let u,k;const d=[F[0],jt];let x={$$slots:{default:[Ha]},$$scope:{ctx:F}};for(let _=0;_<d.length;_+=1)x=Fe(x,d[_]);return u=new ba({props:x}),{c(){va(u.$$.fragment)},l(_){ca(u.$$.fragment,_)},m(_,E){Ea(u,_,E),k=!0},p(_,[E]){const w=E&1?ka(d,[E&1&&Ot(_[0]),E&0&&Ot(jt)]):{};E&2&&(w.$$scope={dirty:E,ctx:_}),u.$set(w)},i(_){k||(da(u.$$.fragment,_),k=!0)},o(_){xa(u.$$.fragment,_),k=!1},d(_){Pa(u,_)}}}const jt={title:"\u30E9\u30BA\u30D1\u30A4\u3067k0s\u30AF\u30E9\u30B9\u30BF\u69CB\u7BC9",date:"2022-03-08T00:00:00.000Z",dateUpd:"2022-03-10T00:00:00.000Z",author:"\u5C71D"};function La(F,u,k){return F.$$set=d=>{k(0,u=Fe(Fe({},u),$t(d)))},u=$t(u),[u]}class Ca extends na{constructor(u){super(),ua(this,u,La,Ma,_a,{})}}export{Ca as default,jt as metadata};