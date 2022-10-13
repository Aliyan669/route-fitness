import React from 'react';
import { BrowserRouter as Router ,Route ,Routes ,Link } from "react-router-dom";

import About from '../screens/about';
import Contact from '../screens/contact';
import Gallery from '../screens/gallery';
import Home from '../screens/home';
import '../App.css';
import Notfound from '../screens/notfound';
import Login from '../screens/login';
import Profile from '../screens/profile';
import Dashboard from '../screens/dashboard';
export default function Navbar() {
  return (
    <div>
        <Router>
    <div className='nav'>
        <div>
        <img src="fitness.jpg" className='fit' />
        </div>
        <div className='li'>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="about">About</Link>
        <Link className="link" to="gallery">Gallery</Link>
        <Link className="link" to="contact">Contact</Link>
        <Link className="link" to="login">Log in</Link>
        <Link className="link" to="dashboard">DashBoard</Link>

        </div>
    </div>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About/>} />
    <Route path="gallery" element={<Gallery />} />
    <Route path="contact" element={<Contact />} />
    <Route path="login" element={<Login />} />
    <Route path="profile/:username" element={<Profile/>} />
    <Route path="dashboard/*" element={< Dashboard/>} />

    <Route path="*" element={<Notfound/>} />
</Routes>
   </Router>
    </div>
  )
}
