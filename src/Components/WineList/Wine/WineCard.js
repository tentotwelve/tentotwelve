import React from 'react';
import { Image, Text, View } from 'react-native';

import Card from '../../Common/Card';
import CardSection from '../../Common/CardSection';
import WinePrice from './WinePrice';
import WineImage from './WineImage';

const WineCard = ({ wine }) => {
	const wineName = wine.name.toUpperCase();
	return (
		<Card>
			<CardSection flexDirection={'column'}>
                <WineImage wineName={wine.name} source={wine.image_url} />

			</CardSection>
            <CardSection flexDirection={'column'}>
                <WinePrice price={wine.price_in_cents} />
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
        justifyContent: 'flex-start',
	},
	headerTextStyle: {
		fontSize: 26,
		fontFamily: 'Roboto',
		flexDirection: 'column',
		// color: '#fff',
		// backgroundColor: '#4F0A72',
        flexWrap: 'wrap',
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default WineCard;
