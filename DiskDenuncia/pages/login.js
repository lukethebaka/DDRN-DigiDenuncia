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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#545454', paddingTop: '50%', paddingBottom: '10%' }}>
        <Image
          style={{width: 50, height: 50}}
          source={require('../assets/icon.png')}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(code) => this.setState({code})}
          placeholder={'Useless Placeholder'}
          value={this.state.code}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          placeholder={'Useless Placeholder'}
          value={this.state.password}
        />
        <Button
          onPress={this._requestUser}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}