(this.webpackJsonpEmployee_Directory=this.webpackJsonpEmployee_Directory||[]).push([[0],{51:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),s=r(18),n=r.n(s),o=r(6),u=r.n(o),j=r(19),l=r(22),d=(r(50),r(8),r(5)),b=r(20),i=r(3);function p(e){var t=e.columns,r=e.data,c=Object(b.useTable)({columns:t,data:r}),a=c.getTableProps,s=c.getTableBodyProps,n=c.headerGroups,o=c.rows,u=c.prepareRow;return Object(i.jsxs)("table",Object(d.a)(Object(d.a)({},a()),{},{children:[Object(i.jsx)("thead",{children:n.map((function(e){return Object(i.jsx)("tr",Object(d.a)(Object(d.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(i.jsx)("th",Object(d.a)(Object(d.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(i.jsx)("tbody",Object(d.a)(Object(d.a)({},s()),{},{children:o.map((function(e,t){return u(e),Object(i.jsx)("tr",Object(d.a)(Object(d.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(i.jsx)("td",Object(d.a)(Object(d.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}var O=r(21),m=r.n(O);r(17);var h=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),r=t[0],a=t[1],s=Object(c.useMemo)((function(){return[{Header:"Employees",columns:[{Header:"Picture",accessor:"picture.large",Cell:function(e){var t=e.cell.value;return Object(i.jsx)("img",{src:t,width:60})}},{Header:"First Name",accessor:"name.first"},{Header:"Last name",accessor:"name.last"},{Header:"Email",accessor:"email"},{Header:"Phone Number",accessor:"phone"}]}]}),[]);return Object(c.useEffect)((function(){Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://randomuser.me/api/?results=20");case 2:t=e.sent,console.log(t.data.results),a(t.data.results);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(p,{columns:s,data:r})})};n.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.576054cf.chunk.js.map