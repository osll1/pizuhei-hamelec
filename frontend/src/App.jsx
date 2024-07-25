// import React, { useEffect, useState } from 'react'
// import Navbar from './components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home/Home'
// import Cart from './pages/Cart/Cart'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
// import Footer from './components/Footer/Footer'
// import LoginPopup from './components/LoginPopup/LoginPopup'
// import Cases from "./pages/Cases/Cases";
// import Axios from "axios";
// import DriedFruit from './pages/RoastedNuts/RoastedNuts'
// import Announcement from './components/Announcement/Announcement'
// import RoastedNuts from './pages/RoastedNuts/RoastedNuts'



// const App = () => {

//   const [showLogin , setShowLogin] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <>
//     {showLogin?<LoginPopup setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn}/>:<></>}
//     <div className='app'>
//       <Navbar isLoggedIn={isLoggedIn} setShowLogin={setShowLogin}/>
//     <div className='ammouncement'>
//         <Announcement/>
//     </div>
//       <img src='src\assets\section_image.png'></img>
//       <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/cart' element={<Cart/>}></Route>
//         <Route path='/order' element={<PlaceOrder/>}></Route>
//         <Route path='/roastedNuts' element={<RoastedNuts/>}></Route>
//         <Route path='/cases' element={<Cases/>}></Route>
        
//       </Routes>
//     </div>
//     <Footer/>
//    </>
   
//   )
// }

// export default App


// import React, { useState } from 'react';
// import Navbar from './components/Navbar/Navbar';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import Cart from './pages/Cart/Cart';
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
// import Footer from './components/Footer/Footer';
// import LoginPopup from './components/LoginPopup/LoginPopup';
// import Cases from "./pages/Cases/Cases";
// import Announcement from './components/Announcement/Announcement';
// import RoastedNuts from './pages/RoastedNuts/RoastedNuts';

// const App = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');

//   return (
//     <>
//       {showLogin ? (
//         <LoginPopup setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
//       ) : null}
//       <div className='app'>
//         <Navbar isLoggedIn={isLoggedIn} setShowLogin={setShowLogin} username={username} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
//         <div className='ammouncement'>
//           <Announcement />
//         </div>
//         <img src='src/assets/section_image.png' alt='Section' />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/order' element={<PlaceOrder />} />
//           <Route path='/roastedNuts' element={<RoastedNuts />} />
//           <Route path='/cases' element={<Cases />} />
//         </Routes>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default App;




/////////vvvv
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Cases from "./pages/Cases/Cases";
import Announcement from './components/Announcement/Announcement';
import RoastedNuts from './pages/RoastedNuts/RoastedNuts';
import Profile from './pages/Profile/Profile';
import Checkout from './pages/Checkout/Checkout';
import NaturalNuts from './pages/NatureNuts/NaturalNuts';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      {showLogin ? (
        <LoginPopup 
          setShowLogin={setShowLogin} 
          setIsLoggedIn={setIsLoggedIn} 
          setUsername={setUsername} 
          setEmail={setEmail} 
        />
      ) : null}
      <div className='app'>
        <Navbar 
          isLoggedIn={isLoggedIn} 
          setShowLogin={setShowLogin} 
          username={username} 
          setIsLoggedIn={setIsLoggedIn} 
          setUsername={setUsername} 
        />
        <div className='ammouncement'>
          <Announcement />
        </div>
        <img src='src/assets/section_image.png' alt='Section' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/roastedNuts' element={<RoastedNuts />} />
          <Route path='/naturalNuts' element={<NaturalNuts/>}/>
          <Route path='/cases' element={<Cases />} />
          <Route path='/profile' element={<Profile user={{ username, email }} />} />
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;


