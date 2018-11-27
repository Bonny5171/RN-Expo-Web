import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Font } from '../../../../assets/fonts/font_names';
import global from '../../../../assets/styles/global';

class Left extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.product.name !== nextProps.product.name) return true;
    return false;
  }
  render() {
    const { product } = this.props;
    return (
      <View style={[global.container, { maxWidth: 282 }]}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ height: 150, width: 180 }}
            source={require('../../../../assets/imgs/tenis.png')}
            resizeMode="center"
          />
        </View>
        <View style={{ flex: 3, paddingLeft: 30 }}>
          <Text style={styles.name}>{product.name}</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={global.container}>
              <Text style={styles.columnHeader}>CÓDIGO</Text>
              <Text style={styles.columnValue}>{product.code}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={styles.columnHeader}>GRUPO</Text>
              <Text style={styles.columnValue}>1</Text>
            </View>
            <View style={{ flex: 2 }} />
          </View>
          <View style={{ flex: 1, flexDirection: 'row', paddingRight: 35 }}>
            <View style={styles.info}>
              <Text style={styles.columnHeader}>LINHA</Text>
              <Text style={styles.columnValue}>FEMININA</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.columnHeader}>CATEGORIA</Text>
              <Text style={styles.columnValue}>CHINELO</Text>
            </View>
          </View>
          <View style={global.container}>
            <View style={styles.info}>
              <Text style={styles.columnHeader}>PREÇO LISTA</Text>
              <Text style={styles.columnValue}>R$ 24,90</Text>
            </View>
          </View>
          <View style={{ flex: 5 }}>
              {/* tags */}
          </View>
        </View>
      </View>
    );
  }
}

export default Left;

const styles = StyleSheet.create({
  name: {
    fontFamily: Font.ABold,
    color: 'rgba(0, 0, 0, 0.7)',
    padding: 5,
    paddingRight: 10
  },
  info: {
    flex: 1,
    justifyContent: 'center'
  },
});

styles.columnHeader = [global.columnHeader, { fontSize: 13 }];
styles.columnValue = [global.columnValue, { fontSize: 16 }];