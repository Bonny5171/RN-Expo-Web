import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { login as loginAction } from '../../actions/auth';
import Routing from '../../utils/routing';
import { extractValueFromEvent, extractKeyFromEvent } from '../../utils/common';
import { Button } from '../../components';

const { Redirect } = Routing;

export class AccountLogin extends Component {
  state = {
    error: '',
  }

  submit = () => {
    const { dispatchLogin } = this.props;
    const { email, password } = this.state; // eslint-disable-line no-unused-vars

    this.setState({ error: '' });
    dispatchLogin({ email });
  }

  handleKeyDown = (event) => {
    if (extractKeyFromEvent(event) === 'Enter') {
        this.submit();
    }
  }

  render() {
    const { error } = this.state;
    const { isLoggedIn, translations } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.loginForm} style={{justifyContent: 'center'}}>
          <Button
            tchbStyle={{
              backgroundColor: '#0085B2',
              height: 27,
              width: 100,
              borderRadius: 45,
            }}
            txtStyle={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
            }}
            txtMsg="Entrar"
            action={this.submit}
          />
          {!!error && <Text>{error}</Text>}
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#00F',
  },
  label: {
    color: '#000',
    margin: 10,
  },
  textinput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    color: '#000',
    padding: 5,
    margin: 10,
  },
  error: {
    color: '#f00',
    margin: 10,
  },
});

export const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  translations: {
    login__email__label: state.locale.translations.login__email__label,
    login__password__label: state.locale.translations.login__password__label,
    login__email__placeholder: state.locale.translations.login__email__placeholder,
    login__password__placeholder: state.locale.translations.login__password__placeholder,
    login: state.locale.translations.login,
  }
});

export const mapDispatchToProps = dispatch => ({
  dispatchLogin: user => dispatch(loginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountLogin);
