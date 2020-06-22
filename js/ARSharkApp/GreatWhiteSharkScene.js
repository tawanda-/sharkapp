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
            position={[-0.16, 0.5, -1]}
            scale={[1, 1, 1]}
            width={0.4}
            height={0.25}
            resizeMode="ScaleToFit"
            imageClipMode="None"
            placeholderSource={require("./res/applogo/logo.png")}
            source={require("./res/applogo/logo.png")}
          />
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
