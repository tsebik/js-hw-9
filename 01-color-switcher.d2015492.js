const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.body;let o=null;t.addEventListener("click",(function e(){o=setInterval((()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e&&(t.disabled=!0)})),e.addEventListener("click",(function e(){clearInterval(o),e&&(t.disabled=!1)}));
//# sourceMappingURL=01-color-switcher.d2015492.js.map
