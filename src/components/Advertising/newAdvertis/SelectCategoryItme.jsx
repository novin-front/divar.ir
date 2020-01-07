import React from 'react'
import {
    ListGroup,
    ListGroupItem,
    Card
} from "reactstrap";

export default function SelectCategoryItme({ getData}) {
    return (
        <Card body>
            <ListGroup flush>
                <ListGroupItem tag="button">
                    <div className="list-catagory-wrapper" onClick={e => getData({ step: 3, form: { categoryItme: ["خودرو"] } })}>
                        <span className="list-catagory-content">خودرو</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button">
                    <div className="list-catagory-wrapper" onClick={e => getData({ step: 3, form: { categoryItme: ["قطعات یدکی و لوازم جانبی خودرو"] } })}>
                        <span className="list-catagory-content">قطعات یدکی و لوازم جانبی خودرو</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button">
                    <div className="list-catagory-wrapper" onClick={e => getData({ step: 3, form: { categoryItme: ["موتورسیکلت و لوازم جانبی"] } })}>
                        <span className="list-catagory-content">موتورسیکلت و لوازم جانبی</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button">
                    <div className="list-catagory-wrapper" onClick={e => getData({ step: 3, form: { categoryItme: ["قایق و لوازم جانبی"] } })}>
                        <span className="list-catagory-content">قایق و لوازم جانبی</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button">
                    <div className="list-catagory-wrapper" onClick={e => getData({ step: 3, form: { categoryItme: ["متفرقه"] } })}>
                        <span className="list-catagory-content">متفرقه</span>
                        <span className="list-catagory-icon">
                            <i className="fa fa-angle-left" />
                        </span>
                    </div>
                </ListGroupItem>
                <ListGroupItem tag="button">
                    <div className="list-catagory-wrapper" onClick={e => getData({ step: 3, form: { categoryItme: ["وسایل شخصی"] } })}>
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
