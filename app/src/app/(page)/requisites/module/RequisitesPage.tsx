import React from 'react';
import styles from '../Requisites.module.scss';
import type { Requisites } from '@/lib/cms';

interface RequisitesPageProps {
  data: Requisites | null;
}

function Row({ label, value }: { label: string; value: string | null | undefined }) {
  if (!value) return null;
  return (
    <tr>
      <th scope="row">{label}</th>
      <td>{value}</td>
    </tr>
  );
}

export function RequisitesPage({ data }: RequisitesPageProps) {
  return (
    <section className={styles.requisites} aria-labelledby="requisites-title">
      <h1 id="requisites-title" className={styles.title}>Наши Реквизиты</h1>
      <table className={styles.requisitesTable}>
        <caption className={styles.visuallyHidden}>Реквизиты организации</caption>
        <thead>
          <tr>
            <th scope="col">Наименование</th>
            <th scope="col">Значение</th>
          </tr>
        </thead>
        <tbody>
          <Row label="ОГРН" value={data?.ogrn ? `${data.ogrn}${data.ogrnDate ? ` от ${data.ogrnDate}` : ''}` : null} />
          <Row label="ИНН/КПП" value={data?.inn && data?.kpp ? `${data.inn} / ${data.kpp}` : (data?.inn ?? null)} />
          <Row label="Дата регистрации" value={data?.registrationDate} />
          <Row label="Юридический адрес" value={data?.legalAddress} />
          {(data?.actualAddresses ?? []).map((addr, i) => (
            <tr key={`addr-${i}`}>
              <th scope="row">Фактический адрес</th>
              <td>{addr}</td>
            </tr>
          ))}
          <Row label="Руководитель" value={data?.head} />
          <Row label="Основной вид деятельности" value={data?.mainActivity} />
          <Row label="Налоговый орган" value={data?.taxAuthority} />
          <Row label="ОКПО" value={data?.okpo} />
          <Row label="ОКАТО" value={data?.okato} />
          <Row label="ОКТМО" value={data?.oktmo} />
          <Row label="ОКФС" value={data?.okfs} />
          <Row label="ОКОГУ" value={data?.okogu} />
          <Row label="ОКОПФ" value={data?.okopf} />
        </tbody>
      </table>
    </section>
  );
}
