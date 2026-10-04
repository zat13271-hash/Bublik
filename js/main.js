/* ============================================================
   Бублик — кофейня · main.js
   i18n (RU/EN) · филиалы · счётчики · reveal-анимации · меню
   ============================================================ */

'use strict';

/* ---------- Словарь переводов ---------- */
const I18N = {
  ru: {
    'brand': 'бублик',
    'nav.about': 'О нас',
    'nav.menu': 'Меню',
    'nav.branches': 'Филиалы',
    'nav.contacts': 'Контакты',

    'hero.kicker': 'кофейня · бишкек',
    'hero.tagline': 'Тёплые бублики, честный кофе и место, куда хочется вернуться',
    'hero.cta1': 'Найти филиал',
    'hero.cta2': 'Что попробовать',
    'hero.badge': 'свежее · тёплое · своё · свежее · тёплое · своё · ',
    'hero.marquee': 'бублики с начинкой ✦ свежий кофе ✦ завтраки весь день ✦ боулы ✦ паста ✦ десерты ✦ лимонады ✦ ',

    'about.label': 'о нас / about',
    'about.title': 'Место с характером и запахом свежей выпечки',
    'about.text': '«Бублик» — бишкекская кофейня, которую знают по фирменным бубликам с начинками: с сёмгой, курицей, мясом и сыром. Сюда приходят на завтрак, поработать с ноутбуком и встретиться с друзьями — в каждом филиале свой уют, а кофе всегда одинаково хорош.',
    'about.stat1': 'рейтинг на 2ГИС',
    'about.stat2': 'оценок гостей',
    'about.stat3': 'филиалов в городе',

    'menu.label': 'меню / menu',
    'menu.title': 'Что попробовать в первый раз',
    'menu.note': 'Актуальное меню с ценами — в карточке филиала на 2ГИС',
    'menu.1.t': 'Фирменные бублики',
    'menu.1.d': 'С сёмгой, курицей, мясом или сыром — тёплые, с хрустящей корочкой',
    'menu.2.t': 'Завтраки',
    'menu.2.d': 'Яйца-пашот, каши и боулы — подаём с самого утра',
    'menu.3.t': 'Паста и горячее',
    'menu.3.d': 'Сытные блюда на обед и ужин',
    'menu.4.t': 'Супы и салаты',
    'menu.4.d': 'Грибной крем-суп и свежие салаты',
    'menu.5.t': 'Десерты',
    'menu.5.d': 'Чизкейк и выпечка к кофе',
    'menu.6.t': 'Кофе и напитки',
    'menu.6.d': 'Латте, настоящий горячий шоколад, смузи и лимонады',
    'menu.cta': 'Смотреть меню в 2ГИС →',

    'branches.label': 'филиалы / locations',
    'branches.title': 'Мы рядом — выбирайте свой «Бублик»',
    'branches.btn': 'Открыть в 2ГИС',
    'branches.hours': 'Пн–Сб 8:00–00:00 · Вс 10:00–00:00',
    'branches.tag.center': 'центр',
    'branches.tag.jal': 'джал',
    'branches.tag.mcr': 'микрорайон',
    'branches.tag.express': 'express · навынос',

    'contacts.label': 'контакты / contacts',
    'contacts.hours.t': 'Часы работы',
    'contacts.hours.wd': 'Пн–Сб · 8:00–00:00',
    'contacts.hours.we': 'Вс · 10:00–00:00',
    'contacts.hours.kitchen': 'кухня до 23:00',
    'contacts.reach.t': 'Связаться',
    'contacts.city.t': 'Город',
    'contacts.city.v': 'Бишкек, Кыргызстан',
    'contacts.all': 'Все филиалы на 2ГИС →',

    'footer.note': 'Сделано с теплом · Bublik Coffee, Бишкек',
  },

  en: {
    'brand': 'bublik',
    'nav.about': 'About',
    'nav.menu': 'Menu',
    'nav.branches': 'Locations',
    'nav.contacts': 'Contacts',

    'hero.kicker': 'coffee shop · bishkek',
    'hero.tagline': 'Warm bagels, honest coffee and a place you will want to come back to',
    'hero.cta1': 'Find a location',
    'hero.cta2': 'What to try',
    'hero.badge': 'fresh · warm · ours · fresh · warm · ours · ',
    'hero.marquee': 'filled bagels ✦ fresh coffee ✦ all-day breakfast ✦ bowls ✦ pasta ✦ desserts ✦ lemonades ✦ ',

    'about.label': 'about / о нас',
    'about.title': 'A place with character and the smell of fresh pastry',
    'about.text': 'Bublik is a Bishkek coffee shop known for its signature filled bagels — with salmon, chicken, meat and cheese. People come here for breakfast, to work with a laptop or to meet friends: every location has its own cosiness, and the coffee is always equally good.',
    'about.stat1': 'rating on 2GIS',
    'about.stat2': 'guest ratings',
    'about.stat3': 'locations in the city',

    'menu.label': 'menu / меню',
    'menu.title': 'What to try on your first visit',
    'menu.note': 'See the full menu with prices in each location’s card on 2GIS',
    'menu.1.t': 'Signature bagels',
    'menu.1.d': 'With salmon, chicken, meat or cheese — warm, with a crisp crust',
    'menu.2.t': 'Breakfast',
    'menu.2.d': 'Poached eggs, porridge and bowls — served from early morning',
    'menu.3.t': 'Pasta & mains',
    'menu.3.d': 'Hearty dishes for lunch and dinner',
    'menu.4.t': 'Soups & salads',
    'menu.4.d': 'Mushroom cream soup and fresh salads',
    'menu.5.t': 'Desserts',
    'menu.5.d': 'Cheesecake and pastries to go with coffee',
    'menu.6.t': 'Coffee & drinks',
    'menu.6.d': 'Latte, real hot chocolate, smoothies and lemonades',
    'menu.cta': 'See the menu on 2GIS →',

    'branches.label': 'locations / филиалы',
    'branches.title': 'We are nearby — pick your Bublik',
    'branches.btn': 'Open in 2GIS',
    'branches.hours': 'Mon–Sat 8:00–24:00 · Sun 10:00–24:00',
    'branches.tag.center': 'city centre',
    'branches.tag.jal': 'jal district',
    'branches.tag.mcr': 'microdistrict',
    'branches.tag.express': 'express · takeaway',

    'contacts.label': 'contacts / контакты',
    'contacts.hours.t': 'Opening hours',
    'contacts.hours.wd': 'Mon–Sat · 8:00–24:00',
    'contacts.hours.we': 'Sun · 10:00–24:00',
    'contacts.hours.kitchen': 'kitchen until 23:00',
    'contacts.reach.t': 'Get in touch',
    'contacts.city.t': 'City',
    'contacts.city.v': 'Bishkek, Kyrgyzstan',
    'contacts.all': 'All locations on 2GIS →',

    'footer.note': 'Made with warmth · Bublik Coffee, Bishkek',
  },
};

