import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Font } from '../../assets/fonts/font_names';
import { IconActionless as IA } from '../../components';


const DropDown = ({
  vwDropDown,
  acOpenCloseDropDown,
  params,
  txtInput,
  current
}) => (
  <View style={[styles.vwDD, vwDropDown]}>
    <TouchableOpacity
      style={{ flex: 1, flexDirection: 'row' }}
      onPress={() => acOpenCloseDropDown(...params)}
    >
      <View style={{ flex: 3, justifyContent: 'center' }}>
        <Text style={[styles.txtInput, txtInput]}>{current.name}</Text>
      </View>
      <View style={{ flex: 0.7, justifyContent: 'center', paddingRight: 5 }}>
        <IA
          msg="J"
          style={styles.icDropDown}
        />
      </View>
    </TouchableOpacity>
  </View>
);

export default DropDown;

const styles = StyleSheet.create({
  vwDD: {
    justifyContent: 'center',
    height: 65,
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 25,
    marginTop: 4,
    borderColor: 'rgba(0, 0, 0, 0.3)'
  },
  vwInput: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtInput: {
    marginLeft: 15,
    fontFamily: Font.ABold,
    color: '#004C66',
  },
  icDropDown: {
    fontSize: 22,
    alignSelf: 'flex-end',
    color: '#0085B2',
    transform: [{ rotate: '270deg' }],
  }
});