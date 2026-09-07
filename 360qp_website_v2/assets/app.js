const DATA_KEY='360qp_content_v2';
const DEFAULT={hero:'Photography, video and visual storytelling with a premium cinematic approach.',about:'360.qp is a visual studio for photography, video, editing and creative content.',services:[['Photography','Professional photography for people, brands and moments.'],['Weddings','Cinematic wedding photography and video coverage.'],['Events','Visual coverage designed around the atmosphere of each event.'],['Products','Premium product photography for brands and businesses.'],['Video','Creative video production with a cinematic finish.'],['Editing','Professional photo and video editing, color and finishing.'],['Sessions','Portrait and creative sessions built around your concept.']],prices:['','','','','','',''],works:[['Featured Work','assets/logo.jpg'],['Creative Visuals','assets/logo.jpg'],['Cinematic Story','assets/logo.jpg']]};
let DATA=JSON.parse(localStorage.getItem(DATA_KEY)||'null')||DEFAULT;
const WA='07721237999';
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
function saveData(){localStorage.setItem(DATA_KEY,JSON.stringify(DATA))}
function whatsapp(text='Hello 360.qp, I would like to make a booking.'){window.open('https://wa.me/964'+WA.slice(1)+'?text='+encodeURIComponent(text),'_blank')}
function render(){
 const hero=document.querySelector('#heroText');if(hero)hero.textContent=DATA.hero;
 const about=document.querySelector('#aboutText');if(about)about.textContent=DATA.about;
 const sg=document.querySelector('#serviceGrid');if(sg)sg.innerHTML=DATA.services.map(s=>`<article class="card fade"><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p></article>`).join('');
 const sl=document.querySelector('#servicesList');if(sl)sl.innerHTML=DATA.services.map((s,i)=>`<article class="card fade"><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p><span class="price">${esc(DATA.prices[i]||'Set price')} <small>${DATA.prices[i]?'':'from admin'}</small></span></article>`).join('');
 const pg=document.querySelector('#portfolioGrid');if(pg)pg.innerHTML=DATA.works.map(w=>`<a class="work fade" href="portfolio.html"><img src="${esc(w[1])}" alt="${esc(w[0])}"><div class="caption"><b>${esc(w[0])}</b></div></a>`).join('');
 document.querySelectorAll('[data-wa]').forEach(b=>b.onclick=()=>whatsapp());
 setTimeout(()=>document.querySelectorAll('.fade').forEach(x=>x.classList.add('show')),60)
}
const I18N={en:{home:'Home',portfolio:'Portfolio',services:'Services',about:'About',contact:'Contact',book:'Book Now',view:'View Portfolio',contactTitle:"Let's create something memorable.",open:'Open WhatsApp'},ar:{home:'الرئيسية',portfolio:'الأعمال',services:'الخدمات',about:'من نحن',contact:'تواصل',book:'احجز الآن',view:'شاهد الأعمال',contactTitle:'خلّينا نصنع شيئاً لا يُنسى.',open:'فتح واتساب'},ku:{home:'سەرەکی',portfolio:'کارەکان',services:'خزمەتگوزاری',about:'دەربارە',contact:'پەیوەندی',book:'ئێستا حجز بکە',view:'کارەکان ببینە',contactTitle:'با شتێکی لەبیرنەکراو دروست بکەین.',open:'واتساپ بکەرەوە'}};
function lang(){let l=localStorage.getItem('360qp_lang')||'en';document.documentElement.dir=l==='ar'?'rtl':'ltr';document.querySelectorAll('[data-i18n]').forEach(x=>x.textContent=I18N[l][x.dataset.i18n]||x.textContent);let s=document.querySelector('#lang');if(s){s.value=l;s.onchange=()=>{localStorage.setItem('360qp_lang',s.value);location.reload()}}}
document.addEventListener('DOMContentLoaded',()=>{render();lang()});
