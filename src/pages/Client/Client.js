import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import * as reducersClientes from '../../actions/pages/clients';
import * as reducersMenu from '../../actions/pages/menu';

import { Title } from '../../components';
import { Font } from '../../assets/fonts/font_names';
import { SubHeader, ClientDetails, ExtraInfo, LastOrders, Attribute } from './components';
import Button from '../../components/Button';
import Routing from '../../utils/routing';
const { Redirect } = Routing;

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
      redirects,
      toPage,
      acNavigate,
    } = this.props;

    if (redirects[3].redirect) {
      return (<Redirect to={toPage} />);
    }

    const extraInfoScreens = [
      <ExtraInfo
        client={{ approved: 'R$ 0,00', credit: 'R$ 1.000.000,00', billed: 'R$ 0,00' }}
        {...this.props}
      />,
      <ExtraInfo
        client={{ approved: 'R$ 0,00', credit: 'R$ 2.000.000,00', billed: 'R$ 0,00' }}
        {...this.props}
      />,
      <ExtraInfo
        client={{ approved: 'R$ 0,00', credit: 'R$ 3.000.000,00', billed: 'R$ 0,00' }}
        {...this.props}
      />,
    ];

    let current = {};
    for (let i = 0; i < extraInfo.length; i += 1) {
      if (extraInfo[i].isChosen) {
        current = extraInfoScreens[i];
      }
    }

    return (
      <View style={{ flex: 1 }}>
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
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cartButton: state.client.cartButton,
   extraInfo: state.client.extraInfo,
    previous: state.clients.previous,
      client: state.clients.client,
        next: state.clients.next,
   redirects: state.menu.redirects,
      toPage: state.menu.toPage,
     context: state.global.context
});


export default connect(mapStateToProps,
  {
    ...reducersClientes,
    ...reducersMenu
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