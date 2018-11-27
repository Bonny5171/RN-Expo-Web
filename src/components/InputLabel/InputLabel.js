import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { func, object, number, array, string, oneOfType } from 'prop-types';
import { Font } from '../../assets/fonts/font_names';
import global from '../../assets/styles/global';

class InputLabel extends React.Component {
  render() {
    const {
      container,
      value,
      label,
      inputStyle,
      onChangeText,
    } = this.props;
    return (
      <View style={container}>
        <Text style={styles.txtLabel}>{label}</Text>
        <View style={[global.vwIT, inputStyle]}>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.txtInput}
            onChangeText={onChangeText}
            value={value}
          />
        </View>
      </View>
    );
  }
}

export default InputLabel;

const styles = StyleSheet.create({
  vwIT: {
    height: 65,
    width: 120,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 6,
    padding: 4,
    borderColor: '#999',
    backgroundColor: 'rgb(244, 244, 244)'
  },
  txtInput: {
    fontSize: 18,
    marginLeft: 6,
    fontFamily: Font.ALight
  },
  txtLabel: {
    fontFamily: Font.AMedium,
    color: 'black',
    fontSize: 12,
    opacity: 0.9
  },
});

InputLabel.propTypes = {
  container: oneOfType([number, object, array]),
  inputStyle: oneOfType([number, object, array]),
  // Valor do input (Controlado por um state do componente pai, ou na store)
  value: string.isRequired,
  // Function a cada mudança de texto no input
  onChangeText: func.isRequired,
};