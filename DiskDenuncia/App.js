import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import Navigator from './config/routes';
import WebViewLeaflet from "react-native-webview-leaflet";

export default function App() {

  let mapLayers = {
    name: 'streets',  // the name of the layer, this will be seen in the layer selection control
    checked: 'true',  // if the layer is selected in the layer selection control
    type: 'TileLayer',  // the type of layer as shown at https://react-leaflet.js.org/docs/en/components.html#raster-layers
    baseLayer: true,
    // url of tiles
    url: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
    // attribution string to be shown for this layer
    attribution:
      '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
  }
  
  return (
    <WebViewLeaflet
      ref={component => (this.webViewLeaflet = component)}
      // Optional: a callback that will be called when the map is loaded
      //onLoad={this.onLoad}

      // Optional: the component that will receive map events}
      eventReceiver={this} 

      // Optional: the center of the displayed map
      //centerPosition={this.state.mapCenterPosition}

      // Optional: a list of markers that will be displayed on the map
      //markers={this.state.markers}

      // Required: the map layers that will be displayed on the map. See below for a description of the map layers object
      mapLayers={mapLayers}

      // Optional: display a marker to be at a given location
      // ownPositionMarker={{
      //   coords: this.state.currentLocation,
      //   icon: "❤️",
      //   size: [24, 24],
      //   animation: {
      //     name: "pulse",
      //     duration: ".5",
      //     delay: 0,
      //     interationCount: "infinite"
      //   }
      // }}

      // Optional (defaults to false): display a button that centers the map on the coordinates of ownPostionMarker. Requires that "ownPositionMarker" prop be set
      //centerButton={true}

      // Optional (defaults to false): cluster icons that are in the same area
      //useMarkerClustering={true}
    />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  menu: {
    flex: 1,
    backgroundColor: '#555',
    width: '70%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: '#fff',
  },
});
