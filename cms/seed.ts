/**
 * Seed-скрипт для Strapi.
 *
 * Запуск после сборки:
 *   npm run build
 *   npm run seed
 *
 * Запуск в production-контейнере:
 *   npm run seed:prod
 *
 * Скрипт использует внутренний Strapi API, а не публичный REST,
 * поэтому не зависит от публичных прав или admin-токенов.
 */

import { createStrapi } from '@strapi/strapi';
import path from 'node:path';

const CONTACT_INFO = {
  mainPhone: '+79229228004',
  secondPhone: '+79235231151',
  mainEmail: 'blagotvoritelnostperm@gmail.com',
  mainTelegramLink: 'https://t.me/PermPreodoleniya',
  secondTelegramLink: 'https://t.me/Eaterina_Tenenkova',
  maxMessengerLink:
    'https://max.ru/u/f9LHodD0cOJr3BzFadTicPzzLvk8o0ZJ8qicmF3Kj3RJ3K28msr4F9vmytM',
};

const SITE_CONTENT = {
  homeHeroTitle: 'Бесплатная помощь зависимым по всей России',
  homeHeroDescription:
    'Независимо от того, какие трудности вы переживаете, мы поможем найти решение и пройти этот путь вместе с вами. Обратившись к нам сегодня, уже спустя месяц Ваш близкий человек может стать свободным от зависимости.',
  socialGoalTitle: 'Наша цель',
  socialGoalText:
    'Наша цель — создать позитивные изменения в обществе, поддерживая уязвимые группы населения и способствуя устойчивому развитию нашего сообщества',
  motivationalBannerTitle:
    'Не откладывай помощь на потом – свяжись с нами прямо сейчас!',
  motivationalBannerDescription:
    'Жизненные трудности могут сделать нас уязвимыми и заставить чувствовать себя одинокими. Но помните, что вы не одиноки в своих проблемах. Наша команда специалистов готова поддержать вас и помочь справиться с любыми трудностями.',
  aboutHeroTitle: 'Кто мы и чем занимаемся',
  aboutHeroSubtitle: 'Наша миссия - поддержка в трудные времена',
  aboutHeroDescription:
    'Мы - некоммерческая организация, созданная для оказания помощи людям, оказавшимся в сложных жизненных ситуациях. Наша команда профессионалов готова предложить вам поддержку, консультации и решения, чтобы вы смогли преодолеть трудности и вернуться к нормальной жизни.',
  aboutHeroButtonText: 'Получить помощь',
  teamTitle: 'Наша команда',
  teamDescription:
    'Наша команда объединяет профессионалов различных направлений, призванных оказывать помощь тем, кто оказался в трудной жизненной ситуации. Мы состоим из опытных специалистов в области психологии, социальной работы, юриспруденции и смежных дисциплин. Объединив усилия, мы обеспечиваем комплексный подход к решению проблем каждого обратившегося, окружая его профессиональной поддержкой на всех этапах преодоления трудностей.',
};

const REQUISITES = {
  ogrn: '1116300004105',
  ogrnDate: '26 августа 2011 г.',
  inn: '6330044310',
  kpp: '772001001',
  registrationDate: '26.08.2011',
  legalAddress: '111673, город Москва, Суздальская ул., д. 4, помещ. 1',
  actualAddresses: [
    '614023, город Пермь, Фиалковая ул., д. 24',
    '426039, город Ижевск, Воткинское шоссе ул., д. 158',
    'город Комсомольская улица ул., д. 1/1',
  ],
  head: 'Президент Мингазов Евгений Рафаильевич (с 17 января 2013 г.)',
  mainActivity:
    'Деятельность прочих общественных организаций и некоммерческих организаций, кроме религиозных и политических организаций (94.99)',
  taxAuthority: 'Инспекция ФНС России № 20 по г.Москве (с 12 января 2016 г.)',
  okpo: '92431311',
  okato: '45263579000',
  oktmo: '45310000000',
  okfs: '53 (Собственность общественных объединений)',
  okogu: '4220003 (Региональные и местные общественные объединения)',
  okopf: '20200 (Общественные организации)',
};

