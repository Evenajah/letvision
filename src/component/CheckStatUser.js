import React from 'react';

// Screen
import VolunteerScreen from '../pages/VolunteerScreen';
import BlindScreen from '../pages/BlindScreen';


export default class CheckStatUser extends React.Component {
   

    render() {
        if(this.props.user.stat === "Volunteer"){
            return(
                <VolunteerScreen user = {this.props.user} navigation={this.props.navigation} />
            );
        }else if(this.props.user.stat === "Blind"){
            return(
                <BlindScreen user = {this.props.user} navigation={this.props.navigation} />
            );
        }
      
    }
}
