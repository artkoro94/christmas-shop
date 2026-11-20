import './styles.css';

type Category = 'work' | 'health' | 'harmony';
type Filter = 'all' | Category;
interface Gift {
  id: number; title: string; category: Category; description: string;
  bonus: string; image: string; imageAlt: string;
}
const asset = (path: string): string => `${import.meta.env.BASE_URL}christmas-shop/assets/${path}`;
const gifts: Gift[] = [
  { id:1,title:'Console.log Guru',category:'work',description:'For the one who turns every bug into a learning opportunity.',bonus:'+15% to stress resistance',image:'gift_cards/card_1.png',imageAlt:'A gift for a developer' },
  { id:2,title:'Hydration Bot',category:'health',description:'A gentle reminder to pause, recharge and take care of yourself.',bonus:'+20% to HP',image:'gift_cards/card_2.png',imageAlt:'A wellness-themed gift' },
  { id:3,title:'Merge Master',category:'work',description:'For smooth releases and beautifully resolved conflicts.',bonus:'+15% to stress resistance',image:'gift_cards/card_3.png',imageAlt:'A gift for a creator' },
  { id:4,title:'Spontaneous Coding Philosopher',category:'harmony',description:'For curious minds who find inspiration in unexpected places.',bonus:'+15% to relax',image:'gift_cards/card_4.png',imageAlt:'A gift for a creative spirit' },
  { id:5,title:'Step Master',category:'health',description:'Small steps make the biggest journeys. Keep moving.',bonus:'+20% to HP',image:'gift_cards/card_2.png',imageAlt:'A healthy-living gift' },
  { id:6,title:'Bug Magnet',category:'work',description:'Every great developer has a sixth sense for edge cases.',bonus:'+15% to focus',image:'gift_cards/card_1.png',imageAlt:'A playful developer gift' },
  { id:7,title:'Shortcut Cheater',category:'work',description:'Work smarter, save time and keep a little magic for later.',bonus:'+15% to productivity',image:'gift_cards/card_3.png',imageAlt:'A productivity gift' },
  { id:8,title:'Posture Levitation',category:'health',description:'A little nudge to stretch, reset and feel your best.',bonus:'+20% to HP',image:'gift_cards/card_2.png',imageAlt:'A self-care gift' },
  { id:9,title:'Bug Acceptance Guru',category:'harmony',description:'Peace of mind begins when perfectionism takes a day off.',bonus:'+15% to relax',image:'gift_cards/card_4.png',imageAlt:'A gift for finding balance' },
  { id:10,title:'Snack Resister',category:'health',description:'A tiny victory for every mindful choice.',bonus:'+20% to HP',image:'gift_cards/card_2.png',imageAlt:'A mindful habits gift' },
  { id:11,title:'Error Laugher',category:'harmony',description:'Because sometimes the best fix is a good laugh.',bonus:'+15% to relax',image:'gift_cards/card_4.png',imageAlt:'A cheerful holiday gift' },
  { id:12,title:'Joy Charger',category:'harmony',description:'A little spark of joy for the everyday.',bonus:'+15% to relax',image:'gift_cards/card_4.png',imageAlt:'A gift to brighten the day' },
];
const labels: Record<Category,string> = {work:'For work',health:'For health',harmony:'For harmony'};
const giftCard = (gift:Gift,index:number):string => `
<button class="gift-card" type="button" data-gift-id="${gift.id}" aria-label="View ${gift.title}">
 <span class="gift-card__media"><img src="${asset(gift.image)}" alt="${gift.imageAlt}" width="310" height="230" loading="lazy" decoding="async"><span class="gift-card__number">0${index+1}</span></span>
 <span class="gift-card__content"><span class="eyebrow eyebrow--${gift.category}">${labels[gift.category]}</span><span class="gift-card__title">${gift.title}</span><span class="gift-card__hint">Discover gift <span aria-hidden="true">↗</span></span></span>
</button>`;
const header=(active:'home'|'gifts'):string=>`
<header class="site-header"><div class="header-inner">
<a class="brand" href="${import.meta.env.BASE_URL}" aria-label="Christmas Shop home"><img src="${asset('items/snowflake.svg')}" width="22" height="24" alt=""><span>THE GIFTS</span></a>
<nav class="desktop-nav" aria-label="Main navigation">
<a class="${active==='gifts'?'is-active':''}" href="${import.meta.env.BASE_URL}gifts/">Gifts</a><a href="${import.meta.env.BASE_URL}#about">About</a><a href="${import.meta.env.BASE_URL}#best">Best</a><a href="${import.meta.env.BASE_URL}#contacts">Contacts</a></nav>
<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu"><span></span><span></span></button></div>
<nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation" hidden>
<a href="${import.meta.env.BASE_URL}gifts/">Gifts</a><a href="${import.meta.env.BASE_URL}#about">About</a><a href="${import.meta.env.BASE_URL}#best">Best</a><a href="${import.meta.env.BASE_URL}#contacts">Contacts</a></nav></header>`;
const footer=():string=>`
<footer class="site-footer" id="contacts"><div class="contact-grid">
<a class="contact-card" href="tel:+375291112233"><img src="${asset('footer/santa.svg')}" alt="" width="64" height="64" loading="lazy"><strong>+375 (29) 111-22-33</strong><span>Call us</span></a>
<a class="contact-card" href="https://maps.app.goo.gl/5JS5cqrWr2L7g7dG6" target="_blank" rel="noopener noreferrer"><img src="${asset('footer/tree.svg')}" alt="" width="64" height="64" loading="lazy"><strong>Magic forest</strong><span>Meet us</span></a>
<a class="contact-card" href="mailto:gifts@magic.ru"><img src="${asset('footer/snake.svg')}" alt="" width="64" height="64" loading="lazy"><strong>Gifts@magic.com</strong><span>Write us</span></a></div>
<p class="copyright">© 2026 Christmas Shop. Made with a little holiday magic.</p></footer>`;
const modal=`<dialog class="gift-dialog" aria-labelledby="dialog-title"><form method="dialog"><button class="dialog-close" aria-label="Close dialog">×</button></form><img class="dialog-image" src="" alt="" width="310" height="230"><div class="dialog-body"><span class="eyebrow dialog-category"></span><h2 id="dialog-title"></h2><p class="dialog-description"></p><p class="dialog-bonus"></p></div></dialog>`;
const isGiftsPage=window.location.pathname.includes('/gifts')||window.location.pathname.includes('christmas-shop2');
const app=document.querySelector<HTMLDivElement>('#app');
if(!app) throw new Error('Application root #app was not found.');
const renderHome=():string=>`
${header('home')}<main>
<section class="hero"><div class="hero-art" aria-hidden="true"></div><div class="hero-content"><span class="hero-kicker">A season of wonder</span><h1>Merry<br><em>Christmas</em></h1><p class="hero-subtitle">GIFT YOURSELF THE MAGIC OF NEW POSSIBILITIES</p><a class="button button--light" href="${import.meta.env.BASE_URL}gifts/">Explore magical gifts <span aria-hidden="true">↗</span></a><span class="hero-signoff">and Happy New Year</span></div><span class="hero-snow hero-snow--one" aria-hidden="true">✳</span><span class="hero-snow hero-snow--two" aria-hidden="true">✳</span></section>
<section class="about-section section-shell" id="about"><div class="about-copy"><span class="eyebrow">A little about us</span><h2>Unleash your<br><em>inner superhero.</em></h2><p>This New Year marks the beginning of your journey to inner harmony and new strengths. Discover thoughtful gifts that bring a little more joy to everyday life.</p><a class="text-link" href="${import.meta.env.BASE_URL}gifts/">Find your kind of magic <span aria-hidden="true">→</span></a></div><div class="about-art"><img src="${asset('pictures/santa.png')}" alt="Santa Claus bringing holiday cheer" width="600" height="600" loading="lazy" decoding="async"><span class="art-sticker">Made of<br>wonder ✳</span></div></section>
<section class="moments-section"><div class="section-heading"><span class="eyebrow">Make room for magic</span><h2>Become <em>happier.</em></h2><p>Little moments. Big feelings. Endless possibilities.</p></div><div class="moments-track">
<article><span>01 / LIVE</span><img src="${asset('sliber/snowman.png')}" alt="A cheerful snowman" width="200" height="200" loading="lazy"></article><article><span>02 / CREATE</span><img src="${asset('sliber/christmas_tree.png')}" alt="A decorated Christmas tree" width="200" height="200" loading="lazy"></article><article><span>03 / LOVE</span><img src="${asset('sliber/snow_ball.png')}" alt="A magical snow globe" width="200" height="200" loading="lazy"></article><article><span>04 / DREAM</span><img src="${asset('sliber/house.png')}" alt="A cozy winter house" width="200" height="200" loading="lazy"></article></div></section>
<section class="best-section section-shell" id="best"><div class="section-heading"><span class="eyebrow">Especially for you</span><h2>Best <em>gifts.</em></h2><p>Find something that feels just right.</p></div><div class="gift-grid gift-grid--featured">${gifts.slice(0,4).map(giftCard).join('')}</div><a class="button button--red" href="${import.meta.env.BASE_URL}gifts/">Explore all gifts <span aria-hidden="true">↗</span></a></section>
<section class="countdown-section"><span class="eyebrow">The magic is almost here</span><h2>Make this season <em>unforgettable.</em></h2><p>Counting down to a fresh start and new possibilities.</p><div class="countdown" aria-label="Countdown to New Year"><div><strong data-time="days">—</strong><span>Days</span></div><div><strong data-time="hours">—</strong><span>Hours</span></div><div><strong data-time="minutes">—</strong><span>Minutes</span></div><div><strong data-time="seconds">—</strong><span>Seconds</span></div></div></section></main>${footer()}${modal}`;
const renderGifts=():string=>`
${header('gifts')}<main class="catalog-page"><section class="catalog-hero"><span class="eyebrow">A little something for everyone</span><h1>Find your <em>magic.</em></h1><p>Thoughtful gifts for work, health and harmony.</p><span class="catalog-sparkle" aria-hidden="true">✳</span></section>
<section class="catalog-content"><div class="catalog-toolbar"><div class="filter-list" role="group" aria-label="Filter gifts by category"><button class="filter-button is-selected" type="button" data-filter="all" aria-pressed="true">All gifts <span>12</span></button><button class="filter-button" type="button" data-filter="work" aria-pressed="false">For work</button><button class="filter-button" type="button" data-filter="health" aria-pressed="false">For health</button><button class="filter-button" type="button" data-filter="harmony" aria-pressed="false">For harmony</button></div><p class="results-count" aria-live="polite"><strong>12</strong> gifts to discover</p></div><div class="gift-grid catalog-grid" id="gift-grid">${gifts.map(giftCard).join('')}</div><p class="empty-state" hidden>No gifts in this category yet. Try another one.</p></section></main>${footer()}${modal}`;
app.innerHTML=isGiftsPage?renderGifts():renderHome();

