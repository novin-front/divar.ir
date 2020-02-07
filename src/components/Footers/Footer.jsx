import React from 'react'
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footer() {
    return (
      <>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md="7">
              <ul className="download-footer-icon-list">
                <li className="download-footer-icon-list__item">
                  <a href="https://cafebazaar.ir/app/ir.divar/?l=fa">
                    <img
                      className="img-fluid"
                      alt="..."
                      src={require("assets/img/download/bazaar-badge.png")}
                    />
                  </a>
                </li>
                <li className="download-footer-icon-list__item">
                  <a href="https://apps.apple.com/us/app/dywar/id863029557">
                    <img
                      className="img-fluid"
                      alt="..."
                      src={require("assets/img/download/download-app-store.png")}
                    />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <div className="social-network ">
            <span className="head">
              <h5>دیوار</h5> را در شبکه‌های اجتماعی دنبال کنید:
            </span>
            <Row className="d-flex justify-content-center">
              <Col className=" text-lg-center btn-wrapper" lg="6">
                <a
                  className="social-btn"
                  href="https://twitter.com/divar"
                  target="_blank"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a
                  className="social-btn"
                  href="https://www.facebook.com/divar"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" />
                </a>

                <a
                  className="social-btn"
                  href="https://instagram.com/divar"
                  target="_blank"
                >
                  <i className="fa fa-instagram" />
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
}
