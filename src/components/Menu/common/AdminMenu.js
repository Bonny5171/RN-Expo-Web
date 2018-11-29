import React from 'react';
import { View, StyleSheet, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import { companyIcon } from '../../../assets/imgs';
import { Button, Row } from '../..';
import global from '../../../assets/styles/global';
const { height } = Dimensions.get('window');

class AdminMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.iconsValues = [
      {
        key: 0,
        name: 'dashboard',
        txtMsg: '9',
        txtStyle: global.menuIcon
      },
      {
        key: 1,
        name: 'assistant',
        txtMsg: '0',
        txtStyle: global.menuIcon
      },
      {
        key: 2,
        name: 'price',
        txtMsg: 'a',
        txtStyle: global.menuIcon
      },
      {
        key: 3,
        name: 'orders',
        txtMsg: '5',
        txtStyle: global.menuIcon
      },
      {
        key: 4,
        name: 'campaigns',
        txtMsg: 'b',
        txtStyle: global.menuIcon
      },
      {
        key: 5,
        name: 'clients',
        txtMsg: '4',
        txtStyle: global.menuIcon
      },
    ]
  }
  render() {
    const {
      container,
      admin,
      navigation,
      acUpdateContext,
      acResetNavigation,
      acUpdateButtons,
      acResetSubMenu,
    } = this.props;

    const icons = this.iconsValues.map((curr) => {
      // Se o botão estiver ativo, ele não deve navegar
      const func = !admin[curr.key].isChosen ? navigation.navigate : () => null;
      const button = (
        <Button
          turnOffOpacity
          key={curr.key}
          txtMsg={curr.txtMsg}
          tchbStyle={{ marginTop: 15 }}
          txtStyle={global.menuIcon}
          shadow
          rdAction={acUpdateButtons}
          rdType="admin"
          rdName={curr.name}
          action={acResetSubMenu}
          isChosen={admin[curr.key].isChosen}
          actions={[
            { func , params: [curr.name]}
          ]}
          changeColor
          chosenColor="#0085B2"
          nChosenColor="rgba(0,0,0,0.3)"
        />
      );
      if (curr.name === 'orders' || curr.name === 'clients') {
        return (
          <Row key={curr.key}>
            {button}
            <Text style={[global.menuIcon, { position: 'absolute', color: admin[curr.key].isChosen ? '#0085B2' : '#999', fontSize: 18, marginLeft: 45, marginTop: 29 }]}>K</Text>
          </Row>
        );
      }
      return button;
    });

    return (
      <View style={container}>
        <View style={{ height }}>
          {/* Header */}
          <View style={{ flex: 0.5 }} >
            <Button
              turnOffOpacity
              txtMsg="8"
              tchbStyle={{ marginTop: 27 }}
              txtStyle={[global.menuIcon, { color: '#5473AA', fontSize: 47 }]}
            />
          </View>
          {/* Body */}
          <View style={styles.body} >
            {icons}
          </View>
          {/* Footer */}
          <View style={{ flex: 0.5, alignItems: 'center' }}>
            <TouchableOpacity
              style={{ marginTop: 30 }}
              onPress={() => {
                navigation.navigate('catalog');
                acUpdateContext('Vendedor');
                acResetNavigation('admin');
              }}
            >
              <Image style={{ height: 40, width: 40 }}source={companyIcon} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default AdminMenu;

const styles = StyleSheet.create({
  body: {
    flex: 3,
    alignItems: 'center',
  }
});