const PRIVACY_POLICY = {
  pageTitle: 'Политика обработки персональных данных',
  lead:
    'Настоящая политика определяет порядок обработки и защиты персональных данных, предоставляемых пользователями сайта при обращении через формы обратной связи.',
  operatorTitle: '1. Оператор персональных данных',
  operatorText: 'Оператором персональных данных является ООО "Феникс".',
  dataTitle: '2. Какие данные обрабатываются',
  dataItems: [
    'имя',
    'номер телефона',
    'содержание сообщения, направленного через форму',
  ],
  purposesTitle: '3. Цели обработки',
  purposesItems: [
    'обработка обращений пользователей',
    'предоставление консультации и обратной связи',
    'ведение внутреннего учета обращений',
    'повышение качества работы сайта и коммуникации с пользователями',
  ],
  legalBasisTitle: '4. Правовые основания обработки',
  legalBasisText:
    'Обработка персональных данных осуществляется на основании согласия субъекта персональных данных, выраженного путем заполнения формы на сайте и установки отметки о согласии с настоящей политикой.',
  actionsTitle: '5. Действия с персональными данными',
  actionsText:
    'Оператор вправе осуществлять сбор, запись, систематизацию, накопление, хранение, уточнение, использование, блокирование и удаление персональных данных в объеме, необходимом для достижения заявленных целей обработки.',
  storageTitle: '6. Срок обработки и хранения',
  storageText:
    'Персональные данные обрабатываются и хранятся не дольше, чем этого требуют цели обработки, если иной срок не установлен законодательством Российской Федерации.',
  rightsTitle: '7. Права субъекта персональных данных',
  rightsText:
    'Пользователь вправе запросить уточнение, блокирование, удаление своих персональных данных, а также отозвать ранее данное согласие на обработку персональных данных, направив обращение оператору по контактным данным, размещенным на сайте.',
  securityTitle: '8. Защита персональных данных',
  securityText:
    'Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения и иных неправомерных действий.',
  finalTitle: '9. Заключительные положения',
  finalText:
    'Оператор вправе вносить изменения в настоящую политику. Актуальная версия политики всегда доступна на этой странице сайта.',
};

