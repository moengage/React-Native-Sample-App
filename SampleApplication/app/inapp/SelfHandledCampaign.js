import React, { PureComponent } from 'react';
import { View, Text, Modal, StatusBar, TouchableOpacity } from 'react-native';
import ReactMoE from 'react-native-moengage';
import MOEStyles from '../MoeStyleSheet';

export default class SelfHandledCampaign extends PureComponent {
  constructor(props) {
    super(props);
    this.info = props.data;
  }

  componentDidMount() {
    // Call this whenever the Self Handled InApp is shown to the user
    ReactMoE.selfHandledShown(this.info);
  }

  handleNonPrimaryActionTap = () => {
    this.props.setVisible(false);

    // Call this whenever the Self Handled InApp is clicked
    ReactMoE.selfHandledClicked(this.info);
  };

  handleDismissTap = () => {
    this.props.setVisible(false);

    // Call this whenever the Self Handled InApp is dismissed
    ReactMoE.selfHandledDismissed(this.info);
  };

  render() {
    if (this.info == null) {
      return null;
    }

    // Your custom logic to build and show the SelfHandled InApp
    return (
      <View>
        <StatusBar backgroundColor={'#088A85'} />

        <Modal
          animationType={'fade'}
          transparent={false}
          visible={true}
          onRequestClose={() => {
            this.props.setVisible(false);
          }}>
          <View style={MOEStyles.selfHandledModal}>
            <View style={MOEStyles.selfHandledContainer}>
              <Text style={MOEStyles.selfHandledTextLabels}>Campaign Id: </Text>
              <Text style={MOEStyles.selfHandledTextValues}>
                {' '}
                {this.info.campaignData.campaignId}
              </Text>
            </View>
            <View style={MOEStyles.selfHandledContainer}>
              <Text style={MOEStyles.selfHandledTextLabels}>
                Campaign Name:{' '}
              </Text>
              <Text style={MOEStyles.selfHandledTextValues}>
                {' '}
                {this.info.campaignData.campaignName}
              </Text>
            </View>
            <View style={MOEStyles.selfHandledContainer}>
              <Text style={MOEStyles.selfHandledTextLabels}>Expiry Time: </Text>
              <Text style={MOEStyles.selfHandledTextValues}>
                {this.info.campaign.dismissInterval}
              </Text>
            </View>
            <View style={MOEStyles.selfHandledContainer}>
              <Text style={MOEStyles.selfHandledTextLabels}>Payload: </Text>
              <Text style={MOEStyles.selfHandledTextValues}>
                {this.info.campaign.payload}
              </Text>
            </View>
            <View style={MOEStyles.selfHandledButtonContainer}>
              <TouchableOpacity
                style={MOEStyles.selfHandledButton}
                onPress={this.handleNonPrimaryActionTap}>
                <Text style={MOEStyles.selfHandledButtonText}>
                  Non Primary Action
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={MOEStyles.selfHandledButton}
                onPress={this.handleDismissTap}>
                <Text style={MOEStyles.selfHandledButtonText}>Dismiss</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
