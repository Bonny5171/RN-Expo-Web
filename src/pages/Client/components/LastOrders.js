import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Font } from '../../../assets/fonts/font_names';
import { OrderBox } from '../../../components';

const LastOrders = () => (
  <View style={styles.container}>
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <Text style={styles.title}>ÚLTIMOS PEDIDOS</Text>
    </View>
    <View style={styles.boxes}>
      <OrderBox
        order={{
          total: '120',
          code: '008973800',
          date: 'SET/18'
        }}
      />
      <OrderBox
        order={{
          code: '003934820',
          total: '115',
          date: 'AGO/18'
        }}
      />
      <OrderBox
        order={{
          code: '009924220',
          total: '123',
          date: 'JUL/18'
        }}
      />
      <OrderBox
        order={{
          code: '002634170',
          total: '176',
          date: 'JUN/18'
        }}
      />
    </View>
  </View>
);


export default LastOrders;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center'
  },
  title: {
    fontFamily: Font.BLight,
    fontSize: 22,
    color: 'black',
    marginBottom: 15
  },
  boxes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});