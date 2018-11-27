import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SubMenu } from '../../components';
import { acToggleExpanded } from '../../actions/pages/catalog';
import { acUpdateButtons, acSubMenuCatalog, acSubMenuIcon, acNavigate } from '../../actions/pages/menu';

class ListCatalog extends React.Component {
  render() {
    const {
      subMenuCatalog, isCatalogActive, catalogMenuItems,
      acUpdateButtons, acNavigate, acSubMenuIcon, acSubMenuCatalog,
      acToggleExpanded
    } = this.props;


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