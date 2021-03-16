import React from 'react';
import styles from './Classroom.module.scss';
import StudentList from '../StudentList/StudentList';
import EditOutlined from "@ant-design/icons/EditOutlined";

const Classroom: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <h2 className={styles.title}>
          8А класс, школа 234
        </h2>
        <div className={styles.hButton}>
          <EditOutlined />
          <span className={styles.hButtonText}>Редактировать класс</span>
        </div>
      </div>

      <StudentList />
    </div>
  );
};

export default Classroom;
