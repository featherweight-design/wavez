import { copyContent } from 'shared/data';

const {
  heading,
  subHeading,
  imageAlt,
  getCharacterButton,
} = copyContent.landingPage;

describe('LandingPage', () => {
  before(() => {
    cy.visit('/');
  });

  it('Should have a heading', () => {
    cy.get('h1').findByText(heading).should('exist');
  });

  it('Should have a sub-heading', () => {
    cy.get('p').findByText(subHeading).should('exist');
  });

  it('Should have an image', () => {
    cy.findByAltText(imageAlt).should('exist');
  });

  it('Should have a button to get a Rick and Morty character', () => {
    cy.findByText(getCharacterButton).should('exist');
  });
});
