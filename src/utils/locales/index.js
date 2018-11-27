const locales = {
  'en-US': require('./en-US.js'),
  'de-DE': require('./de-DE.js'),
  'pt-BR': require('./pt-BR.js'),
};

export const localeOptions = [
  {
    label: 'en',
    value: 'en-US',
  },
  {
    label: 'de',
    value: 'de-DE',
  },
  {
    label: 'pt',
    value: 'pt-BR',
  },
];

const getTranslations = (locale = 'pt-BR') => locales[locale];

export default getTranslations;
