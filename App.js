/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  NativeModules,
} from "react-native";

import { ViroARSceneNavigator } from "react-viro";
import RNFS from "react-native-fs";
import Share from "react-native-share";
import uuid from "react-uuid";
import RNImageTools from "react-native-image-tools-wm";

var SharkScene = require("./js/ARSharkApp/SharkScene");
var UIConstants = require("./js/ARSharkApp/UIConstants");

const logoSource = Image.resolveAssetSource(
  require("./js/ARSharkApp/res/applogo/logo.png")
);
const textSource = Image.resolveAssetSource(
  require("./js/ARSharkApp/res/stickers/greatwhiteshark/greatwhitesharktext.png")
);

export default class SharkApp extends Component {
  constructor() {
    super();

    this.state = {
      screenIndex: 0,
      viroAppProps: { screen: 0 },
      currentScreen: UIConstants.SHOW_MAIN_SCREEN,
      fileUrl: "",
      originalScreenshotUrl: "",
    };

    this._getARNavigator = this._getARNavigator.bind(this);
    this._captureScreenShot = this._captureScreenShot.bind(this);
    this._pushNextScene = this._pushNextScene.bind(this);
    this._popScene = this._popScene.bind(this);
    this._renderShareScreen = this._renderShareScreen.bind(this);
    this._cancel = this._cancel.bind(this);
    this._handleMergeImages = this._handleMergeImages.bind(this);
  }

  render() {
    return this._getARNavigator();
  }

  _getARNavigator() {
    return (
      <View style={localStyles.viroContainer}>
        {this.state.currentScreen == "SHOW_MAIN_SCREEN" && (
          <ViroARSceneNavigator
            ref={(ARSceneNav) => (this.ARSceneNav = ARSceneNav)}
            initialScene={{ scene: SharkScene }}
            viroAppProps={this.state.viroAppProps}
            style={{ flex: 1 }}
            autofocus={true}
          />
        )}

        {this.state.currentScreen == "SHOW_MAIN_SCREEN" && (
          <View style={localStyles.logo}>
            <Image source={require("./js/ARSharkApp/res/applogo/logo.png")} />
          </View>
        )}

        {this.state.screenIndex < 1 &&
          this.state.currentScreen == "SHOW_MAIN_SCREEN" && (
            <View style={localStyles.forwardArrow}>
              <TouchableHighlight onPress={this._pushNextScene}>
                <Image
                  source={require("./js/ARSharkApp/res/forwardarrow/forwardarrow.png")}
                />
              </TouchableHighlight>
            </View>
          )}

        {this.state.screenIndex > 0 &&
          this.state.currentScreen == "SHOW_MAIN_SCREEN" && (
            <View style={localStyles.backArrow}>
              <TouchableHighlight onPress={this._popScene}>
                <Image
                  source={require("./js/ARSharkApp/res/backarrow/backarrow.png")}
                />
              </TouchableHighlight>
            </View>
          )}

        {this.state.currentScreen == "SHOW_MAIN_SCREEN" && (
          <View style={localStyles.sticker}>
            <Image
              style={{
                width: "100%",
              }}
              source={require("./js/ARSharkApp/res/stickers/greatwhiteshark/greatwhitesharktext.png")}
            />
          </View>
        )}

        {this.state.currentScreen == "SHOW_MAIN_SCREEN" && (
          <View style={localStyles.screenshotButton}>
            <TouchableHighlight onPress={this._captureScreenShot}>
              <Image
                source={require("./js/ARSharkApp/res/photocamerabutton/photocamerabutton.png")}
              />
            </TouchableHighlight>
          </View>
        )}

        {this._renderShareScreen()}
      </View>
    );
  }

  _captureScreenShot() {
    this.ARSceneNav.sceneNavigator
      .takeScreenshot(uuid(), true)
      .then((retDict) => {
        if (!retDict.success) {
          if (retDict.errorCode == ViroConstants.RECORD_ERROR_NO_PERMISSION) {
            alert(
              "Screenshot Error",
              "Please allow camera permissions!" + errorCode
            );
          }
        }
        this.setState({
          fileUrl: "file://" + retDict.url,
          originalScreenshotUrl: "file://" + retDict.url,
          currentScreen: UIConstants.SHOW_SHARE_SCREEN,
        });
      });
  }

