import { SwitchNavigator } from 'react-navigation';

import Main from './screens/Main';
import Home from './screens/Home';
import Setup from './screens/Setup';
import PrimeiraScreen from './screens/PrimeiraScreen';
import SegundaScreen from './screens/SegundaScreen';

const App = SwitchNavigator(
  {
    Main,
    Setup,
    Home,
    PrimeiraScreen,
    SegundaScreen,
  },
  {
    initialRouteName: 'Main'
  }
);

export default App;