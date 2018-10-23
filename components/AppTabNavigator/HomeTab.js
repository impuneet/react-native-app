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
import images from '../../res/images/mainImages';

const {height,width} = Dimensions.get('window');
class HomeTab extends Component {

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
                    <Category  imageUri = {images.Home}   name='Goa'/>
                    <Category  imageUri = {images.Experience}   name='New Delhi'/>
                    <Category  imageUri = {images.Restaurant}   name='Jaipur'/>
                    <Category  imageUri = {images.Experience}   name='Mumbai'/>
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
