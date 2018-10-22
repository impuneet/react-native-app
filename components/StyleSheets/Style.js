import { StyleSheet } from 'react-native';
let iconSize = 25;

export default StyleSheet.create({

    icon : {
        height : iconSize ,
        width : iconSize,
    },

    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },

    exploreScreenTop : {
        height : 80,
        backgroundColor : 'white',
        borderBottomWidth : 1,
        borderBottomColor : '#ddddd'
    },
    HomeSearchInput : {
        flex :1 ,
        fontWeight : '700',
        backgroundColor : 'white'
    },
    HomeSearchView : {
        flexDirection : 'row',
        padding : 10,
        backgroundColor : 'white',
        marginHoriZontal : 20,
        shadowOffset : {width : 0,height : 0},
        shadowColor : 'black',
        shadowOpacity : 0.2,
        elevation : 1
    },
    HomeSearchIcon : {
        marginRight : 10
    }

})