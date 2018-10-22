import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import BoardScreen from './components/BoardScreen';
import BoardDetailScreen from './components/BoardDetailScreen';
import AddBoardScreen from './components/AddBoardScreen';
import EditBoardScreen from './components/EditBoardScreen';
import MainScreen from './components/MainScreen';

const RootStack = createStackNavigator({
  Board : BoardScreen,
  BoardDetails : BoardDetailScreen,
  AddBoard : AddBoardScreen,
  EditBoard : EditBoardScreen,
  MainScreen : MainScreen
},
{
  initialRouteName : 'MainScreen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#777777',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
},
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
