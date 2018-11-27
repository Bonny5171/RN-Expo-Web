import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { DropDownView } from './';
import { Font } from '../../../assets/fonts/font_names';
import { Fade } from '../../../components';

class FastSelection extends React.PureComponent {
  render() {
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
            options={this.props.carts}
            {...this.props}
          />
        </Fade>
        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
          <Fade visible={this.props.selectOpt}>
            {/* CARRINHO */}
            <TouchableOpacity
              activeOpacity={this.props.resumoCar ? 1 : 0.7}
              onPress={() => this.props.acOpenCart({ resumoCar: !this.props.resumoCar })}
            >
              <View style={[styles.circle, { justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }]}>
                <Text style={styles.iconPlus}>p</Text>
              </View>
            </TouchableOpacity>
    
            {/* EMAIL */}
            <TouchableOpacity
              activeOpacity={this.props.selectList ? 1 : 0.7}
              onPress={() => this.props.acSelectList({ selectList: !this.props.selectList })}
            >
              <View style={[styles.circle, { justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }]}>
                <Text style={styles.iconPlus}>W</Text>
              </View>
            </TouchableOpacity>
          </Fade>
    
          {/* BTN MAIS */}
          <TouchableOpacity
            activeOpacity={this.props.selectList ? 1 : 0.7}
            onPress={() => this.props.acSelectOpt({ selectOpt: !this.props.selectOpt })}
          >
            <View style={[styles.circle, { justifyContent: 'center', alignItems: 'center' }]}>
              <Text style={styles.iconPlus}>g</Text>
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
      color: 'rgba(0, 122, 176, 0.85)',
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