/* ---------- Данные филиалов ---------- */
const BRANCHES = [
  {
    ru: 'Тоголок Молдо, 5/1',
    en: 'Togolok Moldo St, 5/1',
    tag: 'branches.tag.center',
    query: 'Бублик кофейня Тоголок Молдо 5/1 Бишкек',
  },
  {
    ru: 'Токтогула, 75/1',
    en: 'Toktogul St, 75/1',
    tag: 'branches.tag.center',
    query: 'Бублик кофейня Токтогула 75/1 Бишкек',
  },
  {
    ru: 'Уметалиева, 74',
    en: 'Umetaliev St, 74',
    tag: 'branches.tag.center',
    query: 'Бублик кофейня Уметалиева 74 Бишкек',
  },
  {
    ru: 'Тыналиева, 3/14',
    en: 'Tynaliev St, 3/14',
    tag: 'branches.tag.jal',
    query: 'Бублик кофейня Тыналиева 3/14 Бишкек',
  },
  {
    ru: '7-й микрорайон, 33/3',
    en: '7th microdistrict, 33/3',
    tag: 'branches.tag.mcr',
    query: 'Бублик кофейня 7 микрорайон 33/3 Бишкек',
  },
  {
    ru: 'Боконбаева, 103',
    en: 'Bokonbaev St, 103',
    tag: 'branches.tag.center',
    query: 'Бублик кофейня Боконбаева 103 Бишкек',
  },
  {
    ru: 'Тыналиева, 114/21',
    en: 'Tynaliev St, 114/21',
    tag: 'branches.tag.jal',
    query: 'Бублик кофейня Тыналиева 114/21 Бишкек',
  },
  {
    ru: 'Панфилова, 98',
    en: 'Panfilov St, 98',
    tag: 'branches.tag.express',
    query: 'Бублик Express Панфилова 98 Бишкек',
  },
];

