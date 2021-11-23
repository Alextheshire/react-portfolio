import React, { useState } from 'react';

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
    }
}
function Navbar() {
    return (
        <nav style={styles.nav}>
            <ul style={styles.links}>
                <li style={styles.li}><a style={styles.a} href="#about-me">About Me</a></li>
                <li style={styles.li}><a style={styles.a} href="#projects">Projects</a></li>
                <li style={styles.li}><a style={styles.a} href="#contact">Contact</a></li>
                <li style={styles.li}><a style={styles.a} href="./assets/resume.pdf" target="_blank">Resume</a></li>
            </ul>
        </nav>
    )
}



export default Navbar;
