import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Platform } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { backgroundVendor, backgroundAdmin } from '../../assets/imgs';
import global from '../../assets/styles/global';
import { Steps, SimpleButton } from '../../components';
import * as assistantActions from '../../actions/pages/assistant';
import { acFilterList, acSetClients } from '../../actions/pages/clients';
import { acSearchClient, acCurrentClient, acUpdateStores } from '../../actions/pages/client';
import { acUpdateContext } from '../../actions/global';
import { CheckOption, DefineClient, Header } from './components';
import * as SrvClients from '../../services/SGDLSqlite/Clients';

class Assistant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInputActive: false
    };
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
    this.toggleInput = this.toggleInput.bind(this);
  }

  componentDidMount() {
    const { acSetClients } = this.props;
    const { fetch } = SrvClients.srvClients;
    fetch(acSetClients);
  }

  componentWillUnmount() {
    // Reseta os states da página para o inicial quando a página for "desmontada"
    this.props.acResetAssistant();
  }

  componentDidUpdate() {
    if (this.state.isInputActive) {
      this.scrollView.scrollTo({ y: 230 }); 
    } else {
      this.scrollView.scrollTo({ y: 0 }); 
    }
  }

  render() {
    const background = this.props.context === 'Vendedor' ? backgroundVendor : backgroundAdmin;
    if(Platform.OS === 'web') {
      return (
        <ImageBackground style={{ flex: 1 }} source={background} resizeMode="cover">
            <Header />
            {this._renderBody()}
        </ImageBackground>
      );
    }

    return (
      <ImageBackground style={{ flex: 1 }} source={background} resizeMode="cover">
        <ScrollView
          style={{ flex: 1 }}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          ref={(ref) => this.scrollView = ref}
        >
          <View style={{ height: 1100 }}>
            <Header />
            {this._renderBody()}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }

  _renderBody() {
    const {
      stores,
      client,
      steps,
      screen,
      checkboxes,
      navigation,
      prevSteps,
      acCheckBox,
      acPreviousStep,
      acUpdateContext,
      acUpdateStores,
      acNextStep
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
        toggleInput={this.toggleInput}
        srvClients={SrvClients.srvClients}
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
          acPreviousStep={acPreviousStep}
          steps={steps}
          prevSteps={prevSteps}
          returnableSteps
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
                // Variável TEMPORARIA para apresentação
                const apresentacao = true

                // Sera evoluido para forEach quando tivermos todos os passos desenvolvidos
                if (screen === 0) {
                  if (checkboxes[0] || checkboxes[1]) {
                    acNextStep();
                    acUpdateStores(stores);
                  }
                } else if (screen === 1) {
                  if (client.name !== '') {
                    acNextStep();
                    acUpdateStores(stores);
                    if(apresentacao) {
                      navigation.navigate('catalog');
                      acUpdateContext('Vendedor');
                    }
                  }
                } else {
                  acNextStep();
                  acUpdateStores(stores);
                }
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  toggleInput() {
    this.setState({
      isInputActive: !this.state.isInputActive
    });
  }
}

const mapStateToProps = state => (
  {
    client: state.client.client,
    screen: state.assistant.screen,
    steps: state.assistant.steps,
    prevSteps: state.assistant.prevSteps,
    checkboxes: state.assistant.checkboxes,
    filterBranches: state.assistant.filterBranches,
    stores: state.assistant.stores,
    dropdown: state.assistant.dropdown,
    data: state.clients.data,
    context: state.global.context,
  }
);

export default connect(mapStateToProps, {
  ...assistantActions,
  acSearchClient,
  acCurrentClient,
  acFilterList,
  acUpdateStores,
  acSetClients,
  acUpdateContext
})(Assistant);

const styles = StyleSheet.create({
  checkOption: {
    marginTop: -4,
    marginLeft: 6
  }
});