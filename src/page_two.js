import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";

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

  checkUserInput() {
    const { emailUser, passwordUser, confirmPassword } = this.state; // Destructuring

    if (emailUser !== "" && passwordUser !== "" && confirmPassword === passwordUser) {
      this.props.navigation.goBack();
    }
  }



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
            onPress={() => this.checkUserInput()}
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
