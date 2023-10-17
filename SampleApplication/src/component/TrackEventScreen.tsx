import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  TRACK_EVENT,
  TRACK_EVENTS_WITH_ATTRIBUTE,
  TRACK_NON_INTERACTIVE_EVENT,
} from '../utils/Constants';
import MOEStyles from '../styles/MoeStyleSheet';
import ReactMoE, { MoEGeoLocation, MoEProperties } from 'react-native-moengage';
const TrackEventScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor={'#088A85'} />
      <ScrollView>
        <View style={MOEStyles.view}>
          <TouchableOpacity
            onPress={() => {
              // Track Event without any properties
              ReactMoE.trackEvent('Birthday Event')
            }}>
            <Text style={MOEStyles.title}>{TRACK_EVENT}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // Add the required attribute in properties object which needs to be tracked with an event
              let attributes = new MoEProperties();
              attributes.addAttribute('quantities', [1, 2]);
              attributes.addAttribute('models', ['iPhone 12', 'iPhone 11']);
              attributes.addAttribute('mixedArray', [
                'iphone 12',
                4,
                'iphone 11',
                5,
              ]);
              attributes.addAttribute('memory', '128gb');
              attributes.addAttribute('product', 'iPhone');
              attributes.addAttribute('currency', 'dollar');
              attributes.addAttribute('price', 699);
              attributes.addAttribute('new_item', true);

              // Track Event with properties
              ReactMoE.trackEvent('mobiles', attributes);
            }}>
            <Text style={MOEStyles.title}>{TRACK_EVENTS_WITH_ATTRIBUTE}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              let properties = new MoEProperties();

              // Add the date attributes, the date format should be in ISO [yyyy-MM-dd'T'HH:mm:ss'Z']
              properties.addDateAttribute('date1', '2022-08-31T12:42:10Z');
              properties.addDateAttribute('date2', new Date().toISOString());

              // Add the location in the attribute
              properties.addLocationAttribute(
                'entry_location',
                new MoEGeoLocation(90.00001, 180.00001),
              );
              properties.addLocationAttribute(
                'exit_location',
                new MoEGeoLocation(12.456, -15.89),
              );

              properties.addAttribute('fiestName', 'Arun');
              properties.addAttribute('lastName', 'Kumar');

              // Marks an event as non-interactive
              properties.setNonInteractiveEvent();
              ReactMoE.trackEvent('profile', properties);
            }}>
            <Text style={MOEStyles.title}>{TRACK_NON_INTERACTIVE_EVENT}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default TrackEventScreen;
