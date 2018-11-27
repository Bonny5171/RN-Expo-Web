import React from 'react';
import { View, Platform } from 'react-native';
import { Button } from '../../../components';
import { Font } from '../../../assets/fonts/font_names';
import { SortCode } from '.';

export default ({ acUpdateComponent, sort }) => (
  <View style={styles.vwSPU}>
    <View style={styleTriangle.triangleTop} />
    <View style={styles.sortPopUp}>
      <Button
        txtStyle={styles.txtButton}
        txtMsg="NOME"
        changeColor
        isChosen={sort[0].isChosen}
        chosenColor="black"
        nChosenColor="#999"
        rdAction={acUpdateComponent}
        rdName="sortName"
        rdType="sort"
      />
      <SortCode sort={sort} acUpdateComponent={acUpdateComponent} />
    </View>
  </View>
);

let styles = {
  sortPopUp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    opacity: 0.96,
    height: 60,
    width: 150,
    marginLeft: 722,
    marginTop: 2,
    borderRadius: 10,
  },
  txtButton: {
    fontSize: 12,
    fontFamily: Font.AMedium,
    marginLeft: 15,
  }
};

let styleTriangle = {
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
      marginLeft: 830,
  }
};

if (Platform.OS === 'web') {
  styleTriangle = {
    ...styleTriangle,
    triangleTop: {
      ...styleTriangle.triangleTop,
      marginLeft: 871
    }
  };

  styles = {
    ...styles,
    vwSPU: {
      ...styles.vwSPU,
      marginLeft: 840,
    },
    sortPopUp: {
      ...styles.sortPopUp,
      shadowOffset: { height: 4, width: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      shadowColor: 'grey',
    }
  };
}