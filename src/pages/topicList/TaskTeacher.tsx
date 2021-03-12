import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './task.module.scss';

const TaskTeacher: React.FC = () => {
  const [isOpened, setOpen] = useState(false);

  return (
    <Link to={'/task/'} className={classNames(styles.task, isOpened ? styles.taskOpened : {})}>
      <div className={styles.info}>
        <div className={styles.addButton} />
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

export default TaskTeacher;
