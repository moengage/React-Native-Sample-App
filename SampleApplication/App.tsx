import React, { useEffect } from 'react';
import { View } from 'react-native';
import AppNavigator from './src/AppNavigator';
import ReactMoE, {
  MoEInitConfig,
  MoEPushConfig,
  MoEngageLogConfig,
  MoEngageLogLevel
} from 'react-native-moengage';
import * as RootNavigation from './src/RootNavigation';

const App = () => {

  /**
   * Add the listener to get the callback whenever push token is available.
   * 
   * Notes: Make Sure listener is added before initializing the SDK
   */
  ReactMoE.setEventListener('pushTokenGenerated', payload => {
    console.log('pushTokenGenerated', payload);
  });

  /**
   * Add the listener to get the callback whenever push notification is clicked.
   * 
   * Notes: Make Sure listener is added before initializing the SDK
   */
  ReactMoE.setEventListener('pushClicked', notificationPayload => {
    console.log('pushClicked', notificationPayload);

    // SDK will do the redirection, it's required only if you have some custom redirection logic
    // like redirecting inside some component
    if (notificationPayload.data.payload.Navigate) {
      RootNavigation.navigate(notificationPayload.data.payload.Navigate, {});
    }
  });

  /**
   * Add the listener to get the callback whenever the InApp Campaign is shown.
   * 
   * Notes: Make Sure listener is added before initializing the SDK
   */
  ReactMoE.setEventListener('inAppCampaignShown', inAppInfo =>
    console.log('inAppCampaignShown', inAppInfo),
  );

  /**
   * Add the listener to get the callback whenever the InApp Campaign is clicked.
   * The callback will be received only if action type is Navigation.
   * 
   * Notes: Make Sure listener is added before initializing the SDK
   */
  ReactMoE.setEventListener('inAppCampaignClicked', inAppInfo =>
    console.log('inAppCampaignClicked', inAppInfo),
  );

  /**
   * Add the listener to get the callback whenever the InApp Campaign is dismissed.
   * 
   * Notes: Make Sure listener is added before initializing the SDK
   */
  ReactMoE.setEventListener('inAppCampaignDismissed', selfHandledInAppInfo =>
    console.log('inAppCampaignDismissed', selfHandledInAppInfo),
  );

  /**
   * Add the listener to get the callback for the custom action after InApp is clicked.
   * 
   * Notes: Make Sure listener is added before initializing the SDK
   */
  ReactMoE.setEventListener('inAppCampaignCustomAction', selfHandledInAppInfo =>
    console.log('inAppCampaignCustomAction', selfHandledInAppInfo),
  );

  useEffect(() => {
    // Get your App Id from the MoEngage Dashboard
    const APP_ID = 'YOUR_APP_ID';

    // Optionally pass configuration for the React-Native Plugins
    const moEInitConfig = new MoEInitConfig(
      MoEPushConfig.defaultConfig(),
      new MoEngageLogConfig(MoEngageLogLevel.VERBOSE, true)
    );

    /**
     * Initialize the MoEngage Core SDK whenever the component is mounted properly.
     * 
     * Notes: 
     *  1. If you have class based component then do consider initializing the MoEngage SDK in the render() or componentDidMount() function of class component.
     *  2. You can also initialize the MoEngage SDK without moEInitConfig i.e. `ReactMoE.initialize(APP_ID)`;
     */
    ReactMoE.initialize(APP_ID, moEInitConfig);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
    </View>
  );
};

export default App;
