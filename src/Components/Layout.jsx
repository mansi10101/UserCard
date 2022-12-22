import * as React from 'react';
import styles from '../stylesheets/Layout.module.css';
import Navbar from './Navbar';
const Layout = () => {
	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<Navbar />
			</div>
			<div className={styles.section}>User Cards</div>
		</div>
	);
};

export default Layout;