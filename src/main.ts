import './styles.css';

type Language = 'en' | 'ru';
type Category = 'work' | 'health' | 'harmony';
type Filter = 'all' | Category;

interface Gift {
  id: number;
  title: Record<Language, string>;
  category: Category;
  description: Record<Language, string>;
  bonus: Record<Language, string>;
  image: string;
  imageAlt: Record<Language, string>;
}

const asset = (path: string): string => `${import.meta.env.BASE_URL}christmas-shop/assets/${path}`;
const isGiftsPage = window.location.pathname.includes('/gifts') || window.location.pathname.includes('christmas-shop2');
const app = document.querySelector<HTMLDivElement>('#app');

if (!app) throw new Error('Application root #app was not found.');

const translations = {
  en: {
    home: 'Christmas Shop — Find Your Holiday Magic',
    homeDescription: 'Find a little holiday magic. Explore thoughtful gifts for work, health and harmony.',
    giftsPage: 'Explore Gifts — Christmas Shop',
    giftsDescription: 'Explore holiday gifts for work, health and harmony.',
    homeLink: 'Christmas Shop home',
    switchLanguage: 'Switch language',
    switchTheme: 'Switch color theme',
    gifts: 'Gifts',
    about: 'About',
    best: 'Best',
    contacts: 'Contacts',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNavigation: 'Main navigation',
    mobileNavigation: 'Mobile navigation',
    heroKicker: 'A season of wonder',
    merry: 'Merry',
    christmas: 'Christmas',
    heroSubtitle: 'GIFT YOURSELF THE MAGIC OF NEW POSSIBILITIES',
    exploreMagic: 'Explore magical gifts',
    happyNewYear: 'and Happy New Year',
    aboutKicker: 'A little about us',
    unleash: 'Unleash your',
    superhero: 'inner superhero.',
    aboutText: 'This New Year marks the beginning of your journey to inner harmony and new strengths. Discover thoughtful gifts that bring a little more joy to everyday life.',
    findMagic: 'Find your kind of magic',
    momentsKicker: 'Make room for magic',
    become: 'Become',
    happier: 'happier.',
    momentsText: 'Little moments. Big feelings. Endless possibilities.',
    live: 'LIVE',
    create: 'CREATE',
    love: 'LOVE',
    dream: 'DREAM',
    snowmanAlt: 'A cheerful snowman',
    treeAlt: 'A decorated Christmas tree',
    snowGlobeAlt: 'A magical snow globe',
    houseAlt: 'A cozy winter house',
    especially: 'Especially for you',
    bestGifts: 'Best',
    giftsWord: 'gifts.',
    bestText: 'Find something that feels just right.',
    exploreAll: 'Explore all gifts',
    countdownKicker: 'The magic is almost here',
    season: 'Make this season',
    unforgettable: 'unforgettable.',
    countdownText: 'Counting down to a fresh start and new possibilities.',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    countdownLabel: 'Countdown to New Year',
    callUs: 'Call us',
    meetUs: 'Meet us',
    writeUs: 'Write us',
    copyright: '© 2026 Christmas Shop. Made with a little holiday magic.',
    forWork: 'For work',
    forHealth: 'For health',
    forHarmony: 'For harmony',
    allGifts: 'All gifts',
    giftsToDiscover: 'gifts to discover',
    filterLabel: 'Filter gifts by category',
    emptyState: 'No gifts in this category yet. Try another one.',
    viewGift: 'View',
    discoverGift: 'Discover gift',
    closeDialog: 'Close dialog',
    dialogImageAlt: 'Gift illustration',
    madeOfWonder: 'Made of<br>wonder ✳',
    catalogKicker: 'A little something for everyone',
    findYour: 'Find your',
    magic: 'magic.',
    catalogText: 'Thoughtful gifts for work, health and harmony.',
  },
  ru: {
    home: 'Christmas Shop — Найди своё новогоднее волшебство',
    homeDescription: 'Немного праздничного волшебства. Выбирайте подарки для работы, здоровья и гармонии.',
    giftsPage: 'Подарки — Christmas Shop',
    giftsDescription: 'Праздничные подарки для работы, здоровья и гармонии.',
    homeLink: 'На главную Christmas Shop',
    switchLanguage: 'Сменить цветовую тему',
    switchTheme: 'Переключить цветовую тему',
    gifts: 'Подарки',
    about: 'О нас',
    best: 'Лучшее',
    contacts: 'Контакты',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    mainNavigation: 'Основная навигация',
    mobileNavigation: 'Мобильная навигация',
    heroKicker: 'Время чудес',
    merry: 'Счастливого',
    christmas: 'Рождества',
    heroSubtitle: 'ПОДАРИ СЕБЕ МАГИЮ НОВЫХ ВОЗМОЖНОСТЕЙ',
    exploreMagic: 'Выбрать волшебный подарок',
    happyNewYear: 'и счастливого Нового года',
    aboutKicker: 'Немного о нас',
    unleash: 'Раскрой своего',
    superhero: 'внутреннего супергероя.',
    aboutText: 'Этот Новый год — начало пути к внутренней гармонии и новым силам. Открой для себя подарки, которые добавят немного радости в каждый день.',
    findMagic: 'Найти своё волшебство',
    momentsKicker: 'Освободи место для волшебства',
    become: 'Стань',
    happier: 'счастливее.',
    momentsText: 'Маленькие моменты. Большие чувства. Безграничные возможности.',
    live: 'ЖИВИ',
    create: 'ТВОРИ',
    love: 'ЛЮБИ',
    dream: 'МЕЧТАЙ',
    snowmanAlt: 'Весёлый снеговик',
    treeAlt: 'Украшенная новогодняя ёлка',
    snowGlobeAlt: 'Волшебный снежный шар',
    houseAlt: 'Уютный зимний домик',
    especially: 'Специально для тебя',
    bestGifts: 'Лучшие',
    giftsWord: 'подарки.',
    bestText: 'Найди то, что действительно тебе подходит.',
    exploreAll: 'Смотреть все подарки',
    countdownKicker: 'Волшебство уже близко',
    season: 'Сделай этот сезон',
    unforgettable: 'незабываемым.',
    countdownText: 'До нового начала и новых возможностей осталось:',
    days: 'Дней',
    hours: 'Часов',
    minutes: 'Минут',
    seconds: 'Секунд',
    countdownLabel: 'Обратный отсчёт до Нового года',
    callUs: 'Позвони нам',
    meetUs: 'Найди нас',
    writeUs: 'Напиши нам',
    copyright: '© 2026 Christmas Shop. Создано с частичкой праздничного волшебства.',
    forWork: 'Для работы',
    forHealth: 'Для здоровья',
    forHarmony: 'Для гармонии',
    allGifts: 'Все подарки',
    giftsToDiscover: 'подарков',
    filterLabel: 'Фильтр подарков по категории',
    emptyState: 'В этой категории пока нет подарков. Попробуй другую.',
    viewGift: 'Посмотреть',
    discoverGift: 'Открыть подарок',
    closeDialog: 'Закрыть окно',
    dialogImageAlt: 'Иллюстрация подарка',
    madeOfWonder: 'Создано<br>с чудом ✳',
    catalogKicker: 'Немного волшебства для каждого',
    findYour: 'Найди своё',
    magic: 'волшебство.',
    catalogText: 'Подарки для работы, здоровья и гармонии.',
  },
} satisfies Record<Language, Record<string, string>>;

