(this["webpackJsonpreact-otp-box-example"]=this["webpackJsonpreact-otp-box-example"]||[]).push([[0],{10:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);t(10);var r=t(0),o=t.n(r),a=t(4),c=t.n(a);function u(){var e,n,t=(e=["\n  border: none;\n  outline: none;\n  background: #dedede;\n  border-radius: 10px;\n  color: black;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    margin: 0;\n  }\n  -moz-appearance: textfield;\n"],n||(n=e.slice(0)),e.raw=n,e);return u=function(){return t},t}var i=t(5).a.input(u()),l=Object(r.memo)(i),p=Object(r.memo)((function(e){var n=e.autoFocus,t=void 0!==n&&n,a=e.n,c=void 0===a?3:a,u=e.gap,i=void 0===u?"10px":u,p=e.onChange,s=e.inputStyle,f=Object(r.useState)(Array(c).fill("")),d=f[0],m=f[1],b=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=function(e){var n=[].concat(d);if(null!==b.current){var t=b.current.children;if(isNaN(e.key)){if("Backspace"===e.key&&0!==n.length)for(var r=0;r<t.length;r++){var o=t[r];if(""===n[r]){0!==r&&t[r-1].focus();break}if(document.activeElement===o){n[r]="",m(n);break}}}else for(var a=0;a<t.length;a++)if(document.activeElement===t[a]){n[a]=e.key,m(n),a===d.length-1?t[a].focus():t[a+1].focus();break}}};return console.log(d),d.join("").length===c&&p(d.join("")),document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[d]),o.a.createElement("div",{ref:b,style:{width:"100%",display:"flex",justifyContent:"center"}},d.map((function(e,n){return 0===n?o.a.createElement(l,{type:"number",key:n,autoFocus:t,maxLength:1,value:d[n]||"",style:s?s(n):{}}):o.a.createElement(r.Fragment,null,o.a.createElement("div",{style:{width:i}}),o.a.createElement(l,{type:"number",key:n,maxLength:1,value:d[n]||"",style:s?s(n):{}}))})))})),s=(t(19),function(){return o.a.createElement(p,{autoFocus:!0,n:6,onChange:function(e){return console.log(e)},inputStyle:function(e){return console.log(e),e%2?{border:"1px solid red"}:{border:"1px solid green"}},gap:"30px"})});c.a.render(o.a.createElement(s,null),document.getElementById("root"))},9:function(e,n,t){e.exports=t(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.c2ae2aba.chunk.js.map