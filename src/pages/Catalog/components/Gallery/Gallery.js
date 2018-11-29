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
    const gota = colorsPopUp ? [styles.iconChecked, { fontSize: 20, marginTop: 15 }] : { color: 'rgba(0,0,0,0.3)', fontSize: 20, marginTop: 15 };
    return (
      <View style={{ flex: 1 }}>
        {
          // O correto será activeColor.gallery.map (Uma galeria de fotos por cor)
         currentProduct.gallery.map(
            ({ key, url, selected }) => {
              if (selected) {
                return (
                  <Fade key={key} visible >
                    <ImageBackground
                      source={{ uri: url }}
                      style={{ height: 400 }}
                      resizeMode="contain"
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
            bottom: 0,
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
            bottom: 30,
          }}
        >
          <View style={{ paddingLeft: 20, paddingBottom: 5 }}>
            <Text style={styles.tag1Giro}>NOVO</Text>
          </View>
          <View style={{ paddingLeft: 20 }}>
            <Text style={styles.tag2Giro}>1 GIRO</Text>
          </View>
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