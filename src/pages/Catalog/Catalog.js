import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Platform, Dimensions, Animated } from 'react-native';
import { LinearGradient } from 'expo';
import { acUpdateButtons as acUpdateHeader, } from '../../actions/pages/catalog';
import * as reducersCatalog from '../../actions/pages/catalog';
import * as reducersMenu from '../../actions/pages/menu';
import * as reducersGlobal from '../../actions/global';
import { SubMenu, Row, Button, Fade, IconActionless as IA } from '../../components';
import { List, Cover, SummaryCart, DropDownView, SelectionAssistant, SummaryEmail } from './components';
import global from '../../assets/styles/global';
import { Font } from '../../assets/fonts/font_names';

const position = Platform.OS === 'web' ? 'fixed' : 'absolute';
const width = Platform.OS === 'web' ? '98%' : '100%';
const { height } = Dimensions.get('window');
let HEADER_HEIGHT = 85;

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      backgroundColor: 'rgba(255, 255, 255, 0)'
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const currentValues = Object.values(this.props);
    const nextValues = Object.values(nextProps);
    if (currentValues === nextValues) {
      return true;
    }
    if (this.state.backgroundColor === nextState.backgroundColor && this.props === nextProps) {
      return false;
    }
    return true;
  }

  render() {
    const header = this._renderHead();
    const body = this._renderBody();
    const {
      subMenuCatalog,
      catalogMenuItems,
      catalogCover,
      vendor,
      assistantSelection,
    } = this.props;

    const isCatalogActive = vendor[0].isChosen;
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        {body}
        {header}
        <SubMenu
          visible={subMenuCatalog}
          button={isCatalogActive}
          items={catalogMenuItems}
          params={['vendor', 'catalog']}
          {...this.props}
        />
        <SelectionAssistant
          product={assistantSelection.product}
          visible={assistantSelection.isOpen}
          {...this.props}
        />
        <Cover show={catalogCover} {...this.props} />
      </View>
    );
  }

  _renderHead() {
    const { client } = this.props;
    const menu = this._renderMenu();
    return (
      <View
        style={[styles.vwHeader, { position, width }]}
        onLayout={(e) => {
          HEADER_HEIGHT = e.nativeEvent.layout.height;
        }}
      >
        <Animated.View style={{ flexDirection: 'row', width, backgroundColor: this.state.backgroundColor }}>
          <Row style={{ flex: 2, paddingBottom: 10 }}>
            <Text style={global.titlePagina}>CATÁLOGO </Text>
            <View style={{ flex: 1, paddingLeft: 10, justifyContent: 'flex-end' }}>
              <Text style={[global.titleNomeCliente, { marginTop: 0 }]}>
                {client.fantasyName !== undefined ? client.fantasyName : ''}
                <Text style={global.codigoCliente}>
                  {' ('}{client.code !== undefined ? client.code.substr(0, 5) : ''}{')'}
                </Text>
              </Text>
              <Text style={global.setorCliente}>
                Atacado e Varejo
              </Text>
            </View>
          </Row>
          <View style={{ flex: 1.5 }}>
            {menu}
          </View>
        </Animated.View>
      </View>
    );
  }

  _renderBody() {
    const { dropdown, carts, buttons, } = this.props;
    const shadow = this.state.backgroundColor === 'rgba(255, 255, 255, 1)';

    return (
      <View style={{ height }}>
        {/* Lista */}
        <List
          height={height}
          loadMore={() => { console.log('LOAD MORE...'); }}
          onScroll={(event) => {
            if (this.state.scrollY > 25) {
              this.setState({ scrollY: event.nativeEvent.contentOffset.y, backgroundColor: 'rgba(255, 255, 255, 1)' });
            } else {
              this.setState({ scrollY: event.nativeEvent.contentOffset.y, backgroundColor: 'rgba(255, 255, 255, 0)' });
            }
            this.setState({ scrollY: event.nativeEvent.contentOffset.y });
          }}
          {...this.props}
        />
        {/* Gradiente e animação */}
        <Fade visible={shadow} duration={150} style={{ position: 'absolute', width: '100%', marginTop: HEADER_HEIGHT }}>
          <LinearGradient
            style={{ height: 10, width: '100%' }}
            colors={['rgba(0, 0, 0, 0.15)', 'rgba(0, 0, 0, 0.10)', 'rgba(0, 0, 0, 0)']}
          />
        </Fade>

        {/* PopUp de resumo do carrinho */}
        <SummaryCart
          visible={buttons[2].isChosen}
          headerHeight={HEADER_HEIGHT}
          headerColumns={['PRODUTO', 'PREÇO LISTA', 'CÓDIGO', 'GRUPO', 'CATEGORIA', 'LINHA']}
          {...this.props}
        />

        {/* PopUp de email */}
        <SummaryEmail
          visible={buttons[1].isChosen}
          carts={carts}
          headerHeight={HEADER_HEIGHT}
          headerColumns={['PRODUTO', 'CÓDIGO', 'IMAGEM', 'CARTELA DE CORES', 'GRADES', 'COMPOSIÇÃO']}
          {...this.props}
        />

        {/* Select options */}
        <Fade
          visible={dropdown.isVisible}
          style={{
            position: 'absolute',
            elevation: 3,
            marginLeft: 294,
            marginTop: 129,
          }}
        >
          <DropDownView
            vwStyle={{ width: 220 }}
            isVisible
            options={carts}
            {...this.props}
          />
        </Fade>
      </View>
    );
  }

  _renderMenu() {
    const menuButtons = this._renderButtons();

    return (
      <Row style={styles.vwSubMenu}>
        <Text style={{ fontFamily: Font.BThin, color: 'rgba(0, 0, 0, 0.6)', fontSize: 25 }}>AGO/18 </Text>
        {menuButtons}
      </Row>
    );
  }

  _renderButtons() {
    const { buttons, acUpdateHeader } = this.props;

    const buttonsToMap = [
      { txtMsg: 'R', params: 'price', tchbStyle: {}, },
      { txtMsg: 'W', params: 'mail', tchbStyle: { marginLeft: 10 }, popup: true },
      { txtMsg: 'p', params: 'cart', tchbStyle: {}, popup: true },
      { txtMsg: 'l', params: 'filter', tchbStyle: {}, popup: true, },
      { txtMsg: 'I', params: 'submenu', tchbStyle: {}, },
    ];

    const menuButtons = buttonsToMap.map((curr, index) => {
      return (
        <View key={curr.params}>
          <Button
            turnOffOpacity
            txtMsg={curr.txtMsg}
            isChosen={buttons[index].isChosen}
            shadow
            changeColor
            chosenColor="#0085B2"
            nChosenColor="rgba(0, 0, 0, 0.3)"
            action={acUpdateHeader}
            params={[curr.params]}
            txtStyle={styles.icMenu}
          />
          {
            buttons[index].isChosen && curr.popup
              ? <IA msg="J" style={styles.icArrow} />
              : null
          }
        </View>
      );
    });

    return menuButtons;
  }
}

