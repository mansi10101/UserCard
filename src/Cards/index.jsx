import * as React from 'react';
import styles from '../stylesheets/Cards.module.css';
import Card from './Card';
import Loading from '../Components/Loading';
import NoData from '../Components/NoData';

const CardWrapper = ({ users, refresh, apiCall }) => {
	console.log(users);
	return (
		<div className={styles.container}>
			{users === undefined ? (
				<NoData />
			) : refresh ? (
				<Loading />
			) : (
				<div className={styles.cards}>
					{users.data.map((user) => {
						return <Card styles={styles} user={user} />;
					})}
				</div>
			)}
		</div>
	);
};

export default CardWrapper;