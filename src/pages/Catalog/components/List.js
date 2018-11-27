import React from 'react';
import { View, FlatList, Animated, StyleSheet } from 'react-native';
import { Row, FastSelection } from './';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class List extends React.Component {
  shouldComponentUpdate(nextProps) {
    const {
      resumoCar,
      carts,
      currentProduct,
      selectOpt,
      selectList,
      colorsPopUp,
      data
    } = this.props;
    if (resumoCar !== nextProps.resumoCar) return true;
    if (carts !== nextProps.carts) return true;
    if (selectOpt !== nextProps.selectOpt) return true;
    if (selectList !== nextProps.selectList) return true;
    if (colorsPopUp !== nextProps.colorsPopUp) return true;
    if (currentProduct !== nextProps.currentProduct) return true;
    if (data === nextProps.data) return false;
    return true;
  }

  getItemLayout = (data, index) => (
    { length: 280, offset: 280 * index, index }
  )

  scrollToIndex = (randomIndex) => {
    this.flatListRef.scrollToIndex({ animated: true, index: randomIndex });
  }

  render() {
    return (
      <View style={{ height: this.props.height }}>
        <FlatList
          ref={(ref) => { this.flatListRef = ref; }}
          getItemLayout={this.getItemLayout}
          style={styles.animateList}
          renderItem={({ item, index }) => (
            <Row
              keyDestaque={item.key}
              {...item}
              {...this.props}
              scrollToIndex={this.scrollToIndex}
              indexDestaque={index}
            />
          )}
          {...this.props}
        />
        <FastSelection {...this.props} />
      </View>
    );
  }
}

export default List;

const styles = StyleSheet.create(
  {
    animateList: {
      marginTop: 55,
    },
  }
);
