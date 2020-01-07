import React from 'react'
import { Container, Button, Form, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import FooterBlog from 'components/Footers/FooterBlog';
export default function Weblog() {
    return (
      <section className="weblog-section">
        <div className="header">
          <h2 className="divar-color">وبلاگ سایت دیوار</h2>
        </div>

        <Container fluid>
          <Row className="d-flex justify-content-center">
            <div className="leftcolumn">
              <div className="card">
                <h2 className="blog-title-divar">آخرین مقالات</h2>
              </div>
              <div className="card">
                <h2 className="post-title-itme">عنوان پست</h2>
                <span className="post-time-publish-itme">
                  تاریخ انتشار :۱ دی ۱۳۹۸
                </span>
                <div className="post-image-itme">
                  <img
                    className="img-fluid"
                    src={require("assets/img/divar/diva-about.jpg")}
                    alt=""
                  />
                </div>
                <div className="content-post-itme">
                  <p>
                    از‭ ‬جمله‭ ‬اتاق‌های‭ ‬برجسته‌ای‭ ‬که‭ ‬در‭ ‬تاریخ‭ ‬طراحی‭
                    ‬خودرو‭ ‬نام‌شان‭ ‬برای‭ ‬همیشه‭ ‬ماندگار‭ ‬شده،‭ ‬سدان‭
                    ‬متوسط‭ ‬مرسدس‭ ‬بنز‭ ‬در‭ ‬کلاس‭ ‬محصولات‭ ‬پریمیوم‭ ‬است‭
                    ‬که‭ ‬با‭ ‬کد‭ ‬W110‭ ‬شناخته‭ ‬شده‭ ‬و‭ ‬در‭ ‬دهه‭ ‬۴۰‭
                    ‬خورشیدی‭ ‬توسط‭ ‬برادران‭ ‬خیامی‭ ‬به‭ ‬ایران‭ ‬وارد‭ ‬شد‭
                    ‬و‭ ‬سریعا‭ ‬محبوبیت‭ ‬پیدا‭ ‬کرد‭.
                  </p>
                </div>
                <div className="more-btn-wrapper">
                  <Link className="more-btn-bost">ادامه مطلب</Link>
                </div>
              </div>
            </div>
            <div className="rightcolumn">
              <div className="card">
                <h2 className="blog-title-divar">درباره وبلاگ</h2>
                <div className="fakeimg">
                  <img
                    className="img-fluid"
                    src={require("assets/img/divar/diva-about.jpg")}
                    alt=""
                  />
                </div>
                <p className="text-justify px-2">
                  بلاگ دیوار در تلاش است تا با ارتقا دانش کاربران خود، در بهبود
                  تجربه کاربران در استفاده از دیوار تأثیرگذار باشد.
                  <br />
                  شما می‌توانید با مطالعه روزانه این بلاگ ضمن انجام معاملاتی
                  بهتر و دقیق‌تر، از آخرین تحولات در سایت دیوار نیز مطلع شوید.
                </p>
              </div>
              <div className="card">
                <h3 className="blog-title-divar">دیوار پلاس</h3>
                <div className="post-content-wrapper">
                  <div className="post-content">
                    <div className="fakeimg-thumbnail">
                      <img
                        className="img-fluid"
                        src={require("assets/img/divar/diva-about.jpg")}
                        alt=""
                      />
                    </div>
                    <h4>عنوان پست</h4>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 className="blog-title-divar">
                  دنبال کردن دیوار در شبکه های اجتماعی
                </h3>
                <div class="social-network-blog-sidebar ">
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
              </div>
            </div>
          </Row>
        </Container>
        <FooterBlog/>
      </section>
    );
}
