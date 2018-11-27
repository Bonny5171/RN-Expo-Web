import React from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import global from '../../../assets/styles/global';
import { Button } from '../../../components';
import { Font } from '../../../assets/fonts/font_names';

class Row extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.name === nextProps.name) {
      return false;
    }
    return true;
  }

  render() {
    const {
      name,
      price,
      code,
      group,
      category,
      line,
      acRemoveCartProduct
    } = this.props;

    let vwDelete = { alignSelf: 'flex-end', paddingBottom: 8 };
    if (Platform.OS === 'web') {
      vwDelete = { alignSelf: 'center' };
    }

    return (
      <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5 }}>
        {/* Thumb  */}
        <View style={row.vwThumb}>
          <Image source={require('../../../assets/imgs/tenis.png')}style={{ height: 50, width: 80 }} resizeMode="contain" />
        </View>
        {/* Nome  */}
        <View style={[row.vwColumn, { flex: 2, maxWidth: 225 }]}>
          <View style={row.vwValue}>
            <Text style={global.columnName}>{name}</Text>
          </View>
        </View>
        {/* Preço Lista */}
        <View style={[row.vwColumn, { maxWidth: 100, alignItems: 'center' }]}>
          <View style={row.vwValue}>
            <Text style={global.columnValue}>R$ {price}</Text>
          </View>
        </View>
        {/* Código */}
        <View style={[row.vwColumn, { maxWidth: 75, alignItems: 'center' }]}>
          <View style={row.vwValue}>
            <Text style={global.columnValue}>{code}</Text>
          </View>
        </View>
        {/* Grupo */}
        <View style={[row.vwColumn, { maxWidth: 75, alignItems: 'center' }]}>
          <View style={row.vwValue}>
            <Text style={global.columnValue}>{group}</Text>
          </View>
        </View>
        {/* Categoria */}
        <View style={[row.vwColumn, { maxWidth: 100  }]}>
          <View style={row.vwValue}>
            <Text style={global.columnValue}>{category}</Text>
          </View>
        </View>
        {/* Linha */}
        <View style={[row.vwColumn, { maxWidth: 140 }]}>
          <View style={row.vwValue}>
            <Text style={global.columnValue}>{line}</Text>
          </View>
        </View>
        {/* Delete */}
        <Button
          tchbStyle={vwDelete}
          txtMsg="w"
          txtStyle={row.icDelete}
          actions={[{ func: acRemoveCartProduct, params: [name] }]}
        />
      </View>
    );
  }
}

export default Row;

const row = StyleSheet.create(
  {
    vwThumb: {
      flex: 0.7,
      maxWidth: 100,
      alignItems: 'center',
      padding: 5
    },
    vwColumn: {
      flex: 1,
      paddingBottom: 5,
      paddingTop: 5,
    },
    vwValue: {
      flex: 0.7,
      justifyContent: 'flex-end'
    },
    icDelete: {
      fontFamily: Font.C,
      fontSize: 27,
      color: 'rgba(0, 0, 0, 0.3)',
    }
}
);