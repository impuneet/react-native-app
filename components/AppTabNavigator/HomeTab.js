import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import { Container, Content, Icon } from "native-base";
import styles from "../StyleSheets/Style";
import Category from './subComponents/Explore/Category';


const {height,width} = Dimensions.get('window');

class HomeTab extends Component {
  //to remove the android header space
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.exploreScreenTop}>
            <View style={styles.HomeSearchView}>
              <Icon name="ios-search" size={20} style={styles.HomeSearchIcon} />
              <TextInput
                placeholder="Try New Delhi"
                underlineColorAndroid="transparent"
                placeholderTextColor="grey"
                style={styles.HomeSearchInput}
              />
              <Button title="Search" />
            </View>
          </View>
        <ScrollView scrollEventThrottle = {16}>
        <View  style = {styles.panelHeader}>
            <Text style={styles.scrollHeader}>
                What is the Trending Destination Today ?
            </Text>

            <View style = {styles.HorizontalScrollPanel}  >
                <ScrollView  horizontal={true}  showsHorizontalScrollIndicator = {false}>
                    <Category  imageUri = {require('../../assets/home.jpg')}   name='Goa'/>
                    <Category  imageUri = {require('../../assets/experiences.jpg')}   name='New Delhi'/>
                    <Category  imageUri = {require('../../assets/restaurant.jpg')}   name='Jaipur'/>
                    <Category  imageUri = {require('../../assets/home.jpg')}   name='Mumbai'/>
                </ScrollView>
            </View>

          <View >
            <Text style = {styles.scrollHeader}>
                Join Our Travel Club
            </Text>
            <Text style={styles.panelText} >
              Get 15% Discount on Every Stay with our Travel Community with verified Properties.
            </Text>
            <View style={styles.premiumImagePanel} >
              <Image
                  source = {require('../../assets/home.jpg')}
                  style = {styles.premiumLargeImage}
              />
            </View>

          </View>

        </View>
            
        
        </ScrollView>

        </View>
      </SafeAreaView>
    );
  }
}

export default HomeTab;

{
  /* <Text style={styles.container} >Punet</Text>  */
}
