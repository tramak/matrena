import React from 'react';
import Back from '../components/Back/Back';
import styles from './teacherOffice.module.scss';

const TeacherOffice = () => {
  return (
    <div className="container">
      <Back url="/task" />

      <div className="mainTitle">Кабинет учителя</div>

      <div className={styles.buttons}>
        <button className={styles.buttonAdd}>
          Добавить класс
        </button>
      </div>

      <div className={styles.empty}>
        Здесь появятся классы после того, как вы их добавите
      </div>
    </div>
  );
};

export default TeacherOffice;
