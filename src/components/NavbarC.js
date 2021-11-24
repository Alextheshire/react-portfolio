import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"


const styles = {
    nav: {
        background: "#F2AA4CFF",
        display: "flex",
        justifyContent: "flex-end"
    },
    ul: {
        background: "#F2AA4CFF",


    },
    li: {
        display: "inline-block",
        marginLeft: "25px",
        background: "#F2AA4CFF",

    },
    a: {
        textDecoration: "none",
        color: "#101820FF",
        background: "#F2AA4CFF",
        marginRight: "10px"
    },
    bg: {
        background:"#D8C3A5"
    }
}
function NavbarC(props) {
    function changePage(e){
        e.preventDefault();
        props.setPage(e.target.name)

    }
    return (
        //     <nav style={styles.nav}>
        //         <ul style={styles.links}>
        //             <li style={styles.li}><a style={styles.a} href="#about-me">About Me</a></li>
        //             <li style={styles.li}><a style={styles.a} href="#projects">Projects</a></li>
        //             <li style={styles.li}><a style={styles.a} href="#contact">Contact</a></li>
        //             <li style={styles.li}><a style={styles.a} href="./assets/resume.pdf" target="_blank">Resume</a></li>
        //         </ul>
        //     </nav>
        <Navbar style={styles.bg} expand="lg">
            <Container>
                <Navbar.Brand >Alex Beres Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={changePage} name="about">About</Nav.Link>
                        <Nav.Link onClick={changePage} name="projects">Projects</Nav.Link>
                        <Nav.Link onClick={changePage} name="contact">Contact</Nav.Link>
                        <Nav.Link href='./assets/resume.pdf' target="_blank">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}



export default NavbarC;
