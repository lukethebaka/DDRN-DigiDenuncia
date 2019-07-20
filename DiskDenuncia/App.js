import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';

import Navigator from './config/routes';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight, backgroundColor: '#fff'}}>
      <Navigator />
    </SafeAreaView>
  );
};
