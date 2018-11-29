import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Font } from '../../assets/fonts/font_names';

const Title = props => (
  <Text style={[styles.title, props.style]}>{props.msg}</Text>
);

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: Font.AThin,
    marginLeft: 35,
    marginTop: 15,
    fontSize: 42,
    color: 'rgba(102, 102, 102, 0.5)',
  },
});