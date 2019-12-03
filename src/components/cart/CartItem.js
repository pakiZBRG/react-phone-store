import React from 'react'

function CartItem({item, value}) {
   const {id, title, img, price, total, count} = item;
   const {increment, decrement, removeItem} = value;
   return (
      <div className='row my-4 text-center'>
         <div className='col-10 mx-auto col-lg-2'>
            <img 
               src={img} 
               alt='product img' 
               style={{width:'5rem', height:'5rem'}} 
               className='img-fluid'
            />
         </div>
         <div className='col-10 mx-auto col-lg-2'>
            <span className='d-lg-none'>Product: </span> {title}
         </div>
         <div className='col-10 mx-auto col-lg-2'>
            <span className='d-lg-none'>Price: </span>
            ${price}
         </div>
         <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
            <div className='d-flex justify-content-center'>
               <span className='btn btn-black mx-1' onClick={() => decrement(id)}>-</span>
               <span className='my-auto mx-3'>{count}</span>
               <span className='btn btn-black mx-1' onClick={() => increment(id)}>+</span>
            </div>
         </div>
         <div className='col-10 mx-auto col-lg-2'>
            <strong>Item Total: </strong>$ {total.toFixed(2)}
         </div>
         <div className='col-10 mx-auto col-lg-2'>
            <div className='cart-icon' onClick={() => removeItem(id)}>
               <strong>x</strong>
            </div>
         </div>
      </div>
   )
}

export default CartItem