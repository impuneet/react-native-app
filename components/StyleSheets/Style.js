import { StyleSheet, Platform, StatusBar,Dimensions } from "react-native";

let iconSize = 25;
const {height,width} = Dimensions.get('window');
export default StyleSheet.create({
  icon: {
    height: iconSize,
    width: iconSize
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollHeader: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 20
  },
  panelHeader: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20
  },
  panelText: {
    fontWeight: "100",
    marginTop: 5,
    marginLeft: 20
  },

  premiumLargeImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey"
  },
  premiumImagePanel : {
    alignSelf : 'center',
    width : width-40,height : 200,marginTop : 20
  },
  HorizontalScrollPanel: {
    height: 130,
    marginTop: 20
  },
  TrendingStories: {
    height: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: "lightgrey"
  },
  TrendingImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  TrendingText: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10
  },
  exploreScreenTop: {
    height: Platform.OS == "android" ? StatusBar.currentHeight + 100 : 80,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ddddd"
  },
  HomeSearchInput: {
    flex: 1,
    fontWeight: "700",
    backgroundColor: "white"
  },
  HomeSearchView: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    marginHoriZontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 1,
    marginTop: Platform.OS == "android" ? 30 : null
  },
  HomeSearchIcon: {
    marginRight: 10
  }
});
