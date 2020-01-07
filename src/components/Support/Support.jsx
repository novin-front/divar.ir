import React from 'react'
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
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Link } from 'react-router-dom';
import Footer from 'components/Footers/Footer';
export default function Support() {
    return (
      <section className="support-section">
        <Container fluid>
          <Row className="d-flex justify-content-center">
            <Col md={10}>
              <h1 className="text-center my-4">مرکز پشتیبانی دیوار</h1>
            </Col>
            <Col md={9}>
              <FormGroup>
                <Input
                  type="text"
                  name="serch-box"
                  placeholder="جست و جو در سوالات"
                />
              </FormGroup>
            </Col>
          </Row>
          <ul className="category-icon-list">
            <li className="category-icon-list__itme">
              <Link>
                <span>ثبت آگهی</span>
                <i className="fa fa-file-text-o" />
              </Link>
            </li>
            <li className="category-icon-list__itme">
              <Link>
                <span>جستجو و فیلتر</span>
                <i className="fa fa-search" />
              </Link>
            </li>
            <li className="category-icon-list__itme">
              <Link>
                <span>دیوار من</span>
                <i className="fa fa-address-card-o" />
              </Link>
            </li>
            <li className="category-icon-list__itme">
              <Link>
                <span> آگهی های من</span>
                <i className="fa fa-file-image-o" />
              </Link>
            </li>
            <li className="category-icon-list__itme">
              <Link>
                <span> انتقادات و پیشنهادات</span>
                <i className="fa fa-file-powerpoint-o" />
              </Link>
            </li>
            <li className="category-icon-list__itme">
              <Link>
                <span> گزارش تخلف</span>
                <i className="fa fa-gavel" />
              </Link>
            </li>
            <li className="category-icon-list__itme">
              <Link>
                <span> پرداخت</span>
                <i className="fa fa-credit-card-alt" />
              </Link>
            </li>
            <li className="category-icon-list__itme">
              <Link>
                <span>شرایط و قوانین</span>
                <i className="fa fa-file-text" />
              </Link>
            </li>
            <li className="category-icon-list__itme">
              <Link>
                <span> دلیل حذف آگهی</span>
                <i className="fa fa-file-excel-o" />
              </Link>
            </li>
            <li className="category-icon-list__itme">
              <Link>
                <span> سوالات پرتکرار </span>
                <i className="fa fa-file-word-o" />
              </Link>
            </li>
            <li className="category-icon-list__itme">
              <Link>
                <span> آموزش ویدئویی </span>
                <i className="fa fa-file-video-o" />
              </Link>
            </li>
          </ul>
          <div className="contact_us-section mb-4">
            <h2>
              در تمامی ساعات شبانه‌روز و ایام هفته می‌توانید با ما در ارتباط
              باشید
            </h2>
            <Link className="btn-contact-support">
                ارتباط با پشتیبانی
            </Link>
          </div>
          <Footer/>
        </Container>
      </section>
    );
}
