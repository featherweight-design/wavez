import { copyContent } from 'shared/data';

const {
  customizeSection,
  footer,
  header,
  lightsSection,
  mainSection,
  musicSection,
} = copyContent.landingPage;

describe('Landing', () => {
  before(() => {
    cy.visit('/');
  });

  describe('Main section', () => {
    it('Should have a Wavez logo', () => {
      cy.findByAltText(mainSection.imageAlt).should('exist');
    });

    it('Should have three tag lines', () => {
      cy.get('p').findByText(mainSection.tag1).should('exist');
      cy.get('p').findByText(mainSection.tag2).should('exist');
      cy.get('p').findByText(mainSection.tag3).should('exist');
    });

    it('Should have a "Login" button', () => {
      cy.findByText(header.login).should('exist');
    });
  });

  describe('Music section', () => {
    it('Should have a section image', () => {
      cy.findByAltText(musicSection.imageAlt);
    });

    it('Should have a heading', () => {
      cy.findByText(musicSection.heading);
    });

    it('Should have a description', () => {
      cy.findByText(musicSection.description);
    });

    it('Should have a Soundcloud logo', () => {
      cy.findByAltText(musicSection.soundcloudAlt);
    });

    it('Should have a Spotify logo', () => {
      cy.findByAltText(musicSection.spotifyAlt);
    });
  });

  describe('Lights section', () => {
    it('Should have a section image', () => {
      cy.findByAltText(lightsSection.imageAlt);
    });

    it('Should have a heading', () => {
      cy.findByText(lightsSection.heading);
    });

    it('Should have a description', () => {
      cy.findByText(lightsSection.description);
    });

    it('Should have a LIFX logo', () => {
      cy.findByAltText(lightsSection.lifxAlt);
    });

    it('Should have a Nanoleaf logo', () => {
      cy.findByAltText(lightsSection.nanoleafAlt);
    });

    it('Should have a Hue logo', () => {
      cy.findByAltText(lightsSection.hueAlt);
    });
  });

  describe('Customize section', () => {
    it('Should have three section images', () => {
      cy.findByAltText(customizeSection.palettesAlt);
      cy.findByAltText(customizeSection.playlistAlt);
      cy.findByAltText(customizeSection.scenesAlt);
    });

    it('Should have a heading', () => {
      cy.findByText(customizeSection.heading);
    });

    it('Should have a description', () => {
      cy.findByText(customizeSection.description);
    });
  });

  describe('Footer', () => {
    it('Should have a copy right', () => {
      cy.findByText(footer.copyRight);
    });
  });
});
