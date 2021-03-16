import React from 'react';
import classNames from 'classnames';
import styles from './StudentList.module.scss';

const StudentList: React.FC = () => {
  // const fioList = [
  //   {
  //     firstName: 'Иванов',
  //     lastName: 'Андрей'
  //   },
  //   {
  //     firstName: 'Иванов',
  //     lastName: 'Андрей'
  //   },
  //   {
  //     firstName: 'Иванов',
  //     lastName: 'Андрей'
  //   }
  // ];

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tdTitle}>
              <div className={styles.tdTitleHead}>
                <div className={styles.tdTitleHeadTop}>
                  Ученики
                </div>
                <div className={styles.tdTitleHeadBottom}>
                  Название тренинга
                </div>
              </div>
            </th>
            {[1, 2, 3].map(() => (
              <>
                <th className={styles.colFio}>
                  <div className={styles.fio}>
                    <b>Иванов</b>
                    <div>Андрей</div>
                  </div>
                </th>
                <th className={styles.colFio}>
                  <div className={styles.fio}>
                    <b>Петров</b>
                    <div>Иван</div>
                  </div>
                </th>
                <th className={styles.colFio}>
                  <div className={styles.fio}>
                    <b>Никош</b>
                    <div>Елена</div>
                  </div>
                </th>
                <th className={styles.colFio}>
                  <div className={styles.fio}>
                    <b>Романенко</b>
                    <div>Станислав</div>
                  </div>
                </th>
                <th className={styles.colFio}>
                  <div className={styles.fio}>
                    <b>Абарцуев</b>
                    <div>Георгий</div>
                  </div>
                </th>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          {[1,2,3,4,5].map(item => (
            <tr key={item}>
              <td className={styles.tdTitle}>
                Рациональнае<br /> уравнения
              </td>
              {[1, 2, 3, 4, 5].map(item => (
                <>
                  <td className={classNames(styles.gradeTd, styles.gradeTdBad)}>
                    25
                    <span className={styles.tenths}>,3</span>
                  </td>
                  <td className={classNames(styles.gradeTd, styles.gradeTdGood)}>
                    65
                    <span className={styles.tenths}>,52</span>
                  </td>
                  <td className={classNames(styles.gradeTd, styles.gradeTdExcellent)}>
                    95
                    <span className={styles.tenths}>,1</span>
                  </td>
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default StudentList;
