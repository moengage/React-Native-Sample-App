import React from 'react';
import {View, Alert} from 'react-native';
import AppNavigator from './AppNavigator';
import ReactMoE from 'react-native-moengage';

const App = () => {
  ReactMoE.setEventListener('pushTokenGenerated', payload => {
    console.log('pushTokenGenerated', payload);
  });

  ReactMoE.setEventListener('pushClicked', notificationPayload => {
    Alert.alert('Alert Title', 'Notification Clicked', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
    console.log('pushClicked', notificationPayload);
  });

  ReactMoE.setEventListener('inAppCampaignShown', inAppInfo =>
    console.log('inAppCampaignShown', inAppInfo),
  );

  ReactMoE.setEventListener('inAppCampaignClicked', inAppInfo =>
    console.log('inAppCampaignClicked', inAppInfo),
  );

  ReactMoE.setEventListener('inAppCampaignDismissed', selfHandledInAppInfo =>
    console.log('inAppCampaignDismissed', selfHandledInAppInfo),
  );

  ReactMoE.setEventListener('inAppCampaignCustomAction', selfHandledInAppInfo =>
    console.log('inAppCampaignCustomAction', selfHandledInAppInfo),
  );
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};

export default App;
