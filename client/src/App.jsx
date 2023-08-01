import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/ui/Header';
import SignUp from './pages/Signup';
{/*import Home from './pages/Home';*/}
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import ProductList from './components/ui/ProductList';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/signup" element={<SignUp/>} />
          {/*<Route exact path="/home" component={Home} />*/}
          {/* Add more routes as needed */}
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;