import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  RESET_CURRENT_CONTEXT,
  SET_CURRENT_CONTEXT,
  SHOW_INAPP,
  SHOW_SELF_HANDLED,
} from '../Constants';
import MOEStyles from '../MoeStyleSheet';
import ReactMoE from 'react-native-moengage';
import prompt from 'react-native-prompt-android';
import SelfHandledCampaign from './SelfHandledCampaign';

export function validateArrayOfString(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return false;
  }
  if (!data.every(validateString)) {
    return false;
  }
  return true;
}

function validateString(value) {
  return typeof value === 'string';
}

const InAppScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selfHandledData, setSelfHandledData] = useState();

  function setVisible(value) {
    setIsVisible(value);
  }
  return (
    <View>
      <StatusBar backgroundColor={'#088A85'} />
      <ScrollView>
        <View style={MOEStyles.view}>
          {isVisible ? (
            <View>
              <SelfHandledCampaign
                data={selfHandledData}
                setVisible={setVisible}
              />
            </View>
          ) : null}
          <TouchableOpacity onPress={() => ReactMoE.showInApp()}>
            <Text style={MOEStyles.title}>{SHOW_INAPP}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              ReactMoE.getSelfHandledInApp();
              ReactMoE.setEventListener('inAppCampaignSelfHandled', payload => {
                if (payload && Object.keys(payload).length !== 0) {
                  setSelfHandledData(payload);
                  setIsVisible(true);
                }
              });
            }}>
            <Text style={MOEStyles.title}>{SHOW_SELF_HANDLED}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              prompt(
                'Enter Context',
                'use comma for multiple values',
                [
                  {text: 'Cancel'},
                  {
                    text: 'OK',
                    onPress: text => {
                      const result = text.split(',');
                      if (validateArrayOfString(result)) {
                        ReactMoE.setCurrentContext(result);
                      }
                    },
                  },
                ],
                {
                  type: 'plain-text',
                },
              )
            }>
            <Text style={MOEStyles.title}>{SET_CURRENT_CONTEXT}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ReactMoE.resetCurrentContext()}>
            <Text style={MOEStyles.title}>{RESET_CURRENT_CONTEXT}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default InAppScreen;