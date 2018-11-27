import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Row, DropDown, Button, Fade } from '../../../../components';
import { ListCartSummary } from '..';
import { Font } from '../../../../assets/fonts/font_names';
import global from '../../../../assets/styles/global';
const { height } = Dimensions.get('window');

class SummaryCart extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      return true;
    }
    if (this.props.dropdown !== nextProps.dropdown) {
      return true;
    }
    return false;
  }
  render() {
    const {
      visible,
      headerHeight,
      dropdown,
      acOpenCloseDropDown,
      acClosePopUp,
    } = this.props;

    // Será RETIRADO após apresentação da SPRINT
    if (dropdown.current.products[0] !== undefined && visible && dropdown.current.products[0].stores !== undefined) {
      if (dropdown.current.products[0].stores[0].colors !== undefined && dropdown.current.products[0].stores[1] !== undefined) {
        alert(`
        Produto 1
        Loja 1/ Grade 1: 
          Cor 1 = ${dropdown.current.products[0].stores[0].colors[0].grades[0].quantity}
          Cor 2 = ${dropdown.current.products[0].stores[0].colors[1].grades[0].quantity}
          Cor 3 = ${dropdown.current.products[0].stores[0].colors[2].grades[0].quantity}
        Loja 2/ Grade 1: 
          Cor 1 = ${dropdown.current.products[0].stores[1].colors[0].grades[0].quantity}
          Cor 2 = ${dropdown.current.products[0].stores[1].colors[1].grades[0].quantity}
          Cor 3 = ${dropdown.current.products[0].stores[1].colors[2].grades[0].quantity}
        `);
      }
    }

    // Cálculo para o tamanho da lista(quando for grande) não exceder a altura da tela do navegador
    const maxHeight = height - headerHeight;
    const dropDownWidth = 220;

    return (
      <Fade visible={visible} style={[styles.container, { maxHeight, marginTop: headerHeight, width: '100%' }]}>
        {/* Header */}
        <View style={styles.header}>
          <Row style={{ flex: 2, alignItems: 'center' }}>
            <Text style={global.h2}>RESUMO DO CARRINHO</Text>
            <DropDown
              vwDropDown={{ width: dropDownWidth, height: 30 }}
              current={dropdown.current}
              acOpenCloseDropDown={acOpenCloseDropDown}
              params={[]}
            />
            <Button
              txtMsg="W"
              txtStyle={styles.icMail}
              tchbStyle={{ marginLeft: 35 }}
              action={() => alert('Resumo Enviado p/Email')}
            />
            <Button
              txtMsg="Ir para a página do carrinho"
              txtStyle={styles.goToCartPage}
              tchbStyle={{ marginLeft: 35 }}
              action={() => alert('Ir para a página do carrinho')}
            />
          </Row>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
              tchbStyle={{ alignSelf: 'flex-end', marginTop: 0 }}
              txtStyle={global.iconClose}
              txtMsg="t"
              actions={[
                { func: acClosePopUp, params: [] },
                {
                  // Só fecha o dropdown caso ele esteja visível
                  func: dropdown.isVisible ? acOpenCloseDropDown : () => null,
                  params: []
                }
              ]}
            />
          </View>
        </View>
        {/* Body */}
        <View style={{ flex: 2, paddingRight: 20 }}>
          <ListCartSummary
            {...this.props}
            data={dropdown.current.products}
          />
        </View>
      </Fade>
    );
  }
}

export default SummaryCart;

const styles = StyleSheet.create(
  {
    container: {
      position: 'absolute',
      elevation: 2,
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      shadowColor: 'rgba(0, 0, 0, 0.9)',
      shadowOffset: { height: 1, width: 0.2 },
      shadowRadius: 55,
      shadowOpacity: 0.2,
      borderTopColor: 'rgba(0, 0, 0, 0.1)',
      borderTopWidth: 0.2,
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 15
    },
    icMail: {
      fontFamily: Font.C,
      color: 'rgba(0, 0, 0, 0.3)',
      fontSize: 30
    },
    goToCartPage: {
      fontFamily: Font.ALight,
      fontSize: 18,
      textDecorationLine: 'underline',
      color: '#359EC2',
    }
  }
);