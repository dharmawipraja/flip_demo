import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import HomeScreen from './app/Screens/HomeScreen/Home.screen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  }
});

export default App;
