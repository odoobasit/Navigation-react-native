import {createAppContainer} from 'react-navigation';
import Talha from '../Screens/Talha';
import Kashaf from '../Screens/Kashaf';
import Khalid from '../Screens/Khalid'
import {createStackNavigator} from 'react-navigation-stack';
import App from '../App'
import {createDrawerNavigator} from 'react-navigation-drawer';

const Drawer=createDrawerNavigator({
    App:App,
    Talha:Talha
})


const AppNavigator=createStackNavigator({
    App:{
        screen: Drawer
    },
    Talha:{
        screen: Talha
    },
    Kashaf:{
        screen:Kashaf
    },
    Khalid:{
        screen:Khalid
    }


})
export default createAppContainer(AppNavigator);