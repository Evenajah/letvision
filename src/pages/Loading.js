import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements';


export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif' }}
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