//Navigate
import { createAppContainer, createStackNavigator } from 'react-navigation';


//component
import Login from '../pages/Login';
import Signup from '../pages/Signup';



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
    
  

})

const App = createAppContainer(RootStackNavigator);



export default App;

