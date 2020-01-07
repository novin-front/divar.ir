import React from 'react'
import {
    Button,
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    Modal,
    ListGroup,
    ListGroupItem,
    Card
} from "reactstrap";
import SelectCategory from './SelectCategory';
import GetDataForms from './GetDataForms';
import SelectCategoryItme from './SelectCategoryItme';

export default function NewAdvertising() {
    return (
        <section className="new-advertising">
            
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col className="col-12 col-md-10">
                        <h1>ثبت آگهی جدید</h1>
                        <div className="advertising-container">
                           
                            {/* <SelectCategory/>
                            <SelectCategoryItme/> */}
                            <GetDataForms/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
