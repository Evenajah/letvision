import { createAppContainer, createStackNavigator } from 'react-navigation';


//component
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';


const RootStackNavigator = createStackNavigator({

    Login: { 
        screen:Login,
        navigationOptions: {
            header: null,
        }
    },
    Signup: { 
        screen:Signup,
        navigationOptions: {
            header: null,
        }
    
    },
    Main: { screen:Main },
  

})

const App = createAppContainer(RootStackNavigator);



export default App;

