
import React from 'react';
import { View, StyleSheet, Text, Dimensions, FlatList, Platform, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { Row, Button, Fade } from '../../../../components';
import { Font } from '../../../../assets/fonts/font_names';
import global from '../../../../assets/styles/global';
const { height } = Dimensions.get('window');

class SummaryEmail extends React.Component {
  render() {
    const {
      visible,
      headerHeight,
      dropdown,
      acRemoveCartProduct,
      acOpenCloseDropDown,
      acClosePopUp,
      headerColumns,
      sumaryEmail,
      acSelectedSummaryEmail,
    } = this.props;

    // Cálculo para o tamanho da lista(quando for grande) não exceder a altura da tela do navegador
    const maxHeight = height - headerHeight;

    return (
      <Fade visible={visible} style={[styles.container, { maxHeight, marginTop: headerHeight, width: '100%' }]}>

        {/* Header */}
        <View style={styles.header}>
          <Row style={{ flex: 2, alignItems: 'center' }}>
            <Text style={global.h2}>RESUMO DO EMAIL...</Text>
          </Row>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
              tchbStyle={{ alignSelf: 'flex-end', marginTop: 0 }}
              txtStyle={global.iconClose}
              txtMsg="t"
              actions={[
                { func: acClosePopUp, params: [] },
                {
                  // Só fecha o dropdown caso ele esteja visível
                  func: dropdown.isVisible ? acOpenCloseDropDown : () => null,
                  params: []
                }
              ]}
            />
          </View>
        </View>

        {/* Body */}
        <View style={{ flex: 2, paddingRight: 20 }}>

          { /* GRID SUMMARY - INICIO */ }
          <View style={[
            {
              flex: 1,
              justifyContent: 'center',
              minHeight: 100,
              padding: 20,
              paddingBottom: 0
            }, { maxHeight: maxHeight }]}
          >
            { /* HEADER */}
            <View>
              <View style={{
                  flexDirection: 'row',
                  borderBottomWidth: 0.75,
                  borderBottomColor: '#EEE',
                  paddingLeft: 15
                }}
              >
                {/* Produto + Nome */}
                <View style={{ flex: 4, maxWidth: 390 }}>
                  <Text style={global.columnHeader}>{headerColumns[0]}</Text>
                </View>
                {/* Codigo */}
                <View style={{ flex: 1, maxWidth: 100, alignItems: 'center' }}>
                  <Text style={global.columnHeader}>{headerColumns[1]}</Text>
                </View>
                {/* Imagem */}
                <View style={{ flex: 1, maxWidth: 100, alignItems: 'center' }}>
                  <Text style={global.columnHeader}>{headerColumns[2]}</Text>
                </View>
                {/* Cartela de cores */}
                <View style={{ flex: 1, maxWidth: 100, alignItems: 'center' }}>
                  <Text style={global.columnHeader}>{headerColumns[3]}</Text>
                </View>
                {/* Grades */}
                <View style={{ flex: 1, maxWidth: 100, alignItems: 'center' }}>
                  <Text style={global.columnHeader}>{headerColumns[4]}</Text>
                </View>
                {/* Composição */}
                <View style={{ flex: 1, maxWidth: 105, alignItems: 'center' }}>
                  <Text style={global.columnHeader}>{headerColumns[5]}</Text>
                </View>
              </View>
              <Fade visible={false} duration={150} style={{ position: 'absolute', width: '100%', marginTop: 20 }}>
                <LinearGradient
                  style={{ height: 10, width: '100%' }}
                  colors={['rgba(0, 0, 0, 0.15)', 'rgba(0, 0, 0, 0.10)', 'rgba(0, 0, 0, 0)']}
                />
              </Fade>
            </View>

            {/* ROWS */}
            <FlatList
              data={sumaryEmail.products}
              // onScroll={event => console.log('EVENT', event)}
              // onScrollBeginDrag={() => this.setState({ scrolling: true })}
              // onScrollEndDrag={() => this.setState({ scrolling: false, shadow: false })}
              renderItem={({ item }) => {
                const {
                  name,
                  code,
                  imagemSelected,
                  cartelaDeCoresSelected,
                  gradesSelected,
                  composicaoSelected,
                } = item;

                let vwDelete = { alignSelf: 'flex-end', paddingBottom: 8 };
                if (Platform.OS === 'web') {
                  vwDelete = { alignSelf: 'center' };
                }

                const sombra = {
                  color: '#0085B2',
                  textShadowColor: '#0085B2',
                  textShadowOffset: { width: 1, height: 2 },
                  textShadowRadius: 20,
                };

                return (
                  <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5 }}>
                    {/* Thumb  */}
                    <View style={row.vwThumb}>
                      <Image source={require('../../../../assets/imgs/tenis.png')}style={{ height: 50, width: 80 }} resizeMode="contain" />
                    </View>

                    {/* Nome  */}
                    <View style={[row.vwColumn, { flex: 2, maxWidth: 225 }]}>
                      <View style={row.vwValue}>
                        <Text style={global.columnName}>{name}</Text>
                      </View>
                    </View>

                    {/* Codigo */}
                    <View style={[row.vwColumn, { maxWidth: 100, alignItems: 'center' }]}>
                      <View style={row.vwValue}>
                        <Text style={global.columnValue}>{code}</Text>
                      </View>
                    </View>

                    {/* Imagem */}
                    <View style={[row.vwColumn, { maxWidth: 100, alignItems: 'center' }]}>
                      <View style={row.vwValue}>
                        <TouchableOpacity onPress={() => acSelectedSummaryEmail({ ...item, imagemSelected: !item.imagemSelected })}>
                          <Text style={[{
                              fontFamily: Font.C,
                              fontSize: 17,
                              color: 'rgba(0, 0, 0, 0.8)'
                            }, imagemSelected ? sombra : {}]}
                          >
                            {imagemSelected ? 'h' : 'i'}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    {/* Cartela de cores */}
                    <View style={[row.vwColumn, { maxWidth: 100, alignItems: 'center' }]}>
                      <View style={row.vwValue}>
                        <TouchableOpacity onPress={() => acSelectedSummaryEmail({ ...item, cartelaDeCoresSelected: !item.cartelaDeCoresSelected })}>
                          <Text style={[{
                                fontFamily: Font.C,
                                fontSize: 17,
                                color: 'rgba(0, 0, 0, 0.8)',
                              }, cartelaDeCoresSelected ? sombra : {}]
                            }
                          >
                            {cartelaDeCoresSelected ? 'h' : 'i'}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    {/* Grades */}
                    <View style={[row.vwColumn, { maxWidth: 100, alignItems: 'center' }]}>
                      <View style={row.vwValue}>
                        <TouchableOpacity onPress={() => acSelectedSummaryEmail({ ...item, gradesSelected: !item.gradesSelected })}>
                          <Text style={[{
                              fontFamily: Font.C,
                              fontSize: 17,
                            }, gradesSelected ? sombra : {}]}
                          >
                            {gradesSelected ? 'h' : 'i'}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    {/* Composição */}
                    <View style={[row.vwColumn, { maxWidth: 140, alignItems: 'center' }]}>
                      <View style={row.vwValue}>
                        <TouchableOpacity onPress={() => acSelectedSummaryEmail({ ...item, composicaoSelected: !item.composicaoSelected })}>
                          <Text style={[{
                            fontFamily: Font.C,
                            fontSize: 17,
                            color: 'rgba(0, 0, 0, 0.8)'
                          }, composicaoSelected ? sombra : {}]}
                          >
                            {composicaoSelected ? 'h' : 'i'}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    {/* Delete */}
                    <Button
                      tchbStyle={vwDelete}
                      txtMsg="w"
                      txtStyle={row.icDelete}
                      actions={[{ func: acRemoveCartProduct, params: [name] }]}
                    />
                  </View>
                  );
                }
              }
            />
          </View>

          {/* FOOTER */}
          <View style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
              <View style={{ paddingRight: 20, }}>
                <Button
                  tchbStyle={[styles.buttons, { width: 120 }]}
                  txtStyle={styles.txtButtons}
                  txtMsg="ENVIAR"
                  action={() => { alert('SO PRA TE AVISA QUE ISSO É SO UM ALERT.'); }}
                />
              </View>
              <View style={{ paddingLeft: 20, }}>
                <Button
                  tchbStyle={[styles.buttons, { width: 220 }]}
                  txtStyle={styles.txtButtons}
                  txtMsg="SALVAR IMAGENS"
                  action={() => { alert('SALVAR ONDE ??'); }}
                />
              </View>
            </View>
          </View>

        </View>

      </Fade>
    );
  }
}

