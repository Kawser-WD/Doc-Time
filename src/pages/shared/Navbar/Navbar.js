import React from 'react';
import {Link} from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import Logo from '../../../images/LogoMakr-8jJQ58.png'
import './Navbar.css';
import useAuth from '../../../hooks/useAuth';
const Navbar = () => {
  const { user, logout } = useAuth();
    return (
      <nav class="navbar navbar-expand-lg navbar-expand-sm fixed-top shadow " style={{backgroundColor:'#FFFFFF', height:'90px'}}>
      <div class="container-fluid">
      <img src={Logo} alt="" style={{width:'200px'}} class="d-inline-block align-text-top"/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <BarChartIcon  style={{color:'#30336b', height:'30px', width:'30px'}}></BarChartIcon>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
                <Link class="nav-link" style={{textDecoration:'none'}} to="/">Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" style={{textDecoration:'none'}} to="/appointment">Appointment</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" style={{textDecoration:'none'}} to="/dashboard">Dashboard</Link>
                </li>
               
               {
                   user?.email ?
                   <li class="nav-item">
                   <a class="nav-link" href='' onClick={logout}>Logout</a>
                   </li>
                   :
                   <li class="nav-item">
                   <Link  class="nav-link" style={{textDecoration:'none'}} to="/login">Login</Link>
                   </li>
               }
      </ul>
      </div>
  </div>
  </nav>
    );
};

export default Navbar;