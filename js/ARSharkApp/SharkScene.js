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

              <ViroFlexView
                height={1.7}
                width={4}
                position={[0, -2.2, -5.2]}
                opacity={0.7}
                backgroundColor={"#4A4A4A"}
              >
                <ViroFlexView height={0.6} width={4}>
                  <ViroText
                    style={{
                      color: "#ffffff",
                      fontFamily: "Aller",
                      fontStyle:"normal",
                      fontSize: 20,
                      fontWeight:"700",
                    }}
                    text={"Hammerhead Shark"}
                    textAlign="center"
                    textAlignVertical={"center"}
                  />
                </ViroFlexView>
                <ViroFlexView height={1.1} width={4}>
                  <ViroText
                    style={{
                      color: "#ffffff",
                      marginLeft: 0.2,
                      marginRight: 0.1,
                      fontFamily: "Aller",
                      fontStyle:"normal",
                      fontWeight:"400",
                    }}
                    textClipMode="ClipToBounds"
                    textAlign="left"
                    text={
                      "Great whites are the world's largest predatory fish, according to Discovery. They grow to be about 4.6 to 6.1 meters or more and can weigh more than 2,268 kilograms. Though massive, the great white is not the biggest shark."
                    }
                    fontSize={16}
                  />
                </ViroFlexView>
              </ViroFlexView>
            </ViroNode>
          )}
        </ViroARCamera>
      </ViroARScene>
    );
  }
}

module.exports = SharkScene;
