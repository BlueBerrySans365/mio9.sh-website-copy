(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{184:function(t,e,n){var content=n(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("6759f5ab",content,!0,{sourceMap:!1})},189:function(t,e,n){"use strict";var o=n(184);n.n(o).a},190:function(t,e,n){(e=n(48)(!1)).push([t.i,".warning{color:orange}.love{color:plum}",""]),t.exports=e},200:function(t,e,n){"use strict";n.r(e);n(65),n(66),n(82);var o=n(20),r={name:"MainTerm",data:function(){return{terminalLines:[],inputLine:[],excludeInput:["Shift","Control","Alt","CapsLock","Escape","Enter","Backspace"]}},computed:{phrases:function(){return o.a.phrases},outText:function(){return this.phrases[this.getRandomInt(this.phrases.length)]},inputText:function(){return this.inputLine.join("").replace(/(ArrowUp)/g,"↑").replace(/(ArrowDown)/g,"↓").replace(/(ArrowLeft)/g,"←").replace(/(ArrowRight)/g,"→")},refreshes:function(){return parseInt(window.sessionStorage.getItem("refreshes")||0)}},methods:{getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))},addInput:function(t){this.excludeInput.includes(t)||(this.inputLine.push(t),this.checkInput()),"Escape"==t?this.inputLine=[]:"Enter"==t?(this.terminalLines.push("$ "+this.inputText),this.inputLine=[],this.terminalLines.push("Your magic didn't work...?")):"Backspace"==t&&this.inputLine.pop()},checkInput:function(){"→↓↑→→↓→→↑↑↓↓←→←→"==this.inputText?(console.log("ちょっと ↑ にためて下さい。"),this.terminalLines.push("$ "+this.inputText),this.terminalLines.push("ちょっと ↑ にためて下さい。"),this.inputLine=[],window.open("https://www.youtube.com/watch?v=lwT4h6x3UM0","_blank")):"fd↓"==this.inputText||"dive↓"==this.inputText||"↓↓↓↓↓↓↓↓↓↓↓"==this.inputText?(console.log("FREEDOM DIVE↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓"),this.terminalLines.push("$ "+this.inputText),this.inputLine=[],window.open("https://www.youtube.com/watch?v=OI3C9qQlb1U","_blank")):"AMYYYY!!!"==this.inputText||"amyyyy!!!"==this.inputText?(this.terminalLines.push("$ "+this.inputText),this.inputLine=[],window.open("https://www.youtube.com/watch?v=nH_2rssTJtM","_blank")):"daidaidai"==this.inputText||"DAISUKE"==this.inputText.toUpperCase()?(this.terminalLines.push("$ "+this.inputText),this.terminalLines.push("DAISUKE!"),console.log(o.a.daisukeLyrics),this.inputLine=[],window.open("https://www.youtube.com/watch?v=XUV863a1Lok&t=91","_blank")):"I LOVE EMILIA"==this.inputText.toUpperCase()||"FUCKOFF"==this.inputText.toUpperCase()||"FUCK OFF"==this.inputText.toUpperCase()?(console.log("now get outta here"),window.open("https://mio9.sh/now-you-fuck-off","_self")):"109"!=this.inputText&&"M109"!=this.inputText.toUpperCase()&&"M/109"!=this.inputText.toUpperCase()||(this.terminalLines.push("$ "+this.inputText),this.inputLine=[],window.open("https://109.mio9.sh","_blank"))}},mounted:function(){var t=this;window.addEventListener("keyup",(function(e){t.addInput(e.key)})),console.log("🔥 光復香港，三萬thanks!"),console.log("<<願榮光歸香港>>"),console.log(o.a.glory)}},h=(n(189),n(21)),component=Object(h.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("client-only",{attrs:{placeholder:"Loading console..."}},[t.$device.isDesktop?t._e():n("div",{staticClass:"warning"},[t._v("[HOLD UP!] Commmands won't work without a keyboard, plug one in before trying the commands")]),t._v(" "),n("div",{staticStyle:{color:"lime"}},[t._v("-------[!!!]-------")]),t._v(" "),n("div",{staticStyle:{color:"lime"}},[t._v('New album "Re:Light" has released! Check it out @ '),n("a",{attrs:{href:"https://songwhip.com/mio9/relight"}},[t._v("[here]")])]),t._v(" "),n("div",{staticStyle:{color:"lime"}},[t._v("-------------------")]),t._v(" "),n("div",{staticStyle:{color:"red"}},[t._v("🔥 三萬thx ")]),t._v(" "),n("div",{staticStyle:{color:"pink"}},[t._v("💊 Stay inside, stay clean! WASH YOUR HANDS!")]),t._v(" "),n("span",[t._v("$ bash mio9.sh --force --silent")]),t._v(" "),n("div",[t._v("[INFO] Hold up, MiO9 cannot be silenced, good luck")]),t._v(" "),n("div",{attrs:{id:"output"},domProps:{innerHTML:t._s(t.outText)}}),t._v(" "),t.refreshes>=10?n("div",{attrs:{id:"10-refresh"}},[t._v("> How it feels to press F5 10 times?")]):t._e(),t._v(" "),t.refreshes>=20?n("div",{attrs:{id:"20-refresh"}},[t._v("> Serious..? 10 more refreshes?")]):t._e(),t._v(" "),t.refreshes>=40?n("div",{attrs:{id:"40-refresh"}},[t._v("> You did it 40 times already, you can just... click on the word to get a new combination...")]):t._e(),t._v(" "),t._l(t.terminalLines,(function(line){return n("div",{key:line},[t._v(t._s(line))])})),t._v(" "),n("div",[t._v("$ "+t._s(t.inputText))])],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);