import React from 'react'
import {
    Modal,
    Button
} from 'react-bootstrap';
import {
    UncontrolledCollapse,
    Card,
    CardBody,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
 import Select from "react-select";
import { Link } from "react-router-dom";

export default function BodyFilter({ title, data }) {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul className="filter-other-list">
                    <li className="filter-other-list__item">
                        <Button className="btn-Collapse" id="Location">
                            <span className="text-btn">محل</span>
                            <span className="icon-btn">
                                <i className="fa fa-angle-down"></i>
                            </span>
                        </Button>
                        <UncontrolledCollapse toggler="#Location">
                            <Card className="divar-card-filter">
                                <CardBody>
                                    <Select isRtl={true} placeholder="همه محله ها" />
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                    </li>
                    <li className="filter-other-list__item">
                        <Button className="btn-Collapse" id="Price">
                            <span className="text-btn">قیمت</span>
                            <span className="icon-btn">
                                <i className="fa fa-angle-down"></i>
                            </span>
                        </Button>
                        <UncontrolledCollapse toggler="#Price">
                            <Card className="divar-card-filter">
                                <CardBody>
                                    <Select isRtl={true} placeholder="مثلا 7000000" />
                                    <span style={{ display: "block", width: "100%", height: "10px" }}></span>
                                    <Select isRtl={true} placeholder="مثلا 7000000" />
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                    </li>
                    <li className="filter-other-list__item">
                        <div className="item__filter-div">
                            <span className="text-div">فقط عکس دار</span>
                            <span className="input-div">
                                <label className="custom-toggle">
                                    <input type="checkbox" />
                                    <span className="custom-toggle-slider divar-toggle-slider rounded-circle" />
                                </label>
                            </span>
                        </div>
                    </li>
                    <li className="filter-other-list__item">
                        <div className="item__filter-div">
                            <span className="text-div">فقط فوری ها</span>
                            <span className="input-div">
                                <label className="custom-toggle">
                                    <input type="checkbox" />
                                    <span className="custom-toggle-slider divar-toggle-slider rounded-circle" />
                                </label>
                            </span>
                        </div>
                    </li>
                </ul>
                <ul className="download-icon-list">
                    <li className="download-icon-list__item">
                        <a href="https://cafebazaar.ir/app/ir.divar/?l=fa">
                            <img
                                className="img-fluid"
                                alt="..."
                                src={require("assets/img/download/bazaar-badge.png")}
                            />
                        </a>
                    </li>
                    <li className="download-icon-list__item">
                        <a href="https://apps.apple.com/us/app/dywar/id863029557">
                            <img
                                className="img-fluid"
                                alt="..."
                                src={require("assets/img/download/download-app-store.png")}
                            />
                        </a>
                    </li>
                </ul>
            </Modal.Body>
        </>
    )
}
