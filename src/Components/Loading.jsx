import * as React from 'react';
import { ReactComponent as LoadingSVG } from '../assets/loading.svg';

const Loading = () => {
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
			<LoadingSVG />
			Loading...
		</div>
	);
};

export default Loading;