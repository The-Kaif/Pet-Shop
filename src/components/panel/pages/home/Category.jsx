import React from "react";
import img1 from "../../../../assets/cate1.png";
import img2 from "../../../../assets/cate2.png";
import img3 from "../../../../assets/cate3.png";
import img4 from "../../../../assets/cate4.png";
import img5 from "../../../../assets/cate5.png";

function Category() {
  return (
    <div className="category">
      {/* Category Row */}
      <div className="category-row">
        {/* Category Column 1 */}
        <div className="category-column">
          <h3>Shop</h3>
          <h4 style={{ color: "darkGray" }}>by pet</h4>
        </div>

        {/* Category Column 2 */}
        <div className="category-column">
          <img src={img1} className="img-cate" alt="" />
        </div>

        {/* Category Column 3 */}
        <div className="category-column">
          <img src={img2} className="img-cate" alt="" />
        </div>

        {/* Category Column 4 */}
        <div className="category-column">
          <img src={img3} className="img-cate" alt="" />
        </div>

        {/* Category Column 5 */}
        <div className="category-column">
          <img src={img4} className="img-cate" alt="" />
        </div>

        {/* Category Column 6 */}
        <div className="category-column">
          <img src={img5} className="img-cate" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Category;
