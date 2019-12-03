import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
   render() {
      return (
         <nav className='navbar navbar-expand-sm navbar-dark px-sm-5'>
            <Link to='/'>
               <h4 className='my-auto'>Paki's Store</h4>
            </Link>
            <Link to='/cart' className='ml-auto'>
               <button className='cart-button'>
                  <i className='fa fa-shopping-cart'> </i> Cart
               </button>
            </Link>
         </nav>
      )
   }
}

export default Navbar;