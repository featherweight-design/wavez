import { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Landing } from 'src/pages';

const Routes: FC = () => (
  <Router>
    <Route path="/" component={Landing} />
  </Router>
);

export default Routes;
