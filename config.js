const authWeb = false;

const path = {
  db: '/db/download',
  schema: '/db-schema',
  trackingChanges: '/db-tracking-changes',
  devices: '/devices',
};

const services = [
  {
    nome: 'account',
    host: 'https://everysfa-api-account-dev.azurewebsites.net/api/',
    version: 'v1',
    path
  }, {
    nome: 'product',
    host: 'https://everysfa-api-product-dev.azurewebsites.net/api/',
    version: 'v1',
    path
  }, {
    nome: 'setup',
    host: 'https://everysfa-api-setup-dev.azurewebsites.net/api/',
    version: 'v1',
    path
  }, {
    nome: 'resource',
    host: 'https://everysfa-api-resource-dev.azurewebsites.net/api/',
    version: 'v1',
    path
  }
];

export { services, authWeb };