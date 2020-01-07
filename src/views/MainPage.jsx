import React from 'react'
import DemoNavbar from 'components/Navbars/DemoNavbar'
import { Container, Row,Col } from "reactstrap";
import MainSidebar from 'components/sidebar/MainSidebar';
import Content from 'components/Container/Content';

export default function MainPage() {
    return (
        <>
            <DemoNavbar />
            <Container fluid={true}>
                <Row>
                    <Col md={3} className="p-0">
                        <MainSidebar />
                    </Col>
                    <Col md={9}>
                        <Content/>
                    </Col>
                </Row>
            </Container>
        </>
       
    )
}
