import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../../assets/styles/global';
import { Product, DetailProduct } from './';

const Row = props => (
  <View style={{ paddingLeft: 20 }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 35, paddingLeft: 5 }}>
      <Text style={styles.grupoDestaque}>
        {props.exhibition}
      </Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        props.products.map(
          item => (
            <Product
              {...item}
              {...props}
              key={item.key}
              keyProduct={item.key}
            />
          )
        )
      }
    </ScrollView>
    {
      props.ponteiroProduto[0] === props.keyDestaque &&
      <DetailProduct {...props} />
    }
  </View>
);

export default Row;