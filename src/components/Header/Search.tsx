import React from 'react';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import styles from "./Search.module.scss";

export const Search: React.FC = () => {
  return (
    <div className={styles.search}>
      <input className={styles.input} placeholder="Поиск..." />
      <div className={styles.icon}>
        <SearchOutlined />
      </div>
    </div>
  )
};

