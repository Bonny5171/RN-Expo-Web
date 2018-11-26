import React from 'react';
import { TouchableOpacity, View, FlatList, Text, StyleSheet } from 'react-native';
import { Font } from '../../assets/fonts/font_names';
// Componente não terminado
class DropDownView extends React.Component {
  render() {
    const {
      options, vwStyle, isVisible,
      dropDown, updateCurrent
    } = this.props;

    if (isVisible) {
      return (
        <View style={[styleDDV.vwStyle, vwStyle]}>
          <FlatList
            data={options}
            numColumns={1}
            renderItem={({ item }) => {
              return (
                <View style={styleDDV.list}>
                  <TouchableOpacity
                    onPress={() => {
                        if (isVisible) {
                          dropDown();
                          updateCurrent(item.name);
                        }
                      }
                    }
                  >
                    <Text style={styleDDV.item}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </View>
      );
    }

    return null;
  }
}

export default DropDownView;

const styleDDV = StyleSheet.create({
  vwStyle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    marginLeft: 294,
    marginTop: -10,
  },
  vwDDVSituation: {
    position: 'absolute',
    backgroundColor: '#E8E8E8',
    width: 270,
    borderWidth: 0.5,
    borderTopWidth: 0,
    marginLeft: 730,
    marginTop: 125,
  },
  vwDDVSector: {
    position: 'absolute',
    backgroundColor: '#E8E8E8',
    width: 469,
    borderWidth: 0.5,
    borderTopWidth: 0,
    marginLeft: 40,
    marginTop: 240,
  },
  list: {
    borderBottomColor: '#999',
  },
  item: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: Font.ALight,
    color: '#666'
  }
  });