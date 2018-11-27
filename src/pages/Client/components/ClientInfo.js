import React from 'react';
import { View, StyleSheet } from 'react-native';

import ClientField from './ClientField';
import { Button, Row } from '../../../components';
import { Font } from '../../../assets/fonts/font_names';

class ClientInfo extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.client.name === nextProps.client.name) {
      return false;
    }
    return true;
  }

  render() {
    const { client } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Row style={{ flex: 2 }}>
          {/* 1st Column */}
          <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
            <ClientField
              label="RAZÃO SOCIAL"
              msg={client.reason}
              container={[styles.vwClientField, { marginLeft: -30 }]}
              vwLabel={styles.vwLabelClient}
              vwText={{ marginLeft: 83 }}
            />
            <ClientField
              label="TELEFONE 1"
              msg={client.phone}
              container={[styles.vwClientField, { marginLeft: -30 }]}
              vwLabel={styles.vwLabelClient}
              vwText={{ marginLeft: -25 }}
            />
            <ClientField
              label="CNPJ"
              msg={client.cnpj}
              container={styles.vwClientField}
              vwLabel={[styles.vwLabelClient, { width: 160 }]}
              vwText={styles.vwTextShort}
            />
            <ClientField
              label="CONTATO"
              msg={client.contact}
              container={styles.vwClientField}
              vwLabel={[styles.vwLabelClient, { width: 160 }]}
              vwText={styles.vwTextShort}
            />
          </View>
          {/* 2nd Column */}
          <View style={{ flex: 1, paddingTop: 10 }}>
            <ClientField
              label="NOME FANTASIA"
              msg={client.fantasyName}
              container={[styles.vwClientField, { marginLeft: -30, marginTop: -12 }]}
              vwLabel={styles.vwLabelClient}
              vwText={{ justifyContent: 'flex-start', marginLeft: -16 }}
            />
            <ClientField
              label="TELEFONE 2"
              msg={client.phone2}
              container={[styles.vwClientField, { marginLeft: -30 }]}
              vwLabel={styles.vwLabelClient}
              vwText={{ marginLeft: -25, marginTop: -10 }}
            />
            <ClientField
              label="CÓDIGO"
              msg={client.code}
              container={styles.vwClientField}
              vwLabel={[styles.vwLabelClient, { width: 160 }]}
              vwText={styles.vwTextShort}
            />
            <ClientField
              label="SITUAÇÃO"
              msg={client.situation}
              container={styles.vwClientField}
              vwLabel={[styles.vwLabelClient, { width: 160 }]}
              vwText={[styles.vwTextShort, { marginTop: -20 }]}
            />
          </View>
        </Row>
        <Button
          txtMsg="INICIAR/CONTINUAR COMPRA"
          tchbStyle={styles.button}
          txtStyle={styles.txtButton}
        />
      </View>
    );
  }
}

export default ClientInfo;

const styles = StyleSheet.create({
  vwClientField: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  vwLabelClient: {
    flex: 1,
    width: 130,
    justifyContent: 'center'
  },
  vwTextShort: {
    justifyContent: 'flex-start',
    width: 160
  },
  button: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#0085B2',
    height: 42,
    width: 260,
    borderRadius: 45,
    marginTop: 15,
    marginRight: 15,
  },
  txtButton: {
    fontSize: 15,
    color: 'white',
    fontFamily: Font.ABold,
    textAlign: 'center',
  },
});