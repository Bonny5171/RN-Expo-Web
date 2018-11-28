import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { backgroundVendor, backgroundAdmin } from '../../assets/imgs';
import * as reducersCliente from '../../actions/pages/client';
import * as reducersMenu from '../../actions/pages/menu';

import { Title } from '../../components';
import { Font } from '../../assets/fonts/font_names';
import { SubHeader, ClientDetails, ExtraInfo, LastOrders, Attribute } from './components';
import Button from '../../components/Button';

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.backgroundHeight = 0;
  }

  render() {
    const {
      cartButton,
      extraInfo,
      acCartButton,
      client,
      acNavigate,
    } = this.props;

    const extraInfoScreens = [
      <ExtraInfo
        title="INFORMAÇÕES FINANCEIRAS"
        labels={['LIMITE DE CRÉDITO', 'PEDIDOS APROVADOS', 'PEDIDOS FATURADOS', 'LIMITE DE CRÉDITO', 'PEDIDOS APROVADOS', 'PEDIDOS FATURADOS']}
        infos={['R$ 5.000.000,00', 'R$ 1.000.000,00', 'R$48880,00', 'R$ 51355,00', 'R$ 4.000.000,00', 'R$ 5123,00',]}
        {...this.props}
      />,
      <ExtraInfo
        // Endereços
        title="ENDEREÇOS"
        labels={['RUA', '', '', '', '', '']}
        infos={['ALEXANDRE DUMAS, 2048', '', '', '', '', '',]}
        {...this.props}
      />,
      <ExtraInfo
        // Descontosrr
        title="DESCONTOS"
        labels={['1º DESCONTO', '2º DESCONTO', '3º DESCONTO', '4º DESCONTO', '', '']}
        infos={['20%', '10%', '50%', '75%', '', '',]}
        {...this.props}
      />,
    ];


    let current = {};
    for (let i = 0; i < extraInfo.length; i += 1) {
      if (extraInfo[i].isChosen) {
        current = extraInfoScreens[i];
      }
    }
    const background = this.props.context === 'Vendedor' ? backgroundVendor : backgroundAdmin;
    return (
      <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
        <ScrollView contentContainerStyle={{ height: 1700 }}>
          <View style={styles.header}>
            <View style={{ flex: 1, alignSelf: 'flex-start', flexDirection: 'row' }}>
              {
                this.props.context === 'Admin'
                  ? <Button txtStyle={styles.backArrow} action={() => acNavigate('clients')} txtMsg="v" />
                  : null
              }
              <Title msg="CLIENTE" style={{ marginLeft: this.props.context === 'Admin' ? 10 : 35 }} />
            </View>
            <View style={{ flex: 1, alignSelf: 'flex-end', alignItems: 'flex-end' }}>
              <Button
                txtStyle={styles.icCart}
                txtMsg="p"
                isChosen={cartButton}
                shadow
                changeColor
                chosenColor="#0085B2"
                nChosenColor="#999"
                rdAction={acCartButton}
                rdType="cart"
              />
            </View>
          </View>
          <SubHeader reason={client.reason} {...this.props} />
          <ClientDetails {...this.props} />
          { /* Iformações extras atual */ }
          {current}
          <LastOrders />
          {/* Atributos */}
          <View style={{ flex: 2, paddingTop: 20 }}>
            <Text style={styles.attributesTitle}>ATRIBUTOS</Text>
            <View style={styles.vwAttributes}>
              <Attribute type="PONTUALIDADE" grade="REGULAR" />
              <Attribute type="FREQUÊNCIA" grade="BOM" />
              <Attribute type="CONFIRMAÇÃO" grade="REGULAR" />
              <Attribute type="ENCARTES" grade="BOM" />
            </View>
          </View>
          {/* Histório de Faturamento */}
          <View style={{ flex: 2 }} />
          {/* Histório de Descontos */}
          <View style={{ flex: 2 }} />
        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  cartButton: state.client.cartButton,
   extraInfo: state.client.extraInfo,
    previous: state.clients.previous,
      client: state.clients.client,
        next: state.clients.next,
     context: state.global.context
});


export default connect(mapStateToProps,
  {
    ...reducersMenu,
    ...reducersCliente
  }
)(Client);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backArrow: {
    fontFamily: Font.C,
    fontSize: 30,
    marginTop: 34,
    marginLeft: 25,
    transform: [{ rotate: '180deg' }],
    color: 'rgba(102, 102, 102, 0.5)'
  },
  header: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: Font.AMedium
  },
  vwAttributes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  attributesTitle: {
    fontFamily: Font.BLight,
    fontSize: 22,
    color: 'black',
    paddingLeft: 32
  },
  icCart: {
    fontSize: 35,
    fontFamily: Font.C,
    color: '#999',
    marginRight: 40,
    marginTop: 125
  },
});