import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { IconActionless } from '../../../components';
import global from '../../../assets/styles/global';

const width = Platform.OS === 'web' ? '98%' : '100%';

const Header = () => {
  return (
    <View
      style={[styles.container, { width }]}
    >
      <View style={styles.firstRow}>
        <View style={styles.flex2Center}>
          <Text style={[global.titlePagina, { marginTop: 0 }]}>ASSISTENTE </Text>
        </View>
        <View style={styles.scndRow}>
          <IconActionless style={[global.icon, { marginRight: 10 }]} msg="c" />
          <IconActionless style={[global.icon, { marginRight: 25 }]} msg="d" />
        </View>
      </View>
      <View style={styles.flex2Center}>
        <Text style={global.subHeader}>O Que você deseja fazer?</Text>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
container: {
  flex: 0.6
},
firstRow: {
  flex: 1,
  flexDirection: 'row',
  paddingTop: 20,
  width
},
scndRow: {
  flex: 1.5,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center'
},
flex2Center: {
  flex: 2,
  justifyContent: 'center'
}
});

