import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './Images/logo.png';
import { NavLink } from 'react-router-dom';
export default function Sidenav() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" color='white'>
            < NavLink to="/">         
                <Navbar.Brand className='logo' > <img src={logo} ></img></Navbar.Brand></NavLink>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='navi1'>
                            <NavLink className="navlink" to="/about us">About us</NavLink>
                            <NavLink className="navlink" to="/topevents">Top Events</NavLink>
                            <NavLink className="navlink" to="/allevents">All Events</NavLink>
                            <NavLink className="navlink" to="/prdesk" >PR Desk</NavLink>
                            <NavLink className="navlink" to="/prdesk" >Result</NavLink>
                        </Nav>
                        <Nav className='navi2'>
                            <NavLink className="navlink" to="/signup">Signup</NavLink>
                            <NavLink className="navlink" to="/login">Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
        
    )
}
