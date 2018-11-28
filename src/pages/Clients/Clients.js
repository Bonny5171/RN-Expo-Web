import React from 'react';
import {
    View, Text, StyleSheet,
    Platform, FlatList,
    Keyboard, TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import { backgroundVendor, backgroundAdmin } from '../../assets/imgs';
import { Font } from '../../assets/fonts/font_names';
import { Button, Fade, Title, Row } from '../../components';
import { acUpdateComponent, acUpdateCurrent, acUpdateList, acFilterList, acCurrentClient, acSetClients } from '../../actions/pages/clients';
import {
  SortPopUp, FilterPopUp,
  DetailedList, ClientBox
} from './components';
import * as SrvClients from '../../services/SGDLSqlite/Clients';

class Clients extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { acSetClients } = this.props;
    const { fetch } = SrvClients.srvClients;
    fetch(acSetClients);
  }

  setRedirect(client) {
    this.setState({
      redirect: true
    });
    this.props.acCurrentClient(client);
  }

  render() {
    const {
      buttons, list, acUpdateComponent, acUpdateList
    } = this.props;
    const background = this.props.context === 'Vendedor' ? backgroundVendor : backgroundAdmin;
    return (
      <ImageBackground source={background} style={styles.content} resizeMode="cover">
        { /* Header */}
        <View style={styles.header}>
          <Row>
            <Title style={styles.title} msg="CLIENTES" />
            <Row style={{ flex: 1, justifyContent: 'flex-end' }}>
              <Fade visible={list} style={vwOrderBy}>
                <Button
                  txtStyle={icOrderBy}
                  txtMsg="k"
                  isChosen={buttons[0].isChosen}
                  shadow
                  changeColor
                  chosenColor="#0085B2"
                  nChosenColor="#999"
                  rdAction={acUpdateComponent}
                  rdName="sortPopUp"
                  rdType="popup"
                />
              </Fade>
              <Button
                tchbStyle={tchbFilter}
                txtStyle={styles.icFilter}
                txtMsg="l"
                isChosen={buttons[1].isChosen}
                shadow
                changeColor
                chosenColor="#0085B2"
                nChosenColor="#999"
                rdAction={acUpdateComponent}
                rdName="filterPopUp"
                rdType="popup"
                action={Keyboard.dismiss}
              />
            </Row>
          </Row>
          <Row style={{ justifyContent: 'flex-end' }}>
            <TouchableOpacity style={styles.tchbList} onPress={() => acUpdateList()} >
              <Text style={styles.icList}>
                {
                  list
                    ? '['
                    : ']'
                }
              </Text>
            </TouchableOpacity>
          </Row>
        </View>

        {/* Body */}
        {
          this.props.list
            ?
              <View style={styles.body}>
                <View style={styles.listContainer}>
                  <SummaryList
                    loadMore={() => console.log('load more...')}
                    setRedirect={this.setRedirect}
                    {...this.props}
                  />
                </View>
              </View>
            :
              <View style={styles.body}>
                <View style={styles.listContainer}>
                  <DetailedList
                    loadMore={() => console.log('load more...')}
                    {...this.props}
                  />
                </View>
              </View>
        }

        { /* PopUp Sort */}
        <Fade visible={this.props.buttons[0].isChosen} style={styles.vwSPU}>
          <SortPopUp
            isVisible={this.props.buttons[0].isChosen}
            {...this.props}
          />
        </Fade>

        {/* PopUp Filtro */}
        <Fade visible={this.props.buttons[1].isChosen} style={styles.vwFPU}>
          <FilterPopUp
            isVisible={this.props.buttons[1].isChosen}
            {...this.props}
          />
        </Fade>
      </ImageBackground>
    );
  }

  _renderBody() {
    // True = Lista resumida em Box, False = Lista detalhada de clientes
    if (this.props.list) {
      return (
        <View style={styles.body}>
          <View style={styles.listContainer}>
            <SummaryList
              loadMore={() => console.log('load more...')}
              setRedirect={this.setRedirect}
              {...this.props}
            />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.body}>
        <View style={styles.listContainer}>
          <DetailedList
            loadMore={() => console.log('load more...')}
            {...this.props}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
    buttons: state.clients.buttons,
    sort: state.clients.sort,
    popUpFilter: state.clients.popUpFilter,
    list: state.clients.list,
    data: state.clients.data,
    client: state.clients.client,
    context: state.global.context
});

export default connect(mapStateToProps,
  {
    acUpdateComponent,
    acUpdateCurrent,
    acUpdateList,
    acFilterList,
    acCurrentClient,
    acSetClients,
  })(Clients);

const icOrderBy = {
  fontFamily: Font.C,
  fontSize: 35,
  color: 'rgba(102, 102, 102, 0.5)',
};
const vwOrderBy = {
  marginTop: 30,
  marginRight: 10
};
const tchbFilter = {
  marginTop: 30,
  marginRight: 20,
};

let styles = StyleSheet.create({
  title: {
    fontFamily: Font.AThin,
    marginLeft: 35,
    marginTop: 20,
    fontSize: 42,
    color: 'rgba(102, 102, 102, 0.5)',
  },
  content: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  icFilter: {
    fontFamily: Font.C,
    fontSize: 35,
    color: 'rgba(102, 102, 102, 0.5)',
  },
  tchbList: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
    height: 25,
    width: 31,
    marginRight: 24,
    marginTop: 5,
  },
  icList: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        right: 6,
      }
    }),
    fontFamily: Font.C,
    fontSize: 35,
    textAlign: 'center',
    color: 'rgba(102, 102, 102, 0.5)',
  },
  icViewType: {
    fontFamily: Font.C,
    fontSize: 25,
    marginLeft: 960,
    marginTop: 15,
    color: 'rgba(102, 102, 102, 0.5)',
  },
  body: {
    flex: 7,
    alignItems: 'center',
  },
  listContainer: {

  },
  btnBuscar: {
    backgroundColor: '#0085B2',
    height: 40,
    width: 105,
    borderRadius: 45,
    paddingTop: 6,
  },
  txtBuscar: {
    fontSize: 17,
    color: 'white',
    fontFamily: Font.ASemiBold,
    textAlign: 'center',
  },
  vwFPU: {
    position: 'absolute',
    marginTop: 65,
    width: 964,
    height: 350,
  },
  vwSPU: {
    position: 'absolute',
    marginTop: 65,
  },
  vwClientBox: {
    backgroundColor: 'transparent',
    width: 215,
    height: 255,
    marginTop: 20,
  },
});

const SummaryList = props => {
  const numColumns = Platform.OS === 'web' ? 7 : 4;
  const newData = [...props.data];
  if (props.data.length < numColumns) {
    while (newData.length < numColumns) {
      newData.push({ empty: 'empty' });
    }
  }

  return (
    <FlatList
      scrollEnabled
      onEndReached={() => props.loadMore()}
      numColumns={numColumns}
      style={{ marginTop: 30, maxWidth: 1150 }}
      data={newData}
      renderItem={({ item, index }) => {
        if (item.empty !== undefined) {
          return (
            <View style={styles.vwClientBox} />
          );
        }
        return (
          <ClientBox
            index={index}
            name={item.fantasyName}
            code={item.code}
            item={item}
            {...props}
          />
        );
      }
      }
      keyExtractor={(item) => item.key}
    />
  );
};

if (Platform.OS === 'web') {
  styles = {
    ...styles,
    listContainer: {
      height: 800
    }
  };
}