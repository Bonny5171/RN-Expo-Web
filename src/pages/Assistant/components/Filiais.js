import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CheckOption } from '.';
import { Fade } from '../../../components';
import global from '../../../assets/styles/global';

class Filiais extends React.PureComponent {
  render() {
    const {
      stores,
      client,
      filterBranches,
      acChooseStore,
      acOnlyHQ,
      acFilterBranches,
      acOnlyBranches,
      inputClient,
    } = this.props;

    return (
      <Fade style={{ flex: 4, paddingTop: 18 }} visible={stores.length > 0 && inputClient !== ''} duration={800}>
        <Text style={[global.text, { fontSize: 17 }]}>Este cliente possui filiais. Defina as lojas que compartilharão da compra</Text>
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 8 }}>
          {/* Box esquerdo */}
          <View style={{ flex: 1, padding: 3 }}>
            <View style={styles.branches}>
              <FlatList
                style={{ maxHeight: 265 }}
                data={stores}
                initialNumToRender={10}
                keyExtractor={item => item.name}
                renderItem={({ item, index }) => (
                  <CheckOption
                    msg={item.name}
                    checkbox={item.isChosen}
                    action={acChooseStore}
                    params={[index]}
                    txtStyle={{ fontSize: 14, marginLeft: 6 }}
                  />
                )}
              />
            </View>
          </View>
          {/* Box direito */}
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View>
              <CheckOption
                txtStyle={styles.checkOption}
                msg="Somente a Matriz"
                checkbox={filterBranches[0]}
                action={() => {
                  acOnlyHQ(client.stores);
                  acFilterBranches(0);
                }}
              />
              <CheckOption
                txtStyle={{ marginTop: -4, marginLeft: 6 }}
                msg="Todas as Filiais"
                checkbox={filterBranches[1]}
                action={() => {
                  acOnlyBranches(client.stores);
                  acFilterBranches(1);
                }}
              />
            </View>
          </View>
        </View>
      </Fade>
    );
  }
}

export default Filiais;


const styles = StyleSheet.create({
  checkOption: {
    marginTop: -4,
    marginLeft: 6
  },
  branches: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    backgroundColor: '#F3F4F6',
    padding: 5,
    paddingBottom: 0
  }
});