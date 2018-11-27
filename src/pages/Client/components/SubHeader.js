import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { IconActionless as IA, Row } from '../../../components';
import { Font } from '../../../assets/fonts/font_names';

class SubHeader extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.reason !== nextProps.reason) {
      return true;
    }
    if (this.props.next !== nextProps.next) {
      return true;
    }
    if (this.props.previous !== nextProps.previous) {
      return true;
    }
    return false;
  }
  render() {
    const {
      reason,
      previous,
      next,
      context,
      acNextClient,
      acPreviousClient
    } = this.props;
    console.log(`RERENDER`);
    const arrow = <IA style={{ fontSize: 10 }} msg="v" />;
    return (
      <View style={styles.container}>
        <Row style={{ alignItems: 'center' }}>
          <Text style={styles.txtSubTitle}>CLIENTES {arrow} DIAMANTE {arrow} {reason}</Text>
          {
            context === 'Admin' ?
              <View style={styles.vwNextClient}>
                <TouchableOpacity
                  style={styles.tchbClient}
                  onPress={() => acPreviousClient()}
                >
                  <IA style={[styles.txtClient, { transform: [{ rotate: '180deg' }], color: '#999', flex: 0.5 }]} msg="v" />
                  <Text style={[styles.text, { color: '#82c2e0', textAlign: 'center', flex: 2 }]}>{previous.fantasyName}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.tchbClient, { flex: 1 }]}
                  onPress={() => acNextClient()}
                >
                  <Text style={[styles.text, { color: '#82c2e0', textAlign: 'center', width: 160, flex: 2 }]}>{next.fantasyName}</Text>
                  <IA style={[styles.txtClient, { color: '#999', flex: 0.5 }]} msg="v" />
                </TouchableOpacity>
              </View>
              :
              null
          }
        </Row>
      </View>
    );
  }
}

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontSize: 15,
    fontFamily: Font.AMedium
  },
  txtSubTitle: {
    flex: 1,
    color: '#333',
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
    alignSelf: 'flex-end',
    height: 50,
    width: 360,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
    borderRadius: 20,
    marginRight: 25
  },
  txtClient: {
    fontSize: 20,
  },
  tchbClient: {
    flexDirection: 'row',
    width: 160,
    alignItems: 'center',
    paddingLeft: 13
  }
});