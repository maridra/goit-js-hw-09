!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i");function a(e,n){var t=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();var n=e.target.elements.amount.value,t=Number(e.target.elements.delay.value),o=Number(e.target.elements.step.value);!function(e,n,t){for(a(1,e).then((function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),i=2;i<=t;i+=1)a(i,e+=n).then((function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}(t,o,n)}))}();
//# sourceMappingURL=03-promises.be03a52d.js.map
