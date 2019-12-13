import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import { SliderBox } from '../components/SliderBox';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Button from '../components/Button';
import store from '../flux/store';

class DetailScreen extends React.Component{
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('data').name,
    headerTitleStyle: {
      alignSelf:'center',
      flexGrow: 1,
      textAlign: 'center',
    },
  })

  constructor(props) {
    super(props);

    this.state = {
      rawName: this.props.navigation.getParam('raw'),
      data: this.props.navigation.getParam('data'),
      images: this.props.navigation.getParam('images'),
      location: this.props.navigation.getParam('location'),
    }

    this.onBoundRedirect = this._redirectToBrowser.bind(this);
  }

  async _redirectToBrowser() {
    await WebBrowser.openBrowserAsync(this.state.data.moreInfo);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={400}
            parentWidth={Layout.window.width} />
          <Button 
            title="View more images"
            style={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            onPress={() => this.props.navigation.navigate('MoreImage', {name: this.state.rawName})}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.header}>{this.state.data.name}</Text>
            <Text>Class: {this.state.data.classification.class}</Text>
            <Text>Order: {this.state.data.classification.order}</Text>
            <Text>Family: {this.state.data.classification.family}</Text>
            <Text>Genus: {this.state.data.classification.genus}</Text>
            <Text>Species: {this.state.data.classification.species}</Text>
            <Text style={styles.header}>Description</Text>
            <Text>{this.state.data.description}</Text>
            <Text style={styles.header}>Location</Text>
            <View style={styles.locationContainer}>
              <Image
                style={styles.location}
                source={this.state.location}
                resizeMode='contain'
              />
            </View>
            <View style={styles.redirectContainer}>
              <Button
                textStyle={{color: 'blue', textDecorationLine: 'underline'}}
                title='Find out more'
                onPress={this.onBoundRedirect}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  infoContainer: {
    marginHorizontal: 10,
    marginBottom: 15
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8
  },
  buttonStyle: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 16
  },
  locationContainer: {
    width: Layout.window.width - 50,
    height: Layout.window.width - 50,
    alignSelf: 'center',
  },
  location: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  redirectContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25
  },
})

DetailScreen = store.connect(DetailScreen)
DetailScreen.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('data').name,
  headerTitleStyle: {
    alignSelf:'center',
    flexGrow: 1,
    textAlign: 'center',
  },
})
export default DetailScreen