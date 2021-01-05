'use strict';

describe('Spider application', () => {
  before(() => {
    cy.visit('/');
  });

  it('should center the spider by left border', () => {
    cy.get('.wall').then(($wall) => {
      cy.get('.spider').should(($spider) => {
<<<<<<< HEAD
        const spiderLeft = $spider.offset().left;
        const expectedLeft = ($wall.innerWidth() / 2)
          + ($wall.offset().left + 10) - ($spider.width() / 2);

        expect(spiderLeft).to.equal(expectedLeft);
=======
        const spider = $spider.get(0);
        const wall = $wall.get(0);

        const spiderLeft = spider.getBoundingClientRect().left;
        const spiderLeftAbs = (wall.clientWidth / 2) + (wall.offsetLeft + 10)
          - (spider.width / 2);

        expect(spiderLeft).to.equal(spiderLeftAbs);
>>>>>>> ab4a0a1765489e0911193c6883242f0a6ead3803
      });
    });
  });

  it('should center the spider by top border', () => {
    cy.get('.wall').then(($wall) => {
      cy.get('.spider').should(($spider) => {
<<<<<<< HEAD
        const spiderTop = $spider.offset().top;
        const expectedTopAbs = ($wall.innerHeight() / 2)
          + ($wall.offset().top + 10) - ($spider.height() / 2);
=======
        const spider = $spider.get(0);
        const wall = $wall.get(0);

        const spiderTop = spider.getBoundingClientRect().top;
        const spiderTopAbs = (wall.clientHeight / 2) + (wall.offsetTop + 10)
          - (spider.height / 2);
>>>>>>> ab4a0a1765489e0911193c6883242f0a6ead3803

        expect(spiderTop).to.equal(expectedTopAbs);
      });
    });
  });
});
