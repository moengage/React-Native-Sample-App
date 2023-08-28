import React, { PureComponent } from 'react';

import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import MOEStyles from './MoeStyleSheet';
import MoEReactInbox from 'react-native-moengage-inbox';
import AntIcon from 'react-native-vector-icons/AntDesign';

export default class InboxListScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTitle: 'Inbox',
      title: 'Inbox Title',
      headerRight: () => (
        <TouchableOpacity onPress={params.getUnClickedCount}>
          <View style={{ flex: 1, paddingRight: 10, justifyContent: 'center' }}>
            <Text>
              {' '}
              <AntIcon name="inbox" size={30} color="white" />
            </Text>
          </View>
        </TouchableOpacity>
      ),
    };
  };

  setNavigationParams = () => {
    this.props.navigation.setParams({
      getUnClickedCount: this.getUnClickedCount,
    });
  };

  getUnClickedCount = async () => {
    // Get un-clicked message count in the inbox
    var count = await MoEReactInbox.getUnClickedCount();
    Alert.alert('Unread Message Count', count.toString(), [
      {
        text: 'OK',
      },
    ]);
  };

  constructor(props) {
    super(props);
    this.setNavigationParams();
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  async componentDidMount() {
    // Initialize the Inbox Plugin, before using any MoEngage Inbox API
    MoEReactInbox.initialize('YOUR_APP_ID');

    // Fetch all the available messages
    var message = await MoEReactInbox.fetchAllMessages();
    this.setState({
      isLoading: false,
      dataSource: message.messages,
    });
  }

  trackClick = message => {
    // Call this API whenever any message is clicked, with the clicked message object
    MoEReactInbox.trackMessageClicked(message);
  };

  deleteMessage = async item => {
    // Delete any message
    MoEReactInbox.deleteMessage(item);

    // You can remove the deleted message from the list or you can fetch the complete message list again
    var message = await MoEReactInbox.fetchAllMessages();
    this.setState({
      isLoading: false,
      dataSource: message.messages,
    });
  };

  flatListItemSeparator = () => {
    return <View style={MOEStyles.separator} />;
  };
  _renderRowItem = ({ item }) => {
    return (
      <View style={MOEStyles.rowItemMainContainer}>
        <Text style={MOEStyles.rowItemText}>
          Campaign Id = {item.campaignId}{' '}
        </Text>
        <Text style={MOEStyles.rowItemText}>Title = {item.text.title} </Text>
        <Text style={MOEStyles.rowItemText}>
          subtitle = {item.text.subtitle}{' '}
        </Text>
        <Text style={MOEStyles.rowItemText}>
          Message = {item.text.message}{' '}
        </Text>

        <View style={MOEStyles.buttonParent}>
          <View style={MOEStyles.buttonView}>
            <TouchableOpacity onPress={() => this.trackClick(item)}>
              <Text style={MOEStyles.text}>Track Click</Text>
            </TouchableOpacity>
          </View>

          <View style={MOEStyles.buttonView}>
            <TouchableOpacity onPress={() => this.deleteMessage(item)}>
              <Text style={MOEStyles.text}>Delete Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    let { dataSource } = this.state;
    return (
      <View style={MOEStyles.inboxMainContainer}>
        <FlatList
          data={dataSource}
          renderItem={this._renderRowItem}
          ItemSeparatorComponent={this.flatListItemSeparator}
          keyExtractor={item => item.campaignId}
        />
      </View>
    );
  }
}
