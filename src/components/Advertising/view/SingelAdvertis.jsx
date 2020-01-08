import React,{useState} from 'react'
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalBody,
  ModalCity,
  ModalHeader
} from "reactstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSilder from './productSlider'
import ShareBox from './ShareBox';
import AdvertisingActions from './AdvertisingActions';
export default function SingelAdvertis() {
  const [Modal, setModal] = useState(false)
  const toggle = () => {
    // setModal(!(Modal))
    };
    return (
      <section className="single-Adivertis-view">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={12}>
              <div>
                <Breadcrumb tag="nav" listTag="div">
                  <BreadcrumbItem active tag="span">
                    بازگشت
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#" className="first-child">
                    همه آگهی ها
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    دسته بندی
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    عنوان آگهی
                  </BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 text-right">
            <Col md={6}>
              <div className="Advertis-content-Wrapper">
                <h1 className="Advertis-content-Wrapper__title">عنوان آگهی</h1>
                <div className="Advertis-content-Wrapper__publish-time">
                  11 ساعت پیش
                </div>
                <div className="Advertis-content-Wrapper__btn-details">
                  <AdvertisingActions/>
                </div>
              </div>
              <ul className="advertis-data-list col-md-11">
                <li className="advertis-data-list__item">
                  <span className="title">دسته بندی</span>
                  <span className="discription">
                    سیستم گرمایشی سرمایشی و گاز
                  </span>
                </li>
                <li className="advertis-data-list__item">
                  <span className="title">محل</span>
                  <span className="discription divar-color">تهران ،پیروزی</span>
                </li>
                <li className="advertis-data-list__item">
                  <span className="title">نوع آگهی</span>
                  <span className="discription">فروشی</span>
                </li>
                <li className="advertis-data-list__item">
                  <span className="title">قیمت</span>
                  <span className="discription">۴۷۰٫۰۰۰ تومان</span>
                </li>
              </ul>
              <Row>
                <Col md={12}>
                    <div className="discription-Adivertis">
                      <p>
                        ۱۶۰ متر شهرک غرب( ویلائی)
                        <br/>
                        فاز یک شهرک غرب
                        <br/>
                        ۳ خواب
                        <br/>
                        ۲ طبقه ۲واحدی
                        <br/>
                        پارکینگ 
                        <br/>
                        انبار
                        <br/>
                        بالکن
                        <br/>
                        حیاط مشجر و زیبا 
                      </p>
                    </div>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
                <ProductSilder/>
                <ShareBox/>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
