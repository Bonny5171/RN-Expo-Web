import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { backgroundVendor, backgroundAdmin } from '../../assets/imgs';
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
    const background = this.props.context === 'Vendedor' ? backgroundVendor : backgroundAdmin;

    return (
      <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
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
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => (
  {
    catalogMenuItems: state.menu.catalogMenuItems,
    subMenuCatalog: state.menu.subMenuCatalog,
    context: state.global.context
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