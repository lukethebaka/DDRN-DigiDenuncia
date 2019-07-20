import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

//fazer animação de chegar nessa página + seta para voltar [página será separada]

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this._navigate = this._navigate.bind(this);
  }

  _navigate() {
    this.props.navigation.navigate('Login');
  }

  render() {
    this.styles = StyleSheet.create({
      header: {
        top: 0,
        left: 0,
        width: '100%',
        height: '10%',
        backgroundColor: '#606060',
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerText: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
      },
      title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'justify',
        marginTop: 25,
      },
      titleSigilo: {
        paddingHorizontal: 30,
        marginTop: 10,
        backgroundColor: 'transparent',
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'
      },
      titleIcons: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 25,
      },
    });

    return (
      <View style={{flex: 1, backgroundColor: '#606060'}}>
        <View style={this.styles.header}>
          <Text style={this.styles.headerText}>Informações</Text>
        </View>
        <ScrollView>
          <Text style={this.styles.title}>Serviço fornecido pela Secretaria de Estado da Segurança Pública e da Defesa Social (Sesed/RN)</Text>
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
                flex: 1,
                width: 60,
                height: 60,
                resizeMode: 'contain'
              }}
            />
            <Text style={this.styles.titleSigilo} >Sigilo Absoluto</Text>
          </View>
          <Text style={this.styles.title}>O Digi Denúncia é um canal de comunicação sigilosa entre a Secretaria de Segurança Pública e a população com foco no combate ao crime.</Text>
          <Text style={this.styles.title}>As denúncias podem ser registradas neste sistema informatizado que funciona 24 horas por dia. Não é preciso se identificar e guardamos informações sobre o seu aparelho apenas para previnir trotes. O anonimato é garantido.</Text>
          <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Image 
              source={require('../assets/RN.png')}
              style={{
                flex: 1,
                width: '100%',
                resizeMode: 'contain'
              }}
            />
          </View>
          <Text style={this.styles.titleIcons}>Icons providenciados pelo icons8.com</Text>
          <Button
            style={{ backgroundColor: '#fff' }}
            onPress={this._navigate}
          >
            Login policial
          </Button>
        </ScrollView>
      </View>
    )
  }
}