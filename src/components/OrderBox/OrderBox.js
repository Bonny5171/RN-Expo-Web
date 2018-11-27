import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Row, IconActionless } from '..';
import { Font } from '../../assets/fonts/font_names';

const OrderBox = ({ order }) => (
  <View style={[styles.vwLastOrder, { marginLeft: -20 }]}>
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={styles.txtOrderCode}>{order.code}</Text>
    </View>
    {/* body - icons */}
    <View style={{ flex: 3 }}>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Row>
          <IconActionless msg="m" style={{ fontSize: 22, color: '#999' }} />
          <IconActionless msg="e" style={{ fontSize: 22, marginLeft: 50, color: '#999' }} />
        </Row>
        <Row>
          <Text style={{ fontSize: 13, color: '#666' }} >R$ {order.total}k</Text>
          <Text style={{ fontSize: 13, marginLeft: 30, color: '#666' }} >{order.date}</Text>
        </Row>
      </View>
      <View style={{ flex: 1 }}>
        {/* Status Bar geral do pedido */}
      </View>
    </View>
  </View>
);

export default OrderBox;

const styles = StyleSheet.create({
  vwLastOrder: {
    height: 130,
    width: 190,
    backgroundColor: '#FFF',
    elevation: 2,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowRadius: 10
  },
  txtOrderCode: {
    fontFamily: Font.ASemiBold,
    letterSpacing: 0.6,
    color: '#6C9ECD',
    fontSize: 17,
    marginLeft: 15,
    marginTop: 8
  }
});