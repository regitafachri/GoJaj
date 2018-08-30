import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import axios from "axios";

class PageFour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerLists: []
    };
  }

  getBannerList() {
    const API_URL = "http://172.104.50.9:3000/api/banner_lists";
    axios
      .get(API_URL)
      .then(response => {
        console.log(response);
        this.setState({ bannerLists: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getBannerList();
  }

  render() {
    return (
      <View>
        {this.state.bannerLists.map((data, idx) => (
          <View key={idx}>
            <Text>{data.name}</Text>
            <Image
              style={{ width: "100%", height: 130, resizeMode: "cover" }}
              source={{ uri: data.image }}
            />
          </View>
        ))}
      </View>
    );
  }
}

export default PageFour;
