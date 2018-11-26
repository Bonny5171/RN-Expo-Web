import React from 'react';
import { StyleSheet, View, Text, Platform, Animated } from 'react-native';
import { Font } from '../../assets/fonts/font_names';
import { Button } from '../../components';

class Conclusion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeAnim: new Animated.Value(0) };
  }

  componentDidMount() {
    const value = this.state.fadeAnim;
    const config = { toValue: 1, duration: 1000 };
    Animated.timing(value, config).start();
  }

  render() {
    return (
      <Animated.View style={[styleConclusion.vwConclusion, { opacity: this.state.fadeAnim }]}>
        <Text style={styleConclusion.p}>Todos os dados e mídias foram carregados. Boas Vendas!</Text>
        <View style={styleConclusion.vwBtn}>
          <Button
            tchbStyle={styleConclusion.btnStart}
            txtStyle={styleConclusion.txtStart}
            txtMsg="INICIAR APLICATIVO"
            actions={this.props.actions}
          />
        </View>
      </Animated.View>
    );
  }
}

export default Conclusion;

let styleConclusion = {};
if (Platform.OS === 'web') {
  styleConclusion = StyleSheet.create({
    vwConclusion: {
      marginTop: 60,
      marginLeft: 40
    },
    p: {
      fontFamily: Font.ALight,
      fontSize: 28,
      lineHeight: 35,
      marginLeft: 15,
      color: 'black',
    },
    vwBtn: {
      marginLeft: 380,
      marginTop: 135,
    },
    btnStart: {
      backgroundColor: '#0085B2',
      height: 45,
      width: 270,
      borderRadius: 45,
      paddingTop: 8,
    },
    txtStart: {
      fontSize: 20,
      fontFamily: Font.ASemiBold,
      color: 'white',
      textAlign: 'center',
    }
  });
} else {
  styleConclusion = StyleSheet.create({
    vwConclusion: {
      marginTop: 20,
      marginLeft: 30
    },
    p: {
      fontFamily: Font.ALight,
      fontSize: 21,
      marginLeft: 15,
      marginTop: 25,
      color: 'black',
    },
    btnStart: {
      backgroundColor: '#0085B2',
      height: 40,
      width: 215,
      borderRadius: 45,
      marginTop: 25,
      marginLeft: 60,
      paddingTop: 7,
    },
    txtStart: {
      fontSize: 18,
      fontFamily: Font.ASemiBold,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    vwBtn: {
      marginLeft: 275,
      marginTop: 45,
    },
  });
}