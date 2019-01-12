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
	renderWines() {
		// map is array helper function
		return this.state.wines.map(wine => 
			<Text key={wine.name}>{wine.name}</Text>
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