let language: Language = 'ru';
try {
  const savedLanguage = localStorage.getItem('christmas-shop-language');
  if (savedLanguage === 'en' || savedLanguage === 'ru') language = savedLanguage;
} catch {
  // The site still works when browser storage is unavailable.
}

const t = (key: keyof typeof translations.en): string => translations[language][key];

type Theme = 'light' | 'dark';
let theme: Theme = 'light';
try {
  const savedTheme = localStorage.getItem('christmas-shop-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') theme = savedTheme;
} catch {
  // Theme switching remains available for the current page.
}

const applyTheme = (): void => {
  document.documentElement.dataset.theme = theme;
};

const gifts: Gift[] = [
  {
    id: 1, title: { en: 'Console.log Guru', ru: 'Гуру console.log' }, category: 'work',
    description: { en: 'For the one who turns every bug into a learning opportunity.', ru: 'Для того, кто превращает каждый баг в возможность научиться чему-то новому.' },
    bonus: { en: '+15% to stress resistance', ru: '+15% к стрессоустойчивости' }, image: 'gift_cards/card_1.png',
    imageAlt: { en: 'A gift for a developer', ru: 'Подарок для разработчика' },
  },
  {
    id: 2, title: { en: 'Hydration Bot', ru: 'Бот-гидратор' }, category: 'health',
    description: { en: 'A gentle reminder to pause, recharge and take care of yourself.', ru: 'Ненавязчивое напоминание сделать паузу, восстановить силы и позаботиться о себе.' },
    bonus: { en: '+20% to HP', ru: '+20% к здоровью' }, image: 'gift_cards/card_2.png',
    imageAlt: { en: 'A wellness-themed gift', ru: 'Подарок для заботы о себе' },
  },
  {
    id: 3, title: { en: 'Merge Master', ru: 'Мастер слияний' }, category: 'work',
    description: { en: 'For smooth releases and beautifully resolved conflicts.', ru: 'Для плавных релизов и красиво разрешённых конфликтов.' },
    bonus: { en: '+15% to stress resistance', ru: '+15% к стрессоустойчивости' }, image: 'gift_cards/card_3.png',
    imageAlt: { en: 'A gift for a creator', ru: 'Подарок для создателя' },
  },
  {
    id: 4, title: { en: 'Spontaneous Coding Philosopher', ru: 'Философ спонтанного кодинга' }, category: 'harmony',
    description: { en: 'For curious minds who find inspiration in unexpected places.', ru: 'Для любознательных людей, которые находят вдохновение в самых неожиданных местах.' },
    bonus: { en: '+15% to relaxation', ru: '+15% к расслаблению' }, image: 'gift_cards/card_4.png',
    imageAlt: { en: 'A gift for a creative spirit', ru: 'Подарок для творческой натуры' },
  },
  {
    id: 5, title: { en: 'Step Master', ru: 'Мастер шагов' }, category: 'health',
    description: { en: 'Small steps make the biggest journeys. Keep moving.', ru: 'Большие путешествия начинаются с маленьких шагов. Продолжай двигаться.' },
    bonus: { en: '+20% to HP', ru: '+20% к здоровью' }, image: 'gift_cards/card_2.png',
    imageAlt: { en: 'A healthy-living gift', ru: 'Подарок для здорового образа жизни' },
  },
  {
    id: 6, title: { en: 'Bug Magnet', ru: 'Магнит для багов' }, category: 'work',
    description: { en: 'Every great developer has a sixth sense for edge cases.', ru: 'У каждого хорошего разработчика есть чутьё на крайние случаи.' },
    bonus: { en: '+15% to focus', ru: '+15% к концентрации' }, image: 'gift_cards/card_1.png',
    imageAlt: { en: 'A playful developer gift', ru: 'Шуточный подарок разработчику' },
  },
  {
    id: 7, title: { en: 'Shortcut Cheater', ru: 'Повелитель горячих клавиш' }, category: 'work',
    description: { en: 'Work smarter, save time and keep a little magic for later.', ru: 'Работай эффективнее, экономь время и оставь немного магии на потом.' },
    bonus: { en: '+15% to productivity', ru: '+15% к продуктивности' }, image: 'gift_cards/card_3.png',
    imageAlt: { en: 'A productivity gift', ru: 'Подарок для продуктивности' },
  },
  {
    id: 8, title: { en: 'Posture Levitation', ru: 'Лёгкая осанка' }, category: 'health',
    description: { en: 'A little nudge to stretch, reset and feel your best.', ru: 'Небольшой повод размяться, перезагрузиться и почувствовать себя лучше.' },
    bonus: { en: '+20% to HP', ru: '+20% к здоровью' }, image: 'gift_cards/card_2.png',
    imageAlt: { en: 'A self-care gift', ru: 'Подарок для заботы о себе' },
  },
  {
    id: 9, title: { en: 'Bug Acceptance Guru', ru: 'Гуру принятия багов' }, category: 'harmony',
    description: { en: 'Peace of mind begins when perfectionism takes a day off.', ru: 'Душевное спокойствие начинается, когда перфекционизм берёт выходной.' },
    bonus: { en: '+15% to relaxation', ru: '+15% к расслаблению' }, image: 'gift_cards/card_4.png',
    imageAlt: { en: 'A gift for finding balance', ru: 'Подарок для обретения баланса' },
  },
  {
    id: 10, title: { en: 'Snack Resister', ru: 'Укротитель перекусов' }, category: 'health',
    description: { en: 'A tiny victory for every mindful choice.', ru: 'Маленькая победа за каждый осознанный выбор.' },
    bonus: { en: '+20% to HP', ru: '+20% к здоровью' }, image: 'gift_cards/card_2.png',
    imageAlt: { en: 'A mindful habits gift', ru: 'Подарок для полезных привычек' },
  },
  {
    id: 11, title: { en: 'Error Laugher', ru: 'Смеющийся над ошибками' }, category: 'harmony',
    description: { en: 'Because sometimes the best fix is a good laugh.', ru: 'Потому что иногда лучшее решение — хорошенько посмеяться.' },
    bonus: { en: '+15% to relaxation', ru: '+15% к расслаблению' }, image: 'gift_cards/card_4.png',
    imageAlt: { en: 'A cheerful holiday gift', ru: 'Весёлый праздничный подарок' },
  },
  {
    id: 12, title: { en: 'Joy Charger', ru: 'Заряд радости' }, category: 'harmony',
    description: { en: 'A little spark of joy for the everyday.', ru: 'Небольшая искра радости на каждый день.' },
    bonus: { en: '+15% to relaxation', ru: '+15% к расслаблению' }, image: 'gift_cards/card_4.png',
    imageAlt: { en: 'A gift to brighten the day', ru: 'Подарок, который сделает день ярче' },
  },
];

