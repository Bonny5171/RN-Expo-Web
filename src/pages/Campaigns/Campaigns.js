import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import global from '../../assets/styles/global';

class Campaigns extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={global.titlePagina}>Página de CAMPANHAS em desenvolvimento</Text>
      </View>
    );
  }
}

export default Campaigns;