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
        <ViroARCamera>
          <ViroImage
            position={[-0.25, 0.5, -1]}
            scale={[0.2, 0.2, 0]}
            source={require("./res/applogo/logo.png")}
          />
          <Viro3DObject
            position={[-1, 0, -10]}
            scale={[1, 1, 1]}
            rotation={[0, 45, 0]}
            source={require("./res/stoneshark/stoneshark.obj")}
            resources={[
              require("./res/stoneshark/stoneshark.mtl"),
              require("./res/stoneshark/stoneshark/Benedeti.jpg"),
              require("./res/stoneshark/stoneshark/Limesto3.jpg"),
              require("./res/stoneshark/stoneshark/Medrust3.jpg"),
            ]}
            type="OBJ"
          />
          <ViroFlexView
            height={1}
            width={4}
            position={[0, -2.5, -5]}
            backgroundColor={"#434e64"}
            opacity={0.5}
          >
            <ViroText
              style={{ color: "#ffffff", flex: 1 }}
              text={"Stone Shark"}
              fontSize={20}
            />
          </ViroFlexView>
        </ViroARCamera>
      </ViroARScene>
    );
  }
}

module.exports = StoneSharkScene;
