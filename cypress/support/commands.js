// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('Registration', () => { cy.request({
    method:'POST', 
    url:'https://provider.test.carefer.co/api/provider/v1/auth/register', 
    headers: {
      "Platform":"careferProviderApplication2Ej!%",
      "Accept":"application/json"
    },
    body: {     
     "password": "134568", 
    "password_confirmation": "134568", 
    "favorite_language": "en", 
    "responsible_person": "Test_Automation5", 
    "is_accept_terms_and_conditions": true, 
    "name": "Mohamed", 
    "mobile": "966509809145", 
    "email": "Test_Automat5555@gmail.com"
     }
    })
 })
 Cypress.Commands.add('Verify', () => { cy.request({
    method:'POST', 
    url:'http://provider.test.carefer.co/api/provider/v1/auth/verify', 
    headers: {
      "Platform":"careferProviderApplication2Ej!%",
      "Accept":"application/json"
    },
    body: {     
      "mobile": "966509809679",
      "verification_code": "9531"


     }
    })
})
Cypress.Commands.add('Login', () => { cy.request({
    method:'POST', 
    url:'http://provider.test.carefer.co/api/provider/v1/auth/login', 
    headers: {
      "Platform":"careferProviderApplication2Ej!%",
      "Accept":"application/json"
    },
    body: {     
      "mobile": "966556677888",
      "password": "123456"



     }
    })
    Cypress.Commands.add('Login', () => { cy.request({
        method:'POST', 
        url:'http://provider.test.carefer.co/api/provider/v1/auth/login', 
        headers: {
          "Platform":"careferProviderApplication2Ej!%",
          "Accept":"application/json"
        },
        body: {     
          "mobile": "966556677888",
          "password": "123456"
    
    
    
         }
        })
})
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })