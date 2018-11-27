import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { bool, func, string, array, object, number, oneOfType } from 'prop-types';
import { CheckBox } from '../../../components';
import global from '../../../assets/styles/global';

class CheckOption extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.checkbox !== nextProps.checkbox) {
      return true;
    }
    return false;
  }
  render() {
    const {
      checkbox,
      msg,
      action,
      params,
      container,
      txtStyle
    } = this.props;
    return (
      <TouchableOpacity
        style={[styles.container, container]}
        onPress={() => {
          if (params !== undefined) {
            action(...params);
          } else {
            action();
          }
        }}
      >
        <CheckBox
          isChosen={checkbox}
          action={() => {
            if (params !== undefined) {
              action(...params);
            } else {
              action();
            }
          }}
        />
        <Text
          style={[[global.text, styles.txt], txtStyle]}
        >
          {msg}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default CheckOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  vwTxt: {
    flex: 1,
    justifyContent: 'center'
  },
  txt: {
    fontSize: 17,
    alignSelf: 'center'
  }
});

CheckOption.propTypes = {
  checkbox: bool,
  msg: string,
  action: func.isRequired,
  container: oneOfType([array, object, number]),
  txtStyle: oneOfType([array, object, number]),
};

