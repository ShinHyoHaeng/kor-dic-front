(this["webpackJsonpkor-dic-react"]=this["webpackJsonpkor-dic-react"]||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(7),r=n.n(a),o=(n(21),n(8)),i=n(9),l=n(12),d=n(11),u=(n(22),n(40)),j=n(0);var h=function(e){var t=e.seq,n=e.keyword,s=e.link,c=e.hanja,a=e.word_class,r=e.meaning;return Object(j.jsxs)("div",{className:"item move-up",children:[Object(j.jsxs)("div",{className:"word",children:[n,Object(j.jsx)("sup",{children:t}),Object(j.jsx)("p",{className:"hanja",children:c})," ",Object(j.jsxs)("a",{href:s,children:["\uc0c1\uc138 \uc815\ubcf4 ",Object(j.jsx)(u.a,{className:"icon"})]})]}),Object(j.jsxs)("p",{className:"description",children:[Object(j.jsx)("span",{children:a})," ",r]})]})},p=n(4),b=n(3),m=function(e){var t=e.word,n=e.updateText;return Object(j.jsx)("div",{onClick:function(){return n(t)},children:t})},x=function(e){var t,n=function(t){e.updateField("keyword",t,!1),e.updateField("results",[])},s=e.results.results;return console.log(s),s&&(t=s.map((function(e){return Object(j.jsx)(m,{word:e.word,updateText:n})}))),Object(j.jsxs)("div",{className:"col-6 inputArea",children:[Object(j.jsx)("input",{id:"search",className:"form-control",placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694",value:e.keyword||"",onChange:function(t){return e.updateField("keyword",t.target.value)},onKeyPress:function(t){return e.onKeyPress(t)}}),Object(j.jsx)("div",{className:"autocomplete-items ".concat(e.keyword?"active":""),ref:e.textInput,children:t})]})},O=function(e){var t=Object(b.useState)([{id:0,word:"\ud559\uad50"},{id:1,word:"\ud559\uc6d0"},{id:2,word:"\uc18c\uc124"},{id:3,word:"\uc218\ud559"},{id:4,word:"\uc5ed\uc0ac"},{id:5,word:"\uac00\ub2e4"},{id:6,word:"\ub098"},{id:7,word:"\uace0\ub9ac"}]),n=Object(p.a)(t,2),s=n[0],c=(n[1],Object(b.useState)("")),a=Object(p.a)(c,2),r=a[0],o=a[1],i=Object(b.useState)([]),l=Object(p.a)(i,2),d=l[0],u=l[1],h=Object(b.useState)("none"),m=Object(p.a)(h,2),O=m[0],f=m[1],v=Object(b.useRef)(),w=function(e){var t=s.filter((function(t){return!0===g(t.word,e)}));u({results:t})},g=function(e,t){var n=t.length;return e=e.toLowerCase().substring(0,n),""!==t&&e===t.toString().toLowerCase()},y=function(e){return Object(j.jsx)("select",{value:O,name:"select",className:"form-control",id:"select",onChange:function(e){f(e.target.value),console.log(e.target.value)},children:e.options.map((function(t){return Object(j.jsx)("option",{value:t.value,defaultValue:e.defaultValue===t.value,children:t.name},t.value)}))})},N=function(){e.handleInput(r),e.changefilter(O)};return Object(j.jsxs)("div",{className:"searchInner",children:[Object(j.jsx)("div",{className:"col-3 selectArea",children:Object(j.jsx)(y,{options:[{value:"none",name:"\uc804\uccb4"},{value:"word",name:"\ub2e8\uc5b4"},{value:"mean",name:"\uc758\ubbf8"},{value:"wordclass",name:"\ud488\uc0ac"}],defaultValue:"none"})}),Object(j.jsx)(x,{keyword:r,results:d,updateField:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n&&w(t),"keyword"===e&&o(t),"results"===e&&u(t)},onKeyPress:function(e){return function(e){"Enter"===e.key?N():40===e.keyCode?(console.log("1"),v.current.focus()):38===e.keyCode&&(console.log("2"),v.current.focus())}(e)},textInput:v}),Object(j.jsx)("div",{className:"col-3 buttonArea",children:Object(j.jsx)("input",{type:"submit",className:"form-control",id:"submit",value:"\uac80\uc0c9",onClick:function(){return N()}})})]})},f=n(41);var v=function(e){var t=e.exceptionType;return"num"===t?Object(j.jsxs)("div",{className:"exceptionArea",children:[Object(j.jsx)(f.a,{className:"icon"}),Object(j.jsxs)("p",{children:["\uac80\uc0c9\uc5b4\uc5d0 ",Object(j.jsx)("span",{children:"\uc22b\uc790"}),"\uac00 \ub4e4\uc5b4\uc788\uc2b5\ub2c8\ub2e4."]}),Object(j.jsx)("p",{children:"\ub2e4\uc2dc \uac80\uc0c9\ud574\uc8fc\uc138\uc694."})]}):"eng"===t?Object(j.jsxs)("div",{className:"exceptionArea",children:[Object(j.jsx)(f.a,{className:"icon"}),Object(j.jsxs)("p",{children:["\uac80\uc0c9\uc5b4\uc5d0 ",Object(j.jsx)("span",{children:"\uc601\uc5b4"}),"\uac00 \ub4e4\uc5b4\uc788\uc2b5\ub2c8\ub2e4."]}),Object(j.jsx)("p",{children:"\ub2e4\uc2dc \uac80\uc0c9\ud574\uc8fc\uc138\uc694."})]}):Object(j.jsxs)("div",{className:"exceptionArea",children:[Object(j.jsx)(f.a,{className:"icon"}),Object(j.jsxs)("p",{children:["\uac80\uc0c9\uc5b4\uc5d0 ",Object(j.jsx)("span",{children:"\ud2b9\uc218\ubb38\uc790"}),"\uac00 \ub4e4\uc5b4\uc788\uc2b5\ub2c8\ub2e4."]}),Object(j.jsx)("p",{children:"\ub2e4\uc2dc \uac80\uc0c9\ud574\uc8fc\uc138\uc694."})]})},w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),console.log("constructor"),(s=t.call(this,e)).changeName=function(){s.setState({name:"name changed"})},s.handleInput=function(e){/[a-z]/i.test(e)?s.setState({Query:"",isException:!0,exceptionType:"eng"}):/\d/.test(e)?s.setState({Query:"",isException:!0,exceptionType:"num"}):/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(e)?s.setState({Query:"",isException:!0,exceptionType:"str"}):s.setState({Query:e,isException:!1})},s.changefilter=function(e){"none"===e?s.setState({selected:"none"}):"word"===e?s.setState({selected:"word"}):"mean"===e?s.setState({selected:"mean"}):"wordclass"===e&&s.setState({selected:"wordclass"})},s.state={loading:!0,words:[],Query:"",isException:!1,exceptionType:"",selected:"none"},s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("mount"),console.log("-----------------"),fetch("https://dictionary-search-haeng.herokuapp.com/api/words").then((function(e){return e.json()})).then((function(t){console.log(t);var n=t.words;e.setState({loading:!1,words:n})}))}},{key:"componentDidUpdate",value:function(){console.log("update")}},{key:"componentWillUnmount",value:function(){console.log("unmount")}},{key:"render",value:function(){var e,t=this,n=this.state,s=n.loading,c=n.selected,a=n.exceptionType,r=n.isException;return"none"===c?e=this.state.words.filter((function(e){return e.keyword.includes(t.state.Query)||e.meaning.includes(t.state.Query)||e.word_class.includes(t.state.Query)})):"word"===c?e=this.state.words.filter((function(e){return e.keyword.includes(t.state.Query)})):"mean"===c?e=this.state.words.filter((function(e){return e.meaning.includes(t.state.Query)})):"wordclass"===c&&(e=this.state.words.filter((function(e){return e.word_class.includes(t.state.Query)}))),s?Object(j.jsx)("div",{className:"loaderWrapper",children:Object(j.jsx)("div",{className:"loader",children:"loading..."})}):Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("div",{className:"searchArea",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)(O,{handleInput:this.handleInput,changefilter:this.changefilter})})})}),Object(j.jsx)("div",{className:"resultArea",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"resultInner",id:"result",children:r?Object(j.jsx)(v,{exceptionType:a}):e.map((function(e){return Object(j.jsx)(h,{seq:e.seq,keyword:e.keyword,link:e.link,hanja:e.hanja,word_class:e.word_class,meaning:e.meaning},e._id)}))})})})})]})}}]),n}(s.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),g()}},[[28,1,2]]]);
//# sourceMappingURL=main.b62b70d8.chunk.js.map