const giftCountLabel = (count: number): string => {
  if (language === 'en') return `${count} ${count === 1 ? 'gift' : 'gifts'} to discover`;
  const mod10 = count % 10;
  const mod100 = count % 100;
  const noun = mod10 === 1 && mod100 !== 11 ? 'подарок'
    : mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14) ? 'подарка'
    : 'подарков';
  return `${count} ${noun}`;
};

const categoryLabel = (category: Category): string => ({
  work: t('forWork'),
  health: t('forHealth'),
  harmony: t('forHarmony'),
})[category];

const giftCard = (gift: Gift, index: number): string => `
<button class="gift-card" type="button" data-gift-id="${gift.id}" aria-label="${t('viewGift')} ${gift.title[language]}">
  <span class="gift-card__media">
    <img src="${asset(gift.image)}" alt="${gift.imageAlt[language]}" width="310" height="230" loading="lazy" decoding="async">
    <span class="gift-card__number">0${index + 1}</span>
  </span>
  <span class="gift-card__content">
    <span class="eyebrow eyebrow--${gift.category}">${categoryLabel(gift.category)}</span>
    <span class="gift-card__title">${gift.title[language]}</span>
    <span class="gift-card__hint">${t('discoverGift')} <span aria-hidden="true">↗</span></span>
  </span>
</button>`;

