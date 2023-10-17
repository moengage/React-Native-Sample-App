import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  ANDROID_PUSH_PAYLOAD,
  ANDROID_PUSH_TOKEN,
  IOS_PUSH_REGISTER,
} from '../utils/Constants';
import MOEStyles from '../styles/MoeStyleSheet';
import ReactMoE from 'react-native-moengage';

const PushNotificationScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor={'#088A85'} />
      <ScrollView>
        <View style={MOEStyles.view}>
          <TouchableOpacity onPress={() => {
            /**
             * Call this method to register for push notification in iOS
             * This API has no use in Android Platform.
             */
            ReactMoE.registerForPush();
          }}>
            <Text style={MOEStyles.title}>{IOS_PUSH_REGISTER}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              /**
               * Pass the push token to MoEngage SDK. Required only if Application is handling the token generation.
               * This API has no use in iOS Platform.
               */
              ReactMoE.passFcmPushToken('Push Token');
            }}>
            <Text style={MOEStyles.title}>{ANDROID_PUSH_TOKEN}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              /**
               * Pass the push payload to MoEngage SDK. Required only if Application is registering
               * their own service instead of MoEngage service. 
               * This API has no use in iOS Platform.
               */
              ReactMoE.passFcmPushPayload({
                gcm_title: 'pushtoinbox',
                push_from: 'moengage',
                gcm_notificationType: 'normalnotification',
                gcm_activityName: 'com.moe.pushlibrary.activities.MoEActivity',
                gcm_alert: 'pushtoinbox',
                gcm_campaign_id: new Date().getTime(),
                moe_app_id: 'APP_ID',
              } /*This is just a sample payload, you should pass the complete received payload */)
            }>
            <Text style={MOEStyles.title}>{ANDROID_PUSH_PAYLOAD}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PushNotificationScreen;
