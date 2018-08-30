import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";
import axios from "axios";

class PageThree extends Component {
  constructor(props) {
    super(props);

    //console.log("asal");

    this.state = {
      dataProducts: []
      //startPrice: "Start from"
    };
  }

  getBannerList() {
    console.log("hallo");
    const API_URL = "https://ace.tokopedia.com/hoth/hotlist/v1/home";
    //const API_URL = "http://172.104.50.9:3000/api/banner_lists";
    //const API_URL = "https://swapi.co/api/people/1/";
    // axios
    //   .get(API_URL)
    //   .then(response => {
    //     console.log(response);
    //     this.setState({ dataProducts: response.data.list });
    //   }) // kalo berhasil kesini
    //   .catch(error => {
    //     console.log(error);
    //   }); // kalo error dia kesini

    axios
      .get(API_URL)
      .then(response => {
        console.log(response);
        this.setState({ dataProducts: response.data.list });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getBannerList();
  } 

  renderBody = params => {
    console.log(params);
    return (
      <View>
        <Text>{params.item.title}</Text>
      </View>
    );
  };

  render() {
    return (
      // <ScrollView style={style.container}>
      //   {this.state.hot_products.map((dataKu, idx) => (
      //     <View
      //       key={idx}
      //       style={style.box}
      //     >
      //       <Image
      //         style={{ width: "100%", height: 130, resizeMode: "cover" }}
      //         source={{ uri: dataKu.img }}
      //       />
      //       <View
      //         style={{
      //           flexDirection: "row",
      //           justifyContent: "space-between",
      //           backgroundColor: "white",
      //           height: 40,
      //         }}
      //       >
      //         <Text
      //           style={{marginTop:10, marginLeft: 10, color: "green", fontWeight: "bold" }}
      //         >
      //           {dataKu.title}
      //         </Text>
      //         <Text style={{marginTop:10, marginRight: 10}}>
      //           <Text>Start from: </Text>
      //           <Text style={{fontWeight:"bold"}}>{dataKu.price_start_from}</Text>
      //         </Text>
      //       </View>
      //     </View>
      //   ))}
      //   <TouchableOpacity style={style.button}>
      //     <Text style={style.txtInsideBtnLogin}>Page Empat</Text>
      //   </TouchableOpacity>
      // </ScrollView>

      <View style={{ flex: 1 }}>
        {this.state.dataProducts.length > 0 ? (
          <FlatList
            data={this.state.dataProducts}
            renderItem={this.renderBody}
            keyExtractor={(item, id) => item.id}
          />
        ) : (
          <ActivityIndicator style={{ marginTop: 35 }} size="small" animating />
        ) //ternary operator
        }
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    elevation: 5,
    marginTop: 10,
    backgroundColor: "black"
  },
  button: {
    borderRadius: 22,
    backgroundColor: "white",
    width: "50%",
    alignSelf: "center",
    marginTop: 10
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
export default PageThree;