  _handleMergeImages = async () => {
    var ie = NativeModules.ImageEditor;
    ie.merge(this.state.fileUrl);

    await ie
      .merge(this.state.fileUrl)
      .then(({ uri, width, height }) => {
        // Sync with your app state
        this.setState({
          fileUrl: uri,
        });
      })
      .catch(console.error);

    /*
    await RNImageTools.merge([
      logoSource,
      textSource.uri,
    ]).then(mergedImage => {
      this.setState({
        fileUrl: mergedImage
      });
    }).catch(console.error);*/
  };

  _renderShareScreen() {
    this._handleMergeImages();

    if (this.state.currentScreen == UIConstants.SHOW_SHARE_SCREEN) {
      return (
        <View style={localStyles.shareScreenContainerTransparent}>
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: this.state.fileUrl }}
              style={localStyles.backgroundImage}
              resizeMode={"contain"}
            />
          </View>
          {this.state.currentScreen == UIConstants.SHOW_SHARE_SCREEN && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 93,
                backgroundColor: "black",
                paddingEnd: 15,
                paddingStart: 15,
                paddingTop: 39,
                paddingBottom: 32,
              }}
            >
              <TouchableHighlight onPress={this._cancel}>
                <Image
                  style={localStyles.previewScreenCancelShare}
                  source={require("./js/ARSharkApp/res/cancel/cancel.png")}
                />
              </TouchableHighlight>

              <TouchableHighlight onPress={this._openShareActionSheet}>
                <Image
                  style={localStyles.previewScreenButtonShare}
                  source={require("./js/ARSharkApp/res/btn_shareScreen/btn_shareScreen.png")}
                />
              </TouchableHighlight>
            </View>
          )}
        </View>
      );
    }
  }

  _cancel() {
    this.setState({
      currentScreen: UIConstants.SHOW_MAIN_SCREEN,
    });
  }

  _openShareActionSheet = async () => {
    let contentType = "image/png";
    try {
      await Share.open({
        subject: "Shark App",
        url: this.state.fileUrl,
        type: contentType,
      });

      this.setState({
        currentScreen: UIConstants.SHOW_MAIN_SCREEN,
      });
    } catch (error) {}
  };

  /*
  _openShareActionSheet = () => {

    RNFS.readFile(this.state.fileUrl, 'base64').then(async res => {
      alert(res);
    try {
      const result = await Share.share({
        message: "Shark App",
        url: `data:image/png;base64,` + res
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          this.setState({
            currentScreen: UIConstants.SHOW_MAIN_SCREEN,
          });
        } else {
          this.setState({
            currentScreen: UIConstants.SHOW_MAIN_SCREEN,
          });
        }
      } else if (result.action === Share.dismissedAction) {
        this.setState({
          currentScreen: UIConstants.SHOW_MAIN_SCREEN,
        });
      }
    } catch (error) {
      alert(error.message);
    }
  });

  };

  */

  _pushNextScene() {
    if (this.state.screenIndex < 2) {
      let newIndex = this.state.screenIndex + 1;
      this.setState({
        screenIndex: newIndex,
        viroAppProps: { screen: newIndex },
      });
    }
  }

  _popScene() {
    if (this.state.screenIndex > 0) {
      let newIndex = this.state.screenIndex - 1;

      this.setState({
        screenIndex: newIndex,
        viroAppProps: { screen: newIndex },
      });
    }
  }
}

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    marginTop: 50,
  },
  logo: {
    position: "absolute",
    top: "5%",
    left: 15,
  },
  sticker: {
    position: "absolute",
    width: "100%",
    paddingEnd: 15,
    paddingStart: 15,
    bottom: 108,
    left: 0,
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
  shareScreenContainerTransparent: {
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: "column",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: "contain",
  },
  previewScreenButtonShare: {
    height: 27,
    width: 27,
  },
  previewScreenCancelShare: {
    height: 27,
    width: 53,
    resizeMode: "contain",
  },
  cancelScreenButtonShare: {
    paddingTop: 15,
    paddingBottom: 15,
    height: 93,
  },
});

module.exports = SharkApp;
