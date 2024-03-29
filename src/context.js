import React from 'react';
import {storeProducts, detailProduct} from './data';

class ProductProvider extends React.Component {
   state = {
      products: [], 
      detailProduct: detailProduct,
      cart: [],
      modalOpen: false,
      modalProduct: detailProduct,
      cartSubtotal: 0,
      cartTax: 0,
      cartTotal: 0
   }

   componentDidMount(){
      this.setProducts();
   }

   setProducts = () => {
      let products = [];
      storeProducts.forEach(item => {
         const singleItem = {...item};
         products = [...products, singleItem]
      })
      this.setState({ products })
   }

   getItem = (id) => {
      const product = this.state.products.find(item => item.id === id);
      return product;
   }

   handleDetail = (id) => {
      const product = this.getItem(id);
      this.setState({ detailProduct:product })
   }

   addToCart = (id) => {
      let Products = [...this.state.products];
      const index = Products.indexOf(this.getItem(id));
      const product = Products[index];
      product.inCart = true;
      product.count = 1;
      product.total = product.price;
      this.setState({ products:Products, cart:[...this.state.cart, product] }, () => {
         this.addTotals();
      })
   }

   openModal = id => {
      const product = this.getItem(id);
      this.setState({ modalProduct:product, modalOpen:true })
   }

   closeModal = () => {
      this.setState({ modalOpen: false });
   }

   increment = id => {
      let tempCart = [...this.state.cart];
      const selectedProduct = tempCart.find(item => item.id === id);
      const index = tempCart.indexOf(selectedProduct);
      const product = tempCart[index];

      product.count = product.count + 1;
      product.total = product.count * product.price;
      this.setState({ cart: [...tempCart] }, () => {
         this.addTotals();
      })
   }

   decrement = id => {
      let tempCart = [...this.state.cart];
      const selectedProduct = tempCart.find(item => item.id === id);
      const index = tempCart.indexOf(selectedProduct);
      const product = tempCart[index];
      if(product.count > 1) {
         product.count = product.count - 1;
         product.total = product.count * product.price;
      }
      this.setState({ cart: [...tempCart] }, () => {
         this.addTotals();
      })
   }

   removeItem = id => {
      let tempProducts = [...this.state.products];
      let tempCart = [...this.state.cart];
      tempCart = tempCart.filter(item => item.id !== id)
      const index = tempProducts.indexOf(this.getItem(id))
      let removedProduct = tempProducts[index]
      removedProduct.inCart = false;
      removedProduct.count = 0;
      removedProduct.total = 0;
      this.setState({ 
         cart: [...tempCart],
         products: [...tempProducts] 
      }, () => {
         this.addTotals();  
      })
   }

   clearCart = () => {
      this.setState({ cart: [] }, () => {
         this.setProducts();
         this.addTotals();
      })
   }

   addTotals = () => {
      let subTotal = 0;
      this.state.cart.map(item => (subTotal += item.total));
      const tempTax = subTotal * 0.05;
      const tax = parseFloat(tempTax.toFixed(2));
      const total = subTotal + tax;
      this.setState({ 
         cartSubtotal: subTotal, 
         cartTax: tax, 
         cartTotal: total.toFixed(2) 
      })
   }

   render() {
      return (
         <ProductContext.Provider 
            value={{
               ...this.state,
               handleDetail: this.handleDetail,
               addToCart: this.addToCart,
               openModal: this.openModal,
               closeModal: this.closeModal,
               increment: this.increment,
               decrement: this.decrement,
               removeItem: this.removeItem,
               clearCart: this.clearCart
            }}
         >
            {this.props.children}
         </ProductContext.Provider>
      )
   }
}

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};