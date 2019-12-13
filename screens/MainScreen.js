import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SectionList,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { slideImages } from '../constants/Information';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import CustomCard from '../components/Card';
import { MonoText } from '../components/StyledText';
import Button from '../components/Button';
import { firestore, auth } from '../firebase/firebase';
import store from '../flux/store';
import { ADD_ITEMS } from '../constants/Action';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this._retrieveData();
    this.onBoundRenderItem = this._renderItem.bind(this);
  }

  _retrieveData() {
    firestore.collection("data").get()
      .then((data) => {
        const items = [];
        data.forEach((doc) => {
          items.push({
            category: doc.id,
            data: doc.data().data
          });
        })
        store.dispatch(ADD_ITEMS, items);
      })
  }

  _navigate(animalName) {
    firestore.collection("animals")
      .doc(animalName)
      .get()
      .then(doc => {
        if (doc.exists) {
          const data = doc.data();
          this.props.navigation.navigate('Detail',
            {
              raw: animalName,
              data: data,
              images: slideImages[animalName].images,
              location: slideImages[animalName].location,
              title: data.name,
            })
        } else {
          console.log("No such document!");
        }
      })
  }

  _renderItem = ({ section, index }) => {
    const numColumns = 2;
  
    if (index % numColumns !== 0) return null;
  
    const items = [];
    for (let i = index; i < index + numColumns; i++) {
      if (i >= section.data.length) {
        break;
      }
      let item = section.data[i];
      let name = item.name.charAt(0).toUpperCase() + item.name.replace("_", " ").slice(1);
      let imageSource = {
        uri: item.portraitLink
      }

      items.push(
        <CustomCard
          key={name}
          style={styles.cardStyle}
          imageSource={imageSource}
          title={name}
          onPress={() => this._navigate(item.name) }/>
      );
    }

    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {items}
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={styles.containerWrapper}>
        <View style={styles.container}>
          <SectionList
            sections={this.props.store.state.data}
            keyExtractor={(item, index) => item + index}
            renderItem={this.onBoundRenderItem}
            renderSectionHeader={({ section: { category } }) => (
              <MonoText style={styles.header}>{ category }</MonoText>
            )}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  container: {
    flex: 1,
    marginTop: 10
  },
  header: {
    fontSize: 20,
    marginLeft: 15
  },
  cardStyle: {
    width: Layout.window.width/2 - 30,
    margin: 15,
    maxHeight: 235
  }
})

navigateAccount = (props) => {
  props.navigation.navigate('Account', props.store.state.user)
}

MainScreen = store.connect(MainScreen)

MainScreen.navigationOptions = ({props, navigation}) => ({
  title: 'Animal Encyclopedia',
  headerTitleStyle: {
    alignSelf:'center',
    flexGrow:1,
    textAlign: 'center',
  },
  headerLeft: (<IconButton icon="account-circle" size={26} style={{opacity: 0}}/>),
  headerRight: (<IconButton
    icon="account-circle"
    size={26}
    onPress={() => {
      if (auth.currentUser === null || !auth.currentUser) {
        navigation.navigate('Login')
      } else {
        navigation.navigate('Account', {user: auth.currentUser})
      }
    }}
    />)
})

export default MainScreen