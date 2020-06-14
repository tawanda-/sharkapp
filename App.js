/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { ViroARSceneNavigator } from "react-viro";

var StoneScene = require("./js/ARSharkApp/StoneSharkScene");
var HammerheadScene = require("./js/ARSharkApp/HammerheadScene");
var GreatWhiteScene = require("./js/ARSharkApp/GreatWhiteSharkScene");

var scenes = [GreatWhiteScene, HammerheadScene, StoneScene];

export default class SharkApp extends Component {
  constructor() {
    super();

    this._getARNavigator = this._getARNavigator.bind(this);
    this._captureScreenShot = this._captureScreenShot.bind(this);
    this._pushNextScene = this._pushNextScene.bind(this);
    this._popScene = this._popScene.bind(this);
  }

  render() {
    return this._getARNavigator();
  }

  _getARNavigator() {
    return (
      <View style={localStyles.viroContainer}>
        <ViroARSceneNavigator
          ref={(ARSceneNav) => (this.ARSceneNav = ARSceneNav)}
          {...this.state.sharedProps}
          initialScene={{ scene: GreatWhiteScene }}
          style={{ flex: 1 }}
        />
        <View style={localStyles.forwardArrow}>
          <TouchableHighlight onPress={this._pushNextScene}>
            <Image
              source={require("./js/res/forwardarrow/forwardarrow.png")}
            />
          </TouchableHighlight>
        </View>
        <View style={localStyles.backArrow}>
          <TouchableHighlight onPress={this._popScene}>
            <Image source={require("./js/res/backarrow/backarrow.png")} />
          </TouchableHighlight>
        </View>
        <View style={localStyles.screenshotButton}>
          <TouchableHighlight style={localStyles.screenshotButton} onPress={this._captureScreenShot}>
            <Image
              source={require("./js/res/photcamerabutton/photocamerabutton.png")}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  _captureScreenShot() {
    this.ARSceneNav.sceneNavigator.takeScreenshot("sharkappscreenshot", true);
    alert("Screenshot saved");
  }

  _pushNextScene() {
    let newIndex = this.state.screenIndex + 1;
    this.setState({
      screenIndex: newIndex,
    });
    this.ARSceneNav.sceneNavigator.push({ scene: scenes[newIndex] });
  }

  _popScene() {
    let newIndex = this.state.screenIndex - 1;
    if (newIndex >= 0) {
      this.setState({
        screenIndex: newIndex,
      });
      this.ARSceneNav.sceneNavigator.pop();
    }
  }
}

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    marginTop: 50,
  },
  forwardArrow: {
    position: "absolute",
    top: "45%",
    right: 0,
  },
  backArrow: {
    position: "absolute",
    top: "45%",
    left: 0,
  },
  screenshotButton: {
    alignItems: "center",
    backgroundColor: "black",
    paddingTop: 15,
    paddingBottom: 15,
    height: 93,
  },
});

module.exports = SharkApp;
