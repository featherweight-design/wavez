import { FC } from 'react';
import { Button } from '@f-design/component-library';
import { useAuth0 } from '@auth0/auth0-react';

import Logo from 'assets/logo/Waves Wordmark Large.png';
import { copyContent } from 'shared/data';
import './Landing.scss';

const { imageAlt, loginButton, logoutButton } = copyContent.landingPage;

const Landing: FC = () => {
  const { user, loginWithRedirect, logout } = useAuth0();

  return (
    <main className="wavez-landing-page">
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
      <section className="wavez-landing-page__content-section">
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
    </main>
  );
};

export default Landing;
