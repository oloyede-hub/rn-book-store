// import '@cypress/code-coverage/support'
import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});