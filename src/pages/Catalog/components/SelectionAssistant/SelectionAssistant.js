import React from 'react';
import { Text, View, StyleSheet, Platform, ScrollView } from 'react-native';
import global from '../../../../assets/styles/global';
import { Fade, IconActionless, DropDown, Button } from '../../../../components';
import { DropDownView } from '..';
import { Left, Right } from '.';
import { Font } from '../../../../assets/fonts/font_names';

class SelectionAssistant extends React.Component {
  componentDidMount() {
    const { stores, client, acAddStore } = this.props;
    if (stores.length !== client.stores.length) {
      acAddStore(client.stores);
    }
  }
  render() {
    const {
      visible,
      product,
      carts,
      dropdown,
      selectedCart,
      currentGrade,
      acSaveCart,
      acDeleteCart,
      acSelectedCartDropDown,
      acCurrentDropDown,
      acClosePopUp,
      acOpenCloseAssistant,
      acAssistant,
    } = this.props;

    const dropDownWidth = 220;
    const columns = [];

    currentGrade.sizes.forEach(({ value, quantity }) => {
      columns.push(<Column key={value} header={value} value={quantity} />);
    });

    return (
      <Fade style={styles.container} visible={visible}>
        <View style={styles.header}>
          <Text style={[global.h3, { marginLeft: 25 }]}>SELEÇÃO PARA O CARRINHO</Text>
          <IconActionless style={{ marginLeft: 15, fontSize: 27, color: 'rgba(0, 0, 0, 0.3)' }} msg="p" />
          <DropDown
            vwDropDown={{ marginLeft: 15, width: dropDownWidth, height: 30 }}
            current={dropdown.current}
            acOpenCloseDropDown={acSelectedCartDropDown}
            params={[]}
          />
          <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 25 }}>
            <Button
              tchbStyle={{ marginTop: 0 }}
              txtStyle={global.iconClose}
              txtMsg="t"
              actions={[
                { func: acAssistant, params: [{ colors: product.colors }] },
                { func: acClosePopUp, params: [] },
                {
                  // Fecha o dropdown caso ele esteja visível
                  func: selectedCart.isVisible ? acOpenCloseAssistant : () => null,
                  params: []
                }
              ]}
            />
          </View>
        </View>
        <View style={styles.body}>
          {/* Lado esquerdo */}
          <Left product={product} />
          {/* Lado Direito */}
          <Right
            cart={selectedCart.current}
            {...this.props}
          />
        </View>
        {/* Grade atual */}
        <View style={{ position: 'absolute', maxHeight: 45, marginTop: Platform.OS === 'web' ? 935 : 705, marginLeft: 10 }}>
          <View style={styles.currentGrade}>
            <Column
              header="GRADE"
              value={currentGrade.name}
            />
            <Column
              header="PARES"
              value={currentGrade.pairs}
            />
            <ScrollView
              style={{ width: 250 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {columns}
            </ScrollView>
          </View>
        </View>
        <Fade
          visible={selectedCart.isVisible}
          style={
            {
              position: 'absolute',
              elevation: 3,
              marginLeft: 400,
              marginTop: 55,
            }
          }
        >
          <DropDownView
            vwStyle={{ width: dropDownWidth }}
            isVisible
            options={carts}
            acCurrentDropDown={acCurrentDropDown}
            acOpenCloseDropDown={acSelectedCartDropDown}
            acSaveCart={acSaveCart}
            acDeleteCart={acDeleteCart}
          />
        </Fade>
      </Fade>
    );
  }
}


export default SelectionAssistant;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.95)'
  },
  header: {
    height: 85,
    flexDirection: 'row',
    alignItems: 'center'
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  currentGrade: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#EEE',
    elevation: 3,
    shadowColor: 'grey',
    shadowOffset: { height: 2, width: 2 },
    shadowRadius: 15,
    borderRadius: 10,
    marginRight: 15,
    paddingLeft: 10,
    paddingRight: 10
  }
});

const Column = ({ header, value }) => (
  <View style={{ padding: 4, paddingLeft: 15, paddingRight: 15 }}>
    <View style={global.containerCenter}>
      <Text style={[global.columnHeader, { fontFamily: Font.ASemiBold, fontSize: 12 }]}>{header}</Text>
    </View>
    <View style={global.containerCenter}>
      <Text style={[global.columnValue, { fontSize: 13 }]}>{value === '' ? '-' : value}</Text>
    </View>
  </View>
);