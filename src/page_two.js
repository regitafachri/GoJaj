import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert
} from "react-native";
import PageOne from "./page_one";
import axios from "axios";

class PageTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailUser: "",
      passwordUser: "",
      confirmPassword: ""
    };
  }

  static navigationOptions = {
    headerTitle: "Page Dua"
  };

  // checkUserInput() {
  //   const { emailUser, passwordUser, confirmPassword } = this.state; // Destructuring

  //   if (emailUser !== "" && passwordUser !== "" && confirmPassword === passwordUser) {
  //     this.props.navigation.goBack();
  //   }
  // }

  userRegister = () => {
    const { emailUser, passwordUser, confirmPassword } = this.state;
    const url = "http://172.104.50.9:3000/api/Users";
    if (emailUser === "" || passwordUser === "" || confirmPassword === "") {
      Alert.alert("Warning!", "Password didn't match");
    } else {
      if (passwordUser === confirmPassword) {
        const data = {
          email: emailUser,
          password: passwordUser
        };
        axios
          .post(url, data)
          .then(res => {
            if (res.status === 200) {
              this.props.navigation.goBack();
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };

  render() {
    return (
      <View style={style.container}>
        <TextInput
          onChangeText={txt => this.setState({ emailUser: txt })}
          placeholder="Email"
          underlineColorAndroid="black"
          style={[style.ContainerTI, { marginTop: 100 }]}
        />
        <TextInput
          onChangeText={txt => this.setState({ passwordUser: txt })}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="black"
          style={style.ContainerTI}
        />
        <TextInput
          onChangeText={txt => this.setState({ confirmPassword: txt })}
          placeholder="Confirm Password"
          secureTextEntry={true}
          underlineColorAndroid="black"
          style={style.ContainerTI}
        />
        <TouchableOpacity style={style.button}>
          <Text
            onPress={() => this.userRegister()}
            //onPress={() => this.props.navigation.goBack()}
            style={style.txtInsideBtnLogin}
          >
            register
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  ContainerTI: {
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    backgroundColor: "#FF7F50"
  },
  button: {
    borderRadius: 22,
    backgroundColor: "white",
    width: "50%",
    alignSelf: "center",
    marginTop: 30
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

export default PageTwo;
