(this.webpackJsonpchat_app=this.webpackJsonpchat_app||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(7),s=n.n(a),o=(n(13),n(14),n(15),n(8)),i=(n(16),n(0));var u=function(e){var t=Object(c.useState)("unvisited"),n=Object(o.a)(t,2),r=n[0],a=n[1];function s(e){a("unvisited"==e?"blocked":"unvisited")}return Object(i.jsx)("div",{className:"square ".concat(r),onClick:function(){return s(r)},ondragover:function(){return s(r)},id:"".concat(e.row,".").concat(e.col)})},f=n(1),l=n.n(f),d=n(4),v=n(3);var b=function(e){return new Promise((function(t){setTimeout((function(){t("")}),e)}))},p=function(e,t){var n=document.getElementById("".concat(e,".").concat(t));n.classList.remove("unvisited"),n.classList.remove("blocked"),n.classList.add("visited")},x=function(e,t){var n=document.getElementById("".concat(e,".").concat(t));n.classList.remove("unvisited"),n.classList.remove("blocked"),n.classList.remove("visited"),n.classList.add("traced")},h=function(e,t){return!!document.getElementById("".concat(e,".").concat(t))},k=function(e,t){return document.getElementById("".concat(e,".").concat(t)).classList.contains("blocked")};function j(e){return[[e[0],e[1]+1],[e[0],e[1]-1],[e[0]+1,e[1]],[e[0]-1,e[1]]]}var m=function(){var e=Object(v.a)(l.a.mark((function e(t,n,c,r){var a,s,o,i,u,f,v,x,m,O,w;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a={})[t]=0,(s={})[t]=void 0,o=1,i=[t];case 6:if(0==i.length){e.next=54;break}u=[],f=Object(d.a)(i),e.prev=9,f.s();case 11:if((v=f.n()).done){e.next=41;break}x=v.value,m=Object(d.a)(j(x)),e.prev=14,m.s();case 16:if((O=m.n()).done){e.next=31;break}if(w=O.value,void 0!=a[w]||!h(w[0],w[1])||k(w[0],w[1])){e.next=29;break}return a[w]=o,s[w]=x,u.push(w),e.next=24,b(10);case 24:if(p(w[0],w[1]),w[0]!=n[0]||w[1]!=n[1]){e.next=29;break}return console.log("reached",o),g(s,n),e.abrupt("return",o);case 29:e.next=16;break;case 31:e.next=36;break;case 33:e.prev=33,e.t0=e.catch(14),m.e(e.t0);case 36:return e.prev=36,m.f(),e.finish(36);case 39:e.next=11;break;case 41:e.next=46;break;case 43:e.prev=43,e.t1=e.catch(9),f.e(e.t1);case 46:return e.prev=46,f.f(),e.finish(46);case 49:console.log("front:".concat(o).concat(u)),o+=1,i=[].concat(u),e.next=6;break;case 54:case"end":return e.stop()}}),e,null,[[9,43,46,49],[14,33,36,39]])})));return function(t,n,c,r){return e.apply(this,arguments)}}(),g=function(){var e=Object(v.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("tracing",t);case 1:if(!t[n]){e.next=8;break}return e.next=4,b(100);case 4:x(n[0],n[1]),n=t[n],e.next=1;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=m,w=function(){var e=Object(v.a)(l.a.mark((function e(t,n){var c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=Object(d.a)(j(t)),e.prev=1,c.s();case 3:if((r=c.n()).done){e.next=14;break}if(a=r.value,!h(a[0],a[1])){e.next=12;break}if(void 0!=n[a]||k(a[0],a[1])){e.next=12;break}return n[a]=t,e.next=10,b(10);case 10:p(a[0],a[1]),w(a,n);case 12:e.next=3;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),c.e(e.t0);case 19:return e.prev=19,c.f(),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[1,16,19,22]])})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(v.a)(l.a.mark((function e(t,n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={point:[-1,-1]},e.next=3,w(t,c);case 3:return e.next=5,b(1e3);case 5:if(!n){e.next=13;break}return console.log(c[n]),e.next=9,b(100);case 9:x(n[0],n[1]),n=c[n],e.next=5;break;case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var y=function(e){return Object(c.useEffect)((function(){}),[]),Object(i.jsxs)("div",{className:"grid",children:[Object(i.jsxs)("button",{onClick:function(){O([0,0],[e.rows-1,e.cols-1],e.rows,e.cols)},children:[" ","Start sim bfs"]}),Object(i.jsxs)("button",{onClick:function(){L([0,0],[e.rows-1,e.cols-1])},children:[" ","Start sim dfs"]}),function(){for(var t=[],n=0;n<e.rows;n++){for(var c=[],r=0;r<e.cols;r++)c.push(Object(i.jsx)(u,{row:n,col:r,id:"".concat(n,".").concat(r)}));t.push(Object(i.jsx)("div",{className:"gridRow",children:c}))}return t}()]})};function B(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(y,{cols:30,rows:20})})}var C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(B,{})}),document.getElementById("root")),C()}},[[19,1,2]]]);
//# sourceMappingURL=main.d8b7cb8e.chunk.js.map