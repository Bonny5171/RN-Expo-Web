import React from 'react';
import { View, Text, Keyboard, TextInput, Platform } from 'react-native';
import { Font } from '../../../assets/fonts/font_names';
import { DropDown, DropDownView } from '.';
import { Button, Fade, Row } from '../../../components';
import global from '../../../assets/styles/global';

class FilterPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        name: '',
        situation: '',
        sector: '',
        positivacao: {
          de: '',
          a: ''
        }
      }
    };
  }

  render() {
      const {
        acUpdateComponent, acFilterList, popUpFilter, srvClients,
      } = this.props;
      const { filter } = srvClients;
      const dropDownSector = this._renderSector();
      const dropDownSituation = this._renderSituation();
      let vwInput = [styleIT.vwIT, { width: 585, marginTop: 10 }];
      let vwDe = [styleIT.vwIT, { width: 150, marginLeft: 14 }];
      let vwA = [styleIT.vwIT, { width: 162, marginLeft: 14 }];
      if (Platform.OS === 'web') {
        vwInput = [vwInput, { justifyContent: 'center' }];
        vwDe = [vwDe, { justifyContent: 'center' }];
        vwA = [vwA, { justifyContent: 'center' }];
      }
      return (
        <View style={styleFPU.vwFPU}>
          <Triangle triangle={[styleTriangle.triangleTopFilter, { marginRight: 8 }]} />
          <View style={styleFPU.filterPopUp}>
            <Row style={{ justifyContent: 'center', flex: 1.3 }}>
              <View style={{ flex: 1, padding: 20 }}>
                <Text style={styleFPU.title}>FILTRO DE BUSCA</Text>
              </View>
              <View style={{ flex: 1, padding: 20 }}>
                <Button
                  tchbStyle={{ alignSelf: 'flex-end' }}
                  txtStyle={styleFPU.icClose}
                  txtMsg="t"
                  changeColor
                  rdAction={acUpdateComponent}
                  rdName="filterPopUp"
                  rdType="popup"
                  action={Keyboard.dismiss}
                />
              </View>
            </Row>
            <Row style={styleFPU.bodyRow}>
              <View>
                <Text style={styleIT.txtLabel}>CLIENTE(NOME OU CÓDIGO)</Text>
                <View style={[global.vwIT, { width: 597, marginLeft: 45, }]}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={global.txtInput}
                    onChangeText={(text) => {
                        const { filters } = this.state;
                        filters.name = text;
                        this.setState(filters);
                      }
                    }
                    value={this.state.filters.name}
                  />
                </View>
              </View>

              <DropDown
                name="dropSituacao"
                width={267}
                labelStyle={{ marginLeft: 20 }}
                vwStyle={{ marginLeft: 20 }}
                icStyle={styleDD.triangleSituation}
                txtLabel="SITUAÇÃO"
                acUpdateComponent={acUpdateComponent}
                current={popUpFilter[0].current}
              />
            </Row>
            <Row style={styleFPU.bodyRow}>
              <DropDown
                name="dropSetor"
                width={493}
                tchbStyle={{ marginLeft: Platform.OS === 'web'? 200 : 0 }}
                icStyle={styleDD.triangleSector}
                txtLabel="SETOR DE ATIVIDADE"
                acUpdateComponent={acUpdateComponent}
                current={popUpFilter[1].current}
              />
              <View style={{ marginLeft: -30 }}>
                <Text style={styleIT.txtLabel}>POSITIVAÇÃO</Text>
                <Row style={{ alignItems: 'center', marginTop: -0.5 }}>
                  <Text style={[styleIT.txtLabel, styleIT.txtLabelDe]}>De</Text>
                  <View style={[global.vwIT, { width: 150, marginLeft: 14 }]}>
                    <TextInput
                      underlineColorAndroid="transparent"
                      style={global.txtInput}
                      onChangeText={(de) => {
                          const { filters } = this.state;
                          filters.positivacao.de = de;
                          this.setState(filters);
                        }
                      }
                      value={this.state.filters.positivacao.de}
                    />
                  </View>
                  <Text style={[styleIT.txtLabel, styleIT.txtLabelA]}>a</Text>
                  <View style={[global.vwIT, { width: 162, marginLeft: 14, }]}>
                    <TextInput
                      underlineColorAndroid="transparent"
                      style={global.txtInput}
                      onChangeText={(a) => {
                          const { filters } = this.state;
                          filters.positivacao.a = a;
                          this.setState(filters);
                        }
                      }
                      value={this.state.filters.positivacao.a}
                    />
                  </View>
                </Row>
              </View>
            </Row>
            <Row style={styleFPU.footerRow}>
              <Button
                tchbStyle={styleFPU.btnBuscar}
                txtMsg="BUSCAR"
                txtStyle={styleFPU.txtBuscar}
                rdAction={(key, { filters }) => filter(filters, acFilterList)}
                rdType="filter_list"
                rdName={
                  {
                    filters: {
                      name: this.state.filters.name,
                      situation: popUpFilter[0].current,
                      sector: popUpFilter[1].current,
                      positivacao: {
                        de: this.state.filters.positivacao.de,
                        a: this.state.filters.positivacao.a
                      }
                    }
                  }
                }
              />
            </Row>
            {dropDownSector}
            {dropDownSituation}
          </View>
        </View>
      );
  }

  _renderSituation() {
    const {
      acUpdateComponent,
      acUpdateCurrent, popUpFilter
    } = this.props;

    return (
      <Fade visible={popUpFilter[0].isChosen} style={styleDDV.vwDDVSituation}>
        <DropDownView
          style={styleDDV.vwDDVSituation}
          name="dropSituacao"
          acUpdateComponent={acUpdateComponent}
          acUpdateCurrent={acUpdateCurrent}
          isVisible
          options={[
              { key: '1', option: 'LIBERADOS' },
              { key: '2', option: 'BLOQUEADOS' },
              { key: '3', option: 'NOVOS' },
          ]}
        />
      </Fade>
    );
  }

  _renderSector() {
    const {
      acUpdateComponent,
      acUpdateCurrent, popUpFilter
    } = this.props;

    return (
      <Fade visible={popUpFilter[1].isChosen} style={styleDDV.vwDDVSector}>
        <DropDownView
          name="dropSetor"
          acUpdateComponent={acUpdateComponent}
          acUpdateCurrent={acUpdateCurrent}
          isVisible
          options={[
              { key: '1', option: 'PRIMEIRO' },
              { key: '2', option: 'SEGUNDO' },
              { key: '3', option: 'TERCEIRO' },
          ]}
        />
      </Fade>
    );
  }
}

