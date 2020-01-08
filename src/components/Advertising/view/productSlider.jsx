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
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <div className="slider-image-large">
              <img
                className="img-fluid"
                src="https://s101.divarcdn.com/static/pictures/1578442886/gXUs-CVn.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="slider-image-large">
              <img
                className="img-fluid"
                src="https://s101.divarcdn.com/static/pictures/1578442886/gXUs-CVn.1.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="slider-image-large">
              <img
                className="img-fluid"
                src="https://s101.divarcdn.com/static/pictures/1578442886/gXUs-CVn.2.jpg"
                alt=""
              />
            </div>
          </div>
        </Slider>
        
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <div className="slider-image-small">
              <img
                className="img-fluid"
                src="https://s101.divarcdn.com/static/pictures/1578442886/gXUs-CVn.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="slider-image-small">
              <img
                className="img-fluid"
                src="https://s101.divarcdn.com/static/pictures/1578442886/gXUs-CVn.1.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="slider-image-small">
              <img
                className="img-fluid"
                src="https://s101.divarcdn.com/static/pictures/1578442886/gXUs-CVn.2.jpg"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
