import React from 'react';
import { View, Text } from 'react-native';

export default ({
  percent,
  indeterminate,
  color
}) => (
  <View style={{ backgroundColor: 'transparent', marginTop: 20 }}>
    <Text>
      {percent}
    </Text>
  </View>
);
