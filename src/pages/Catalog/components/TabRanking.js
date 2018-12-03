import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Font } from '../../../assets/fonts/font_names';
import global from '../../../assets/styles/global';
import { mapaSudeste, mapaBrasil } from '../../../assets/imgs';
import { Button, SimpleButton } from '../../../components';


const TabRanking = ({ currentProduct }) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 4, flexDirection: 'row' }}>
      {/* Ranking Nacional */}
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.boxHeader}>
          <Text style={[global.h3, styles.titleBox]}>RANKING NACIONAL</Text>
        </View>
        {/* Body */}
        <Box
          backgroundImg={mapaBrasil}
          ranking={currentProduct.nationalRanking}
          textRanking="mais vendido no Brasil"
          percentBought={currentProduct.nationalSales}
          textPercent="dos clientes compraram"
        />
      </View>
      {/* Ranking Regional */}
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.boxHeader}>
          <Text style={[global.h3, styles.titleBox]}>RANKING REGIONAL</Text>
        </View>
        {/* Body */}
        <Box
          backgroundImg={mapaSudeste}
          ranking={currentProduct.regionalRanking}
          textRanking="mais vendido na região sudeste"
          percentBought={currentProduct.regionalSales}
          textPercent="dos clientes compraram"
        />
      </View>
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

export default TabRanking;

const styles = StyleSheet.create({
  subtitle: {
    fontFamily: Font.ASemiBold,
    fontSize: 18,
    color: 'rgba(40, 40, 40, 0.7)'
  },
  boxHeader: {
    flex: 1,
    justifyContent: 'center'
  },
  titleBox: {
    fontSize: 18,
    color: 'rgba(20, 20, 20, 0.7)'
  },
  imgMap: {
    flex: 1,
    position: 'absolute',
    width: 200,
    height: 250,
    opacity: 0.4,
    resizeMode: 'contain'
  }
});

const Box = ({
  backgroundImg, ranking,
  percentBought, textRanking,
  textPercent
}) => (
  <View style={{ flex: 7 }}>
    <Image style={styles.imgMap} source={backgroundImg} />
    <View style={[global.containerCenter, { flexDirection: 'row', paddingLeft: 4 }]}>
      <Text style={[global.text, { fontSize: 30, marginTop: 90 }]}>{ranking}° </Text>
      <Text style={[global.text, { fontSize: 16, maxWidth: 120, marginTop: 90 }]}>{textRanking}</Text>
    </View>
    <View style={[global.containerCenter, { flexDirection: 'row' }]}>
      <Text style={[global.text, { fontSize: 30, marginTop: 140 }]}>{percentBought}% </Text>
      <Text style={[global.text, { fontSize: 16, maxWidth: 120, marginTop: 140 }]}>{textPercent}</Text>
    </View>
    <View style={{ height: 80 }} />
  </View>
);