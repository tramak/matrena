import React from 'react';
import {Link} from 'react-router-dom';
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';

import styles from './Back.module.scss';

interface IProps {
  url: string;
}
const Back: React.FC<IProps> = ({ url }) => {
  return (
    <div className={styles.back}>
      <Link to={url} className={styles.backLink}>
        <ArrowLeftOutlined className={styles.arrow} /> Назад
      </Link>
    </div>
  );
};

export default Back;
