import React from 'react';
import { Link } from 'react-router-dom';
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';

import Back from '../components/Back/Back';
import styles from './task.module.scss';

const TaskPage: React.FC = () => {

  const addButton = (
    <div className={styles.addButton} />
  );
  return (
    <div className="container">
      <Back url="/topics" />

      <div className="mainTitle">
        Степень с целым показателем
      </div>

      <div className={styles.nav}>
        <div className={styles.navLeft}>
          <Link to="/teacherOffice" className={styles.arrLeft}>
            <LeftOutlined />
          </Link>
          <span className={styles.navText}>
            1. Умножение степеней с одинаковым основанием
          </span>
        </div>

        <div className={styles.navRight}>
          <span className={styles.navText}>
            3. Деление степеней с одинаковм основанием
          </span>
          <Link to="/teacherOffice" className={styles.arrRight}>
            <RightOutlined />
          </Link>
        </div>
      </div>

      <div className={styles.titleWrap}>
        <h2 className={styles.title}>2. Умножение степеней с одинаковым показателем</h2>
        <div className={styles.info}>
          {addButton}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentBody}>
          ЗДЕСЬ БУДЕТ ЗАДАЧА (ИНТЕРАКТИВНАЯ МЕХАНИКА)
        </div>
        <footer className={styles.contentFooter}>
          <Link to="/teacherOffice" className={styles.nextContent}>
            <span>Следующая задача</span>
            <RightOutlined className={styles.nextArr} />
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default TaskPage;
