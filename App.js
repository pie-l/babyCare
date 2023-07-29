/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {LogBox, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import MainNavigator from './src/navigation/mainNavigator';
import {setTopLevelNavigator} from './src/navigation/navigationsServices';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/reducers/store';
import FlashMessage from 'react-native-flash-message';
import {hpValue, wpValue} from './src/helper/utils';
import {colors} from './src/helper/colors';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const setNavigationRef = navigatorRef => {
  setTopLevelNavigator(navigatorRef);
};

function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.mainContainerStyle}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />

          <MainNavigator refer={setNavigationRef} />

          <FlashMessage
            position={'top'}
            floating={true}
            duration={2000}
            style={styles.flashMessageStyle}
            titleStyle={styles.flashMessageTitleTextStyle}
            textStyle={styles.flashMessageTitleTextStyle}
          />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flashMessageTitleTextStyle: {
    fontSize: hpValue(13),
    lineHeight: hpValue(14),
    color: colors.white,
  },
  flashMessageStyle: {
    marginTop: hpValue(8),
    marginLeft: wpValue(10),
    marginRight: wpValue(10),
    marginBottom: hpValue(8),
    borderRadius: hpValue(4),
  },
});

export default App;
