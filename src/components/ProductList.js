import React from 'react';
import Product from './Product';
import {storeProducts} from '../data.js';
import {ProductConsumer} from '../context';

class ProductList extends React.Component {
   state = {
      products: storeProducts
   }

   render() {
      return (
         <React.Fragment>
            <div className='py-5'>
               <div className='container'>
                  <h2 className='text-center text-title'>Products</h2>
                  <div className='row'>
                     <ProductConsumer>
                        {(value) => {
                           return value.products.map(product => {
                              return <Product key={product.id} product={product}/>
                           })
                        }}
                     </ProductConsumer>
                  </div>
               </div>
            </div>
         </React.Fragment>
      )
   }
}

export default ProductList;