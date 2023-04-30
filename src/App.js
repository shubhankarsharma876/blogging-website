import './App.css';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from 'react';
import {signOut} from'firebase/auth'


import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { auth } from './firebase-config';

function App() {
  const [isAuth,setIsAuth] = useState(false);

  
  const signUserOut= ()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
      // here we are not using the useNavigation since it can be use only inside the router
      
    })
  };

  return (
    <Router>
      
      <nav>
        <Link to="/">Home</Link>
        
        {/* {!isAuth && <Link to="/login">Login</Link>} */}
        {/* The above line is commented as it is only letting the login button disappear but we need to providde the logout button too so we will use ifelse ternary statement */}
        
         {(!isAuth)?<Link to="/login">Login</Link>:
         <>

         {/* Later please learn protected routes */}
         <Link to="/createPost">CreatePost</Link>
         <button onClick={signUserOut}>logout</button>
        </>
        }

      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
