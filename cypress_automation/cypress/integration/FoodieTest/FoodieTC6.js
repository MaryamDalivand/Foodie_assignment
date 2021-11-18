import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

const url = 'https://app-staging.food.ee/team-order/8lW9umVBhBBcTGor'

Given("I've signed in a guest", () => {
  
  cy.visit(url);
  cy.get('span').should('have.class', 'rd-ui-base-item__text');
  cy.get('button.rd-ui-button.rd-ui-button_secondary.rd-ui-button--block').click(); //click on guest button
  cy.get('p').should('have.class', 'fde-modals-group-order-member-modal_main-info text-center'); //displays the guest inputs
  cy.get('input.ember-text-field.ember-view').eq(0).type('Maryam Dalivand');
  cy.get('input.ember-text-field.ember-view').eq(1).type('maryam.dalivand@gmail.com');
  cy.get('input.fde-phone-number-control_input').type('2369798081');
  cy.get('input.ember-text-field.ember-view').eq(2).type('Engineering');
  cy.get('button.fde-simple-button.fde-modals-basic-modal_submit.small.rounded.expand.fde-is-medium.ember-view').click(); //click on start ordering button
})

When("I've finished ordering and checkout",() => {
  
  cy.contains('Burger with Cheeze').click(); //select an item
  cy.get('label').eq(0).click();
  cy.get('label').eq(3).click(); //choose some options for the selected item
  cy.get('button.rd-ui-button.rd-ui-button_primary.rd-ui-button--block.fde-customize-order-item-button').click(); //click on add button
  cy.contains('Extra Sauce').click(); //select an extra item to do some modification to the menu
  cy.get('button.rd-ui-button.rd-ui-button_primary.rd-ui-button--block.fde-customize-order-item-button').click(); //click on add button
  cy.get('button.round.small.expand.--fde-restaurant-cart-buttons_checkout-btn').click(); //click on place order button
}) //end of step

Then('I am prompted for cutlery',() => {
  cy.get('label').eq(0).click(); //check the cutlery option
  cy.get('button.rd-ui-button.rd-ui-button_primary.rd-ui-button--block').click();//click on continue button
}) //end of step

And("I'm able to accept and finish the checkout process",() => {
  cy.get('h2').should('have.text', 'Order Submitted'); //confirmation of the order submitted
}) //end of step