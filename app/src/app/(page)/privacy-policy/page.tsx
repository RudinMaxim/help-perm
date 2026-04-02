import { getPrivacyPolicy } from '@/lib/cms';
import { getMetadata } from '@/utils/getMetadata';
import type { Metadata } from 'next';
import styles from './PrivacyPolicy.module.scss';

type PolicySection =
  | {
      title: string | null;
      text: string | null;
      items?: undefined;
    }
  | {
      title: string | null;
      text?: undefined;
      items: string[];
    };

export const metadata: Metadata = getMetadata({
  title: 'Политика обработки персональных данных',
  description:
    'Политика обработки персональных данных для пользователей сайта бесплатная-помощь-зависимым.рф.',
  url: 'privacy-policy',
});

export default async function PrivacyPolicyPage() {
  const policy = await getPrivacyPolicy();

  const sections: PolicySection[] = [
    {
      title: policy?.operatorTitle ?? null,
      text: policy?.operatorText ?? null,
    },
    {
      title: policy?.dataTitle ?? null,
      items: policy?.dataItems ?? [],
    },
    {
      title: policy?.purposesTitle ?? null,
      items: policy?.purposesItems ?? [],
    },
    {
      title: policy?.legalBasisTitle ?? null,
      text: policy?.legalBasisText ?? null,
    },
    {
      title: policy?.actionsTitle ?? null,
      text: policy?.actionsText ?? null,
    },
    {
      title: policy?.storageTitle ?? null,
      text: policy?.storageText ?? null,
    },
    {
      title: policy?.rightsTitle ?? null,
      text: policy?.rightsText ?? null,
    },
    {
      title: policy?.securityTitle ?? null,
      text: policy?.securityText ?? null,
    },
    {
      title: policy?.finalTitle ?? null,
      text: policy?.finalText ?? null,
    },
  ];

  return (
    <main id="main-content" className={styles.page}>
      <h1 className={styles.title}>{policy?.pageTitle ?? ''}</h1>

      {policy?.lead ? <p className={styles.lead}>{policy.lead}</p> : null}

      {sections.map((section) => {
        if (!section.title) return null;

        if (Array.isArray(section.items)) {
          if (section.items.length === 0) return null;

          return (
            <section key={section.title} className={styles.section}>
              <h2>{section.title}</h2>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          );
        }

        if (!section.text) return null;

        return (
          <section key={section.title} className={styles.section}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        );
      })}
    </main>
  );
}
