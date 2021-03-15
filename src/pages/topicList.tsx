import React from 'react';
import Back from '../components/Back/Back';

import Topic from './topicList/Topic';
import styles from './topicList.module.scss';

const TopicListPage: React.FC = () => {
  return (
    <div className="container">
      <Back url="/" />

      <div className={styles.header}>
        <span className={styles.headerSpacer} />
        <h1 className={styles.title}>8 класс</h1>
        <div className={styles.selectWrap}>
          <div className={styles.select}>
            К другим тренингам
          </div>
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
