import React, { Component } from 'react';
import { Button, View, Text , StyleSheet,Image } from 'react-native';
import {Icon} from 'native-base';
import styles from "../../../StyleSheets/Style";
class Category  extends Component {
    render() {
        return (
            <View  style = {styles.TrendingStories}>
                        <View style={{flex : 2}} >
                            <Image  style={styles.TrendingImage} source={this.props.imageUri}
                            />
                        </View>
                        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                            <Text>{this.props.name}
                              </Text>
                        </View>
            </View>
        );
      }
}

export default Category ;