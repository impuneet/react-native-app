import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import Swiper from "react-native-swiper";
/* import Category from './subComponents/Explore/Category'; */
import  Welcomeslider from './subComponents/Welcomeslider';
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    paddingTop: 20
  },
  slide1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },
  slide2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },
  slide3: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },
  header1: {
    color: "#65DC97",
    fontSize: 24,
    fontWeight: "bold"
  },
  text: {
    color: "#939290",
    fontSize: 11
  }

  
  
});

class SearchTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 200 }}>
       <Welcomeslider/>
        </View>

        <View style={{ height: 100 }} />
      </View>
    );
  }
}

export default SearchTab;
