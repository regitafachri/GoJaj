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
import axios from "axios";
import PageThree from "./page_three";

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
  constructor(props) {
    super(props);

    this.state = {
      emailUser: "",
      passwordUser: ""
    };
  }

  // getDataFromLogin = () => {
  //   const id_notes = this.props.id;
  //   const url = "http://172.104.50.9:3000/api/Users";
  //   axios
  //     .get(url)
  //     .then(res => {
  //       //console.log(res.data);
  //       const { emailUser, passwordUser } = res.data;
  //       this.setState({ emailUser: emailUser, passwordUser: passwordUser });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  userLogin = () => {
    const { emailUser, passwordUser } = this.state;
    const url = "http://172.104.50.9:3000/api/Users/login";
    if (emailUser === "" || passwordUser === "") {
      Alert.alert("warning!", "Data cannot be empty");
    } else {
      const data = {
        email: emailUser,
        password : passwordUser
      };
      console.log(emailUser, passwordUser);
      axios
        .post(url, data)
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            this.props.navigation.navigate("PageTiga");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  // componentDidMount() {
  //   this.getDataFromLogin();
  // }

  render() {
    return (
      <View style={style.Container}>
        <View style={style.Containerlogo} />
        <Image style={style.logo} source={require("../img/bajaj.png")} />
        <View style={style.ContainerTI}>
          <TextInput
            onChangeText={txt => this.setState({ emailUser: txt })}
            //placeholder={this.state.emailUser}
            underlineColorAndroid="black"
          />
          <TextInput
            onChangeText={txt => this.setState({ passwordUser: txt })}
            //placeholder={this.state.passwordUser}
            secureTextEntry={true}
            underlineColorAndroid="black"
          />
        </View>
        <View style={style.ContainerBtn} />
        <TouchableOpacity onPress={() => this.userLogin()} style={style.button}>
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

// To do Lists
// 1. di setiap text input ambil data input dari user, dan simpan di state local
// 2. bikin function untuk request api
// 3. button kasih event on press, panggil function no 2
// 4. di dalam function yang bertugas untuk request api, sebelum request api, pastikan validasi dulu datanya
