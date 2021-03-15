import React, { Fragment, useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap';
import "./Create.css"

const Create = () => {

    //store formvariable into values array
    const [values, setValues] = useState({
        clientname: null,
        statename: null,
        bankname: null,
        regionname: null,
        cityname: null,
        code: null,
        amount: null,
        formErrors: {
            clientname: null,
            statename: null,
            bankname: null,
            regionname: null,
            cityname: null,
            code: null,
            amount: null
        }
    });

    const initialValue = {
        clientname: '',
        statename: '',
        bankname: '',
        regionname: '',
        cityname: '',
        code: '',
        amount: ''
    }

    //variable assign from from section

    const getValueFromForm = (event) => {
        setValues({ values, [event.target.name]: event.target.value })
        console.log(event.target.name,event.target.value)
    }

    //validate without input to restrict
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === true ) {
            fetch("/users/new", {
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
                setValues(initialValue);
            }).catch((err) => {
                console.log(err);
            });
        }  else {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };


    const [count, setCount] = useState(1);
    const countValue = () => {
        setCount(count + 1)
    }

    // const [show, setShow] = useState(true);
    // const setShowValue = () => {
    //     setShow(false)
    // }


    return (
        <Fragment>
            <Form
                className="_Create"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">Client name</Form.Label>
                        <Form.Control
                            name='clientname'
                            required
                            type="text"
                            onChange={getValueFromForm}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="2" >
                        <Form.Label className="_createFont">State Name</Form.Label>
                        <Form.Control as="select" 
                            name="statename" 
                            onChange={getValueFromForm}
                            required >
                            <option></option>
                            <option>Tamilnadu</option>
                            <option>Kerala</option>
                            <option>Andra</option>
                            <option>Kashmir</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                        <Form.Label className="_createFont">Bank name</Form.Label>
                        <Form.Control
                            as="select"
                            name="bankname"
                            type="text"
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={getValueFromForm}
                        >
                            <option>{initialValue.bankname}</option>
                            <option>SBI</option>
                            <option>ICICI</option>
                            <option>INDIAN BANK</option>
                            <option>HDFC</option>
                        </Form.Control>      
                        </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">Region name</Form.Label>
                        <Form.Control
                            name='regionname'
                            type="text"
                            required
                            onChange={getValueFromForm}
                            />
                    </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">City Name</Form.Label>
                        <Form.Control
                            name='cityname'
                            type="text"
                            onChange={getValueFromForm}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">Code</Form.Label>
                        <Form.Control
                            name='code'
                            type="text"
                            onChange={getValueFromForm}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">Amount</Form.Label>
                        <Form.Control
                            name='amount'
                            type="text"
                            onChange={getValueFromForm}
                            required
                            placeholder={initialValue.amount}
                        />
                    </Form.Group>
                </Form.Row>

                <Button
                    type="submit"
                    // disabled={count > 1 ? "true" : false}
                    onClick={countValue}
                >
                    Submit form
                </Button>
                {/* <div>
                    {count >= 10 ? <smal>You clicked {count} times</smal> : null}
                </div> */}
            </Form>
        </Fragment>
    )
}
export default Create; 