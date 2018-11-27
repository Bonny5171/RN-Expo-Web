import React from 'react';
import { LinearGradient } from 'expo';
import { View, Text, FlatList, Platform, Animated } from 'react-native';
import global from '../../../assets/styles/global';
import { Fade } from '../../../components';
import Row from './RowCartSummary';

class ListCartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shadow: false,
      scrolling: false,
      offset: new Animated.Value(0),
    };
  }

  componentWillMount() {
    this.state.offset.addListener(({ value }) => { this._value = value; });
  }

  scrollingUp(event) {
    const currentOffset = new Animated.Value(event.nativeEvent.contentOffset.y);
    currentOffset.addListener(({ value }) => { this._value = value; });
    const scrollingUp = currentOffset._value > this.state.offset._value;

    if (scrollingUp && this.state.scrolling) {
      this.setState({ offset: currentOffset, shadow: true });
    } else {
      this.setState({ offset: currentOffset });
    }
  }

  render() {
    const {
      data,
      height,
      headerHeight,
      acRemoveCartProduct,
      headerColumns
    } = this.props;
    let maxHeight = {};
    if (Platform.OS !== 'web') {
      // Definição de uma altura máxima para podermos efetuar o scroll na view do mobile funcionar corretamente
      maxHeight = { maxHeight: height - headerHeight };
    }

    return (
      <View style={[
        {
          flex: 1,
          justifyContent: 'center',
          minHeight: 100,
          padding: 20,
          paddingBottom: 0
        }, maxHeight]}
      >
        <Header columns={headerColumns} shadow={this.state.shadow} />
        <FlatList
          data={data}
          onScroll={(event) => this.scrollingUp(event)}
          onScrollBeginDrag={() => this.setState({ scrolling: true })}
          onScrollEndDrag={() => this.setState({ scrolling: false, shadow: false })}
          renderItem={({ item }) => <Row {...item} acRemoveCartProduct={acRemoveCartProduct} />}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

export default ListCartSummary;

const Header = ({ columns, shadow }) => {
  return (
    <View>
      <View style={{
          flexDirection: 'row',
          borderBottomWidth: 0.75,
          borderBottomColor: '#EEE',
          paddingLeft: 15
        }}
      >
        {/* 1st column */}
        <View style={{ flex: 3, maxWidth: 317 }}>
          <Text style={global.columnHeader}>{columns[0]}</Text>
        </View>
        {/* 2nd column */}
        <View style={{ flex: 1, maxWidth: 80, alignItems: 'center' }}>
          <Text style={global.columnHeader}>{columns[1]}</Text>
        </View>
        {/* 3rd column */}
        <View style={{ flex: 1, maxWidth: 95, alignItems: 'center' }}>
          <Text style={global.columnHeader}>{columns[2]}</Text>
        </View>
        {/* 4th column */}
        <View style={{ flex: 1, maxWidth: 55, alignItems: 'center' }}>
          <Text style={global.columnHeader}>{columns[3]}</Text>
        </View>
        {/* 5th column */}
        <View style={{ flex: 1, maxWidth: 80, alignItems: 'center' }}>
          <Text style={global.columnHeader}>{columns[4]}</Text>
        </View>
        {/* 6th column */}
        <View style={{ flex: 1, maxWidth: 95, alignItems: 'center' }}>
          <Text style={global.columnHeader}>{columns[5]}</Text>
        </View>
      </View>
      <Fade visible={shadow} duration={150} style={{ position: 'absolute', width: '100%', marginTop: 20 }}>
        <LinearGradient
          style={{ height: 10, width: '100%' }}
          colors={['rgba(0, 0, 0, 0.15)', 'rgba(0, 0, 0, 0.10)', 'rgba(0, 0, 0, 0)']}
        />
      </Fade>
    </View>
  );
};