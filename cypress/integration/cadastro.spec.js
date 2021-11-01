/// <reference types="cypress" />

import Chance from 'chance';
let chance = new Chance();

context('Cadastro', () => {
    it('Cadastro de novo usuario', () => {

        cy.visit('index.php');

        cy.get                        ('a[class=login]').click();
        cy.get       ('input#email_create').type(chance.email());
        cy.get                   ('button#SubmitCreate').click();
        cy.get                      ('input#id_gender1').check();
        cy.get ('input#customer_firstname').type(chance.first());
        cy.get   ('input#customer_lastname').type(chance.last());
        cy.get                    ('input#passwd').type('12345');
        cy.get                      ('select#days').select('10');
        cy.get                    ('select#months').select('10');
        cy.get                   ('select#years').select('1999');
        cy.get('input[type=checkbox]').should('have.value', '1');
        cy.get                           ('input#optin').check();
        cy.get         ('input#address1').type(chance.address());
        cy.get                ('input#city').type(chance.city());

        //⬇⬇⬇⬇ Seleciona o elemento na posição x(3) independente do value ou text
        cy.get('select#id_state > option')
            .eq(3)
            .then(element => cy.get('select#id_state').select(element.val()));

        cy.get(      'input#postcode').type(chance.zip()); 
        cy.get('input#phone_mobile').type(chance.phone());
        cy.get     ('input#alias').type(chance.address());
        cy.get           ('button#submitAccount').click();

        //⬇⬇⬇⬇ Validando a url usando baseUrl + rota
        const rota = Cypress.config().baseUrl + '/index.php?controller=my-account';
        cy.url().should('eq', rota);

        //⬇⬇⬇⬇ Validando texto (Welcome to your account)
        cy.get('p[class^=info]').should('contain.text', 'Welcome to your account');
        
    });
});