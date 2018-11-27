import { nextStep } from './common/functions';

const INITIAL_STATE = {
  screen: 0,
  steps: [true, false, false, false],
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
      return { ...state, steps, screen };
    }
    case 'checkbox': {
      // Lógica para funcionar com radio group
      const checkboxes = radioFunction(state.checkboxes, action.position);
      return { ...state, checkboxes };
    }
    case 'filter_branches': {
      const filterBranches = radioFunction(state.checkboxes, action.position);
      return { ...state, filterBranches };
    }
    case 'only_headequarter': {
      const stores = [state.initialStores.find(store => { return store.headquarter === true; })];
      return { ...state, stores };
    }
    case 'only_branches': {
      const stores = [];
      state.initialStores.forEach(store => {
        if (!store.headquarter) {
          stores.push(store);
        }
      });

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