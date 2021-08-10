(this["webpackJsonpto-do-energi"]=this["webpackJsonpto-do-energi"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(10),r=n.n(i),o=(n(98),n(31)),s=n(13),l=n(169),d=n(2),j=Object(a.createContext)(),b=function(e){var t=e.children,n=Object(a.useState)([]),c=Object(s.a)(n,2),i=c[0],r=c[1];Object(a.useEffect)((function(){var e=localStorage.getItem("todos");e&&r(JSON.parse(e))}),[]),Object(a.useEffect)((function(){b()}),[i]);var b=function(){localStorage.setItem("todos",JSON.stringify(i))};return Object(d.jsx)(j.Provider,{value:{todos:i,add:function(e){return e.id=Object(l.a)(),r([].concat(Object(o.a)(i),[e])),e},deleteById:function(e){var t=i,n=t.find((function(t){return t.id===e}));if(n){var a=t.indexOf(n);t.splice(a,1)}r(Object(o.a)(t))},getByCategory:function(e){return i.filter((function(t){return t.category.id===e}))},deleteByCategory:function(e){var t=i.filter((function(t){return t.category.id!==e}));return r(Object(o.a)(t)),t}},children:t})},u=Object(a.createContext)(),O=function(e){var t=e.children,n=Object(a.useState)([]),c=Object(s.a)(n,2),i=c[0],r=c[1],b=Object(a.useContext)(j).deleteByCategory;Object(a.useEffect)((function(){var e=localStorage.getItem("categories");e&&r(JSON.parse(e))}),[]),Object(a.useEffect)((function(){O()}),[i]);var O=function(){localStorage.setItem("categories",JSON.stringify(i))};return Object(d.jsx)(u.Provider,{value:{categories:i,add:function(e){e.id=Object(l.a)(),r([].concat(Object(o.a)(i),[e]))},deleteById:function(e){var t=i,n=t.find((function(t){return t.id===e}));if(n){var a=t.indexOf(n);t.splice(a,1),b(e)}r(Object(o.a)(t))}},children:t})},h=n(56),x=n(141),f=n(167),g=n(36),p=n(11),m=n(147),v=n(159),y=n(82),C=n.n(y),S=n(144),w=n(146),B=n(148),k=Object(x.a)((function(){return{cardContent:{minHeight:"5rem",position:"relative",backgroundColor:"#e6ecfa"},deleteBtn:{position:"absolute",top:"-0.1rem",right:"-0.1rem",color:"#82142d"}}})),I=function(e){var t=e.todo,n=e.onDelete,a=k();return Object(d.jsx)(S.a,{variant:"outlined",children:Object(d.jsx)(w.a,{className:a.cardContent,children:Object(d.jsxs)(m.a,{container:!0,spacing:2,children:[Object(d.jsx)(m.a,{xs:2,item:!0,children:Object(d.jsx)(B.a,{color:"primary",children:t.category.icon})}),Object(d.jsx)(m.a,{xs:8,item:!0,children:t.name}),Object(d.jsx)(B.a,{className:a.deleteBtn,onClick:function(){return n()},children:"close"})]})})})},N=n(149),F=n(150),A=n(151),E=n(152),D=n(170),J=n(172),P=n(168),T=n(156),L=n(157),_=n(158),z=function(e){var t=e.open,n=e.handleClose,c=e.onAdd,i=e.categoryId,r=Object(a.useContext)(u).categories,o=Object(p.e)(),l=Object(a.useState)(""),j=Object(s.a)(l,2),b=j[0],O=j[1],h=Object(a.useState)(),x=Object(s.a)(h,2),f=x[0],g=x[1];Object(a.useEffect)((function(){var e=r.find((function(e){return e.id===i}));if(e)g(e);else{o.push("todo")}}),[r,i,o]);return Object(d.jsxs)(N.a,{open:t,onClose:n,"aria-labelledby":"form-dialog-title",children:[r.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(F.a,{id:"form-dialog-title",children:"New Todo"}),Object(d.jsxs)(A.a,{children:[Object(d.jsx)(E.a,{children:Object(d.jsx)(D.a,{variant:"outlined",autoFocus:!0,margin:"dense",id:"name",value:b,onChange:function(e){return O(e.target.value)},label:"Title",type:"text",fullWidth:!0})}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),!i&&Object(d.jsxs)(E.a,{variant:"outlined",fullWidth:!0,children:[Object(d.jsx)(J.a,{id:"icon-label",children:"Category"}),Object(d.jsx)(P.a,{variant:"filled",labelId:"icon-label",onChange:function(e){return g(r[e.target.value])},children:r.map((function(e,t){return Object(d.jsxs)(T.a,{value:t,children:[Object(d.jsx)(B.a,{style:{fontSize:"1rem"},color:"secondary",children:e.icon}),"\xa0",e.name]},t)}))})]})]}),Object(d.jsxs)(L.a,{children:[Object(d.jsx)(_.a,{onClick:n,color:"primary",children:"Cancel"}),Object(d.jsx)(_.a,{disabled:""===b||void 0===f,onClick:function(){""!==b&&f&&(c({name:b,category:f}),O(""),n())},variant:"contained",color:"primary",children:"Add"})]})]}),0===r.length&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(A.a,{id:"form-dialog-title",children:["No category available ",Object(d.jsx)("br",{})," Add category first"]}),Object(d.jsx)(L.a,{children:Object(d.jsx)(_.a,{onClick:n,color:"primary",children:"Cancel"})})]})]})},W=Object(x.a)((function(){return{root:{textAlign:"center"},addButton:{position:"fixed",bottom:"2rem",right:"2rem"}}})),G=function(){var e=Object(p.f)().search,t=W(),n=Object(a.useState)(""),c=Object(s.a)(n,2),i=c[0],r=c[1],l=Object(a.useState)(!1),b=Object(s.a)(l,2),u=b[0],O=b[1],h=Object(a.useState)([]),x=Object(s.a)(h,2),f=x[0],g=x[1],y=Object(a.useContext)(j),S=y.todos,w=y.deleteById,B=y.getByCategory,k=y.add;Object(a.useEffect)((function(){var t=new URLSearchParams(e).get("category");r(t)}),[e]),Object(a.useEffect)((function(){N()}),[i]);var N=function(){if(i){var e=B(i);g(e)}else g(S)};return Object(d.jsxs)("div",{className:t.root,children:[0===f.length&&Object(d.jsx)("span",{children:"Add new todo"}),Object(d.jsx)(m.a,{container:!0,spacing:2,children:f.map((function(e){return Object(d.jsx)(m.a,{item:!0,sm:4,children:Object(d.jsx)(I,{todo:e,onDelete:function(){return function(e){w(e.id),N()}(e)}})},e.id)}))}),Object(d.jsx)(v.a,{onClick:function(){O(!0)},className:t.addButton,color:"primary","aria-label":"add",children:Object(d.jsx)(C.a,{})}),Object(d.jsx)(z,{categoryId:i,open:u,handleClose:function(){O(!1)},onAdd:function(e){return function(e){var t=k(e);g([].concat(Object(o.a)(f),[t]))}(e)}})]})},M=n(29),R=n(161),U=n(163),H=n(46),X=n(173),q=n(164),K=n(155),Q=n(110),V=n(165),Y=n(166),Z=n(4),$=n(162),ee=n(83),te=n.n(ee),ne=n(84),ae=n.n(ne),ce=["add_circle","face","help","note","subject","call_made","event_note","label","send","assignment","label_important"],ie=function(e){var t=e.open,n=e.handleClose,c=Object(a.useContext)(u).add,i=Object(a.useState)(""),r=Object(s.a)(i,2),o=r[0],l=r[1],j=Object(a.useState)(""),b=Object(s.a)(j,2),O=b[0],h=b[1];return Object(d.jsxs)(N.a,{open:t,onClose:n,"aria-labelledby":"form-dialog-title",children:[Object(d.jsx)(F.a,{id:"form-dialog-title",children:"New category"}),Object(d.jsxs)(A.a,{children:[Object(d.jsx)(E.a,{children:Object(d.jsx)(D.a,{variant:"outlined",autoFocus:!0,margin:"dense",id:"name",value:o,onChange:function(e){return l(e.target.value)},label:"Name",type:"text"})}),Object(d.jsxs)(E.a,{variant:"outlined",children:[Object(d.jsx)(J.a,{id:"icon-label",children:"Icon"}),Object(d.jsx)(P.a,{labelId:"icon-label",label:"Icon",onChange:function(e){return h(e.target.value)},children:ce.map((function(e,t){return Object(d.jsx)(T.a,{value:e,children:Object(d.jsx)(B.a,{color:"primary",children:e})},t)}))})]})]}),Object(d.jsxs)(L.a,{children:[Object(d.jsx)(_.a,{onClick:n,color:"primary",children:"Cancel"}),Object(d.jsx)(_.a,{disabled:""===o||""===O,onClick:function(){""!==O&&""!==o&&(c({name:o,icon:O}),l(""),h(""),n())},variant:"contained",color:"primary",children:"Add"})]})]})},re=n(160),oe=function(e){var t=e.open,n=e.handleClose,c=e.category,i=Object(p.e)(),r=Object(a.useContext)(u).deleteById;return Object(d.jsxs)(N.a,{open:t,keepMounted:!0,onClose:n,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(d.jsx)(F.a,{id:"alert-dialog-slide-title",children:"Use Google's location service?"}),Object(d.jsx)(A.a,{children:Object(d.jsxs)(re.a,{id:"alert-dialog-slide-description",children:["Do you want to delete category: ",Object(d.jsx)("strong",{children:null===c||void 0===c?void 0:c.name}),"?"]})}),Object(d.jsxs)(L.a,{children:[Object(d.jsx)(_.a,{onClick:n,variant:"contained",color:"primary",children:"Cancel"}),Object(d.jsx)(_.a,{onClick:function(){c.id&&(r(c.id),n());i.push("todo")},children:"Ok"})]})]})},se=240,le=Object(x.a)((function(e){return{addBtn:{position:"absolute",bottom:0},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:se,width:"calc(100% - ".concat(se,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:se,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:se,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(M.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(h.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)}})),de=function(){var e,t,n=le(),c=Object(a.useContext)(u).categories,i=Object(a.useState)(!1),r=Object(s.a)(i,2),o=r[0],l=r[1],j=Object(a.useState)(),b=Object(s.a)(j,2),O=b[0],h=b[1],x=Object(a.useState)(!1),f=Object(s.a)(x,2),p=f[0],m=f[1],v=Object(a.useState)(!1),y=Object(s.a)(v,2),C=y[0],S=y[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(R.a,{position:"fixed",className:Object(Z.a)(n.appBar,Object(M.a)({},n.appBarShift,p)),children:Object(d.jsxs)($.a,{children:[Object(d.jsx)(U.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return m(!0)},edge:"start",className:Object(Z.a)(n.menuButton,Object(M.a)({},n.hide,p)),children:Object(d.jsx)(te.a,{})}),Object(d.jsx)(H.a,{variant:"h6",noWrap:!0,children:"TO DO"})]})}),Object(d.jsxs)(X.a,{variant:"permanent",className:Object(Z.a)(n.drawer,(e={},Object(M.a)(e,n.drawerOpen,p),Object(M.a)(e,n.drawerClose,!p),e)),classes:{paper:Object(Z.a)((t={},Object(M.a)(t,n.drawerOpen,p),Object(M.a)(t,n.drawerClose,!p),t))},children:[Object(d.jsx)("div",{className:n.toolbar,children:Object(d.jsxs)(U.a,{onClick:function(){return m(!1)},children:[Object(d.jsx)(ae.a,{}),p&&Object(d.jsx)(H.a,{variant:"h6",children:"Categories"})]})}),Object(d.jsx)(q.a,{}),Object(d.jsx)(K.a,{children:c.map((function(e,t){var n=e.name,a=e.icon,c=e.id;return Object(d.jsxs)(Q.a,{button:!0,component:g.b,to:"/todo?category=".concat(c),onDoubleClick:function(){l(!0),h({name:n,icon:a,id:c})},children:[Object(d.jsxs)(V.a,{children:[Object(d.jsx)(B.a,{color:"primary",children:a})," "]}),Object(d.jsx)(Y.a,{primary:n})]},t)}))}),Object(d.jsx)(q.a,{}),Object(d.jsxs)(Q.a,{className:n.addBtn,button:!0,onClick:function(){return S(!0)},children:[Object(d.jsx)(V.a,{children:Object(d.jsx)(B.a,{color:"primary",children:"add"})}),Object(d.jsx)(Y.a,{primary:"Add"})]})]}),Object(d.jsx)(ie,{handleClose:function(){return S(!1)},open:C}),O&&Object(d.jsx)(oe,{category:O,handleClose:function(){return l(!1)},open:o})]})},je=Object(x.a)((function(e){return{root:{display:"flex"},toolbar:Object(h.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}}));function be(){var e=je();return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:e.root,children:Object(d.jsx)(g.a,{children:Object(d.jsxs)(p.a,{path:"/",children:[Object(d.jsx)(f.a,{}),Object(d.jsx)(de,{}),Object(d.jsxs)("main",{className:e.content,children:[Object(d.jsx)("div",{className:e.toolbar}),Object(d.jsx)(G,{})]})]})})})})}function ue(){return Object(d.jsx)("div",{children:Object(d.jsx)(b,{children:Object(d.jsx)(O,{children:Object(d.jsx)(be,{})})})})}var Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(ue,{})}),document.getElementById("root")),Oe()},98:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.31fa7f40.chunk.js.map