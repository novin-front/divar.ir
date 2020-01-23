import React,{useState,useEffect} from 'react'
import {
  Container,
  Row,
} from "reactstrap";
import {connect} from 'react-redux'
import WidgetItem from './widgetItem';

function PostContainer({ widgetList, Categoryes, fetchAdvertise, fetchCategories,}) {
  useEffect(() => {
  
  }, [widgetList.length > 0]);
  const RenderAdvertisingList = ()=>{

    if (widgetList.length > 0){
      return(
        widgetList.map((item, index) => {
          return (
            <WidgetItem key={index} data={item.data} />
          )
        })
      )
    }
  }
    return (
      <section className="post-Container">
        <div className="browse-post-list">       
          <Row>
            {RenderAdvertisingList()}
          </Row>
        </div>
      </section>
    );
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdvertise: (payload) => {
      dispatch({
        type: "GET_ADVERTISING_DATA",
        payload
      })
    },
    fetchCategories: (payload) => {
      dispatch({
        type: "GET_ALL_CATEGORYES_DATA",
        payload
      })
    }
  }
}

const mapStateToProps = (state) => {
  let { DivarApi} =state;
  return {
    widgetList: DivarApi.AdvertisingList,
    Categoryes: DivarApi.AllCategory,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)