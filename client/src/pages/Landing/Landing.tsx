import { FC, useEffect, useState } from 'react';
import { Button } from '@f-design/component-library';
import { useMutation } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import useScrollPosition from '@react-hook/window-scroll';
import { useWindowHeight } from '@react-hook/window-size';
import clsx from 'clsx';

import { ReactComponent as Squiggle } from 'assets/backgrounds/desktop/Squiggle.svg';
import HueIcon from 'assets/icons/Hue Icon.png';
import LifxIcon from 'assets/icons/Lifx Icon.png';
import LightsIcon from 'assets/icons/Lightbulb Icon.png';
import Logo from 'assets/logo/Waves Wordmark Large.png';
import MusicIcon from 'assets/icons/Music Icon.png';
import NanoleafIcon from 'assets/icons/Nanoleaf Icon.png';
import PalettesIcon from 'assets/icons/Palettes Icon.png';
import PlaylistsIcon from 'assets/icons/Playlists Icon.png';
import ScenesIcon from 'assets/icons/Scenes Icon.png';
import SoundcloudIcon from 'assets/icons/Soundcloud Icon.png';
import SpotifyIcon from 'assets/icons/Spotify Icon.png';
import { copyContent } from 'shared/data';
import SIGN_IN from 'shared/mutations/SignIn';

import './Landing.scss';

const {
  customizeSection,
  footer,
  header,
  lightsSection,
  mainSection,
  musicSection,
} = copyContent.landingPage;

