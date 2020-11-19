/* eslint-disable strict */
/// <reference types="Cypress" />

describe(('Spider application'), () => {
  before(() => {
    cy.visit('/');
  });

  it('spider should be centered', () => {
    cy.wait(1000);

    cy.get('.spider').then(($spider) => {
      cy.get('.wall').then(($wall) => {
        const spiderLeft = $spider.get(0).getBoundingClientRect().left;
        const spiderLeftAbs = ($wall.get(0).clientWidth / 2) + ($wall.get(0).offsetLeft + 10) - ($spider.get(0).width / 2);

        expect(spiderLeft).to.equal(spiderLeftAbs);
      });
    });
  });
});
