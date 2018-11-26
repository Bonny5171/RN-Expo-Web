export const acNextStep = () => {
  return {
      type: 'next_step',
  };
};

export const acNextScreen = (payload) => {
  return {
      type: 'next_screen',
      payload,
  };
};

export const acResetSteps = () => {
  return {
      type: 'reset_steps',
  };
};

export const changePorcent = (payload) => {
  return {
      type: 'change_porc',
      payload
  };
};

export const changeIndeterminate = (payload) => {
  return {
      type: 'change_indeterminate',
      payload
  };
};
