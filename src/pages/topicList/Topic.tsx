import React, {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import DownOutlined from '@ant-design/icons/DownOutlined';

import styles from './topic.module.scss';
import TaskLearner from "./TaskLearner";

const Topic: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!listRef?.current) return;
    setHeight(isOpen ? listRef.current.offsetHeight : 0);
  }, [isOpen, listRef]);

  return (
    // <li className={classNames(styles.topic)}>
    <li className={
      classNames(
        styles.topic,
        isOpen ? styles.topicOpen: {}
      )
    }>
      <div className={styles.header} onClick={() => setOpen(!isOpen)}>
        <span>7 класс</span>
        <div className={styles.topicChk}>
          <DownOutlined />
        </div>
      </div>
      <div className={styles.body} style={{
        height
      }}>
        <div className={styles.list} ref={listRef}>
          <TaskLearner />
          <TaskLearner />
          <TaskLearner />
          <TaskLearner />
          <TaskLearner />
          <TaskLearner />
        </div>
      </div>
    </li>
  );
};

export default Topic;
