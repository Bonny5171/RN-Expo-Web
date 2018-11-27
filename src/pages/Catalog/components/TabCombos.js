import React from 'react';
import { View, Text, Image } from 'react-native';
import { Font } from '../../../assets/fonts/font_names';
import { Button } from '../../../components';

const TabCombos = () => {
  const percent = 5;

  return (
    <View style={{flex: 1}}>
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
      <View style={{flex:1, flexDirection: 'row', padding: 15,}}>
        <Text style={[{ color: '#0085B2', flex: 1, }]}>
          Ir para a página do produto
        </Text>
        <Button
          tchbStyle={{
            backgroundColor: '#0085B2',
            height: 30,
            width: 120,
            borderRadius: 45,
          }}
          txtStyle={{
            fontSize: 20,
            color: 'white',
            fontFamily: Font.ASemiBold,
            textAlign: 'center',
          }}
          txtMsg="EU QUERO"
          action={() => {alert('EU QUERO');}}
        />
      </View>
    </View>
  );
};

export default TabCombos;