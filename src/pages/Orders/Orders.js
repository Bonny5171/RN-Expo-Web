import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import global from '../../assets/styles/global';

class Orders extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={global.titlePagina}>Página de PEDIDOS em desenvolvimento</Text>
      </View>
    );
  }
}

export default Orders;