import React, { Fragment, useState } from 'react'
import { Form, Button, Col, Modal } from 'react-bootstrap';
import "./Create.css"

const Create = ({ history: { push } }) => {

    const [show, setShow] = useState(false);

    const [values, setValues] = useState({
        clientname: '',
        statename: '',
        bankname: '',
        regionname: '',
        cityname: '',
        code: '',
        amount: ''
    });
    const [errorName, setErrorMsg] = useState({
        clientname: "",
        statename: "",
        bankname: "",
        regionname: "",
        cityname: "",
        code: "",
        amount: ""
    });

    // const [clientNameError, setClientNameError] = useState({
    //     isValid: true,
    //     msg: ''
    // });

    // useEffect(() => {
    //     if (errorName.clientname === "") {
    //         setBtn(true);
    //     }
    // }, [errorName, btn]);

// OnChangeRequest

    const getValueFromForm = (event) => {
        const { name, value } = event.target;
        if (name === "clientname") {
            const clientNameError = value.length < 5 ? "minimum 5 characters required" : "";
            setErrorMsg({ ...errorName, clientname: clientNameError });
        }
        if (name === "statename" || name === "Choose") {
            const stateNameError = value.length < 7 ? "minimum 5 characters required" : "";
            setErrorMsg({ ...errorName, statename: stateNameError });
        }
        if (name === "bankname") {
            const bankNameError = value.length < 5 ? "minimum 5 characters required" : "";
            setErrorMsg({ ...errorName, bankname: bankNameError });
        }
        if (name === "regionname") {
            const regionNameError = value.length < 7 ? "minimum 5 characters required" : "";
            setErrorMsg({ ...errorName, regionname: regionNameError });
        }
        if (name === "cityname") {
            const cityNameError = value.length < 5 ? "minimum 5 characters required" : "";
            setErrorMsg({ ...errorName, cityname: cityNameError });
        }
        if (name === "code") {
            const codeNameError = value.length < 7 ? "minimum 5 characters required" : "";
            setErrorMsg({ ...errorName, code: codeNameError });
        }
        if (name === "amount") {
            const amountNameError = value.length < 5 ? "minimum 5 characters required" : "";
            setErrorMsg({ ...errorName, amount: amountNameError });
        }
        
        setValues({ ...values, [event.target.name]: event.target.value.toLowerCase() });
                

    }


    const handleSubmit = e => {
        e.preventDefault();
        setShow(true);
        console.log(values.clientname);
    };

    const onRedirect = () => {
         setShow(false);
         push('/Create')
    }

    return (
        <Fragment>
            <Form
                className="_Create"
            >
                <Form.Row>
                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">Client name</Form.Label>
                        <Form.Control
                            name='clientname'
                            type="text"
                            onChange={getValueFromForm}
                            value={values.clientname}
                        />
                    {errorName.clientname && <Form.Text>{errorName.clientname}</Form.Text>}

                    </Form.Group>

                    <Form.Group as={Col} md="2" >
                        <Form.Label className="_createFont">State Name</Form.Label>
                        <Form.Control
                            as="select"
                            name="statename"
                            value={values.statename}
                            onChange={getValueFromForm}
                            
                        >
                            <option value="Choose">Choose</option>
                            <option value="Tamilnadu">Tamilnadu</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Andra">Andra</option>
                            <option value="Kasmir">Kashmir</option>
                        </Form.Control>
                        {errorName.statename && <Form.Text>{errorName.statename}</Form.Text>}
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                        <Form.Label className="_createFont">Bank name</Form.Label>
                        <Form.Control
                            as="select"
                            name="bankname"
                            type="text"
                            onChange={getValueFromForm}
                            value={values.bankname}
                        >
                            <option value="Choose">Choose</option>
                            <option value="SBI">SBI</option>
                            <option value="ICICI">ICICI</option>
                            <option value="INDIAN BANK">INDIAN BANK</option>
                            <option value="HDFC">HDFC</option>
                        </Form.Control>
                        {errorName.bankname && <Form.Text>{errorName.bankname}</Form.Text>}
                    </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">Region name</Form.Label>
                        <Form.Control
                            name='regionname'
                            type="text"
                            onChange={getValueFromForm}
                            value={values.regionname}
                        />
                        {errorName.regionname && <Form.Text>{errorName.regionname}</Form.Text>}

                    </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">City Name</Form.Label>
                        <Form.Control
                            name="cityname"
                            type="text"
                            value={values.cityname}
                            onChange={getValueFromForm}
                        />
                        {errorName.cityname && <Form.Text>{errorName.cityname}</Form.Text>}
                    </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">Code</Form.Label>
                        <Form.Control
                            name='code'
                            type="text"
                            onChange={getValueFromForm}
                            value={values.code}
                        />
                        {errorName.code && <Form.Text>{errorName.code}</Form.Text>}
                    </Form.Group>

                    <Form.Group as={Col} md="2">
                        <Form.Label className="_createFont">Amount</Form.Label>
                        <Form.Control
                            name='amount'
                            type="text"
                            value={values.amount}
                            onChange={getValueFromForm}
                        />
                        {errorName.amount && <Form.Text>{errorName.amount}</Form.Text>}

                    </Form.Group>
                </Form.Row>

                <Button
                    type="button"
                    className="btn btn-large btn-success"
                    onClick={handleSubmit}
                >
                    Submit form
                </Button>
                {/* <div>
                    {count >= 10 ? <smal>You clicked {count} times</smal> : null}
                </div> */}
            </Form>


            <Modal
                show={show}
                onHide={onRedirect}
                // onHide={() => setShow(false)}
                dialogClassName="modal-90w"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        POPUP WINDOW
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