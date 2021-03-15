import React, { Fragment, useEffect } from 'react'
import { Tab, Tabs, Alert } from 'react-bootstrap';
import "./Home.css"

const Home = (props) => {
    useEffect(() => {
        const token = localStorage.getItem('user');
        if (token === null) {
            props.history.push('/');
        }
        // eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            <div className="_message" >

            <Tabs defaultActiveKey="Home" >
                <Tab eventKey="Home"  title="Home" >
                    <Alert variant="success"  >
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            Aww yeah, you successfully read this important alert message. This example
                            text is going to run a bit longer so that you can see how spacing within an
                            alert works with this kind of content.
                        </p>
                        <hr />
                        <p className="mb-0">
                            Whenever you need to, be sure to use margin utilities to keep things nice
                            and tidy.
                        </p>
                    </Alert>
                </Tab>

                <Tab eventKey="profile" title="Profile">
                <Alert variant="info">
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            Aww yeah, you successfully read this important alert message. This example
                            text is going to run a bit longer so that you can see how spacing within an
                            alert works with this kind of content.
                        </p>
                        <hr />
                        <p className="mb-0">
                            Whenever you need to, be sure to use margin utilities to keep things nice
                            and tidy.
                        </p>
                    </Alert>
                </Tab>
                <Tab eventKey="contact" title="Contact" >
                <Alert variant="warning">
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            Aww yeah, you successfully read this important alert message. This example
                            text is going to run a bit longer so that you can see how spacing within an
                            alert works with this kind of content.
                        </p>
                        <hr />
                        <p className="mb-0">
                            Whenever you need to, be sure to use margin utilities to keep things nice
                            and tidy.
                        </p>
                    </Alert>
                </Tab>
            </Tabs>
            </div>
        </Fragment>
    )
}

export default Home;