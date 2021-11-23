import React, { useState } from 'react';

function ProjectCard(props) {

    

    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            margin: "20px",
            padding: "5px"
        },
        card: {
            border: "5px solid #F2AA4CFF",
            width: "fit-content",
            height: "fit-content"

        },
        p: {
            textAlign: "center"
        },
        img: {}
    }


    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <a href={`${props.projectUrl}`} target="_blank">
                    <img src={`${props.link}`} style={styles.img}height="353" width="800" />
                </a>
                <p style={styles.p}>{props.about}</p>
            </div>

        </div>

    )
}




export default ProjectCard;