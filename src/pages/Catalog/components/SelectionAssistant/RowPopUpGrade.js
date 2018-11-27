import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import global from '../../../../assets/styles/global';
import { CheckBox } from '../../../../components';
import { Font } from '../../../../assets/fonts/font_names';

class RowPopUpGrade extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.grade.isChosen !== nextProps.grade.isChosen) {
      return true;
    }
    return false;
  }
  render() {
    const { grade, headerSize } = this.props;
    const columns = grade.sizes.map((size, index) => <ColumnValues key={index.toString()} quantity={size.quantity} />);
    let index = grade.sizes.length - 1;
    while (columns.length < headerSize - 1) {
      index += 1;
      columns.push(
        <View key={index.toString()} style={[global.containerCenter, { width: 70, maxWidth: 70 }]} />
      );
    }

    return (
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <View style={styles.txtGrade}>
          <View style={[global.containerCenter, { width: 70 }]}>
            <Text style={{ fontFamily: Font.ASemiBold, color: 'rgba(0, 0, 0, 0.6)', width: 85, textAlign: 'center' }}>12</Text>
          </View>
          {columns}
        </View>
      </View>
    );
  }
}

export default RowPopUpGrade;

const styles = StyleSheet.create({
  txtGrade: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(120, 120, 120, 0.2)',
    height: 35,
  }
});

const ColumnValues = ({ quantity }) => (
  <View style={[global.containerCenter, { width: 70 }]}>
    <Text style={{ fontFamily: Font.ALight, color: 'rgba(0, 0, 0, 0.6)', textAlign: 'center' }}>{quantity}</Text>
  </View>
);