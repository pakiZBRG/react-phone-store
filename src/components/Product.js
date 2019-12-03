import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ProductConsumer} from '../context';

class Product extends React.Component {
   render() {
      const {id, title, img, price, inCart} = this.props.product;
      return (
         <div className='col-9 mx-auto col-md-6 col-lg-3  my-3 product-wrapper'>
            <div className='card'>
               <ProductConsumer>
                  {value => (
                     <div className='img-container p-5' onClick={() => value.handleDetail(id)}>
                        <Link to='/details'>
                           <img src={img} alt='phone' className='card-img-top'/>
                        </Link>
                        <button 
                           className='cart-btn' 
                           disabled={inCart ? true:false} 
                           onClick={() => {
                              value.addToCart(id); 
                              value.openModal(id);
                           }}
                        >
                           {inCart ? (<p className='mb-0' disabled>In Cart</p>) : <p className='mb-0'>Add To Cart</p>}
                        </button>         
                     </div>
                  )}
               </ProductConsumer>
               <div className='card-footer'>
                  <p className='title align-self-center mb-0'>
                     {title}
                  </p>
                  <h5 className='mb-0 price float-right'>
                     <span className='mr-1'>$</span>{price}
                  </h5>
               </div>
            </div>
         </div>
      )
   }
}

Product.propTypes = {
   product:PropTypes.shape({
      id:PropTypes.number, 
      img:PropTypes.string, 
      title:PropTypes.string,
      price:PropTypes.number,
      inCart:PropTypes.bool
   }).isRequired
}

export default Product