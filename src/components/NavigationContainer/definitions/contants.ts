import Logo from 'assets/logo/Wavez Logo.png';

const classNameRoot = 'wavez-navigation-container';

const logoInfo = {
  alt: 'Wavez | Your Music. Your Lights. In Sync.',
  src: Logo,
};

const menuOptions = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
  },
  {
    label: 'music',
    icon: 'headphones',
    path: '/music',
    title: 'Music',
  },
  {
    label: 'lights',
    icon: 'lightbulb',
    path: '/lights',
    title: 'Lights',
  },
  {
    label: 'palettes',
    icon: 'palette',
    path: '/palettes',
    title: 'Palettes',
  },
  {
    label: 'scenes',
    icon: 'theaters',
    path: '/scenes',
    title: 'Scenes',
  },
  {
    label: 'playlists',
    icon: 'playlist_play',
    path: '/playlists',
    title: 'Playlists',
  },
];

export default { classNameRoot, logoInfo, menuOptions };
