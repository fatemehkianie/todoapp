(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(16),r=a(7),o=a(9),m=a(13),s=a(17),d=a.n(s),i=Object(n.createContext)({todos:[],todo:"",handleCreateNewTodo:function(){},handleTodoInput:function(){},handleCompletedTodo:function(){},handleDeleteTodo:function(){}}),u=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(""),u=Object(m.a)(s,2),p=u[0],E=u[1];return c.a.createElement(i.Provider,{value:{todos:l,todo:p,handleCreateNewTodo:function(){var e=Object(o.a)(l),t={id:d()(),text:p,completed:!1};""!==p&&" "!==p&&(e.push(t),r(e),E(""))},handleTodoInput:function(e){E(e.target.value)},handleCompletedTodo:function(e){var t=Object(o.a)(l),a=t.findIndex((function(t){return t.id===e})),n=t[a];n.completed=!n.completed,t[a]=n,r(t)},handleDeleteTodo:function(e){var t=Object(o.a)(l).filter((function(t){return t.id!==e}));r(t)}}},e.children)},p=a(5),E=function(e){var t=e.text,a=e.isCompleted,l=e.deleted,r=e.completed;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"todo-indicator ".concat(a?"bg-success":"bg-warning")}),c.a.createElement("div",{className:"widget-content p-0"},c.a.createElement("div",{className:"widget-content-wrapper"},c.a.createElement("div",{className:"widget-content-right flex1"},c.a.createElement("div",{className:"widget-heading"},a?c.a.createElement("del",null,t):t)),c.a.createElement("div",{className:"widget-content-left"}," ",c.a.createElement("button",{className:"border-0 btn-transition btn btn-outline-success",onClick:r}," ",c.a.createElement("i",{className:"fa fa-check"}))," ",c.a.createElement("button",{className:"border-0 btn-transition btn btn-outline-danger",onClick:l}," ",c.a.createElement("i",{className:"fa fa-trash"})," ")," "))))},f=function(){var e=Object(n.useContext)(i),t=e.todos,a=e.handleDeleteTodo,l=e.handleCompletedTodo;return c.a.createElement("ul",{className:"list-group list-group-flush"},t.length>0?t.map((function(e){return c.a.createElement("li",{key:e.id,className:"list-group-item"},c.a.createElement(E,{text:e.text,isCompleted:e.completed,deleted:function(){return a(e.id)},completed:function(){return l(e.id)}}))})):c.a.createElement("div",{className:"alert alert-light mt-3 w-75 mx-auto"},c.a.createElement("p",{className:"text-center"},"\u0647\u06cc\u0686 \u06a9\u0627\u0631\u06cc \u0628\u0631\u0627\u06cc \u0627\u0645\u0631\u0648\u0632 \u062b\u0628\u062a \u0646\u0634\u062f\u0647 \u062f\u0648\u0633\u062a \u0645\u0646")))},v=function(){var e=Object(n.useContext)(i);return c.a.createElement("div",{className:"w-50 mx-auto fixed-bottom mb-5 p-3 wrapper"},c.a.createElement("form",{className:"form-inline justify-content-center",onSubmit:function(e){return e.preventDefault()}},c.a.createElement("div",{className:"input-group w-100"},c.a.createElement("input",{type:"text",className:"form-control rounded",placeholder:"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0631 \u062c\u062f\u06cc\u062f",value:e.todo,onChange:e.handleTodoInput}),c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("button",{type:"submit",className:"btn btn-sm bg-transparent fa fa-plus-square text-light",onClick:e.handleCreateNewTodo})))))},b=function(e){var t=e.teachersName;return c.a.createElement("div",{className:"card text-center"},c.a.createElement("div",{className:"card-header"},"\u062f\u0631\u0628\u0627\u0631\u0647 \u0633\u0627\u0632\u0646\u062f\u0647"),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},"\u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0641\u0627\u0631\u063a \u0627\u0644\u062a\u062d\u0635\u06cc\u0644 \u0645\u0647\u0646\u062f\u0633\u06cc \u06a9\u0627\u0645\u067e\u06cc\u0648\u062a\u0631 \u0628\u0627 \u0645\u062f\u0631\u06a9 \u0644\u06cc\u0633\u0627\u0646\u0633 \u0648 \u0641\u0648\u0642 \u0644\u06cc\u0633\u0627\u0646\u0633\u060c \u067e\u0627\u06cc\u0647 \u0642\u0648\u06cc \u062f\u0631 \u062a\u0648\u0633\u0639\u0647 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 \u0648 \u0647\u0645\u0686\u0645\u06cc\u0646 \u0639\u0644\u0627\u0642\u0647 \u062e\u0627\u0635\u06cc \u0628\u0647 \u062a\u0648\u0633\u0639\u0647 FrontEnd \u062f\u0627\u0631\u0645. \u0645\u0646 \u0632\u0645\u0627\u0646 \u0642\u0627\u0628\u0644 \u062a\u0648\u062c\u0647\u06cc \u0631\u0627 \u0635\u0631\u0641 \u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u0648 \u062a\u0642\u0648\u06cc\u062a \u0645\u0647\u0627\u0631\u062a \u0647\u0627\u06cc \u062e\u0648\u062f \u062f\u0631 HTML\u060c CSS\u060c \u062c\u0627\u0648\u0627 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u060c React.js\u060c  Git\u060c Sass \u0648 \u0633\u0627\u06cc\u0631 \u0641\u0646\u0627\u0648\u0631\u06cc \u0647\u0627\u06cc \u06a9\u0644\u06cc\u062f\u06cc FrontEnd \u06a9\u0631\u062f\u0647 \u0627\u0645. \u0627\u06af\u0631\u0686\u0647 \u0647\u0646\u0648\u0632 \u0627\u06cc\u0646 \u0645\u0647\u0627\u0631\u062a \u0647\u0627 \u0631\u0627 \u062f\u0631 \u06cc\u06a9 \u067e\u0631\u0648\u0698\u0647 \u062d\u0631\u0641\u0647 \u0627\u06cc \u0628\u0647 \u06a9\u0627\u0631 \u0646\u0628\u0631\u062f\u0647 \u0627\u0645\u060c \u0627\u0645\u0627 \u0628\u0647 \u062a\u0648\u0627\u0646\u0627\u06cc\u06cc \u0647\u0627\u06cc \u062e\u0648\u062f \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u062f\u0627\u0631\u0645 \u0648 \u0645\u0634\u062a\u0627\u0642 \u0634\u0631\u0648\u0639 \u06a9\u0627\u0631 \u0622\u0632\u0627\u062f \u0647\u0633\u062a\u0645. \u0645\u0646 \u0641\u0639\u0627\u0644\u0627\u0646\u0647 \u0628\u0647 \u062f\u0646\u0628\u0627\u0644 \u0641\u0631\u0635\u062a \u0647\u0627\u06cc\u06cc \u0647\u0633\u062a\u0645 \u06a9\u0647 \u0628\u062a\u0648\u0627\u0646\u0645 \u0627\u0632 \u0645\u0647\u0627\u0631\u062a \u0647\u0627\u06cc \u062e\u0648\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u0645 \u0648 \u062f\u0631 \u067e\u0631\u0648\u0698\u0647 \u0647\u0627\u06cc \u0645\u0639\u0646\u0627\u062f\u0627\u0631 \u0645\u0634\u0627\u0631\u06a9\u062a \u06a9\u0646\u0645."),c.a.createElement("p",{className:"card-text"}," ",t),c.a.createElement("a",{href:"https://toplearn.com/courses/2208/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AC%D8%A7%D9%85%D8%B9-react-js",className:"btn btn-primary"},"\u0631\u0632\u0648\u0645\u0647 \u0645\u0646")),c.a.createElement("div",{className:"card-footer text-muted"}))},N=Object(p.f)((function(e){return console.log(e),c.a.createElement("div",{className:"m-3"},c.a.createElement("ul",{className:"nav nav-pills justify-content-center"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{to:"/",className:"nav-link",exact:!0,activeClassName:"active",activeStyle:{color:"aqua"}},"\u06a9\u0627\u0631\u0647\u0627\u06cc \u0631\u0648\u0632\u0645\u0631\u0647")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{to:"/about",className:"nav-link",activeStyle:{color:"aqua"}},"\u062f\u0631\u0628\u0627\u0631\u0647 \u0633\u0627\u0632\u0646\u062f\u0647"))))})),h=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(N,null),c.a.createElement("div",{className:"d-flex justify-content-center container"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",{className:"card-hover-shadow-2x mb-3 card"},c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/",exact:!0,component:f}),c.a.createElement(p.a,{path:"/about",render:function(){return c.a.createElement(b,{teachersName:" "})}}))))),c.a.createElement(v,null))};Object(l.render)(c.a.createElement(u,null,c.a.createElement(r.a,null,c.a.createElement(h,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6e903d0d.chunk.js.map