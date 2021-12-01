import { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavigationContainer } from 'components';
import { Landing, Dashboard } from 'pages';

const Routes: FC = () => (
  <Router>
    <Switch>
      <Route
        path="/*"
        render={(): ReactElement => (
          <NavigationContainer>
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </NavigationContainer>
        )}
      />
      <Route exact path="/" component={Landing} />
    </Switch>
  </Router>
);

export default Routes;
