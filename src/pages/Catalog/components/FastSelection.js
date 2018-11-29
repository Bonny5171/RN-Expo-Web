import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { DropDownView } from './';
import { Font } from '../../../assets/fonts/font_names';
import { Fade } from '../../../components';

class FastSelection extends React.PureComponent {

  render() {
    
    // Carrinho padrao provisorio.
    const cars = [{
      name: "Carrinho Padrão",
      selected: true,
    }, ...this.props.carts ];
    
    return (
      <View style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
        padding: 5,
        flexDirection: 'row'
      }}
      >
        <Fade visible={this.props.resumoCar}>
          <DropDownView
            vwStyle={{ width: 220 }}
            isVisible
            options={cars}
            {...this.props}
            eventHandler={(item) => {
              const carts = this.props.carts.map((asd) => {
                debugger
                if (item.key == asd.key) {
                  console.log('localizado');
                  asd.selected = !item.selected;
                }
                return asd;
              })

              //console.log('carts', carts)
              this.props.acDefineCarrinhoSelecionado({ carts });

              // abre o assistente de selecao
              this.props.acSelectList({ selectList: !this.props.selectList });
            }
          }/>
        </Fade>
        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
          <Fade visible={this.props.selectOpt}>
            {/* CARRINHO */}
            <TouchableOpacity
              activeOpacity={this.props.resumoCar ? 1 : 0.7}
              onPress={() => {
                this.props.acOpenCart({ resumoCar: !this.props.resumoCar });
                this.props.acCarrinho({ btnCarrinho: !this.props.btnCarrinho });
              }}
            >
              <View style={[styles.circle, { justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }]}>
                <Text style={[
                  styles.iconPlus,
                  {
                    color:  this.props.btnCarrinho 
                      ? 'rgba(0, 122, 176, 0.85)'
                      : 'rgba(102, 102, 102, 0.5)'
                  }
                  ]}>p</Text>
              </View>
            </TouchableOpacity>
    
            {/* EMAIL */}
            <TouchableOpacity
              activeOpacity={this.props.selectList ? 1 : 0.7}
              onPress={() => {
                this.props.acSelectList({ selectList: !this.props.selectList });
                this.props.acBtnEnvelop({ btnEnvelope: !this.props.btnEnvelope });
                this.setState({ btnMais: true });
              }}
            >
              <View style={[styles.circle, { justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }]}>
                <Text style={[
                  styles.iconPlus,
                  {
                    color:  this.props.btnEnvelope 
                      ? 'rgba(0, 122, 176, 0.85)'
                      : 'rgba(102, 102, 102, 0.5)'
                  }
                  ]}>W</Text>
              </View>
            </TouchableOpacity>
          </Fade>
    
          {/* BTN MAIS */}
          <TouchableOpacity
            activeOpacity={this.props.selectList ? 1 : 0.7}
            onPress={() => {
              this.props.acSelectOpt({ selectOpt: !this.props.selectOpt });
              this.props.acBtnMais({ btnMais: !this.props.btnMais });
            }
          }>
            <View style={[styles.circle, { justifyContent: 'center', alignItems: 'center' }]}>
              <Text style={[
                  styles.iconPlus,
                  {
                    color:  this.props.btnMais 
                      ? 'rgba(0, 122, 176, 0.85)'
                      : 'rgba(102, 102, 102, 0.5)'
                  }
                ]}>g</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default FastSelection;

const styles = StyleSheet.create(
  {
    animateList: {
      paddingTop: 55,
    },
    iconPlus: {
      fontFamily: Font.C,
      fontSize: 35,
      textShadowOffset: { width: 2, height: 2 },
      textShadowColor: '#0085B2',
      textShadowRadius: 8
    },
    toPlus: {
      position: 'absolute',
      height: 50,
      width: 50,
      bottom: 0,
      right: 10,
      padding: 5
    },
    circle: {
      width: 55,
      height: 55,
      borderRadius: 55 / 2,
    }
  }
);