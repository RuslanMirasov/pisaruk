(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function d(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(o){if(o.ep)return;o.ep=!0;const n=d(o);fetch(o.href,n)}})();const P=document.querySelector(".preloader");window.addEventListener("load",z);function z(){setTimeout(function(){P.classList.add("is--hidden")},300)}document.addEventListener("DOMContentLoaded",b=>{const a=document.querySelector(".body"),d=document.querySelector(".page");if(d&&d.hasChildNodes()){const f=d.children;for(var u=0;u<f.length;++u)f[u].setAttribute("data-animation","")}let o=0,n=window.innerHeight,r=a.offsetHeight;const m=document.querySelectorAll("[data-animation]"),L=50;window.addEventListener("scroll",()=>{n=window.innerHeight,v()}),window.addEventListener("load",()=>{setTimeout(function(){S(),v()},300)}),window.addEventListener("resize",()=>{n=window.innerHeight,S(),v()});function S(){r=a.offsetHeight,r<n?a.style.height=n+"px":a.style.height="auto"}function v(){m.forEach(f=>{const M=f.dataset.repeat,E=f.dataset.delay,q=f.getBoundingClientRect().top,g=q+f.offsetHeight;E!==void 0?o=E:o=0,g>L&&q<n-L?setTimeout(function(){f.classList.add("animate")},o):M!==void 0&&f.classList.remove("animate")})}});document.addEventListener("DOMContentLoaded",b=>{const a=document.querySelectorAll(".js-film-hover"),d=document.querySelectorAll(".poster");a.forEach(r=>{r.addEventListener("mouseover",n),r.addEventListener("mouseout",u),r.addEventListener("touchstart",n),r.addEventListener("touchend",o)});function u(){d.forEach(r=>{r.classList.remove("active")})}function o(){const r=this.dataset.id;d.forEach(m=>{m.dataset.id!==r&&m.classList.remove("active")})}function n(){const r=this.dataset.id;d.forEach(m=>{m.dataset.id===r?m.classList.add("active"):m.classList.remove("active")})}});document.addEventListener("DOMContentLoaded",b=>{const a=document.querySelectorAll("[data-menu-open]"),d=document.querySelector(".menu-backdrop"),u=document.querySelector(".burger"),o=document.querySelector(".body");a.forEach(r=>{r.addEventListener("click",n)});function n(){d.classList.toggle("is-open"),u.classList.toggle("is-open"),o.classList.toggle("lock")}});new Swiper(".heroSwiper",{effect:"fade",centeredSlides:!0,slidesPerView:"auto",allowTouchMove:!1,loop:!0,speed:2e3,autoplay:{delay:2e3}});document.addEventListener("DOMContentLoaded",b=>{const a=document.querySelectorAll(".form"),d=document.querySelectorAll("input, textarea"),u=document.querySelectorAll(".agree"),o=3,n="Минимум символа!",r="Заполните поле",m="Найдены цифры в имени!",L="Не верный формат E-mail!",S="Не верный формат телефона!",v="Минимальное к-во символов:",f="Максимальное к-во символов:",M=document.querySelectorAll("[data-popup]"),E=document.querySelectorAll("[data-popup-close]"),q=document.querySelectorAll(".modal"),g=document.querySelector(".backdrop"),N=[].filter.call(document.all,t=>getComputedStyle(t).position=="fixed"),w=document.querySelector(".body");let T=window.innerWidth-document.querySelector(".main").offsetWidth,A=["request","Заявка","Отправить заявку","Заполните форму и мы свяжемся <br>с вами в ближайшее время.","Отправить"];window.addEventListener("resize",I);function I(){T=window.innerWidth-document.querySelector(".main").offsetWidth}d.forEach(t=>{let s=t.closest(".label");(t.type==="checkbox"||t.type==="radio")&&(s=t.closest(".fieldset")),t.addEventListener("focus",function(){s.querySelectorAll(".red").forEach(l=>{l.classList.remove("red"),l.closest(".label").querySelector(".label__error")!==null&&(l.closest(".label").querySelector(".label__error").classList.remove("active"),setTimeout(function(){l.closest(".label").querySelector(".label__error").remove()},250))})}),t.addEventListener("blur",function(){this.value!==""&&H(s)===!0&&this.classList.add("valid")})}),u.forEach(t=>{t.addEventListener("change",function(){let s=!0,e=this.closest(".form").querySelectorAll(".agree"),l=e.length,i=0;e.forEach(p=>{p.checked&&i++}),l==i&&(s=!1),this.closest(".form").querySelector("[type=submit]").disabled=s})}),a.forEach(t=>{t.addEventListener("submit",async function(s){if(s.preventDefault(),H(this)!=!1){k("loading");const l=new FormData(this);let i={};l.forEach((c,y)=>i[y]=c);let p=JSON.stringify(i);setTimeout(function(){k("ok"),_(),console.log(p)},1500)}return!1})});function H(t){let s=!0;return t.querySelectorAll("[required]").forEach(e=>{let l=e.parentNode;if(e.value.length===0)i(l,r);else if(e.value.length<o&&e.type!=="number"){let c=n.split(" ");i(l,c[0]+" "+o+" "+c[1])}else e.name=="name"&&/[^A-zА-яЁё\+ ()\-]/.test(e.value)&&i(l,m),e.type=="email"&&!/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(e.value)&&i(l,L),e.type=="tel"&&/[^0-9\+ ()\-]/.test(e.value)&&i(l,S),e.type=="number"&&(e.min&&Number(e.value)<Number(e.min)&&i(l,v+" "+e.min),e.max&&Number(e.value)>Number(e.max)&&i(l,f+" "+e.max));if(e.type=="checkbox"&&!e.checked&&p(),e.type=="radio"&&!e.checked){const c=t.querySelectorAll('[name="'+e.name+'"]');let y=!1;for(let h=0;h<c.length;h++)if(c[h].checked===!0){y=!0;break}y===!1&&p()}function i(c,y){c.querySelectorAll(".label__error").length<1&&(c.insertAdjacentHTML("beforeend",'<div class="label__error">'+y+"</div>"),setTimeout(function(){c.querySelector(".label__error").classList.add("active")},5)),p()}function p(){e.classList.add("red"),s=!1}}),s}function _(){a.forEach(t=>{t.reset(),t.querySelectorAll(".label__error").forEach(s=>{s.classList.remove("active"),setTimeout(function(){s.remove()},250)}),t.querySelectorAll("[required]").forEach(s=>{s.classList.remove("red"),s.classList.remove("valid")}),t.querySelectorAll(".agree").length>0&&(t.querySelector("[type=submit]").disabled=!0)})}M.forEach(t=>{t.addEventListener("click",function(s){s.preventDefault();let e=this.dataset.popup.split("|");k(e[0],e[1],e[2],e[3],e[4])})}),E.forEach(t=>{t.addEventListener("click",O)});function k(t,s,e,l,i){let p=0;if(x(),g.classList.contains("is-hidden")&&(g.classList.remove("is-hidden"),C()),t=="request"){const c=document.querySelector("#request .subject"),y=document.querySelector("#request .popup-title"),h=document.querySelector("#request .popup-subtitle"),D=document.querySelector('#request .button[type="submit"]');c!==null&&(s!=null?document.querySelector("#request .subject").value=s:document.querySelector("#request .subject").value=A[1]),y!==null&&(e!=null?document.querySelector("#request .popup-title").innerHTML=e:document.querySelector("#request .popup-title").innerHTML=A[2]),h!==null&&(l!=null?document.querySelector("#request .popup-subtitle").innerHTML=l:document.querySelector("#request .popup-subtitle").innerHTML=A[3]),D!==null&&(i!=null?document.querySelector('#request .button[type="submit"]').innerHTML=i:document.querySelector('#request .button[type="submit"]').innerHTML=`<span>${A[4]}</span>`)}else if(t=="video"&&s!=""){document.getElementById("loading").classList.remove("is-hidden"),p=1e3;let c=s.split("/");const y=c.length-1,h=`<iframe src='https://player.vimeo.com/video/${c[y]}' frameborder='0' allowfullscreen></iframe>`;document.querySelector(".vimeoIframe").insertAdjacentHTML("beforeend",h)}setTimeout(function(){document.getElementById(t).classList.remove("is-hidden")},p)}function x(){document.querySelector(".vimeoIframe").innerHTML="",q.forEach(t=>{t.classList.add("is-hidden"),setTimeout(function(){t.scrollTo({top:0,left:0,behavior:"auto"})},300)})}function O(){x(),g.classList.add("is-hidden"),setTimeout(function(){C(),_()},300)}function C(){w.classList.toggle("lock"),N.forEach(t=>{t.classList.contains("header")||(w.classList.contains("lock")?(w.style.paddingRight=T+"px",t.style.paddingRight=T+"px"):(w.style.paddingRight="0px",t.style.paddingRight="0px"))})}});