const menuToggle=document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileNav=document.querySelector<HTMLElement>('.mobile-nav');
menuToggle?.addEventListener('click',()=>{
 const expanded=menuToggle.getAttribute('aria-expanded')==='true';
 menuToggle.setAttribute('aria-expanded',String(!expanded));
 menuToggle.setAttribute('aria-label',expanded?'Open menu':'Close menu');
 if(mobileNav) mobileNav.hidden=expanded;
 document.body.classList.toggle('menu-open',!expanded);
});
mobileNav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
 if(mobileNav) mobileNav.hidden=true;
 menuToggle?.setAttribute('aria-expanded','false');
 menuToggle?.setAttribute('aria-label','Open menu');
 document.body.classList.remove('menu-open');
}));
const dialog=document.querySelector<HTMLDialogElement>('.gift-dialog');
const openGiftDialog=(gift:Gift):void=>{
 if(!dialog)return;
 const image=dialog.querySelector<HTMLImageElement>('.dialog-image');
 const category=dialog.querySelector<HTMLElement>('.dialog-category');
 const title=dialog.querySelector<HTMLElement>('#dialog-title');
 const description=dialog.querySelector<HTMLElement>('.dialog-description');
 const bonus=dialog.querySelector<HTMLElement>('.dialog-bonus');
 if(!image||!category||!title||!description||!bonus)return;
 image.src=asset(gift.image); image.alt=gift.imageAlt;
 category.textContent=labels[gift.category]; category.className=`eyebrow eyebrow--${gift.category} dialog-category`;
 title.textContent=gift.title; description.textContent=gift.description; bonus.textContent=gift.bonus;
 dialog.showModal();
};
app.querySelectorAll<HTMLButtonElement>('[data-gift-id]').forEach(button=>button.addEventListener('click',()=>{
 const gift=gifts.find(item=>item.id===Number(button.dataset.giftId));
 if(gift)openGiftDialog(gift);
}));
dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
app.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 const filter=button.dataset.filter as Filter;
 const visible=gifts.filter(gift=>filter==='all'||gift.category===filter);
 app.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach(item=>{
  const selected=item===button; item.classList.toggle('is-selected',selected); item.setAttribute('aria-pressed',String(selected));
 });
 app.querySelectorAll<HTMLElement>('[data-gift-id]').forEach(card=>{
  const gift=gifts.find(item=>item.id===Number(card.dataset.giftId));
  card.hidden=!gift||(filter!=='all'&&gift.category!==filter);
 });
 const count=app.querySelector<HTMLElement>('.results-count');
 const empty=app.querySelector<HTMLElement>('.empty-state');
 if(count)count.innerHTML=`<strong>${visible.length}</strong> gifts to discover`;
 if(empty)empty.hidden=visible.length>0;
}));
const updateCountdown=():void=>{
 const now=new Date(); const target=new Date(now.getFullYear()+1,0,1);
 const remaining=Math.max(0,target.getTime()-now.getTime());
 const values={days:Math.floor(remaining/86400000),hours:Math.floor((remaining/3600000)%24),minutes:Math.floor((remaining/60000)%60),seconds:Math.floor((remaining/1000)%60)};
 Object.entries(values).forEach(([unit,value])=>{
  const el=document.querySelector<HTMLElement>(`[data-time="${unit}"]`);
  if(el)el.textContent=String(value).padStart(2,'0');
 });
};
if(!isGiftsPage){updateCountdown();window.setInterval(updateCountdown,1000);}
