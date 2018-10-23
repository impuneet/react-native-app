import React, { Component } from 'react';
import { Button, View, Text , StyleSheet,Platform,Image} from 'react-native';
import {Icon} from 'native-base';
import { TabNavigator } from 'react-navigation'
import HomeTab  from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab' ;
import AddMediaTab  from  './AppTabNavigator/AddMediaTab' ;
import ProfileTab from './AppTabNavigator/ProfileTab' ;

export default class MainScreen extends Component {
    static navigationOptions = {
      headerLeft : <Icon name="ios-camera-outline" style={{paddingLeft : 10}}/>,
      title : 'My Feed',
      headerRight : <Icon name="ios-send-outline" style = {{paddingRight : 10}} />
    };
    render() {
      return (
      <AppTabNavigator></AppTabNavigator>
      );
    }
  }
  
//   export default MainScreen;

  const AppTabNavigator = TabNavigator({
    Explore: {
        screen: HomeTab,
        navigationOptions : {
            tabBarLabel: 'TRIPS',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
            )   
        }
    },
    Saved : {
        screen: SearchTab
    },
    Discuss : {
        screen: AddMediaTab
    },
    Profile: {
        screen: ProfileTab
    }
  },
{
    animationEnabled : true,
    swipeEnabled : true,
    tabBarPosition : "bottom",
    tabBarOptions : {
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: 'white'
                }
            }),
            backgroundColor : 'white',
            borderTopWidth : 0,
            shadowOffset : {width : 5,height:5},
            shadowColor : 'red',
            shadowOpacity : 0.5,
            elevation: 5
        },
        activeTintColor : 'red',
        inactiveTintColor : 'grey',
        showIcon : true,
        showLabel : true
    }
})



  const styles= StyleSheet.create({
      container : {
          flex : 1,
          alignItems : 'center',
          justifyContent : 'center'
      }
  })