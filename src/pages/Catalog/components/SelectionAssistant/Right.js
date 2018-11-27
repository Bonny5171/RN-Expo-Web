import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Platform, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SimpleButton, Button, IconActionless as IA, Fade, CheckBox } from '../../../../components';
import { ColorColumn, Grid, CopyToAll } from '.';
import { Font } from '../../../../assets/fonts/font_names';
import global from '../../../../assets/styles/global';
import RowPopUpGrade from './RowPopUpGrade';
import { first } from './functions';

class Right extends React.Component {
  constructor(props) {
    super(props);

    // Flags que controlam se a View/List esta sendo movida
    // Quando ela esta sendo movida, ela nao entra em um if()
    // que possue o metodo para mover as outras
    this.gradeList = false;
    this.colorList = false;
    this.gridView = false;
    this.gradeList = false;

    // PopUp Grade
    this.gradesView = false;
    this.scrollView = false;
  }

  shouldComponentUpdate(nextProps) {
    const { grades, product, assistantPopUps, stores, cloneColorsStores } = this.props;
    let isModified = false;
    // Verifica se a visibilidade mudou
    isModified = isChosenEqual(grades, nextProps.grades);

    if (isModified) {
      return true;
    }
    isModified = isChosenEqual(product.colors, nextProps.product.colors);

    if (isModified) {
      return true;
    }
    isModified = isChosenEqual(assistantPopUps, nextProps.assistantPopUps);

    if (isModified) {
      return true;
    }

    isModified = product.colors.some((color, indexColor) => {
      isModified = color.grades.some((curr, indexGrade) => curr.quantity !== nextProps.product.colors[indexColor].grades[indexGrade].quantity);
      if (isModified) {
        return true;
      }
    });

    if (isModified) {
      return true;
    }

    isModified = stores.some((element, index) => {
      if (element.isActive !== nextProps.stores[index].isActive) {
        return true;
      }
      return false;
    });

    if (isModified) {
      return true;
    }

    if (cloneColorsStores !== nextProps.cloneColorsStores) {
      return true;
    }
    return false;
  }
  render() {
    const {
      assistantPopUps,
      selectedCart,
      product,
      startingGrid,
      currentColor,
      grades,
      stores,
      cloneColorsStores,
      acAssistantPopUp,
      acSelectColor,
      acRemoveColor,
      acCurrentColor,
      acSelectedGrade,
      acInsertGradesColor,
      acClosePopUp,
      acAssistant,
      acOpenCloseAssistant,
      acTextGrade,
      acCurrentGrade,
      acSaveGradesStore,
      acChangeTab,
      acCloneColorsStores,
      acStartingGrid
    } = this.props;

    const colorPopUp = assistantPopUps[0].isChosen;
    const gradesPopUp = assistantPopUps[1].isChosen;

    const tabs = Platform.OS === 'web' ? { marginLeft: -20 } : { marginLeft: -20, maxWidth: 650, maxHeight: 50 };
    return (
      <View style={[styles.borderColor, { flex: 2.25, borderLeftWidth: 0.75, backgroundColor: 'white' }]}>
        <View style={[styles.borderColor, styles.header]}>
          <Text style={[global.h2, { marginLeft: 20 }]}>Defina cores, grades e quantidades</Text>
          <View style={{ flex: 1 }}>
            <SimpleButton
              tchbStyle={styles.btnInsert}
              msg="INSERIR"
              action={() => {
                acInsertGradesColor(product);
                acAssistant(product);
                acClosePopUp();
                if (selectedCart.isVisible) {
                  acOpenCloseAssistant();
                }
              }}
            />
          </View>
        </View>
        <View style={[styles.borderColor, { flex: 6, borderBottomWidth: 0.75 }]}>
          <LinearGradient style={styles.linearGradient} colors={['rgba(0,133,178, 0.15)', 'rgba(0,133,178, 0.09)', 'rgba(0,133,178, 0)']}>
            {
              stores.length > 1 ?
                <FlatList
                  style={tabs}
                  horizontal
                  data={stores}
                  keyExtractor={item => item.name}
                  renderItem={({ item }) => {
                    return (
                      <Tab
                        key={item.name}
                        active={item.isActive}
                        name={item.name}
                        vwActive={tab.vwActive}
                        vwNotActive={tab.vwNotActive}
                        txtActive={tab.txtActive}
                        txtNotActive={tab.txtNotActive}
                        actions={[
                          { func: acSaveGradesStore, params: [] },
                          { func: acChangeTab, params: [item.name] }
                        ]}
                      />
                    );
                  }}
                />
              :
                null
            }
          </LinearGradient>
          <View style={[styles.bodyBody, { paddingTop: stores.length > 1 ? 65 : 15 }]}>
            {/* lado Esquerdo do body */}
            <View style={{ flex: 1, maxWidth: 85, paddingTop: 27 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Button
                  isChosen={colorPopUp}
                  tchbStyle={global.containerCenter}
                  txtStyle={[global.icon, { fontSize: 21 }]}
                  txtMsg="-"
                  actions={[{ func: acAssistantPopUp, params: ['colors'] }]}
                  shadow
                  changeColor
                  chosenColor="#0085B2"
                  nChosenColor="rgba(0, 0, 0, 0.3)"
                />
                <Text style={[[global.containerCenter, styles.txtSelection], { marginLeft: 3 }]}>CORES</Text>
                {
                  colorPopUp ?
                    <TouchableOpacity
                      style={{ marginLeft: 17, position: 'absolute' }}
                      activeOpacity={1}
                      onPress={() => acAssistantPopUp('colors')}
                    >
                      <IA msg="J" style={[global.icArrow, { position: 'relative', fontSize: 20, marginLeft: 4 }]} />
                    </TouchableOpacity>
                  :
                    null
                }
              </View>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', marginTop: 35, paddingLeft: 5 }}
              >
                <Button
                  isChosen={gradesPopUp}
                  txtStyle={[global.icon, { fontSize: 21 }]}
                  txtMsg="§"
                  actions={[{ func: acAssistantPopUp, params: ['grades'] }]}
                  shadow
                  changeColor
                  chosenColor="#0085B2"
                  nChosenColor="rgba(0, 0, 0, 0.3)"
                />
                <Text style={styles.txtSelection}>GRADES</Text>
                <Fade visible={gradesPopUp} style={{ marginLeft: 20, position: 'absolute' }}>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => acAssistantPopUp('grades')}
                  >
                    <IA msg="J" style={[global.icArrow, { position: 'relative', fontSize: 20, marginLeft: 4 }]} />
                  </TouchableOpacity>
                </Fade>
              </View>
              <FlatList
                data={grades}
                ref={flatList => { this._gradesList = flatList; }}
                onScroll={(event) => {
                  // Se a grade nao estiver se movendo, ela pode "Mover" a outra View
                  if (!this.gradeList) {
                    // Informa que a gridView esta em movimento
                    this.gridView = true;
                    this._gridViewY.scrollTo({ y: event.nativeEvent.contentOffset.y, animated: false });
                  }
                  this.gradeList = false;
                }}
                renderItem={({ item, index }) => (
                  <Grade
                    grades={grades}
                    grade={item}
                    last={index === grades.length - 1}
                    index={index}
                    acSelectedGrade={acSelectedGrade}
                  />
                )}
                keyExtractor={(item) => item.name}
              />
            </View>
            {/* lado Direito do body */}
            <View style={{ flex: 6, paddingLeft: 10 }}>
              <View style={{ flex: 1, maxHeight: Platform.OS === 'web' ? 90 : 125 }}>
                <FlatList
                  style={{ maxWidth: 1360 }}
                  horizontal
                  data={product.colors}
                  ref={flatList => { this._colorList = flatList; }}
                  onScroll={(event) => {
                    if (!this.colorList) {
                      this.gridView = true;
                      this._gridViewX.scrollTo({ x: event.nativeEvent.contentOffset.x, animated: false });
                    }
                    this.colorList = false;
                  }}
                  renderItem={({ item }) => (
                    <ColorColumn
                      color={item}
                      grades={grades}
                      acRemoveColor={acRemoveColor}
                    />
                  )}
                  keyExtractor={(item) => item.name}
                />
              </View>
              <View style={{ flex: 4.3 }}>
                <ScrollView
                  style={{ maxWidth: 1360 }}
                  horizontal
                  scrollEventThrottle={16}
                  ref={scrollView => { this._gridViewX = scrollView; }}
                  onScroll={(event) => {
                    if (!this.gridView) {
                      this.colorList = true;
                      this._colorList.scrollToOffset({ offset: event.nativeEvent.contentOffset.x, animated: false });
                    }
                    this.gridView = false;
                  }}
                >
                  <ScrollView
                    contentContainerStyle={{ flexDirection: 'row' }}
                    ref={scrollView => { this._gridViewY = scrollView; }}
                    scrollEventThrottle={16}
                    onScroll={(event) => {
                      if (!this.gridView) {
                        this.gradeList = true;
                        this._gradesList.scrollToOffset({ offset: event.nativeEvent.contentOffset.y, animated: false });
                      }
                      this.gridView = false;
                    }}
                  >
                    <Grid
                      startingGrid={startingGrid}
                      product={product}
                      grades={grades}
                      stores={stores}
                      acTextGrade={acTextGrade}
                      acCurrentGrade={acCurrentGrade}
                      acCurrentColor={acCurrentColor}
                      acStartingGrid={acStartingGrid}
                    />
                  </ScrollView>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
        {/* FOOTER */}
        <View style={global.containerCenter} >
          {
            stores.length > 1 ?
              <View style={[global.containerCenter, { flexDirection: 'row' }]}>
                <Text style={global.text}>Copiar cores e grades para todas as lojas?</Text>
                <CopyToAll
                  cloneColorsStores={cloneColorsStores}
                  acCloneColorsStores={acCloneColorsStores}
                />
              </View>
            :
            null
          }
        </View>
        <PopUpColor
          visible={colorPopUp}
          colors={product.colors}
          acSelectColor={acSelectColor}
        />
        <PopUpGrade
          sizes={product.sizes}
          visible={gradesPopUp}
          grades={grades}
          acSelectedGrade={acSelectedGrade}
        />
      </View>
    );
  }
}

export default Right;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.75,
  },
  btnInsert: {
    alignSelf: 'flex-end',
    marginRight: 35
  },
  borderColor: {
    borderColor: 'rgba(0, 0, 0, 0.2)'
  },
  linearGradient: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 70,
    width: '100%',
    paddingLeft: 20
  },
  bodyBody: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 65,
    paddingLeft: 19,
  },
  popUpColors: {
    flex: 1,
    backgroundColor: '#ECECEC',
    opacity: 0.94,
    padding: 5,
    paddingRight: 0,
  },
  txtSelection: {
    fontFamily: Font.ASemiBold,
    fontSize: 10,
    color: 'black',
    letterSpacing: 1,
    marginLeft: 10
  },
  vwIT: {
    justifyContent: 'center',
    height: 45,
    width: 70,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#999',
    paddingLeft: Platform.OS === 'web' ? 22 : 13
  },
});

