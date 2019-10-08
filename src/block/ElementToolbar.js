import React from 'react';
import HeadingLevelIcon from './HeadingLevelIcon';

const { Toolbar } = wp.components;

class ElementToolbar extends React.Component {
	createLevelControl( targetElement, selectedElement, onChange ) {
		const isActive = targetElement === selectedElement;
		return {
			icon: <HeadingLevelIcon element={ targetElement } __unstableActive={ isActive } />,
			title: `${ targetElement }`,
			isActive,
			onClick: () => onChange( targetElement ),
		};
	}

	render() {
		const { selectedElement, onChange } = this.props;

		return (
			<Toolbar
				label="Size"
				icon={ <HeadingLevelIcon element={ selectedElement } /> }
				isCollapsed={ true }
				controls={ [ 'h2', 'h3', 'h4', 'h5', 'h6', 'span' ].map(
					( element ) => this.createLevelControl( element, selectedElement, onChange )
				) } />
		);
	}
}

export default ElementToolbar;
