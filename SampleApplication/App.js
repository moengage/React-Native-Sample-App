import React, { useEffect } from 'react';
import { View } from 'react-native';
import AppNavigator from './AppNavigator';
import ReactMoE from 'react-native-moengage';
import * as RootNavigation from './RootNavigation';

const App = () => {
  ReactMoE.setEventListener('pushTokenGenerated', payload => {
    console.log('pushTokenGenerated', payload);
  });

  ReactMoE.setEventListener('pushClicked', notificationPayload => {
    console.log('pushClicked', notificationPayload);
    if (notificationPayload.data.payload.Navigate) {
      RootNavigation.navigate(notificationPayload.data.payload.Navigate, {});
    }
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

  useEffect(() => {
    const APP_ID = 'Enter Your App Id';
    ReactMoE.initialize(APP_ID);
  }, []);
  
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};

export default App;
