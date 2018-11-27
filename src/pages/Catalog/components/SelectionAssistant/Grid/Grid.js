import React from 'react';
import { View, Platform } from 'react-native';
import Input from './Input';
import { first } from '../functions';

class Grid extends React.Component {
  componentDidMount() {
    if (!this.props.startingGrid) {
      this.props.acStartingGrid();
    }
  }

  shouldComponentUpdate(nextProps) {
    const { product, grades } = this.props;
    if (grades !== nextProps.grades) {
      return true;
    }
    if (product.colors !== nextProps.product.colors) {
      return true;
    }
    let isModified = false;
    isModified = product.colors.some((color, indexColor) => {
      isModified = color.grades.some((curr, indexGrade) => curr.quantity !== nextProps.product.colors[indexColor].grades[indexGrade].quantity);
      if (isModified) {
        return true;
      }
    });
    if (isModified) {
      return true;
    }
    return false;
  }

  render() {
    const grid = [];
    this._updateGrid(grid);
    return grid;
  }

  _updateGrid(grid) {
    const {
      product,
      stores,
      grades,
      acTextGrade,
      acCurrentGrade,
      acCurrentColor
    } = this.props;

    let height = Platform.OS === 'web' ? 24 : 32;

    if (stores.length === 1) {
      height = 24;
    }
    // Componentes visuais
    product.colors.forEach((color, indexColor) => {
      if (color.isChosen) {
        // Adiciona X colunas de inputs para cada cor sendo exibida
        grid.push(
          <View key={color.name} style={{ marginLeft: first(product.colors) === color ? 8 : 16 }}>
            <View style={{ height }} />
            {
              // Linhas de acordo com Y grades exibidas
              grades.map((grade, indexGrade) => {
              if (grade.isChosen) {
                return (
                  <Input
                    key={`${indexGrade.toString()}${indexColor.toString()}`}
                    grade={grade}
                    grades={grades}
                    color={color}
                    product={product}
                    indexGrade={indexGrade}
                    indexColor={indexColor}
                    acTextGrade={acTextGrade}
                    acCurrentGrade={acCurrentGrade}
                    acCurrentColor={acCurrentColor}
                  />
                );
              }
                return null;
              })
            }
          </View>
        );
      }
    });
  }
}

export default Grid;