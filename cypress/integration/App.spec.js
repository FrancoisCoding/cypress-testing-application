// Input Tests
describe('Input Test', () => {
    it('Accepts input', () => {
        const text = 'Isaiah';
        cy.visit('/');
        cy.get('[data-cy=input1]')
            .type(text)
            .should('have.value', text);
    });

    // it('Accepts input2', () => {
    //     cy.visit('/');
    //     cy.get('[data-cy=input2]')
    //         .type('Cypress')
    //         .should('have.value', 'Cypress');
    // });

    it('Has Class', () => {
        cy.visit('/');
        cy.get('[data-cy=input1]').should('have.class', 'input');
    });
});

// Data Test
describe('Button', () => {
    it('Is disabled after data is fetched', () => {
        cy.visit('/');
        cy.get('[data-cy=button]')
            .click()
            .should('be.disabled');
    });
});

// Tests if page routes when link is clicked
describe('Route Test', () => {
    it('Tests if page routes correctly', () => {
        cy.visit('/');

        cy.get('.example').click();

        cy.url().should('include', '/example');
    });
});
