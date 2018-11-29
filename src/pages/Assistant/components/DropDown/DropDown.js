import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { bool, array, func } from 'prop-types';
import { Fade } from '../../../../components';
import global from '../../../../assets/styles/global';
import Item from './Item';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      lastIndex: -1,
    };
    this.onRowClick = this.onRowClick.bind(this);
  }

  componentDidMount() {
    if (this.state.list.length === 0) {
      this.pagination(this.state.list, this.props.data, 10);
    }
  }

  render() {
    const {
      dropdown,
      data,
      inputClient,
    } = this.props;

    return (
      <Fade
        style={styles.container}
        visible={dropdown && inputClient !== ''}
        duration={450}
      >
        <FlatList
          style={styles.list}
          data={this.state.list}
          keyExtractor={(item) => item.fantasyName}
          onEndReachedThreshold={0.01}
          onEndReached={() => {
            if (this.state.list.length < this.props.data.length) {
              this.pagination(this.state.list, this.props.data, 10);
            }
          }}
          renderItem={({ item }) => (
            <Item item={item} onRowClick={this.onRowClick} />
          )}
        />
      </Fade>
    );
  }

  onRowClick(item) {
    const {
      setInput,
      acCurrentClient,
      acLoadStores,
      acToggleDropdown
    } = this.props;

    acCurrentClient(item);
    acLoadStores(item.stores);
    acToggleDropdown();
    setInput(item.fantasyName);
  }

  pagination(list, data, pagination) {
    const newList = [...list];
    let addedItems = 0;
    data.forEach((curr, index) => {
      // Só adiciona na nova lista caso seja um dado não adicionado anteriormente e seja menor que o número de paginação
      if (index > this.state.lastIndex && addedItems < pagination) {
        newList.push(curr);
        addedItems += 1;
        // Adiciona o ultimo elemento do data
      } else if (newList.length === data.length - 1) newList.push(this.state.lastIndex);
    });
    // Salva a posição do ultimo item adicionado
    const newIndex = newList.length - 1;
    this.setState({ list: newList, lastIndex: newIndex });
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#F3F4F6',
    marginTop: 73,
    width: 600,
    borderWidth: 1,
    borderBottomEndRadius: 4,
    borderColor: '#999',
    borderTopWidth: 0,
  },
  list: { height: 200 }
});

export default DropDown;

DropDown.propTypes = {
  dropdown: bool,
  data: array,
  acCurrentClient: func,
  acLoadStores: func,
  acToggleDropdown: func
};