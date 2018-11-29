import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Font } from '../../../assets/fonts/font_names';
import { ClientBox, ClientInfo } from '.';
import { Row, Button } from '../../../components';


class ClientDetails extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { client, extraInfo } = this.props;
    if (client.name !== nextProps.client.name) {
      return true;
    }

    for (let i = 0; i < extraInfo.length; i += 1) {
      if (extraInfo[i].isChosen !== nextProps.extraInfo[i].isChosen) {
        return true;
      }
    }

    if (this.props.client.fantasyName !== nextProps.client.fantasyName) {
      return true;
    }

    return false;
  }
  render() {
    const {
      client, extraInfo,
      acUpdateComponent
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ flex: 3 }}>
          <Row>
            <View style={{ position: 'absolute', height: 335, width: '100%', backgroundColor: 'rgba(244,244,244, 0.5)', marginTop: -10 }} />
            <ClientBox name={client.fantasyName} />
            <ClientInfo
              client={client}
            />
          </Row>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Row style={{ marginBottom: 10 }}>
            <Text style={styles.moreInfo}>SAIBA MAIS...</Text>
            <Button
              txtStyle={[styles.infoIcons, { marginLeft: 15 }]}
              txtMsg="A"
              isChosen={extraInfo[0].isChosen}
              shadow
              changeColor
              chosenColor="#0085B2"
              nChosenColor="#999"
              rdAction={acUpdateComponent}
              rdName="financeiras"
              rdType="extrainfo"
            />
            <Button
              txtStyle={styles.infoIcons}
              txtMsg="B"
              isChosen={extraInfo[1].isChosen}
              shadow
              changeColor
              chosenColor="#0085B2"
              nChosenColor="#999"
              rdAction={acUpdateComponent}
              rdName="localizacao"
              rdType="extrainfo"
            />
            <Button
              txtStyle={styles.infoIcons}
              txtMsg="C"
              isChosen={extraInfo[2].isChosen}
              shadow
              changeColor
              chosenColor="#0085B2"
              nChosenColor="#999"
              rdAction={acUpdateComponent}
              rdName="descontos"
              rdType="extrainfo"
            />
          </Row>
        </View>
      </View>
    );
  }
}

export default ClientDetails;

const styles = StyleSheet.create({
  container: {
    flex: 4.5
  },
  text: {
    fontSize: 15,
    fontFamily: Font.AMedium
  },
  txtSubTitle: {
    flex: 3.9,
    fontFamily: Font.ALight,
    marginLeft: 30,
  },
  icCart: {
    fontSize: 35,
    color: '#999',
    marginRight: 40,
    marginTop: 20
  },
  vwNextClient: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 35,
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
    borderRadius: 20
  },
  txtNextClient: {
    fontSize: 20,
  },
  tchbNextClient: {
    flexDirection: 'row',
    width: 160,
    alignItems: 'center',
    paddingLeft: 13
  },
  moreInfo: {
    fontFamily: Font.BLight,
    fontSize: 24,
    color: 'black',
    marginLeft: 30
  },
  infoIcons: {
    fontFamily: Font.C,
    fontSize: 32,
    color: '#999',
    marginLeft: 5
  }
});