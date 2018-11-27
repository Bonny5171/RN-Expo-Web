import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Font } from '../../../assets/fonts/font_names';
import { Button } from '../../../components';

const box = { padding: 5, paddingRight: 20 };
const titulo = { color: 'rgba(102, 102, 102, 1)', fontFamily: Font.ASemiBold, fontSize: 12 };
const subTitulo = { color: 'rgba(102, 102, 102, 1)', fontFamily: Font.ASemiBold, fontSize: 16 };

const TabResulmo = ({ currentProduct }) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 10 }}>
      <Text style={{
          fontSize: 26, color: 'rgba(102, 102, 102, 1)', fontFamily: Font.ARegular,
        }}
      >
        {currentProduct.name.toUpperCase()}
      </Text>
      <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, marginTop: 40 }}>
        <View style={box}>
          <Text style={titulo}>LINHA</Text>
          <Text style={subTitulo}>FEMININA</Text>
        </View>
        <View style={box}>
          <Text style={titulo}>CATEGORIA</Text>
          <Text style={subTitulo}>CHINELO</Text>
        </View>
        <View style={box}>
          <Text style={titulo}>CÓDIGO</Text>
          <Text style={subTitulo}>{currentProduct.code}</Text>
        </View>
        <View style={box}>
          <Text style={titulo}>GRUPO</Text>
          <Text style={subTitulo}>1</Text>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', }}>
        <View>
          <View>
            <Text style={titulo}>PREÇO LISTA</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', }}>
            <Text style={{ fontSize: 12, paddingTop: 10, color: 'rgba(0, 0, 0, 0.7)', fontFamily: Font.ARegular, }}>R$ </Text>          
            <Text style={{ fontSize: 28, paddingTop: 5, paddingLeft: 2, color: 'rgba(0, 0, 0, 0.7)', fontFamily: Font.ARegular,  }}>24,90</Text>  
          </View>
        </View>
        <View style={{ marginLeft: 15 }}>
          <Text style={titulo}>PREÇO SUGESTÃO</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start',  }}>
            <Text style={{ fontSize: 12, paddingTop: 10, color: 'rgba(0, 0, 0, 0.7)', fontFamily: Font.ARegular, }}>R$ </Text>
            <Text style={{ fontSize: 28, paddingTop: 5, paddingLeft: 2, color: 'rgba(0, 0, 0, 0.7)', fontFamily: Font.ARegular,  }}>39,90</Text>
          </View>
        </View>
      </View>
    </View>

    <View style={{
        flex: 1, flexDirection: 'row', padding: 15,
      }}
    >
      <TouchableOpacity style={{ flex: 1 }} onPress={() => this._handleSelectTab(t)}>
        <Text style={{ color: '#0085B2', textDecorationLine: 'underline', fontSize: 16, fontFamily: Font.ARegular, }}>
          Ir para a página do produto
        </Text>
      </TouchableOpacity>
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
        action={() => { alert('EU QUERO'); }}
      />
    </View>
  </View>
);

export default TabResulmo;