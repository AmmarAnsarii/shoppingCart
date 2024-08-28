import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  {addToCart}  from '../stores/cart';
import toast, {Toaster} from 'react-hot-toast';

const ProductCart = (props) => {
    const {id, name, price, image, slug} = props.data;
    const carts = useSelector(xyz => xyz.cart.items)
    const dispatch = useDispatch()

    
    const handleAddToCart = ()=>{
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }))
        toast.success(
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>🎉</span>
              {name} added to cart!
            </div>, 
            {
              style: {
                background: '#4caf50',
                color: '#fff',
                borderRadius: '8px',
                padding: '12px',
              },
            }
          );
    }
    
    
    
    

  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
        <Link to = {slug}>
            <img src = {image} className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]'/>
        </Link>
        <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
        <div className='flex justify-center items-center'>
            <p>
                 ₹<span className = 'text-2xl'>{price}</span>
            </p>
            <button onClick={handleAddToCart}
            className='bg-gray-300 p-2 ml-5 
            rounded-md text-sm flex hover:bg-gray-400'>Add To Cart
                <img src="https://cdn-icons-png.freepik.com/512/7835/7835563.png" className='w-5 h-5' />
                
            </button>
            
        </div>
    </div>
  )
}

export default ProductCart