const CMS_URL = process.env.CMS_INTERNAL_URL || 'http://localhost:1337';

// ─── Типы ответов Strapi v5 ───────────────────────────────────────────────────

export interface CmsSingleResponse<T> {
  data: T;
}

export interface CmsCollectionResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface CmsMedia {
  id: number;
  url: string;
  width: number | null;
  height: number | null;
  alternativeText: string | null;
}

// ─── Типы контент-типов ───────────────────────────────────────────────────────

export interface ContactInfo {
  id: number;
  mainPhone: string;
  secondPhone: string;
  mainEmail: string;
  mainTelegramLink: string;
  secondTelegramLink: string;
  maxMessengerLink: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  order: number;
}

export interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface Story {
  id: number;
  description: string;
  image: CmsMedia | null;
  order: number;
}

export interface SiteContent {
  id: number;
  homeHeroTitle: string | null;
  homeHeroDescription: string | null;
  socialGoalTitle: string | null;
  socialGoalText: string | null;
  motivationalBannerTitle: string | null;
  motivationalBannerDescription: string | null;
  aboutHeroTitle: string | null;
  aboutHeroSubtitle: string | null;
  aboutHeroDescription: string | null;
  aboutHeroButtonText: string | null;
  teamTitle: string | null;
  teamDescription: string | null;
}

export interface Requisites {
  id: number;
  ogrn: string | null;
  ogrnDate: string | null;
  inn: string | null;
  kpp: string | null;
  registrationDate: string | null;
  legalAddress: string | null;
  actualAddresses: string[] | null;
  head: string | null;
  mainActivity: string | null;
  taxAuthority: string | null;
  okpo: string | null;
  okato: string | null;
  oktmo: string | null;
  okfs: string | null;
  okogu: string | null;
  okopf: string | null;
}

// ─── Утилита запроса ─────────────────────────────────────────────────────────

async function fetchCMS<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${CMS_URL}/api${path}`, {
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json() as Promise<T>;
  } catch {
    return null;
  }
}

// ─── Публичные хелперы ───────────────────────────────────────────────────────

export async function getContactInfo(): Promise<ContactInfo | null> {
  const res = await fetchCMS<CmsSingleResponse<ContactInfo>>('/contact-info');
  return res?.data ?? null;
}

export async function getServices(): Promise<Service[]> {
  const res = await fetchCMS<CmsCollectionResponse<Service>>(
    '/services?sort=order&filters[publishedAt][$notNull]=true&pagination[pageSize]=100'
  );
  return res?.data ?? [];
}

export async function getSteps(): Promise<Step[]> {
  const res = await fetchCMS<CmsCollectionResponse<Step>>(
    '/steps?sort=order&filters[publishedAt][$notNull]=true&pagination[pageSize]=100'
  );
  return res?.data ?? [];
}

export async function getValues(): Promise<Value[]> {
  const res = await fetchCMS<CmsCollectionResponse<Value>>(
    '/values?sort=order&filters[publishedAt][$notNull]=true&pagination[pageSize]=100'
  );
  return res?.data ?? [];
}

export async function getStories(): Promise<Story[]> {
  const res = await fetchCMS<CmsCollectionResponse<Story>>(
    '/stories?sort=order&filters[publishedAt][$notNull]=true&populate=image&pagination[pageSize]=100'
  );
  return res?.data ?? [];
}

export async function getSiteContent(): Promise<SiteContent | null> {
  const res = await fetchCMS<CmsSingleResponse<SiteContent>>('/site-content');
  return res?.data ?? null;
}

export async function getRequisites(): Promise<Requisites | null> {
  const res = await fetchCMS<CmsSingleResponse<Requisites>>('/requisites');
  return res?.data ?? null;
}

/** Строит полный URL для медиа-файла из Strapi */
export function cmsMediaUrl(media: CmsMedia | null): string | null {
  if (!media) return null;
  if (media.url.startsWith('http')) return media.url;
  const base = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:1337';
  return `${base}${media.url}`;
}
