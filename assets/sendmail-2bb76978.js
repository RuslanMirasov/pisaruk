(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function u(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(o){if(o.ep)return;o.ep=!0;const r=u(o);fetch(o.href,r)}})();const P=document.querySelector(".preloader");window.addEventListener("load",B);function B(){setTimeout(function(){P.classList.add("is--hidden")},300)}document.addEventListener("DOMContentLoaded",h=>{const a=document.querySelectorAll("[data-animation]"),u=50;let d=0,o=window.innerHeight;window.addEventListener("scroll",()=>{o=window.innerHeight,r()}),window.addEventListener("load",()=>{setTimeout(function(){r()},300)});function r(){a.forEach(n=>{const f=n.dataset.repeat,v=n.dataset.delay,L=n.getBoundingClientRect().top,g=L+n.offsetHeight;v!==void 0?d=v:d=0,g>u&&L<o-u?setTimeout(function(){n.classList.add("animate")},d):f!==void 0&&n.classList.remove("animate")})}});document.addEventListener("DOMContentLoaded",h=>{const a=document.querySelectorAll(".js-film-hover"),u=document.querySelectorAll(".poster");a.forEach(n=>{n.addEventListener("mouseover",r),n.addEventListener("mouseout",d),n.addEventListener("touchstart",r),n.addEventListener("touchend",o)});function d(){u.forEach(n=>{n.classList.remove("active")})}function o(){const n=this.dataset.id;u.forEach(f=>{f.dataset.id!==n&&f.classList.remove("active")})}function r(){const n=this.dataset.id;u.forEach(f=>{f.dataset.id===n?f.classList.add("active"):f.classList.remove("active")})}});document.addEventListener("DOMContentLoaded",h=>{const a=document.querySelectorAll("[data-menu-open]"),u=document.querySelector(".menu-backdrop"),d=document.querySelector(".burger"),o=document.querySelector(".body");a.forEach(n=>{n.addEventListener("click",r)});function r(){u.classList.toggle("is-open"),d.classList.toggle("is-open"),o.classList.toggle("lock")}});new Swiper(".heroSwiper",{effect:"fade",centeredSlides:!0,slidesPerView:"auto",allowTouchMove:!1,loop:!0,speed:2e3,autoplay:{delay:2e3}});document.addEventListener("DOMContentLoaded",h=>{const a=document.querySelectorAll(".form"),u=document.querySelectorAll("input, textarea"),d=document.querySelectorAll(".agree"),o=3,r="Минимум символа!",n="Заполните поле",f="Найдены цифры в имени!",v="Не верный формат E-mail!",L="Не верный формат телефона!",g="Минимальное к-во символов:",_="Максимальное к-во символов:",H=document.querySelectorAll("[data-popup]"),x=document.querySelectorAll("[data-popup-close]"),C=document.querySelectorAll(".modal"),E=document.querySelector(".backdrop"),N=[].filter.call(document.all,t=>getComputedStyle(t).position=="fixed"),b=document.querySelector(".body");let q=window.innerWidth-document.querySelector(".main").offsetWidth,S=["request","Заявка","Отправить заявку","Заполните форму и мы свяжемся <br>с вами в ближайшее время.","Отправить"];window.addEventListener("resize",I);function I(){q=window.innerWidth-document.querySelector(".main").offsetWidth}u.forEach(t=>{let s=t.closest(".label");(t.type==="checkbox"||t.type==="radio")&&(s=t.closest(".fieldset")),t.addEventListener("focus",function(){s.querySelectorAll(".red").forEach(l=>{l.classList.remove("red"),l.closest(".label").querySelector(".label__error")!==null&&(l.closest(".label").querySelector(".label__error").classList.remove("active"),setTimeout(function(){l.closest(".label").querySelector(".label__error").remove()},250))})}),t.addEventListener("blur",function(){this.value!==""&&A(s)===!0&&this.classList.add("valid")})}),d.forEach(t=>{t.addEventListener("change",function(){let s=!0,e=this.closest(".form").querySelectorAll(".agree"),l=e.length,i=0;e.forEach(m=>{m.checked&&i++}),l==i&&(s=!1),this.closest(".form").querySelector("[type=submit]").disabled=s})}),a.forEach(t=>{t.addEventListener("submit",async function(s){if(s.preventDefault(),A(this)!=!1){w("loading");const l=new FormData(this);let i={};l.forEach((c,p)=>i[p]=c);let m=JSON.stringify(i);setTimeout(function(){w("ok"),T(),console.log(m)},1500)}return!1})});function A(t){let s=!0;return t.querySelectorAll("[required]").forEach(e=>{let l=e.parentNode;if(e.value.length===0)i(l,n);else if(e.value.length<o&&e.type!=="number"){let c=r.split(" ");i(l,c[0]+" "+o+" "+c[1])}else e.name=="name"&&/[^A-zА-яЁё\+ ()\-]/.test(e.value)&&i(l,f),e.type=="email"&&!/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(e.value)&&i(l,v),e.type=="tel"&&/[^0-9\+ ()\-]/.test(e.value)&&i(l,L),e.type=="number"&&(e.min&&Number(e.value)<Number(e.min)&&i(l,g+" "+e.min),e.max&&Number(e.value)>Number(e.max)&&i(l,_+" "+e.max));if(e.type=="checkbox"&&!e.checked&&m(),e.type=="radio"&&!e.checked){const c=t.querySelectorAll('[name="'+e.name+'"]');let p=!1;for(let y=0;y<c.length;y++)if(c[y].checked===!0){p=!0;break}p===!1&&m()}function i(c,p){c.querySelectorAll(".label__error").length<1&&(c.insertAdjacentHTML("beforeend",'<div class="label__error">'+p+"</div>"),setTimeout(function(){c.querySelector(".label__error").classList.add("active")},5)),m()}function m(){e.classList.add("red"),s=!1}}),s}function T(){a.forEach(t=>{t.reset(),t.querySelectorAll(".label__error").forEach(s=>{s.classList.remove("active"),setTimeout(function(){s.remove()},250)}),t.querySelectorAll("[required]").forEach(s=>{s.classList.remove("red"),s.classList.remove("valid")}),t.querySelectorAll(".agree").length>0&&(t.querySelector("[type=submit]").disabled=!0)})}H.forEach(t=>{t.addEventListener("click",function(s){s.preventDefault();let e=this.dataset.popup.split("|");w(e[0],e[1],e[2],e[3],e[4])})}),x.forEach(t=>{t.addEventListener("click",O)});function w(t,s,e,l,i){let m=0;if(M(),E.classList.contains("is-hidden")&&(E.classList.remove("is-hidden"),k()),t=="request"){const c=document.querySelector("#request .subject"),p=document.querySelector("#request .popup-title"),y=document.querySelector("#request .popup-subtitle"),D=document.querySelector('#request .button[type="submit"]');c!==null&&(s!=null?document.querySelector("#request .subject").value=s:document.querySelector("#request .subject").value=S[1]),p!==null&&(e!=null?document.querySelector("#request .popup-title").innerHTML=e:document.querySelector("#request .popup-title").innerHTML=S[2]),y!==null&&(l!=null?document.querySelector("#request .popup-subtitle").innerHTML=l:document.querySelector("#request .popup-subtitle").innerHTML=S[3]),D!==null&&(i!=null?document.querySelector('#request .button[type="submit"]').innerHTML=i:document.querySelector('#request .button[type="submit"]').innerHTML=`<span>${S[4]}</span>`)}else if(t=="video"&&s!=""){document.getElementById("loading").classList.remove("is-hidden"),m=1e3;let c=s.split("/");const p=c.length-1,y=`<iframe src='https://player.vimeo.com/video/${c[p]}' frameborder='0' allowfullscreen></iframe>`;document.querySelector(".vimeoIframe").insertAdjacentHTML("beforeend",y)}setTimeout(function(){document.getElementById(t).classList.remove("is-hidden")},m)}function M(){document.querySelector(".vimeoIframe").innerHTML="",C.forEach(t=>{t.classList.add("is-hidden"),setTimeout(function(){t.scrollTo({top:0,left:0,behavior:"auto"})},300)})}function O(){M(),E.classList.add("is-hidden"),setTimeout(function(){k(),T()},300)}function k(){b.classList.toggle("lock"),N.forEach(t=>{t.classList.contains("header")||(b.classList.contains("lock")?(b.style.paddingRight=q+"px",t.style.paddingRight=q+"px"):(b.style.paddingRight="0px",t.style.paddingRight="0px"))})}});