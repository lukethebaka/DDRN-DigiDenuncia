import React from 'react';
import { StyleSheet, TextInput, Image, View, Text, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Modal from "react-native-modal";

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={{ flex:1 }}>
        <View style={{ width: '100%', height: '10%', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#363636' }}>Histórico</Text>
        </View>
        <ScrollView
          style={{ flex:1, paddingHorizontal: 10, paddingTop: 20, backgroundColor: '#eee'}}
        >
          <TextInput
            style={{ height: 40, marginBottom: 20, borderRadius: 30, borderWidth: 1, backgroundColor: '#fff', borderColor: '#ddd', textAlign: 'center' }}
            placeholder={'Pesquisar suas denúncias'}
          />
          <View style={{ borderRadius: 15, elevation: 1, paddingHorizontal: 30, paddingVertical: 15, marginBottom: 20, backgroundColor: '#fff' }}>
            <Image style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              resizeMode: 'contain',
              flex: 1,
            }}
            source={require('../assets/iconesCrime/arma.png')}/>
            <View style={{
              position: 'absolute',
              marginLeft: 30+60+30,
              height: 90,
              flex: 1,
              justifyContent: 'center',
            }}>
              <Text>Denúncia nº: 000001</Text>
              <Text>Tipo: Tráfico/Porte de armas  </Text>
              <Text style={{color: '#888'}}>Pendente</Text>
            </View>
            <View
              style={{ position: 'absolute', right: 30, top: '23%'}}
            >
              <TouchableWithoutFeedback
                onPress={this.toggleModal}
              >
                <Text style={{fontSize: 42, fontWeight: 'bold'}}>+</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          
          <View style={{ borderRadius: 15, elevation: 1, paddingHorizontal: 30, paddingVertical: 15, marginBottom: 20, backgroundColor: '#fff' }}>
            <Image style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              resizeMode: 'contain',
              flex: 1,
            }}
            source={require('../assets/iconesCrime/corrupção.png')}/>
            <View style={{
              position: 'absolute',
              marginLeft: 30+60+30,
              height: 90,
              flex: 1,
              justifyContent: 'center',
            }}>
              <Text>Denúncia nº: 000002</Text>
              <Text>Tipo: Corrupção</Text>
              <Text style={{color: 'red'}}>Trote</Text>
            </View>
            <View
              style={{ position: 'absolute', right: 30, top: '23%'}}
            >
              <TouchableWithoutFeedback
                onPress={this.toggleModal}
              >
                <Text style={{fontSize: 42, fontWeight: 'bold'}}>+</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>

          <View style={{ borderRadius: 15, elevation: 1, paddingHorizontal: 30, paddingVertical: 15, marginBottom: 20, backgroundColor: '#fff' }}>
            <Image style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              resizeMode: 'contain',
              flex: 1,
            }}
            source={require('../assets/iconesCrime/tráfico.png')}/>
            <View style={{
              position: 'absolute',
              marginLeft: 30+60+30,
              height: 90,
              flex: 1,
              justifyContent: 'center',
            }}>
              <Text>Denúncia nº: 000003</Text>
              <Text>Tipo: Tráfico</Text>
              <Text style={{color: 'green'}}>Confirmada</Text>
            </View>
            <View
              style={{ position: 'absolute', right: 30, top: '23%'}}
            >
              <TouchableWithoutFeedback
                onPress={this.toggleModal}
              >
                <Text style={{fontSize: 42, fontWeight: 'bold'}}>+</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <Modal
            isVisible={this.state.isModalVisible}
            style={{ padding: 0 }}
            onBackButtonPress={this.toggleModal}
            onBackdropPress={this.toggleModal}
          >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View style={{
                backgroundColor: 'white',
                height: '25%',
                paddingTop: 10,
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: 10,
              }}>
                <Text style={{marginLeft: '4%', fontSize: 30}}>Denúncia: </Text>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '7%' }}>
                  <TouchableWithoutFeedback onPress={this.toggleModal}>
                    <Text style={{ fontSize: 16, color: 'red' }}>
                      Categorizar trote
                    </Text>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={this.toggleModal}>
                    <Text style={{ fontSize: 16, color: '#009c37' }}>
                      Deferir denúncia
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }
}