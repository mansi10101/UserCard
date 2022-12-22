import React from 'react';
import styles from '../stylesheets/Navbar.module.css';

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<div className={styles.logo}>User.io</div>
			</div>
			<div className={styles.section}>
				<div className={styles.btnSection}>
					<button className={styles.apiBtn}>Get Users</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;