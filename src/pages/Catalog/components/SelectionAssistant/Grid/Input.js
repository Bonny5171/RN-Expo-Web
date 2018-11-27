import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { first } from '../functions';

class Input extends React.Component {
  shouldComponentUpdate(nextProps) {
    const {
      color,
      product,
      grade,
      grades,
      indexGrade,
      indexColor,
    } = this.props;
    const currentQuantity = product.colors[indexColor].grades[indexGrade].quantity;
    const nextQuantity = nextProps.product.colors[indexColor].grades[indexGrade].quantity;
    if (currentQuantity !== nextQuantity) return true;
    if (color.name !== nextProps.color.name) return true;
    if (product.name !== nextProps.product.name) return true;
    if (grade.name !== nextProps.grade.name) return true;
    if (grades !== nextProps.grades) return true;

    return false;
  }
  render() {
    const {
      color,
      product,
      grades,
      grade,
      indexGrade,
      indexColor,
      acTextGrade,
      acCurrentGrade,
      acCurrentColor,
    } = this.props;

    return (
      <View key={grade.name} style={[styles.vwIT, { marginTop: first(grades) === grade ? 0 : 5 }]}>
        <TextInput
          underlineColorAndroid="transparent"
          maxLength={3}
          value={product.colors[indexColor].grades[indexGrade].quantity}
          onChangeText={(text) => acTextGrade(color.name, indexGrade, indexColor, text)}
          onFocus={() => { acCurrentGrade(indexGrade); acCurrentColor(indexColor); }}
        />
      </View>
    );
  }
}

export default Input;

const styles = StyleSheet.create({
  vwIT: {
    justifyContent: 'center',
    height: 45,
    width: 70,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#999',
    paddingLeft: Platform.OS === 'web' ? 22 : 13
  },
});