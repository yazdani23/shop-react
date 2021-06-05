import img1 from './assets/images/1.jpg';
import img2 from './assets/images/2.jpg';
import img3 from './assets/images/3.jpg';

import {  BrowserRouter as Router ,Switch,Route} from "react-router-dom";
//import css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import components
import Header from './components/Header.js'
import Home from './pages/Home'
import Login from './pages/Login'
import CheckOut from './pages/CheckOut'

import { Component, useState,useEffect} from 'react';

function App() {
  const [cartNumber,setCartNumber] = useState(0)
 





  return (
    <>
    
    <Router>
        <Header />

        <Switch>
          <Route exact path="https://yazdani23.github.io/shop-react/home" component={Home} />
             
          <Route path="https://yazdani23.github.io/shop-react/login">
              <Login />
          </Route>

          <Route path="https://yazdani23.github.io/shop-react/check-out">
              <CheckOut />
          </Route>

        </Switch>
    </Router>

    <p className="text-center" id="number-cart">{cartNumber}</p>
    
   
 
    </>
  );

}

// class App extends Component{


//    a="salam";
//   render(){


//     this.state={
//      products:[ {title:"pro1",price:"1000$",img:img1},
//       {title:"pro2",price:"2000$",img:img2},
//       {title:"pro3",price:"3000$",img:img3}],

//      card:0
//     }

//     return (
//       <>
//       <Header number={this.a}/>
      
//       <div id="products">
//        { this.state.map(item => <Card title={item.title} price={item.price} img={item.img}/>)}
        
      

//       </div>
//       </>
//     );
//       }  
// }


export default App;
