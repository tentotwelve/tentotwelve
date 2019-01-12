// WineList.js
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

import axios from 'axios';

import WineCard from './Wine/WineCard';

class WineList extends Component {
    state = { 
        wines: [],
        latitude: null,
        longitude: null
    };
	componentWillMount() {
		axios.get('http://localhost:3000/wines')
            .then(response => this.setState({ wines: response.data.result }));
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
      }
    renderWines() {
        return this.state.wines.map(wine => 
            <WineCard key={wine.id} wine={wine} />
          );
    }
    
    render() {
        return (
            <ScrollView>
              {this.renderWines()}
            </ScrollView>
        );
    }
}
  
export default WineList;
