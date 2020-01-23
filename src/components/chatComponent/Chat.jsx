import React from 'react'
import {
  Container,
  Row,
  Col,
  Modal,
  Input,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
  Card,
} from "reactstrap";

export default function Chat() {
    return (
      <>
        <Row className="chat-section d-flex justify-content-center">
          <Col md="4">
            <Card body>
              <h4 className="h6 text-right">
                لطفا شماره تلفن خود را وارد کنید.
              </h4>
              <InputGroup>
                <Input type="number" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>+98 </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <div className="px-1 my-2">
                <button type="button" disabled className="btn-divar disabled w-100">
                  <span className="nav-link-inner--text ml-1">
                    ثبت رایگان آگهی
                  </span>
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      </>
    );
}
