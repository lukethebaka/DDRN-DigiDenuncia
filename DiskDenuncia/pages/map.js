import React from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Dimensions, Image, TouchableWithoutFeedback, Button } from 'react-native';
import Modal from "react-native-modal";

import MapView, { PROVIDER_DEFAULT, MAP_TYPES, Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const aspectRatio = width / height;
const latitDelta = 0.0922;
const longiDelta = latitDelta * aspectRatio;

export default class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      isModalVisible: false,
      region: {
        latitude: -5.812691,
        longitude: -35.205100,
        latitudeDelta: latitDelta,
        longitudeDelta: longiDelta,
      },
    };
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  onRegionChange = function() {
  };

  render() {
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
        <View style={{
          position: 'absolute',
          right: 25,
          bottom: 20,
          width: 70,
          height: 70,
          borderRadius: 45,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#009c37',
        }}>
          <TouchableWithoutFeedback
            onPress={this.toggleModal}
          >
            <Text style={{
              fontSize: 42, 
              marginBottom: 5,
              color: 'white',
            }}>+</Text>
          </TouchableWithoutFeedback>
        </View>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <ScrollView style={{
              backgroundColor: 'white',
              height: '100%',
              paddingHorizontal: 15,
              paddingTop: 15,
              paddingBottom: 0,
            }}>
              <Text style={{fontSize: 30, marginBottom: 10,}}>Adicionar Denúncia</Text>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 25,
                }}
              >
                <Image 
                  source={require('../assets/sigilo.png')}
                  style={{

                    width: 60,
                    height: 60,
                    resizeMode: 'contain'
                  }}
                />
                <Text style={{
                  paddingHorizontal: 30,
                  marginTop: 10,
                  backgroundColor: 'transparent',
                  color: 'red',
                  fontSize: 20,
                  marginBottom: 5,
                  fontWeight: 'bold',
                  textAlign: 'left'
                }} >Sigilo Absoluto</Text>
                <Text style={{
                  paddingHorizontal: 30,
                  backgroundColor: 'transparent',
                  color: 'red',
                  fontSize: 15,
                  marginBottom: 40,
                  fontWeight: 'bold',
                  textAlign: 'justify'
                }} >Guardamos seu endereço MAC para questões de segurança. Em caso de trotes vamos sim rastrear você!</Text>
              </View>

              <Text style={{marginBottom: 5, fontSize: 18}}>Título da denúncia</Text>
              <TextInput
                style={{ height: 40, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#009c37', backgroundColor: '#fff', textAlign: 'left'}}
                placeholder={'Título'}
              />

              <Text style={{marginBottom: 5, fontSize: 18}}>Descrição (descrever o que conseguir)</Text>
              <TextInput
                style={{ height: 40, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#009c37', backgroundColor: '#fff', textAlign: 'left'}}
                placeholder={'Descrição'}
                multiline={true}
              />

              <Button title="Cancelar" styles={{marginBottom: 50}} onPress={this.toggleModal} />
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}