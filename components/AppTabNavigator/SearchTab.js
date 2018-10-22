import React, { Component } from 'react';
import { Button, View, Text , StyleSheet } from 'react-native';
import {Icon} from 'native-base';
class SearchTab extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-search" style={{ color: tintColor }} />
        )
    }
    render() {
        return (
          <View>
              <Text>MainScreennn</Text>
          </View>
        );
      }
}

export default SearchTab;