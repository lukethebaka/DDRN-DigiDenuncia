import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableWithoutFeedback } from 'react-native';

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }

  _expandReport() {
    alert('Pressed!');
  }

  render() {
    return (
      <View
        style={{ flex:1, paddingHorizontal: 10 }}
      >
        <TextInput
          style={{ height: 40, marginBottom: 20, borderRadius: 50, borderWidth: 1, borderColor: '#000', textAlign: 'center' }}
          placeholder={'Pesquisar denúncias'}

        />

        <View style={{ borderRadius: 30, paddingHorizontal: 30, paddingVertical: 15, }}>
          <Text>Denúncia nº: 000001</Text>
          <Text>Tipo: Tráfico</Text>
          <Text>Status: Concluído</Text>
          <View
            style={{ position: 'absolute', right: 30, top: '50%', }}
          >
            <TouchableWithoutFeedback
              onPress={() => _expandReport}
            >
              <Text>+</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}
