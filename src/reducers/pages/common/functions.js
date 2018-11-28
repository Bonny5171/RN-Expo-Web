export const updateComponent = (name, components) => {
  const updatedComponents = components.map(oldComponent => {
    const component = { ...oldComponent };
    if (component.isChosen) {
      component.isChosen = false;
    } else if (component.name === name) {
      component.isChosen = true;
    }
    return component;
  });

  return updatedComponents;
};

export const closePopUp = (components) => {
  const updatedComponents = [...components];
  updatedComponents.forEach(component => {
      component.isChosen = false;
  });

  return updatedComponents;
};


export const openClosePopUp = (name, popups) => {
  let updatedPopUps = [];
  updatedPopUps = popups.map(popup => {
    if (popup.isChosen) {
      return { ...popup, isChosen: false };
    } else if (popup.name === name) {
      return { ...popup, isChosen: true };
    }
    return popup;
  });

  return updatedPopUps;
};

export const nextStep = (steps) => {
  const newSteps = [...steps];
    for (let i = 0; i < newSteps.length - 1; i += 1) {
      // Caso seja o passo atual,
      // O atual se tornará falso
      // O seguinte será true ( que é considerado como atual )
      if (newSteps[i]) {
        newSteps[i] = false;
        newSteps[i + 1] = true;
        break;
      }
    }
  return newSteps;
};

export const previousStep = (steps) => {
  const newSteps = [...steps];
    for (let i = 0; i < newSteps.length - 1; i += 1) {
      // Caso seja o passo atual,
      // O atual se tornará falso
      // O seguinte será true ( que é considerado como atual )
      if (newSteps[i]) {
        newSteps[i] = false;
        newSteps[i - 1] = true;
        break;
      }
    }
  return newSteps;
};