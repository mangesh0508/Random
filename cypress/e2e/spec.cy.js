describe('Sardar Patel Institute of Technology NIRF and Placements Test', () => {
  it('Visits SPIT NIRF and Placements Pages and Performs Multiple Checks', () => {

      // Visit the SPIT homepage
      cy.visit('https://www.spit.ac.in');

      // Navigate to the 'NIRF' section
      cy.contains('NIRF', { timeout: 20000 }).should('be.visible').click();

      // Verify the URL now includes 'nirf'
      cy.url().should('include', '/nirf');

      // Use cy.contains to check if any element contains 'NIRF' text
      cy.contains('NIRF', { timeout: 20000 }).should('be.visible');

      // Verify the presence of NIRF ranking information or relevant links
      cy.contains('Ranking', { timeout: 20000 }).should('be.visible');

      // Now navigate to the 'Placements' section from the NIRF page
      cy.contains('Placements', { timeout: 20000 }).should('be.visible').click();

      // Verify the URL now includes 'placements'
      cy.url().should('include', '/placements');

      // Check if any element contains 'Placements'
      cy.contains('Placements', { timeout: 20000 }).should('be.visible');

      // Verify the presence of Placement Statistics or relevant content
      cy.contains('About Us', { timeout: 20000 }).should('be.visible');

      // Check if a 'Contact Placement Officer' or similar button exists
      cy.get('a').contains('Course Of Action', { timeout: 20000 }).should('exist');
  });
});