const mapStateToProps = state => (
  {
              context: state.global.context,
         catalogCover: state.global.catalogCover,
       subMenuCatalog: state.menu.subMenuCatalog,
     catalogMenuItems: state.menu.catalogMenuItems,
               vendor: state.menu.vendor,
              buttons: state.catalog.buttons,
             dropdown: state.catalog.dropdown,
                carts: state.catalog.carts,
         selectedCart: state.catalog.selectedCart,
                 data: state.catalog.data,
      assistantPopUps: state.catalog.assistantPopUps,
               colors: state.catalog.colors,
         currentColor: state.catalog.currentColor,
               grades: state.catalog.grades,
        visibleGrades: state.catalog.visibleGrades,
   assistantSelection: state.catalog.assistantSelection,
  colorsGradesUpdated: state.catalog.colorsGradesUpdated,
         currentGrade: state.catalog.currentGrade,
           selectList: state.catalog.selectList,
               stores: state.catalog.stores,
    cloneColorsStores: state.catalog.cloneColorsStores,
       currentProduct: state.catalog.currentProduct,
          colorsPopUp: state.catalog.colorsPopUp,
          sumaryEmail: state.catalog.sumaryEmail,
           buttonPlus: state.catalog.buttonPlus,
      ponteiroProduto: state.catalog.ponteiroProduto,
 produtosSelecionados: state.catalog.produtosSelecionados,
            selectOpt: state.catalog.selectOpt,
            resumoCar: state.catalog.resumoCar,
               client: state.client.client,
  }
);

export default connect(mapStateToProps,
  {
    ...reducersMenu,
    ...reducersGlobal,
    ...reducersCatalog,
    acUpdateHeader,
  }
)(Catalog);

const styles = StyleSheet.create(
  {
    vwHeader: {
      flexDirection: 'row',
      opacity: 0.96,
      shadowOffset: { height: 2 },
      shadowColor: 'rgba(0, 0, 0, 0.97)',
      shadowRadius: 15,
    },
    title: {
      fontFamily: Font.AThin,
      marginLeft: 35,
      fontSize: 42,
      color: 'rgba(102, 102, 102, 0.5)',
    },
    client: {
      fontFamily: Font.BMedium,
      fontSize: 18,
      color: '#6C7073',
      marginTop: 2
    },
    clientType: {
      fontFamily: Font.Bmedium,
      fontSize: 16,
      color: '#A4A5A7'
    },
    icMenu: {
      fontFamily: Font.C,
      fontSize: 34,
      color: 'rgba(102, 102, 102, 0.4)',
    },
    icArrow: {
      position: 'absolute',
      fontSize: 22,
      color: '#0085B2',
      transform: [{ rotate: '90deg' }],
      marginTop: 35,
      marginLeft: 7
    },
    vwSubMenu: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingLeft: Platform.OS === 'web' ? 350 : 15,
      paddingRight: 5,
      paddingTop: 15
    },
  }
);