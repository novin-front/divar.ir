import React,{useState,useRef} from 'react'
import { OverlayTrigger, Tooltip, Modal,Button} from 'react-bootstrap'

import { Link } from 'react-router-dom';
import ReportProblem from './Modal/ReportProblem';
export default function ShareBox() {
    const [Tooltips, setTooltips] = useState({
        text : "کپی پیوند"
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const shortLink ="https://divar.ir/v/gXVsob0s";
    const copyToClipboard =()=>{
        let copyText = document.getElementById("ShortLinkInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        setTooltips({
            text : "پیوند کپی شد !"
        })
    }
    function renderTooltip(props) {
        return <Tooltip {...props}>{Tooltips.text}</Tooltip>;
    }
    return (
        <div className="adivertis-box-share">
           <div className="box-short-link-toltips">
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                <button className="adivertis-box-share__box-link" onClick={() => copyToClipboard()}>
                    <span className="title-link"><i className="fa fa-files-o" />
                        <span className="text-short-link d-none d-sm-none d-md-block">لینک به اشتراک گذاری</span>
                    </span>
                        {/* <span className="short-link">{shortLink}</span> */}
                        <input type="text"  readonly value={shortLink} readOnly id="ShortLinkInput"/>
                </button>
                </OverlayTrigger>
           </div>
            <div className="adivertis-box-share__guidelines">
                <p>دیوار هیچ‌گونه منفعت و مسئولیتی در قبال معامله شما ندارد.</p>
                <p>با مطالعه‌ی <Link className="divar-color" to="/">راهنمای خرید امن</Link>، آسوده‌تر معامله کنید.</p>
           </div>
            <button 
                    onClick={handleShow}
                    type="button" 
                    className="adivertis-box-share__report">

                        <i className="fa fa-flag px-2" />گزارش مشکل آگهی
            </button>
            <Modal className="Modal-coustom-react-bootstap" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>گزارش مشکل آگهی</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReportProblem/>
                </Modal.Body>
            </Modal>
        </div>
    )
}
