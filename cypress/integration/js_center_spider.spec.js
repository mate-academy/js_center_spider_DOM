'use strict';

describe(('Tests'), () => {
  before(() => {
    cy.visit('/');
  });

  it('Spider is centered.', () => {
    cy.get("body").then(($body) => {
      if ($body.find("[style = 'top: 50%; left: 50%; transform: translate(-50%, -50%);']").length > 0) {
        cy.get('.spider').should('have.attr', 'style', 'top: 50%; left: 50%; transform: translate(-50%, -50%);');
      } else {
        cy.get('.spider').should('have.attr', 'style', 'top: 175px; left: 175px;')
      };
    });
  });
});
