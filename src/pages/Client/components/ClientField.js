import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font } from '../../../assets/fonts/font_names';

const ClientField = ({
  msg, label, vwLabel,
  vwText, styleText,
  container
}) => (
  <View style={container}>
    <View style={vwLabel}>
      <Text style={styles.lblClient}>{label}</Text>
    </View>
    <View style={[vwText, { flex: 1, marginTop: -1 }]}>
      <Text style={[styles.txtClient, styleText]}>{msg}</Text>
    </View>
  </View>
);

export default ClientField;

const styles = StyleSheet.create({
  lblClient: {
    fontFamily: Font.ASemiBold,
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.9)'
  },
  txtClient: {
    fontFamily: Font.ALight,
    fontSize: 15,
    color: 'black',
  }
});