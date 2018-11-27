import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import global from '../../../../assets/styles/global';
const Item = ({ item, onRowClick }) => (
  <TouchableOpacity
    style={styles.row}
    onPress={() => onRowClick(item)}
  >
    <Text style={[global.text, {
        justifyContent: 'center',
        maxWidth: 85,
        minWidth: 85,
        fontSize: 17
      }
    ]}
    >
      {item.code.substr(0, 8)}
    </Text>
    <Text style={[global.text, styles.txt]}>
      {item.fantasyName}
    </Text>
  </TouchableOpacity>
);

export default Item;

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 0.75,
    borderBottomColor: '#CCC',
    padding: 5,
    flexDirection: 'row',
  },
  txt: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 17
  },
});