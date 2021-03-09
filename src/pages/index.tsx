import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './index.module.scss';

const IndexPage: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.title}>Выберите направление тренинга:</div>
      </div>

      <ul className={styles.list}>
        <li className={styles.itemLink}>
          <Link to="/" className={classNames(styles.link, styles.type1)}>
            7 класс
          </Link>
        </li>
        <li className={styles.itemLink}>
          <Link to="/" className={classNames(styles.link, styles.type2)}>
            8 класс
          </Link>
        </li>
        <li className={styles.itemLink}>
          <Link to="/" className={classNames(styles.link, styles.type3)}>
            9 класс
          </Link>
        </li>
        <li className={styles.itemLink}>
          <Link to="/" className={classNames(styles.link, styles.type4)}>
            ОГЭ
          </Link>
        </li>
        <li className={styles.itemLink}>
          <Link to="/" className={classNames(styles.link, styles.type5)}>
            ЕГЭ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
