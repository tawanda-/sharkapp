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
  ViroNode,
} from "react-viro";

export default class SharkScene extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <ViroARCamera>
          {this.props.arSceneNavigator.viroAppProps.screen == 0 && (
            <ViroNode>
              <Viro3DObject
                position={[-1, 0, -4]}
                scale={[0.4, 0.4, 0.4]}
                rotation={[0, 45, 0]}
                source={require("./res/reefshark/REEFSHARK.obj")}
                resources={[
                  require("./res/reefshark/REEFSHARK.mtl"),
                  require("./res/reefshark/REEFSHARK_ReefShark_Mat_Diffuse.png"),
                  require("./res/reefshark/REEFSHARK_ReefShark_Mat_Glossiness.png"),
                  require("./res/reefshark/REEFSHARK_ReefShark_Mat_Height.png"),
                  require("./res/reefshark/REEFSHARK_ReefShark_Mat_Normal.png"),
                  require("./res/reefshark/REEFSHARK_ReefShark_Mat_Specular.png")
                ]}
                type="OBJ"
              />
            </ViroNode>
          )}
          {this.props.arSceneNavigator.viroAppProps.screen == 1 && (
            <ViroNode>
              <Viro3DObject
                position={[-1, 0, -5]}
                scale={[0.25, 0.25, 0.25]}
                rotation={[-90, 140, 0]}
                source={require("./res/hammerheadshark/hammerheadshark.obj")}
                resources={[
                  require("./res/hammerheadshark/hammerheadshark.mtl"),
                  require("./res/hammerheadshark/hammerheadsharkdiffuse.jpg"),
                ]}
                type="OBJ"
              />
            </ViroNode>
          )}
        </ViroARCamera>
      </ViroARScene>
    );
  }
}

module.exports = SharkScene;