import React from 'react';
import styles from './СlassroomEdit.module.scss';
import StudentListEdit from '../StudentListEdit/StudentListEdit';
import UserOutlined from "@ant-design/icons/UserOutlined";
import ApiOutlined from "@ant-design/icons/ApiOutlined";

const ClassroomEdit: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <div className={styles.titleEdit} contentEditable={true} suppressContentEditableWarning={true}>
          8А класс, школа 234
        </div>
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

export default ClassroomEdit;