const header = (active: 'home' | 'gifts'): string => `
<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="${import.meta.env.BASE_URL}" aria-label="${t('homeLink')}">
      <img src="${asset('items/snowflake.svg')}" width="22" height="24" alt=""><span>THE GIFTS</span>
    </a>
    <nav class="desktop-nav" aria-label="${t('mainNavigation')}">
      <a class="${active === 'gifts' ? 'is-active' : ''}" href="${import.meta.env.BASE_URL}gifts/">${t('gifts')}</a>
      <a href="${import.meta.env.BASE_URL}#about">${t('about')}</a>
      <a href="${import.meta.env.BASE_URL}#best">${t('best')}</a>
      <a href="${import.meta.env.BASE_URL}#contacts">${t('contacts')}</a>
    </nav>
    <div class="header-actions">
      <button class="language-toggle" type="button" data-language-toggle aria-label="${t('switchLanguage')}">${language === 'en' ? 'RU' : 'EN'}</button>
      <button class="theme-toggle" type="button" data-theme-toggle aria-label="${t('switchTheme')}" aria-pressed="${theme === 'dark'}"><span aria-hidden="true">${theme === 'dark' ? '☀' : '☾'}</span></button>
    </div>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="${t('openMenu')}">
      <span></span><span></span>
    </button>
  </div>
  <nav class="mobile-nav" id="mobile-nav" aria-label="${t('mobileNavigation')}" hidden>
    <a href="${import.meta.env.BASE_URL}gifts/">${t('gifts')}</a>
    <a href="${import.meta.env.BASE_URL}#about">${t('about')}</a>
    <a href="${import.meta.env.BASE_URL}#best">${t('best')}</a>
    <a href="${import.meta.env.BASE_URL}#contacts">${t('contacts')}</a>
  </nav>
</header>`;

