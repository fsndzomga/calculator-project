(()=>{function e(e,n,t){return"+"==e?function(e,n){return(e=parseFloat(e))+parseFloat(n)}(n,t):"-"==e?function(e,n){return(e=parseFloat(e))-parseFloat(n)}(n,t):"*"==e?function(e,n){return e=parseFloat(e),n=parseFloat(n),console.log(e,n),e*n}(n,t):"/"==e?function(e,n){return(e=parseFloat(e))/parseFloat(n)}(n,t):"No valid operator"}document.querySelectorAll("button").forEach((n=>{n.addEventListener("click",(n=>{const t=document.querySelector(".screen");if("="!==n.currentTarget.innerText&&"CLEAR"!==n.currentTarget.innerText&&(t.innerText+=n.currentTarget.innerText),"CLEAR"===n.currentTarget.innerText&&(t.innerText=""),"="===n.currentTarget.innerText){const n=t.innerText;let r=0,i=0;n.includes("+")&&(r=t.innerText.split("+")[0],i=t.innerText.split("+")[1],t.innerText=String(e("+",r,i))),n.substring(1).includes("-")&&(r=t.innerText.split("-")[0],i=t.innerText.split("-")[1],console.log(r,i),t.innerText=String(e("-",r,i))),n.includes("*")&&(r=t.innerText.split("*")[0],i=t.innerText.split("*")[1],console.log(t.innerText),console.log(r,i),t.innerText=String(e("*",r,i))),n.includes("/")&&(r=t.innerText.split("/")[0],i=t.innerText.split("/")[1],t.innerText=String(e("/",r,i)))}}))}))})();