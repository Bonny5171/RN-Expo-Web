import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Fade } from '../../../../components';

class ProductImage extends React.Component {
  constructor(props) {
    super(props);
    this.url = this.props.url;
  }
  render() {
    const { key } = this.props;
    return (
      <Fade key={key} visible >
        <ImageBackground
          source={this.url}
          style={styles.img}
          resizeMode="contain"
        />
      </Fade>
    );
  }
}

const styles = StyleSheet.create({
  img: { height: 400 }
});

export default ProductImage;