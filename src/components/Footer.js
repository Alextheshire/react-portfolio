function Footer(){
    const styles = {
        footer: {
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            position: "fixed",
            bottom: 0,
            width:"100vw",
            background:"#D8C3A5",
            height:"10vh"
        },
        
        a: {
            color: "#101820FF",
            textDecoration:"none",
            marginLeft:"5%",
            marginRight:"5%"
        }
    }

    return(
        <footer style={styles.footer}>
            <a style={styles.a} href="https://github.com/Alextheshire" target="_blank">Github</a>
            <a style={styles.a} href="https://www.linkedin.com/in/alex-beres-764b29218/" target="_blank">LinkedIn</a>
            <a style={styles.a} href="https://www.linkedin.com/in/alex-beres-764b29218/" target="_blank">LinkedIn</a>
            <a style={styles.a} href="https://www.instagram.com/alextheshire/" target="_blank">Instagram</a>
            
        </footer>
    )
}
export default Footer