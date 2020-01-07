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
  Modal
} from "reactstrap";
import Filter from './Filter';
import PostContainer from './PostContainer';


export default function Content() {
    return (
      <section className="content-all">
        <Container>
          <Filter />
          <PostContainer/>
        </Container>
      </section>
    );
}
