import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { Auth0Provider } from '@auth0/auth0-react';

import { client } from 'configuration';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Auth0Provider
    domain="fwd-dev.us.auth0.com"
    clientId="F1uURdxDoUr0maxxg8jdAsRD00W1qf0M"
    redirectUri={`${window.location.origin}/dashboard`}
  >
    <ApolloProvider client={client}>
      <StrictMode>
        <App />
      </StrictMode>
    </ApolloProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
