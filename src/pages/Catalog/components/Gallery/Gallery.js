import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../../../../assets/styles/global';
import { Fade } from '../../../../components';
import { Colors } from '..';

class Gallery extends React.Component {
  render() {
    const {
      colorsPopUp,
      currentProduct,
      acColorsPopUp,
      acChangeColor,
      acUpdateGallery,
      acChangeGallery
    } = this.props;
    const gota = colorsPopUp ? [styles.iconChecked, { fontSize: 25, marginTop: 15 }] : { color: 'rgba(0,0,0,0.3)', fontSize: 25, marginTop: 15 };
    return (
      <View style={{ flex: 1 }}>
        {
          // O correto será activeColor.gallery.map (Uma galeria de fotos por cor)
         currentProduct.gallery.map(
            ({ key, url, selected }) => {
              if (selected) {
                return (
                  <Fade
                    style={{ padding: 15 }}
                    key={key}
                    visible
                  >
                    <ImageBackground
                      source={{ uri: url }}
                      style={{ height: 310 }}

                    />
                  </Fade>
                );
              }
            }
          )
        }
        <View style={{
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 6,
            right: '35%',
            padding: 10,
          }}
        >
          {
            currentProduct.gallery.map((item) => {
              return (
                <TouchableOpacity
                  style={{ height: 16, width: 16, borderRadius: 15, backgroundColor: '#999', margin: 6 }}
                  key={item.key}
                  onPress={() => acUpdateGallery(item.key)}
                />
              );
            })
          }
        </View>
        <View style={{
            position: 'absolute',
            bottom: 15,
          }}
        >
          <View style={{ flexDirection: 'row', paddingLeft: 20 }}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ alignItems: 'center' }}
              onPress={() => acColorsPopUp()}
            >
              <Text style={[styles.iconGota, gota]}>y</Text>
              <Text style={[styles.lbNCores, { color: 'rgba(0,0,0,0.3)', fontSize: 15, }]}>{currentProduct.colorsLength} CORES</Text>
            </TouchableOpacity>
            <Colors
              visible={colorsPopUp}
              currentProduct={currentProduct}
              acColorsPopUp={acColorsPopUp}
              acChangeColor={acChangeColor}
              acChangeGallery={acChangeGallery}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Gallery;