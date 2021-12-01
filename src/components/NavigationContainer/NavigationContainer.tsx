import { FC, ReactElement } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SideNavigation } from '@f-design/component-library';

import { CurrentlyViewing, NavigationContainerProps } from 'types';
import { constants } from './definitions';
import './NavigationContainer.scss';

const NavigationContainer: FC = ({
  children,
}: NavigationContainerProps): ReactElement<NavigationContainerProps> => {
  const history = useHistory();
  const location = useLocation();

  const currentlyViewing = constants.menuOptions.find(
    option => option.path === location.pathname
  );

  return (
    <div className="wavez-navigation-container">
      <SideNavigation
        currentlyViewing={currentlyViewing}
        menuOptions={constants.menuOptions}
        onNavigate={({ path }: CurrentlyViewing) => history.push(path)}
        goDark
      />

      <div className="wavez-navigation-container__content">
        {/* <HeaderMenu
          currentlyViewing={currentlyViewing}
          menuOptions={headerMenuOptions}
          defaultTitle="Dashboard"
          onNavigate={(currentlyViewing: CurrentlyViewing): void =>
            history.push(currentlyViewing.path)
          }
        /> */}
        <main className="wavez-navigation-container__main">{children}</main>
      </div>
    </div>
  );
};

export default NavigationContainer;
