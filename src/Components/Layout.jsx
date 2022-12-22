import * as React from 'react';
import styles from '../stylesheets/Layout.module.css';
import CardWrapper from './Cards';
import Navbar from './Navbar';

const Layout = () => {
	const [users, setUsers] = React.useState();
	const [refresh, setRefresh] = React.useState(false);
	const [page, setPage] = React.useState(undefined);

	const apiCall = () => {
		setRefresh(true);
		fetch(`https://reqres.in/api/users?page=1`)
			.then((res) => res.json())
			.then((json) => {
				setUsers(json);
				setRefresh(false);
				setPage(1);
			});
	};

	React.useEffect(() => {
		if (page !== undefined) {
			setRefresh(true);
			fetch(`https://reqres.in/api/users?page=${page}`)
				.then((res) => res.json())
				.then((json) => {
					setUsers(json);
					setRefresh(false);
				});
		}
	}, [page]);

	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<Navbar apiCall={apiCall} page={page} />
			</div>
			<div className={styles.section}>
				<CardWrapper
					refresh={refresh}
					users={users}
					page={page}
					setPage={setPage}
				/>
			</div>
		</div>
	);
};

export default Layout;