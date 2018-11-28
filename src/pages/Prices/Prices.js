import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { connect } from 'react-redux';
import { backgroundVendor, backgroundAdmin } from '../../assets/imgs';
import global from '../../assets/styles/global';

class Prices extends React.Component {
  render() {
    const background = this.props.context === 'Vendedor' ? backgroundVendor : backgroundAdmin;
    return (
      <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
        <Text style={global.titlePagina}>Página de PREÇOS em desenvolvimento</Text>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  context: state.global.context
});

export default connect(mapStateToProps, null)(Prices);