export default SummaryEmail;


const row = StyleSheet.create(
  {
    vwThumb: {
      flex: 0.7,
      maxWidth: 100,
      alignItems: 'center',
      padding: 5
    },
    vwColumn: {
      flex: 1,
      paddingBottom: 5,
      paddingTop: 5,
    },
    vwValue: {
      flex: 0.7,
      justifyContent: 'flex-end'
    },
    icDelete: {
      fontFamily: Font.C,
      fontSize: 27,
      color: 'rgba(0, 0, 0, 0.3)',
    }
  }
);

const styles = StyleSheet.create(
  {
    container: {
      position: 'absolute',
      elevation: 2,
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      shadowColor: 'rgba(0, 0, 0, 0.9)',
      shadowOffset: { height: 1, width: 0.2 },
      shadowRadius: 55,
      shadowOpacity: 0.2,
      borderTopColor: 'rgba(0, 0, 0, 0.1)',
      borderTopWidth: 0.2,
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 15
    },
    icMail: {
      fontFamily: Font.C,
      color: 'rgba(0, 0, 0, 0.3)',
      fontSize: 30
    },
    goToCartPage: {
      fontFamily: Font.ALight,
      fontSize: 18,
      textDecorationLine: 'underline',
      color: '#359EC2',
    },
    buttons: {
      backgroundColor: '#0085B2',
      height: 40,
      borderRadius: 45,
      justifyContent: 'center',
    },
    txtButtons: {
      fontSize: 20,
      color: 'white',
      fontFamily: Font.ALight,
      textAlign: 'center'
    }
  }
);