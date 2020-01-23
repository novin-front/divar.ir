import React,{useState} from 'react'
import {
    Form,
    Modal,
    Button
} from 'react-bootstrap';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import BodyCategory from './BodyCategory';
import BodyFilter from './BodyFilter';
function FilterMobile({ Categoryes,suggestion}) {
    const [show, setShow] = useState(false);
    const [Modalcount, setModalcount] = useState() 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const RenderFerterTag = () => {
        return (
            suggestion.map((itme, index) => {
                return (
                    <button className="btn-filter-tag" key={index}>{itme.displayed_text}</button>
                )
            })
        );
    }
    const RenderModal =()=>{
        switch (Modalcount) {
            case 1:
                return <BodyCategory title="انتخاب دسته بندی" data={Categoryes}/>;
            case 2:
                return <BodyFilter title="فیلتر ها"/>;
            default:
                break;
        }
    }
    return (
        <>
            <div className="filter-mobile-wrapper">
                <div className="filter-mobile-wrapper__input">
                    <Form.Control type="text" placeholder="جستجو در همه آگهی ها" />
                </div>
                <div className="filter-mobile-wrapper__buttns">
                    <button className="filter-btn" onClick={e=>{
                        setModalcount(1);
                        handleShow()
                    }}>
                        <i className="fa fa-th-list" />
                        دسته 
                    </button>
                    <button className="filter-btn"
                        onClick={e => {
                            setModalcount(2);
                            handleShow()
                        }}>
                        <i className="fa fa-filter"/>
                        فیلتر
                    </button>
                    {RenderFerterTag()}
                </div>
                
            </div>
            <Modal id="modal-moblie-category-filter" show={show} onHide={handleClose}>
                {RenderModal()}
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => {
    let { DivarApi } = state;
    return {
        Categoryes: DivarApi.AllCategory,
        suggestion: DivarApi.suggestion_list,
    }
}
export default connect(mapStateToProps, null)(FilterMobile)