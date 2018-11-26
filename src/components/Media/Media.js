import React from 'react';
import { StyleSheet, View, Text, Platform, Animated } from 'react-native';
import { Font } from '../../assets/fonts/font_names';
import { Button, IconProgressBar } from '../../components';

class Media extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      redirect: false
    };
  }

  setRedirect() {
    this.props.acUpdateContext('Admin');
    this.setState({
      redirect: true
    });
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }

  render() {

    return (
      <Animated.View style={[styleMedia.vwMedia, { opacity: this.state.fadeAnim }]}>
        <Text style={styleMedia.p}>
          {`
            Quase lá! Agora só faltam as mídias(fotos em alta qualidade, vídeos etc)
            Se você quiser, pode começar a usar o aplicativo com as miniaturas dos produtos, enquanto
            As mídias vão sendo carregadas... ou aguarde até o término do carregamento
          `}
        </Text>
        <View style={styleMedia.vwButtons}>
          <IconProgressBar
            view={styleMedia.vwMedia}
            icon=")"
            style={styleMedia.icMedia}
            txt="MÍDIAS"
            txtStyle={styleMedia.txtMedia}
            nextStep={this.props.nextStep}
            percent={this.props.iProgressBar.medias}
          />
          <Button
            tchbStyle={styleMedia.btnStart}
            txtStyle={styleMedia.txtStart}
            txtMsg="QUERO COMEÇAR A USAR"
            actions={this.props.actions}
          />
        </View>
      </Animated.View>
    );
  }
}

export default Media;

let styleMedia = {};
if (Platform.OS === 'web') {
  styleMedia = StyleSheet.create({
    p: {
      fontFamily: Font.ALight,
      fontSize: 28,
      marginLeft: -30,
      lineHeight: 35,
      color: 'black',
    },
    vwMedia: {
      marginLeft: -10,
      marginTop: 5,
    },
    icMedia: {
      fontSize: 85,
      color: '#999',
    },
    txtMedia: {
      fontFamily: Font.ASemiBold,
      color: '#999',
      marginLeft: 15,
      fontSize: 23
    },
    btnStart: {
      backgroundColor: '#0085B2',
      height: 45,
      width: 310,
      borderRadius: 45,
      paddingTop: 7,
      marginLeft: 285,
      marginTop: 55,
    },
    txtStart: {
      fontSize: 20,
      color: 'white',
      fontFamily: Font.ASemiBold,
      textAlign: 'center',
    },
    vwButtons: {
      flexDirection: 'row',
      paddingTop: 20,
      marginLeft: 240
    }
  });
} else {
  styleMedia = StyleSheet.create({
    p: {
      fontFamily: Font.ALight,
      fontSize: 21,
      marginLeft: -20,
      lineHeight: 35,
      color: 'black',
    },
    icone: {
      marginLeft: 75,
      marginTop: 10,
      fontSize: 75,
    },
    btnStart: {
      backgroundColor: '#0085B2',
      height: 40,
      width: 250,
      borderRadius: 45,
      paddingTop: 7,
      marginLeft: 280,
      marginTop: 60,
    },
    txtStart: {
      fontSize: 18,
      color: 'white',
      fontFamily: Font.ASemiBold,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    vwButtons: {
      flexDirection: 'row',
      paddingTop: 30,
      marginLeft: 175
    },
    txtMedia: {
      color: '#999',
      fontFamily: Font.ASemiBold,
      marginLeft: 9,
      fontSize: 23
    },
    vwMedia: {
      marginLeft: 10,
      marginTop: 15
    },
    icMedia: {
      fontSize: 75,
      color: '#999',
    }
  });
}
