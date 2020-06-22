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

export default class StoneSharkScene extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <ViroARCamera position={[0, 0, 0.2]}>
          <ViroImage
            position={[-0.16, 0.5, -1.2]}
            scale={[1, 1, 1]}
            width={0.4}
            height={0.25}
            resizeMode="ScaleToFit"
            imageClipMode="None"
            placeholderSource={require("./res/applogo/logo.png")}
            source={require("./res/applogo/logo.png")}
          />
          <Viro3DObject
            position={[-1, 0, -3]}
            scale={[0.5, 0.5, 0.5]}
            rotation={[-45, 45, 0]}
            source={require("./res/stoneshark/stoneshark.obj")}
            resources={[
              require("./res/stoneshark/stoneshark.mtl"),
              require("./res/stoneshark/Benedeti.jpg"),
              require("./res/stoneshark/Limesto3.jpg"),
              require("./res/stoneshark/Medrust3.jpg"),
            ]}
            type="OBJ"
          />
          <ViroFlexView
            height={1}
            width={4}
            position={[0, -2.5, -5.1]}
            opacity={0.8}
            backgroundColor={"#16264d"}
          >
            <ViroText
              style={{ color: "#ffffff", flex: 1 }}
              text={"Stone Shark"}
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

module.exports = StoneSharkScene;
