import React, { Fragment, useState } from 'react'
import { Form, Button, Col, Modal } from 'react-bootstrap';
import "./Clients.css"

const Clients = (props) => {

    const [show, setShow] = useState(false);
    const onRedirect = () => {
        setShow(false);
        props.history.push('/Clients')
    }

    // const [validate, setValidate] = useState(false);

    // const validated = () => {
    //     setValidate(true)
    // }

    const [values, setValues] = useState({
        clientname: '',
        bankname: '',
        branchname: '',
        country: '',
        state: '',
        district: '',
        zip: ''
    });

    const [message, setMessage] = useState('')



    const getClientForm = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value.toLowerCase() })
    }


    const fromSubmitValues = (event) => {
        if (values.clientname !== '' && values.bankname !== '' && values.branchname !== '' &&
            values.country !== '' && values.state !== '' && values.district !== '' &&
            values.zip !== '') {
                // event.preventDefault();
            fetch('/clients/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            }).then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            }).then((respData) => {
                console.log(respData);
                setMessage('Success')
                setValues({
                    clientname: '',
                    bankname: '',
                    branchname: '',
                    country: '',
                    state: '',
                    district: '',
                    zip: ''
                })
                setShow(true);
            }).catch((err) => {
                setMessage('Bad response from server')
                setShow(true);
                console.log(err);
            });


        } else {
            setMessage('Please fill the input field')
            setShow(true);
            event.preventDefault();
            event.stopPropagation();
        }



    };


    return (
        <Fragment>
            <Form className="_Create"  >
                <Form.Row>
                    <Form.Group as={Col} md="2">
                        <Form.Label className="_clientsFont">CLIENT NAME</Form.Label>
                        <Form.Control
                            name='clientname'
                            type="text"
                            value={values.clientname}
                            onChange={getClientForm}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_clientsFont">BANK NAME</Form.Label>
                        <Form.Control
                            name='bankname'
                            type="text"
                            onChange={getClientForm}
                            value={values.bankname}

                        />
                    </Form.Group>

                    <Form.Group as={Col} md="3">
                        <Form.Label className="_clientsFont">BRANCH NAME</Form.Label>
                        <Form.Control
                            name='branchname'
                            value={values.branchname}
                            onChange={getClientForm}
                            type="text"
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                        <Form.Label className="_clientsFont">COUNTRY</Form.Label>
                        <Form.Control
                            name='country'
                            type="text"
                            value={values.country}
                            onChange={getClientForm}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_clientsFont">STATE</Form.Label>
                        <Form.Control
                            name='state'
                            type="text"
                            value={values.state}
                            onChange={getClientForm}

                        />
                    </Form.Group>
                    <Form.Group as={Col} md="2">
                        <Form.Label className="_clientsFont">DISTRICT</Form.Label>
                        <Form.Control
                            name='district'
                            type="text"
                            value={values.district}
                            onChange={getClientForm}

                        />
                    </Form.Group>
                    <Form.Group as={Col} md="1">
                        <Form.Label className="_clientsFont">ZIP</Form.Label>
                        <Form.Control
                            name='zip'
                            type="text"
                            value={values.zip}
                            onChange={getClientForm}
                        />
                    </Form.Group>
                </Form.Row>
                <Button type="button" onClick={fromSubmitValues} >Submit form</Button>
            </Form>


            <Modal
                show={show}
                onHide={onRedirect}
                // onHide={() => setShow(false)}
                dialogClassName="modal-90w"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {values.clientname.toLocaleUpperCase()}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {message}
                    </p>
                </Modal.Body>
            </Modal>

        </Fragment>

    )
}

export default Clients;