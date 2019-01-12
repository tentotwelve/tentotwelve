import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
	return (
		<View style={styles.containerStyle}>
			{ props.children }
		</View>
	);
};

const marginLR = 0;

const styles = {
	containerStyle: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		marginLeft: marginLR,
		marginRight: marginLR,
		marginTop: 10
	}
};

export default Card;