import React from 'react';
import { View, FlatList, StyleSheet, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Font } from '../../../assets/fonts/font_names';
import { Button } from '../../../components';
import { SortCode } from '.';
import RowData from './RowData';

const DetailedList = ({
 acUpdateComponent, data, loadMore, sort
}) => (
  <View style={styles.container}>
    <View style={{ flex: 0.75, marginTop: 10 }}>
      <LinearGradient
        colors={['rgb(211, 216, 222)', 'rgba(211, 216, 222, 0.7)', 'rgba(211, 216, 222, 0.7)']}
        style={{ justifyContent: 'center', flex: 1 }}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.header}>
          <SortCode
            sort={sort}
            style={styles.txt}
            tView={styles.tView}
            acUpdateComponent={acUpdateComponent}
          />
          <Button
            tchbStyle={styles.column}
            txtStyle={[styles.txt, styles.client]}
            txtMsg="CLIENTE"
            changeColor
            isChosen={sort[2].isChosen}
            chosenColor="black"
            nChosenColor="#999"
            rdAction={acUpdateComponent}
            rdName="sortCliente"
            rdType="sort"
          />
          <Button
            tchbStyle={styles.column}
            txtStyle={styles.txt}
            txtMsg="SETOR"
            changeColor
            isChosen={sort[3].isChosen}
            chosenColor="black"
            nChosenColor="#999"
            rdAction={acUpdateComponent}
            rdName="sortSetor"
            rdType="sort"
          />
          <Button
            tchbStyle={styles.column}
            txtStyle={[styles.txt, styles.status]}
            txtMsg="STATUS"
            changeColor
            isChosen={sort[4].isChosen}
            chosenColor="black"
            nChosenColor="#999"
            rdAction={acUpdateComponent}
            rdName="sortStatus"
            rdType="sort"
          />
          <Button
            tchbStyle={styles.column}
            txtStyle={[styles.txt, styles.punctual]}
            txtMsg="PONTUAL."
            changeColor
            isChosen={sort[5].isChosen}
            chosenColor="black"
            nChosenColor="#999"
            rdAction={acUpdateComponent}
            rdName="sortPontual"
            rdType="sort"
          />
          <Button
            tchbStyle={styles.column}
            txtStyle={[styles.txt, styles.encarte]}
            txtMsg="ENCARTE"
            changeColor
            isChosen={sort[6].isChosen}
            chosenColor="black"
            nChosenColor="#999"
            rdAction={acUpdateComponent}
            rdName="sortEncarte"
            rdType="sort"
          />
          <View style={{ flex: 0.02 }} />
        </View>
      </LinearGradient>
    </View>
    <View style={{ backgroundColor: '#F0F4F7', flex: 10 }} opacity={0.85}>
      <FlatList
        scrollEnabled
        onEndReachedThreshold={0.8}
        onEndReached={() => loadMore()}
        data={data}
        ItemSeparatorComponent={_renderItemSeparator}
        renderItem={({ item, index }) => {
            return (
              <RowData
                index={index}
                code={item.code}
                client={item.client}
                sector={item.sector}
                status={item.situation}
                punctual={item.punctual}
                encarte={item.encarte}
              />
            );
          }
        }
      />
    </View>
  </View>
);

const _renderItemSeparator = () => (<View style={styles.separator} />);

export default DetailedList;

let styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 75,
  },
  txt: {
    fontSize: 14,
    fontFamily: Font.AMedium,
  },
  column: {
    flex: 1,
    alignItems: 'center'
  },
  separator: {
    backgroundColor: 'rgba(211, 216, 222, 0.8)',
    width: 1800,
    height: 2,
  }
});

if (Platform.OS === 'web') {
  styles = {
    ...styles,
    container: {
      height: 800,
    }
  };
}