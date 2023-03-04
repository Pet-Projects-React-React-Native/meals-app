import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import RootNavigation from './navigation/RootNavigation';
import {Provider} from 'react-redux';
import {setupStore} from './redux/store';

const store = setupStore();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#351401'} />
        <RootNavigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
