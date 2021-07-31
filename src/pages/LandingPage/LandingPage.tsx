import { FC } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { Button, CircleLoader } from '@f-design/component-library';

import { copyContent } from 'shared/data';
import {
  GET_RICK_AND_MORTY_CHARACTERS_BY_ID,
  GET_RICK_AND_MORTY_CHARACTER_COUNT,
} from 'shared/queries';
import './LandingPage.scss';

const {
  heading,
  subHeading,
  imageAlt,
  getCharacterButton,
} = copyContent.landingPage;

const LandingPage: FC = () => {
  const { data: countData } = useQuery(GET_RICK_AND_MORTY_CHARACTER_COUNT);
  const [
    getCharacterById,
    { loading: characterLoading, data: characterData },
  ] = useLazyQuery(GET_RICK_AND_MORTY_CHARACTERS_BY_ID);

  const count = countData?.characters?.info?.count;

  const getRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * count) + 1;

    getCharacterById({ variables: { ids: [randomId] } });
  };

  const renderRickAndMortyCharacter = () => {
    const { id, name, species, image } = characterData.charactersByIds[0];

    return (
      <>
        <img
          src={image}
          alt={name}
          className="app-initials-landing-page__character-image"
        />

        <p>{`${id} | ${name} | ${species}`}</p>
      </>
    );
  };

  return (
    <div className="app-initials-landing-page">
      <h1 className="app-initials-landing-page__heading">{heading}</h1>

      <p className="app-initials-landing-page__sub-heading">{subHeading}</p>

      <div className="app-initials-landing-page__container">
        {!characterLoading && !characterData && (
          <img
            className="app-initials-landing-page__image"
            src={`${process.env.PUBLIC_URL}/assets/logo512.png`}
            alt={imageAlt}
          />
        )}

        {characterLoading && <CircleLoader color="#fff" />}

        {characterData && renderRickAndMortyCharacter()}
      </div>

      <Button variant="brand" onClick={getRandomCharacter}>
        {getCharacterButton}
      </Button>
    </div>
  );
};

export default LandingPage;
