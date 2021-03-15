import React from 'react';
import UserOutlined from '@ant-design/icons/UserOutlined';
import LinkOutlined from '@ant-design/icons/LinkOutlined';
import ApiOutlined from '@ant-design/icons/ApiOutlined';
import styles from './classroom.module.scss';
import StudentListEdit from '../StudentListEdit/StudentListEdit';

const Classroom: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        {false ? (
          <h2 className={styles.title}>
            8А класс, школа 234
          </h2>
        ): (
          <div className={styles.titleEdit} contentEditable={true}>
            8А класс, школа 234
          </div>
        )}
        <div className={styles.hButtons}>
          <button className={styles.hButton}>
            Отмена
          </button>
          <button className={styles.hButton}>
            Сохранить
          </button>
        </div>
      </div>

      <h3 className={styles.desc}>
        Ученики
      </h3>

      <div className={styles.buttons}>
        <button className={styles.button}>
          <UserOutlined />
          <span className={styles.buttonText}>Добавить ученика вручную</span>
        </button>
        <button className={styles.button}>
          {/*<LinkOutlined />*/}
          <ApiOutlined />
          <span className={styles.buttonText}>Добавить ученика по ID</span>
        </button>
      </div>

      <StudentListEdit />
    </div>
  );
};

export default Classroom;
