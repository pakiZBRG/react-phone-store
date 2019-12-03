import React from 'react'

class CartColumns extends React.Component {
   render() {
      return (
         <div className='container-fluid text-center d-none d-lg-block'>
            <div className='row'>
               <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase font-weight-bold'>product</p>
               </div>
               <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase font-weight-bold'>name</p>
               </div>
               <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase font-weight-bold'>price</p>
               </div>
               <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase font-weight-bold'>quantity</p>
               </div>
               <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase font-weight-bold'>total</p>
               </div>
               <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase font-weight-bold'></p>
               </div>
            </div>
         </div>
      );
   }
}

export default CartColumns;