import React from 'react';
import { View, Text } from 'react-native';
// import { Font } from '../../assets/fonts/font_names';
import IconProgressBar from '../../components/IconProgressBar';

export default ({ iProgressBar, nextStep, indeterminate }) => (
  <View>
    <Text style={
        {
          // fontFamily: Font.ALight,
          fontSize: 21,
          color: 'black',
        }
      }
    >{`
        Estamos baixando os dados necessários para o seu primeiro acesso.
        Isso pode levar algum tempo...`
      }
    </Text>
    <View style={
        {
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 85,
          marginLeft: 50,
          marginRight: 50
        }
      }
    >
      <IconProgressBar
        txt="PRODUTOS"
        icon={3}
        nextStep={nextStep}
        percent={iProgressBar.product}
        indeterminate={indeterminate.product}
      />
      <IconProgressBar
        txt="CLIENTES"
        icon={4}
        nextStep={nextStep}
        percent={iProgressBar.account}
        indeterminate={indeterminate.account}
      />
      <IconProgressBar
        txt="PEDIDOS"
        icon={5}
        nextStep={nextStep}
        percent={iProgressBar.orders}
        indeterminate={indeterminate.orders}
      />
      <IconProgressBar
        txt="RECURSOS"
        icon={6}
        nextStep={nextStep}
        percent={iProgressBar.resource}
        indeterminate={indeterminate.resource}
      />
    </View>
  </View>
);