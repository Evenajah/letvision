import React from 'react';
import { Text, View, ScrollView, Dimensions, ImageBackground } from 'react-native';

//stylesheet
import styles from '../styles';

// component
import Head from '../component/Head';
import ShowUserBox from '../component/ShowUserBox';
import SettingUser from '../component/SettingUser';
import ContactUs from '../component/ContactUs';
import LoadingRequest from '../component/Overlay/LoadingRequest';
import { Button, Icon } from 'react-native-elements';

//fire
import * as firebase from 'firebase';


export default class SettingScreen extends React.Component {


  render() {
    return (
      <ImageBackground source={require('../images/blind2.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={{ flex: 1 }}>

          <Head title='Setting' />

          <ScrollView style={styles.wrapVol}>

            <Text>{'\n'}</Text>
            <ShowUserBox />

            <SettingUser />

            <ContactUs />


            <Button
              icon={
                <Icon
                  name='sign-out'
                  type='font-awesome'
                  size={15}
                  color="white"
                />
              }
              iconLeft
              title="ออกจากระบบ"
              buttonStyle={{ backgroundColor: '#CD5C5C' }}
              containerStyle={{ width: Dimensions.get('window').width - 15, alignSelf: 'center' }}
              titleStyle={{ fontFamily: 'Kanit-Light', marginLeft: 10 }}
              onPress={() => (firebase.auth().signOut())}
            />


          </ScrollView>


          <LoadingRequest />


        </View>
      </ImageBackground>
    );
  }
}




