import React from 'react';
import styles from '../Requisites.module.scss';

export function RequisitesPage() {
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
          <tr>
            <th scope="row">ОГРН</th>
            <td>1116300004105 от 26 августа 2011 г.</td>
          </tr>
          <tr>
            <th scope="row">ИНН/КПП</th>
            <td>6330044310 / 772001001</td>
          </tr>
          <tr>
            <th scope="row">Дата регистрации</th>
            <td>26.08.2011</td>
          </tr>
          <tr>
            <th scope="row">Юридический адрес</th>
            <td>111673, город Москва, Суздальская ул., д. 4, помещ. 1</td>
          </tr>
          <tr>
            <th scope="row">Фактический адрес</th>
            <td>614023, город Пермь, Фиалковая ул., д. 13</td>
          </tr>
          <tr>
            <th scope="row">Фактический адрес</th>
            <td>426039, город Ижевск, Воткинское шоссе ул., д. 158</td>
          </tr>
          <tr>
            <th scope="row">Фактический адрес</th>
            <td>город Комсомольская улица ул., д. 1/1</td>
          </tr>
          <tr>
            <th scope="row">Руководитель</th>
            <td>
              Президент Мингазов Евгений Рафаильевич (с 17 января 2013 г.)
            </td>
          </tr>
          <tr>
            <th scope="row">Основной вид деятельности</th>
            <td>
              Деятельность прочих общественных организаций и некоммерческих
              организаций, кроме религиозных и политических организаций (94.99)
            </td>
          </tr>
          <tr>
            <th scope="row">Налоговый орган</th>
            <td>Инспекция ФНС России № 20 по г.Москве (с 12 января 2016 г.)</td>
          </tr>
          <tr>
            <th scope="row">ОКПО</th>
            <td>92431311</td>
          </tr>
          <tr>
            <th scope="row">ОКАТО</th>
            <td>45263579000</td>
          </tr>
          <tr>
            <th scope="row">ОКТМО</th>
            <td>45310000000</td>
          </tr>
          <tr>
            <th scope="row">ОКФС</th>
            <td>53 (Собственность общественных объединений)</td>
          </tr>
          <tr>
            <th scope="row">ОКОГУ</th>
            <td>4220003 (Региональные и местные общественные объединения)</td>
          </tr>
          <tr>
            <th scope="row">ОКОПФ</th>
            <td>20200 (Общественные организации)</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
