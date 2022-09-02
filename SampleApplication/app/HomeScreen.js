import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  DISABLE_AD_ID_TRACKING,
  DISABLE_ANDROID_ID_TRACKING,
  DISABLE_SDK,
  ENABLE_AD_ID_TRACKING,
  ENABLE_ANDROID_ID_TRACKING,
  ENABLE_SDK,
  GEOFENCE_FOR_IOS_MESSAGE,
  GEOFENCE_MONITOR,
  IN_APP,
  LOGOUT,
  MOE_INBOX,
  PUSH_NOTIFICATION,
  TRACK_EVENTS,
  USER_ATTRIBUTES,
} from './Constants';
import MOEStyles from './MoeStyleSheet';
import ReactMoE from 'react-native-moengage';
import ReactMoEGeofence from 'react-native-moengage-geofence';

const HomeScreen = ({navigation}) => {
  const APP_ID = 'F7TLMPJHG86ULAI9XJFGLLSE';

  ReactMoE.initialize(APP_ID);
  return (
    <View>
      <StatusBar backgroundColor={'#088A85'} />
      <ScrollView>
        <View style={MOEStyles.view}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TrackEventScreen')}>
            <Text style={MOEStyles.title}>{TRACK_EVENTS}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UserAttributeScreen')}>
            <Text style={MOEStyles.title}>{USER_ATTRIBUTES}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('InAppScreen')}>
            <Text style={MOEStyles.title}>{IN_APP}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PushNotificationScreen')}>
            <Text style={MOEStyles.title}>{PUSH_NOTIFICATION}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={MOEStyles.title}>{MOE_INBOX}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (Platform.OS === 'ios') {
                ReactMoEGeofence.startGeofenceMonitoring(APP_ID);
              } else {
                alert(GEOFENCE_FOR_IOS_MESSAGE);
              }
            }}>
            <Text style={MOEStyles.title}>{GEOFENCE_MONITOR}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ReactMoE.enableSdk()}>
            <Text style={MOEStyles.title}>{ENABLE_SDK}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ReactMoE.disableSdk()}>
            <Text style={MOEStyles.title}>{DISABLE_SDK}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ReactMoE.enableAndroidIdTracking}>
            <Text style={MOEStyles.title}>{ENABLE_ANDROID_ID_TRACKING}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ReactMoE.disableAndroidIdTracking()}>
            <Text style={MOEStyles.title}>{DISABLE_ANDROID_ID_TRACKING}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ReactMoE.enableAdIdTracking()}>
            <Text style={MOEStyles.title}>{ENABLE_AD_ID_TRACKING}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ReactMoE.disableAdIdTracking()}>
            <Text style={MOEStyles.title}>{DISABLE_AD_ID_TRACKING}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ReactMoE.logout()}>
            <Text style={MOEStyles.title}>{LOGOUT}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
