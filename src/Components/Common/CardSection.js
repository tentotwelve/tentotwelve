import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	const styles = {
		containerStyle: {
			flex: 1,
			flexWrap: 'wrap',
			borderBottomWidth: 1,
			padding: 15,
			backgroundColor: '#fff',
			flexDirection: props.flexDirection || 'row',
			borderColor: '#ddd',
			position: 'relative'
		}
	};
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};



export default CardSection;
