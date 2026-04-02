import { getPrivacyPolicy } from '@/lib/cms';
import { getMetadata } from '@/utils/getMetadata';
import type { Metadata } from 'next';
import styles from './PrivacyPolicy.module.scss';

export const metadata: Metadata = getMetadata({
  title: 'Политика обработки персональных данных',
  description:
    'Политика обработки персональных данных для пользователей сайта бесплатная-помощь-зависимым.рф.',
  url: 'privacy-policy',
});

export default async function PrivacyPolicyPage() {
  const policy = await getPrivacyPolicy();

  const sections = [
    {
      title: policy?.operatorTitle,
      text: policy?.operatorText,
    },
    {
      title: policy?.dataTitle,
      items: policy?.dataItems ?? [],
    },
    {
      title: policy?.purposesTitle,
      items: policy?.purposesItems ?? [],
    },
    {
      title: policy?.legalBasisTitle,
      text: policy?.legalBasisText,
    },
    {
      title: policy?.actionsTitle,
      text: policy?.actionsText,
    },
    {
      title: policy?.storageTitle,
      text: policy?.storageText,
    },
    {
      title: policy?.rightsTitle,
      text: policy?.rightsText,
    },
    {
      title: policy?.securityTitle,
      text: policy?.securityText,
    },
    {
      title: policy?.finalTitle,
      text: policy?.finalText,
    },
  ];

  return (
    <main id="main-content" className={styles.page}>
      <h1 className={styles.title}>{policy?.pageTitle ?? ''}</h1>

      {policy?.lead ? <p className={styles.lead}>{policy.lead}</p> : null}

      {sections.map((section) => {
        if (!section.title) return null;

        if ('items' in section) {
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
