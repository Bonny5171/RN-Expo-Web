import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Button, Row } from '../..';
import { Font } from '../../../assets/fonts/font_names';
import { companyIcon } from '../../../assets/imgs';

class VendorMenu extends React.PureComponent {
  render() {
    // As keys sao as mesmas posições do vetor na store
    // Icones do menu de vendedores
    const iconsValues = [
      {
        key: 1,
        name: 'orders',
        txtMsg: '5',
        txtStyle: styles.menuIcon
      },
      {
        key: 2,
        name: 'campaigns',
        txtMsg: 'b',
        txtStyle: styles.menuIcon
      },
      {
        key: 3,
        name: 'client',
        txtMsg: 'H',
        txtStyle: styles.menuIcon
      }
    ];

    const {
      vendor,
      subMenuIcon,
      container,
      navigation,
      acUpdateButtons,
      acSubMenuCatalog,
      acUpdateContext,
      acResetSubMenu,
      acCatalogCover,
      acResetNavigation,
    } = this.props;

    const icons = iconsValues.map((curr) => {
      const func = !vendor[curr.key].isChosen ? navigation.navigate : () => null;
      return (      
        <Button
          turnOffOpacity
          key={curr.key}
          txtMsg={curr.txtMsg}
          tchbStyle={{ marginTop: 25 }}
          txtStyle={styles.menuIcon}
          shadow
          rdAction={acUpdateButtons}
          rdType="vendor"
          rdName={curr.name}
          action={acResetSubMenu}
          actions={[
            { func, params: [curr.name]}
          ]}
          isChosen={vendor[curr.key].isChosen}
          changeColor
          chosenColor="#0085B2"
          nChosenColor="rgba(0,0,0,0.3)"
        />
      );
    });

    const isCatalogActive = vendor[0].isChosen;
    const icCatalog = isCatalogActive ? styles.icCatalogChosen : styles.menuIcon;
    // Para os icones do menu lateral não se ajustarem a altura do scrollview inteiro
    const { height } = Dimensions.get('window');

    return (
      <View style={container}>
        <View style={{ height }}>
          {/* Header */}
          <View style={{ flex: 0.5 }}>
            <Image source={companyIcon} resizeMode="contain" style={{ height: 50, width: 50, marginTop: 20 }} />
          </View>
          {/* Body */}
          {/* Se o icone não estiver acionado, ele é ativado e chama o submenu no caso de press/hold maxHeight: '10%'   maxHeight: '35%' */}
          <View style={{ flex: 3, alignItems: 'center', width: '100%' }}>
            <Row>
              <TouchableOpacity
                activeOpacity={isCatalogActive ? 1 : 0.7}
                style={{ flexDirection: 'row', marginTop: 35 }}
                onLongPress={() => { if (isCatalogActive) { acSubMenuCatalog(); } else { acUpdateButtons('vendor', 'catalog'); acSubMenuCatalog(false); } }}
                onPress={() => {
                  acUpdateButtons('vendor', 'catalog')
                  navigation.navigate('catalog')
                }}
              >
                <Text style={[styles.menuIcon, icCatalog]}>{subMenuIcon}</Text>
              </TouchableOpacity>
              <Text style={[styles.menuIcon, { position: 'absolute', color: isCatalogActive ? '#0085B2' : 'rgba(0, 0, 0, 0.3)', fontSize: 20, marginLeft: 45, marginTop: 45 }]}>K</Text>
            </Row>
            {icons}
          </View>
          {/* Footer */}
          <View style={{ flex: 0.5 }}>
            <Button
              turnOffOpacity
              txtMsg="8"
              tchbStyle={{ marginTop: 37 }}
              txtStyle={styles.menuIcon}
              actions={[
                {
                  func: acResetSubMenu,
                  params: [],
                },
                {
                  func: acCatalogCover,
                  params: [],
                },
                { func: navigation.navigate, params: ['assistant'] },
                { func: acUpdateContext, params: ['Admin'] },
                { func: acResetNavigation, params: ['vendor'] }
              ]}
              // Chama a função que redireciona para página de admin
              changeColor
              chosenColor="#0085B2"
              nChosenColor="rgba(0,0,0,0.3)"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default VendorMenu;

const styles = StyleSheet.create({
  menuIcon: {
    fontFamily: Font.C,
    fontSize: 37,
    color: 'rgba(0, 0, 0, 0.3)'
  },
  icCatalogChosen: {
    color: '#0085B2',
    textShadowOffset: { width: 1, height: 2 },
    textShadowColor: '#0085B2',
    textShadowRadius: 12
  }
});