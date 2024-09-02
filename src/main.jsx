// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import ProductListing from './components/ProductListing.jsx';
// import ProductComp from './components/ProductComp.jsx';
// import ProductDetails from './components/ProductDetails.jsx';
// import store from './services/store.js';
// import { Provider } from 'react-redux';
// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<ProductListing/>} />
//       <Route path="/productdetail:id" element={<ProductDetails />} />
//      </Route>
//   )
// )
// ReactDOM.createRoot(document.getElementById('root')).render(
 
//   <Provider store={store}>
//   <RouterProvider router={router} />
// </Provider>

// )

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './services/store';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import View from './components/View';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/viewdetails" element={<View />} />
        </Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
