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
          <ViroImage
            position={[-0.16, 0.5, -1]}
            style={{ flex: 1, height: undefined, width: undefined }}
            width={0.4}
            height={0.11}
            resizeMode="ScaleToFit"
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
                height={1.7}
                width={4}
                position={[0, -2.2, -5.1]}
                opacity={0.7}
                backgroundColor={"#4A4A4A"}
              >
                <ViroFlexView
                  height={0.6}
                  width={4}
                >
                  <ViroText
                    style={{
                      color: "#ffffff",
                      fontFamily: "Aller",
                      fontStyle:"normal",
                      fontSize: 20,
                      fontWeight:"700",
                    }}
                    text={"Great White Shark"}
                    textAlign="center"
                    textAlignVertical={"center"}
                  />
                </ViroFlexView>
                <ViroFlexView
                  height={1.1}
                  width={4}
                >
                  <ViroText
                    style={{
                      color: "#ffffff",
                      fontFamily: "Aller",
                      fontStyle:"normal",
                      fontWeight:"400",
                      marginLeft: 0.2,
                      marginRight: 0.1,
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
