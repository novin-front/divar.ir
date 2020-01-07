import React from 'react'
import {
  Container,
  Row,
  Col,
  Modal,
  Input,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
  Card
} from "reactstrap";
import Footer from 'components/Footers/Footer';

export default function About() {
    return (
      <section className="section-about-us">
        <Container>
          <Col md={12}>
            <p>
              دیوار از سال ۱۳۹۲ با هدف خرید و فروش بدون واسطه‌ی آنلاین آغاز به
              کار کرد. امتیاز برند دیوار توسط شرکت «آگه پردازان هوشمند» (سهامی
              خاص) در تمامی مراجع قانونی ثبت شده است.
            </p>
            <h2>نیازمندی‌های ریز و درشت شما روی دیوار</h2>
            <p>
              در دیوار به آسانی می‌توانید نیازمندی‌هایتان را بر اساس محله
              دسته‌بندی کنید و نزدیک‌ترین‌ها را بیابید.
            </p>
            <br />
            <br />
            <br />
            <h3>برای قرار دادنِ آگهی‌های خود در دیوار</h3>
            <p>
              شهرتان را مشخص نمایید، علامت «+ ارسال آگهی رایگان» را انتخاب کنید
              و آنگاه آگهی‌تان را بفرستید.
            </p>
            <p>
              فراموش نکنید پیش از هر چیز یک آدرس ایمیل و یک شماره تلفن برای
              ارسال آگهی ضروری است. شما می‌توانید برای کالا یا خدمات‌تان عکسی
              نیز انتخاب کنید.
            </p>
            <p>
              به این ترتیب میلیون‌ها کاربران دیوار به آسانی آگهی‌ شما را خواهند
              دید و بر اساس محل آگهی شما را راحت‌تر خواهند یافت.
            </p>
            <br />
            <br />
            <br />
            <h3>خرید و فروش بی‌واسطه</h3>
            <p>
              در دیوار کاربران مستقیماً با هم تماس می‌گیرند و هیچ واسطه‌ای در
              این میان وجود ندارد، پس دقت فرمایید که در خرید و فروشِ شما دیوار
              هیچ دخالتی ندارد و کاربران باید خودشان جنبه‌های مختلف امنیتی را در
              نظر بگیرند.
            </p>
          </Col>
          <br />
          <br />
          <br />
        </Container>
        <Footer />
      </section>
    );
}
