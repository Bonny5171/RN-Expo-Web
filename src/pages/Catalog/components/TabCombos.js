import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Font } from '../../../assets/fonts/font_names';
import { Button, SimpleButton } from '../../../components';

const TabCombos = () => {
  const percent = 5;

  return (
    <View style={{flex: 1}}>
      <View style={{ flex: 4 }}>
        <Text style={{ fontSize: 16, padding: 15, color: 'rgba(102, 102, 102, 1)', fontFamily: Font.ASemiBold, }}>COMBO PROMOCIONAL</Text>
        <View style={{flex:1, flexDirection: 'row', padding: 15,}}>
          <Image
            style={{ height: 100, width: 100 }}
            source={require('../../../assets/imgs/tenis.png')}
            resizeMode="center"
          />
          <Text> + </Text>
          <Image
            style={{ height: 100, width: 100 }}
            source={require('../../../assets/imgs/tenis.png')}
            resizeMode="center"
          />
          <Text> = {percent}%</Text>
        </View>
        <Text style={{ padding: 15, }}>
          Na compra de Grendha Aruba e  Grendha Cancun, com pedido mínimo de 10 pares, ganhe mais 5%  de desconto.
        </Text>
      </View>
      <View style={{flex:1, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => this._handleSelectTab(t)}>
          <Text style={{ color: '#0085B2', textDecorationLine: 'underline', fontSize: 16, fontFamily: Font.ARegular, }}>
            Ir para a página do produto
          </Text>
        </TouchableOpacity>
        <SimpleButton
          tchbStyle={{ height: 45, marginLeft: 120 }}
          txtStyle={{ fontSize: 19 }}
          msg="EU QUERO"
          action={() => {alert('EU QUERO');}}
        />
      </View>
    </View>
  );
};

export default TabCombos;