import React from "react";
import CartWidget from "../CartWidget/CartWidget";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./MiNavbar.css"
import { Link } from "react-router-dom";


const transformToId = (value) => encodeURIComponent(value.toLowerCase().replace(/[^a-z0-9_-]+/gi, '-').replace(/\s+/g, '-'));

const MiNavbar = ({links, nombreBrand}) => {
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className="titulo nav-item" as={Link} to={"/"}>{nombreBrand}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {links.map((x) => <Nav.Link key={x} as={Link} to={`/category/${transformToId(x)}`}>{x}</Nav.Link>)}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                <CartWidget/>
            </Navbar>
        </>
    )
}

export default MiNavbar