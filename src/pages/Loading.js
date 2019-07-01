import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements';


export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'http://spa.hss.moph.go.th/image/spinner.gif' }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F08080',
  }
})