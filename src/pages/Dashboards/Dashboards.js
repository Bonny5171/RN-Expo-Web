import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Routing from '../../utils/routing';
import global from '../../assets/styles/global';
const { Redirect } = Routing;

class Dashboards extends React.Component {
  render() {
    const { redirects, toPage } = this.props;
    const shouldRedirect = redirects[6].redirect;

    if (shouldRedirect) {
      return (
        <Redirect
          to={toPage}
        />
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Text style={global.titlePagina}>Página de DASHBOARDS em desenvolvimento</Text>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    redirects: state.menu.redirects,
    toPage: state.menu.toPage,
  }
);

export default connect(mapStateToProps)(Dashboards);