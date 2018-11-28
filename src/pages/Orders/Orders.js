import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { backgroundVendor, backgroundAdmin } from '../../assets/imgs';
import global from '../../assets/styles/global';

class Orders extends React.Component {
  render() {
    const background = this.props.context === 'Vendedor' ? backgroundVendor : backgroundAdmin;
    return (
      <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
        <Text style={global.titlePagina}>Página de PEDIDOS em desenvolvimento</Text>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  context: state.global.context
});

export default connect(mapStateToProps, null)(Orders);