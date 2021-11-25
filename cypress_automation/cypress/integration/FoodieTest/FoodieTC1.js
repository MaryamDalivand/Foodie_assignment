import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

const url = 'https://app-staging.food.ee/team-order/8lW9umVBhBBcTGor'

Given('I Navigate to {string}', (url) => {
  
  cy.visit(url);
})

When('Presented with the signing modal',() => {
  cy.get('span').should('have.class', 'rd-ui-base-item__text'); //displays the dialouge box
}) //end of step

Then('I am able to select guest or sign in',() => {

  cy.get('button.rd-ui-button.rd-ui-button_primary.rd-ui-button--block.rd-mb-8').click(); //click on sing in button
  cy.get('div').should('have.class', 'field-for-control-and-commit-buttons'); //displays the sign in inputs
  cy.get('button.rd-ui-button.rd-ui-button--block.rd-ui-button--text').click(); //click on back button
  cy.get('button.rd-ui-button.rd-ui-button_secondary.rd-ui-button--block').click(); //click on guest button and sign in as a guest
  cy.get('p').should('have.class', 'fde-modals-group-order-member-modal_main-info text-center'); //displays the guest inputs
}) //end of step

And('I am able to sign in as a guest',() => {
  
  cy.get('input.ember-text-field.ember-view').eq(0).type('Maryam Dalivand');
  cy.get('input.ember-text-field.ember-view').eq(1).type('maryam.dalivand@gmail.com');
  cy.get('input.fde-phone-number-control_input').type('2369798081');
  cy.get('input.ember-text-field.ember-view').eq(2).type('Engineering');
  cy.get('button.fde-simple-button.fde-modals-basic-modal_submit.small.rounded.expand.fde-is-medium.ember-view').click(); //click on start ordering button
}) //end of step