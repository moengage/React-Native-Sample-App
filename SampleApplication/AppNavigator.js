import HomeScreen from './app/HomeScreen';
import InAppScreen from './app//inapp/InAppScreen';
import SelfHandledCampaign from './app//inapp/SelfHandledCampaign';
import TrackEventScreen from './app/trackEvents/TrackEventScreen';
import UserAttributeScreen from './app/userAttributes/UserAttributeScreen';
import PushNotificationScreen from './app/push/PushNotificationScreen';
import InboxListScreen from './app/InboxListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerStyle={{backgroundColor: '#088A85'}} headerTintColor="fff" headerTitleStyle={{fontWeight: 'bold'}} initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} headerTitle="Home Screen"/>
        <Stack.Screen name="InAppScreen" component={InAppScreen} headerTitle="InApp"/>
        <Stack.Screen name="SelfHandledCampaign" component={SelfHandledCampaign} headerTitle="SelfHandled Campaigns"/>
        <Stack.Screen name="InboxListScreen" component={InboxListScreen} headerTitle="Inbox"/>
        <Stack.Screen name="TrackEventScreen" component={TrackEventScreen} headerTitle="Track Events"/>
        <Stack.Screen name="UserAttributeScreen" component={UserAttributeScreen} headerTitle="User Attributes"/>
        <Stack.Screen name="PushNotificationScreen" component={PushNotificationScreen} headerTitle="Push Notification"/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

