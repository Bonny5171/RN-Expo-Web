import React from 'react';
import { Text, View } from 'react-native';
import { string } from 'prop-types';

import { IconActionless } from '../../../components';
import { Font } from '../../../assets/fonts/font_names';

class Attribute extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { type, grade } = this.props;

    if (type === nextProps.type && grade === nextProps.grade) {
      return false;
    }

    return true;
  }
  render() {
    const { type, grade } = this.props;
    return (
      <View style={{ height: 200, width: 200, alignItems: 'center' }}>
        {/* Label */}
        <Text style={{ fontFamily: Font.AMedium, fontSize: 11, color: 'black' }}>{type}</Text>
        {/* Icon */}
        <View style={{ flex: 0.5, justifyContent: 'center' }}>
          <IconActionless msg={decideIcon(grade)} style={{ fontSize: 70, color: '#0983AE' }} />
        </View>
        {/* Grade */}
        <Text style={{ fontFamily: Font.ARegular, fontSize: 16, color: 'black' }}>{grade}</Text>
      </View>
    );
  }
}

export default Attribute;

Attribute.propTypes = {
  // Tipo de atributo avaliado
  type: string,
  // Nota (BOM, REGULAR, RUIM)
  grade: string
};

const decideIcon = (grade) => {
  // O retorno dos caracteres são os respectivos icones
  // para um icone de rosto feliz, regular e triste.
  switch (grade) {
    case 'RUIM': {
      return 'F';
    }
    case 'BOM': {
      return 'D';
    }
    default:
      // Regular
      return 'E';
  }
};