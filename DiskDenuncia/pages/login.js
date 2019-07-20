import React from 'react';
import { Image, Button, TextInput, View } from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      password: '',
      user: {}
    };
  }

  _requestUser() {
    let user = ajax.fetchUser({ code: this.state.code, password: this.state.password });
    if (user !== '') {
      this.setState({user: user});
      this._navigate();
    }
  }

  _navigate() {
    this.props.navigation.navigate('Home', {
      user: this.state.user,
    });
  }

  _goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#808080', paddingTop: '50%', paddingBottom: '10%' }}>
        <Image
          style={{width: 70, height: 70}}
          source={require('../assets/iconpolicial.png')}
        />
        <TextInput
          style={{height: 40, width: '70%', paddingHorizontal: 10, borderColor: 'white', borderWidth: 1, borderRadius: 20}}
          onChangeText={(code) => this.setState({code})}
          placeholder={'N° Registro'}
          value={this.state.code}
        />
        <TextInput
          style={{height: 40, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, width: '70%', borderRadius: 20}}
          onChangeText={(password) => this.setState({password})}
          placeholder={'Senha'}
          value={this.state.password}
        />
        <Button
          onPress={this._requestUser}
          title="Entrar"
          color="#841584"
          accessibilityLabel="Acessar plataforma policial"
        />
      </View>
    );
  }
}