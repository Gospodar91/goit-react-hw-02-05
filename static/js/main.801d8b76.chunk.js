(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[0],{12:function(t,e,n){t.exports=n(17)},17:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),l=n(11),u=n(1),m=n(2),s=n(4),i=n(3),b=n(5),f=n(10),h=n(6),p=n.n(h),d=n(19),g=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleSubmit=function(t){t.preventDefault(),n.props.submitContact({name:n.state.name,number:n.state.number,id:Object(d.a)()}),n.setState({name:"",number:""})},n.handleChange=function(t){n.setState(Object(f.a)({},t.target.name,t.target.value))},n}return Object(b.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",null,c.a.createElement("span",{className:p.a.name},"Name"),c.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:e})),c.a.createElement("div",null,c.a.createElement("span",{className:p.a.name},"Number"),c.a.createElement("input",{type:"tel",name:"number",onChange:this.handleChange,value:n})),c.a.createElement("div",null,c.a.createElement("button",{className:p.a.button,type:"submit"},"ADD contact"))))}}]),e}(a.Component),E=n(7),v=n.n(E),C=function(t){var e=t.contact,n=e.name,a=e.id,r=e.number,o=t.deleteContact;return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",null,c.a.createElement("span",{className:v.a.name},n,", "),c.a.createElement("span",{className:v.a.number},r),c.a.createElement("button",{className:v.a.button,onClick:o,type:"button",id:a},"Delete contact")))},y=function(t){var e=t.contacts,n=t.deleteContact;return console.log("object",n),c.a.createElement("ul",null,e.map((function(t){return c.a.createElement(C,{contact:t,key:t.id,deleteContact:n})})))},O=function(t){var e=t.nameFilter;return c.a.createElement("div",null,c.a.createElement("h2",null,"Find contact by name"),c.a.createElement("input",{type:"text",onChange:e}))},j=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[],filter:""},n.submitContact=function(t){n.state.contacts.some((function(e){return e.name===t.name}))?alert("Write correct name"):n.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[t])}}))},n.deleteContact=function(t){var e=t.target.id;console.log("object",t.target.id),n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n.nameFilter=function(t){n.setState({filter:t.target.value})},n.getFiltered=function(){return n.state.contacts.filter((function(t){return t.name.toLowerCase().includes(n.state.filter)}))},n}return Object(b.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=JSON.parse(null!==localStorage.getItem("contacts"))?JSON.parse(localStorage.getItem("contacts")):[];this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{submitContact:this.submitContact}),c.a.createElement(y,{contacts:this.getFiltered(),deleteContact:this.deleteContact}),this.state.contacts.length>2&&c.a.createElement(O,{nameFilter:this.nameFilter}))}}]),e}(a.Component);o.a.render(c.a.createElement(j,null),document.getElementById("root"))},6:function(t,e,n){t.exports={name:"ContactForm_name__2rzkT",button:"ContactForm_button__3iiR6"}},7:function(t,e,n){t.exports={button:"ContactItem_button__322lA",name:"ContactItem_name__2AK45"}}},[[12,1,2]]]);
//# sourceMappingURL=main.801d8b76.chunk.js.map