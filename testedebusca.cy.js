/// <reference types="cypress" />

describe('Funcionalidade Busca', () =>{
    
    beforeEach(() => {
        cy.visit('https://www.buscape.com.br/landing-page/cashback-buscape-brastemp')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve buscar o produto corretamente' , () =>{
        cy.get('[data-test="input-search"]').type('cpu')
        cy.get('.AutoCompleteStyle_submitButton__VwVxN').click()
        cy.get('[data-testid="breadcrumb"]').should('contain'  , 'Computador')
    })

    it('Deve buscar o produto erroneamente' , () =>{
        cy.get('[data-test="input-search"]').type('cp')
        cy.get('.AutoCompleteStyle_submitButton__VwVxN').click()
        cy.get('.SearchPageContent_SearchPageContent__Is4eZ').should('contain'  , 'Purificador')
    })

    it('Deve aparecer produto nao existente' , () =>{
        cy.get('[data-test="input-search"]').type('cpuinds')
        cy.get('.AutoCompleteStyle_submitButton__VwVxN').click()
        cy.get('.SearchPageContent_SearchPageContent__Is4eZ').should('contain' , 'Ooops......... não encontramos resultados para sua busca')

        
    })
})