import React, { Component } from 'react';
import { Button, View, Text , StyleSheet } from 'react-native';
import { Icon } from 'native-base'
class AddMediaTab extends Component {
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-add-circle" style={{ color: tintColor }} />
        )
    }
    render() {
        return (
          <View>
              <Text>Add Media Tab</Text>
          </View>
        );
      }
}

export default AddMediaTab;