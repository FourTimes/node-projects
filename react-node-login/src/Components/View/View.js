import React, { Fragment, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const View = () => {

    const [clientDetails, setclientDetails] = useState([]);

    const clientName = async () => {
        const res = await fetch('/create/transactionView');
        const data = await res.json();
        setclientDetails(data);
    }

    useEffect(() => {clientName()}, []);


console.log(clientDetails)
    return (

        <Fragment>
            <Table striped bordered hover size="sm" className="mt-5">
                <thead>
                    <tr>
                        <th>CLIENT</th>
                        <th>DATE</th>
                        <th>BANK NAME</th>
                        <th>BRANCH NAME</th>
                        <th>COUNTRY</th>
                        <th>STATE</th>
                        <th>DISTRICT</th>
                        <th>CODE</th>
                        <th>AMOUNT</th>
                    </tr>
                </thead>
                <tbody>
                    {
                                clientDetails.length > 0 &&
                                clientDetails.map((client, key) => (
                                    <tr>
                                    <td key={key}>{client.client}</td>
                                    <td>{client.transactiondate}</td>
                                    <td>{client.bank}</td>
                                    <td>{client.branch}</td>
                                    <td>{client.country}</td>
                                    <td>{client.state}</td>
                                    <td>{client.district}</td>
                                    <td>{client.code}</td>
                                    <td>{client.amount}</td>

                                    </tr>

                                ))
                            }


                </tbody>
            </Table>

        </Fragment>
    )
}

export default View;
