import React from 'react';
import {Text, View, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import {
  DISABLE_AD_ID_TRACKING,
  DISABLE_ANDROID_ID_TRACKING,
  DISABLE_SDK,
  ENABLE_AD_ID_TRACKING,
  ENABLE_ANDROID_ID_TRACKING,
  ENABLE_SDK,
  GEOFENCE_MONITOR,
  IN_APP,
  LOGOUT,
  MOE_INBOX,
  OPT_IN_DATA,
  OPT_OUT_DATA,
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

  const MOE_FEATURES = [
    {
      id: TRACK_EVENTS,
      title: TRACK_EVENTS,
    },
    {
      id: USER_ATTRIBUTES,
      title: USER_ATTRIBUTES,
    },
    {
      id: IN_APP,
      title: IN_APP,
    },
    {
      id: PUSH_NOTIFICATION,
      title: PUSH_NOTIFICATION,
    },
    {
      id: MOE_INBOX,
      title: MOE_INBOX,
    },
    {
      id: GEOFENCE_MONITOR,
      title: GEOFENCE_MONITOR,
    },
    {
      id: ENABLE_SDK,
      title: ENABLE_SDK,
    },
    {
      id: DISABLE_SDK,
      title: DISABLE_SDK,
    },
    {
      id: ENABLE_AD_ID_TRACKING,
      title: ENABLE_AD_ID_TRACKING,
    },
    {
      id: DISABLE_AD_ID_TRACKING,
      title: DISABLE_AD_ID_TRACKING,
    },
    {
      id: ENABLE_ANDROID_ID_TRACKING,
      title: ENABLE_ANDROID_ID_TRACKING,
    },
    {
      id: DISABLE_ANDROID_ID_TRACKING,
      title: DISABLE_ANDROID_ID_TRACKING,
    },
    {
      id: OPT_IN_DATA,
      title: OPT_IN_DATA,
    },
    {
      id: OPT_OUT_DATA,
      title: OPT_OUT_DATA,
    },
    {
      id: LOGOUT,
      title: LOGOUT,
    },
  ];

  const handleOnPress = id => {
    switch (id) {
      case TRACK_EVENTS:
        navigation.navigate('TrackEventScreen');
        break;

      case USER_ATTRIBUTES:
        navigation.navigate('UserAttributeScreen');
        break;

      case IN_APP:
        navigation.navigate('InAppScreen');
        break;

      case PUSH_NOTIFICATION:
        navigation.navigate('PushNotificationScreen');
        break;
      case MOE_INBOX:
        navigation.navigate('InboxListScreen');
        break;
      case GEOFENCE_MONITOR:
        ReactMoEGeofence.startGeofenceMonitoring(APP_ID);
        break;
      case ENABLE_SDK:
        ReactMoE.enableSdk();
        break;
      case DISABLE_SDK:
        ReactMoE.disableSdk();
        break;
      case ENABLE_AD_ID_TRACKING:
        ReactMoE.enableAdIdTracking();
        break;
      case DISABLE_AD_ID_TRACKING:
        ReactMoE.disableAdIdTracking();
        break;
      case ENABLE_ANDROID_ID_TRACKING:
        ReactMoE.enableAndroidIdTracking();
        break;
      case DISABLE_ANDROID_ID_TRACKING:
        ReactMoE.disableAndroidIdTracking();
        break;
      case OPT_IN_DATA:
        ReactMoE.optOutDataTracking(false);
        break;
      case OPT_OUT_DATA:
        ReactMoE.optOutDataTracking(true);
        break;
      case LOGOUT:
        ReactMoE.logout();
        break;
    }
  };

  const renderItem = data => {
    return (
      <TouchableOpacity onPress={() => handleOnPress(data.item.id)}>
        <Text style={MOEStyles.title}>{data.item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={MOEStyles.mainContainer}>
      <StatusBar backgroundColor={'#088A85'} />
      <FlatList
        data={MOE_FEATURES}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
