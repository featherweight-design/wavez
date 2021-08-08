import { FC, useEffect, useState } from 'react';
import { Button } from '@f-design/component-library';
import { useAuth0 } from '@auth0/auth0-react';
import useScrollPosition from '@react-hook/window-scroll';
import { useWindowHeight } from '@react-hook/window-size';

import { ReactComponent as Squiggle } from 'assets/backgrounds/desktop/Squiggle.svg';
import Logo from 'assets/logo/Waves Wordmark Large.png';
import MusicIcon from 'assets/icons/Music Icon.png';
import { copyContent } from 'shared/data';
import './Landing.scss';

const { header, mainSection, musicSection } = copyContent.landingPage;

const Landing: FC = () => {
  const [offset, updateOffset] = useState(0);
  const scrollY = useScrollPosition(60);
  const windowHeight = useWindowHeight();
  const { user, loginWithRedirect, logout } = useAuth0();

  const { scrollHeight } = document.body;
  const squiggleTopOffset = windowHeight - 100;
  const squiggleHeight = scrollHeight - squiggleTopOffset;
  const squiggleWidth = squiggleHeight * 0.38;

  useEffect(() => {
    const newOffset = Math.round(
      (scrollY * 103) / ((scrollHeight + squiggleHeight) / 2)
    );

    if (newOffset !== offset) {
      updateOffset(newOffset);
    }
  }, [scrollY]);

  const classNameRoot = 'wavez-landing-page';

  return (
    <section className={classNameRoot}>
      <header className={`${classNameRoot}__header`}>
        {user ? (
          <Button variant="brand" onClick={logout}>
            {header.logout}
          </Button>
        ) : (
          <Button variant="brand" onClick={loginWithRedirect}>
            {header.login}
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
        className={`${classNameRoot}__squiggle-container`}
        style={{
          top: `${squiggleTopOffset}px`,
          height: `${squiggleHeight}px`,
          width: `${squiggleWidth}px`,
        }}
      >
        <Squiggle className={`${classNameRoot}__squiggle`} />
      </div>

      <section
        className={`${classNameRoot}__content-section ${classNameRoot}__content-section-main`}
      >
        <img
          className={`${classNameRoot}__logo`}
          src={Logo}
          alt={mainSection.imageAlt}
        />

        <article
          className={`${classNameRoot}__background-circle ${classNameRoot}__background-circle-main`}
        >
          <div className={`${classNameRoot}__section-title-container`}>
            <div className={`${classNameRoot}__section-background`} />
            <p className={`${classNameRoot}__section-title`}>
              {mainSection.tag1}
            </p>
          </div>

          <div className={`${classNameRoot}__section-title-container`}>
            <div className={`${classNameRoot}__section-background`} />
            <p className={`${classNameRoot}__section-title`}>
              {mainSection.tag2}
            </p>
          </div>

          <div className={`${classNameRoot}__section-title-container`}>
            <div className={`${classNameRoot}__section-background`} />
            <p className={`${classNameRoot}__section-title`}>
              {mainSection.tag3}
            </p>
          </div>
        </article>
      </section>

      <section
        className={`${classNameRoot}__content-section ${classNameRoot}__content-section-music`}
      >
        <img
          className={`${classNameRoot}__`}
          src={MusicIcon}
          alt={musicSection.imageAlt}
        />
      </section>

      <section
        className={`${classNameRoot}__content-section ${classNameRoot}__content-section-lights`}
      >
        Lights
      </section>

      <section
        className={`${classNameRoot}__content-section ${classNameRoot}__content-section-customize`}
      >
        Customize
      </section>
    </section>
  );
};

export default Landing;
