import React from 'react';
import { View, Text, Platform } from 'react-native';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';
import Setup, { styles } from './Setup';

describe('Setup page', () => {
  it('render properly - ' + Platform.OS, () => {
    const tree = renderer.create(<Setup />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('render the proper structure', () => {
    const tree = shallow(<Setup />);
    expect(
      tree.contains(
        <View style={styles.container}>
          <Text>404 Page Not Found</Text>
        </View>
      )
    ).toBe(true);
  });
});
