import { nextStep, previousStep } from './common/functions';

const INITIAL_STATE = {
  screen: 0,
  steps: [true, false, false, false],
  prevSteps: [true, false, false, false, false],
  checkboxes: [false, false],

  // Vetor de lojas para Aba Visitar Cliente, passo 2
  initialStores: [],
  stores: [],
  filterBranches: [false, false],
  dropdown: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'next_step_assistant': {
      const steps = nextStep(state.steps);
      let { screen } = state;
      
      if (state.screen < steps.length) {
        screen += 1;
      }
      
      const prevSteps = nextStep(state.prevSteps);
      return { ...state, steps, screen, prevSteps };
    }
    case 'previous_step_assistant': {
      const steps = previousStep(state.steps);
      
      if(action.index === 0 && state.steps[action.index]) return state;
      let { screen } = state;
      
      if (state.screen < steps.length) {
        screen -= 1;
      }
      
      const prevSteps = previousStep(state.prevSteps);
      return { ...state, steps, screen, prevSteps };
    }
    case 'checkbox': {
      // Lógica para funcionar com radio group
      const checkboxes = radioFunction(state.checkboxes, action.position);
      return { ...state, checkboxes };
    }
    case 'filter_branches': {
      const filterBranches = [...state.filterBranches];
      filterBranches[action.position] = !state.filterBranches[action.position];      
      return { ...state, filterBranches };
    }
    case 'only_headequarter': {
      let stores = [];
      if (!state.filterBranches[0]) {
        stores = [state.initialStores.find(store => { return store.headquarter === true; })];
      } else {
        stores = [...state.initialStores];
      }

      return { ...state, stores };
    }
    case 'only_branches': {
      const stores = state.stores.map(store => ({ ...store, isChosen: !store.isChosen }));

      return { ...state, stores };
    }
    case 'load_stores': {
      return { ...state, stores: action.stores, initialStores: action.stores };
    }
    case 'choose_store': {
      const store = { ...state.stores[action.position] };
      const newStore = { ...store, isChosen: !store.isChosen };
      const stores = [...state.stores];

      stores[action.position] = newStore;
      return { ...state, stores };
    }
    case 'reset_page': {
      return { ...INITIAL_STATE };
    }
    case 'toggle_dropdown': {
      return { ...state, dropdown: !state.dropdown };
    }
    default: {
      return state;
    }
  }
};

const radioFunction = (array, position) => array.map((bool, index) => index === position);