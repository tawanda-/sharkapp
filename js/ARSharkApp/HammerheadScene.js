"use strict";

import React, { Component } from "react";

import {
  ViroARScene,
  Viro3DObject,
  ViroAmbientLight,
  ViroARCamera,
  ViroImage,
  ViroText,
  ViroFlexView,
} from "react-viro";

export default class HammerheadScene extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <ViroARCamera>
          <ViroImage
            position={[-0.16, 0.5, -1.1]}
            scale={[1, 1, 1]}
            width={0.4}
            height={0.25}
            resizeMode="ScaleToFit"
            imageClipMode="None"
            placeholderSource={require("./res/applogo/logo.png")}
            source={require("./res/applogo/logo.png")}
          />
          <Viro3DObject
            position={[-1, 0, -5]}
            scale={[0.25, 0.25, 0.25]}
            rotation={[-45, 45, 0]}
            source={require("./res/hammerheadshark/hammerheadshark.obj")}
            resources={[
              require("./res/hammerheadshark/hammerheadshark.mtl"),
              require("./res/hammerheadshark/hammerheadsharkdiffuse.jpg"),
            ]}
            type="OBJ"
          />
          <ViroFlexView
            height={1}
            width={4}
            position={[0, -2.5, -5.2]}
            opacity={0.8}
            backgroundColor={"#16264d"}
          >
            <ViroText
              style={{ color: "#ffffff", flex: 1 }}
              text={"Hammerhead Shark"}
              fontSize={15}
              width={4}
              height={1}
              textAlign="center"
            />
          </ViroFlexView>
        </ViroARCamera>
      </ViroARScene>
    );
  }
}

module.exports = HammerheadScene;