const Landing: FC = () => {
  const scrollY = useScrollPosition(60);
  const windowHeight = useWindowHeight();
  const { user, loginWithRedirect, logout } = useAuth0();
  const [signIn, { data, loading }] = useMutation<
    {
      user: {
        id: string;
        name: string;
        email: string;
        invites: number;
        role: string;
      };
      token: string;
    },
    { email: string }
  >(SIGN_IN);
  const [offset, updateOffset] = useState(0);
  const [hiddenElements, updateHiddenElements] = useState([
    'mainBackgroundCircle',
    'mainTag1',
    'mainTag2',
    'mainTag3',
  ]);

  const { scrollHeight } = document.body;
  const squiggleTopOffset = windowHeight - 100;
  const squiggleHeight = scrollHeight - squiggleTopOffset;
  const squiggleWidth = squiggleHeight * 0.38;

  useEffect(() => {
    removeElementByIndex(hiddenElements, 4);
  }, []);

  useEffect(() => {
    (async () => {
      if (user?.email) {
        try {
          await signIn({ variables: { email: user.email } });
        } catch (error) {
          // console.error(error);
        }
      }
    })();
  }, [user]);

  const removeElementByIndex = (elements: string[], count: number): void => {
    if (count === 0) {
      return;
    }
    setTimeout(() => {
      const updatedElements = [...elements];
      updatedElements.splice(0, 1);
      updateHiddenElements(updatedElements);
      removeElementByIndex(updatedElements, count - 1);
    }, 1000);
  };

  useEffect(() => {
    const newOffset = Math.round((scrollY * 103) / (squiggleHeight + 45));

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
          className={clsx({
            [`${classNameRoot}__background-circle`]: true,
            [`${classNameRoot}__background-circle-main`]: true,
            [`${classNameRoot}__background-circle-main-hidden`]:
              hiddenElements.includes('mainBackgroundCircle'),
          })}
        >
          <div
            className={clsx({
              [`${classNameRoot}__section-title-container`]: true,
              [`${classNameRoot}__section-title-container-hidden`]:
                hiddenElements.includes('mainTag1'),
            })}
          >
            <div className={`${classNameRoot}__section-background`} />
            <p className={`${classNameRoot}__section-title`}>
              {mainSection.tag1}
            </p>
          </div>

          <div
            className={clsx({
              [`${classNameRoot}__section-title-container`]: true,
              [`${classNameRoot}__section-title-container-hidden`]:
                hiddenElements.includes('mainTag2'),
            })}
          >
            <div className={`${classNameRoot}__section-background`} />
            <p className={`${classNameRoot}__section-title`}>
              {mainSection.tag2}
            </p>
          </div>

          <div
            className={clsx({
              [`${classNameRoot}__section-title-container`]: true,
              [`${classNameRoot}__section-title-container-hidden`]:
                hiddenElements.includes('mainTag3'),
            })}
          >
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
        <div
          className={`${classNameRoot}__background-circle ${classNameRoot}__background-circle-feature ${classNameRoot}__background-circle-feature-music`}
        />

        <article className={`${classNameRoot}__content-section-wrapper`}>
          <img
            className={`${classNameRoot}__content-icon`}
            src={MusicIcon}
            alt={musicSection.imageAlt}
          />

          <div className={`${classNameRoot}__section-title-container`}>
            <div className={`${classNameRoot}__section-background`} />
            <h2 className={`${classNameRoot}__section-title-feature`}>
              {musicSection.heading}
            </h2>
          </div>

          <p
            className={`${classNameRoot}__section-description ${classNameRoot}__section-description-music`}
          >
            {musicSection.description}
          </p>

          <div
            className={`${classNameRoot}__content-icon-container ${classNameRoot}__content-icon-container-music`}
          >
            <img
              className={`${classNameRoot}__content-icon-soundcloud`}
              src={SoundcloudIcon}
              alt={musicSection.soundcloudAlt}
            />

            <img
              className={`${classNameRoot}__content-icon-spotify`}
              src={SpotifyIcon}
              alt={musicSection.spotifyAlt}
            />
          </div>
        </article>
      </section>

      <section
        className={`${classNameRoot}__content-section ${classNameRoot}__content-section-lights`}
      >
        <div
          className={`${classNameRoot}__background-circle ${classNameRoot}__background-circle-feature ${classNameRoot}__background-circle-feature-lights`}
        />

        <article className={`${classNameRoot}__content-section-wrapper`}>
          <img
            className={`${classNameRoot}__content-icon`}
            src={LightsIcon}
            alt={lightsSection.imageAlt}
          />

          <div className={`${classNameRoot}__section-title-container`}>
            <div className={`${classNameRoot}__section-background`} />
            <h2 className={`${classNameRoot}__section-title-feature`}>
              {lightsSection.heading}
            </h2>
          </div>

          <p
            className={`${classNameRoot}__section-description ${classNameRoot}__section-description-lights`}
          >
            {lightsSection.description}
          </p>

          <div
            className={`${classNameRoot}__content-icon-container ${classNameRoot}__content-icon-container-lights`}
          >
            <img
              className={`${classNameRoot}__content-icon-lifx`}
              src={LifxIcon}
              alt={lightsSection.lifxAlt}
            />

            <img
              className={`${classNameRoot}__content-icon-nanoleaf`}
              src={NanoleafIcon}
              alt={lightsSection.nanoleafAlt}
            />

            <img
              className={`${classNameRoot}__content-icon-hue`}
              src={HueIcon}
              alt={lightsSection.hueAlt}
            />
          </div>
        </article>
      </section>

      <section
        className={`${classNameRoot}__content-section ${classNameRoot}__content-section-customize`}
      >
        <div
          className={`${classNameRoot}__background-circle ${classNameRoot}__background-circle-feature ${classNameRoot}__background-circle-feature-customize`}
        />

        <article className={`${classNameRoot}__content-section-wrapper`}>
          <div className={`${classNameRoot}__customize-icon-wrapper`}>
            <img
              className={`${classNameRoot}__content-icon-customize`}
              src={ScenesIcon}
              alt={customizeSection.scenesAlt}
            />
            <div
              className={`${classNameRoot}__content-icon-container ${classNameRoot}__content-icon-container-customize`}
            >
              <img
                className={`${classNameRoot}__content-icon-customize`}
                src={PlaylistsIcon}
                alt={customizeSection.playlistAlt}
              />

              <img
                className={`${classNameRoot}__content-icon-customize`}
                src={PalettesIcon}
                alt={customizeSection.palettesAlt}
              />
            </div>
          </div>

          <div className={`${classNameRoot}__section-title-container`}>
            <div className={`${classNameRoot}__section-background`} />
            <h2 className={`${classNameRoot}__section-title-feature`}>
              {customizeSection.heading}
            </h2>
          </div>

          <p
            className={`${classNameRoot}__section-description ${classNameRoot}__section-description-customize`}
          >
            {customizeSection.description}
          </p>
        </article>
      </section>

      <footer className={`${classNameRoot}__footer`}>
        <div className={`${classNameRoot}__footer-background`} />

        <p className={`${classNameRoot}__footer-text`}>{footer.copyRight}</p>
      </footer>
    </section>
  );
};

export default Landing;
