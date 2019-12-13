import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { storage, auth } from '../firebase/firebase';
import uuid from 'uuid-js';

export default class UploadImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name
    }
  }

  _checkPermissionAsync = async() => {
    const permissions = Permissions.CAMERA_ROLL;
    const { status } = await Permissions.askAsync(permissions);
    if (status === "granted") {
      this._pickImage();
    }
  }

  _pickImage = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1
    })

    if (!result.cancelled) {
      this.uploadImageAsync(result.uri);
    }
  }

  uploadImageAsync = async(uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    const location = `images/animals/${this.state.name}/${require('uuid/v4')()}`;
    const uploadRef = storage.ref().child(location);
    const metadata = {
      owner: auth.currentUser.email
    }
    uploadRef.put(blob, metadata);
  
    // We're done with the blob, close and release it
    // blob.close();
  }

  render() {
    const { style } = this.props;
    return (
      <View>
        <TouchableOpacity style={style} onPress={() => this._checkPermissionAsync()}>
          <Text style={{fontSize: 16}}>Upload Image</Text>
        </TouchableOpacity>
      </View>
    )
  }
}