/// <reference types="cypress" />

describe('Numadic programming test', ()=>{
    it('Automation testing for QA profile validation', ()=>{
        
        cy.visit('https://numadic.com/careers/')
        .contains('JOIN OUR CREW')
        cy.screenshot()
    

        cy.get('#job_type')
        .select('Internship')
        cy.screenshot()
    
        cy.get('.dataTables_empty')
        cy.contains('There are no available job positions that match your filters')
        cy.screenshot()
    

        cy.get('#job_type')
        .select('Full time')
        cy.screenshot()
    
        cy.contains('QA Engineer')
        .click()
        cy.screenshot()
    
        cy.url()
        .should('include','/qa-engineer')
        cy.screenshot()
    


        cy.get('.btn.btn-lg.btn-red').scrollIntoView()
        .click()
        cy.screenshot()
    


        cy.url()
        .should('include','https://numadic.com/careers/') 
        cy.screenshot()
    
        cy.viewport(640, 640)
        cy.contains('QA Engineer')
        cy.xpath('//tbody/tr[10]/td[5]/button[1]')
        .trigger('mouseover')
        .click()
        cy.screenshot()
    
       

        cy.xpath('//h3[normalize-space()="Personal details"]')
        cy.screenshot()
    


        cy.xpath('//label[@id="name_label"]').should('contain','First name')
        cy.xpath('//input[@id="firstName"]').type('Akshay').should('have.value','Akshay')
        cy.screenshot()
    
    
       
        cy.xpath('//label[normalize-space()="Last name"]').should('contain','Last name')
        cy.get('#lastName').type('Mankar').should('have.value','Mankar')
        cy.screenshot()
    


        cy.xpath('//label[@id="email_label"]').should('contain','Email')
        cy.get('#email').type('ak.mankar9@gmail.com').should('have.value','ak.mankar9@gmail.com')
        cy.screenshot()
    


        cy.get('#phone_label').should('contain.text','Mobile')
        cy.get('#phone').type('9987765111').should('have.value','9987765111')
        cy.screenshot()
    

        cy.get('#sports_label').should('contain','Sports you watch and/or play?')
        cy.get('#sports')
        .select('Counter Strike')
        .should('have.value','Counter Strike')
        cy.screenshot()
     
    
        cy.xpath('//label[@id="pets_label"]').should('contain','Dogs or Cats?')
        cy.get('#pets')
        .select('Pokemon')
        .should('have.value','Pokemon')
        cy.screenshot()
    

        cy.xpath('//label[normalize-space()="Current city"]').should('contain','Current city')
        cy.get('#current_city').type('Mumbai').should('have.value','Mumbai')
        cy.screenshot()
    
        cy.xpath('//label[normalize-space()="Hometown"]').should('contain','Hometown')
        cy.get('#hometown').type('Mumbai').should('have.value','Mumbai')
        cy.screenshot()
    
        
        cy.xpath('//label[normalize-space()="Date of birth"]').should('contain','Date of birth')
        cy.get('#dob').type('21/09/2022').should('have.value','21/09/2022')
        cy.screenshot()
    

        

        
        
       
      
        
      
       
       
    })


})