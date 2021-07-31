import { FC } from 'react';
// import { useLazyQuery, useQuery } from '@apollo/client';
import { Button } from '@f-design/component-library';
import { useAuth0 } from '@auth0/auth0-react';

import { copyContent } from 'shared/data';
// import {
//   GET_RICK_AND_MORTY_CHARACTERS_BY_ID,
//   GET_RICK_AND_MORTY_CHARACTER_COUNT,
// } from 'shared/queries';
import './LandingPage.scss';

const {
  heading,
  subHeading,
  imageAlt,
  loginButton,
  logoutButton,
} = copyContent.landingPage;

const LandingPage: FC = () => {
  const { user, loginWithRedirect, logout } = useAuth0();
  // const { data: countData } = useQuery(GET_RICK_AND_MORTY_CHARACTER_COUNT);
  // const [
  //   getCharacterById,
  //   { loading: characterLoading, data: characterData },
  // ] = useLazyQuery(GET_RICK_AND_MORTY_CHARACTERS_BY_ID);

  // const getRandomCharacter = () => {
  //   const randomId = Math.floor(Math.random() * count) + 1;

  //   getCharacterById({ variables: { ids: [randomId] } });
  // };

  return (
    <div className="app-initials-landing-page">
      <h1 className="app-initials-landing-page__heading">{heading}</h1>

      <p className="app-initials-landing-page__sub-heading">{subHeading}</p>

      <div className="app-initials-landing-page__container">
        {!user && (
          <img
            className="app-initials-landing-page__image"
            src={`${process.env.PUBLIC_URL}/assets/logo/Waves Wordmark.png`}
            alt={imageAlt}
          />
        )}

        {user && (
          <>
            <img
              src={user.picture}
              alt={user.name}
              className="app-initials-landing-page__character-image"
            />

            <p>{`${user.name} | ${user.email}`}</p>
          </>
        )}
      </div>

      {user ? (
        <Button variant="brand" onClick={logout}>
          {logoutButton}
        </Button>
      ) : (
        <Button variant="brand" onClick={loginWithRedirect}>
          {loginButton}
        </Button>
      )}
    </div>
  );
};

export default LandingPage;
