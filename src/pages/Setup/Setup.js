import { LinearGradient } from 'expo';
import React from 'react';
import { Platform, View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { WebBrowser, FileSystem } from 'expo';
import { backgroundVendor, backgroundAdmin } from '../../assets/imgs';
import { acNextStep, acNextScreen, changePorcent, changeIndeterminate } from '../../actions/pages/setup';
import { acUpdateContext } from '../../actions/global';
import { Conclusion, FirstSetup, Steps, Media } from '../../components';
import styles from '../../assets/styles/global';
import { acNavigate } from '../../actions/pages/menu';

class Setup extends React.Component {
  constructor(props) {
    super(props);
    state = {
      statusDownload: null,
    };
    this.props.acNextStep = this.props.acNextStep.bind(this);
    this.props.changePorcent = this.props.changePorcent.bind(this);
    this.props.changeIndeterminate = this.props.changeIndeterminate.bind(this);
  }

  async componentDidMount() {
    const { onSync, onSyncUpdate } = Platform.OS === 'web'
      ? require('../../services/SyncDbWeb')
      : require('../../services/SyncDb')

    const {changePorcent, changeIndeterminate } = this.props;
    onSync({ service: 'account', changePorcent, changeIndeterminate });
    onSync({ service: 'product', changePorcent, changeIndeterminate });
    onSync({ service: 'resource', changePorcent, changeIndeterminate });
    onSync({ service: 'setup', changePorcent, changeIndeterminate });
  }

  render() {
    const {
      steps, screen, context,
      acNextStep, iProgressBar,
      indeterminate, acUpdateContext,
      navigation
    } = this.props;

    const StepsSetup = [
      { id: 0, txtStyle: styles.txtStep1, txtStep: 'Dados Básicos' },
      { id: 1, txtStyle: styles.txtStep, txtStep: 'Mídias' },
      { id: 2, txtStyle: styles.txtStep, txtStep: 'Conclusão' }
    ];
    const background = context === 'Vendedor' ? backgroundVendor : backgroundAdmin;
    return (
      <ImageBackground source={background} style={styles.container} resizeMode="cover">
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
              <Steps
                vwSteps={{ flexDirection: 'row', marginTop: 15 }}
                steps={steps}
                componentValues={StepsSetup}
              />
            </LinearGradient>
          </View>
          <View style={styles.bodyBody}>
            <View>
              {
                [
                  <FirstSetup nextStep={acNextStep} iProgressBar={iProgressBar} indeterminate={indeterminate} />,
                  <Media
                    nextStep={acNextStep}
                    iProgressBar={iProgressBar}
                    actions={[{ func: acUpdateContext, params: ['Admin'] }, {
                      func: navigation.replace,
                      params: ['assistant']
                    }]}
                  />,
                  <Conclusion actions={[{ func: acUpdateContext, params: ['Admin'] }, { func: navigation.replace, params: ['assistant'] }]} />
                ][screen]
              }
            </View>
          </View>
        </View>
      </ImageBackground>
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
    context: state.global.context
  }
);

export default connect(mapStateToProps, {
 acNextStep, acNextScreen, changePorcent, changeIndeterminate, acUpdateContext, acNavigate
})(Setup);
