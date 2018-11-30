import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { Button, Row } from '../../../components';
import { Font } from '../../../assets/fonts/font_names';
import ClientField from './ClientField';

class ExtraInfo extends React.PureComponent {
 
  render() {
    const {
      infos,
      title,
      labels,
      acNextInfo,
      acPreviousInfo,
    } = this.props;

    let addedItems = 0;
    let data = [];
    const rows = [];
    const itemsPerRow = 4;
    return (
      <View style={{ flex: 3, backgroundColor: '#EEEEEE60' }}>
        {/* Este primeiro flex será dinâmico para as outros dados de extra info maiores, com mais colunas */}
        <LinearGradient colors={['rgba(0,133,178, 0.12)', 'rgba(0,133,178, 0.06)', 'rgba(0,133,178, 0)']} style={{ height: 50 }} />
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.flexOne}>
            {/* Left Arrow */}
            <Button
              tchbStyle={styles.vwLeftArrow}
              txtStyle={styles.icLeftArrow}
              action={acPreviousInfo}
              txtMsg="v"
            />
          </View>
          <View style={{ flex: 6 }}>
            <View style={{ flex: 1.5, justifyContent: 'center' }}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={{ flex: 3.5, paddingTop: 10, flexWrap: 'wrap' }}>
              {
                labels.forEach((label, index) => {
                  // Se não tiver sido adicionado nenhum item, será inicializado vazio (para cada linha) 
                  if (addedItems === 0) {data = []; console.log('NEW')}
                  addedItems += 1
                  // Será adicionado 3 items por linha
                  if (addedItems < itemsPerRow + 1) {
                    data.push({ 
                      label,
                      info: infos[index]
                    });
                  }
                
                  // Após adicionar 3 items, zeramos a contagem de items adicionados para zerar o vetor data na linha 46
                  if (addedItems === itemsPerRow + 1) {
                    rows.push(
                      <View style={{ flex: 1, width: '100%', flexDirection: 'row',}} key={index.toString()} >
                        <ExtraInfoRow data={data} />
                      </View>
                    );
                    addedItems = 0;
                  } else if (data.length < index + 1) {
                    rows.push(
                      <View style={{ flex: 1, width: '100%', flexDirection: 'row',}} key={index.toString()} >
                        <ExtraInfoRow data={data} />
                      </View>
                    );
                  }
                    
                })
              }
              {rows}
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            {/* Right Arrow */}
            <Button
              tchbStyle={[styles.vwLeftArrow, styles.vwRightArrow]}
              txtStyle={[styles.icLeftArrow, { transform: [], marginRight: 0, marginLeft: 4 }]}
              txtMsg="v"
              action={acNextInfo}
            />
          </View>
        </View>
        <LinearGradient colors={['rgba(0,133,178, 0.0)', 'rgba(0,133,178, 0.06)', 'rgba(0,133,178, 0.12)']} style={{ height: 50 }} />
      </View>
    );
  }
}

export default ExtraInfo;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1
  },
  title: {
    fontFamily: Font.ASemiBold,
    fontSize: 20,
    color: 'black',
    marginLeft: -5
  },
  vwLeftArrow: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 50,
    backgroundColor: '#FFF',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    elevation: 3,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowRadius: 10
  },
  icLeftArrow: {
    fontFamily: Font.C,
    fontSize: 28,
    marginRight: 4,
    color: 'black',
    transform: [{ rotate: '180deg' }]
  },
  vwRightArrow: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30
  },
  spacingNumbers: {
    letterSpacing: 0.7
  },

});


const ExtraInfoRow = ({ data }) => (
  <View style={{ flex: 1, paddingLeft: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
    {      
      data.map(({ label, info }, index) => (
        <View style={{ flex: 1, }} key={index.toString()}>
          <ClientField
            label={label}
            msg={info}
            container={styles.flexOne}
            vwLabel={{ flex: 0.8 }}
            vwText={styles.flexOne}
            styleText={styles.spacingNumbers}
          />
        </View>
      ))
    }
  </View>
)