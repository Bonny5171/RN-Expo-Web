import React from 'react';
import { View, Text } from 'react-native';
// import * as Progress from 'react-native-progress';

export default ({
  percent,
  indeterminate,
  color
}) => (
  <View style={{ backgroundColor: 'transparent', marginTop: 20 }}>
    <Text>{percent}</Text>
    {/*<Progress.Bar
      progress={percent}
      width={130}
      indeterminate={indeterminate}
      color={color}
    />*/}
  </View>
);
