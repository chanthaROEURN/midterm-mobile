import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Button} from 'react-native';
const description = [
    "Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.",
    "CSS. CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML).",
    `PHP is an acronym for "PHP: Hypertext Preprocessor" PHP is a widely-used, open source scripting language. PHP scripts are executed on the server.`,
    "JavaScript is the dominant client-side scripting language of the Web, with 95% of websites using it for this purpose. "
]
export default class LessonDetail extends React.Component {
  gotBack = () => {
    this.props.navigation.goBack()
  }
  render() {
    return (
      <View>
        <ImageBackground source={require('../assets/bg-home.jpg')} style={styles.imageBackground}>
            <Button title="Back" style = {styles.buttonStyle} onPress={this.gotBack} />
            <Text style = {styles.textStyle}>
                { description[this.props.navigation.getParam('indexNumber')] }
            </Text>
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
      fontSize: 18,
      backgroundColor: '#DDD',
      padding: 10
  },
  buttonStyle: {
      width: 50
  }
});