import React from 'react';
import styles from '../Requisites.module.scss';
import type { Requisites } from '@/lib/cms';

interface RequisitesPageProps {
  data: Requisites | null;
  labels: {
    pageTitle: string;
    tableCaption: string;
    columnName: string;
    columnValue: string;
    ogrn: string;
    ogrnDatePrefix: string;
    innKpp: string;
    registrationDate: string;
    legalAddress: string;
    actualAddress: string;
    head: string;
    mainActivity: string;
    taxAuthority: string;
    okpo: string;
    okato: string;
    oktmo: string;
    okfs: string;
    okogu: string;
    okopf: string;
  };
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

export function RequisitesPage({ data, labels }: RequisitesPageProps) {
  return (
    <section className={styles.requisites} aria-labelledby="requisites-title">
      <h1 id="requisites-title" className={styles.title}>{labels.pageTitle}</h1>
      <table className={styles.requisitesTable}>
        <caption className={styles.visuallyHidden}>{labels.tableCaption}</caption>
        <thead>
          <tr>
            <th scope="col">{labels.columnName}</th>
            <th scope="col">{labels.columnValue}</th>
          </tr>
        </thead>
        <tbody>
          <Row
            label={labels.ogrn}
            value={
              data?.ogrn
                ? `${data.ogrn}${data.ogrnDate ? ` ${labels.ogrnDatePrefix} ${data.ogrnDate}` : ''}`
                : null
            }
          />
          <Row
            label={labels.innKpp}
            value={data?.inn && data?.kpp ? `${data.inn} / ${data.kpp}` : (data?.inn ?? null)}
          />
          <Row label={labels.registrationDate} value={data?.registrationDate} />
          <Row label={labels.legalAddress} value={data?.legalAddress} />
          {(data?.actualAddresses ?? []).map((addr, i) => (
            <tr key={`addr-${i}`}>
              <th scope="row">{labels.actualAddress}</th>
              <td>{addr}</td>
            </tr>
          ))}
          <Row label={labels.head} value={data?.head} />
          <Row label={labels.mainActivity} value={data?.mainActivity} />
          <Row label={labels.taxAuthority} value={data?.taxAuthority} />
          <Row label={labels.okpo} value={data?.okpo} />
          <Row label={labels.okato} value={data?.okato} />
          <Row label={labels.oktmo} value={data?.oktmo} />
          <Row label={labels.okfs} value={data?.okfs} />
          <Row label={labels.okogu} value={data?.okogu} />
          <Row label={labels.okopf} value={data?.okopf} />
        </tbody>
      </table>
    </section>
  );
}
