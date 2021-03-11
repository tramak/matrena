import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';

import Topic from './topicList/Topic';
import styles from './topicList.module.scss';

const TopicListPage: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.back}>
        <Link to="/" className={styles.backLink}>
          <ArrowLeftOutlined /> Назад
        </Link>
      </div>

      <div className={styles.header}>
        <h1 className={styles.title}>8 класс</h1>
        <div className={styles.select}>
          К другим тренингам
        </div>
      </div>

      <ul className={styles.list}>
        <Topic />
        <Topic />
        <Topic />
        <Topic />
      </ul>
    </div>
  );
};

export default TopicListPage;