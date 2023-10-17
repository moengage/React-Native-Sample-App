import React from 'react';
import HomeScreen from '../src/component/HomeScreen';
import InAppScreen from '../src/component/InAppScreen';
import SelfHandledCampaign from '../src/component/SelfHandledCampaign';
import TrackEventScreen from '../src/component/TrackEventScreen';
import UserAttributeScreen from '../src/component/UserAttributeScreen';
import PushNotificationScreen from '../src/component/PushNotificationScreen';
import InboxListScreen from '../src/component/InboxListScreen';
import CardsScreen from '../src/component/CardsScreen';
import SelfHandledCardUI from '../src/component/SelfHandledCardUI';
import { navigationRef } from './RootNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
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
        <Stack.Screen name="SelfHandledCards" component={CardsScreen} options={{ title: 'Self Handled Cards' }} />
        <Stack.Screen name="SelfHandledCardUI" component={SelfHandledCardUI} options={{ title: 'Cards UI' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;