import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, object } from 'prop-types';
import { Font } from '../../../assets/fonts/font_names';

class ClientBox extends React.Component {
  render() {
    return (
      <View style={styles.vwClientBox}>
        <View style={styles.clientBox}>
          <View style={{ flex: 3, justifyContent: 'flex-end' }} >
            <View style={styles.clientImg} />
          </View>
          <View style={{ flex: 1, width: 400, justifyContent: 'center' }} >
            <Text style={styles.clientName}>{this.props.name.toUpperCase()}</Text>
          </View>
        </View>
      </View>
    );
  }
}

ClientBox.propTypes = {
  // Nome do cliente
  name: string,
  // Imagem do cliente
  img: object
};

export default ClientBox;

const styles = StyleSheet.create({
  vwClientBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  clientBox: {
    backgroundColor: '#F7F7F7',
    height: 350,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { height: 2, width: 2 },
    shadowColor: 'black',
    shadowRadius: 15,
    shadowOpacity: 0.7,
    elevation: 3
  },
  clientImg: {
    height: 240,
    width: 400,
    backgroundColor: 'grey'
  },
  clientName: {
    fontFamily: Font.AThin,
    fontSize: 30,
    color: 'black'
  }
});