import React from 'react'
import {
    ListGroup,
    ListGroupItem,
    Card
} from "reactstrap";

export default function SelectCategory({ getData}) {
    return (
        <Card body>
            <ListGroup flush>
                <ListGroupItem tag="button" onClick={e=> getData({step :2,form: { category: "املاک"}})}>
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">املاک</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button" onClick={e => getData({ step: 2, form: { category: "وسیله نقلیه"}})}>
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">وسیله نقلیه</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button" onClick={e => getData({ step: 2, form: { category: "لوازم الکترونیکی"}})}>
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">لوازم الکترونیکی</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button" onClick={e => getData({ step: 2, form: { category: "مربوط به خانه"}})}>
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">مربوط به خانه</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button" onClick={e => getData({ step: 2, form: { category: "خدمات"}})}>
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">خدمات</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button" onClick={e => getData({ step: 2, form: { category: "وسایل شخصی"}})}>
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">وسایل شخصی</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button" onClick={e => getData({ step: 2, form: { category: "سرگرمی و فراغت"}})}>
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">سرگرمی و فراغت</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button" onClick={e => getData({ step: 2, form: { category: "اجتماعی"}})}>
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">اجتماعی</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button" onClick={e => getData({ step: 2, form: { category: "برای کسب و کار"}})}>
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">برای کسب و کار</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button" onClick={e => getData({ step: 2, form: { category: "استخدام و کاریابی"}})}>
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">استخدام و کاریابی</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}
