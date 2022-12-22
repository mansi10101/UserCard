import * as React from 'react';
import styles from '../../stylesheets/Cards.module.css';
import Card from './Card';
import Loading from '../Loading';
import NoData from '../NoData';

const CardWrapper = ({ users, refresh, page, setPage }) => {
	return (
		<div className={styles.container}>
			{users === undefined ? (
				<NoData />
			) : refresh ? (
				<Loading />
			) : (
				<div className={styles.content}>
					<div className={styles.cards}>
						{users.data.map((user) => {
							return <Card styles={styles} user={user} />;
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