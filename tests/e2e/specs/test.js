/// <reference types="Cypress" />
// https://docs.cypress.io/api/introduction/api.html
/* eslint-env mocha */
/* global cy */

describe('Sample App', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    describe('Testing Homepage', () => {
        it('Homepage loads', () => {
            cy.contains('Sample App');
        });
    });    
    
    describe('Testing Profile Page', () => {
        it('Should load and show the user data', () => {
            cy.visit('/sign-in');
            cy.login();
            cy.contains('User: test@test.com');
        });
    });

    describe('Testing App Navigation', () => {
        it('Have a Sign In button', () => {
            cy.get('[data-cy=signinBtn]');
        });

        it('Redirects to homepage when not logged in', () => {
            cy.visit('/about');
            cy.location('pathname').should('equal', '/sign-in');
        });

        it('Shows the about page when logged in', () => {
            cy.visit('/sign-in');
            cy.login();
            cy.location('pathname').should('equal', '/about');
        });

    });

    describe('Testing Login Page', () => {
        beforeEach(() => {
            cy.get('[data-cy=signinBtnDesktop]').click();
        });

        it('should require all fields', () => {
            cy.get('[data-cy=signinPasswordField]').type('password');
            cy.get('[data-cy=signinSubmitBtn').should('be.disabled');
        });

        it('email must be valid', () => {
            cy.get('[data-cy=signinEmailField]').type('invalid@mail');
            cy.contains('E-mail must be valid');
            cy.get('[data-cy=signinEmailField]').type('valid@mail.com');
            cy.get('.v-messages__message').should('not.exist');
        });

        it('passwords must be at least 6 characters', () => {
            cy.get('[data-cy=signinPasswordField]').type('hello');
            cy.contains('Password must be greater than 6 characters');
            cy.get('[data-cy=signinPasswordField]').type('helloworld');
            cy.get('.v-messages__message').should('not.exist');
        });

        it('should login user', () => {
            cy.get('[data-cy=signinEmailField]').type('test@test.com');
            cy.get('[data-cy=signinPasswordField]').type('test123');
            cy.get('[data-cy=signinSubmitBtn]').click();
            cy.location('pathname').should('equal', '/about');
        });
    });
});
