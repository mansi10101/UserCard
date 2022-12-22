import React from 'react';

const Card = ({ styles, user }) => {
	return (
		<div className={styles.card}>
			<div className={styles.leftSide}>
				<img
					className={styles.avatar}
					src={user.avatar}
					alt={user.first_name}
				/>
			</div>
			<div className={styles.rightSide}>
				<div className={styles.name}>
					{user.first_name} {user.last_name}
				</div>
				<div className={styles.email}>{user.email}</div>
			</div>
		</div>
	);
};

export default Card;