import React from 'react';
import { View, Text } from 'react-native';
import { array } from 'prop-types';

class Steps extends React.PureComponent {
  render() {
    const { componentValues, steps } = this.props;
    const valuesMapped = componentValues.map((values, i) => {
        const indice = i + 1;
        return (
          <View key={values.id} style={values.vwStep}>
            <Text
              style={[values.txtStyle, { color: steps[i] ? 'black' : '#999' }]}
            >
              {indice + '. ' + values.txtStep}
            </Text>
          </View>
        );
      }
    );

    return (
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        {valuesMapped}
      </View>
    );
  }
}

Steps.propTypes = {
  // Vetor com um objeto de cada dos passo
  // Ex. { id: '0 até quanto quiser', txtStyle: {Style}, txtStep: 'Nome de exemplo' }
	componentValues: array,
	// Vetor que controla qual o passo atual via booleans
	steps: array
};

export default Steps;