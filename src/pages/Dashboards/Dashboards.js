import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import global from '../../assets/styles/global';

class Dashboards extends React.Component {
  render() {

    return (
      <View style={{ flex: 1 }}>
        <Text style={global.titlePagina}>Página de DASHBOARDS em desenvolvimento</Text>
      </View>
    );
  }
}

export default Dashboards;