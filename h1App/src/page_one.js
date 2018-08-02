import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";

class PageOne extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       emailUser: "",
//       passwordUser: "",
//       confirmPassword: ""
//     };
//   }

//   static navigationOptions = {
//     headerTitle: "Page Satu"
//   };

//   checkUserInput() {
//     const { emailUser, passwordUser } = this.state; // Destructuring

//     if (emailUser === "regitafachri13@gmail.com" && passwordUser === "123456") {
//       this.props.navigation.navigate("PageDua", {
//         email_user: emailUser
//       });
//     }
//   }

  render() {
    return (
      <View style={style.Container}>
        <View style={style.Containerlogo} />
        <Image style={style.logo} source={require("../img/bajaj.png")} />
        <View style={style.ContainerTI}>
          <TextInput
            //onChangeText={txt => this.setState({ emailUser: txt })}
            placeholder="Email"
            underlineColorAndroid="black"
          />
          <TextInput
            //onChangeText={txt => this.setState({ passwordUser: txt })}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="black"
          />
        </View>
        <View style={style.ContainerBtn} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("PageTiga")}
          style={style.button}
        >
          <Text style={style.txtInsideBtnLogin}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("PageDua")}
          style={[style.button, { marginTop: 10 }, { marginBottom: 30 }]}
        >
          <Text style={style.txtInsideBtnLogin}> Register </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#FF7F50"
  },
  Containerlogo: {
    flex: 1
    //backgroundColor: "black"
  },
  ContainerTI: {
    flex: 2,
    backgroundColor: "white"
  },
  ContainerBtn: {
    flex: 1,
    alignSelf: "center"
    //backgroundColor: "black"
  },
  logo: {
    //marginTop: 20,
    alignSelf: "center",
    width: "30%",
    height: "30%"
  },
  button: {
    borderRadius: 22,
    backgroundColor: "white",
    width: "50%",
    alignSelf: "center"
  },
  txtInsideBtnLogin: {
    color: "black",
    fontSize: 18,
    fontWeight: "400",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center"
  }
});

export default PageOne;
