(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(14),n(5)),s=n(2),i=n(1),r=(n(15),n(0));var u=function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Choose Year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilterYear(t.target.value)},children:[Object(r.jsx)("option",{value:"2019",children:"2019"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2022",children:"2022"})]})]})})};n(17);var j=function(e){var t="box "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})};n(18),n(19);var o=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})};var d=function(e){return Object(r.jsxs)(j,{className:"expense-item",children:[Object(r.jsx)(o,{date:e.date}),Object(r.jsx)("div",{className:"expense-item__description",children:Object(r.jsx)("h2",{children:e.title})}),Object(r.jsx)("div",{className:"expense-item__price",children:e.amount})]})};n(20);var b=function(e){return 0===e.items.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(r.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(r.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},x=n(9);n(21);var v=function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t},children:" "})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})};n(22);var O=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(v,{value:e.value,maxValue:n,label:e.label},e.label)}))})};var h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expense);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(r.jsx)(O,{dataPoints:n})};n(23);var m=function(e){var t=Object(i.useState)("2020"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsx)("div",{children:Object(r.jsxs)(j,{className:"expenses",children:[Object(r.jsx)(u,{selected:a,onChangeFilterYear:function(e){c(e),console.log(e)}}),Object(r.jsx)(h,{expense:l}),Object(r.jsx)(b,{items:l})]})})},p=n(7);n(24);var f=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(""),u=Object(s.a)(l,2),j=u[0],o=u[1],d=Object(i.useState)(""),b=Object(s.a)(d,2),x=b[0],v=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:j,date:new Date(x)};e.onSaveData(n),c(""),o(""),v("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control ",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control ",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control  ",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",max:"2023-12-31",value:x,onChange:function(e){v(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{onClick:function(){c(""),o(""),v("")},children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})};n(25);var _=function(e){return Object(r.jsx)("div",{className:"new-expense",children:Object(r.jsx)(f,{onSaveData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)}})})},g=[{id:"e1",title:"Enter Values",amount:0,date:new Date}];var N=function(){var e=Object(i.useState)(g),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)(m,{items:n})]})};c.a.render(Object(r.jsx)(N,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.5e15b739.chunk.js.map