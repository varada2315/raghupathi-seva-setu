// Bilingual toggle
(function(){
  const KEY='prpct-lang';
  function applyLang(lang){
    document.body.classList.toggle('lang-hi',lang==='hi');
    document.querySelectorAll('[data-en]').forEach(el=>{
      const t = lang==='hi' ? el.getAttribute('data-hi') : el.getAttribute('data-en');
      if(t!==null) el.textContent = t;
    });
    document.querySelectorAll('[data-en-placeholder]').forEach(el=>{
      const t = lang==='hi' ? el.getAttribute('data-hi-placeholder') : el.getAttribute('data-en-placeholder');
      if(t!==null) el.placeholder = t;
    });
    const btn = document.getElementById('langToggle');
    if(btn) btn.textContent = lang==='hi' ? 'EN' : 'हिन्दी';
    document.documentElement.lang = lang;
    try{localStorage.setItem(KEY,lang)}catch(e){}
  }
  document.addEventListener('DOMContentLoaded',()=>{
    const saved = (function(){try{return localStorage.getItem(KEY)}catch(e){return null}})() || 'en';
    applyLang(saved);
    const btn = document.getElementById('langToggle');
    if(btn){
      btn.addEventListener('click',()=>{
        const cur = document.body.classList.contains('lang-hi')?'hi':'en';
        applyLang(cur==='hi'?'en':'hi');
      });
    }
    // Mobile menu
    const mb = document.getElementById('menuBtn');
    const links = document.getElementById('navLinks');
    if(mb && links){ mb.addEventListener('click',()=>links.classList.toggle('open')); }

    // Active nav highlight
    const path = location.pathname.split('/').pop() || 'home.html';
    document.querySelectorAll('.nav-links a').forEach(a=>{
      const href = a.getAttribute('href');
      if(href===path) a.classList.add('active');
    });

    // Intersection observer fade-in
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
    },{threshold:.12});
    document.querySelectorAll('.fade').forEach(el=>io.observe(el));
  });
})();

function printForm(){
  window.print();
}