export default FilterPopUp;

const Triangle = props => {
    return (
      <View style={props.triangle} />
    );
};


let styleFPU = {
  vwFPU: {
      flex: 1,
  },
  bodyRow: {
    flex: 2,
    marginLeft: -25
  },
  footerRow: {
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 40,
    padding: 10,
    paddingTop: 0,
    paddingRight: 0,
  },
  filterPopUp: {
      flex: 1,
      justifyContent: 'space-evenly',
      backgroundColor: '#FFF',
      width: 925,
      height: 465,
      opacity: 0.96,
  },
  title: {
      fontFamily: Font.ALight,
      fontSize: 25,
      width: 200,
      color: '#999'
  },
  icClose: {
      fontFamily: Font.C,
      fontSize: 35,
      color: '#999'
  },
  btnBuscar: {
    backgroundColor: '#0085B2',
    height: 40,
    width: 105,
    borderRadius: 45,
    paddingTop: 6,
    marginLeft: 40
  },
  txtBuscar: {
    fontSize: 17,
    color: 'white',
    fontFamily: Font.ASemiBold,
    textAlign: 'center',
  },
};

let styleTriangle = {
    triangleTopFilter: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: 0,
      borderRightWidth: 10,
      borderBottomWidth: 10,
      borderLeftWidth: 10,
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: '#0085B2',
      borderLeftColor: 'transparent',
      marginLeft: 871,
    }
};

