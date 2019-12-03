import React from 'react';
import {Link} from 'react-router-dom';

function EmptyCart() {
   return (
      <div className='container mt-5'>
         <div className='row'>
            <div className='col-10 mx-auto text-center text-title'>
               <h1>your cart is currently empty</h1>
            </div>
         </div>
         <h2 className='text-center'>Go back to <Link to='/'>Store</Link></h2>
      </div>
   )
}

export default EmptyCart;