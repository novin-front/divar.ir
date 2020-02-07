import React,{useState,useEffect} from 'react'
import {
  Container,
  Row,
  Spinner
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
    }else{
      return (
        <div className="col-12 text-center pt-5">
          <Spinner style={{ width: "3rem", height: "3rem" ,color : "#a62626"}}  />
        </div>
      );
    }

  }
    return (
      <section className="post-Container">
        <div className="browse-post-list d-flex justify-content-center">
          <Row>{RenderAdvertisingList()}</Row>
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