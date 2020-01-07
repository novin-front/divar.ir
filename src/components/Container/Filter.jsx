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
  Input,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
} from "reactstrap";
export default function Filter() {
    return (
      <section className="filter-search">
        <Container>
          <div className="col-md-10">
            <InputGroup className="input-group-filter">
              <InputGroupAddon addonType="append">
                <button className="btn-filter-search">
                  <span>همه اگهی ها</span>
                  <span>
                    <i className="fa fa-angle-down"></i>
                  </span>
                </button>
              </InputGroupAddon>
              <Input placeholder="جستجو در همه آگهی ها" />
            </InputGroup>
          </div>
          <Col className="col-md-12 filter-tag-search">
            <button className="btn-filter-tag">خودرو سواری</button>
            <button className="btn-filter-tag">فروش مسکونی</button>
            <button className="btn-filter-tag">اجاره مسکونی</button>
            <button className="btn-filter-tag">موبایل</button>
            <button className="btn-filter-tag">مبلمان</button>
            <button className="btn-filter-tag">حیوانات</button>
            <button className="btn-filter-tag">وسایل شخصی</button>
            <button className="btn-filter-tag">خدمات</button>
            <button className="btn-filter-tag">استخدام</button>
          </Col>
          <div className="description-filter-search">
            <span>
              دیوار تهران - نیازمندی‌ های رایگان، آگهی‌های خرید، فروش نو و دست
              دوم و کارکرده، استخدام و خدمات
            </span>
          </div>
        </Container>
      </section>
    );
}
