"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro3DObject,
  ViroAmbientLight,
  ViroImage,
  ViroLightingEnvironment,
  ViroAnimations,
  ViroMaterials,
  ViroNode,
  ViroSpotLight,
  ViroOmniLight,
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    this.state = {
      text: "Initializing AR...",
      texture: "white",
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={200}/>
        

      <Viro3DObject
            position={[0, 0, -5]}
            scale={[1.0, 1.0, 1.0]}
            source={require('./res/shark/Shark.obj')}
            resources={[
                       require('./res/shark/Shark.mtl'),
                       require('./res/shark/Sharktexture.png'),
                       require('./res/shark/Sharkmouthtexture.png'),
                      ]}
            type="OBJ"/>
        
      </ViroARScene>
    );
  }

  _onLoadStart() {
    console.log("loaded");
  }

  _onLoadEnd() {
    console.log("On End");
  }

  _onError(event) {
    console.log("OBJ loading failed with error: " + event.nativeEvent.error);
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Shark App!",
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  sharkTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});

ViroMaterials.createMaterials({});

module.exports = HelloWorldSceneAR;
