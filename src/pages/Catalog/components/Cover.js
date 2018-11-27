import React from 'react';
import { ImageBackground, View, Platform, Dimensions } from 'react-native';
import { Fade, Button } from '../../../components';
import { Font } from '../../../assets/fonts/font_names';
import { vendorSplash } from '../../../assets/imgs';

class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    const { visible } = this.state;
    const { show, acCatalogCover } = this.props;
    return (
      <Fade visible={visible && show} style={styles.container}>
        <ImageBackground source={vendorSplash} style={styles.splash} resizeMode="cover">
          <View style={styles.bodySplash}>
            {/* Imagem recebida do SF, view será substituida por <Image> e definida no /assets/imgs */}
            <View style={styles.imgText} />
          </View>
          <View style={styles.footerSplash}>
            <Button
              txtStyle={styles.icOpenCatalog}
              txtMsg="v"
              action={() => {
                this.setState({ visible: false });
                acCatalogCover();
              }}
            />
          </View>
        </ImageBackground>
      </Fade>
    );
  }
}

export default Cover;

const styles = {
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    elevation: 5,
    shadowOffset: { height: 2 },
    shadowColor: 'rgba(0, 0, 0, 0.97)',
    shadowRadius: 15,
  },
  splash: {
    height: Dimensions.get('window').height,
    width: '100%',
  },
  imgText: {
    height: '60%',
    width: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginLeft: 75
  },
  icOpenCatalog: {
    fontFamily: Font.C,
    fontSize: 45,
    color: 'rgba(0, 0, 0, 0.3)',
    width: 50,
    transform: [{ rotate: '270deg' }],
    marginBottom: 25,
    marginLeft: Platform.OS === 'web' ? -70 : 0,
  },
  bodySplash: {
    flex: 4,
    justifyContent: 'center',
  },
  footerSplash: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
};

if (Platform.OS === 'android' || Platform.OS === 'ios') {
  styles.imgText = {
    ...styles.imgText,
      maxHeight: 300,
      maxWidth: 500,
  };
}