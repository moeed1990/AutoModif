import React from 'react';
import { Container, Navbar, NavDropdown, Row, Nav } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logout} from "../actions/userActions";
import SearchBox from "./SearchBox";
import './Header.css'




function Header() {
    const userLogin= useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                         <img
                            src="/images/1.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                          />
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <SearchBox />
                            <Nav className="mr-auto">
                                <LinkContainer to='/cart'>
                                    <Nav.Link><i className="fas fa-shopping-cart"></i>cart</Nav.Link>
                                </LinkContainer>

                                {userInfo ? (
                                    <NavDropdown id='username' title={userInfo.name}>
                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item>Profile</NavDropdown.Item>
                                        </LinkContainer>

                                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                    </NavDropdown>
                                    ) : (
                                        <LinkContainer to ='/login'>
                                            <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>
                                        </LinkContainer>
                                    )}

                                {userInfo && userInfo.isAdmin && (
                                    <NavDropdown id='adminmenu' title='Admin'>
                                        <LinkContainer to='/admin/userlist'>
                                            <NavDropdown.Item>Users</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to='/admin/productlist'>
                                            <NavDropdown.Item>Products</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to='/admin/orderlist'>
                                            <NavDropdown.Item>Orders</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>
                                )}

                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;