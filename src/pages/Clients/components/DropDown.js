import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Font } from '../../../assets/fonts/font_names';
import global from '../../../assets/styles/global';


const DropDown = props => {
  return (
    <View>
      <Text style={[styles.txtLabel, props.labelStyle]}>{props.txtLabel}</Text>
      <View style={[[global.vwIT, { width: props.width, marginLeft: 45 }], props.vwStyle]}>
        <TouchableOpacity
          style={props.tchbStyle}
          onPress={() => props.acUpdateComponent('dropdown', props.name)}
        >
          <View style={styles.vwInput}>
            <Text
              style={styles.txtInput}
            >
              {props.current}
            </Text>
            <Triangle triangle={[styleTriangle.triangleTop, props.icStyle]} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DropDown;


const Triangle = props => {
    return (
      <View style={props.triangle} />
    );
};

const styles = StyleSheet.create({
  txtLabel: {
      fontFamily: Font.ASemiBold,
      color: 'black',
      marginLeft: 45,
      marginTop: 5,
      fontSize: 12,
      opacity: 0.9
  },
  vwDD: {
      justifyContent: 'center',
      height: 65,
      borderWidth: 1,
      borderRadius: 10,
      marginLeft: 40,
      marginTop: 4,
      borderColor: '#999'
  },
  vwInput: {
      alignItems: 'center',
      flexDirection: 'row',
  },
  txtInput: {
      marginLeft: 20,
      fontSize: 18,
      fontFamily: Font.ALight,
      color: '#666'
  },
  triangleSituation: {
      position: 'absolute',
      marginLeft: 225,
      transform: [
          { rotate: '180deg' }
      ]
  },
  triangleSector: {
      position: 'absolute',
      marginLeft: 425,
      transform: [
          { rotate: '180deg' }
      ]
  }
});

const styleTriangle = StyleSheet.create({
  triangleUp: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: 0,
      borderRightWidth: 4.5,
      borderBottomWidth: 7,
      borderLeftWidth: 4.5,
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: '#888',
      borderLeftColor: 'transparent',
  },
  triangleDown: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: 0,
      borderRightWidth: 4.5,
      borderBottomWidth: 7,
      borderLeftWidth: 4.5,
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'black',
      borderLeftColor: 'transparent',
      marginTop: 1.5,
      transform: [{ rotate: '180deg' }]
  },
  triangleTop: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#0085B2',
    borderLeftColor: 'transparent',
    marginLeft: 920,
}
});