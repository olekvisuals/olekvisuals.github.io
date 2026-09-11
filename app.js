
(()=>{
const T=window.OLEK_TRANSLATIONS;let lang=localStorage.getItem('olek-lang')||'en';
function setLang(l){lang=l;document.documentElement.lang=l;localStorage.setItem('olek-lang',l);document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(T[l][k])el.textContent=T[l][k]});document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));const meta=document.querySelector('meta[name=\"description\"]');if(l==='pl'){document.title='OLEK / VISUALS — grafika cyfrowa Aleksandra Oliszewskiego';if(meta)meta.setAttribute('content','OLEK / VISUALS — grafika cyfrowa Aleksandra Oliszewskiego: postacie filmowe, reinterpretacje historii, fantasy i wizualne opowiadanie historii.');}else{document.title='OLEK / VISUALS — Digital Art by Aleksander Oliszewski';if(meta)meta.setAttribute('content','OLEK / VISUALS — digital art by Aleksander Oliszewski: cinematic characters, historical reinterpretations, fantasy worlds and visual storytelling.');}}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));setLang(lang);
const bar=document.getElementById('topbar');addEventListener('scroll',()=>bar.classList.toggle('scrolled',scrollY>30),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
const filters=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('.archive-card')];
function filter(cat){filters.forEach(b=>b.classList.toggle('active',b.dataset.filter===cat));cards.forEach(c=>c.classList.toggle('hidden',cat!=='all'&&c.dataset.category!==cat));}
filters.forEach(b=>b.addEventListener('click',()=>filter(b.dataset.filter)));
document.querySelectorAll('[data-filter-jump]').forEach(b=>b.addEventListener('click',()=>{const cat=b.dataset.filterJump;filter(cat);document.getElementById('archive').scrollIntoView({behavior:'smooth'});}));
const lb=document.getElementById('lightbox'),lbi=lb.querySelector('img'),lbt=lb.querySelector('b');let lastFocus=null;
function openLightbox(btn){lastFocus=btn;lbi.src=btn.dataset.open;lbi.alt=btn.dataset.title;lbt.textContent=btn.dataset.title;lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';lb.querySelector('.lightbox-close').focus();}
function closeLightbox(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.style.overflow='';lbi.src='';if(lastFocus)lastFocus.focus();}
document.querySelectorAll('video').forEach(v=>v.addEventListener('play',()=>{document.querySelectorAll('video').forEach(other=>{if(other!==v&&!other.paused)other.pause();});}));
document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openLightbox(b)));lb.querySelector('.lightbox-close').addEventListener('click',closeLightbox);lb.addEventListener('click',e=>{if(e.target===lb)closeLightbox()});addEventListener('keydown',e=>{if(e.key==='Escape'&&lb.classList.contains('open'))closeLightbox()});
})();
