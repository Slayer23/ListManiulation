/// <reference types="Cypress" />

describe('Test Project',()=>
{ 

    it('Visit webpage',()=>
    {
        //Visit website
        cy.visit("https://todomvc.com/examples/react/#/")

    })

    it('Add items to list',()=>
    {    
        //Verfies that user is able to add items to list elements
        cy.get('[class="new-todo"]').type("L1").type('{enter}')
        cy.get('[class="new-todo"]').type("L2").type('{enter}')
        cy.get('[class="new-todo"]').type("L3").type('{enter}')
        cy.get('[class="new-todo"]').type("L4").type('{enter}')
        cy.get('[class="new-todo"]').type("L5").type('{enter}')
    })

    it('Move L3 and L4 tasks to completed',()=>
    {    
        //Moves elements L3 and L4 to completed 
        //keeping L3 and L4 hard coded for simplicity
        cy.get('label').contains('L3').parent().find('[class="toggle"]').click()
        cy.get('label').contains('L4').parent().find('[class="toggle"]').click()
    })

    it('Verify list items',()=>
    {
        //Verifies 'All' list items
        cy.get('[data-reactid=".0.2.1.0.0"]').click()
        cy.get('[data-reactid=".0.1.2"]').find('li').should('have.length', 5)

        //Verifies 'Active' list items
        cy.get('[data-reactid=".0.2.1.2"]').click()
        cy.get('[data-reactid=".0.1.2"]').find('li').should('have.length', 3)

        //Verifies 'Completed' list items
        cy.get('[data-reactid=".0.2.1.4.0"]').click()
        cy.get('[data-reactid=".0.1.2"]').find('li').should('have.length', 2)

    })
})