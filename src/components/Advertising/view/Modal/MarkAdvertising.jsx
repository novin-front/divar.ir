import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

export default function MarkAdvertising() {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>نشان کردن</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div className="my-2">
                   با ورود به حساب کاربری، آگهی‌هایی که نشان می‌کنید در حساب کاربری‌ شما ذخیره خواهند شد و از طریق همه دستگاه‌هایی که به وسیله آن‌ها وارد حساب کاربری خود در دیوار شوید در دسترس خواهند بود.
               </div>
                <Form.Group controlId="taves">
                    <Form.Check
                        custom
                        type="checkbox"
                        id="root_exchange"
                        name="root_exchange"
                        label="دیگه اینو نپرس"
                    />
                </Form.Group>
            </Modal.Body> 
            <Modal.Footer className="bg-modal-footer">
                <button className="btn-divar-border" >
                        الان نه
                    </button>
                    <button className="btn-divar">
                        ورود
                    </button>
                </Modal.Footer>
        </>
    )
}
