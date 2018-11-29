import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { backgroundVendor, backgroundAdmin } from '../../assets/imgs';
import { SubMenu } from '../../components';
import { acToggleExpanded } from '../../actions/pages/catalog';
import { acUpdateButtons, acSubMenuCatalog, acSubMenuIcon } from '../../actions/pages/menu';
import global from '../../assets/styles/global';

class ListCatalog extends React.Component {
  render() {
    const {
      subMenuCatalog, isCatalogActive, catalogMenuItems,
      acUpdateButtons, navigation, acSubMenuIcon, acSubMenuCatalog,
      acToggleExpanded
    } = this.props;
    const background = this.props.context === 'Vendedor' ? backgroundVendor : backgroundAdmin;

    return (
      <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
        <Text style={global.titlePagina}>LISTAGEM</Text>
        {
          subMenuCatalog ?
            <SubMenu
              button={isCatalogActive}
              visible
              items={catalogMenuItems}
              updateButton={acUpdateButtons}
              navigation={navigation}
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
    acSubMenuIcon,
    acSubMenuCatalog,
    acToggleExpanded
  }
)(ListCatalog);