let styleDD = {
    txtLabel: {
      fontFamily: Font.BBold,
      color: 'black',
      marginLeft: 45,
      marginTop: 5,
      fontSize: 12,
      opacity: 0.9
    },
    vwDD: {
      height: 65,
      borderWidth: 1,
      borderRadius: 10,
      marginLeft: 40,
      marginTop: 4,
      borderColor: '#999'
    },
    vwInput: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    txtInput: {
      fontSize: 18,
      fontFamily: Font.ALight,
      color: '#999'
    },
    triangleSituation: {
      position: 'absolute',
      marginLeft: 225,
      transform: [
        { rotate: '180deg' }
      ],
    },
    triangleSector: {
      position: 'absolute',
      marginLeft: 457,
      transform: [
        { rotate: '180deg' }
      ],
    }
};

let styleIT = {
    txtLabel: {
      fontFamily: Font.ASemiBold,
      color: 'black',
      marginLeft: 45,
      marginTop: 5,
      fontSize: 12,
      opacity: 0.9
    },
    txtLabelA: {
      fontFamily: Font.ALight,
      marginLeft: 14,
      color: 'black',
      fontSize: 13,
      marginTop: 14,
    },
    txtLabelDe: {
      fontFamily: Font.ALight,
      color: 'black',
      fontSize: 13,
      marginTop: 14,
    },
    vwIT: {
      height: 65,
      borderWidth: 1,
      borderRadius: 10,
      marginLeft: 40,
      marginTop: 4,
      borderColor: '#999',
    },
    txtInput: {
      fontSize: 18,
      marginLeft: 10,
      fontFamily: Font.ALight
    }
};

let styleDDV = {
    vwDDVSituation: {
      position: 'absolute',
      backgroundColor: '#FFF',
      marginLeft: 637,
      marginTop: 140,
      width: 267,
      borderWidth: 0.5,
      borderTopWidth: 0,
      borderColor: '#999',
    },
    vwDDVSector: {
      position: 'absolute',
      backgroundColor: '#FFF',
      marginLeft: 20,
      marginTop: 246,
      width: 493,
      borderWidth: 0.5,
      borderTopWidth: 0,
      borderColor: '#999',
    },
    list: {
      borderBottomColor: '#999',
    },
    item: {
      marginLeft: 10,
      fontSize: 18,
      fontFamily: Font.ALight,
      color: '#999'
    }
};

if (Platform.OS === 'web') {
  styleFPU = {
    ...styleFPU,
    vwFPU: {
      ...styleFPU.vwFPU,
      width: 930,
      marginLeft: 883,
    },
    bodyRow: {
      ...styleFPU.bodyRow,
      marginLeft: -25
    },
    footerRow: {
      ...styleFPU.footerRow,
      paddingLeft: 0
    },
    filterPopUp: {
      ...styleFPU.filterPopUp,
      borderRadius: 25,
      shadowOffset: { width: 5, height: 5 },
      shadowColor: 'grey',
      shadowOpacity: 1,
      shadowRadius: 10
    },
    btnBuscar: {
      ...styleFPU.btnBuscar,
      paddingTop: 9
    }
  };

  styleTriangle = {
    triangleTopFilter: {
      ...styleTriangle.triangleTopFilter,
      marginLeft: 883
    }
  };

  styleDD = {
    ...styleDD,
    triangleSector: {
      ...styleDD.triangleSector,
      marginLeft: 250
    }
  };

  styleDDV = {
    ...styleDDV,
    vwDDVSector: {
      ...styleDDV.vwDDVSector,
      marginTop: 222,
      marginLeft: 20,
    },
    vwDDVSituation: {
      ...styleDDV.vwDDVSituation,
      marginTop: 11,
      marginLeft: 637
    }
  };

  styleIT = {
    ...styleIT,
    txtInput: {
      ...styleIT.txtInput,
      justifyContent: 'center',
    }
  };
}