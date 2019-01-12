import React from 'react';
import { Text, View } from 'react-native';

const renderPrices = (props) => {
    let price = props.price.toString();
    price = price.substring(0,price.length-2)+"."+price.substring(price.length-2);
    return price;
};

const WinePrice = (props) => {
    const fakeStockLevels = 'Not in stock at your favourite stores'.toUpperCase();
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.priceStyle}>${renderPrices(props)}</Text>
			<Text style={styles.stockinfoStyle}>{fakeStockLevels}</Text>
		</View>
	);
};

const styles = {
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'

    },
    priceStyle: {
		fontSize: 32,
        fontWeight: '700',
        fontFamily: 'Roboto',
        color: '#504556',
        flex: 1,
    },
    stockinfoStyle: {
        flex: 2,
        fontSize: 12,
        fontWeight: '900',
        color: '#4F0A72',
        textAlign: 'right',
	},
};

export default WinePrice;