const UI_CONTENT = {
  navAboutUsLabel: 'О нас',
  navRequisitesLabel: 'Реквизиты',
  navPrivacyPolicyLabel: 'Политика персональных данных',
  headerNavAriaLabel: 'Основная навигация',
  headerEmailLinkTitle: 'Написать нам',
  burgerMenuOpenLabel: 'Открыть меню',
  burgerMenuCloseLabel: 'Закрыть меню',
  logoText: 'Путь Преодоления',
  logoAriaLabel: 'Путь Преодоления, главная',
  logoAlt: 'Логотип Путь Преодоления',
  skipLinkText: 'Перейти к содержимому',
  headerContactButtonText: 'SOS',
  headerContactButtonAriaLabel: 'Перейти к форме обращения',
  headerContactButtonTitle: 'Перейти к форме обращения',
  phoneLinkLabelPrefix: 'Позвонить по номеру',
  footerCopyrightText: 'ООО "Феникс". Все права защищены.',
  footerPrivacyPolicyText: 'Политика обработки персональных данных',
  homeHeroEyebrow: 'Бесплатная и конфиденциальная поддержка',
  homeSocialChannelsEyebrow: 'На связи',
  homeSocialChannelsTitle: 'Выберите удобный способ связаться с нами',
  homeHeroCallButtonDescription: 'Связь сразу по телефону',
  homeHeroFormButtonText: 'Оставить заявку',
  homeHeroFormButtonDescription: 'Заполнить короткую форму',
  homeHeroMaxButtonDescription: 'Быстрый ответ в Max',
  homeHeroTelegramButtonDescription: 'Написать в Telegram',
  homeServicesEyebrow: 'Направления помощи',
  homeAboutMissionKicker: 'О нас',
  homeAboutTeamKicker: 'Команда',
  contactSectionEyebrow: 'Связаться с нами',
  contactSectionLead:
    'Расскажите коротко о ситуации, и мы подскажем понятный следующий шаг без давления и лишних формальностей.',
  contactDetailsPhoneLabel: 'Телефон',
  contactDetailsEmailLabel: 'Электронная почта',
  contactDetailsHoursLabel: 'Режим связи',
  contactFormCardTitle: 'Форма обращения',
  contactFormCardDescription:
    'Ответим конфиденциально и подберём удобный формат дальнейшего общения.',
  contactFormTitlePrefix: 'Запишитесь',
  contactFormTitleMiddle: 'на',
  contactFormTitleHighlight: 'бесплатную',
  contactFormTitleSuffix: 'консультацию',
  contactFormWorkingHoursText: 'Время работы: круглосуточно',
  contactFormNameLabel: 'Имя',
  contactFormPhoneLabel: 'Телефон',
  contactFormMessageLabel: 'Сообщение',
  contactFormNamePlaceholder: 'Как к вам обращаться?',
  contactFormPhonePlaceholder: '9XXXXXXXXX',
  contactFormMessagePlaceholder: 'Опишите вашу ситуацию',
  contactFormConsentPrefix: 'Я даю согласие на обработку персональных данных и принимаю условия',
  contactFormConsentLinkText: 'политики обработки персональных данных',
  contactFormConsentSuffix: '.',
  contactFormSubmitButtonText: 'Сделать первый шаг',
  contactFormSubmittingButtonText: 'Отправка...',
  contactFormSubmittingSrText: 'Отправка',
  contactFormNameRequiredError: 'Имя обязательно',
  contactFormPhoneFormatError: 'Неверный формат телефона',
  contactFormMessageRequiredError: 'Сообщение обязательно',
  contactFormConsentRequiredError: 'Нужно согласие на обработку персональных данных',
  contactFormSendSuccessText: 'Сообщение успешно отправлено!',
  contactFormSendFailureText: 'Не удалось отправить сообщение. Попробуйте еще раз.',
  homeHeroMaxButtonText: 'Написать в MAX',
  homeHeroTelegramButtonText: 'Написать в Telegram',
  homeHeroCallButtonText: 'Позвонить',
  sliderPrevSlideMessage: 'Предыдущий слайд',
  sliderNextSlideMessage: 'Следующий слайд',
  homeServicesTitle: 'Наши услуги',
  homeServicesFootnote: '* Помощь предоставляется во время восстановления и адаптации',
  homeMotivationalCallButtonText: 'Позвонить сейчас',
  aboutHowWeWorkTitle: 'Как мы работаем?',
  aboutValuesTitle: 'Наши ценности',
  resultsPageTitle: 'Наши результаты',
  resultsStoryAltPrefix: 'История',
  requisitesPageTitle: 'Наши Реквизиты',
  requisitesTableCaption: 'Реквизиты организации',
  requisitesColumnNameLabel: 'Наименование',
  requisitesColumnValueLabel: 'Значение',
  requisitesOgrnLabel: 'ОГРН',
  requisitesOgrnDatePrefix: 'от',
  requisitesInnKppLabel: 'ИНН/КПП',
  requisitesRegistrationDateLabel: 'Дата регистрации',
  requisitesLegalAddressLabel: 'Юридический адрес',
  requisitesActualAddressLabel: 'Фактический адрес',
  requisitesHeadLabel: 'Руководитель',
  requisitesMainActivityLabel: 'Основной вид деятельности',
  requisitesTaxAuthorityLabel: 'Налоговый орган',
  requisitesOkpoLabel: 'ОКПО',
  requisitesOkatoLabel: 'ОКАТО',
  requisitesOktmoLabel: 'ОКТМО',
  requisitesOkfsLabel: 'ОКФС',
  requisitesOkoguLabel: 'ОКОГУ',
  requisitesOkopfLabel: 'ОКОПФ',
  notFoundSubtitle: 'Страница не найдена',
  notFoundText: 'Извините, запрашиваемая вами страница не существует.',
  notFoundLinkText: 'Вернуться на главную',
  notFoundLinkAriaLabel: 'Вернуться на главную',
  licenseImageAltPrefix: 'Страница лицензии',
};

const LICENSE_INFO = {
  title: 'Лицензия на медицинскую деятельность',
  number: '№ ЛО-18-01-002479',
  date: '03.07.2018',
  imageUrls: [
    '/license/1.jpeg',
    '/license/2.jpeg',
    '/license/3.jpeg',
    '/license/4.jpeg',
  ],
};

