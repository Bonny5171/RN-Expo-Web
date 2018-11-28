import React from 'react';
import Routes from './Routes';
import { StackNavigator, addNavigationHelpers} from 'react-navigation';

const Router = StackNavigator(Routes,
  {
    initialRouteName: 'setup',
    headerMode: 'none',
    transparentCard: true,
  }
);

class Switch extends React.Component {
  static router = Router.router;
  render() {
    const { state, dispatch, addListener } = this.props.navigation;
    const { routes, index } = state;

    // Figure out what to render based on the navigation state and the router:
    const Component = Router.getComponentForState(state);

    // The state of the active child screen can be found at routes[index]
    let childNavigation = { dispatch, addListener, state: routes[index] };
    // If we want, we can also tinker with the dispatch function here, to limit
    // or augment our children's actions
    // addListener is needed to support children Stack and Drawer navigators

    // Assuming our children want the convenience of calling .navigate() and so on,
    // we should call addNavigationHelpers to augment our navigation prop:
    childNavigation = addNavigationHelpers(childNavigation);

    return <Component navigation={childNavigation} />;
  }
}

export default Switch;