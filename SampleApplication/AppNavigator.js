import HomeScreen from './app/HomeScreen';
import InAppScreen from './app//inapp/InAppScreen';
import SelfHandledCampaign from './app//inapp/SelfHandledCampaign';
import TrackEventScreen from './app/trackEvents/TrackEventScreen';
import UserAttributeScreen from './app/userAttributes/UserAttributeScreen';
import PushNotificationScreen from './app/push/PushNotificationScreen';
import InboxListScreen from './app/InboxListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';

const Stack = createNativeStackNavigator()

export default AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerStyle: { backgroundColor: '#088A85' }, headerTintColor: "#fff", headerTitleStyle: { fontWeight: 'bold' } }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home Screen' }} />
        <Stack.Screen name="InAppScreen" component={InAppScreen} options={{ title: 'InApp' }} />
        <Stack.Screen name="SelfHandledCampaign" component={SelfHandledCampaign} options={{ title: 'SelfHandled Campaigns' }} />
        <Stack.Screen name="InboxListScreen" component={InboxListScreen} options={{ title: 'Inbox' }} />
        <Stack.Screen name="TrackEventScreen" component={TrackEventScreen} options={{ title: 'Track Events' }} />
        <Stack.Screen name="UserAttributeScreen" component={UserAttributeScreen} options={{ title: 'User Attributes' }} />
        <Stack.Screen name="PushNotificationScreen" component={PushNotificationScreen} options={{ title: 'Push Notification' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

