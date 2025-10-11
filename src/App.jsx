// import './App.css'
// import Card from './components/Card';
// import Home from './screens/Home'
// import Login from './screens/Login';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

// function App() {

//   return (
//     <Router>
//     <div> 
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/card' element={<Card/>}/>
//       </Routes>
//     </div>

//     </Router>
//   )
// }

// export default App


  import React from 'react';
  import './App.css';
  import Card from './components/Card';
  import Home from './screens/Home';
  import Login from './screens/Login';

  // Bootstrap imports (clean)
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css'; // optional dark theme

  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Signup from './screens/Signup';
  import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';

  function App() {
    return (

      <CartProvider>
  <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/createuser' element={<Signup />} />
            <Route path='/myOrder' element={<MyOrder />} />
            {/* <Route path='/card' element={<Card />} /> */}
          </Routes>
        </div>
      </Router>
      </CartProvider>
      
    );
  }

  export default App;
