import * as React from 'react';
import { ReactComponent as NoDataSVG } from '../assets/no-data.svg';

const NoData = () => {
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#fff',
				fontSize: '3rem',
				fontWeight: '700',
				letterSpacing: '0.2rem',
			}}
		>
			<NoDataSVG />
			Click on "Get Users"
		</div>
	);
};

export default NoData;