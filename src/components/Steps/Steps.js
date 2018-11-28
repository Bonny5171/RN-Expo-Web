import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { array } from 'prop-types';

class Steps extends React.PureComponent {
  render() {
    const { componentValues, steps, returnableSteps } = this.props;

    if(returnableSteps) {
      return (this._returnableSteps());
    }

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

  _returnableSteps() {
    const {
      componentValues,
      steps,
      prevSteps,
      acPreviousStep,
    } = this.props;
    const valuesMapped = componentValues.map((values, i) => {
        let dynamicStyles =  { color: steps[i] ? 'black' : '#999' };
        if(prevSteps[i + 1] && !steps[i]) dynamicStyles = { ...dynamicStyles, borderBottomWidth: 1, borderBottomColor: '#999' };
        const indice = i + 1;
        return (
          <TouchableOpacity
            activeOpacity={1}
            key={i.toString()}
            onPress={() => {
              if (steps[i + 1]) acPreviousStep(i);
            }}
          >
            <View key={values.id} style={values.vwStep}>
              <Text
                style={[values.txtStyle, dynamicStyles]}
              >
                {indice + '. ' + values.txtStep}
              </Text>
            </View>
          </TouchableOpacity>
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