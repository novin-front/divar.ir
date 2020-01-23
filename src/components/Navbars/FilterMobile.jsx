import React from 'react'
import {
    Form
} from 'react-bootstrap';
import {connect} from 'react-redux';
function FilterMobile({ suggestion}) {
    const RenderFerterTag = () => {
        return (
            suggestion.map((itme, index) => {
                return (
                    <button className="btn-filter-tag">{itme.displayed_text}</button>
                )
            })
        );
    }
    return (
        <>
            <div className="filter-mobile-wrapper">
                <div className="filter-mobile-wrapper__input">
                    <Form.Control type="text" placeholder="جستجو در همه آگهی ها" />
                </div>
                <div className="filter-mobile-wrapper__buttns">
                    <button className="filter-btn">
                        <i className="fa fa-th-list" />
                        دسته 
                    </button>
                    <button className="filter-btn">
                        <i className="fa fa-filter"/>
                        فیلتر
                    </button>
                    {RenderFerterTag()}
                </div>

            </div>
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