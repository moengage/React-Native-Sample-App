import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './app/HomeScreen';
import InAppScreen from './app//inapp/InAppScreen';
import SelfHandledCampaign from './app//inapp/SelfHandledCampaign';
import PushScreen from './app//push/PushNotificationScreen';
import TrackEventScreen from './app/trackEvents/TrackEventScreen';
import UserAttributeScreen from './app/userAttributes/UserAttributeScreen';
import PushNotificationScreen from './app/push/PushNotificationScreen';
const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {headerTitle: 'Home Screen'},
    },
    InAppScreen: {
      screen: InAppScreen,
      navigationOptions: {headerTitle: 'InApp Screen'},
    },
    SelfHandledCampaign: {
      screen: SelfHandledCampaign,
      navigationOptions: {headerTitle: 'SelfHandled Campaign Screen'},
    },
    PushScreen: {screen: PushScreen},
    TrackEventScreen: {
      screen: TrackEventScreen,
      navigationOptions: {headerTitle: 'Track Event Screen'},
    },
    UserAttributeScreen: {
      screen: UserAttributeScreen,
      navigationOptions: {headerTitle: 'User Attribute Screen'},
    },
    PushNotificationScreen: {
      screen: PushNotificationScreen,
      navigationOptions: {headerTitle: 'Push NotificationScreen Screen'},
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#088A85',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
