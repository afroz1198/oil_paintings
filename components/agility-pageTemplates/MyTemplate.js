import React from 'react';
import ContentZone from 'components/agility-global/ContentZone';

const MyTemplate = (props) => {
	return (
		<div>
			<ContentZone name="MyZone" {...props} />
		</div>
	);
};

export default MyTemplate;
