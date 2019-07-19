import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  _navigate() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={{ flex: 1, paddingHorizontal: 10, paddingTop: '2%', justifyContent: 'center' }}>
        <Text
          style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}
        >
          Serviço fornecido pela Secretaria de Estado da Segurança Pública e da Defesa Social (Sesed/RN).
        </Text>
        <View>
          <Text
            style={{ fontSize: 20, color: '#900', marginBottom: 10 }}
          >
            Sigilo Absoluto
          </Text>
        </View>
        <Text
          style={{ fontSize: 16 }}
        >
          O Disque Denúncia 181 é um importante canal de comunicação sigilosa entre a Secretaria de Segurança Pública e a população com foco no combate ao crime.
        </Text>
        <Text
          style={{ fontSize: 16 }}
        >
          As denúncias são registradas em sistema informatizado que funciona 24 horas por dia.
        </Text>
        <Text
          style={{ fontSize: 16 }}
        >
          Não é preciso se identificar e nenhuma informação do seu aparelho é registrado. O anonimato é garantido.
        </Text>
        <View
          style={{ flex:1, alignItems: 'center', justifyContent: 'center',  }}
        >
          <Image
            source={require('../assets/icon.png')} //governo-logo
          />
        </View>
        <View
          style={{ justifyContent: 'flex-end' }}
        >
          <Button
            onPress={this._navigate}
          >
            Acesso Restrito 
          </Button>
        </View>
      </View>
    );
  }
}