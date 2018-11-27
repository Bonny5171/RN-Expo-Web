import React from 'react';
import { View, StyleSheet } from 'react-native';
import { InputLabel } from '../../../components';
import { Filiais, DropDown } from '.';

class DefineClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputClient: ''
    };
    this.setInput = this.setInput.bind(this);
  }

  render() {
    const {
      dropdown,
      srvClients,
      acFilterList,
      acCurrentClient,
      acLoadStores,
      acToggleDropdown
    } = this.props;
    const { filter } = srvClients;

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, paddingTop: 8 }}>
          <InputLabel
            label="PROCURE POR NOME OU CÓDIGO"
            value={this.state.inputClient}
            inputStyle={styles.input}
            onChangeText={(value) => {
              filter({
                  name: value,
                  positivacao: {
                    a: '',
                    de: ''
                  }
              }
              , acFilterList);
              this.setState({ inputClient: value });
              if (!dropdown) {
                acToggleDropdown();
              }
              if (value === '') {
                // Retira o cliente atual quando input não tiver conteúdo
                acCurrentClient({});
                acLoadStores([]);
              }
            }}
          />
        </View>
        <Filiais
          {...this.props}
        />
        <DropDown
          setInput={this.setInput}
          inputClient={this.state.inputClient}
          {...this.props}
        />
      </View>
    );
  }

  setInput(value) {
    this.setState({ inputClient: value });
  }
}

export default DefineClient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: 600,
    backgroundColor: '#F3F4F6',
  },
});