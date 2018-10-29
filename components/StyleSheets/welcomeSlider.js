import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
export default StyleSheet.create({
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
