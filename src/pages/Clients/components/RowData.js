import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Font } from '../../../assets/fonts/font_names';
import { Row } from '../../../components';

class RowData extends React.Component {
  render() {
    return (
      <View>
        <Row style={styles.row}>
          <View style={{ flexDirection: 'row', flex: 1.1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ height: 30, width: 30, backgroundColor: 'grey', marginRight: 20 }} />
            <Text style={styles.txt}>{this.props.code}</Text>
          </View>
          <ColumnData
            view={{ flex: 1 }}
            txtStyle={[styles.txt, { color: '#535456', fontFamily: Font.ASemiBold }]}
            txt={this.props.client}
          />
          <ColumnData
            view={{ flex: 1 }}
            txtStyle={styles.txt}
            txt={this.props.sector}
          />
          <ColumnData
            view={{ flex: 1 }}
            txtStyle={styles.txt}
            txt={this.props.status}
          />
          <ColumnData
            view={{ flex: 1 }}
            txtStyle={[styles.txt, { fontFamily: Font.C, fontSize: 25 }]}
            txt={decideIcon(this.props.punctual)}
          />
          <ColumnData
            view={{ flex: 1 }}
            txtStyle={[styles.txt, { fontFamily: Font.C, fontSize: 25 }]}
            txt={decideIcon(this.props.encarte)}
          />
        </Row>
      </View>
    );
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.index !== nextProps.index) {
      return true;
    }
    return false;
  }
}

export default RowData;

const ColumnData = props => {
  return (
    <View style={[props.view, { alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center' }]}>
      <Text style={props.txtStyle}>{props.txt}</Text>
    </View>
  );
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

let styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    fontFamily: Font.AMedium,
  },
  separator: {
    backgroundColor: 'rgba(211, 216, 222, 0.8)',
    height: 2,
  },
  row: {
    alignItems: 'center',
    height: 40,
    width: '100%'
  }
});

if (Platform.OS === 'web') {
  styles = {
    ...styles,
    separator: {
      ...styles.separator,
      width: 1800
    },
    row: {
      ...styles.row,
      minWidth: 1800
    }
  };
}