import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  background: {
    flex: 1,

    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginbutton: {
    width: "100%",
    height: 70,
    backgroundColor: "#dc5c65",
  },
  registerbutton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 319.6,
    height: 227.8,
  },
  logocontainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  textstyle: {
    color: "white",
    fontSize: 20,
  },
  header: {
    top: 50,
    textAlign: "center",
    color: "white",
    // lineHeight: 60,
    fontSize: 40,
    fontFamily: "notoserif",
  },
  para: {
    top: 50,
    textAlign: "center",
    color: "grey",
    lineHeight: 30,
    // lineHeight: 60,
    fontSize: 15,
    margin: 50,
    fontFamily: "notoserif",
  },
  signintext: {
    position: "absolute",
    width: "80px",
    height: "24px",
    left: "233px",
    top: "376px",
    color: "#121212",
    borderRadius: "15px",
    fontFamily: "Saira",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "31px",
    color: "#3D3939",
  },
  logintext: {
    position: "absolute",
    width: "80px",
    height: "24px",
    left: "83px",
    top: "375px",
    color: "#121212",
    borderRadius: "15px",
    fontFamily: "Saira",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "31px",
    color: "#FFFFFF",
  },
  rectangle2: {
    position: "absolute",
    width: "145px",
    height: "51px",
    left: "51px",
    top: "366px",
    color: "#121212",
    borderRadius: "15px",
  },
  rectangle1: {
    position: "absolute",
    width: "287px",
    height: "51px",
    left: "51px",
    top: "366px",
    color: "#C4C4C4",
    borderRadius: "15px",
  },
});
export default styles;
