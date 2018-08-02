import React, { Component } from "react";
import { View } from "react-native";
import PageOne from "./src/page_one";
import PageTwo from "./src/page_two";
import PageThree from "./src/page_three";
import { StackNavigator } from "react-navigation";

const RootStack = StackNavigator(
  {
    PageSatu: PageOne,
    PageDua: PageTwo,
    PageTiga: PageThree
  },
  {
    initialRouteName: "PageTiga"
  }
);

export default RootStack;
