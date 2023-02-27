import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import RootNavigation from './navigation/RootNavigation';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#59361c'} />
      <RootNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#59361c',
  },
});

export default App;
