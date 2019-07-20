import React from 'react';
import { StyleSheet, Text, ScrollView, View, CheckBox, TextInput, Picker, Dimensions, Image, TouchableWithoutFeedback, Button } from 'react-native';
import Modal from "react-native-modal";
import Fetch from "../services/fetch";

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
      checked: false,
      text: 'Natal',
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
          backgroundColor: '#333399',
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
        <Modal
        onBackButtonPress={this.toggleModal} 
        isVisible={this.state.isModalVisible}>
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
                  textAlign: 'center',
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
                }} >Guardamos seu endereço MAC por questões de segurança. Assim, EM CASO DE TROTES, podemos rastreá-lo(a).</Text>
              </View>

              <Text style={{marginBottom: 5, fontSize: 20, fontWeight: 'bold'}}>Título da denúncia</Text>
              <TextInput
                style={{ height: 40, marginBottom: 40, borderBottomWidth: 1, borderBottomColor: '#009c37', backgroundColor: '#fff', textAlign: 'left'}}
                placeholder={'Título'}
              />

              <Text style={{marginBottom: 5, fontSize: 20, fontWeight: 'bold'}}>Tipo do crime</Text>
              <Picker
                style={{ height: 40, marginBottom: 40, borderWidth: 5, borderColor: '#009c37', textAlign: 'left'}}
                selectedValue={this.state.tipoCrime}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({tipoCrime: itemValue})
                }>
                  <Picker.Item label='Roubo ou Furto' value='roubo' />
                  <Picker.Item label='Corrupção' value='corrupcao' />
                  <Picker.Item label='Porte/Comércio de arma de fogo ou munição' value='armas' />
                  <Picker.Item label='Violência contra Criança, Mulher ou Idoso' value='violenciadomestica' />
                  <Picker.Item label='Homicídio' value='homicidio' />
                  <Picker.Item label='Tráfico' value='trafico' />
                  <Picker.Item label='Crimes Ambientais' value='ambiental' />
                  <Picker.Item label='Foragidos' value='foragidos' />
                  <Picker.Item label='Outros Crimes' value='outros' />
              </Picker>

              <Text style={{marginBottom: 5, fontSize: 20, fontWeight: 'bold'}}>Descrição detalhada do ocorrido</Text>
              <TextInput
                style={{ height: 60, textAlignVertical: 'top', marginBottom: 40, borderBottomWidth: 1, borderBottomColor: '#009c37', backgroundColor: '#fff', textAlign: 'left'}}
                placeholder={'Descrição'}
                multiline={true}
              />

              <Text style={{marginBottom: 5, fontSize: 20, fontWeight: 'bold'}}>Rua Próxima, Bairro ou Cidade</Text>
              <TextInput
                style={{ height: 40, textTransform: 'capitalize', marginBottom: 5, borderBottomWidth: 1, borderBottomColor: '#009c37', backgroundColor: '#fff', textAlign: 'left'}}
                placeholder={'Endereço'}
                defaultValue={'Natal'}
                onChangeText={(text) => this.setState({text})}
              />
              <Button 
                style={{height: 40}}
                title="Conferir Endereço"
                onPress={() => Fetch.getMap(this.state.text)}
              />

              <Text style={{marginBottom: 5, fontSize: 20, marginTop: 40, fontWeight: 'bold'}}>Detalhes sobre o local</Text>
              <TextInput
                style={{ height: 40, marginBottom: 40, borderBottomWidth: 1, borderBottomColor: '#009c37', backgroundColor: '#fff', textAlign: 'left'}}
                placeholder={'Detalhes sobre o local'}
              />

              <Text style={{marginBottom: 5, fontSize: 20, fontWeight: 'bold'}}>Anexo</Text>
              <TextInput
                style={{ height: 60, textAlignVertical: 'top', marginBottom: 40, borderBottomWidth: 1, borderBottomColor: '#009c37', backgroundColor: '#fff', textAlign: 'left'}}
                placeholder={'Descrição'}
                multiline={true}
              />

              <View style={{ flexDirection: 'row', marginBottom: 40 }}>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
                <Text style={{marginTop: 5, width: '85%', color: 'red', fontWeight: 'bold'}}> PROMETO ESTAR FALANDO A VERDADE, SOB A CONSEQUÊNCIA DA QUEBRA DE SIGILO DOS MEUS DADOS.</Text>
              </View>

              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
                
                <Button title="Cancelar" color='#ff0000' styles={{marginBottom: 50}} onPress={this.toggleModal} />
                <Button title="ENVIAR DENUNCIA" color='#009c37' styles={{marginBottom: 50}}/>
                
              </View>

             <View style={{marginTop: 40}}/> 
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}