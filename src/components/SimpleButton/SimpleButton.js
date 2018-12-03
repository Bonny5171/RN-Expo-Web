import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { func, number, object, array, string, oneOfType } from 'prop-types';
import { Font } from '../../assets/fonts/font_names';

const Button = ({
  action, tchbStyle, txtStyle, msg
}) => (
  <TouchableOpacity
    onPress={() => action !== undefined ? action() : null}
    style={[styles.tchb, tchbStyle]}
  >
    <Text style={[styles.txt, txtStyle]}>{msg}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  tchb: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    width: 120,
    borderRadius: 45,
    backgroundColor: '#0085B2',
  },
  txt: {
    fontSize: 18,
    bottom: 1,
    color: 'white',
    fontFamily: Font.ASemiBold,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

Button.propTypes = {
  action: func,
  // Texto do botão
  msg: string.isRequired,
  txtStyle: oneOfType([object, array, number]),
  tchbStyle: oneOfType([object, array, number]),
};