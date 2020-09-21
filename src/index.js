import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
<<<<<<< HEAD
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
=======
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
>>>>>>> 43963624240d01ed8debb170aa5960a947b7f250
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
