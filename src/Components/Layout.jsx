import * as React from 'react';
import styles from '../stylesheets/Layout.module.css';
import CardWrapper from '../Cards';
import Navbar from './Navbar';

const Layout = () => {
	const [users, setUsers] = React.useState();
	const [refresh, setRefresh] = React.useState(false);

	const apiCall = (page) => {
		setRefresh(true);
		fetch(`https://reqres.in/api/users?page=1`)
			.then((res) => res.json())
			.then((json) => {
				setUsers(json);
				setRefresh(false);
			});
	};

	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<Navbar apiCall={apiCall} />
			</div>
			<div className={styles.section}>
				<CardWrapper refresh={refresh} users={users} apiCall={apiCall} />
			</div>
		</div>
	);
};

export default Layout;