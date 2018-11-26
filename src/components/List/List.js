import React from 'react';
import { FlatList } from 'react-native';
import { array, bool, element, string, object, oneOfType, number } from 'prop-types';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.pagination = this.pagination.bind(this);
  }
  componentWillMount() {
    if (this.state.data.length === 0) this.initialData(this.props.initialNumToRender);
  }
  componentDidUpdate(nextProps) {
    if (this.props.data !== nextProps.data) this.initialData(this.props.initialNumToRender);
  }
  render() {
    const {
      itemsPerPage,
      horizontal,
      style,
      itemKey,
      isScrollVisible
    } = this.props;
    // console.log('RENDERED ITEMS', this.state.data.length);
    return (
      <FlatList
        style={style}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={isScrollVisible}
        data={this.state.data}
        renderItem={({ item }) => this._renderItem(item)}
        keyExtractor={(item) => item[itemKey]}
        onEndReachedThreshold={0.1}
        onEndReached={() => this.pagination(itemsPerPage)}
        onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
      />
    );
  }

  initialData(initialNumToRender) {
    const data = [];
    this.props.data.forEach((element, index) => {
      if (index <= initialNumToRender - 1) {
        data.push(element);
      }
    });
    // console.log('INITIAL LENGTH', data.length);
    this.setState({ data });
  }

  pagination(itemsPerPage) {
    const { data } = this.props;

    if (this.state.data.length !== data.length) {
      const listSize = this.state.data.length;
      const newList = [...this.state.data];
      let addedItems = 0;

      for (let position = newList.length; position < data.length; position += 1) {
        if (addedItems < itemsPerPage && newList.length < data.length) {
          addedItems += 1;
          newList.push(data[position]);
        }
      }
      // console.log('ADDED ELEMENTS', addedItems, !this.onEndReachedCalledDuringMomentum);
      if (newList.length !== listSize) {
        // console.log('TOTAL  ELEMENTS ADDED ', newList.length);
        this.onEndReachedCalledDuringMomentum = true;
        this.setState({ data: newList });
      }
    }
  }

  _renderItem(item) {
    const { actions, row } = this.props;
    const itemWithActions = addActions(actions, item);
    const itemWithProps = React.cloneElement(row, { ...itemWithActions });

    return itemWithProps;
  }
}

export default List;

const addActions = (actions, item) => {
  const newItem = { ...item };
  if (actions === undefined) {
    return item;
  }
  actions.forEach(({ func, propName }) => { newItem[propName] = func; });
  return newItem;
};


List.propTypes = {
  // Dados da lista
  data: array.isRequired,
  // Orientação da lista
  horizontal: bool,
  // Componente linha a ser renderizado
  // Props que desejar descer devem estar dentro do data
  // O nome das props recebidas pelo com componente row devem ser os mesmo das propriedades do item do data
  row: element.isRequired,
  // Possíveis actions que possuir dentro de cada <Row>
  actions: array,
  // Número de items que serão renderizador a cada vez que chegar no fim da lista, pagination() funcionando como loadMoar()
  itemsPerPage: number,
  initialNumToRender: number,
  // Nome da propriedade do objeto que será Key(indentificador único para performance) usada na lista
  itemKey: string,
  // Estilo da FlatList
  // *Importante*
  //  passar um maxHeight para a lista saber quando deve ativar o scroll
  style: oneOfType([array, object, number])
  // Problema conhecido e está ocorrendo: onEndReached called twice
  // Este componente não aceita Actions com parâmetros
};