const footer = (): string => `
<footer class="site-footer" id="contacts">
  <div class="contact-grid">
    <a class="contact-card" href="tel:+79991234567">
      <img src="${asset('footer/santa.svg')}" alt="" width="64" height="64" loading="lazy">
      <strong>+7 (999) 123-45-67</strong><span>${t('callUs')}</span>
    </a>
    <a class="contact-card" href="https://maps.app.goo.gl/5JS5cqrWr2L7g7dG6" target="_blank" rel="noopener noreferrer">
      <img src="${asset('footer/tree.svg')}" alt="" width="64" height="64" loading="lazy">
      <strong>${language === 'en' ? 'Magic forest' : 'Волшебный лес'}</strong><span>${t('meetUs')}</span>
    </a>
    <a class="contact-card" href="mailto:gifts@magic.ru">
      <img src="${asset('footer/snake.svg')}" alt="" width="64" height="64" loading="lazy">
      <strong>Gifts@magic.ru</strong><span>${t('writeUs')}</span>
    </a>
  </div>
  <p class="copyright">${t('copyright')}</p>
</footer>`;

const modal = (): string => `
<dialog class="gift-dialog" aria-labelledby="dialog-title">
  <form method="dialog"><button class="dialog-close" aria-label="${t('closeDialog')}">×</button></form>
  <img class="dialog-image" src="" alt="" width="310" height="230">
  <div class="dialog-body">
    <span class="eyebrow dialog-category"></span>
    <h2 id="dialog-title"></h2>
    <p class="dialog-description"></p>
    <p class="dialog-bonus"></p>
  </div>
</dialog>`;

const updateDocumentLanguage = (): void => {
  document.documentElement.lang = language;
  applyTheme();
  document.title = isGiftsPage ? t('giftsPage') : t('home');
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (description) description.content = isGiftsPage ? t('giftsDescription') : t('homeDescription');
};

let activeFilter: Filter = 'all';

const updateCountdown = (): void => {
  const now = new Date();
  const target = new Date(now.getFullYear() + 1, 0, 1);
  const remaining = Math.max(0, target.getTime() - now.getTime());
  const values = {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining / 3600000) % 24),
    minutes: Math.floor((remaining / 60000) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  };

  Object.entries(values).forEach(([unit, value]) => {
    const element = document.querySelector<HTMLElement>(`[data-time="${unit}"]`);
    if (element) element.textContent = String(value).padStart(2, '0');
  });
};

