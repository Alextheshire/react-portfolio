import React, { useState } from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import emailjs from 'emailjs-com'
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
        if (name && isValidEmail(email) && message) {
            const serviceId = 'service_8rp0wsc';
            const templateId = 'template_lupmjer';
            const userId = 'user_2LVA9QFHaNdeD83Rsu4ls';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };
    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            // margin: "20px",
            // padding: "5px"
        },
        card: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",


        },
        input: {
            width:"70%"
        },
        a: {
            color: "#101820FF",
            textDecoration: "none"
        }
    }
    return (

       
        <div style={styles.card}>
            <Form style={styles.input} className="mt-4">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)} rows={4} />
                </Form.Group>
                <Button variant="primary" onClick={submit}>Submit</Button>
            {emailSent && <span className="mx-4">Thank you for your message, we will be in touch in no time!</span>}
            </Form>



        </div>
    )
}

export default Contact