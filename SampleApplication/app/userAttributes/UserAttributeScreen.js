import React from 'react';
import prompt from 'react-native-prompt-android';
import {
  ScrollView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
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
  SET_UNIQUE_ID,
  SET_USER_NAME,
} from '../Constants';
import MOEStyles from '../MoeStyleSheet';
import ReactMoE, {MoEGeoLocation} from 'react-native-moengage';

const UserAttributeScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor={'#088A85'} />
      <ScrollView>
        <View style={MOEStyles.view}>
          <TouchableOpacity
            onPress={() =>
              prompt(
                'Enter UniqueID',
                null,
                [
                  {text: 'Cancel'},
                  {text: 'OK', onPress: text => ReactMoE.setUserUniqueID(text)},
                ],
                {
                  type: 'plain-text',
                },
              )
            }>
            <Text style={MOEStyles.title}>{SET_UNIQUE_ID}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              prompt(
                'Enter User Name',
                null,
                [
                  {text: 'Cancel'},
                  {text: 'OK', onPress: text => ReactMoE.setUserName(text)},
                ],
                {
                  type: 'plain-text',
                },
              )
            }>
            <Text style={MOEStyles.title}>{SET_USER_NAME}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              prompt(
                'Enter First Name',
                null,
                [
                  {text: 'Cancel'},
                  {
                    text: 'OK',
                    onPress: text => ReactMoE.setUserFirstName(text),
                  },
                ],
                {
                  type: 'plain-text',
                },
              )
            }>
            <Text style={MOEStyles.title}>{SET_FIRST_NAME}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              prompt(
                'Enter Last Name',
                null,
                [
                  {text: 'Cancel'},
                  {
                    text: 'OK',
                    onPress: text => ReactMoE.setUserLastName(text),
                  },
                ],
                {
                  type: 'plain-text',
                },
              )
            }>
            <Text style={MOEStyles.title}>{SET_LAST_NAME}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              prompt(
                'Enter Alias',
                null,
                [
                  {text: 'Cancel'},
                  {
                    text: 'OK',
                    onPress: text => ReactMoE.setAlias(text),
                  },
                ],
                {
                  type: 'plain-text',
                },
              )
            }>
            <Text style={MOEStyles.title}>{SET_ALIAS}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              prompt(
                'Enter Gender',
                null,
                [
                  {text: 'Cancel'},
                  {
                    text: 'OK',
                    onPress: text => ReactMoE.setUserGender(text),
                  },
                ],
                {
                  type: 'plain-text',
                },
              )
            }>
            <Text style={MOEStyles.title}>{SET_GENDER}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => ReactMoE.setUserBirthday('1995-03-10T12:00:00Z')}>
            <Text style={MOEStyles.title}>{SET_BIRTHDAY_DATE}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              prompt(
                'Enter Email Id',
                null,
                [
                  {text: 'Cancel'},
                  {
                    text: 'OK',
                    onPress: text => ReactMoE.setUserEmailID(text),
                  },
                ],
                {
                  type: 'plain-text',
                },
              )
            }>
            <Text style={MOEStyles.title}>{SET_EMAIL_ID}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              prompt(
                'Enter Phone Number',
                null,
                [
                  {text: 'Cancel'},
                  {
                    text: 'OK',
                    onPress: text => ReactMoE.setUserContactNumber(text),
                  },
                ],
                {
                  type: 'plain-text',
                },
              )
            }>
            <Text style={MOEStyles.title}>{SET_CONTACT_NUMBER}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              ReactMoE.setUserLocation(new MoEGeoLocation(98.34, 66.33))
            }>
            <Text style={MOEStyles.title}>{SET_CUSTOM_LOCATION}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => ReactMoE.setUserAttribute('Education', 'BE')}>
            <Text style={MOEStyles.title}>{SET_CUSTOM_ATTRIBUTES}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              ReactMoE.setUserAttributeLocation(
                'user_login_location',
                new MoEGeoLocation(10.3223, -88.6026),
              )
            }>
            <Text style={MOEStyles.title}>{SET_CUSTOM_LOCATION}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              ReactMoE.setUserAttributeISODateString(
                'userDate',
                new Date().toISOString(),
              )
            }>
            <Text style={MOEStyles.title}>{SET_ISO_DATE}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserAttributeScreen;
