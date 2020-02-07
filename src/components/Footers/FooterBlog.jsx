import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
export default function FooterBlog() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <div className="footer-logo-div">
              <Link to="#" className="wrapper-blog-logo">
                <img
                  className="img-fluid"
                  src={require("assets/img/brand/logo-weblog.png")}
                  alt=""
                />
              </Link>
            </div>
            <Col>
              <p>
                بلاگ دیوار در تلاش است تا با ارتقا دانش کاربران خود، در بهبود
                تجربه کاربران در استفاده از دیوار تأثیرگذار باشد. شما می‌توانید
                با مطالعه روزانه این بلاگ ضمن انجام معاملاتی بهتر و دقیق‌تر، از
                آخرین تحولات در سایت دیوار نیز مطلع شوید.
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={4}>
              <div className="social-network-blog ">
                <Row className="d-flex justify-content-center">
                  <Col className=" text-lg-center btn-wrapper">
                    <a
                      className="social-btn-blog"
                      href="https://twitter.com/divar"
                      target="_blank"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      className="social-btn-blog"
                      href="https://www.facebook.com/divar"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                    </a>

                    <a
                      className="social-btn-blog"
                      href="https://youtube.com/divar"
                      target="_blank"
                    >
                      <i className="fa fa-youtube-play" />
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
