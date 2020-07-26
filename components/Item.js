import React from 'react';
import {Text, StyleSheet, TouchableOpacity } from 'react-native';

const Item = ({index, item, nav}) => {
    
    const handleClick = event => goDetail(nav, index);

    return (
        <TouchableOpacity onPress = {() => handleClick(nav, index)} >
            <Text key={ index } style = { styles.listStyle }
            >
                 { index + 1} - {item} Lesson
            </Text>
        </TouchableOpacity>
    );
};
const goDetail = (nav, index) => {
    nav.navigate('LessonDetail', {
        indexNumber: index
    })
}
export default Item;

const styles = StyleSheet.create({
    listStyle: {
        margin: 2,
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#DDD'
    }
});