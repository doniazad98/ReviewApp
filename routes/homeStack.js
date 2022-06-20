import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

const screens={
    Home:{
        screen:Home
    },
    ReviewDetails:{
        screen:ReviewDetails
    },
}


console.log("hello home stack")
//export default createAppContainer(HomeStack);