import React from 'react';
import DragOutlined from '@ant-design/icons/DragOutlined';
import styles from './StudentList.module.scss';

const StudentList: React.FC = () => {
  const fioList = [
    {
      firstName: 'Иванов',
      lastName: 'Андрей'
    },
    {
      firstName: 'Иванов',
      lastName: 'Андрей'
    },
    {
      firstName: 'Иванов',
      lastName: 'Андрей'
    }
  ];

  return (
    <div className={styles.tableWrap}>

    </div>
  )
};

export default StudentList;