const renderHome = (): string => `
${header('home')}
<main>
  <section class="hero">
    <div class="winter-night" aria-hidden="true">
      <span class="winter-moon"></span>
      <span class="winter-stars winter-stars--one"></span>
      <span class="winter-stars winter-stars--two"></span>
      <svg class="winter-flight" viewBox="0 0 620 180" xmlns="http://www.w3.org/2000/svg">
        <g class="winter-flight__team" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <g class="winter-flight__reindeer">
            <path d="M70 88 Q91 70 119 83 L139 96 M112 83 L128 60 L146 58 M128 60 L119 48 M128 60 L143 43 M128 60 L137 72" stroke-width="5"/>
            <path d="M91 100 L83 132 M105 101 L111 132 M128 96 L137 127 M139 96 L153 124" stroke-width="5"/>
            <path d="M141 95 Q151 88 159 93" stroke-width="4"/>
            <circle cx="148" cy="58" r="3" fill="#ffd6a0" stroke="none"/>
            <path d="M83 82 Q62 76 58 91" stroke-width="4"/>
          </g>
          <g class="winter-flight__reindeer" transform="translate(112 5) scale(.88)">
            <path d="M70 88 Q91 70 119 83 L139 96 M112 83 L128 60 L146 58 M128 60 L119 48 M128 60 L143 43 M128 60 L137 72" stroke-width="5"/>
            <path d="M91 100 L83 132 M105 101 L111 132 M128 96 L137 127 M139 96 L153 124" stroke-width="5"/>
            <path d="M141 95 Q151 88 159 93" stroke-width="4"/>
            <circle cx="148" cy="58" r="3" fill="#ffd6a0" stroke="none"/>
          </g>
          <path d="M155 93 Q190 75 222 90 L260 92" stroke="#f6c98b" stroke-width="2" stroke-dasharray="5 7"/>
          <g class="winter-flight__sleigh" transform="translate(260 28)">
            <path d="M0 91 Q44 112 105 93 L92 108 Q43 127 -4 104" stroke="#ffd69b" stroke-width="5"/>
            <path d="M15 86 L25 58 Q53 46 82 59 L93 87 Z" fill="#c84d5d" stroke="#ffd69b" stroke-width="3"/>
            <path d="M28 58 Q30 32 53 30 Q77 31 79 58" fill="#f2c18b" stroke="#ffd69b" stroke-width="3"/>
            <circle cx="61" cy="43" r="4" fill="#fff0d4" stroke="none"/>
            <path d="M34 30 Q30 8 52 8 Q76 9 72 30 L55 23 Z" fill="#d95764" stroke="#ffd69b" stroke-width="2"/>
            <circle cx="52" cy="8" r="5" fill="#fff0d4" stroke="none"/>
            <path d="M49 67 L66 67 M52 76 L71 76" stroke="#fff0d4" stroke-width="3"/>
            <path d="M11 90 Q-1 78 -9 87" stroke="#ffd69b" stroke-width="3"/>
          </g>
          <path d="M10 25 l4 9 9 4 -9 4 -4 9 -4 -9 -9 -4 9 -4z" fill="#fff0d4" stroke="none"/>
          <path d="M390 22 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="#fff0d4" stroke="none"/>
        </g>
      </svg>
    </div>
    <div class="snowfall" aria-hidden="true"><span class="snowfall__layer snowfall__layer--back"></span><span class="snowfall__layer snowfall__layer--front"></span></div>
    <div class="hero-art" aria-hidden="true"></div>
    <div class="hero-content">
      <span class="hero-kicker">${t('heroKicker')}</span>
      <h1>${t('merry')}<br><em>${t('christmas')}</em></h1>
      <p class="hero-subtitle">${t('heroSubtitle')}</p>
      <a class="button button--light" href="${import.meta.env.BASE_URL}gifts/">${t('exploreMagic')} <span aria-hidden="true">↗</span></a>
      <span class="hero-signoff">${t('happyNewYear')}</span>
    </div>
    <span class="hero-snow hero-snow--one" aria-hidden="true">✳</span>
    <span class="hero-snow hero-snow--two" aria-hidden="true">✳</span>
  </section>
  <section class="about-section section-shell" id="about">
    <div class="about-copy">
      <span class="eyebrow">${t('aboutKicker')}</span>
      <h2>${t('unleash')}<br><em>${t('superhero')}</em></h2>
      <p>${t('aboutText')}</p>
      <a class="text-link" href="${import.meta.env.BASE_URL}gifts/">${t('findMagic')} <span aria-hidden="true">→</span></a>
    </div>
    <div class="about-art">
      <img src="${asset('pictures/santa.png')}" alt="${language === 'en' ? 'Santa Claus bringing holiday cheer' : 'Санта-Клаус приносит праздничное настроение'}" width="600" height="600" loading="lazy" decoding="async">
      <span class="art-sticker">${t('madeOfWonder')}</span>
    </div>
  </section>
  <section class="moments-section">
    <div class="section-heading">
      <span class="eyebrow">${t('momentsKicker')}</span>
      <h2>${t('become')} <em>${t('happier')}</em></h2>
      <p>${t('momentsText')}</p>
    </div>
    <div class="moments-track">
      <article><span>01 / ${t('live')}</span><img src="${asset('sliber/snowman.png')}" alt="${t('snowmanAlt')}" width="200" height="200" loading="lazy"></article>
      <article><span>02 / ${t('create')}</span><img src="${asset('sliber/christmas_tree.png')}" alt="${t('treeAlt')}" width="200" height="200" loading="lazy"></article>
      <article><span>03 / ${t('love')}</span><img src="${asset('sliber/snow_ball.png')}" alt="${t('snowGlobeAlt')}" width="200" height="200" loading="lazy"></article>
      <article><span>04 / ${t('dream')}</span><img src="${asset('sliber/house.png')}" alt="${t('houseAlt')}" width="200" height="200" loading="lazy"></article>
    </div>
  </section>
  <section class="best-section section-shell" id="best">
    <div class="section-heading">
      <span class="eyebrow">${t('especially')}</span>
      <h2>${t('bestGifts')} <em>${t('giftsWord')}</em></h2>
      <p>${t('bestText')}</p>
    </div>
    <div class="gift-grid gift-grid--featured">${gifts.slice(0, 4).map(giftCard).join('')}</div>
    <a class="button button--red" href="${import.meta.env.BASE_URL}gifts/">${t('exploreAll')} <span aria-hidden="true">↗</span></a>
  </section>
  <section class="countdown-section">
    <span class="eyebrow">${t('countdownKicker')}</span>
    <h2>${t('season')} <em>${t('unforgettable')}</em></h2>
    <p>${t('countdownText')}</p>
    <div class="countdown" aria-label="${t('countdownLabel')}">
      <div><strong data-time="days">—</strong><span>${t('days')}</span></div>
      <div><strong data-time="hours">—</strong><span>${t('hours')}</span></div>
      <div><strong data-time="minutes">—</strong><span>${t('minutes')}</span></div>
      <div><strong data-time="seconds">—</strong><span>${t('seconds')}</span></div>
    </div>
  </section>
</main>
${footer()}
${modal()}`;

