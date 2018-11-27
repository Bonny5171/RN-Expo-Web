import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { IconActionless as IA } from '../../../../components';
import { Font } from '../../../../assets/fonts/font_names';
class AnimatedCircle extends React.Component {
  render() {
    return (
      <Animated.View style={{ position: 'absolute', marginLeft: this.props.circlePosition }}>
        <IA
          msg="i"
          style={[
            styles.icon, this.props.cloneColorsStores ?
            styles.activeIcon : styles.inactiveIcon]}
        />
      </Animated.View>
    );
  }
}
export default AnimatedCircle;

const styles = StyleSheet.create({
  icon: {
    fontFamily: Font.C,
    fontSize: 32,
  },
  activeIcon: {
    color: '#0085B2',
    textShadowOffset: { width: 1, height: 2 },
    textShadowColor: '#0085B2',
    textShadowRadius: 12
  },
  inactiveIcon: {
    color: '#999',
  }
});