import React from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import { Button } from '../../../components';
import { Font } from '../../../assets/fonts/font_names';
import Row from './RowDropDownView';
class DropDownView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartName: '',
    };
  }

  render() {
    const {
      options, vwStyle, isVisible,
      acOpenCloseDropDown, acCurrentDropDown,
      acSaveCart, acDeleteCart
    } = this.props;

    if (isVisible) {
      return (
        <View style={[styles.vwStyle, vwStyle]}>
          <FlatList
            style={{ height: 130 }}
            data={options}
            numColumns={1}
            renderItem={({ item }) => (
              <Row
                item={item}
                acOpenCloseDropDown={acOpenCloseDropDown}
                acCurrentDropDown={acCurrentDropDown}
                acDeleteCart={acDeleteCart}
              />
            )}
            keyExtractor={(item) => item.name}
          />
          <View style={styles.footer}>
            <View style={{ flex: 3, justifyContent: 'center', paddingLeft: 8 }}>
              <TextInput
                style={styles.txtInput}
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.setState({ cartName: text })}
                value={this.state.cartName}
              />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Button
                txtMsg="N"
                txtStyle={{
                  fontFamily: Font.C,
                  fontSize: 20,
                  color: 'rgba(0, 0, 0, 0.3)',
                }}
                action={acSaveCart}
                params={[{ name: this.state.cartName, products: [] }]}
              />
            </View>
          </View>
        </View>
      );
    }

    return null;
  }
}

export default DropDownView;

const styles = StyleSheet.create({
  vwStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  txtInput: {
    fontFamily: Font.ALight,
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#999',
    backgroundColor: 'white'
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
    paddingTop: 10,
    paddingBottom: 10
  },
});