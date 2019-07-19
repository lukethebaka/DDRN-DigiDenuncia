import React from 'react';
import { StyleSheet, TextInput, Image, View, Button, Text, TouchableWithoutFeedback, ScrollView } from 'react-native';
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
      <ScrollView
        style={{ flex:1, paddingHorizontal: 10, backgroundColor: '#d6d6d6'}}
      >
        <TextInput
          style={{ height: 40, marginBottom: 20, borderRadius: 30, borderWidth: 1, backgroundColor: '#fff', borderColor: '#ddd', textAlign: 'center' }}
          placeholder={'Pesquisar suas denúncias'}

        />

      <View style={{ borderRadius: 15, paddingHorizontal: 30, paddingVertical: 15, marginBottom: 20, backgroundColor: '#fff' }}>
          <Image style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 60,
            resizeMode: 'contain',
            flex: 1,
          }}
          source={require('../assets/invasao.png')}/>
          <View style={{
            position: 'absolute',
            marginLeft: 30+60+30,
            height: 90,
            flex: 1,
            justifyContent: 'center',
          }}>
            <Text>Denúncia nº: 000001</Text>
            <Text>Tipo: Tráfico</Text>
            <Text>Status: Deferida</Text>
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
        
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <View style={{
              backgroundColor: 'white',
              height: '100%',
            }}>
              <Text style={{fontSize: 30}}>Sua mãe é gay</Text>
              <Button title="Hide modal" onPress={this.toggleModal} />
            </View>
          </View>
        </Modal>
        
      </ScrollView>
    );
  }
}