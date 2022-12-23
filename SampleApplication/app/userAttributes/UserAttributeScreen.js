import React from 'react';
import prompt from 'react-native-prompt-android';
import {FlatList, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import {
  CANCEL,
  ENTER_ALIAS,
  ENTER_EMAIL_ID,
  ENTER_FIRST_NAME,
  ENTER_GENDER,
  ENTER_LAST_NAME,
  ENTER_PHONE_NUMBER,
  ENTER_UNIQUE_ID,
  ENTER_USER_NAME,
  OK,
  PLAIN_TEXT,
  SET_ALIAS,
  SET_BIRTHDAY_DATE,
  SET_CONTACT_NUMBER,
  SET_CUSTOM_ATTRIBUTES,
  SET_CUSTOM_LOCATION,
  SET_EMAIL_ID,
  SET_FIRST_NAME,
  SET_GENDER,
  SET_ISO_DATE,
  SET_LAST_NAME,
  SET_LOCATION,
  SET_UNIQUE_ID,
  SET_USER_NAME,
} from '../Constants';
import MOEStyles from '../MoeStyleSheet';
import ReactMoE, {MoEGeoLocation} from 'react-native-moengage';

const UserAttributeScreen = () => {
  const USER_ATTRIBUTES_LIST = [
    {
      id: SET_UNIQUE_ID,
      title: SET_UNIQUE_ID,
    },
    {
      id: SET_USER_NAME,
      title: SET_USER_NAME,
    },
    {
      id: SET_FIRST_NAME,
      title: SET_FIRST_NAME,
    },
    {
      id: SET_LAST_NAME,
      title: SET_LAST_NAME,
    },
    {
      id: SET_ALIAS,
      title: SET_ALIAS,
    },
    {
      id: SET_GENDER,
      title: SET_GENDER,
    },
    {
      id: SET_BIRTHDAY_DATE,
      title: SET_BIRTHDAY_DATE,
    },
    {
      id: SET_EMAIL_ID,
      title: SET_EMAIL_ID,
    },
    {
      id: SET_CONTACT_NUMBER,
      title: SET_CONTACT_NUMBER,
    },
    {
      id: SET_LOCATION,
      title: SET_LOCATION,
    },
    {
      id: SET_CUSTOM_ATTRIBUTES,
      title: SET_CUSTOM_ATTRIBUTES,
    },
    {
      id: SET_CUSTOM_LOCATION,
      title: SET_CUSTOM_LOCATION,
    },
    {
      id: SET_ISO_DATE,
      title: SET_ISO_DATE,
    },
  ];
  const showPromt = (title, onPress) => {
    prompt(
      title,
      null,
      [{text: CANCEL}, {text: OK, onPress: text => onPress(text)}],
      {
        type: PLAIN_TEXT,
      },
    );
  };

  const handleOnPress = id => {
    console.log(id);
    switch (id) {
      case SET_UNIQUE_ID:
        showPromt(ENTER_UNIQUE_ID, text => ReactMoE.setUserUniqueID(text));
        break;

      case SET_USER_NAME:
        showPromt(ENTER_USER_NAME, text => ReactMoE.setUserName(text));
        break;

      case SET_FIRST_NAME:
        showPromt(ENTER_FIRST_NAME, text => ReactMoE.setUserFirstName(text));
        break;

      case SET_LAST_NAME:
        showPromt(ENTER_LAST_NAME, text => ReactMoE.setUserLastName(text));
        break;
      case SET_ALIAS:
        showPromt(ENTER_ALIAS, text => ReactMoE.setAlias(text));
        break;
      case SET_GENDER:
        showPromt(ENTER_GENDER, text => ReactMoE.setUserGender(text));

        break;
      case SET_BIRTHDAY_DATE:
        ReactMoE.setUserBirthday('1995-03-10T12:00:00Z');

        break;
      case SET_EMAIL_ID:
        showPromt(ENTER_EMAIL_ID, text => ReactMoE.setUserEmailID(text));
        break;
      case SET_CONTACT_NUMBER:
        showPromt(ENTER_PHONE_NUMBER, text =>
          ReactMoE.setUserContactNumber(text),
        );

        break;
      case SET_LOCATION:
        ReactMoE.setUserLocation(new MoEGeoLocation(98.34, 66.33));
        break;
      case SET_CUSTOM_ATTRIBUTES:
        ReactMoE.setUserAttribute('Education', 'BE');
        break;
      case SET_CUSTOM_LOCATION:
        ReactMoE.setUserAttributeLocation(
          'user_login_location',
          new MoEGeoLocation(10.3223, -88.6026),
        );
        break;
      case SET_ISO_DATE:
        ReactMoE.setUserAttributeISODateString(
          'userDate',
          new Date().toISOString(),
        );
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
        data={USER_ATTRIBUTES_LIST}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default UserAttributeScreen;
