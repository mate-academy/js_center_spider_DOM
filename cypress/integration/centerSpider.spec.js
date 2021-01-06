'use strict';

describe('Spider application', () => {
  before(() => {
    cy.visit('/');
  });

  it('should center the spider by left border', () => {
    cy.get('.wall').then(($wall) => {
      cy.get('.spider').should(($spider) => {
        const spider = $spider.get(0);
        const wall = $wall.get(0);

        const spiderLeft = spider.getBoundingClientRect().left;
        const spiderLeftAbs = (wall.clientWidth / 2) + (wall.offsetLeft + 10)
          - (spider.width / 2);

        expect(spiderLeft).to.equal(spiderLeftAbs);
      });
    });
  });

  it('should center the spider by top border', () => {
    cy.get('.wall').then(($wall) => {
      cy.get('.spider').should(($spider) => {
        const spider = $spider.get(0);
        const wall = $wall.get(0);

        const spiderTop = spider.getBoundingClientRect().top;
        const spiderTopAbs = (wall.clientHeight / 2) + (wall.offsetTop + 10)
          - (spider.height / 2);

        expect(spiderTop).to.equal(spiderTopAbs);
      });
    });
  });
});
