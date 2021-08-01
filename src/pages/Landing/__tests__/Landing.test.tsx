import { cleanup, render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { copyContent } from 'shared/data';
import mocks from './mocks/rickAndMortyApollo.mock';
import Landing from '../Landing';

const { heading, subHeading, imageAlt, loginButton } = copyContent.landingPage;

describe('Landing tests', () => {
  beforeEach(() => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Landing />
      </MockedProvider>
    );
  });

  afterEach(cleanup);

  it('Should have a heading', () => {
    const headingElement = screen.getByText(heading);

    expect(headingElement).toBeInTheDocument();
  });

  it('Should have a sub-heading', () => {
    const subHeadingElement = screen.getByText(subHeading);

    expect(subHeadingElement).toBeInTheDocument();
  });

  it('Should have an image', () => {
    const imageElement = screen.getByAltText(imageAlt);

    expect(imageElement).toBeInTheDocument();
  });

  it('Should have a button to get a Rick and Morty character', () => {
    const buttonElement = screen.getByText(loginButton);

    expect(buttonElement).toBeInTheDocument();
  });
});
