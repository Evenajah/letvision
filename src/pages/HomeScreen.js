import React from 'react';

// Screen
import VolunteerScreen from '../pages/VolunteerScreen';
import BlindScreen from '../pages/BlindScreen';

// redux
import { connect } from 'react-redux';



class HomeScreen extends React.Component {

      

    render() {
        if(this.props.user.stat === "Volunteer"){
            return(
                <VolunteerScreen />
            );
        }else{
            return(
                <BlindScreen />
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps,null)(HomeScreen);



