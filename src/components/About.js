import React, { useState } from 'react';
const styles = {
    container:{
        margin: "15px",
        padding: "5px",
        display: "flex",
        flexWrap:"wrap",
        justifyContent: "space-between"
    },
    about:{
        marginTop: "10vh",
        maxWidth: "75vw"
    },
    h2: {
        textAlign: "center"
    },
    p:{
        marginTop: "20vh"
    },
    imgDiv:{
        display:"flex",
        justifyContent:"center"
    }
}

function About() {
    return(

        <div style={styles.container}>
        <div style={styles.about}>
            <h2 style={styles.h2}>About Me</h2>
            <p style={styles.p}>Hello! Welcome to my portfolio, and thank you for your interest in my work.  My name is Alex, and I am an aspiring web developer living in Seattle, Washington.  I am currently attending the University of Washington's Full Stack Web Development Bootcamp. I have a passion for puzzles, and I love to problem solve. Currently, my portfolio showcases projects that I have developed both alone and with fellow members of my bootcamp cohort.  I hope to add many more porjects soon!</p>
        </div>
        <div style={styles.imgDiv}>
        <img src="./assets/IMG_8389.PNG" />
        </div>
    </div>
        )
}




export default About;