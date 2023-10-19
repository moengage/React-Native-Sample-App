import React, { useEffect, useState } from 'react';

import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import MOEStyles from '../styles/MoeStyleSheet';
import MoEReactInbox, { MoEInboxData } from 'react-native-moengage-inbox';

const InboxListScreen = (props) => {
  const [isLoading, setLoading] = useState(true)
  const [dataSource, setDataSource] = useState([])

  const loadMessages = async () => {
    // Fetch all available message
    var message: MoEInboxData | any = await MoEReactInbox.fetchAllMessages();

    setLoading(false)
    setDataSource(message.messages)
  }

  const showUnclickedCount = async () => {
    // Get un-clicked message count in the inbox
    var count = await MoEReactInbox.getUnClickedCount();
    Alert.alert(
      'Unread Message Count',
      `Total Unclicked Message Count is ${count.toString()}`,
      [{ text: 'OK', },]
    );
  };

  useEffect(() => {
    /**
     * Initialize the Inbox Plugin, before using any MoEngage Inbox API
     * 
     * Notes: If you have class based component then initiliase in the `componentDidMount()` function of component
     */
    MoEReactInbox.initialize('YOUR_APP_ID');

    // Fetch all the available messages
    loadMessages();
  }, [])

  const trackClick = message => {
    // Call this API whenever any message is clicked, with the clicked message object
    MoEReactInbox.trackMessageClicked(message);
  };

  const deleteMessage = async item => {
    // Delete any message
    MoEReactInbox.deleteMessage(item);

    // You can remove the deleted message from the list or you can fetch the complete message list again
    var message: MoEInboxData | any = await MoEReactInbox.fetchAllMessages();
    setLoading(false)
    setDataSource(message.messages)
  };

  const flatListItemSeparator = () => {
    return <View style={MOEStyles.separator} />;
  };

  const _renderRowItem = ({ item }) => {
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
            <TouchableOpacity onPress={() => trackClick(item)}>
              <Text style={MOEStyles.text}>Track Click</Text>
            </TouchableOpacity>
          </View>

          <View style={MOEStyles.buttonView}>
            <TouchableOpacity onPress={() => deleteMessage(item)}>
              <Text style={MOEStyles.text}>Delete Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={MOEStyles.inboxMainContainer}>
      <View>
        <TouchableOpacity style={{ marginVertical: 8 }} onPress={() => {
          showUnclickedCount()
        }}>
          <Text style={MOEStyles.textStyleButton}>
            Show Unclicked Count
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataSource}
        renderItem={_renderRowItem}
        ItemSeparatorComponent={flatListItemSeparator}
        keyExtractor={item => item.campaignId}
      />
    </View>
  );
}

export default InboxListScreen;
