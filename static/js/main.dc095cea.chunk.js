(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{248:function(e,t,a){},249:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),c=a.n(i),s=(a(248),a(31)),o=a(118),j=a(206),d=(a.p,a(249),a(6)),l=a(460),h=a(467),b=a(476),x=a(477),p=a(468),O=a(469),m=a(473),u=a(101),g=a(472),f=a(470),v=a(471),w=a(474),y=a(475),S=a(409),N=a(228),B=a.n(N),C=a(230),M=a.n(C),k=a(229),T=a.n(k),I=a(451),L=a(453),D=a(454),P=a(455),E=a(207),F=a.n(E),A=a(128),H=a.n(A),R=a(3),V=Object(R.jsx)("div",{children:Object(R.jsxs)(I.a,{button:!0,children:[Object(R.jsx)(L.a,{children:Object(R.jsx)(F.a,{})}),Object(R.jsx)(D.a,{primary:"Dashboard"})]})}),z=(P.a,I.a,L.a,H.a,D.a,I.a,L.a,H.a,D.a,I.a,L.a,H.a,D.a,a(70)),G=a(479),J=a(456),K=a(225),U=a(226),W=a(36),X=a(232);function Y(e){return Object(R.jsx)(u.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}function $(e,t){return{time:e,amount:t}}var q=[$("00:00",0),$("03:00",300),$("06:00",600),$("09:00",800),$("12:00",1500),$("15:00",2e3),$("18:00",2400),$("21:00",2400),$("24:00",void 0)];function Q(){var e=Object(z.a)();return Object(R.jsxs)(r.a.Fragment,{children:[Object(R.jsx)(Y,{children:"Today"}),Object(R.jsx)(G.a,{children:Object(R.jsxs)(J.a,{data:q,margin:{top:16,right:16,bottom:0,left:24},children:[Object(R.jsx)(K.a,{dataKey:"time",stroke:e.palette.text.secondary}),Object(R.jsx)(U.a,{stroke:e.palette.text.secondary,children:Object(R.jsx)(W.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary},children:"Sales ($)"})}),Object(R.jsx)(X.a,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1})]})})]})}var Z=a(461);function _(e){e.preventDefault()}var ee=Object(l.a)({depositContext:{flex:1}});function te(){var e=ee();return Object(R.jsxs)(r.a.Fragment,{children:[Object(R.jsx)(Y,{children:"Recent Deposits"}),Object(R.jsx)(u.a,{component:"p",variant:"h4",children:"$3,024.00"}),Object(R.jsx)(u.a,{color:"textSecondary",className:e.depositContext,children:"on 15 March, 2019"}),Object(R.jsx)("div",{children:Object(R.jsx)(Z.a,{color:"primary",href:"#",onClick:_,children:"View balance"})})]})}var ae=a(462),ne=a(466),re=a(465),ie=a(463),ce=a(464);function se(e,t,a,n,r,i){return{id:e,date:t,name:a,shipTo:n,paymentMethod:r,amount:i}}var oe=[se(0,"16 Mar, 2019","BUY","12000","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),se(1,"16 Mar, 2019","SELL","12005","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),se(2,"16 Mar, 2019","SELL","14000","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),se(3,"16 Mar, 2019","BUY","20000","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),se(4,"15 Mar, 2019","SELL","23000","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)];function je(e){e.preventDefault()}var de=Object(l.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function le(){var e=de();return Object(R.jsxs)(r.a.Fragment,{children:[Object(R.jsx)(Y,{children:"\xdaltimas Trades"}),Object(R.jsxs)(ae.a,{size:"small",children:[Object(R.jsx)(ie.a,{children:Object(R.jsxs)(ce.a,{children:[Object(R.jsx)(re.a,{children:"Data"}),Object(R.jsx)(re.a,{children:"Tipo de Ordem"}),Object(R.jsx)(re.a,{children:"Pre\xe7o"}),Object(R.jsx)(re.a,{children:"Payment Method"}),Object(R.jsx)(re.a,{align:"right",children:"Sale Amount"})]})}),Object(R.jsx)(ne.a,{children:oe.map((function(e){return Object(R.jsxs)(ce.a,{children:[Object(R.jsx)(re.a,{children:e.date}),Object(R.jsx)(re.a,{children:e.name}),Object(R.jsx)(re.a,{children:e.shipTo}),Object(R.jsx)(re.a,{children:e.paymentMethod}),Object(R.jsx)(re.a,{align:"right",children:e.amount})]},e.id)}))})]}),Object(R.jsx)("div",{className:e.seeMore,children:Object(R.jsx)(Z.a,{color:"primary",href:"#",onClick:je,children:"See more orders"})})]})}var he=a(227),be=a.n(he),xe=Object(l.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(j.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(o.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function pe(){var e=xe(),t=r.a.useState(!0),a=Object(s.a)(t,2),i=a[0],c=a[1],o=Object(d.a)(e.paper,e.fixedHeight),j=Object(n.useState)(null),l=Object(s.a)(j,2),N=l[0],C=l[1];return Object(n.useEffect)((function(){be.a.get("http://localhost:4000/orders").then((function(e){return C(e.data[0].name)}))}),[]),Object(R.jsxs)("div",{className:e.root,children:[Object(R.jsx)(h.a,{}),Object(R.jsx)(p.a,{position:"absolute",className:Object(d.a)(e.appBar,i&&e.appBarShift),children:Object(R.jsxs)(O.a,{className:e.toolbar,children:[Object(R.jsx)(f.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(d.a)(e.menuButton,i&&e.menuButtonHidden),children:Object(R.jsx)(B.a,{})}),Object(R.jsx)(u.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Dashboard"}),Object(R.jsx)(f.a,{color:"inherit",children:Object(R.jsx)(v.a,{badgeContent:4,color:"secondary",children:Object(R.jsx)(T.a,{})})})]})}),Object(R.jsxs)(b.a,{variant:"permanent",classes:{paper:Object(d.a)(e.drawerPaper,!i&&e.drawerPaperClose)},open:i,children:[Object(R.jsx)("div",{className:e.toolbarIcon,children:Object(R.jsx)(f.a,{onClick:function(){c(!1)},children:Object(R.jsx)(M.a,{})})}),Object(R.jsx)(g.a,{}),Object(R.jsx)(m.a,{children:V}),Object(R.jsx)(g.a,{})]}),Object(R.jsxs)("main",{className:e.content,children:[Object(R.jsx)("div",{className:e.appBarSpacer}),Object(R.jsxs)(w.a,{maxWidth:"lg",className:e.container,children:[Object(R.jsxs)(y.a,{container:!0,spacing:3,children:[Object(R.jsx)(y.a,{item:!0,xs:12,md:8,lg:9,children:Object(R.jsx)(S.a,{className:o,children:Object(R.jsx)(Q,{})})}),Object(R.jsx)(y.a,{item:!0,xs:12,md:4,lg:3,children:Object(R.jsx)(S.a,{className:o,children:Object(R.jsx)(te,{})})}),Object(R.jsx)(y.a,{item:!0,xs:12,children:Object(R.jsxs)(S.a,{className:e.paper,children:[Object(R.jsx)(le,{}),Object(R.jsxs)("div",{className:"card text-center m-3",children:[Object(R.jsx)("h5",{className:"card-header",children:"GET Request with React Hooks"}),Object(R.jsxs)("div",{className:"card-body",children:["Total react packages: ",N]})]})]})})]}),Object(R.jsx)(x.a,{pt:4})]})]})]})}var Oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,481)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};c.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(pe,{})}),document.getElementById("root")),Oe()}},[[406,1,2]]]);
//# sourceMappingURL=main.dc095cea.chunk.js.map