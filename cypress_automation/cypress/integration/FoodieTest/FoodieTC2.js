import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

const url = 'https://app-staging.food.ee/team-order/8lW9umVBhBBcTGor'

Given('I Navigate to "https://app-staging.food.ee/team-order/8lW9umVBhBBcTGor"', () => {
  
  cy.visit(url);
})

When('I sign select sign in as a guest',() => {
  cy.visit(url);
  cy.get('span').should('have.class', 'rd-ui-base-item__text');
  cy.get('button.rd-ui-button.rd-ui-button_secondary.rd-ui-button--block').click(); //click on guest button
}) //end of step

Then('I am presented with a details form that validates my inputs',() => {

  cy.get('p').should('have.class', 'fde-modals-group-order-member-modal_main-info text-center'); //displays the guest inputs
  cy.get('input.ember-text-field.ember-view').eq(0).type('Maryam Dalivand');
  cy.get('input.ember-text-field.ember-view').eq(1).type('maryam.dalivand@gmail.com');
  cy.get('input.fde-phone-number-control_input').type('2369798081');
  cy.get('input.ember-text-field.ember-view').eq(2).type('Engineering');
  cy.get('button.fde-simple-button.fde-modals-basic-modal_submit.small.rounded.expand.fde-is-medium.ember-view').click(); //click on start ordering button
}) //end of step