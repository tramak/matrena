import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Circle from '../../components/svg/Circle';
import styles from './task.module.scss';

const TaskLearner: React.FC = () => {
  const [isOpened, setOpen] = useState(true);

  return (
    <Link to={'/task/'} className={classNames(styles.task, isOpened ? styles.taskOpened : {})}>
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
