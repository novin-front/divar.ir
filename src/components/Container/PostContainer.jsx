import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  UncontrolledCollapse,
  Card,
  CardBody,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default function PostContainer() {
    return (
      <section className="post-Container">
        <div className="browse-post-list">
          <div className="col-xs-12 col-sm-6 col-xl-4 post-list-card">
            <div className="post-list-card__content">
              <h4 className="post-list-card__title">
                صندلی سیلور تالاری تالار مجلسی
              </h4>
              <div className="post-list-card__description">
                ۲۱,۰۰۰,۰۰۰ تومان
              </div>
              <div className="post-list-card__info">
                <span className="post-list-card__info-label">
                  لحظاتی پیش در نارمک
                </span>
                <span className="post-list-card__info-chat">
                  <i className="fa fa-comments-o px-2"></i>
                </span>
              </div>
            </div>
            <div className="post-list-card__image">
              <img
                src="https://s101.divarcdn.com/static/thumbnails/1578241570/gXJkbnn4.jpg"
                className="post-card__image img-fluid rounded"
                alt="صابون زغال اورکلین EVER CLEAN"
                title="صابون زغال اورکلین EVER CLEAN"
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-xl-4 post-list-card">
            <div className="post-list-card__content">
              <h4 className="post-list-card__title">
                صندلی سیلور تالاری تالار مجلسی
              </h4>
              <div className="post-list-card__description">
                ۲۱,۰۰۰,۰۰۰ تومان
              </div>
              <div className="post-list-card__info">
                <span className="post-list-card__info-label">
                  لحظاتی پیش در نارمک
                </span>
                <span className="post-list-card__info-chat">
                  <i className="fa fa-comments-o px-2"></i>
                </span>
              </div>
            </div>
            <div className="post-list-card__image">
              <img
                src="https://s101.divarcdn.com/static/thumbnails/1578241574/gXMEYObY.jpg"
                className="post-card__image mg-fluid rounded"
                alt="صابون زغال اورکلین EVER CLEAN"
                title="صابون زغال اورکلین EVER CLEAN"
              />
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 col-xl-4 post-list-card">
            <div className="post-list-card__content">
              <h4 className="post-list-card__title">
                صندلی سیلور تالاری تالار مجلسی
              </h4>
              <div className="post-list-card__description">
                ۲۱,۰۰۰,۰۰۰ تومان
              </div>
              <div className="post-list-card__info">
                <span className="post-list-card__info-label">
                  لحظاتی پیش در نارمک
                </span>
                <span className="post-list-card__info-chat">
                  <i className="fa fa-comments-o px-2"></i>
                </span>
              </div>
            </div>
            <div className="post-list-card__image">
              <img
                src="https://s101.divarcdn.com/static/thumbnails/1578241574/gXMEYObY.jpg"
                className="post-card__image mg-fluid rounded"
                alt="صابون زغال اورکلین EVER CLEAN"
                title="صابون زغال اورکلین EVER CLEAN"
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-xl-4 post-list-card">
            <div className="post-list-card__content">
              <h4 className="post-list-card__title">
                صندلی سیلور تالاری تالار مجلسی
              </h4>
              <div className="post-list-card__description">
                ۲۱,۰۰۰,۰۰۰ تومان
              </div>
              <div className="post-list-card__info">
                <span className="post-list-card__info-label">
                  لحظاتی پیش در نارمک
                </span>
                <span className="post-list-card__info-chat">
                  <i className="grey comments outline large icon"></i>
                </span>
              </div>
            </div>
            <div className="post-list-card__image">
              <img
                src="https://s101.divarcdn.com/static/thumbnails/1578241574/gXMEYObY.jpg"
                className="post-card__image mg-fluid rounded"
                alt="صابون زغال اورکلین EVER CLEAN"
                title="صابون زغال اورکلین EVER CLEAN"
              />
            </div>
          </div>
        </div>
      </section>
    );
}
