(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();const L=document.querySelector(".preloader");window.addEventListener("load",q);function q(){setTimeout(function(){L.classList.add("is--hidden")},400)}const E=document.querySelectorAll("[data-menu-open]"),k=document.querySelector(".menu-backdrop"),A=document.querySelector(".burger"),T=document.querySelector(".body");E.forEach(t=>{t.addEventListener("click",w)});function w(){k.classList.toggle("is-open"),A.classList.toggle("is-open"),T.classList.toggle("lock")}new Swiper(".heroSwiper",{effect:"fade",centeredSlides:!0,slidesPerView:"auto",allowTouchMove:!1,loop:!0,speed:2e3,autoplay:{delay:5e3}});const y=document.querySelectorAll(".form"),_=document.querySelectorAll("input, textarea"),M=document.querySelectorAll(".agree"),p=3,x="Минимум символа!",N="Заполните поле",H="Найдены цифры в имени!",I="Не верный формат E-mail!",C="Не верный формат телефона!",z="Минимальное к-во символов:",B="Максимальное к-во символов:",O=document.querySelectorAll("[data-popup]"),P=document.querySelectorAll("[data-popup-close]"),W=document.querySelectorAll(".modal"),d=document.querySelector(".backdrop"),D=[].filter.call(document.all,t=>getComputedStyle(t).position=="fixed"),u=document.querySelector(".body");let f=window.innerWidth-document.querySelector(".main").offsetWidth,a=["request","Заявка","Отправить заявку","Заполните форму и мы свяжемся <br>с вами в ближайшее время.","Отправить"];window.addEventListener("resize",R);function R(){f=window.innerWidth-document.querySelector(".main").offsetWidth}_.forEach(t=>{let l=t.closest(".label");(t.type==="checkbox"||t.type==="radio")&&(l=t.closest(".fieldset")),t.addEventListener("focus",function(){l.querySelectorAll(".red").forEach(r=>{r.classList.remove("red"),r.closest(".label").querySelector(".label__error")!==null&&(r.closest(".label").querySelector(".label__error").classList.remove("active"),setTimeout(function(){r.closest(".label").querySelector(".label__error").remove()},250))})}),t.addEventListener("blur",function(){this.value!==""&&h(l)===!0&&this.classList.add("valid")})});M.forEach(t=>{t.addEventListener("change",function(){let l=!0,e=this.closest(".form").querySelectorAll(".agree"),r=e.length,o=0;e.forEach(n=>{n.checked&&o++}),r==o&&(l=!1),this.closest(".form").querySelector("[type=submit]").disabled=l})});y.forEach(t=>{t.addEventListener("submit",async function(l){if(l.preventDefault(),h(this)!=!1){m("loading");const r=new FormData(this);let o={};r.forEach((s,c)=>o[c]=s);let n=JSON.stringify(o);setTimeout(function(){m("ok"),b(),console.log(n)},1500)}return!1})});function h(t){let l=!0;return t.querySelectorAll("[required]").forEach(e=>{let r=e.parentNode;if(e.value.length===0)o(r,N);else if(e.value.length<p&&e.type!=="number"){let s=x.split(" ");o(r,s[0]+" "+p+" "+s[1])}else e.name=="name"&&/[^A-zА-яЁё\+ ()\-]/.test(e.value)&&o(r,H),e.type=="email"&&!/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(e.value)&&o(r,I),e.type=="tel"&&/[^0-9\+ ()\-]/.test(e.value)&&o(r,C),e.type=="number"&&(e.min&&Number(e.value)<Number(e.min)&&o(r,z+" "+e.min),e.max&&Number(e.value)>Number(e.max)&&o(r,B+" "+e.max));if(e.type=="checkbox"&&!e.checked&&n(),e.type=="radio"&&!e.checked){const s=t.querySelectorAll('[name="'+e.name+'"]');let c=!1;for(let i=0;i<s.length;i++)if(s[i].checked===!0){c=!0;break}c===!1&&n()}function o(s,c){s.querySelectorAll(".label__error").length<1&&(s.insertAdjacentHTML("beforeend",'<div class="label__error">'+c+"</div>"),setTimeout(function(){s.querySelector(".label__error").classList.add("active")},5)),n()}function n(){e.classList.add("red"),l=!1}}),l}function b(){y.forEach(t=>{t.reset(),t.querySelectorAll(".label__error").forEach(l=>{l.classList.remove("active"),setTimeout(function(){l.remove()},250)}),t.querySelectorAll("[required]").forEach(l=>{l.classList.remove("red"),l.classList.remove("valid")}),t.querySelectorAll(".agree").length>0&&(t.querySelector("[type=submit]").disabled=!0)})}O.forEach(t=>{t.addEventListener("click",function(l){l.preventDefault();let e=this.dataset.popup.split("|");m(e[0],e[1],e[2],e[3],e[4])})});P.forEach(t=>{t.addEventListener("click",j)});function m(t,l,e,r,o){let n=0;if(S(),d.classList.contains("is-hidden")&&(d.classList.remove("is-hidden"),g()),t=="request"){const s=document.querySelector("#request .subject"),c=document.querySelector("#request .popup-title"),i=document.querySelector("#request .popup-subtitle"),v=document.querySelector('#request .button[type="submit"]');s!==null&&(l!=null?document.querySelector("#request .subject").value=l:document.querySelector("#request .subject").value=a[1]),c!==null&&(e!=null?document.querySelector("#request .popup-title").innerHTML=e:document.querySelector("#request .popup-title").innerHTML=a[2]),i!==null&&(r!=null?document.querySelector("#request .popup-subtitle").innerHTML=r:document.querySelector("#request .popup-subtitle").innerHTML=a[3]),v!==null&&(o!=null?document.querySelector('#request .button[type="submit"]').innerHTML=o:document.querySelector('#request .button[type="submit"]').innerHTML=a[4])}else if(t=="video"&&l!=""){document.getElementById("loading").classList.remove("is-hidden"),n=1e3;let s=l.split("/");const c=s.length-1,i=`<iframe src='https://player.vimeo.com/video/${s[c]}' frameborder='0' allowfullscreen></iframe>`;document.querySelector(".vimeoIframe").insertAdjacentHTML("beforeend",i)}setTimeout(function(){document.getElementById(t).classList.remove("is-hidden")},n)}function S(){document.querySelector(".vimeoIframe").innerHTML="",W.forEach(t=>{t.classList.add("is-hidden"),setTimeout(function(){t.scrollTo({top:0,left:0,behavior:"auto"})},300)})}function j(){S(),d.classList.add("is-hidden"),setTimeout(function(){g(),b()},300)}function g(){u.classList.toggle("lock"),D.forEach(t=>{u.classList.contains("lock")?(u.style.paddingRight=f+"px",t.style.paddingRight=f+"px"):(u.style.paddingRight="0px",t.style.paddingRight="0px")})}
