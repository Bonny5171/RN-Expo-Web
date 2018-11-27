import React from 'react';
import { TouchableOpacity, View, FlatList, Text, StyleSheet } from 'react-native';
import { Font } from '../../../assets/fonts/font_names';

class DropDownView extends React.Component {
  constructor(props) {
      super(props);
      this.data = props.options;
  }

  render() {
    return (
      <View style={this.props.vwStyle}>
        <FlatList
          data={this.data}
          numColumns={1}
          renderItem={({ item }) => {
            return (
              <View style={styleDDV.list}>
                <TouchableOpacity
                  onPress={() => {
                      if (this.props.isVisible) {
                        this.props.acUpdateComponent('dropdown', this.props.name);
                        this.props.acUpdateCurrent(this.props.name, item.option);
                      }
                    }
                  }
                >
                  <Text style={styleDDV.item}>{item.option}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default DropDownView;

const styleDDV = StyleSheet.create({
    vwDDVSituation: {
      position: 'absolute',
      backgroundColor: '#E8E8E8',
      marginLeft: 730,
      marginTop: 125,
      width: 270,
      borderWidth: 0.5,
      borderTopWidth: 0,
    },
    vwDDVSector: {
      position: 'absolute',
      backgroundColor: '#E8E8E8',
      marginLeft: 40,
      marginTop: 240,
      width: 469,
      borderWidth: 0.5,
      borderTopWidth: 0,
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