const SERVICES = [
  {
    title: 'Помощь наркозависимым',
    description: 'Поддержка и консультации для преодоления зависимости.',
    icon: 'FaPills',
    order: 1,
  },
  {
    title: 'Помощь алкозависимым',
    description:
      'Поддержка и восстановление для людей, столкнувшихся с проблемой алкогольной зависимости.',
    icon: 'FaGlassWhiskey',
    order: 2,
  },
  {
    title: 'Помощь бездомным',
    description: 'Временное жилье, питание и необходимая помощь для бездомных.',
    icon: 'FaHome',
    order: 3,
  },
  {
    title: 'Психологическая помощь',
    description: 'Профессиональная поддержка в преодолении жизненных трудностей',
    icon: 'FaBookReader',
    order: 4,
  },
  {
    title: 'Юридическая консультация',
    description: 'Правовая помощь и защита ваших прав.',
    icon: 'FaGavel',
    order: 5,
  },
  {
    title: 'Семейное консультирование',
    description: 'Помощь в решении семейных конфликтов и проблем.',
    icon: 'FaUserFriends',
    order: 6,
  },
  {
    title: 'Финансовое консультирование',
    description: 'Помощь в решении финансовых вопросов и проблем с долгами.',
    icon: 'FaMoneyBillWave',
    order: 7,
  },
  {
    title: 'Помощь людям с ограниченными возможностями',
    description:
      'Поддержка и помощь в адаптации для людей с ограниченными возможностями.',
    icon: 'FaAccessibleIcon',
    order: 8,
  },
];

const STEPS = [
  {
    title: 'Первый контакт',
    description: 'Звонок или обращение. Выслушаем и проконсультируем.',
    order: 1,
  },
  {
    title: 'Оценка ситуации',
    description: 'Анализ для разработки индивидуального плана.',
    order: 2,
  },
  {
    title: 'Комплексная помощь',
    description: 'Предоставление разносторонней поддержки.',
    order: 3,
  },
  {
    title: 'Путь к улучшению',
    description: 'Сопровождение на всех этапах.',
    order: 4,
  },
];

const VALUES = [
  {
    title: 'Сострадание',
    description: 'Мы относимся к каждому с пониманием, заботой и уважением.',
    icon: 'FaHandHoldingHeart',
    order: 1,
  },
  {
    title: 'Справедливость',
    description:
      'Мы стремимся обеспечить равные возможности и помощь для всех, кто в ней нуждается.',
    icon: 'FaBalanceScale',
    order: 2,
  },
  {
    title: 'Сотрудничество',
    description:
      'Мы работаем в тесном сотрудничестве с другими организациями и партнерами для достижения наилучших результатов.',
    icon: 'FaHandshake',
    order: 3,
  },
  {
    title: 'Поддержка сообщества',
    description:
      'Мы верим в силу сообщества и стремимся объединять людей для взаимной поддержки.',
    icon: 'FaUserFriends',
    order: 4,
  },
];

