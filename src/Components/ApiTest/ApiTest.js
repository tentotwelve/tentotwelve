// ApiTest.js
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import axios from 'axios';

export default class ApiTest extends Component {
    state = { wines: [] };
	componentWillMount() {
		axios.get('http://localhost:3000/wines')
            .then(response => this.setState({ wines: response.data.result }));
    }
    // renderPrices() {
    //     return this.state.wines.map(wine  => wine.price_in_cents);
    // }
	renderWines() {
		// map is array helper function
        return this.state.wines.map(wine => 
            <View key={wine.name}>
                <Text>{wine.name}</Text>
                <Text>{wine.price_in_cents}</Text>
                {/* <Text>{this.renderPrices()}</Text> */}
            </View>
		);
    }
    
    // http://localhost:3000/wines
    // maybe use axios?

    render() {
        return (
            <View>
                    {this.renderWines()}
            </View>
        );
    }
}
