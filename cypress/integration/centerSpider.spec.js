'use strict';

describe('Spider application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should center the spider by left border', () => {
    cy.get('.wall').then(($wall) => {
      cy.get('.spider').should(($spider) => {
        const spiderLeft = $spider.offset().left;
        const expectedLeft = ($wall.innerWidth() / 2)
          + ($wall.offset().left + 10) - ($spider.width() / 2);

        expect(spiderLeft).to.equal(expectedLeft);
      });
    });
  });

  it('should center the spider by top border', () => {
    cy.get('.wall').then(($wall) => {
      cy.get('.spider').should(($spider) => {
        const spiderTop = $spider.offset().top;
        const expectedTopAbs = ($wall.innerHeight() / 2)
          + ($wall.offset().top + 10) - ($spider.height() / 2);

        expect(spiderTop).to.equal(expectedTopAbs);
      });
    });
  });
});
