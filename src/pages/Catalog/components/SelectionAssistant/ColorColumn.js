import React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from '../../../../components';
import global from '../../../../assets/styles/global';

class ColorColumn extends React.Component {
  render() {
    const { color, acRemoveColor } = this.props;

    if (color.isChosen) {
      return (
        <View style={{ marginLeft: 3, marginRight: 3 }}>
          <Image
            style={{ height: 60, width: 80 }}
            source={require('../../../../assets/imgs/tenis.png')}
            resizeMode="cover"
          />
          <Text style={[global.text, { fontSize: 14, alignSelf: 'center' }]}>{color.name}</Text>
          <Button
            tchbStyle={{ position: 'absolute', marginLeft: 55, marginTop: 4 }}
            txtStyle={[global.iconClose, { fontSize: 19 }]}
            txtMsg="t"
            actions={[{ func: acRemoveColor, params: [color.name] }]}
          />
        </View>
      );
    }
    return null;
  }
}
export default ColorColumn;