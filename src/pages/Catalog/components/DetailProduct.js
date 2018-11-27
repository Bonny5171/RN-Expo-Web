import React from 'react';
import { View, Dimensions, Platform, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo';
import { Tab, Gallery } from './';

let { width } = Dimensions.get('window');
width = (width / 2) - 70;

class DetailProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const easing = Easing.elastic();
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 700,
        easing
      }
    ).start(({ finished }) => {
      const { scrollToIndex, indexDestaque } = this.props;
      if (finished) {
        scrollToIndex(indexDestaque);
      }
    });
  }

  render() {
    const { fadeAnim } = this.state;
    const {
      colorsPopUp,
      currentProduct,
      acColorsPopUp,
      acChangeColor,
      acUpdateGallery,
      acChangeGallery
    } = this.props;
    const height = fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 400]
    });

    return (
      <Animated.View style={[{
          ...this.props.style,
          height,
          opacity: fadeAnim,
          backgroundColor: 'rgba(255, 255, 255, 0.70)'
        }]}
      >
        <LinearGradient
          colors={[
            'rgba(0,133,178, 0.15)',
            'rgba(0,133,178, 0.08)',
            'rgba(0,133,178, 0)',
          ]}
          style={{
            position: 'absolute',
            height: 80,
            width: '100%',
          }}
        />
        <LinearGradient
          colors={[
            'rgba(0,133,178, 0)',
            'rgba(0,133,178, 0.10)',
            'rgba(0,133,178, 0.17)',
          ]}
          style={{
            position: 'absolute',
            marginTop: Platform.OS === 'web' ? 295 : 320,
            width: '100%',
            height: 105,
          }}
        />
        <View style={{
          flex: 1,
          flexDirection: 'row',
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 10,
          elevation: 6
        }}
        >
          {/* Box do lado esquerdo */}
          <Gallery
            colorsPopUp={colorsPopUp}
            currentProduct={currentProduct}
            acColorsPopUp={acColorsPopUp}
            acChangeColor={acChangeColor}
            acUpdateGallery={acUpdateGallery}
            acChangeGallery={acChangeGallery}
          />

          {/* Box do lado direito */}
          <Tab currentProduct={currentProduct} />
        </View>
      </Animated.View>
    );
  }
}

export default DetailProduct;