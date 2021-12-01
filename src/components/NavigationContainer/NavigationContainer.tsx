import { useMutation } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, SideNavigation } from '@f-design/component-library';
import { useEffect, FC, ReactElement } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { CurrentlyViewing, NavigationContainerProps } from 'types';
import { copyContent } from 'shared/data';
import SIGN_IN from 'shared/mutations/SignIn';
import { constants } from './definitions';
import './NavigationContainer.scss';

const { landingPage } = copyContent;

const NavigationContainer: FC = ({
  children,
}: NavigationContainerProps): ReactElement<NavigationContainerProps> => {
  const history = useHistory();
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth0();
  const [signIn] = useMutation<
    {
      token: string;
    },
    { email: string }
  >(SIGN_IN);
  console.log(user, isAuthenticated);

  useEffect(() => {
    document.querySelector('html')?.classList.add('wavez-html-authorized');

    return function cleanup() {
      document.querySelector('html')?.classList.remove('wavez-html-authorized');
    };
  }, []);

  useEffect(() => {
    (async () => {
      if (user?.email) {
        try {
          const { data } = await signIn({ variables: { email: user.email } });
          console.log(data?.token);
        } catch (error) {
          // console.error(error);
        }
      } else {
        // history.push('/');
      }
    })();
  }, [user]);

  const currentlyViewing = constants.menuOptions.find(
    option => option.path === location.pathname
  );

  return (
    <div className={`${constants.classNameRoot}`}>
      <SideNavigation
        goDark
        currentlyViewing={currentlyViewing}
        logo={constants.logoInfo}
        menuOptions={constants.menuOptions}
        onNavigate={({ path }: CurrentlyViewing) => history.push(path)}
      />

      <div className={`${constants.classNameRoot}__content`}>
        <header className={`${constants.classNameRoot}__header`}>
          <Button variant="outline" onClick={logout}>
            {landingPage.header.logout}
          </Button>
        </header>

        <div className={`${constants.classNameRoot}__main`}>{children}</div>
      </div>
    </div>
  );
};

export default NavigationContainer;
