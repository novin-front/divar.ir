import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import ModalCity from "./ModalCity";

class DemoNavbar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      modal:false
    }
  }
  toggle = () =>{
    this.setState({
      modal: !(this.state.modal)
    })};
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }

  render() {
    const {
      buttonLabel,
      className
    } = this.props;
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <div className="container-fluid" >
              <NavbarBrand className="" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/logo-divar.png")}
                />
                
              </NavbarBrand>
              <button
                onClick={this.toggle}
                className="btn-divar-city"
              >
                <span className="nav-link-inner--text ml-1">
                  تهران
                  </span>
                <span className="btn-inner--icon">
                  <i className="fa fa-angle-down px-2"></i>
                </span>

              </button>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/logo-divar.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className={window.innerWidth < 980 ? "align-items-lg-center ml-lg-auto" : ""} navbar>
                  <NavItem >
                    <Link
                      className="link-itme"
                      to="/"

                    >
                      دیوار من
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="link-itme"
                      to="/chat"
                      
                    >
                      چت
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="link-itme"
                      to="/about"

                    >
                      درباره من
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="link-itme"
                      to="/blog"

                    >
                      بلاگ
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="link-itme"
                      to="/support"

                    >
                     پشتیبانی و قوانین
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="link-itme"
                      to="/contact"

                    >
                      تماس با ما
                    </Link>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Link to='/new'
                      className="btn-divar"
                    >
                      <span className="nav-link-inner--text ml-1">
                        ثبت رایگان آگهی
                      </span>
                    </Link>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </div>
          </Navbar>
        </header>
        <Modal isOpen={this.state.modal} id="Modal-city" toggle={this.toggle} className={`All-city-modal ${className}`}>
          <ModalHeader className="header-city-modal" toggle={this.toggle}>انتخاب شهر</ModalHeader>
          <ModalBody>
            <ModalCity/>
        </ModalBody>
        </Modal>
      </>
    );
  }
}

export default DemoNavbar;
