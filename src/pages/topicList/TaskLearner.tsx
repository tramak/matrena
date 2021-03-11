import React from 'react';
import { Link } from 'react-router-dom';

import Circle from '../../components/svg/Circle';
import styles from './task.module.scss';

const TaskLearner: React.FC = () => {
  return (
    <Link to={'/task/'} className={styles.task}>
      <div className={styles.info}>
        <Circle />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          Умножение степеней с одинаковым основанием
        </div>
        <div className={styles.desc}>
          ax + bx
        </div>
      </div>
    </Link>
  );
};

export default TaskLearner;
