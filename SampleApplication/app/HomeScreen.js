import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler, Alert } from 'react-native';
import { Text, View, StatusBar, FlatList, TouchableOpacity } from 'react-native';
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
  ANDROID_13_OPTIN_PERMISSION_COUNT,
  DRM_ID_ENABLE,
  DRM_ID_DISABLE,
  SELF_HANDLED_CARDS
} from './Constants';
import MOEStyles from './MoeStyleSheet';
import ReactMoE from 'react-native-moengage';
import ReactMoEGeofence from 'react-native-moengage-geofence';

const onAppExit = () => {
  Alert.alert(
    'Exit',
    'Exit the app',
    [
      {
        text: 'Cancel',
      },
      {
        text: 'Ok',
        onPress: () => {
          BackHandler.exitApp();
        },
      },
    ],
    { cancelable: false },
  );
};

const HomeScreen = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        onAppExit();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [onAppExit]),
  );

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
    {
      id: ANDROID_13_OPTIN_PERMISSION_COUNT,
      title: ANDROID_13_OPTIN_PERMISSION_COUNT,
    },
    {
      id: DRM_ID_ENABLE,
      title: DRM_ID_ENABLE,
    },
    {
      id: DRM_ID_DISABLE,
      title: DRM_ID_DISABLE,
    },
    {
      id: SELF_HANDLED_CARDS,
      title: SELF_HANDLED_CARDS
    }
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
        // Start the Geofence, required to show the Geofence Campaign
        ReactMoEGeofence.startGeofenceMonitoring("YOUR_APP_ID");
        break;

      case ENABLE_SDK:
        // Enable MoEngage SDK, required only if you are explicitly calling disableSdk
        ReactMoE.enableSdk();
        break;

      case DISABLE_SDK:
        // Disable MoEngage SDK
        ReactMoE.disableSdk();
        break;

      case ENABLE_AD_ID_TRACKING:
        // Enable Advertising ID Tracking in Android. This API has no use in iOS Platform
        ReactMoE.enableAdIdTracking();
        break;

      case DISABLE_AD_ID_TRACKING:
        // Disable Advertising ID Tracking in Android, only required if you are enabling the Advertising ID tracking. 
        // This API has no use in iOS Platform
        ReactMoE.disableAdIdTracking();
        break;

      case ENABLE_ANDROID_ID_TRACKING:
        // Enable Android Id tracking for Android. This API has no use in iOS Platform
        ReactMoE.enableAndroidIdTracking();
        break;

      case DISABLE_ANDROID_ID_TRACKING:
        // Disable Android ID Tracking in Android, only required if you are enabling the Android ID tracking. 
        // This API has no use in iOS Platform
        ReactMoE.disableAndroidIdTracking();
        break;

      case OPT_IN_DATA:
        // Enable data tracking
        ReactMoE.optOutDataTracking(false);
        break;

      case OPT_OUT_DATA:
        // Disable data tracking
        ReactMoE.optOutDataTracking(true);
        break;

      case LOGOUT:
        // Logout current user
        ReactMoE.logout();
        break;

      case ANDROID_13_OPTIN_PERMISSION_COUNT:
        // Update the push permission count, the request attempt count will be incremented every time when this API is called.
        // Call this API only when the Application is handling the Notification request permission.
        ReactMoE.updatePushPermissionRequestCountAndroid(1);
        break;

      case DRM_ID_ENABLE:
        // API to enable Device Id tracking, by default Device Id tracking is enabled. 
        // This API has no use in iOS Platform
        ReactMoE.enableDeviceIdTracking();
        break;

      case DRM_ID_DISABLE:
        // API to disable Device Id tracking. This API has no use in iOS Platform
        ReactMoE.disableDeviceIdTracking();
        break;

      case SELF_HANDLED_CARDS:
        navigation.navigate('SelfHandledCards');
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
