import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

class Modal extends React.Component {
   render() {
      return (
         <ProductConsumer>
            {value => {
               const {modalOpen, closeModal} = value;
               const {title, price} = value.modalProduct;

               if(!modalOpen) {
                  return null;
               } else {
                  return (
                     <div id='modal'>
                        <div className='container'>
                           <div className='row'>
                              <div id='modalOpen' className='col-8 mx-auto col-md-6 col-lg-4 text-center'>
                                 <i className="fa fa-check checked"></i>
                                 <h5 className='pt-2'>Item Added To The Cart</h5>
                                 <h5 className='font'>{title}</h5>
                                 <h5 className='text-muted'>Price: ${price}</h5><hr/>
                                 <Link to='/'>
                                    <button 
                                       className='button1 mb-4'
                                       onClick = {() => closeModal()}
                                    >
                                          Store
                                    </button>
                                 </Link>
                                 <Link to='/cart'>
                                    <button 
                                       className='button2'
                                       onClick = {() => closeModal()}
                                    >
                                          Cart
                                    </button>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               }
            }}
         </ProductConsumer>
      )
   }
}

export default Modal