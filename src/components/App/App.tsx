import { useAuth0 } from '@auth0/auth0-react';
import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Routes from '../Routes/Routes';
import './App.scss';

const App: FC = () => {
  const history = useHistory();
  const { user } = useAuth0();

  useEffect(() => {
    if (user?.email) {
      history.push('/dashboard');
    }
  }, []);

  return (
    <main className={`wavez-app ${user?.email ? 'wavez-app-authorized' : ''}`}>
      <Routes />
    </main>
  );
};

export default App;
