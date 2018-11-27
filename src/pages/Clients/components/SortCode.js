import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../../../components';
import { Font } from '../../../assets/fonts/font_names';

const SortCode = props => {
  const { acUpdateComponent } = props;
  const topTriangle = props.sort[1].order ? 'black' : '#999';
  const bottomTriangle = props.sort[1].order ? '#999' : 'black';
  return (
    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
      <Button
        txtStyle={[styles.txtButton, props.style != null ? props.style : {}]}
        txtMsg="CÓDIGO"
        changeColor
        isChosen={props.sort[1].isChosen}
        chosenColor="black"
        nChosenColor="#999"
        rdAction={acUpdateComponent}
        rdName="sortCode"
        rdType="sort"
      />
      <View style={[{ marginLeft: 7 }, props.tView != null ? props.tView : {}]}>
        <Triangle triangle={[styles.triangleUp, { borderBottomColor: props.sort[1].isChosen ? topTriangle : '#999' }]} />
        <Triangle triangle={[styles.triangleDown, { borderBottomColor: props.sort[1].isChosen ? bottomTriangle : '#999' }]} />
      </View>
    </View>
  );
};

export default SortCode;

const Triangle = props => {
  return (
    <View style={props.triangle} />
  );
};

const styles = StyleSheet.create({
  txtButton: {
    fontSize: 12,
    fontFamily: Font.AMedium,
    marginLeft: 10,
  },
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
      transform: [
        {
          rotate: '180deg'
        }
      ]
  },
});