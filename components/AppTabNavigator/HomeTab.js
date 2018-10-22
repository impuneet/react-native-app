import React, { Component } from 'react';
import { Button, View, Text , StyleSheet,SafeAreaView,TextInput} from 'react-native';
import { Container, Content, Icon } from 'native-base'
import styles  from '../StyleSheets/Style';


class HomeTab extends Component {

    render() {
        return (
        <SafeAreaView style={{flex :1}}>
            <View style={{flex : 1}}>            
                <View style={styles.exploreScreenTop}>
                    <View style={styles.HomeSearchView} >
                     <Icon name="ios-search" size = {20} style = {styles.HomeSearchIcon} />
                     <TextInput
                     placeholder="Try New Delhi"
                     placeholderTextColor = 'grey'
                     style = {styles.HomeSearchInput}
                     >
                     </TextInput>
                     </View>
                 </View>
            </View>
            </SafeAreaView>
        );  
      }
}

export default HomeTab;

{/* <Text style={styles.container} >Punet</Text>  */}