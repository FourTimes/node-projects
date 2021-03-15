import React, { Fragment, useState } from 'react'
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';



const Login = (props) => {

    const [values, setValues] = useState({
        username: '',
        password: '',
        msg: ''
    })

    const getLoginvalue = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })

    }


    const fromSubmitValues = async (event) => {
        if (values.username !== '' && values.password !== '') {
            try {
                const res = await fetch('/login/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values)
                })

                const data = await res.json();

                if (data.success === true) {
                    localStorage.setItem('user', data.user.id)
                    window.location.href = '/Home';
                } else {

                    setValues({
                        ...values,
                        msg: data.msg,
                    });
                }
            } catch (error) {
                console.log(error)
            }


        } else {
            event.preventDefault();
            event.stopPropagation();
        }



    };

    return (
        <Fragment>
            <Form>
                <Row>
                    <Col md={12} className="text-center mt-5">
                        <Form.Group>
                            <Alert>
                                <strong>WELCOME TO LOGIN PAGE</strong>
                            </Alert>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <Form.Group>
                            <Alert>
                                <strong>{values.msg && values.msg}</strong>
                            </Alert>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="offset-md-3">
                        <Form.Group>

                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                values={values.username}
                                onChange={getLoginvalue} />
                            <Form.Text className="text-muted">
                                We'll never share your username with anyone else.
                </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="offset-md-3">
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                onChange={getLoginvalue}
                                values={values.password} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} className="offset-md-3">
                        <Button variant="primary"
                            type="button"
                            onClick={fromSubmitValues}
                            block
                        >
                            Submit
                </Button>
                    </Col>
                </Row>
            </Form>
        </Fragment>
    )
}

export default Login;