const GIS_BASE = 'https://2gis.kg/bishkek/search/';

let currentLang = 'ru';

/* ---------- Рендер карточек филиалов ---------- */
function renderBranches() {
  const grid = document.getElementById('branchesGrid');
  if (!grid) return;
  const dict = I18N[currentLang];

  grid.innerHTML = BRANCHES.map((b) => `
    <article class="branch reveal is-visible">
      <div class="branch__top">
        <span class="branch__dot" aria-hidden="true"></span>
        <h3 class="branch__name">${b[currentLang]}</h3>
      </div>
      <span class="branch__tag">${dict[b.tag]}</span>
      <p class="branch__hours">${dict['branches.hours']}</p>
      <a class="branch__btn"
         href="${GIS_BASE}${encodeURIComponent(b.query)}"
         target="_blank" rel="noopener"
         aria-label="${dict['branches.btn']}: ${b[currentLang]}">
        ${dict['branches.btn']}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M7 17L17 7M9 7h8v8"/>
        </svg>
      </a>
    </article>
  `).join('');
}

/* ---------- Применение перевода ---------- */
function applyLang(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  const dict = I18N[lang];

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // вращающийся бейдж в герое
  const badge = document.querySelector('[data-i18n-badge]');
  if (badge && dict['hero.badge']) badge.textContent = dict['hero.badge'];

  // бегущая строка
  document.querySelectorAll('[data-i18n-mq]').forEach((el) => {
    el.textContent = dict['hero.marquee'];
  });

  document.querySelectorAll('.lang__btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  renderBranches();

  try { localStorage.setItem('bublik-lang', lang); } catch (e) { /* приватный режим */ }
}

/* ---------- Анимация счётчиков ---------- */
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const decimals = Number.isInteger(target) ? 0 : 1;
  const locale = currentLang === 'en' ? 'en-US' : 'ru-RU';
  const duration = 1400;
  const start = performance.now();
  const fmt = (v) => decimals
    ? v.toFixed(decimals).replace('.', currentLang === 'en' ? '.' : ',')
    : Math.round(v).toLocaleString(locale).replace(/[\u00A0\u202F]/g, ' ');

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = p < 1 ? fmt(target * eased) : fmt(target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------- Инициализация ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // сохранённый язык
  let saved = 'ru';
  try { saved = localStorage.getItem('bublik-lang') || 'ru'; } catch (e) { /* noop */ }
  applyLang(saved);

  // переключатель языка
  document.querySelectorAll('.lang__btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // тень/граница шапки при скролле
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // бургер-меню
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const toggleMenu = (open) => {
    burger.classList.toggle('is-open', open);
    mobileMenu.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => toggleMenu(!burger.classList.contains('is-open')));
  mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggleMenu(false)));

  // reveal-анимации
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // счётчики статистики
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.stat__num').forEach((el) => statObserver.observe(el));
});
