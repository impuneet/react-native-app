import React, { Component } from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";

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

class Welcomeslider extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} height={200} showsButtons={false} autoplay>
        <View style={styles.slide1}>
          <Text style={styles.header1}>Welcome to TakeUp</Text>
          <Text style={styles.text}>
            We have Live Projects for every stream Management,
            Engineering,Medical,Finance,Teaching and many more !
          </Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.header1}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.header1}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}
export default Welcomeslider ;