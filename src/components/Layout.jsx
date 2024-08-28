import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import CartTab from './CartTab'
import { useSelector, useDispatch } from 'react-redux'

function Layout() {
  const status = useSelector( store => store.cart.statusTab);

  return (
    <div className='bg-zinc-200 '>
        <main className= {`w-[1100px] max-w-full m-auto p-5 transform tranis-transform duration-500
        ${status === false ? "" : "-translate-x-48" } `}>
            <Header />
            <Outlet />
        </main>
        <CartTab/>
    </div>
  )
}

export default Layout