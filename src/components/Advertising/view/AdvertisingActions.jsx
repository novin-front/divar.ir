import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import MarkAdvertising from './Modal/MarkAdvertising';
import ContactAdvertisNumber from './Modal/ContactAdvertisNumber';

export default function AdvertisingActions() {
    const [show, setShow] = useState(false);
    const [ModalContent, setModalContent] = useState({
        modalShow : ""
    });

    const handleClose = () => {
        
        setModalContent({
            modalShow : ""
        })
        setShow(false);
        
    }
    const handleShow = async (modalstatus) => {
       
        await setModalContent({
            modalShow : modalstatus
        })
        setShow(true);
       
    }
    const RenderModalContent =()=>{
        console.log(ModalContent);
        switch (ModalContent.modalShow) {
            case "MARK":
                return(
                    <MarkAdvertising/>
                );
            case "CONTACT":
                return(
                    <ContactAdvertisNumber/>
                );
            default:
                break;
        }
    }
    return (
        <>
            <button 
                onClick={e => handleShow("CONTACT")}
                    className="btn-divar">دریافت اطلاعات تماس</button>
            <button className="btn-divar-block">
                <span>شروع چت</span>
                <span>
                    <i className="fa fa-comments-o" />
                </span>
            </button>

            <button
                onClick={e => handleShow("MARK")}
                className="btn-divar mr-4">نشان شده</button>
            <Modal className="Modal-coustom-react-bootstap" show={show} onHide={handleClose}>
                {RenderModalContent()}
            </Modal>
        </>

    )
}
