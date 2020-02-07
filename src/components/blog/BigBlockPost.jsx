import React from 'react'
import { Container, Button, Form, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function BigBlockPost({postData,image}) {
    return (
      <div className="card">
        <h2 className="post-title-itme">{postData.title}</h2>
        <span className="post-time-publish-itme">تاریخ انتشار :۱ دی ۱۳۹۸</span>
        <div className="post-image-itme">
          <img
            className="img-fluid"
            src={image}
            alt=""
          />
        </div>
        <div className="content-post-itme">
          <p>
            {postData.body}
          </p>
        </div>
        <div className="more-btn-wrapper">
          <Link to="#" className="more-btn-bost">
            ادامه مطلب
          </Link>
        </div>
      </div>
    );
}
