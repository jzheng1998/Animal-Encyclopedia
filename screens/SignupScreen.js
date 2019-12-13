import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput
} from 'react-native';
import Colors from '../constants/Colors';
import Button from '../components/Button';
import { auth } from '../firebase/firebase';

export default class SignupScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Sign Up',
    headerTitleStyle: {
      alignSelf:'center',
      flexGrow: 1,
      textAlign: 'center',
    },
  })

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
    }
  }

  onChangeName(text) {
    this.setState({name: text});
  }

  onChangeEmail(text) {
    this.setState({email: text});
  }

  onChangePassword(text) {
    this.setState({password: text});
  }

  onClick() {
    auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(res => {
            var user = auth.currentUser;
            user.updateProfile({
              displayName: this.state.name
            })
            if (user) {
              this.props.navigation.navigate('Main');
            }
          })
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        this.setState({error: errorMessage})
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Please fill out the following:</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Display Name"
          value={this.state.name}
          onChangeText={text => this.onChangeName(text)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={text => this.onChangeEmail(text)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={text => this.onChangePassword(text)}
        />
        <View>
          {this.state.error != '' &&
            <Text style={{color: 'red', marginLeft: 10}}>{this.state.error}</Text>
          }
        </View>
        <Button
          title='Sign up'
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          onPress={() => { this.onClick() }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  textStyle: {
    fontSize: 24,
    margin: 10,
  },
  inputStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    width: "75%",
    padding: 5,
    fontSize: 20,
    margin: 10
  },
  buttonStyle: {
    backgroundColor: 'blue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    width: 150,
  },
  buttonTextStyle: {
    fontSize: 20,
    color: 'white'
  }
});