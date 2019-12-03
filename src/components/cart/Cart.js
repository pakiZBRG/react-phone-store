import React from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import {ProductConsumer} from '../../context';

class Cart extends React.Component {
   render() {
      return (
         <div>
            <ProductConsumer>
               {value => {
                  const {cart} = value;
                  if(cart.length > 0) {
                     return (
                        <React.Fragment>
                           <h2 className='my-5 text-center text-title main-red'>Your Cart</h2>
                           <CartColumns/><hr/>
                           <CartList value={value}/>
                           <CartTotals value={value}/>
                        </React.Fragment>
                     );
                  } else {
                     return <EmptyCart/>
                  }
               }}
            </ProductConsumer>
         </div>
      )
   }
}

export default Cart