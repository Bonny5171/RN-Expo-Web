import { AppRegistry } from 'react-native';
import App from './AppRNW';

AppRegistry.registerComponent('everysfa', () => App);
AppRegistry.runApplication('everysfa', {
	initialProps: {},
	rootTag: document.getElementById('root'),
});
