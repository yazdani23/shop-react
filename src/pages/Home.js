import { useState,useEffect} from 'react';

import Card from './../components/Card.js'

function Home(){

    const [products,setProducts] = useState([])
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products?limit=5")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error))
    }, [products]);


    const addTobasket = (e) => {
        //setCartNumber(cartNumber+1)
        console.log(e.target.parentElement.id);
    }


    return(
        <div id="products">
        { products.map(item => <Card
                                   key={item.id} 
                                   id={item.id}
                                   title={item.title} 
                                   price={item.price} 
                                   img={item.image} 
                                   addToCart={addTobasket}
                                 />)}
       </div>

    )
}

export default Home