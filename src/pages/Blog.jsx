import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Navbar from '../components/Navbar';

const Blog = () => {
    return (
        <Container fluid>
            <Navbar/>
            <Row>
                <Col className='col-md-7 mx-auto'>
                <Accordion defaultActiveKey="0">

                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is Use Ref ?</Accordion.Header>
                        <Accordion.Body>
                        The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is Memo</Accordion.Header>
                        <Accordion.Body>
                        React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is Custom Hook</Accordion.Header>
                        <Accordion.Body>
                        A custom hook allows you to create shared component logic that can be used in many components. These custom hooks will also use the built-in hooks but in one place. They’re like functions, 
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is Context Api</Accordion.Header>
                        <Accordion.Body>
                        context api  is used for sharing data between components without having to pass props down through every level of the component tree.
                            since the style information can be stored in the context and accessed by any component
                        </Accordion.Body>
                    </Accordion.Item>

                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;

