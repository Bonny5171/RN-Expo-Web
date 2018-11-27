import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TabResulmo, TabArgumentoDeVenda, TabRanking, TabCombos } from './';

class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: [
        {
         key: '1', flex: 1, title: 'Resumo', selected: true,
        },
        {
          key: '2', flex: 2, title: 'Argumento de venda', selected: false,
        },
        {
          key: '3', flex: 1, title: 'Ranking', selected: false,
        },
        {
          key: '4', flex: 1, title: 'Combos', selected: false,
        },
      ]
    };
  }

  _handleSelectTab(item) {
    const { tabs } = this.state;
    const novaTab = tabs.map((x) => {
      if (x.key === item.key) {
        x.selected = true;
      } else {
        x.selected = false;
      }
      return x;
    });
    this.setState({
      tabs: novaTab
    });
  }

  _getTabContent() {
    const { currentProduct } = this.props;
    const tabSelected = this.state.tabs.find(t => t.selected);
    switch (tabSelected.title) {
      case 'Resumo':
        return (<TabResulmo currentProduct={currentProduct} />);
      case 'Argumento de venda':
        return (<TabArgumentoDeVenda currentProduct={currentProduct} />);
      case 'Ranking':
        return (<TabRanking currentProduct={currentProduct} />);
      case 'Combos':
        return (<TabCombos currentProduct={currentProduct} />);
      default:
        return (<Text>Não implementado</Text>);
    }
  }

  render() {
    const conteudoTab = this._getTabContent();

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        
        {/* Primeira linha da tab */}
        <View style={{ flexDirection: 'row' }}>

          {
            this.state.tabs.map(t => (
              <View key={t.key} style={{ flex: t.flex, paddingTop: 15, paddingBottom: 15, }}>
                <TouchableOpacity onPress={() => this._handleSelectTab(t)}>
                  <Text
                    numberOfLines={1}
                    style={{
                      color: '#0085B2',
                      fontWeight: t.selected ? '600' : '400',
                      fontSize: 16,
                      textDecorationLine: t.selected ? 'none' : 'underline',
                    }
                  }
                  >
                    {t.title}
                  </Text>
                </TouchableOpacity>
              </View>
            ))
          }
        </View>
        {/* Conteudo */}
        <View style={{ flex: 1 }}>
          {conteudoTab}
        </View>
      </View>
    );
  }
}

export default Tab;