import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Box from './Box';
import Cards from './Cards';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';



function App() {
  let [CartItems,setCartItems] = useState([])
  const [totalCost, setTotalCost] = useState(0);

  
  const isInCart = (product) => {
    return CartItems.some((item) =>item.name === product.name)
    
  };

 let addToCart = (product)=>{
    setCartItems([...CartItems,product])
    setTotalCost((prevTotal) => prevTotal + parseFloat(product.rate.replace('$', '')));
  };
 ;

 const removeFromCart = (product) =>{
  

  const itemIndex = CartItems.findIndex((item) => item.name === product.name);
  
 
  if (itemIndex !== -1) {
    // Remove the item from the cart
    let updatedCart = [...CartItems];
    updatedCart.splice(itemIndex, 1);
    setCartItems(updatedCart);
  }
 
 }

  
 let star = [<i class="bi bi-star-fill"></i>,<i class="bi bi-star-fill"></i>,<i class="bi bi-star-fill"></i>,<i class="bi bi-star-fill"></i>,<i class="bi bi-star-fill"></i>]



  let cards =[
    {
      name:'Fancy product',
      rate:'$40.00 -$80.00',
      view :"Add to Cart",
      sale: false,
       img :"https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHN8ZW58MHwwfDB8fHww"

    },
    {
      name:'Special Item',
      rate:'$18.00',
      linecross:"$20.00",
      sale:true,
      stars:true,
      rating:true,
      view :"Add to Cart",
     img:"https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzYzfHxmb29kc3xlbnwwfDB8MHx8fDA%3D"
      
    },
    {
      name:'Sale Item',
      rate:'$25.00',
      linecross:"$50.00",
      sale:true,
      stars:star,
      view :"Add to Cart",
       img:"https://images.unsplash.com/photo-1609167921178-e295a98f808f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2RzfGVufDB8MHwwfHx8MA%3D%3D",
 
    },
    {
      name:'Sale Item',
      rate:'$40.00',
      sale: false,
      stars:true,
      view :"Add to Cart",
       img:"https://images.unsplash.com/photo-1564759077036-3def242e69c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHN8ZW58MHwwfDB8fHww",
 
    },{
      name:'Popular Item',
      rate:'$25.00',
      linecross:"$50.00",
      sale:true,
      view :"Add to Cart",
       img:"https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGZvb2RzfGVufDB8MHwwfHx8MA%3D%3D",
 
    },
    {
      name:'Sale Item',
      rate:'$120.00-280.00',
      sale: false,
      view :"Add to Cart",
       img:"https://images.unsplash.com/photo-1475332363216-323c9b7f1e81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZvb2RzfGVufDB8MHwwfHx8MA%3D%3D",
 
    },{
      name:'Special Item',
      rate:'18.00',
      linecross:"$20.00",
      sale:true,
      stars:true,
      rating:true,
      view :"Add to Cart",
       img:"https://images.unsplash.com/photo-1670275153200-d7c05040318b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc2fHxmb29kc3xlbnwwfDB8MHx8fDA%3D",
 
    },
    {
      name:'Popular Item',
      rate:'$40.00',
      sale: false,
      stars:true,
      rating:true,
       view :"Add to Cart",
       img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxmb29kc3xlbnwwfDB8MHx8fDA%3D",
 
    }
  ]



  return (
    <div className="App">
       <Navbar cartItems={CartItems}></Navbar>
       <Box></Box>
       <div className='container mt-4'>
       <div className='container row'>
   
      
      
       {cards.map((data)=>{
        return <Cards  data={data} addToCart={addToCart} removeFromCart={removeFromCart} inCart={isInCart(data)} />
       })}


       </div>
      </div>
      <Footer></Footer>
   </div>

  );
}

export default App;
