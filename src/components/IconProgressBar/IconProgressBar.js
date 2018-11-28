import React from 'react';
import { View, Text } from 'react-native';
import { Font } from '../../assets/fonts/font_names';
import { Button, ProgressBar } from '../../components';

export default ({
  txt, nextStep, icon, percent, indeterminate
}) => {
  let color = '#999';
  const styleButton = [
    {
      fontFamily: Font.C,
      fontSize: 75,
      color
    }
  ];

  // Sombreamento se concluido.
  if (percent === 1) {
    color = '#007ab0';
    styleButton.push({
      textShadowColor: 'rgba(0, 122, 176, 0.85)',
      textShadowOffset: { height: 5 },
      textShadowRadius: 20,
      color
    });
  }

  const porcentagem = parseInt(percent * 100);

  return (
    <View style={{
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Text style={[
            { fontSize: 27, fontFamily: Font.ASemiBold },
            { color }
          ]
        }
      >
        {txt}
      </Text>
      <Button
        shadow
        action={nextStep}
        txtStyle={styleButton}
        txtMsg={icon}
      />
      <ProgressBar
        percent={percent}
        indeterminate={indeterminate}
        color={color}
      />
      {
        !indeterminate 
          ? <Text style={{
                  fontFamily: Font.ARegular, color: '#999'
                }}
              >
                {porcentagem}%
              </Text>
          : <Text/>
      }
    </View>
  );
};
