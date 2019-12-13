import React from 'react';
import { 
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text
} from "react-native";
import Lightbox from 'react-native-lightbox';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import store from "../flux/store";
import { storage, auth } from '../firebase/firebase';
import UploadImage from '../components/UploadImage';

class MoreImageScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.navigation.getParam('name'),
      images: [],
      fullsize: false,
    }

    this._retrieveImages();
    this.onBoundPushImage = this.pushImage.bind(this);
    this.onBoundToggleStyle = this.toggleStyle.bind(this);
  }

  toggleStyle(index) {
    this.setState({fullsize: !this.state.fullsize})
  }

  async pushImage (imageRef) {
    const url = await imageRef.getDownloadURL();
    let oldImages = this.state.images;
    oldImages.push(url);
    this.setState({images: oldImages})
  }

  _retrieveImages = () => {
    let storageRef = storage.ref(`/images/animals/${this.state.name}`);

    storageRef.listAll()
      .then(result => {
        result.items.forEach(imageRef => {
          this.onBoundPushImage(imageRef);
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const data = [];
    this.state.images.map((image, i) => {
      data.push(
        <Lightbox
          onOpen={() => this.onBoundToggleStyle(i)}
          onClose={() => this.onBoundToggleStyle(i)}
          key={i}
          underlayColor="white">
          <View style={{borderWidth: 1, margin: 5}}>
            <Image
              resizeMode={this.state.fullsize ? "contain" : "cover"}
              source={{ uri: image }}
              style={this.state.fullsize ? styles.full : styles.imageStyle}
            />
          </View>
        </Lightbox>
      )
    })

    return (
      <ScrollView style={styles.container}>
        <View style={styles.wrap}>
          {data}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    overflow: 'hidden'
  },
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: 'flex-start'
  },
  full: {
    width: Layout.window.width,
    height: Layout.window.width,
  },
  imageStyle: {
    width: Layout.window.width/3 - 13,
    height: Layout.window.width/3 - 13,
  },
})

MoreImageScreen = store.connect(MoreImageScreen)
MoreImageScreen.navigationOptions = ({ navigation }) => ({
  headerRight: auth.currentUser ? 
  (<UploadImage style={{marginRight: 10}} name={navigation.getParam('name')} />) :
  null
})
// auth.onAuthStateChanged(user => {
//   if (user) {
//     MoreImageScreen.navigationOptions = ({ navigation }) => ({
//       headerRight: (<UploadImage style={{marginRight: 10}} name={navigation.getParam('name')} />)
//     })
//   }
// })

export default MoreImageScreen