# Foodie_assignment

This repo contains an example Automation Cypress Test with Cucumber and Gherkin on base url : https://app-staging.food.ee/team-order/8lW9umVBhBBcTGor 
To Run the Test :
1. go to the project directory called: cypress_automation 
2. Run command:   npx cypress open    to open Cypress
3. select the Feature file FoodieTest.feature from the list there and run that.

There are 6 JS Files under the project that are the definicions step files to locate elements. They are divided according each Test in the feature file.  
FoodieTC1 , FoodieTC2, FoodieTC3, FoodieTC4, FoodieTC5, FoodieTC6


=> Configurations: 

This Code was added to the index.js under plugins folder (Cypress_automation/cypress/plugins/index.js) : 

              const cucumber = require('cypress-cucumber-preprocessor').default

              module.exports = (on, config) => {
                on('file:preprocessor', cucumber())
              }


cypress.json file contains: 

              {
                "baseUrl": "https://app-staging.food.ee/team-order/8lW9umVBhBBcTGor",
                "testFiles": "**/*.{feature,features}"
              }


package.json file is : 

              {
                "name": "cypress_automation",
                "version": "1.0.0",
                "description": "",
                "main": "index.js",
                "scripts": {
                  "test": "echo \"Error: no test specified\" && exit 1"
                },
                "author": "maryam",
                "license": "ISC",
                "devDependencies": {
                  "cypress": "^9.0.0",
                  "cypress-cucumber-preprocessor": "^4.3.0",
                  "perfecto-cypress-reporter": "0.0.12",
                  "perfecto-cypress-sdk": "0.0.55"
                },
                "cypress-cucumber-preprocessor": {
                  "nonGlobalStepDefinitions": true
                }
              }
              

in the dir : node_modules/cypress-cucumber-preprocessor/lib/resolveStepDefinition.js :

    line 199:     // throw new Error(`Step implementation missing for: ${stepText}`);
    should be commented. 
