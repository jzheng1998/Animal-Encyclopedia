import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { MonoText } from '../components/StyledText';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import Button from '../components/Button';
import store from '../flux/store';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.store.state.user) {
      this.props.navigation.navigate('Main');
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
        </View>
        <View style={styles.mainContainer}>
          <MonoText style={styles.header}>Animal Encyclopedia</MonoText>
          <Button
            title='Continue as Guest'
            style={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            onPress={() => { navigate('Main') }} />
          <Button
            title='Log In'
            style={[styles.buttonStyle, {marginTop: 25, backgroundColor: 'green'}]}
            textStyle={styles.buttonTextStyle}
            onPress={() => { navigate('Login') }} />
          <Button
            title='Sign Up'
            style={[styles.buttonStyle, {marginTop: 25, backgroundColor: 'red'}]}
            textStyle={styles.buttonTextStyle}
            onPress={() => { navigate('Signup') }} />
        </View>
        <View style={styles.footerContainer}>
          <Image
            style={{width: null, height: null, flex: 1}}
            source={require('../assets/images/cover.png')}
            resizeMode='contain'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  mainContainer: {
    flex: 4,
    width: Layout.window.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '50%',
    height: 60,
    borderRadius: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 75
  },
  buttonTextStyle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  footerContainer: {
    justifyContent: 'center',
    flex: 2,
    marginVertical: 15,
    width: Layout.window.width
  }
});

HomeScreen = store.connect(HomeScreen)

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen
