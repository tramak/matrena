import React from 'react';
import classNames from 'classnames';
import logo from '../../img/logo.svg';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className="containerEx">
        <div className={styles.logoBlock}>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
        <div className={styles.footerContent}>
          <div className={classNames(styles.nav, styles.nav1)}>
            <h2>
              <a className={styles.link} href="">Регистрация для учителя</a>
            </h2>
            <ul className={styles.ul}>
              <li>
                <a className={styles.link} href="">Зарегистрироваться</a>
              </li>
              <li>
                <a className={styles.link} href="">Справка учителя</a>
              </li>
            </ul>
          </div>
          <div className={classNames(styles.nav, styles.nav2)}>
            <h2>
              <a className={styles.link} href="">О проекте</a>
            </h2>
            <ul className={styles.ul}>
              <li>
                <a className={styles.link} href="">Кто создал проект?</a>
              </li>
              <li>
                <a className={styles.link} href="">Идея проекта</a>
              </li>
              <li>
                <a className={styles.link} href="">Правовая информация</a>
              </li>
            </ul>
          </div>
          <div className={classNames(styles.nav, styles.nav3)}>
            <h2>
              <a className={styles.link} href="">Навигация</a>
            </h2>
            <ul className={styles.ul}>
              <li>
                <a className={styles.link} href="">Выбрать тренинг</a>
              </li>
              <li>
                <a className={styles.link} href="">Личный кабинет</a>
              </li>
              <li>
                <a className={styles.link} href="">Правовая информация</a>
              </li>
            </ul>
          </div>
          <div className={classNames(styles.nav, styles.nav4)}>
            <h2>
              <a className={styles.link} href="">Контакты</a>
            </h2>
            <ul className={styles.ul}>
              <li>
                <span className={styles.textItem}>ООО “Некоторая фирма”</span>
              </li>
              <li>
                <span className={styles.textItem}>ИНН 1111111111 КПП 1111111</span>
              </li>
              <li>
                <span className={styles.textItem}>ОГРН 111111111111111111111</span>
              </li>
              <li>
                <span className={styles.textItem}>111111, г. Москва,  ул. Некоторая, д. 1, к. 1</span>
              </li>
              <li>
                <span className={styles.textItem}>
                  <span>E-mail: e@mail.ru</span>
                  <span>Телефон: +7-495-123-45-67</span>
                </span>
              </li>
            </ul>
          </div>
          <div className={classNames(styles.nav, styles.nav5)}>
            <h2>
              <a className={styles.link} href="">БЛОК СОЦИАЛЬНЫХ СЕТЕЙ</a>
            </h2>
            <ul className={styles.ul}>
              <li>
                <a className={styles.link} href="">Ссылка ВК</a>
              </li>
              <li>
                <a className={styles.link} href="">Ссылка на телеграм-канал</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};
