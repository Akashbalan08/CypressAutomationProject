describe('Cypress Test Suite', function() 
{
it('Test case',function() {
cy.visit("https://automationteststore.com/")
cy.wait(1000);
cy.get('#block_frame_bestsellers_1771 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
cy.wait(1000);
cy.get('.cart').click();
cy.wait(1000);
cy.get('#cart_checkout1').click();
cy.wait(1000);
cy.get('#accountFrm_accountguest').click();
cy.wait(1000);
cy.get('#accountFrm > fieldset > .btn').click();
cy.wait(1000);
cy.get('#guestFrm_firstname').type('Reed');
cy.wait(500);
cy.get('#guestFrm_lastname').type('Richards');
cy.wait(500);
cy.get('#guestFrm_email').type('richards08@gmail.com');
cy.wait(500);
cy.get('#guestFrm_telephone').type('4195673241');
cy.wait(500);
cy.get('#guestFrm_company').type('Baxter Foundation');
cy.wait(500);
cy.get('#guestFrm_address_1').type('Bleeker Street');
cy.wait(500);
cy.get('#guestFrm_city').type('Barrie');
cy.wait(500);
cy.get('#guestFrm_postcode').type('N1E2R4');
cy.wait(500);
cy.get('#guestFrm_country_id').select('Canada');
cy.wait(500);
cy.get('#guestFrm_zone_id').select('Ontario');
cy.wait(500);
cy.get('.col-md-12 > .btn-orange').click();
cy.wait(1000);
cy.get('#checkout_btn').click();
cy.wait(1000);
cy.get('.mb40 > .btn').click();
cy.wait(1000);


})
})