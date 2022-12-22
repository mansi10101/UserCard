import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Card = ({ styles, user }) => {
	return (
		<div className={styles.card}>
			<div className={styles.imgSection}>
				<img
					className={styles.avatar}
					src={user.avatar}
					alt={user.first_name}
				/>
			</div>
			<div className={styles.contentSection}>
				<div className={styles.name}>
					{user.first_name} {user.last_name}
				</div>
				<div className={styles.email}>{user.email}</div>
			</div>
			<hr className={styles.divider} />
			<div className={styles.contactSection}>
				<a
					className={styles.contactLinks}
					href='https://www.linkedin.com/in/mansi-nagaria/'
					target='_blank'
				>
					<FaLinkedinIn />
				</a>
				<a
					className={styles.contactLinks}
					href='https://github.com/mansi10101'
					target='_blank'
				>
					<FaGithub />
				</a>
			</div>
		</div>
	);
};

export default Card;