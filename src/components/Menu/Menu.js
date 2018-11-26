import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Platform, Dimensions } from 'react-native';
import * as acMenu from '../../actions/pages/menu';
import { acUpdateContext, acCatalogCover } from '../../actions/global';
import { acResetAssistant } from '../../actions/pages/assistant';
import LocalePicker from '../LocalePicker';
import { Button } from '../../components';
import { Font } from '../../assets/fonts/font_names';
import { VendorMenu, AdminMenu } from './common';

export const routes = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/About',
    label: 'About'
  },
  {
    to: '/Contact',
    label: 'Contact'
  }
];

class Menu extends React.Component {
  render() {
    const {
      isLoggedIn,
      context,
      oauth,
      jsforce
    } = this.props;

    const logoutFunction = Platform.OS === 'web' ? jsforce : oauth;
    if (context === 'Setup') {
      return (
        <View style={styles.container}>
          <Button
            txtStyle={styles.icSetup}
            txtMsg="2"
            action={() => logout(logoutFunction)}
          />
        </View>
      );
    } else if (context === 'Admin') {
      return (
        <AdminMenu
          {...this.props}
          container={styles.container}
        />
      );
    } else if (context === 'Vendedor') {
      return (
        <VendorMenu
          {...this.props}
          container={styles.container}
        />
      );
    }

    return isLoggedIn && (
      <View style={styles.container}>
        {
          routes.map(route => (
            <Text>{route.label}</Text>
          ))
        }
        <LocalePicker />
      </View>
    );
  }
}
export const styles = StyleSheet.create({
  container: {
    flex: 0.12,
    maxWidth: Platform.OS === 'web' ? '4.5%' : '9%',
    minWidth: 100,
    elevation: 7,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowOffset: { height: 2, width: 2 },
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowRadius: 15,
  },
  icSetup: {
    fontFamily: Font.C,
    fontSize: 35,
    marginTop: 20,
    color: 'rgba(102, 102, 102, 0.5)',
  }
});

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  context: state.global.context,
  vendor: state.menu.vendor,
  admin: state.menu.admin,
  subMenuCatalog: state.menu.subMenuCatalog,
  subMenuIcon: state.menu.subMenuIcon,
  toPage: state.menu.toPage,
});

export default connect(mapStateToProps,
  {
    ...acMenu,
    acUpdateContext,
    acCatalogCover,
    acResetAssistant
  }
)(Menu);

const logout = (logoutFunction) => {
  if (Platform.OS === 'web') { logoutFunction.browser.logout(); } else { logoutFunction.logout(); }
};

