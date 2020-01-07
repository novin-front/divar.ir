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
import { Link } from 'react-router-dom';
export default function NotFound() {
    return (
        <div className="not-found-div">
           <Container>
                <Row className="d-flex justify-content-center">
                   <Col md={10}>
                       <div className="img-not-found-wrapper">
                            <img src={require("assets/img/divar/404.png")} className="img-fluid" alt="" />
                       </div>
                        <div className="title-not-found-wrapper">
                           این راه به جایی نمیرسد!
                       </div>
                        <div className="title-not-found-wrapper-p">
                           این راه به جایی نمیرسد!
                       </div>
                        <div class="title-not-found-wrapper-p">برای پیدا کردن مسیر درست می‌توانید سری به <Link to="/"> صفحه اول دیوار </Link> بزنید</div>
                   </Col>
               </Row>
           </Container>
            
        </div>
    )
}