const renderGifts = (): string => `
${header('gifts')}
<main class="catalog-page">
  <section class="catalog-hero">
    <span class="eyebrow">${t('catalogKicker')}</span>
    <h1>${t('findYour')} <em>${t('magic')}</em></h1>
    <p>${t('catalogText')}</p>
    <span class="catalog-sparkle" aria-hidden="true">✳</span>
  </section>
  <section class="catalog-content">
    <div class="catalog-toolbar">
      <div class="filter-list" role="group" aria-label="${t('filterLabel')}">
        <button class="filter-button" type="button" data-filter="all" aria-pressed="false">${t('allGifts')} <span>12</span></button>
        <button class="filter-button" type="button" data-filter="work" aria-pressed="false">${t('forWork')}</button>
        <button class="filter-button" type="button" data-filter="health" aria-pressed="false">${t('forHealth')}</button>
        <button class="filter-button" type="button" data-filter="harmony" aria-pressed="false">${t('forHarmony')}</button>
      </div>
      <p class="results-count" aria-live="polite"></p>
    </div>
    <div class="gift-grid catalog-grid" id="gift-grid">${gifts.map(giftCard).join('')}</div>
    <p class="empty-state" hidden>${t('emptyState')}</p>
  </section>
</main>
${footer()}
${modal()}`;

