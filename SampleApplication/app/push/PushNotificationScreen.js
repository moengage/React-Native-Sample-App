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
} from '../Constants';
import MOEStyles from '../MoeStyleSheet';
import ReactMoE from 'react-native-moengage';

const PushNotificationScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor={'#088A85'} />
      <ScrollView>
        <View style={MOEStyles.view}>
          <TouchableOpacity onPress={() => ReactMoE.registerForPush()}>
            <Text style={MOEStyles.title}>{IOS_PUSH_REGISTER}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => ReactMoE.passFcmPushToken('passToken')}>
            <Text style={MOEStyles.title}>{ANDROID_PUSH_TOKEN}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              ReactMoE.passFcmPushPayload({
                gcm_title: 'pushtoinbox',
                push_from: 'moengage',
                gcm_notificationType: 'normalnotification',
                gcm_activityName: 'com.moe.pushlibrary.activities.MoEActivity',
                gcm_alert: 'pushtoinbox',
                gcm_campaign_id: new Date().getTime(),
                moe_app_id: 'Enter Your AppId',
              })
            }>
            <Text style={MOEStyles.title}>{ANDROID_PUSH_PAYLOAD}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PushNotificationScreen;
