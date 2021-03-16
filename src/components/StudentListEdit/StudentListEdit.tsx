import React from 'react';
import DragOutlined from '@ant-design/icons/DragOutlined';
import styles from './StudentListEdit.module.scss';

const StudentListEdit: React.FC = () => {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
        <tr>
          <th className={styles.drag} />
          <th className={styles.name}>Фамилия</th>
          <th className={styles.name}>Имя</th>
          <th className={styles.name}>Отчество</th>
          <th className={styles.name}>Моб. телефон</th>
          <th className={styles.name}>E-mail</th>
          <th className={styles.name}>ID</th>
        </tr>
        </thead>
        <tbody>
        {
          [0, 1, 2, 3, 4].map(item => {
            return (
              <tr key={item}>
                <td className={styles.drag}>
                  <DragOutlined />
                </td>
                <td className={styles.field}>
                  <input name="name" className={styles.input} value="Иванов" />
                </td>
                <td className={styles.field}>
                  <input name="name" className={styles.input} value="Петр" />
                </td>
                <td className={styles.field}>
                  <input name="name" className={styles.input} value="Сергеевич" />
                </td>
                <td className={styles.field}>
                  <input name="name" className={styles.input} value="+7-925-123-45-67" />
                </td>
                <td className={styles.field}>
                  <input name="name" className={styles.input} value="ivanov@mail.ru" />
                </td>
                <td className={styles.field}>
                  <div className={styles.id}>aeq-123-rte</div>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  )
};

export default StudentListEdit;
