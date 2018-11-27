import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { IconActionless as IA } from '../../../../components';
import { Font } from '../../../../assets/fonts/font_names';
import AnimatedCircle from './AnimatedCircle';

class CopyToAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circlePosition: new Animated.Value(props.cloneColorsStores ? 14 : -14)
    };
  }
  render() {
    const { acCloneColorsStores, cloneColorsStores } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={() => {
          acCloneColorsStores();
          Animated.timing(this.state.circlePosition, {
            duration: 500,
            toValue: !cloneColorsStores ? 14 : -14
          }).start();
        }}
      >
        <Text style={[styles.txt, { color: '#999' }]}>N</Text>
        <Text style={[styles.txt, { color: cloneColorsStores ? '#0085B2' : '#999' }]}>S</Text>
        <AnimatedCircle cloneColorsStores={cloneColorsStores} circlePosition={this.state.circlePosition} />
      </TouchableOpacity>
    );
  }
}

export default CopyToAll;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgb(120, 120, 120)',
    width: 77,
    height: 40,
    marginLeft: 30
  },
  txt: {
    fontSize: 16,
    fontFamily: Font.AMedium
  },
});