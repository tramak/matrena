import React from 'react';
import UserOutlined from '@ant-design/icons/UserOutlined';

import logo from '../../img/logo.svg';
import styles from './Header.module.scss';
import { Search } from "./Search";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className="containerEx">
        <div className={styles.headerContent}>
          <div className={styles.left}>
            <img className={styles.logo} src={logo} alt="logo" />
            <h1 className={styles.title}>МАТРЕНА</h1>
          </div>
          <div className={styles.right}>
            <Search />
            <span className={styles.account}>
              <UserOutlined />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};
