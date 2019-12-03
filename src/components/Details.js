import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

class Details extends React.Component {
   render() {
      return (
         <ProductConsumer>
            {value => {
               const {id, company, img, info, price, title, inCart} = value.detailProduct;
               return (
                  <div className='container py-5'>
                     <div className='row'>
                        <div className='col-10 mx-auto text-center my-3 main-red'>
                           <h1>{title}</h1>
                        </div>
                     </div>

                     <div className='row'>
                        <div className='col-10 mx-auto col-md-6 my-3'>
                           <img src={img} className='img-fluid' alt='phone'/>
                        </div>
                        <div className='col-10 mx-auto col-md-6 my-3'>
                           <h2>Model: {title}</h2>
                           <h5 className='text-title text-uppercase text-muted mt-3 mb-2'>
                              made by: {company}
                           </h5>
                           <h4 className='price'>
                              Price: <span>$</span>
                              {price}
                           </h4>
                           <span className='font-weight-bold mt-3 mb-0'>
                              <p className='text-muted'>{info}</p>
                           </span>
                           <Link to='/'>
                              <button className='button1'>
                                 Back To Store
                              </button>
                           </Link>
                           <button 
                              className='button2' 
                              disabled = {inCart ? true:false} 
                              onClick = {() => {value.addToCart(id); value.openModal(id);}}
                           >
                              {inCart ? 'In Cart' : 'Add To Cart'}
                           </button>
                        </div>
                     </div>
                  </div>
               )
            }}
         </ProductConsumer>
      )
   }
}

export default Details