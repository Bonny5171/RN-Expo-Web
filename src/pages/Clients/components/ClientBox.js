import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image } from 'react-native';
import { Font } from '../../../assets/fonts/font_names';


class ClientBox extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.index !== nextProps.index) {
      return true;
    }
    return false;
  }

  render() {
    let marginLeft = this.props.index % 4 === 0 ? 0 : 20;
    if (Platform.OS === 'web') {
      marginLeft = this.props.index % 7 === 0 ? 0 : 20;
    }

    const { item, acCurrentClient, acNavigate } = this.props;

    return (
      <View style={[styleCB.vwClientBox, { marginLeft }]}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            acCurrentClient(item);
            acNavigate('client');
          }}
          activeOpacity={0.8}
          animationVelocity={1}
          underlayColor="transparent"
        >
          <Image
            style={styleCB.imgClient}
            source={require('../../../assets/imgs/carrefour.jpeg')}
            resizeMode="cover"
          />
          <View style={{ justifyContent: 'center', flex: 1, paddingLeft: 27 }}>
            <Text style={styleCB.txtClient}>{this.props.name}</Text>
            <Text style={styleCB.cliendId}>{this.props.code}</Text>
          </View>

        </TouchableOpacity>
      </View>
    );
  }
}

export default ClientBox;

const styleCB = StyleSheet.create({
  vwClientBox: {
      backgroundColor: '#F7F8F3',
      width: 215,
      height: 255,
      marginTop: 20,
  },
  imgClient: {
      height: 110,
      width: 165,
      marginTop: 20,
      flex: 2,
      marginLeft: 27,
      backgroundColor: 'grey'
  },
  txtClient: {
      marginTop: 10,
      fontFamily: Font.ALight,
      color: 'black',
  },
  cliendId: {
      fontFamily: Font.ALight,
      fontSize: 12,
      color: 'black'
  },
});
