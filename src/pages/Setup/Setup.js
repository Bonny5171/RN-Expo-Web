import {LinearGradient} from 'expo';
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { acNextStep, acNextScreen, changePorcent, changeIndeterminate } from '../../actions/pages/setup';
import { acUpdateContext } from '../../actions/global';
// import { Conclusion, FirstSetup, Steps, Media } from '../../components';
// import Conclusion from '../../components/Conclusion';
import FirstSetup from '../../components/FirstSetup';
// import Steps from '../../components/Steps';
import Media from '../../components/Media';
import Conclusion from '../../components/Conclusion';


import styles from '../../assets/styles/global';
import { acNavigate } from '../../actions/pages/menu';
//import Routing from '../../utils/routing';
//const { Redirect } = Routing;

class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.props.acNextStep = this.props.acNextStep.bind(this);
    this.props.changePorcent = this.props.changePorcent.bind(this);
    this.props.changeIndeterminate = this.props.changeIndeterminate.bind(this);
  }

  componentDidMount() {
    /*
    const { onSync, changePorcent, changeIndeterminate } = this.props;
    onSync({ service: 'product', changePorcent, changeIndeterminate }).then(() => {
      onSync({ service: 'account', changePorcent, changeIndeterminate }).then(() => {
        onSync({ service: 'resource', changePorcent, changeIndeterminate }).then(() => {
          console.log('TERMINOU account');
        });
      });
    });
    */
  }

  render() {
    const {
      steps, screen,
      acNextStep, iProgressBar,
      indeterminate, acUpdateContext,
      redirects, toPage, acNavigate
    } = this.props;

    const StepsSetup = [
      { id: 0, txtStyle: styles.txtStep1, txtStep: 'Dados Básicos' },
      { id: 1, txtStyle: styles.txtStep, txtStep: 'Mídias' },
      { id: 2, txtStyle: styles.txtStep, txtStep: 'Conclusão' }
    ];
    const shouldRedirect = redirects[10].redirect;

    if (shouldRedirect) {
      /*return (
        <Redirect
          to={toPage}
        />
      );*/
      return null;
    }

    return (
      <View style={styles.container}>
        <View style={{ flex: 1.5 }}>
          <Text style={styles.titlePagina}>INÍCIO</Text>
          <Text style={[styles.sub_title_1, { paddingTop: 20 }]}>
          Olá
            <Text style={styles.bold}>
              {' '}Jefferson
            </Text>
          , seja bem-vindo ao aplicativo de vendas da Grendene!
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.headerBody}>
            <LinearGradient colors={['rgba(0,133,178, 0.1)', 'rgba(0,133,178, 0)']} style={styles.linearGradient}>
              {/*<Steps
                vwSteps={{ flexDirection: 'row', marginTop: 15 }}
                steps={steps}
                componentValues={StepsSetup}
              />*/}
            </LinearGradient>
          </View>
          <View style={styles.bodyBody}>
          {
            <View>
              {
                [
                  <FirstSetup nextStep={acNextStep} iProgressBar={iProgressBar} indeterminate={indeterminate} />,
                  <Media
                    nextStep={acNextStep}
                    iProgressBar={iProgressBar}
                    actions={[{ func: acUpdateContext, params: ['Admin'] }, { func: acNavigate, params: ['assistant'] }]}
                  />,
                  <Conclusion actions={[{ func: acUpdateContext, params: ['Admin'] }, { func: acNavigate, params: ['assistant'] }]} />
                ][screen]
              }
            </View>
          }
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
    steps: state.setup.steps,
    screen: state.setup.screen,
    iProgressBar: state.setup.iProgressBar,
    indeterminate: state.setup.indeterminate,
    redirects: state.menu.redirects,
    toPage: state.menu.toPage,
  }
);

export default connect(mapStateToProps, {
 acNextStep, acNextScreen, changePorcent, changeIndeterminate, acUpdateContext, acNavigate
})(Setup);
