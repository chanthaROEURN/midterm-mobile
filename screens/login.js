import React from 'react';
import {View, Text, StyleSheet, TextInput, Image, ImageBackground, Button} from 'react-native';

export default class Login extends React.Component{
  state = {};
  showInfo = () => {
    if (!this.state.username || !this.state.password) {
      alert('Username & Password are required.')
    } else {
      this.props.navigation.navigate('Home', {username: this.state.username});
    }
  }
  handInputUsername = username => {
    this.setState({username});
  }
  handInputPassword = password => {
    this.setState({password});
  }
  render() {
    return (
      <View>
        <ImageBackground source={require('../assets/bg-img.jpg')} style={styles.imageBackground}>
          <View style={styles.centerImage}>
          <Image source={require('../assets/icon-lock.png')} style={styles.imageStyle} />
          </View>
          <TextInput style = {styles.input} placeholder="Username" onChangeText={this.handInputUsername} />
          <TextInput style = {styles.input} placeholder="Password" onChangeText={this.handInputPassword} textContentType="password" secureTextEntry={true} />
          <Button title="Login" style = {styles.buttonStyle} onPress={this.showInfo} />
        </ImageBackground>
      </View>
    )
  }
};
const styles = StyleSheet.create({
  imageBackground: {
    resizeMode: "cover",
    width: "100%",
    height: 520
  },
  centerImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    marginTop: 30,
    marginBottom: 15
  }, 
  input: {
    paddingTop: 5,
    paddingRight: 15,
    paddingBottom: 5,
    paddingLeft: 20,
    borderColor: '#333300',
    borderWidth: 2,
    margin: 5,
    borderRadius: 10
  },
  buttonStyle: {
    marginTop: 15
  }
});