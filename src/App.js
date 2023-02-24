import React from 'react';
import Cart from './Cart'; 
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
       products: [
        {
            price: 99,
            title: 'Watch',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhdGNofGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            id: 1
        },
        {
            price: 999,
            title: 'Mobile Phone',
            qty: 10,
            img: 'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max',
            id: 2
        },
        {
            price: 999,
            title: 'Laptop',
            qty: 4,
            img: 'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80',
            id: 3
        }
       ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
}
handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty +=1;

    this.setState({
        products
    })
}
handleDecreaseQuantity = (product) => {
    console.log('Heyy please dec the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if(products[index].qty ===0) {
        return;
    }

    products[index].qty -=1;

    this.setState({
        products
    })
}
handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);    //[{}]

    this.setState({
        products: items
    })
}

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }
  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
