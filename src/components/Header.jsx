import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleStatus } from '../stores/cart'


function Header() {

  const [totalQuantity, setTotalQuantity] = useState(0)
  const carts = useSelector(xyz => xyz.cart.items)
  const dispatch = useDispatch()

  useEffect(()=>{
    let total = 0;
    carts.forEach(item => total = total + item.quantity)
    setTotalQuantity(total)
  }
  ,[carts])

  const handleOpenTabCart = () => {
    dispatch(toggleStatus())
  }

    return (
      <header className='flex justify-between items-center mb-20'>
         <Link to ="/" className='text-xl font-semibold'>Home.</Link>
         <div className='flex justify-center items-center w-10 h-10 relative bg-gray-200 rounded-full'
         onClick={handleOpenTabCart}>
            <img src="https://cdn-icons-png.freepik.com/512/7835/7835563.png" className='w-6'/>
            <span className='bg-red-500 absolute top-2/3 right-1/2 text-white 
            text-sm rounded-full w-5 h-5 flex justify-center items-center'>{totalQuantity}</span>
         </div>
      </header>
    )
  }

export default Header
