import{a as d,S as m,i}from"./assets/vendor-BGqwtSVv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="56824350-607ae6fe1baa32f463874c421";function g(o){return d.get(h,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:n,largeImageURL:a,tags:e,likes:t,views:s,comments:p,downloads:f})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img
            src="${n}"
            alt="${e}"
            loading="lazy"
          />
        </a>

        <div class="info">
          <p>
            <b>Likes</b>
            <span>${t}</span>
          </p>

          <p>
            <b>Views</b>
            <span>${s}</span>
          </p>

          <p>
            <b>Comments</b>
            <span>${p}</span>
          </p>

          <p>
            <b>Downloads</b>
            <span>${f}</span>
          </p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function q(){l.classList.remove("hidden")}function v(){l.classList.add("hidden")}const u=document.querySelector(".form");u.addEventListener("submit",w);function w(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();r&&(S(),q(),g(r).then(n=>{if(n.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(n.hits)}).catch(()=>{i.error({message:"Something went wrong. Please try again!",position:"topRight"})}).finally(()=>{v(),u.reset()}))}
//# sourceMappingURL=index.js.map
