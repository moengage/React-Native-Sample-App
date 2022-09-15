import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './app/HomeScreen';
import InAppScreen from './app//inapp/InAppScreen';
import SelfHandledCampaign from './app//inapp/SelfHandledCampaign';
import TrackEventScreen from './app/trackEvents/TrackEventScreen';
import UserAttributeScreen from './app/userAttributes/UserAttributeScreen';
import PushNotificationScreen from './app/push/PushNotificationScreen';
import InboxListScreen from './app/InboxListScreen';
const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {headerTitle: 'Home Screen'},
    },
    InAppScreen: {
      screen: InAppScreen,
      navigationOptions: {headerTitle: 'InApp'},
    },
    SelfHandledCampaign: {
      screen: SelfHandledCampaign,
      navigationOptions: {headerTitle: 'SelfHandled Campaigns'},
    },
    InboxListScreen: {
      screen: InboxListScreen,
      navigationOptions: {headerTitle: 'Inbox'},
    },
    TrackEventScreen: {
      screen: TrackEventScreen,
      navigationOptions: {headerTitle: 'Track Events'},
    },
    UserAttributeScreen: {
      screen: UserAttributeScreen,
      navigationOptions: {headerTitle: 'User Attributes'},
    },
    PushNotificationScreen: {
      screen: PushNotificationScreen,
      navigationOptions: {headerTitle: 'Push Notification'},
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
