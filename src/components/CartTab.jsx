import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { toggleStatus } from '../stores/cart'


function CartTab() {
  
  const carts = useSelector(xyz=> xyz.cart.items)
  const dispatch = useDispatch()
  const status = useSelector((status)=> status.cart.statusTab)

  const handleOpenTabCart = () => {
    dispatch(toggleStatus())
  }


  return (
    <div className= {`fixed top-0 right-0 bg-yellow-100 w-96 h-full shadow-2xl grid grid-rows-[60px_1fr_60px] 
    transform transition-transform duration-400
    ${status === false ? "translate-x-full" : ""}`}>
      <h2 className='p-5 text-black text-2xl'>Shopping Cart</h2>
      <div className='p-5'>
        {carts.map((item, key)=> (
          <CartItem key = {key} data = {item}/>
        ))}
      </div>
      <div className='grid grid-cols-2 border-black'>
        <button className='bg-black text-white border-y-slate-50' onClick={handleOpenTabCart}>CLOSE</button>
        <button className='bg-lime-400 text-blue-800 font-bold'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartTab