import React from 'react';
import { View, StyleSheet } from 'react-native';

const Row = props => {
  return (
    <View style={[styles.row, props.style]}>
      {props.children}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  }
});