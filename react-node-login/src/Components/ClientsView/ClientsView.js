import React, { Fragment, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';


const ClientsView = () => {

    const [clientDetails, setclientDetails] = useState([]);

    const clientName = async () => {
        const res = await fetch('/clients/clientsView');
        const data = await res.json();
        setclientDetails(data);
    }

    useEffect(() => {clientName()}, []);


    return (
        <Fragment>
            <Table striped bordered hover size="sm" className="mt-5">
                <thead>
                    <tr>
                        <th>CLIENT</th>
                        <th>BANK</th>
                        <th>BRANCH NAME</th>
                        <th>COUNTRY</th>
                        <th>STATE</th>
                        <th>DISTRICT</th>
                        <th>CODE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                                clientDetails.length > 0 &&
                                clientDetails.map((client, key) => (
                                    <tr>
                                    <td key={key}>{client.client}</td>
                                    <td>{client.bank}</td>
                                    <td>{client.branch}</td>
                                    <td>{client.country}</td>
                                    <td>{client.state}</td>
                                    <td>{client.district}</td>
                                    <td>{client.code}</td>

                                    </tr>

                                ))
                            }


                </tbody>
            </Table>
        </Fragment>
    )
}


export default ClientsView;