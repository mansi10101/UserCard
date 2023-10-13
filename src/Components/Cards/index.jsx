import * as React from 'react';
import styles from '../../stylesheets/Cards.module.css';
import Card from './Card';
import Loading from '../Loading';
import NoData from '../NoData';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CardWrapper = ({ users, refresh, page, setPage }) => {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={styles.container}>
      {users === undefined ? (
        <NoData />
      ) : refresh ? (
        <Loading />
      ) : (
        <div
          data-aos='fade-up'
          data-aos-duration='2000'
          className={styles.content}
        >
          <div className={styles.cards}>
            {users.data.map((user, index) => {
              return <Card index={index} styles={styles} user={user} />;
            })}
          </div>
          <div className={styles.pagination}>
            <button
              className={styles.paginationBtn}
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
            <button
              className={styles.paginationBtn}
              disabled={page === users.total_pages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardWrapper;
