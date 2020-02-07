import React from 'react'
import {
  Container,
  Col,
  Modal,
  Input,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
  Spinner
} from "reactstrap";
import { connect } from 'react-redux'
function Filter({ suggestion ,Categoryes}) {
  const RenderFerterTag = ()=>{
    if(suggestion.length > 0){
         return suggestion.map((itme, index) => {
           return (
             <button className="btn-filter-tag">{itme.displayed_text}</button>
           );
         });
    }else{
      return (
        <div className="col-12 text-center ">
          <Spinner style={{ width: "1.5rem", height: "1.5rem" , color : "#a62626"}} />
        </div>
      );
    }
  }
    return (
      <section className="filter-search">
        <Container>
          <div className="col-md-10">
            <InputGroup className="input-group-filter">
              <InputGroupAddon addonType="append">
                <button className="btn-filter-search">
                  <span>همه اگهی ها</span>
                  <span>
                    <i className="fa fa-angle-down"></i>
                  </span>
                </button>
              </InputGroupAddon>
              <Input placeholder="جستجو در همه آگهی ها" />
            </InputGroup>
          </div>
          <Col className="col-md-12 filter-tag-search">
            {RenderFerterTag()}
          </Col>
          <div className="description-filter-search">
            <span>
              دیوار تهران - نیازمندی‌ های رایگان، آگهی‌های خرید، فروش نو و دست
              دوم و کارکرده، استخدام و خدمات
            </span>
          </div>
        </Container>
      </section>
    );
}
const mapStateToProps = (state) => {
let { DivarApi } = state;
return {
  Categoryes: DivarApi.AllCategory,
  suggestion: DivarApi.suggestion_list,
}
}
export default connect(mapStateToProps, null)(Filter)