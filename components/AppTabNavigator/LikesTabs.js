import React, { Component } from 'react';
import { Button, View, Text , StyleSheet } from 'react-native';
import {Icon} from 'native-base';
class LikesTab  extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-heart" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
          <View>
              <Text>LikesTab</Text>
          </View>
        );
      }
}

export default LikesTab ;