!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2)},function(e,t,n){"use strict";var r=n(3),s=(n.n(r),n(4)),__=wp.i18n.__;(0,wp.blocks.registerBlockType)("cgb/block-typing-animation-block",{title:__("Typing Animation"),icon:wp.element.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M5 4v3h5.5v12h3V7H19V4z"}),wp.element.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),category:"common",keywords:[__("animation"),__("typing"),__("typewriter"),__("typing"),__("effect")],description:"A block to simulate typing behaviour",example:{},edit:function(e){return wp.element.createElement(s.a,e)},save:function(){return null},attributes:{element:{type:"string",default:"h2"},strings:{type:"array",default:["Default value","<b>Please</b> <i>override me</i>"]},typeSpeed:{type:"number",default:60},startDelay:{type:"number",default:0},backSpeed:{type:"number",default:40},backDelay:{type:"number",default:700},loop:{type:"boolean",default:!1},loopCount:{type:"number",default:0},smartBackspace:{type:"boolean",default:!0},shuffle:{type:"boolean",default:!1},fadeOut:{type:"boolean",default:!1},showCursor:{type:"boolean",default:!0},cursorChar:{type:"string",default:"|"}},supports:{align:!0}})},function(e,t){},function(e,t,n){"use strict";var r=n(5),s=n(6),o=n(7),i=n(10),a=function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement(i.a,e.attributes),wp.element.createElement(r.a,e),wp.element.createElement(s.a,e),wp.element.createElement(o.a,e))};t.a=a},function(e,t,n){"use strict";var r=wp.components.TextControl,s=function(e){var t=e.attributes,n=e.setAttributes;return e.isSelected?wp.element.createElement("div",{style:{padding:"0.25rem"}},wp.element.createElement(r,{label:"Text to animate",value:t.strings.join("|"),onChange:function(e){return n({strings:e.split("|")})}})):null};t.a=s},function(e,t,n){"use strict";var r=wp.blockEditor.InspectorControls,s=wp.components,o=s.PanelBody,i=s.RangeControl,a=s.ToggleControl,u=function(e){var t=e.attributes,n=e.setAttributes;return wp.element.createElement(r,null,wp.element.createElement(o,{title:"Speed"},wp.element.createElement(i,{label:"Typing speed",value:t.typeSpeed,onChange:function(e){return n({typeSpeed:e})},min:1,max:1e3}),wp.element.createElement(i,{label:"Start delay",value:t.startDelay,onChange:function(e){return n({startDelay:e})},min:0,max:3e3}),wp.element.createElement(i,{label:"Back speed",value:t.backSpeed,onChange:function(e){return n({backSpeed:e})},min:1,max:1e3}),wp.element.createElement(i,{label:"Back delay",value:t.backDelay,onChange:function(e){return n({backDelay:e})},min:0,max:3e3})),wp.element.createElement(o,{title:"Loop"},wp.element.createElement(a,{label:"Loop",help:"Repeats the given sentences",checked:t.loop,onChange:function(e){return n({loop:e})}}),wp.element.createElement(i,{label:"Loop count",help:"Number of loops of the animation (0 is infinite)",value:t.loopCount,onChange:function(e){return n({loopCount:e})},min:0,max:100})),wp.element.createElement(o,{title:"Misc"},wp.element.createElement(a,{label:"Smart backspace",help:"Does not retype the whole word but starts at a common word in the last sentence",checked:t.smartBackspace,onChange:function(e){return n({smartBackspace:e})}}),wp.element.createElement(a,{label:"Shuffle sentences",help:"Randomizes the play order of the given sentences",checked:t.shuffle,onChange:function(e){return n({shuffle:e})}}),wp.element.createElement(a,{label:"Fade out",help:"Word does not type backwards",checked:t.fadeOut,onChange:function(e){return n({fadeOut:e})}}),wp.element.createElement(a,{label:"Show cursor",help:"Shows the typing cursor",checked:t.showCursor,onChange:function(e){return n({showCursor:e})}})))};t.a=u},function(e,t,n){"use strict";var r=n(8),s=wp.blockEditor.BlockControls,o=function(e){var t=e.attributes,n=e.setAttributes;return wp.element.createElement(s,null,wp.element.createElement(r.a,{selectedElement:t.element,onChange:function(e){return n({element:e})}}))};t.a=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),a=n.n(i),u=n(9),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=wp.components.DropdownMenu,p=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"createLevelControl",value:function(e,t,n){var r=e===t;return{icon:wp.element.createElement(u.a,{element:e,__unstableActive:r}),title:""+e,isActive:r,onClick:function(){return n(e)}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.selectedElement,r=t.onChange;return wp.element.createElement(c,{className:"sizeDropdown",icon:wp.element.createElement("div",null,wp.element.createElement(u.a,{element:n})),isCollapsed:!0,label:"Size",controls:["h2","h3","h4","h5","h6","span"].map(function(t){return e.createLevelControl(t,n,r)})})}}]),t}(a.a.Component);t.a=p},function(e,t,n){"use strict";function r(e){var t=e.element,n=e.__unstableActive,r={h1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",h2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",h3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",h4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",h5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",h6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z",span:"M 8.906 12.656 L 8.906 12.656 L 8.906 12.656 Q 8.906 14.009 7.932 14.789 L 7.932 14.789 L 7.932 14.789 Q 6.958 15.568 5.222 15.568 L 5.222 15.568 L 5.222 15.568 Q 3.622 15.568 2.392 14.966 L 2.392 14.966 L 2.392 12.998 L 2.392 12.998 Q 3.403 13.449 4.104 13.633 L 4.104 13.633 L 4.104 13.633 Q 4.805 13.818 5.386 13.818 L 5.386 13.818 L 5.386 13.818 Q 6.083 13.818 6.456 13.551 L 6.456 13.551 L 6.456 13.551 Q 6.828 13.285 6.828 12.758 L 6.828 12.758 L 6.828 12.758 Q 6.828 12.464 6.664 12.235 L 6.664 12.235 L 6.664 12.235 Q 6.5 12.006 6.182 11.794 L 6.182 11.794 L 6.182 11.794 Q 5.864 11.583 4.887 11.118 L 4.887 11.118 L 4.887 11.118 Q 3.971 10.687 3.513 10.291 L 3.513 10.291 L 3.513 10.291 Q 3.055 9.894 2.781 9.368 L 2.781 9.368 L 2.781 9.368 Q 2.508 8.841 2.508 8.137 L 2.508 8.137 L 2.508 8.137 Q 2.508 6.811 3.407 6.052 L 3.407 6.052 L 3.407 6.052 Q 4.306 5.293 5.892 5.293 L 5.892 5.293 L 5.892 5.293 Q 6.671 5.293 7.378 5.478 L 7.378 5.478 L 7.378 5.478 Q 8.086 5.663 8.858 5.998 L 8.858 5.998 L 8.175 7.645 L 8.175 7.645 Q 7.375 7.317 6.852 7.187 L 6.852 7.187 L 6.852 7.187 Q 6.329 7.057 5.823 7.057 L 5.823 7.057 L 5.823 7.057 Q 5.222 7.057 4.9 7.337 L 4.9 7.337 L 4.9 7.337 Q 4.579 7.618 4.579 8.069 L 4.579 8.069 L 4.579 8.069 Q 4.579 8.349 4.709 8.558 L 4.709 8.558 L 4.709 8.558 Q 4.839 8.766 5.123 8.961 L 5.123 8.961 L 5.123 8.961 Q 5.406 9.156 6.466 9.662 L 6.466 9.662 L 6.466 9.662 Q 7.867 10.332 8.387 11.005 L 8.387 11.005 L 8.387 11.005 Q 8.906 11.678 8.906 12.656 Z  M 12.837 7.173 L 12.837 10.14 L 13.534 10.14 L 13.534 10.14 Q 14.512 10.14 14.997 9.754 L 14.997 9.754 L 14.997 9.754 Q 15.482 9.368 15.482 8.629 L 15.482 8.629 L 15.482 8.629 Q 15.482 7.884 15.076 7.529 L 15.076 7.529 L 15.076 7.529 Q 14.669 7.173 13.801 7.173 L 13.801 7.173 L 12.837 7.173 L 12.837 7.173 Z  M 17.622 8.554 L 17.622 8.554 L 17.622 8.554 Q 17.622 10.167 16.614 11.022 L 16.614 11.022 L 16.614 11.022 Q 15.605 11.876 13.746 11.876 L 13.746 11.876 L 12.837 11.876 L 12.837 15.431 L 10.718 15.431 L 10.718 5.437 L 13.91 5.437 L 13.91 5.437 Q 15.729 5.437 16.675 6.22 L 16.675 6.22 L 16.675 6.22 Q 17.622 7.002 17.622 8.554 Z"};return r.hasOwnProperty(t)?wp.element.createElement(i,{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",__unstableActive:n},wp.element.createElement(o,{d:r[t]})):null}t.a=r;var s=wp.components,o=s.Path,i=s.SVG},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),a=n.n(i),u=n(11),l=n.n(u),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),c(t,[{key:"componentDidMount",value:function(){this.typed=new l.a(this.el,this.props)}},{key:"componentDidUpdate",value:function(){this.typed.destroy(),this.typed=new l.a(this.el,this.props)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this,t=this.props.element;return wp.element.createElement(t,null,wp.element.createElement("span",{ref:function(t){return e.el=t},className:"blink-text"}))}}]),t}(a.a.PureComponent);t.a=p},function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=n(3),a=function(){function e(t,n){r(this,e),o.initializer.load(this,n,t),this.begin()}return s(e,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var e=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){e.currentElContent&&0!==e.currentElContent.length?e.backspace(e.currentElContent,e.currentElContent.length):e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)},this.startDelay)}},{key:"typewrite",value:function(e,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),s=1;if(!0===this.pause.status)return void this.setPauseStatus(e,t,!0);this.timeout=setTimeout(function(){t=i.htmlParser.typeHtmlChars(e,t,n);var r=0,o=e.substr(t);if("^"===o.charAt(0)&&/^\^\d+/.test(o)){var a=1;o=/\d+/.exec(o)[0],a+=o.length,r=parseInt(o),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,t)+e.substring(t+a),n.toggleBlinking(!0)}if("`"===o.charAt(0)){for(;"`"!==e.substr(t+s).charAt(0)&&(s++,!(t+s>e.length)););var u=e.substring(0,t),l=e.substring(u.length+1,t+s),c=e.substring(t+s+1);e=u+l+c,s--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),t>=e.length?n.doneTyping(e,t):n.keepTyping(e,t,s),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},r)},r)}},{key:"keepTyping",value:function(e,t,n){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),t+=n;var r=e.substr(0,t);this.replaceText(r),this.typewrite(e,t)}},{key:"doneTyping",value:function(e,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(e,t)},this.backDelay))}},{key:"backspace",value:function(e,t){var n=this;if(!0===this.pause.status)return void this.setPauseStatus(e,t,!0);if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){t=i.htmlParser.backSpaceHtmlChars(e,t,n);var r=e.substr(0,t);if(n.replaceText(r),n.smartBackspace){var s=n.strings[n.arrayPos+1];s&&r===s.substr(0,t)?n.stopNum=t:n.stopNum=0}t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))},r)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(e,t,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=t}},{key:"toggleBlinking",value:function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(e){return Math.round(Math.random()*e/2)+e}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",function(t){e.stop()}),this.el.addEventListener("blur",function(t){e.el.value&&0!==e.el.value.length||e.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),e}();t.default=a,e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),a=function(e){return e&&e.__esModule?e:{default:e}}(i),u=function(){function e(){r(this,e)}return o(e,[{key:"load",value:function(e,t,n){if(e.el="string"===typeof n?document.querySelector(n):n,e.options=s({},a.default,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(e){return e.trim()}),"string"===typeof e.options.stringsElement?e.stringsElement=document.querySelector(e.options.stringsElement):e.stringsElement=e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var r=Array.prototype.slice.apply(e.stringsElement.children),o=r.length;if(o)for(var i=0;i<o;i+=1){var u=r[i];e.strings.push(u.innerHTML.trim())}}e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1;for(var i in e.strings)e.sequence[i]=i;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent}},{key:"appendAnimationCss",value:function(e){if(e.autoInsertCss&&(e.showCursor||e.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var t=document.createElement("style");t.type="text/css",t.setAttribute("data-typed-js-css",!0);var n="";e.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),e.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==t.length&&(t.innerHTML=n,document.body.appendChild(t))}}}]),e}();t.default=u;var l=new u;t.initializer=l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}};t.default=n,e.exports=t.default},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(){n(this,e)}return r(e,[{key:"typeHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var r=e.substr(t).charAt(0);if("<"===r||"&"===r){var s="";for(s="<"===r?">":";";e.substr(t+1).charAt(0)!==s&&!(++t+1>e.length););t++}return t}},{key:"backSpaceHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var r=e.substr(t).charAt(0);if(">"===r||";"===r){var s="";for(s=">"===r?"<":"&";e.substr(t-1).charAt(0)!==s&&!(--t<0););t--}return t}}]),e}();t.default=s;var o=new s;t.htmlParser=o}])})}]);