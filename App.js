import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppLoading, Font } from 'expo';

//navigation
import Auth from './src/navigation/AuthNavigation';
import Drawer from './src/navigation/DrawerNavigation'

//import Component
import * as firebase from 'firebase';
import ApiKeys from './api/ApiKeys';


export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady : false,
      isAuthenticated:false,
    }


    if (!firebase.apps.length) { 
      firebase.initializeApp(ApiKeys.FirebaseConfig); 
    }
    
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  }

  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };


  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };


  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'Kanit-Light': require('./assets/fonts/Kanit-Light.ttf'),
      }),
    ]);
  };


  render() {
    if ( (!this.state.isLoadingComplete || !this.state.isAuthenticationReady) && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else{
    return (
      <View style={styles.container}>
        {(this.state.isAuthenticated) ? <Drawer /> : <Auth />}
      </View>
    );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
