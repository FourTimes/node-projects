import React, { Fragment, useState, useEffect } from 'react'
import { Form, Button, Col, Modal } from 'react-bootstrap';
import "./Create.css"

const Create = ({ history: { push } }) => {

    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(false);

    const [clientname, setClientName] = useState('');
    const [bankname, setBankname] = useState('');
    const [branchname, setBranchname] = useState('');
    const [country, setCountry] = useState('');
    const [statename, setStatename] = useState('');
    const [district, setDistrict] = useState('');
    const [code, setCode] = useState('');
    const [amount, setAmount] = useState('');


    const [clientDetails, setclientDetails] = useState([]);

    const clientName = async () => {
        const res = await fetch('/create/transaction');
        const data = await res.json();
        setclientDetails(data);
    }

    useEffect(() => {clientName()}, []);




    const getValueFromForm = async (event) => {

        setClientName(event.target.value)

        const params = {
            clientname: event.target.value
        };

        const res = await fetch('/create/transactionDetails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
        });

        const data = await res.json();
        setBankname(data.bank)
        setBranchname(data.branch)
        setCountry(data.country)
        setStatename(data.state)
        setDistrict(data.district)
        setCode(data.code)
        setAmount('')
    }

    const getAmount= (event) =>{
        setAmount(event.target.value)
        console.log(event.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault();
        setShow(true);
        console.log(clientname);
    };

    const onRedirect = () => {
        setShow(false);
        push('/Create')
    }




    const fromSubmitValues = (event) => {
        alert(amount)
        if (clientname !== '' && amount !== '' ) {
                // event.preventDefault();
            fetch('/create/transactionCreate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(amount)
                // body: JSON.stringify(clientname,bankname,branchname,country,statename,district,code,amount)
            }).then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            }).then((respData) => {
                console.log(respData);
                // setMessage('Success')
                setBankname('')
                setBranchname('')
                setCountry('')
                setStatename('')
                setDistrict('')
                setCode('')
                setAmount('')
                setShow(true);
                
            }).catch((err) => {
                // setMessage('Bad response from server')
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
            <Form className="_Create">
                <Form.Row>
                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">Client name</Form.Label>
                        <Form.Control
                            as="select"
                            name='clientname'
                            type="text"
                            onChange={getValueFromForm}
                            value={clientname}
                        >
                            <option>select</option>
                            {
                                clientDetails.length > 0 &&
                                clientDetails.map((client, key) => (
                                    <option key={key}>{client.client}</option>
                                ))
                            }
                        </Form.Control>

                    </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">Bank name</Form.Label>                     
                        <Form.Control
                            type="text"
                            name="bankname"
                            value={bankname}
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="2" >
                        <Form.Label className="_createFont">State Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="branchname"
                            value={branchname}
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="2" >
                        <Form.Label className="_createFont">Bank name</Form.Label>
                        <Form.Control
                            name="country"
                            type="text"
                            value={country}
                            readOnly
                        />

                    </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">State</Form.Label>
                        <Form.Control
                            name='state'
                            type="text"
                            readOnly
                            value={statename}
                        />

                    </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">District</Form.Label>
                        <Form.Control
                            name="district"
                            type="text"
                            value={district}
                            readOnly
                       />
                    </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">Code</Form.Label>
                        <Form.Control
                            name='code'
                            type="text"
                            readOnly
                            value={code}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">Amount</Form.Label>
                        <Form.Control
                            name='amount'
                            type="text"
                            value={amount}
                            onChange={getAmount}
                        />
                    </Form.Group>
                </Form.Row>

                <Button
                    type="button"
                    className="btn btn-large btn-success"
                    onClick={fromSubmitValues}
                >
                    Submit form
                </Button>
            </Form>


            <Modal
                show={show}
                onHide={onRedirect}
                // onHide={() => setShow(false)}
                dialogClassName="modal-90w"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                       {message}
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        success fully created
          </p>
                </Modal.Body>
            </Modal>

        </Fragment>
    )
}
export default Create; 