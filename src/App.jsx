import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import ErrorFallback from './components/error-fallback/ErrorFallback';
import Nav from './components/nav/Nav';

import './App.css';
import ProductsDefault from './components/products-default/ProductsDefault';

function App() {
  const { productName, errorProducts } = useSelector((state) => state);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Redirect to="/gloves" />
      </Route>
      <Route
        path={`/${productName}`}
        render={() => (errorProducts ? <ErrorFallback /> : <ProductsDefault />)}
      />
    </div>
  );
}

export default App;
