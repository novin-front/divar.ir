import React, { Component } from "react";
import Slider from "react-slick";

export default class ProductSilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const RenderLargImage = ()=>{
      let { img } = this.props;
      if(img !== undefined){
        console.log("img %%%%%%",img.length)
        if(img.length === 0){
          return (
            <img
              className="img-fluid"
              src={require("assets/img/divar/image-placeholder.png")}
              alt=""
            />
          )
        }
         return img.map((itme, index) => {
          return (
            <div key={index}>
              <div className="slider-image-large">
                <img
                  className="img-fluid"
                  src={itme}
                  alt=""
                />
              </div>
            </div>
          )
        })
      }
    }
    const RenderSmallImage = () => {
      let { img } = this.props;
      if (img !== undefined) {
        return img.map((itme, index) => {
          return (
            <div key={index}>
              <div className="slider-image-small">
                <img
                  className="img-fluid"
                  src={itme}
                  alt=""
                />
              </div>
            </div>
          )
        })
      }


    }
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          {RenderLargImage()}
        </Slider>

        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {RenderSmallImage()}
        </Slider>
      </div>
    );
  }
}
