import React from 'react';
import { View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import * as Pages from './pages';
import Routing, { Router } from './utils/routing';
import { Menu, PrivateRoute, } from './components';
import { backgroundVendor, backgroundAdmin } from './assets/imgs';
const { Route, Switch } = Routing;

class Content extends React.Component {
  render() {
    const { context, oauth, jsforce } = this.props;
    const background = context === 'Vendedor' ? backgroundVendor : backgroundAdmin;
    const {
      Setup, Clients, Client, Prices,
      NotFound, AccountLogin,
      Catalog, Orders, ListCatalog,
      Dashboards, Campaigns, Assistant
    } = Pages;

    return (
      <Router>
        <ImageBackground source={background} style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white' }} resizeMode="cover">
          <Menu oauth={oauth} jsforce={jsforce} />
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Switch>
              <PrivateRoute exact {...this.props} path="/" component={Setup} />
              <PrivateRoute exact {...this.props} path="/clients" component={Clients} />
              <PrivateRoute exact {...this.props} path="/client" component={Client} />
              <PrivateRoute exact {...this.props} path="/catalog" component={Catalog} />
              <PrivateRoute exact {...this.props} path="/campaigns" component={Campaigns} />
              <PrivateRoute exact {...this.props} path="/listCatalog" component={ListCatalog} />
              <PrivateRoute exact {...this.props} path="/orders" component={Orders} />
              <PrivateRoute exact {...this.props} path="/accountLogin" component={AccountLogin} />
              <PrivateRoute exact {...this.props} path="/dashboard" component={Dashboards} />
              <PrivateRoute exact {...this.props} path="/assistant" component={Assistant} />
              <PrivateRoute exact {...this.props} path="/price" component={Prices} />
              <Route exact path="/login" component={AccountLogin} />
              <Route component={NotFound} />
            </Switch>
          </View>
        </ImageBackground>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  context: state.global.context
});

export default connect(mapStateToProps)(Content);