const PopUpColor = ({ visible, colors, acSelectColor }) => {
  // Ativa as sombras de linear gradiente caso o numero de cores for maior do que o popup
  const capacity = Platform.OS === 'web' ? 11 : 7;
  const shadowGradient = colors.length >= capacity;

  return (
    <Fade style={[global.popUp, { marginTop: 40, marginLeft: 57 }]} visible={visible}>
      <View style={styles.popUpColors}>
        <Text style={[global.h6Bold, { color: 'rgba(0, 0, 0, 0.6)', paddingTop: 14, marginLeft: 35, }]}>DEFINA AS CORES A SEREM EXIBIDAS</Text>
        <View style={{ flexDirection: 'row', maxWidth: 750 }}>
          {
            shadowGradient ?
              <LinearGradient
                style={{ position: 'absolute', height: '95%', width: 30 }}
                colors={['rgba(0,0,0, 0.12)', 'rgba(0,0,0, 0)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            :
              null
          }
          <FlatList
            horizontal
            data={colors}
            renderItem={({ item }) => <SelectColor product={item} acSelectColor={acSelectColor} />}
            keyExtractor={(item) => item.name}
          />
          {
            shadowGradient ?
              <LinearGradient
                style={{ position: 'absolute', height: '95%', width: 30, marginLeft: '96.5%' }}
                colors={['rgba(0,0,0, 0.0)', 'rgba(0,0,0, 0.12)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            :
              null
          }
        </View>
      </View>
    </Fade>
  );
};

const SelectColor = ({ product, acSelectColor }) => {
  const { name, isChosen } = product;

  return (
    <View style={{ alignItems: 'center', paddingTop: 15, paddingBottom: 5 }}>
      <Image
        style={{ height: 60, width: 80 }}
        source={require('../../../../assets/imgs/tenis.png')}
        resizeMode="cover"
      />
      <Text style={[global.text, { fontSize: 14 }]}>{name}</Text>
      <CheckBox
        action={acSelectColor}
        param={name}
        isChosen={isChosen}
      />
    </View>
  );
};

const PopUpGrade = ({ visible, grades, acSelectedGrade, sizes }) => {
  if (sizes !== undefined) {
    const columns = ['PARES', ...sizes];
    const columnHeaders = columns.map(value => {
    return (
      <View key={value} style={[global.containerCenter, { width: 70, maxWidth: 70 }]}>
        <Text style={{ fontFamily: Font.ASemiBold, fontSize: 15, color: 'rgba(0, 0, 0, 0.6)', textAlign: 'center' }}>{value}</Text>
      </View>
    );
  });

  return (
    <Fade style={[global.popUp, { elevation: 6, marginTop: 33, marginLeft: 60 }]} visible={visible}>
      <View style={[styles.popUpColors, { paddingRight: 25, paddingLeft: 25 }]}>
        <Text style={[global.h6Bold, { color: 'rgba(0, 0, 0, 0.6)', paddingTop: 14, }]}>DEFINA AS GRADES A SEREM EXIBIDAS</Text>
        <View style={{ flexDirection: 'row' }}>
          {/* Lista de grades Vertical*/}
          <FlatList
            style={{ height: 522 }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={1}
            ref={gradesList => { this._gradesList = gradesList; }}
            onScroll={(event) => {
              if (!this.gradesList) {
                this.scrollView = true;
                this._scrollView.scrollToOffset({ offset: event.nativeEvent.contentOffset.y, animated: false });
              }
              this.gradesList = false;
            }}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={() => {
              return (
                <View style={{ flexDirection: 'row', width: 100, backgroundColor: '#ECECEC', paddingTop: 15 }}>
                  <View style={{ width: 29 }} />
                  <View style={global.containerCenter}>
                    <Text style={{ fontFamily: Font.ASemiBold, fontSize: 15, color: 'rgba(0, 0, 0, 0.6)' }}>GRADES</Text>
                  </View>
                </View>
              );
            }}
            data={grades}
            renderItem={({ item }) => (
              <View
                key={item.name}
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 0.5,
                  borderBottomColor: 'rgba(120, 120, 120, 0.2)',
                  height: 35
                }}
              >
                <CheckBox
                  style={{ marginLeft: -2 }}
                  isChosen={item.isChosen}
                  action={acSelectedGrade}
                  param={item.name}
                />
                <View style={global.containerCenter}>
                  <Text style={{ fontFamily: Font.ALight, color: 'rgba(0, 0, 0, 0.6)' }}>{item.name}</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.name}
          />
          {/* ScrollView Horizontal com Lista de dados Vertical */}
          <ScrollView
            horizontal
            style={{ maxWidth: 400 }}
          >
            <FlatList
              style={{ maxHeight: 522 }}
              stickyHeaderIndices={[0]}
              scrollEventThrottle={1}
              ref={scrollView => { this._scrollView = scrollView; }}
              onScroll={(event) => {
                if (!this.scrollView) {
                  this.gradesList = true;
                  this._gradesList.scrollToOffset({ offset: event.nativeEvent.contentOffset.y, animated: false });
                }
                this.scrollView = false;
              }}
              ListHeaderComponent={() => {
                return (
                  <View style={{ flexDirection: 'row', backgroundColor: '#ECECEC', paddingTop: 15 }}>
                    {columnHeaders}
                  </View>
                );
              }}
              data={grades}
              renderItem={({ item }) => (
                <RowPopUpGrade
                  grade={item}
                  headerSize={columnHeaders.length}
                  isChosen={item.isChosen}
                  acSelectedGrade={acSelectedGrade}
                />
              )}
              keyExtractor={item => item.name}
            />
          </ScrollView>
        </View>
      </View>
    </Fade>
  );
  }
  return null;
};

const Grade = ({ grades, grade, acSelectedGrade }) => {
  const { isChosen, name } = grade;
  if (isChosen) {
    return (
      <View style={{ alignItems: 'center', flexDirection: 'row', height: 45, marginTop: first(grades) === grade ? 10 : 5 }}>
        <Button
          tchbStyle={global.containerCenter}
          txtStyle={[global.iconClose, { fontSize: 19 }]}
          txtMsg="t"
          actions={[{ func: acSelectedGrade, params: [name] }]}
        />
        <Text style={[global.containerCenter, { textDecorationLine: 'underline', fontFamily: Font.ALight, color: 'rgba(0,0, 0, 0.6)' }]}>{name}</Text>
      </View>
    );
  }
  return null;
};

const isChosenEqual = (array, nextArray) => {
  const isModified = array.some((element, index) => {
    if (element.isChosen !== nextArray[index].isChosen) {
      return true;
    }
    return false;
  });

  return isModified;
};

const Tab = ({
  name, active, vwActive, vwNotActive,
  txtActive, txtNotActive, actions
}) => {
  let view = vwNotActive;
  let txt = txtNotActive;
  if (active) {
    view = vwActive;
    txt = txtActive;
  }
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        style={[{ flex: 1 }, view]}
        onPress={() => actions.forEach(({ func, params }) => { func(...params); })}
      >
        <Text style={txt}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const tab = StyleSheet.create({
  vwActive: {
    width: 125,
    height: 100,
    alignItems: 'center',
    borderTopColor: '#2D7A8D',
    borderTopWidth: 3,
    padding: 5,
    paddingBottom: 2
  },
  vwNotActive: {
    width: 125,
    height: 100,
    alignItems: 'center',
    padding: 5,
    paddingBottom: 2
  },
  txtActive: {
    fontFamily: Font.ASemiBold,
    fontSize: 13,
    color: '#2D7A8D',
    textAlign: 'center'
  },
  txtNotActive: {
    fontFamily: Font.AMedium,
    fontSize: 12,
    color: '#4F9CAF',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 4,
  }
});
