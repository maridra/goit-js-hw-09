!function(){var t={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")},n=null;function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}function e(){t.body.style.backgroundColor=o()}t.btnStart.addEventListener("click",(function(){t.body.style.backgroundColor=o(),n=setInterval(e,1e3),t.btnStart.disabled=!0})),t.btnStop.addEventListener("click",(function(){t.btnStart.disabled=!1,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.552948b1.js.map