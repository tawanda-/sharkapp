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
import { View } from "react-native";

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
            position={[-0.16, 0.5, -1]}
            scale={[1, 1, 1]}
            width={0.4}
            height={0.25}
            resizeMode="ScaleToFit"
            imageClipMode="None"
            placeholderSource={require("./res/applogo/logo.png")}
            source={require("./res/applogo/logo.png")}
          />
          {this.props.arSceneNavigator.viroAppProps.screen == 0 && (
            <ViroNode>
              <Viro3DObject
                position={[-1, 0, -4]}
                scale={[0.4, 0.4, 0.4]}
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
                position={[0, -2.5, -5.0]}
                opacity={1}
                backgroundColor={"#16264d"}
              >
                <ViroText
                  style={{ color: "#ffffff" }}
                  text={"Great White Shark"}
                  fontSize={15}
                  width={3.5}
                  height={1}
                  textClipMode="ClipToBounds"
                  textAlign="center"
                />
              </ViroFlexView>
            </ViroNode>
          )}
          {this.props.arSceneNavigator.viroAppProps.screen == 1 && (
            <ViroNode>
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
            </ViroNode>
          )}
          {this.props.arSceneNavigator.viroAppProps.screen == 2 && (
            <ViroNode>
              <Viro3DObject
                position={[-1, 0, -3]}
                scale={[0.5, 0.5, 0.5]}
                rotation={[-45, 45, 0]}
                source={require("./res/shark_stone/shark_01.obj")}
                resources={[
                  require("./res/shark_stone/shark_01.mtl"),
                  require("./res/shark_stone/Benedeti.jpg"),
                  require("./res/shark_stone/Limesto3.jpg"),
                  require("./res/shark_stone/Medrust3.jpg"),
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
            </ViroNode>
          )}
        </ViroARCamera>
      </ViroARScene>
    );
  }
}

module.exports = GreatWhiteSharkScene;

//style={{ flexDirection: "column", padding: 1 }}

/**<ViroText
              width={3.8}
              height={1}
              style={{ color: "#ffffff" }}
              textClipMode="ClipToBounds"
              textAlign="left"
              text={
                "Great whites are the world's largest predatory fish, according to Discovery. They grow to be about 4.6 to 6.1 meters or more and can weigh more than 2,268 kilograms. Though massive, the great white is not the biggest shark."
              }
              fontSize={12}
            /> */
