import { FC, useEffect, useState } from 'react';
import { Button } from '@f-design/component-library';
import { useAuth0 } from '@auth0/auth0-react';
import useScrollPosition from '@react-hook/window-scroll';
import { useWindowHeight } from '@react-hook/window-size';

import Logo from 'assets/logo/Waves Wordmark Large.png';
import { ReactComponent as Squiggle } from 'assets/backgrounds/desktop/Squiggle.svg';
import { copyContent } from 'shared/data';
import './Landing.scss';

const { imageAlt, loginButton, logoutButton } = copyContent.landingPage;

const Landing: FC = () => {
  const [offset, updateOffset] = useState(0);
  const scrollY = useScrollPosition(60);
  const windowHeight = useWindowHeight();
  const { user, loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    const newOffset = Math.round((scrollY * 100) / document.body.scrollHeight);
    console.log(Math.round(offset));

    if (newOffset < 20) {
      updateOffset(newOffset);
    } else if (newOffset > 20 && newOffset < 50) {
      updateOffset(newOffset + 2);
    } else if (offset > 50 && newOffset < 75) {
      updateOffset(newOffset + 4);
    } else if (newOffset > 75 && newOffset < 100) {
      const remainder = 25;

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < remainder; i++) {
        updateOffset(newOffset + i);
      }
    }
  }, [scrollY]);

  return (
    <section className="wavez-landing-page">
      <header className="wavez-landing-page__header">
        {user ? (
          <Button variant="brand" onClick={logout}>
            {logoutButton}
          </Button>
        ) : (
          <Button variant="brand" onClick={loginWithRedirect}>
            {loginButton}
          </Button>
        )}
      </header>

      <svg
        style={{ width: 0, height: 0, position: 'absolute' }}
        aria-hidden="true"
        focusable="false"
      >
        <linearGradient id="my-cool-gradient" x2="0" y2="1">
          <stop offset="0%" stopColor="#00FFE5" />
          <stop offset={`${offset}%`} stopColor="#00FFE5" />
          <stop
            id="gradient-transparent-stop"
            offset={`${offset}%`}
            stopColor="transparent"
          />
        </linearGradient>
      </svg>

      <div
        className="wavez-landing-page__squiggle-container"
        style={{ top: `${windowHeight - 100}px` }}
      >
        <Squiggle
          className="wavez-landing-page__squiggle"
          style={{
            // height: `calc(100vh * 4 - ${windowHeight / 2}`,
            paddingBottom: '92%',
          }}
        />
      </div>

      <section className="wavez-landing-page__content-section wavez-landing-page__content-section-main">
        <img className="wavez-landing-page__logo" src={Logo} alt={imageAlt} />

        <article className="wavez-landing-page__background-circle wavez-landing-page__background-circle-main">
          <div className="wavez-landing-page__section-title-container">
            <div className="wavez-landing-page__section-background" />
            <p className="wavez-landing-page__section-title">Your music</p>
          </div>

          <div className="wavez-landing-page__section-title-container">
            <div className="wavez-landing-page__section-background" />
            <p className="wavez-landing-page__section-title">Your lights</p>
          </div>

          <div className="wavez-landing-page__section-title-container">
            <div className="wavez-landing-page__section-background" />
            <p className="wavez-landing-page__section-title">In sync</p>
          </div>
        </article>
      </section>

      <section className="wavez-landing-page__content-section wavez-landing-page__content-section-music">
        Music
      </section>

      <section className="wavez-landing-page__content-section wavez-landing-page__content-section-lights">
        Lights
      </section>

      <section className="wavez-landing-page__content-section wavez-landing-page__content-section-customize">
        Customize
      </section>
    </section>
  );
};

export default Landing;
