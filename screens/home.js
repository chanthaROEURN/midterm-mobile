import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Button, FlatList} from 'react-native';
import Item from '../components/Item'

export default class Home extends React.Component {
  state = {
      lessonList: ['HTML', 'CSS', 'PHP', 'JavaScript'],
  };
  logout = () => {
    this.props.navigation.goBack()
  }
  render() {
    return (
      <View>
        <ImageBackground source={require('../assets/bg-home.jpg')} style={styles.imageBackground}>
            <Text style = {styles.textStyle}>Welcome { this.props.navigation.getParam('username') } !</Text>
            <Button title="Logout" style = {styles.buttonStyle} onPress={this.logout} />
            <FlatList 
              data={this.state.lessonList} 
              renderItem={props => (<Item {...props} nav={this.props.navigation} />)}
              keyExtractor={(item, index) => index.toString()}
              style={{marginTop: 25}} />
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
  textStyle: {
      marginTop: 10,
      marginBottom: 10,
      marginRight: 5,
      textAlign: 'right'
  },
  buttonStyle: {
      width: 50
  }
});