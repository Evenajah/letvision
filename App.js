import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';


//import Component
import Route from './src/Route';



export default class App extends React.Component {

  render() {
    return (                
      
        <View style = {styles.container}>
          <Route/>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   },

  // backgroundImage: {
  //   flex: 1,
  //   width: null,
  //   height: null,
  //   resizeMode: 'cover'
  // }

});
