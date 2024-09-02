import React from 'react'
import Header from './components/Header'
import { Outlet, Link } from 'react-router-dom';
import ProductComp from './components/ProductComp';

function App() {
  return (
   <>
 
    <Header />
    <Outlet/>
   </>
  )
}

export default App