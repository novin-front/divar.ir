import React from 'react'
import {
    ListGroup,
    ListGroupItem,
    Card
} from "reactstrap";

export default function SelectCategoryItme() {
    return (
        <Card body>
            <ListGroup flush>
                <ListGroupItem tag="button">
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">خودرو</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button">
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">قطعات یدکی و لوازم جانبی خودرو</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button">
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">موتورسیکلت و لوازم جانبی</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button">
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">قایق و لوازم جانبی</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button">
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">متفرقه</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button">
                    <div className="list-catagory-wrapper">
                        <span className="list-catagory-content">وسایل شخصی</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}
