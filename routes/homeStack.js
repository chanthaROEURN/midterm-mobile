import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Home from '../screens/home';
import LessonDetail from '../screens/lessonDetail';

const screens = {
    Login: {
        screen: Login
    }, 
    Home: {
        screen: Home
    },
    LessonDetail: {
        screen: LessonDetail
    }
}

const Screens = createStackNavigator(screens);

export default createAppContainer(Screens)