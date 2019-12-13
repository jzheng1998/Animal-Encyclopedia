import React from 'react';
import store from '../flux/store';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Colors from '../constants/Colors';
import Button from '../components/Button';
import { storage, auth } from '../firebase/firebase';
import { REMOVE_USER } from '../constants/Action';

class AccountScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.navigation.getParam('user'),
    }

    if (!this.state.user || this.state.user === null) {
      this.props.navigation.navigate('Login');
    }

    this.onBoundSignOut = this.signout.bind(this);
  }

  changeProfilePicture = async() => {
    const permissions = Permissions.CAMERA_ROLL;
    const { status } = await Permissions.askAsync(permissions);
    if (status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1
      })
      if (!result.cancelled) {
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
          xhr.open('GET', result.uri, true);
          xhr.send(null);
        });
    
        const location = `images/profilepic.jpg`;
        const uploadRef = storage.ref().child(location);
        const metadata = {
          owner: auth.currentUser.email
        }
        uploadRef.put(blob, metadata);

        const url = await uploadRef.getDownloadURL();
        auth.currentUser.updateProfile({
          photoURL: url
        }).then(() => {
          
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }

  signout() {
    auth.signOut();
    store.dispatch(REMOVE_USER);
    this.props.navigation.navigate('Home');
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.topSection}>
          <TouchableOpacity
            onPress={() => {
              this.changeProfilePicture();
            }}>
            <Image
              source={this.state.user.photoURL ?
                {uri : this.state.user.photoURL} :
                require("../assets/images/profile-image-placeholder.png")}
              style={styles.profileImageStyle}
            />
          </TouchableOpacity>
          <View style={styles.infoSection}>
            <Text style={styles.textStyle}>{this.state.user.displayName}</Text>
            <Text style={styles.textStyle}>{this.state.user.email}</Text>
          </View>
        </View>
        <View style={styles.signoutSection}>
          <Button
            title="Sign Out"
            style={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            onPress={() => this.onBoundSignOut()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  topSection: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoSection: {
    flex: 1,
    marginLeft: 15,
    flexDirection: 'column',
    height: "60%",
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "400",
    flex: 1,
    textAlignVertical: 'center'
  },
  profileImageStyle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  signoutSection: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  buttonStyle: {
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    padding: 15,
    alignItems: 'center',
    width: 125
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 18,
  },
})

AccountScreen = store.connect(AccountScreen)
export default AccountScreen