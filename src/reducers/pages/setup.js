import { nextStep } from './common/functions';
const INITIAL_STATE = {
  // Tela Atual do componente ScreenStep
  screen: 0,
  // Controle do passo atual do componente Steps
  steps: [
    // Passo 1
    true,
    // Passo 2
    false,
    // Passo 3
    false,
  ],

  // Barra de progresso de download
  // do componente IconProgressBar com porcentagens 0-100
  iProgressBar: {
    product: 0,
    account: 0,
    resource: 0,
    orders: 0,
    medias: 0
  },

  // Barra de progresso de download
  // Em processo de preparação.
  indeterminate: {
    product: true,
    account: true,
    resource: true,
    orders: true,
    medias: true
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'next_step': {
      const steps = nextStep(state.steps);
      let { screen } = state;
      if (state.screen < steps.length) {
        screen += 1;
      }
      return { ...state, steps, screen };
    }
    case 'next_screen': {
      return { ...state, screen: action.payload };
    }
    case 'reset_steps': {
      return { ...state, INITIAL_STATE };
    }
    case 'change_porc': {
      const { iProgressBar } = state;
      let { steps, screen } = state;
      const newiProgressBar = Object.assign({}, iProgressBar, action.payload);

      if (newiProgressBar.product === 1 &&
          newiProgressBar.account === 1 &&
          newiProgressBar.resource === 1) {
        steps = [false, true, false];
        screen = 1;
      }

      return {
        ...state,
        iProgressBar: newiProgressBar,
        steps,
        screen
       };
    }
    case 'change_indeterminate': {
      const { indeterminate } = state;
      return {
        ...state,
        indeterminate: Object.assign({},
          indeterminate,
          action.payload
        )
      };
    }
    default:
      return state;
  }
};