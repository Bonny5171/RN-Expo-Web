import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'expo';
import { connect } from 'react-redux';
import Routing from '../../utils/routing';
import global from '../../assets/styles/global';
import { Steps, SimpleButton } from '../../components';
import * as assistantActions from '../../actions/pages/assistant';
import { acFilterList, acSetClients } from '../../actions/pages/clients';
import { acSearchClient, acCurrentClient, acUpdateStores } from '../../actions/pages/client';
import { CheckOption, DefineClient, Header } from './components';

const { Redirect } = Routing;

class Assistant extends React.Component {
  constructor(props) {
    super(props);
    this.steps = [
      {
        id: 0,
        txtStep: 'Defina a exibição',
        txtStyle: global.step1,
      },
      {
        id: 1,
        txtStep: 'Defina o cliente',
        txtStyle: global.step,
      },
      {
        id: 2,
        txtStep: 'Defina a tabela',
        txtStyle: global.step,
      },
      {
        id: 3,
        txtStep: 'Defina os descontos',
        txtStyle: global.step,
      }
    ];
    this.checkboxes = [
      'Catálogo (com opção de gerar pedido)',
      'Mostruário (somente vizualização)'
    ];
  }

  componentWillUnmount() {
    // Reseta os states da página para o inicial quando a página for "desmontada"
    this.props.acResetAssistant();
  }

  componentDidMount() {
    const { srvClients, acSetClients } = this.props;
    const { fetch } = srvClients;
    fetch(acSetClients);
  }

  render() {
    const {
      redirects, toPage
    } = this.props;
    const shouldRedirect = redirects[7].redirect;
    if (shouldRedirect) {
      return (
        <Redirect
          to={toPage}
        />
      );
    }


    return (
      <View style={{ flex: 1 }}>
        <Header />
        {this._renderBody()}
      </View>
    );
  }

  _renderBody() {
    const {
      steps,
      screen,
      checkboxes,
      acCheckBox,
    } = this.props;

    const checkBoxes = this.checkboxes.map((msg, index) => (
      <CheckOption
        txtStyle={styles.checkOption}
        key={index.toString()}
        checkbox={checkboxes[index]}
        msg={msg}
        action={() => acCheckBox(index)}
      />
    ));

    const screens = [
      checkBoxes,
      <DefineClient
        {...this.props}
      />
    ];
    return (
      <View style={{ flex: 2 }}>
        <LinearGradient colors={['rgba(0,133,178, 0.1)', 'rgba(0,133,178, 0)']} style={{ flexDirection: 'row' }}>
          {/* Tabs */}
          <View style={global.vwActive}>
            <Text style={global.txtActive}>Visitar cliente</Text>
          </View>
          <View style={global.vwNotActive}>
            <Text style={global.txtNotActive}>Outras ações</Text>
          </View>
        </LinearGradient>
        <Steps
          componentValues={this.steps}
          steps={steps}
        />
        {/* Telas */}
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 3, paddingLeft: 65, paddingTop: 30 }}>
            {screens[screen]}
          </View>
          <View style={{ flex: 1, paddingRight: 65, paddingTop: 70 }}>
            <SimpleButton
              tchbStyle={{ alignSelf: 'flex-end' }}
              msg="AVANÇAR"
              action={() => {
                // Sera evoluido para forEach quando tivermos todos os passos desenvolvidos
                if (screen === 0) {
                  if (checkboxes[0] || checkboxes[1]) {
                    this.props.acNextStep();
                    this.props.acUpdateStores(this.props.stores);
                  }
                } else if (screen === 1) {
                  if (this.props.client.name !== '') {
                    this.props.acNextStep();
                    this.props.acUpdateStores(this.props.stores);
                  }
                } else {
                  this.props.acNextStep();
                    this.props.acUpdateStores(this.props.stores);
                }
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    redirects: state.menu.redirects,
    toPage: state.menu.toPage,
    client: state.client.client,
    screen: state.assistant.screen,
    steps: state.assistant.steps,
    checkboxes: state.assistant.checkboxes,
    filterBranches: state.assistant.filterBranches,
    stores: state.assistant.stores,
    dropdown: state.assistant.dropdown,
    data: state.clients.data,
  }
);

export default connect(mapStateToProps, {
  ...assistantActions,
  acSearchClient,
  acCurrentClient,
  acFilterList,
  acUpdateStores,
  acSetClients,
})(Assistant);

const styles = StyleSheet.create({
  checkOption: {
    marginTop: -4,
    marginLeft: 6
  }
});