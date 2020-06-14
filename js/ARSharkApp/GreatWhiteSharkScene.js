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

export default class GreatWhiteSharkScene extends Component {
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
            source={require("./res/greatwhiteshark/greatwhiteshark.obj")}
            resources={[
              require("./res/greatwhiteshark/greatwhiteshark.mtl"),
              require("./res/greatwhiteshark/Sharktexture002.png"),
              require("./res/greatwhiteshark/Sharkmouthtexture002.png"),
              require("./res/greatwhiteshark/shark0021200pxfoto10.png"),
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

module.exports = GreatWhiteSharkScene;
