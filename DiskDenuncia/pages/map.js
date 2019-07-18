import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import MapView, { PROVIDER_DEFAULT, MAP_TYPES, Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const aspectRatio = width / height;
const latitDelta = 0.0922;
const longiDelta = latitDelta * aspectRatio;

function getInitialState() {
  return {
    region: {
      latitude: -5.812691,
      longitude: -35.205100,
      latitudeDelta: latitDelta,
      longitudeDelta: longiDelta,
    },
  };
}

export default function App() {
  this.state = getInitialState();
  this.onRegionChange = function() {
  };
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        provider={null}
        mapType={MAP_TYPES.STANDARD}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      >
        <Marker
          coordinate={{
            latitude: -5.857807, 
            longitude: -35.203667,
          }}
          image={require('../assets/invasao.png')}
        />
      </MapView>
    </View>
  );
}