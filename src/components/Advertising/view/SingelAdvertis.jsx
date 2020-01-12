import React,{useState,useEffect} from 'react'
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
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
function SingelAdvertis(props) {
  useEffect(() => {
    
    props.getSingledata(props.match.params.id)
  }, [])
  const [Modal, setModal] = useState(false)
  const toggle = () => {
    // setModal(!(Modal))
    };
  const RenderBreadcrumb=(Datahear)=>{
    let { breadcrumb } =props.singleWidgets;
    let name;
    if (breadcrumb != undefined){
      breadcrumb.categories.map((itme,index) => {
        if (index === Datahear) {
          name = itme.title;
        }
      })
      return name;
    }
  }
  const Renderlist_data = (Datahear) => {
    let { list_data } = props.singleWidgets;
    let name;
    if (list_data != undefined) {
      list_data.map((itme, index) => {
        if (index === Datahear) {
          name = itme.value;
        }
      })
      return name;
    }
  }
    return (
      <section className="single-Adivertis-view">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={12}>
              <div>
                <Breadcrumb tag="nav" listTag="div">
                  <BreadcrumbItem active tag="span">
                    <Link to="/">
                      بازگشت
                      </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#" className="first-child">
                    {RenderBreadcrumb(3)}
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    {RenderBreadcrumb(2)}
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    {RenderBreadcrumb(1)}
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    {RenderBreadcrumb(0)}
                  </BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 text-right">
            <Col md={6}>
              <div className="Advertis-content-Wrapper">
                <h1 className="Advertis-content-Wrapper__title">
                  
                  {props.singleWidgets.header != undefined ? props.singleWidgets.header.title : ''}
                </h1>
                <div className="Advertis-content-Wrapper__publish-time">
                  {props.singleWidgets.header != undefined ? props.singleWidgets.header.date : ''}
                </div>
                <div className="Advertis-content-Wrapper__btn-details">
                  <AdvertisingActions/>
                </div>
              </div>
              <ul className="advertis-data-list col-md-11">
                <li className="advertis-data-list__item">
                  <span className="title">دسته بندی</span>
                  <span className="discription">
                    {Renderlist_data(0)}
                  </span>
                </li>
                <li className="advertis-data-list__item">
                  <span className="title">محل</span>
                  <span className="discription divar-color">
                    { Renderlist_data(1) }
                  </span>
                </li>
                <li className="advertis-data-list__item">
                  <span className="title">نوع آگهی</span>
                  <span className="discription">
                    { Renderlist_data(2) }
                  </span>
                </li>
                <li className="advertis-data-list__item">
                  <span className="title">قیمت</span>
                  <span className="discription">
                    {Renderlist_data(3)}
                  </span>
                </li>
              </ul>
              <Row>
                <Col md={12}>
                    <div className="discription-Adivertis">
                      <p>
                      {props.singleWidgets.description != undefined ? props.singleWidgets.description : ''}
                      </p>
                    </div>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <ProductSilder img={props.singleWidgets.images}/>
                <ShareBox/>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getSingledata: (payload) => {
      dispatch({
        type: "GET_SINGLE_POST_DATA",
        payload
      })
    },
  }
}

const mapStateToProps = (state) => {
  let { DivarApi } = state;
  return {
    singlePostAllData: DivarApi.singlePostData,
    singleWidgets: DivarApi.singleWidgetsData,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingelAdvertis)

// export default SingelAdvertis;
