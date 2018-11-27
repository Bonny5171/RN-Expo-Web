import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Fade, List, IconActionless } from '../../../components';

class Colors extends React.PureComponent {
  render() {
    const {
      visible,
      currentProduct,
      acColorsPopUp,
      acChangeColor,
      acChangeGallery
    } = this.props;

    return (
      <Fade
        style={styles.container}
        visible={visible}
        duration={400}
      >
        <List
          style={{ width: 377 }}
          horizontal
          isScrollVisible={false}
          data={currentProduct.colors}
          itemsPerPage={6}
          initialNumToRender={6}
          actions={[
            {
              func: acChangeColor,
              propName: 'acChangeColor'
            },
            {
              func: acColorsPopUp,
              propName: 'acColorsPopUp'
            },
            {
              func: acChangeGallery,
              propName: 'acChangeGallery'
            }
          ]}
          row={<Color />}
          itemKey="name"
        />
      </Fade>
    );
  }
}

export default Colors;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    marginLeft: 94,
    marginTop: 11,
    width: 377
  },
  color: {
    justifyContent: 'center',
    height: 44,
    backgroundColor: '#DDD',
    opacity: 0.8,
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 3
  },
  activeColor: {
    justifyContent: 'center',
    height: 50,
    padding: 5,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#AAA',
    paddingLeft: 10,
    paddingRight: 10
  },
  img: {
    width: 40,
    height: 40
  }
});

const Color = ({
  name,
  newColor,
  isShowing,
  uri,
  acChangeColor,
  acColorsPopUp,
  acChangeGallery
}) => (
  <View style={isShowing ? styles.activeColor : styles.color}>
    <TouchableOpacity
      onPress={() => {
        acChangeColor(name);
        acChangeGallery(name);
        acColorsPopUp();
      }}
    >
      <ImageBackground
        source={{ uri }}
        style={styles.img}
        resizeMode="contain"
      />
      {
        newColor ?
          <IconActionless
            style={{ position: 'absolute', alignSelf: 'flex-end', color: 'green' }}
            msg="_"
          />
        :
        null
      }
    </TouchableOpacity>
  </View>
);