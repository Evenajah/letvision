import React from 'react';
import { Text, View, ScrollView } from 'react-native';

//stylesheet
import styles from '../styles';

// component
import Head from '../component/Head';
import ShowUserBox from '../component/ShowUserBox';
import SettingUser from '../component/SettingUser';
import ContactUs from '../component/ContactUs';


export default class SettingScreen extends React.Component {


  render() {
    return (
      <View style={{ flex: 1 }}>

        <Head title='Setting' />

        <ScrollView style={styles.wrapVol}>

          <Text>{'\n'}</Text>
          <ShowUserBox />

          <SettingUser />

          <ContactUs />

        </ScrollView>

      </View>
    );
  }
}

