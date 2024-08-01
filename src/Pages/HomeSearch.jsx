import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Search from '../Search/Search';

const HomeSearch = () => {
    return (
        <>
        <Container>
            <Row className="align-items-center justify-content-center py-3">
                {/* Left side: Buy and Rent buttons */}
                <Col xs="auto" className="d-flex">
                    <Button variant="primary" className="mx-2">Buy</Button>
                    <Button variant="secondary" className="mx-2">Rent</Button>
                </Col>

                {/* Right side: Commercial and Residential buttons */}
                <Col xs="auto" className="d-flex">
                    <Button variant="info" className="mx-2">Commercial</Button>
                    <Button variant="warning" className="mx-2">Residential</Button>
                    <Button variant="warning" className="mx-2">Pg</Button>
                </Col>
            </Row>
        </Container>
      <Search/>
      </>

    );
};

export default HomeSearch;
