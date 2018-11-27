import { LinearGradient } from 'expo';
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { WebBrowser, FileSystem } from 'expo';
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

  callback = downloadProgress => {
    const progress =
      downloadProgress.totalBytesWritten /
      downloadProgress.totalBytesExpectedToWrite;
    
    console.log('Status do download: ', progress)
    this.setState({
      statusDownload: progress
    })
  };

  async _handleDownLoadDb(dbName) {
    try {
      downloadResumable = FileSystem.createDownloadResumable(
        `https://everysfaenvs.z5.web.core.windows.net/${dbName}`,
        FileSystem.documentDirectory + '/SQLite/' + dbName,
        {},
        this.callback
      );

      const { uri } = await downloadResumable.resumeAsync();
      console.log('Finished downloading to ', uri);
    } catch (e) {
      console.error(e);
    }
  }

  _handleDownLoadDbAccount = async () => {
    await this._handleDownLoadDb('sfa-account.db');
  }

  _handleDownLoadDbProduct = async () => {
    await this._handleDownLoadDb('sfa-product.db');
  }

  _handleDownLoadDbResource = async () => {
    await this._handleDownLoadDb('sfa-resource.db');
  }

  _handleDownLoadDbSetup = async () => {
    await this._handleDownLoadDb('sfa-setup.db');
  }


  render() {
    const {
      steps, screen,
      acNextStep, iProgressBar,
      indeterminate, acUpdateContext,
      acNavigate, navigation
    } = this.props;

    const StepsSetup = [
      { id: 0, txtStyle: styles.txtStep1, txtStep: 'Dados Básicos' },
      { id: 1, txtStyle: styles.txtStep, txtStep: 'Mídias' },
      { id: 2, txtStyle: styles.txtStep, txtStep: 'Conclusão' }
    ];

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
                    actions={[{ func: acUpdateContext, params: ['Admin'] }, { func: navigation.navigate, params: ['Assistant'] }]}
                  />,
                  <Conclusion actions={[{ func: acUpdateContext, params: ['Admin'] }, { func: navigation.navigate, params: ['Assistant'] }]} />
                ][screen]
              }
            </View>
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
