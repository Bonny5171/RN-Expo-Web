import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Routing from '../../utils/routing';
import { SubMenu } from '../../components';
import { acToggleExpanded } from '../../actions/pages/catalog';
import { acUpdateButtons, acSubMenuCatalog, acSubMenuIcon, acNavigate } from '../../actions/pages/menu';
const { Redirect } = Routing;

class ListCatalog extends React.Component {
  render() {
    const {
      redirects, toPage, subMenuCatalog, isCatalogActive, catalogMenuItems,
      acUpdateButtons, acNavigate, acSubMenuIcon, acSubMenuCatalog,
      acToggleExpanded
    } = this.props;
    const shouldRedirect = redirects[4].redirect;

    if (shouldRedirect) {
      return (
        <Redirect
          to={toPage}
        />
      );
    }


    return (
      <View style={{ flex: 1 }}>
        <Text>CATÁLOGO EM LISTAGEM</Text>
        {
          subMenuCatalog ?
            <SubMenu
              button={isCatalogActive}
              visible
              items={catalogMenuItems}
              updateButton={acUpdateButtons}
              acNavigate={acNavigate}
              acSubMenuIcon={acSubMenuIcon}
              acSubMenuCatalog={acSubMenuCatalog}
              params={['vendor', 'catalog']}
              acToggleExpanded={acToggleExpanded}
            /> :
            null
        }
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    redirects: state.menu.redirects,
    toPage: state.menu.toPage,
    catalogMenuItems: state.menu.catalogMenuItems,
    subMenuCatalog: state.menu.subMenuCatalog
  }
);

export default connect(mapStateToProps,
  {
    acUpdateButtons,
    acNavigate,
    acSubMenuIcon,
    acSubMenuCatalog,
    acToggleExpanded
  }
)(ListCatalog);