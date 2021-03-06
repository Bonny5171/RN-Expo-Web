import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Platform } from 'react-native';
import { Font } from '../../assets/fonts/font_names';
import { Row, Fade } from '..';

const SubMenu = (
  {
    navigation,
    visible,
    items,
    acSubMenuCatalog,
    view,
    acSubMenuIcon,
    acToggleExpanded
  }
) => {
  const itemsWithAction = items.map(item => {
    const expandedActions = [{ func: acSubMenuCatalog, params: [] }, { func: acToggleExpanded, params: [] }];
    if (item.icon === 'X') {
      item.actions = expandedActions;
    } else if (item.icon === '3') {
      let catalogActions = [
        { func: acToggleExpanded, params: [true] },
        { func: acSubMenuCatalog, params: [item.params] }
      ];
      // Quando estiver navegando da página de listagem para a de catálogo devemos passar a função de  navegação
      // Porque quando trocar entre catalogo expandido e normal ele não deve navegar.
      if (navigation.state.routeName === 'listCatalog') catalogActions = [...catalogActions, { func: navigation.navigate, params: [item.params] }];
      item.actions = catalogActions;
    } else {
      item.actions = [{ func: navigation.navigate, params: [item.params] }, { func: acSubMenuCatalog, params: [] }];
    }
    return item;
  });

  return (
    <Fade
      visible={visible}
      style={{ position: 'absolute', height: '100%', width: '100%' }}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={{ flex: 1 }}
        onPress={() => {
          acSubMenuCatalog();
        }}
      >
        <View style={[styles.vwSubMenu, view]} >
          {
            itemsWithAction.map(((curr) => {
              return (
                <SubMenuItem
                  key={curr.key}
                  icon={curr.icon}
                  txt={curr.txt}
                  iconUpdate={acSubMenuIcon}
                  actions={curr.actions}
                />
              );
            }))
          }
        </View>
      </TouchableOpacity>
    </Fade>
  );
};

export default SubMenu;

const SubMenuItem = (
  {
    iconUpdate,
    txt,
    icon,
    actions,
    params
  }
) => (
  <TouchableOpacity
    style={{ flex: 1 }}
    onPress={() => {
      actions.forEach(({ func, params }) => {
        func(...params);
      });
      iconUpdate(icon);
    }}
  >
    <Row style={styles.row}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.txt}>{txt}</Text>
    </Row>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  vwSubMenu: {
    position: 'absolute',
    height: 125,
    width: 240,
    marginTop: Platform.OS === 'web' ? 140 : 130,
    marginLeft: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    paddingTop: 15,
    paddingBottom: 15
  },
  row: {
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    fontFamily: Font.C,
    color: 'black',
    opacity: 0.3,
    fontSize: 23,
    marginLeft: 15
  },
  txt: {
    fontFamily: Font.ALight,
    color: 'black',
    marginLeft: 15
  }
});