import React from "react";
import img1 from "../../../../assets/carousel1.png";
import img2 from "../../../../assets/carousel2.png";
import img3 from "../../../../assets/carousel3.png";

function Carousel() {
  return (
    <div>
      {/* Carousel Wrapper */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {/* Carousel Item 1 */}
          <div className="carousel-item active">
            <img
              src={img1}
              alt="Los Angeles"
              className="d-block"
              style={{ width: "100%" }}
            />
          </div>

          {/* Carousel Item 2 */}
          <div className="carousel-item">
            <img
              src={img2}
              alt="Los Angeles"
              className="d-block"
              style={{ width: "100%" }}
            />
          </div>

          {/* Carousel Item 3 */}
          <div className="carousel-item">
            <img
              src={img3}
              alt="Los Angeles"
              className="d-block"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Carousel Control Buttons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
