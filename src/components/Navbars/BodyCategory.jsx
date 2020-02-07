import React from 'react'
import {
    Form,
    Modal,
    Button,
    Spinner
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function BodyCategory({title,data}) {
    const RenderCategoryes = () => {
        if (data.length > 0) {
          return data.map((itme, index) => {
            if (itme.parent_slug === "root") {
              return (
                <li className="filter-category-list-modal__li" key={index}>
                  <Link to=" " className="filter-category-list-modal__item">
                    <img
                      src={itme.icon_url.replace("_%s.png", ".svg")}
                      className="filter-category-list-modal__icon"
                      alt=""
                    />
                    {itme.title}
                    <i className="fa fa-angle-left" />
                  </Link>
                </li>
              );
            }
          });
        } else {
          return (
            <div className="text-center pt-5 mt-5">
              <Spinner animation="border" variant="divar-color" size="lg" />
            </div>
          );
        }

    }
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul className="filter-category-list-modal">
                    {RenderCategoryes()}
                </ul>
            </Modal.Body>
        </>
    )
}
