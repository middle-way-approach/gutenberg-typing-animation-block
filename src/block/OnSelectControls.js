const { TextControl } = wp.components;

const OnSelectControl = ( { attributes, setAttributes, isSelected } ) => {
	if ( ! isSelected ) {
		return null;
	}
	return <TextControl
		label="Text to animate"
		value={ attributes.strings.join( '|' ) }
		onChange={ ( text ) => setAttributes( { strings: text.split( '|' ) } ) }
	/>;
};

export default OnSelectControl;
