const LANGS={en:'English',te:'తెలుగు',hi:'हिन्दी',ta:'தமிழ்'};
function applyLanguage(){const l=localStorage.getItem('soilnutriLanguage')||'en';document.documentElement.lang=l;document.querySelectorAll('[data-en]').forEach(e=>{const v=e.dataset[l]||e.dataset.en;e.textContent=v});const s=document.querySelectorAll('#languageSelect');s.forEach(x=>x.value=l);}
function setLanguage(l){localStorage.setItem('soilnutriLanguage',l);applyLanguage();}
function languageBar(){return `<select id="languageSelect" class="lang-select" aria-label="Language" onchange="setLanguage(this.value)"><option value="en">🌐 English</option><option value="te">🌐 తెలుగు</option><option value="hi">🌐 हिन्दी</option><option value="ta">🌐 தமிழ்</option></select>`}
document.addEventListener('change',e=>{if(e.target.id==='languageSelect')setLanguage(e.target.value)});
document.addEventListener('DOMContentLoaded',applyLanguage);