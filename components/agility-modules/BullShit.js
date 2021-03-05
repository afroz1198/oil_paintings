import React from 'react';

const Bullshit = ({ fields }) => {
	return (
		<div style={{ textAlign: 'center', fontSize: '3rem', color: 'pink' }}>
			{JSON.stringify(fields)}
		</div>
	);
};

export default Bullshit;
