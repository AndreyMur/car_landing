export const IMG = {
  hero: "https://image.qwenlm.ai/generated-images/376e65e0-6d8f-4efa-bf73-e129565b9618/_result.png",
  diag: "https://image.qwenlm.ai/generated-images/7f062a7a-3ff9-4471-af5f-3091f7a00ba1/_result.png",
  before:
    "https://image.qwenlm.ai/generated-images/50ef99bd-73f4-4877-a38c-ff0c4fb72000/_result.png",
  after:
    "https://image.qwenlm.ai/generated-images/d3e70b24-f19d-4d7f-a04d-9e6a8e20d449/_result.png",
  team: "https://image.qwenlm.ai/generated-images/5c776801-5df7-48c5-b7ef-9bfab81b4363/_result.png",
  brake:
    "https://image.qwenlm.ai/generated-images/24e2b018-0f05-44ba-8a82-aee1ccff2ddf/_result.png",
};

export const CONTACTS = {
  phoneDisplay: "+7 (495) 120-38-40",
  phoneHref: "tel:+74951203840",
  wa: "https://wa.me/74951203840",
  tg: "https://t.me/ceh01",
  viber: "viber://chat?number=%2B74951203840",
  email: "hello@ceh01.ru",
  address: "Москва, ул. Складочная, 1, стр. 18",
  metro: "м. Бутырская",
  hours: "Ежедневно 9:00 — 21:00",
  maps: "https://yandex.ru/maps/?text=Москва, Складочная улица, 1с18",
};

