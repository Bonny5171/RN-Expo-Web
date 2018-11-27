import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import { WebBrowser, FileSystem } from 'expo';

const DATABASE_DIR = `${FileSystem.documentDirectory}SQLite/`

const ensureDirAsync = async (dir, intermediates=true) => {
  const props =  await FileSystem.getInfoAsync(dir)
  if( props.exist && props.isDirectory){
     return props;
  }
  return await FileSystem.makeDirectoryAsync(dir, {intermediates})
}

class SetupScreen extends React.Component {
  state = {
    statusDownload: null,
  };

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
    console.log(`${FileSystem.documentDirectory}SQLite/${dbName}`);
    await ensureDirAsync(DATABASE_DIR);
    try {
      downloadResumable = FileSystem.createDownloadResumable(
        `https://everysfaenvs.z5.web.core.windows.net/${dbName}`,
        `${DATABASE_DIR}${dbName}`,
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

  render(){
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}>
        <Text>SETUP Screen</Text>
        <Text>{this.state.statusDownload}</Text>
        
        <Button 
          title='Download: sfa-account.db'
          onPress={this._handleDownLoadDbAccount}
        />
        <Button 
          title='Download: sfa-product.db'
          onPress={this._handleDownLoadDbProduct}
        />
        <Button 
          title='Download: sfa-resource.db'
          onPress={this._handleDownLoadDbResource}
        />
        <Button 
          title='Download: sfa-setup.db'
          onPress={this._handleDownLoadDbSetup}
        />

      </View>
    )
  }
}

export default SetupScreen;