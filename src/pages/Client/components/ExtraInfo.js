import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { Button, Row } from '../../../components';
import { Font } from '../../../assets/fonts/font_names';
import ClientField from './ClientField';

class ExtraInfo extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.client.name === nextProps.client.name) {
      return false;
    }
    return true;
  }
  render() {
    const { client, acNextInfo, acPreviousInfo } = this.props;
    return (
      <View style={{ flex: 3, backgroundColor: '#EEEEEE60' }}>
        {/* Este primeiro flex será dinâmico para as outros dados de extra info maiores, com mais colunas */}
        <LinearGradient colors={['rgba(0,133,178, 0.12)', 'rgba(0,133,178, 0.06)', 'rgba(0,133,178, 0)']} style={{ height: 50 }} />
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.flexOne}>
            {/* Left Arrow */}
            <Button
              tchbStyle={styles.vwLeftArrow}
              txtStyle={styles.icLeftArrow}
              action={acPreviousInfo}
              txtMsg="v"
            />
          </View>
          <View style={{ flex: 6 }}>
            <View style={{ flex: 1.5, justifyContent: 'center' }}>
              <Text style={styles.title}>INFORMAÇÕES FINANCEIRAS</Text>
            </View>
            <View style={{ flex: 3.5, paddingTop: 10 }}>
              <Row style={{ flex: 1, justifyContent: 'space-around' }}>
                <View style={styles.flexOne}>
                  <ClientField
                    label="LIMITE DE CRÉDITO"
                    msg={client.credit}
                    container={styles.flexOne}
                    vwLabel={{ flex: 0.8 }}
                    vwText={styles.flexOne}
                    styleText={styles.spacingNumbers}
                  />
                </View>
                <View style={styles.flexOne}>
                  <ClientField
                    label="PEDIDOS APROVADOS"
                    msg={client.approved}
                    container={styles.flexOne}
                    vwLabel={{ flex: 0.8 }}
                    vwText={styles.flexOne}
                    styleText={styles.spacingNumbers}
                  />
                </View>
                <View style={styles.flexOne}>
                  <ClientField
                    label="PEDIDOS FATURADOS"
                    msg={client.billed}
                    container={styles.flexOne}
                    vwLabel={{ flex: 0.8 }}
                    vwText={styles.flexOne}
                    styleText={styles.spacingNumbers}
                  />
                </View>
              </Row>
              <Row style={{ flex: 1, justifyContent: 'space-around', paddingTop: 10 }}>
                <View style={styles.flexOne}>
                  <ClientField
                    label="LIMITE DE CRÉDITO"
                    msg={client.credit}
                    container={styles.flexOne}
                    vwLabel={{ flex: 0.8 }}
                    vwText={styles.flexOne}
                    styleText={styles.spacingNumbers}
                  />
                </View>
                <View style={styles.flexOne}>
                  <ClientField
                    label="PEDIDOS APROVADOS"
                    msg={client.approved}
                    container={styles.flexOne}
                    vwLabel={{ flex: 0.8 }}
                    vwText={styles.flexOne}
                    styleText={styles.spacingNumbers}
                  />
                </View>
                <View style={styles.flexOne}>
                  <ClientField
                    label="PEDIDOS FATURADOS"
                    msg={client.billed}
                    container={styles.flexOne}
                    vwLabel={{ flex: 0.8 }}
                    vwText={styles.flexOne}
                    styleText={styles.spacingNumbers}
                  />
                </View>
              </Row>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            {/* Right Arrow */}
            <Button
              tchbStyle={[styles.vwLeftArrow, styles.vwRightArrow]}
              txtStyle={[styles.icLeftArrow, { transform: [], marginRight: 0, marginLeft: 4 }]}
              txtMsg="v"
              action={acNextInfo}
            />
          </View>
        </View>
        <LinearGradient colors={['rgba(0,133,178, 0.0)', 'rgba(0,133,178, 0.06)', 'rgba(0,133,178, 0.12)']} style={{ height: 50 }} />
      </View>
    );
  }
}

export default ExtraInfo;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1
  },
  title: {
    fontFamily: Font.ASemiBold,
    fontSize: 20,
    color: 'black',
    marginLeft: -5
  },
  vwLeftArrow: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 50,
    backgroundColor: '#FFF',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    elevation: 3,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowRadius: 10
  },
  icLeftArrow: {
    fontFamily: Font.C,
    fontSize: 28,
    marginRight: 4,
    color: 'black',
    transform: [{ rotate: '180deg' }]
  },
  vwRightArrow: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30
  },
  spacingNumbers: {
    letterSpacing: 0.7
  },

});