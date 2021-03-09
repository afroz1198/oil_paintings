import React from 'react';
import tw from 'twin.macro';

import { SectionHeading } from 'components/misc/Headings';

const Container = tw.div`
  max-w-3xl overflow-auto m-auto
`;

const BackgroundAsImage = (props) => {
	return (
		<Container>
			<SectionHeading>This is my Hero</SectionHeading>
			{JSON.stringify(props)}
		</Container>
	);
};

export default BackgroundAsImage;
