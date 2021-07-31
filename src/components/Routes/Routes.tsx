import { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LandingPage } from 'pages';

const Routes: FC = () => (
  <Router>
    <Route path="/" component={LandingPage} />
  </Router>
);

export default Routes;
