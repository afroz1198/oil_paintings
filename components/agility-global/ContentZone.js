import React from 'react';
import dynamic from 'next/dynamic';

function ContentZone ({ name, page, dynamicPageItem }) {
	function RenderModules () {
		let modules = page.zones[name];

		const modulesToRender = modules.map((m) => {
			let AgilityModule = dynamic(() =>
				import('components/agility-modules/' + m.moduleName + '.js')
			);

			return (
				<AgilityModule
					key={m.item.contentID}
					page={page}
					dynamicPageItem={dynamicPageItem}
					{...m.item} // spread all received props into the component
				/>
			);
		});

		return modulesToRender;
	}

	return (
		<div>
			<RenderModules />
		</div>
	);
}

export default ContentZone;