const applyFilter = (filter: Filter): void => {
  activeFilter = filter;
  const visible = gifts.filter((gift) => filter === 'all' || gift.category === filter);

  app?.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach((button) => {
    const selected = button.dataset.filter === filter;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });

  app?.querySelectorAll<HTMLElement>('[data-gift-id]').forEach((card) => {
    const gift = gifts.find((item) => item.id === Number(card.dataset.giftId));
    card.hidden = !gift || (filter !== 'all' && gift.category !== filter);
  });

  const count = app?.querySelector<HTMLElement>('.results-count');
  const empty = app?.querySelector<HTMLElement>('.empty-state');
  if (count) count.innerHTML = `<strong>${visible.length}</strong> ${giftCountLabel(visible.length).slice(String(visible.length).length + 1)}`;
  if (empty) empty.hidden = visible.length > 0;
};

const openGiftDialog = (gift: Gift): void => {
  const dialog = app?.querySelector<HTMLDialogElement>('.gift-dialog');
  if (!dialog) return;

  const image = dialog.querySelector<HTMLImageElement>('.dialog-image');
  const category = dialog.querySelector<HTMLElement>('.dialog-category');
  const title = dialog.querySelector<HTMLElement>('#dialog-title');
  const description = dialog.querySelector<HTMLElement>('.dialog-description');
  const bonus = dialog.querySelector<HTMLElement>('.dialog-bonus');
  if (!image || !category || !title || !description || !bonus) return;

  image.src = asset(gift.image);
  image.alt = gift.imageAlt[language];
  category.textContent = categoryLabel(gift.category);
  category.className = `eyebrow eyebrow--${gift.category} dialog-category`;
  title.textContent = gift.title[language];
  description.textContent = gift.description[language];
  bonus.textContent = gift.bonus[language];
  dialog.showModal();
};

const render = (): void => {
  updateDocumentLanguage();
  app!.innerHTML = isGiftsPage ? renderGifts() : renderHome();

  app!.querySelectorAll<HTMLAnchorElement>('a[href*="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname || !destination.hash) return;

      const target = document.getElementById(decodeURIComponent(destination.hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      window.history.pushState(null, '', destination.hash);
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });

  const menuToggle = app!.querySelector<HTMLButtonElement>('.menu-toggle');
  const mobileNav = app!.querySelector<HTMLElement>('.mobile-nav');

  menuToggle?.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menuToggle.setAttribute('aria-label', expanded ? t('openMenu') : t('closeMenu'));
    if (mobileNav) mobileNav.hidden = expanded;
    document.body.classList.toggle('menu-open', !expanded);
  });

  mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    if (mobileNav) mobileNav.hidden = true;
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', t('openMenu'));
    document.body.classList.remove('menu-open');
  }));

  app!.querySelector<HTMLButtonElement>('[data-theme-toggle]')?.addEventListener('click', () => {
    theme = theme === 'light' ? 'dark' : 'light';
    try {
      localStorage.setItem('christmas-shop-theme', theme);
    } catch {
      // Theme switching remains available for the current page.
    }
    applyTheme();
    render();
    if (isGiftsPage) applyFilter(activeFilter);
    if (!isGiftsPage) updateCountdown();
  });

  app!.querySelector<HTMLButtonElement>('[data-language-toggle]')?.addEventListener('click', () => {
    language = language === 'en' ? 'ru' : 'en';
    try {
      localStorage.setItem('christmas-shop-language', language);
    } catch {
      // Language switching remains available for the current page.
    }
    document.body.classList.remove('menu-open');
    render();
    if (isGiftsPage) applyFilter(activeFilter);
    if (!isGiftsPage) updateCountdown();
  });

  app!.querySelectorAll<HTMLButtonElement>('[data-gift-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const gift = gifts.find((item) => item.id === Number(button.dataset.giftId));
      if (gift) openGiftDialog(gift);
    });
  });

  const dialog = app!.querySelector<HTMLDialogElement>('.gift-dialog');
  dialog?.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  app!.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => applyFilter(button.dataset.filter as Filter));
  });

  if (isGiftsPage) applyFilter(activeFilter);
};

render();

if (window.location.hash) {
  const targetId = decodeURIComponent(window.location.hash.slice(1));
  const target = document.getElementById(targetId);
  if (target) {
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    window.scrollTo(0, 0);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  }
}

if (!isGiftsPage) {
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}
