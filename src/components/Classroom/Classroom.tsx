import React from 'react';
import UserOutlined from '@ant-design/icons/UserOutlined';
import LinkOutlined from '@ant-design/icons/LinkOutlined';
import ApiOutlined from '@ant-design/icons/ApiOutlined';
import styles from './Classroom.module.scss';
import StudentList from '../StudentList/StudentList';
import EditOutlined from "@ant-design/icons/EditOutlined";
import StudentListEdit from "../StudentListEdit/StudentListEdit";

const Classroom: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <h2 className={styles.title}>
          8А класс, школа 234
        </h2>
        <div className={styles.hButton}>
          <EditOutlined /> Редактировать класс
        </div>
      </div>

      <h3 className={styles.desc}>
        Ученики
      </h3>

      <StudentList />
    </div>
  );
};

export default Classroom;
