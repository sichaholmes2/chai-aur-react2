import React from 'react'

import Footer from './Footer/Footer'
import Header from './Header/Header'


//outlet will keep Header and Footer the same and rest will be kept dynamic
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    {/* inside this stuff will be dynamic */}

    <Outlet/>


    <Footer/>
    </>
  )
}

export default Layout
