import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { array, object, func, string, bool, oneOfType } from 'prop-types';
import global from '../../assets/styles/global';

const CheckBox = ({
  action,
  param,
  isChosen,
  style
}) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={() => action(param)}
    >
      {
      isChosen ?
        <Text style={[global.iconChecked, { paddingTop: 5, paddingBottom: 5 }]}>h</Text>
      :
        <Text style={[global.iconUnChecked, { paddingTop: 5, paddingBottom: 5 }]}>i</Text>
    }
    </TouchableOpacity>
  );
};

export default CheckBox;

CheckBox.propTypes = {
  isChosen: bool,
  style: oneOfType([array, object]),
  action: func.isRequired,
  param: oneOfType([array, object, string]),
};