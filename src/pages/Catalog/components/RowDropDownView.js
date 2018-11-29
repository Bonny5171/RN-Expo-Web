import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Font } from '../../../assets/fonts/font_names';
import { Button } from '../../../components';

class Row extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.item.name === nextProps.item.name) {
      return false;
    }
    return true;
  }

  render() {
    const {
      item,
      acOpenCloseDropDown,
      acCurrentDropDown,
      acDeleteCart,
      eventHandler,
    } = this.props;

    return (
      <TouchableOpacity
        style={styles.view}
        onPress={() => {
            if (eventHandler) {
              eventHandler(item);
            }
            else {
              acOpenCloseDropDown();
              acCurrentDropDown(item);
            }
          }
        }
      >
        <Text style={[styles.item, {
          color: item.selected ? '#4F97B0' : '#4F97B0',
        }]}>{item.name}</Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {
            item.standard ?
              null
            :
              <Button
                txtMsg="w"
                txtStyle={styles.button}
                actions={[{ func: acDeleteCart, params: [item.name] }]}
              />
          }
        </View>
      </TouchableOpacity>
    );
  }
}

export default Row;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingRight: 0,
    paddingBottom: 5
  },
  button: {
    fontFamily: Font.C,
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.3)',
  },
  item: {
    flex: 3,
    fontSize: 15,
    fontFamily: Font.ALight,
    color: '#4F97B0',
  },
});