const STORIES = [
  {
    description:
      'Халиф Р. 30 лет . Основная проблема - это наркотическая зависимость(синтетические вещества). В последствии проблемы с семьей и друзьями , проблемы с законом. Отчаялся и заблудился. После курса восстановления наладились отношения во всех сферах жизни, появилась цель и стал заметен результат проделанной работы.',
    order: 1,
  },
  {
    description:
      'Андрей К. 41 год Основная проблема - бездомный с алко- и нарко- зависимостями. Предложили ему помощь наши волонтеры , встретив его на улице в нетрезвом состоянии. Не было рядом никого из «друзей-собутыльников». Все отвернулись, остался один. Пройдя курс восстановления , жизнь стала налаживаться , новые знакомства и друзья. Стартовал Огромный прорыв в жизни.',
    order: 2,
  },
  {
    description:
      'Евгений Б. 52 года Основная проблема - алкогольная зависимость. Попал в места лишения свободы. Родные отказались от общения. После отбывания срока в исправительном учреждении обратился к нам разбитым человеком. После курса восстановления изменился взгляд на жизнь , появилась новая цель и медленно движется к ней. Налаживается общение с семьей, детьми и внуками.',
    order: 3,
  },
  {
    description:
      'Борис Д. 33 года Основная проблема - бездомный в следствии алкогольной зависимости. Долгое время жил на чердаке дома , где проживал с родителями. Ужасный образ жизни, родители перестали пускать домой, устали. Соседи долгое время пытались помочь своими силами , но все было безуспешно. В один день кто-то из неравнодушных людей позвонил и обратился за помощью для Бориса. Спустя некоторое времени был виден колоссальный результат в изменении не только внешности , но и жизненных ценностей.',
    order: 4,
  },
  {
    description:
      'Олеся и Андрей К. Основная проблема - алко- и нарко- зависимости , проблемы с жильным и работой. Олеся и Андрей долгое время проходили курс восстановления в нашей организации. Где познакомили и понравились друг другу. После успешного прохождения восстановления, они решили создать семью , в чем мы им с огромным удовольствием помогли. Жизнь засеяла новыми красками и появились новые современные цели.',
    order: 5,
  },
  {
    description:
      'Вадим А. 27 лет Основная проблема - алкогольная и наркотическая зависимость. Начал общение в дурной компании , друг предложил попробовать наркотики , за короткое время все пошло под откос. После наркотиков на местных вечеринках все было принято запить алкоголем. Началось множество проблем не только в семье и личного характера , но и со здоровьем. Пройдя весь путь восстановления , Вадим принял решение помогать таким же как и он , людям с зависимостями , развиваясь в этом направлении.',
    order: 6,
  },
];

type SingleService = {
  find: () => Promise<unknown>;
  createOrUpdate: (params: { data: unknown }) => Promise<unknown>;
};

type CollectionService = {
  find: (params?: unknown) => Promise<{ results?: unknown[] }>;
  create: (params: { data: unknown }) => Promise<unknown>;
};

async function seedSingleType(
  strapi: any,
  uid: string,
  data: unknown,
  label: string
) {
  const service = strapi.service(uid) as SingleService;
  const existing = await service.find();
  await service.createOrUpdate({ data });
  console.log(existing ? `✓ ${label} обновлён` : `✓ ${label} создан`);
}

async function seedCollection(
  strapi: any,
  uid: string,
  items: unknown[],
  label: string
) {
  const service = strapi.service(uid) as CollectionService;
  const existing = await service.find({ pagination: { page: 1, pageSize: 1 } });
  const total = existing?.results?.length ?? 0;

  if (total > 0) {
    console.log(`⏭  ${label} — уже есть данные, пропускаю`);
    return;
  }

  for (const item of items) {
    await service.create({ data: item });
  }

  console.log(`✓ ${label} — добавлено ${items.length} записей`);
}

async function main() {
  const appDir = process.cwd();
  const distDir = path.join(appDir, 'dist');
  const strapi = createStrapi({ appDir, distDir });

  try {
    console.log('🌱 Seed CMS...\n');

    await strapi.load();

    await seedSingleType(
      strapi,
      'api::contact-info.contact-info',
      CONTACT_INFO,
      'Контактная информация'
    );
    await seedSingleType(
      strapi,
      'api::site-content.site-content',
      SITE_CONTENT,
      'Контент сайта'
    );
    await seedSingleType(
      strapi,
      'api::requisites.requisites',
      REQUISITES,
      'Реквизиты'
    );
    await seedSingleType(
      strapi,
      'api::privacy-policy.privacy-policy',
      PRIVACY_POLICY,
      'Политика персональных данных'
    );
    await seedSingleType(
      strapi,
      'api::ui-content.ui-content',
      UI_CONTENT,
      'UI тексты'
    );
    await seedSingleType(
      strapi,
      'api::license-info.license-info',
      LICENSE_INFO,
      'Лицензия'
    );

    await seedCollection(strapi, 'api::service.service', SERVICES, 'Услуги');
    await seedCollection(strapi, 'api::step.step', STEPS, 'Шаги');
    await seedCollection(strapi, 'api::value.value', VALUES, 'Ценности');
    await seedCollection(strapi, 'api::story.story', STORIES, 'Истории');

    console.log('\n✅ Готово!');
    console.log('   Изображения для историй нужно загрузить вручную через Media Library.\n');
  } finally {
    await strapi.destroy();
  }
}

main().catch((err) => {
  console.error('❌ Ошибка:', err.message);
  process.exit(1);
});
