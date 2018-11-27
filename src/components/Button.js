import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

class Button extends React.Component {
    render() {
      const {
        tchbStyle, txtMsg, turnOffOpacity, isChosen
      } = this.props;
      let { txtStyle } = this.props;

      txtStyle = this.decideTxtStyle();
      return (
        <TouchableOpacity
          activeOpacity={turnOffOpacity && isChosen ? 1 : 0.7}
          onPress={() => this.btnClicked()}
          style={tchbStyle}
        >
          <Text style={txtStyle}>{txtMsg}</Text>
        </TouchableOpacity>
      );
    }

    btnClicked() {
      const {
        rdType, rdName, rdAction, action, params, actions
      } = this.props;

      if (rdAction !== undefined) {
        rdAction(rdType, rdName);
      }

      if (action !== undefined) {
        if (params) {
          action(...params);
        } else {
          action();
        }
      }

      // Este if será o único após refatoração
      // O botão aceita quantas functions e parametros quiser via array
      // Params como array
      if (actions) {
        actions.forEach(({ func, params }) => {
          func(...params);
        });
      }
    }

    decideTxtStyle() {
      const {
        nChosenColor, txtStyle,
        chosenColor, changeColor,
        isChosen, shadow
      } = this.props;

      if (changeColor) {
        let style = isChosen ?
          [txtStyle,
            {
              color: chosenColor,
            }
          ] : [txtStyle, { color: nChosenColor }];
        if (shadow) {
          style = isChosen ? [style,
            {
              textShadowOffset: { width: 1, height: 2 },
              textShadowColor: '#0085B2',
              textShadowRadius: 12
            }
          ] : style;
        }

        return style;
      }
      return txtStyle;
    }
}


export default Button;