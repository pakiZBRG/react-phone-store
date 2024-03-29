import React from 'react';
import {Link} from 'react-router-dom';

function CartTotals({value}) {
   const {cartTotal, clearCart} = value;
   return (
      <div>
         <React.Fragment>
            <div className='container'>
               <div className='row'>
                  <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right'>
                     <Link to='/'>
                        <button 
                        className='btn btn-outline-danger text-uppercase mb-3 px-5 pb-1'
                        onClick={() => clearCart()}>
                           clear cart
                        </button>
                     </Link>
                     <h5>
                        <span className='text-title'>Total (w/ taxes):  </span>
                        <strong>${cartTotal}</strong>
                     </h5>
                  </div>
               </div>
            </div>
         </React.Fragment>
      </div>
   )
}

export default CartTotals