export const NAV = [
  { label: "Услуги", href: "#services" },
  { label: "Калькулятор", href: "#quiz" },
  { label: "Этапы", href: "#steps" },
  { label: "Команда", href: "#team" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#callback" },
];

/* ---------- quiz ---------- */

export type Brand = { name: string; k: number; models: string[] };

export const BRANDS: Brand[] = [
  { name: "LADA", k: 0.85, models: ["Vesta", "Granta", "Niva Travel", "Largus", "XRAY"] },
  { name: "KIA", k: 1, models: ["Rio", "Sportage", "Ceed", "Sorento", "K5"] },
  { name: "Hyundai", k: 1, models: ["Solaris", "Creta", "Tucson", "Elantra", "Santa Fe"] },
  { name: "Volkswagen", k: 1.15, models: ["Polo", "Tiguan", "Golf", "Passat", "Touareg"] },
  { name: "Škoda", k: 1.1, models: ["Octavia", "Rapid", "Kodiaq", "Karoq", "Superb"] },
  { name: "Toyota", k: 1.15, models: ["Camry", "RAV4", "Corolla", "Land Cruiser", "Highlander"] },
  { name: "Renault", k: 0.95, models: ["Logan", "Duster", "Kaptur", "Arkana"] },
  { name: "Nissan", k: 1.05, models: ["Qashqai", "X-Trail", "Juke", "Murano"] },
  { name: "BMW", k: 1.5, models: ["1 серии", "3 серии", "5 серии", "X3", "X5"] },
  { name: "Mercedes-Benz", k: 1.55, models: ["A-класс", "C-класс", "E-класс", "GLC", "GLE"] },
];

export type QuizService = {
  id: string;
  icon: string;
  title: string;
  base: [number, number];
  note: string;
};

export const QUIZ_SERVICES: QuizService[] = [
  { id: "to", icon: "oil", title: "ТО и масла", base: [4500, 9000], note: "по регламенту" },
  { id: "brakes", icon: "brake", title: "Тормозная система", base: [2800, 7500], note: "колодки · диски" },
  { id: "susp", icon: "spring", title: "Подвеска и рулевое", base: [3200, 8800], note: "стуки · увод" },
  { id: "engine", icon: "engine", title: "Двигатель и ГРМ", base: [7900, 24000], note: "цепи · ремни" },
  { id: "elec", icon: "bolt", title: "Электрика", base: [1500, 6000], note: "утечки · ошибки" },
  { id: "ac", icon: "cool", title: "Кондиционер", base: [2500, 5500], note: "заправка · утечки" },
  { id: "body", icon: "spray", title: "Кузов и покраска", base: [8000, 30000], note: "ДТП · сколы" },
  { id: "align", icon: "wheel", title: "Развал-схождение", base: [2400, 3200], note: "3D-стенд" },
];

export type Urgency = { id: string; label: string; note: string; k: number };

export const URGENCY: Urgency[] = [
  { id: "today", label: "Сегодня", note: "приоритетная запись", k: 1.1 },
  { id: "tomorrow", label: "Завтра", note: "обычная запись", k: 1 },
  { id: "week", label: "На этой неделе", note: "гибкое время", k: 0.95 },
];

/* ---------- bento services ---------- */

export type Bento = {
  icon: string;
  title: string;
  desc: string;
  price: string;
  time: string;
  img?: string;
  span: string;
};

export const BENTO: Bento[] = [
  {
    icon: "scan",
    title: "Компьютерная диагностика",
    desc: "Дилерские сканеры Launch X-431 и Autel MaxiSys: читаем все блоки управления, показываем ошибки и параметры в реальном времени прямо на экране.",
    price: "от 900 ₽",
    time: "30–60 мин",
    img: IMG.diag,
    span: "sm:col-span-2 lg:col-span-4 lg:row-span-2",
  },
  {
    icon: "oil",
    title: "Техническое обслуживание",
    desc: "Регламенты производителей, масла и фильтры в наличии, отметка в сервисной книжке — дилерская гарантия сохраняется.",
    price: "от 3 500 ₽",
    time: "от 1 часа",
    span: "sm:col-span-1 lg:col-span-2",
  },
  {
    icon: "brake",
    title: "Тормозная система",
    desc: "Колодки, диски, суппорты, замена жидкости DOT-4/5.1, проверка на стенде MAHA с распечаткой.",
    price: "от 1 800 ₽",
    time: "от 40 мин",
    img: IMG.brake,
    span: "sm:col-span-1 lg:col-span-2",
  },
  {
    icon: "engine",
    title: "Двигатель и ГРМ",
    desc: "Цепи и ремни ГРМ по меткам, прокладки, раскоксовка, капремонт с обкаткой и дефектовкой на глазах.",
    price: "от 4 900 ₽",
    time: "от 3 часов",
    span: "sm:col-span-1 lg:col-span-2",
  },
  {
    icon: "spring",
    title: "Подвеска и рулевое",
    desc: "Амортизаторы, рычаги, сайлентблоки, рейки. После работ — обязательный контроль на 3D-стенде.",
    price: "от 1 500 ₽",
    time: "от 1 часа",
    span: "sm:col-span-1 lg:col-span-2",
  },
  {
    icon: "bolt",
    title: "Электрика и электроника",
    desc: "Поиск утечек тока, проводка, стартеры, генераторы, прошивки и адаптации блоков.",
    price: "от 1 200 ₽",
    time: "от 30 мин",
    span: "sm:col-span-1 lg:col-span-2",
  },
  {
    icon: "spray",
    title: "Кузовной ремонт и покраска",
    desc: "Локальная и полная покраска в камере Simat, подбор цвета по VIN, восстановление геометрии на стапеле.",
    price: "от 6 000 ₽",
    time: "от 1 дня",
    span: "sm:col-span-2 lg:col-span-4",
  },
  {
    icon: "wheel",
    title: "3D развал-схождение",
    desc: "Стенд Hunter HawkEye Elite, точность до 0°01′, распечатка «до/после» — вам в руки.",
    price: "от 2 400 ₽",
    time: "40 мин",
    span: "sm:col-span-1 lg:col-span-2",
  },
  {
    icon: "cool",
    title: "Кондиционеры",
    desc: "Заправка по весам, диагностика утечек азотом, антибактериальная обработка испарителя.",
    price: "от 1 900 ₽",
    time: "от 40 мин",
    span: "sm:col-span-1 lg:col-span-2",
  },
];

/* ---------- steps ---------- */

export type Step = {
  title: string;
  text: string;
  tags: { label: string; hot?: boolean }[];
};

export const STEPS: Step[] = [
  {
    title: "Заявка и консультация",
    text: "Позвоните или оставьте заявку — мастер-приёмщик уточнит симптомы, назовёт вилку цены именно по вашей модели и забронирует подъёмник.",
    tags: [{ label: "5 минут" }, { label: "0 ₽", hot: true }],
  },
  {
    title: "Диагностика и фикс-смета",
    text: "Ищем причину, а не следствие. Смета с работами и запчастями фиксируется в договоре до начала работ — и дальше не растёт.",
    tags: [
      { label: "40 минут" },
      { label: "смета не меняется", hot: true },
    ],
  },
  {
    title: "Ремонт с фотоотчётом",
    text: "Каждый этап — фото в WhatsApp или Telegram: снятые детали, моменты затяжки, новые запчасти с этикетками. Старые запчасти вернём в багажник.",
    tags: [{ label: "фотоотчёт", hot: true }, { label: "онлайн-наблюдение" }],
  },
  {
    title: "Двойной контроль качества",
    text: "Мастер сдаёт работу мастеру ОТК: контрольная поездка, повторная диагностика и чек-лист из 24 пунктов по узлам, которых касались руки.",
    tags: [{ label: "ОТК" }, { label: "чек-лист 24 пункта" }],
  },
  {
    title: "Выдача с гарантией от 1 года",
    text: "Гарантия на работы и запчасти прописана в договоре, отметка — в сервисной книжке. В гарантийный случай — без очереди.",
    tags: [
      { label: "от 1 года", hot: true },
      { label: "договор" },
      { label: "сервисная книжка" },
    ],
  },
];

/* ---------- team & equipment ---------- */

export type Master = {
  initials: string;
  name: string;
  role: string;
  exp: string;
  note: string;
};

export const TEAM: Master[] = [
  {
    initials: "ВС",
    name: "Виктор Санин",
    role: "Мастер-приёмщик",
    exp: "12 лет",
    note: "переводит с технического на человеческий",
  },
  {
    initials: "АК",
    name: "Артём Ковалёв",
    role: "Моторист",
    exp: "9 лет",
    note: "сертификат ZF · специализация VAG и BMW",
  },
  {
    initials: "ДЮ",
    name: "Денис Юрьев",
    role: "Автоэлектрик-диагност",
    exp: "11 лет",
    note: "выпускник Autel University",
  },
  {
    initials: "МГ",
    name: "Марат Гилязов",
    role: "Кузовной мастер · маляр",
    exp: "8 лет",
    note: "покраска в камере · подбор цвета по VIN",
  },
];

export const EQUIP = [
  { icon: "wheel", name: "3D-стенд развала Hunter HawkEye Elite", note: "точность 0°01′" },
  { icon: "scan", name: "Дилерские сканеры Launch X-431 / Autel", note: "все блоки авто" },
  { icon: "engine", name: "6 подъёмников Ravaglioli до 5 т", note: "без очередей" },
  { icon: "spray", name: "Покрасочно-сушильная камера Simat", note: "заводская пыль" },
  { icon: "gauge", name: "Стенд тормозов и подвески MAHA", note: "распечатка до/после" },
  { icon: "wrench", name: "Стапель Blackhawk", note: "лазерная геометрия" },
];

/* ---------- reviews ---------- */

export type Review = {
  name: string;
  car: string;
  date: string;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Алексей",
    car: "Kia Sportage, 2019",
    date: "2 недели назад",
    text: "Меняли цепь ГРМ. Смету зафиксировали до работ — в итоге ни рубля сверху. Каждый вечер присылали фото: вот снятая цепь со stretched-метками, вот новая. Так должен работать каждый сервис.",
  },
  {
    name: "Марина",
    car: "VW Polo, 2021",
    date: "месяц назад",
    text: "Приехала с непонятным стуком. За 40 минут нашли стойку стабилизатора, подняли машину и показали пальцем. Дали выбрать: оригинал или Lemförder. Через 3 часа уже забирала авто.",
  },
  {
    name: "Игорь",
    car: "BMW X3 G01",
    date: "месяц назад",
    text: "Три сервиса до этого не могли найти утечку тока. Денис нашёл за два часа — окислившийся разъём в багажнике. Взяли только за диагностику, хотя могли «лечить» неделю.",
  },
];

export const MARQUEE_BRANDS = [
  "LADA",
  "KIA",
  "HYUNDAI",
  "VOLKSWAGEN",
  "ŠKODA",
  "TOYOTA",
  "RENAULT",
  "NISSAN",
  "BMW",
  "MERCEDES-BENZ",
  "MAZDA",
  "MITSUBISHI",
];

export const fmt = (n: number) =>
  n.toLocaleString("ru-RU", { maximumFractionDigits: 0 });

export const round100 = (n: number) => Math.round(n / 100) * 100;
