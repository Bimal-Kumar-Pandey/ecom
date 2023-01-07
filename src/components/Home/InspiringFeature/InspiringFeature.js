import React from "react";
import "../Home.css";
import infeateure from "./infeature";
const InspiringFeature = () => {
  return (
    <>
      {infeateure.map((element, index) => {
        return (
          <>
         
            <div className="inspiringFeatureContent">
              <div className="heart_icon">
                <i class="lar la-heart"></i>
              </div>

              <div className="inspiring_feature_heading">
                <h2>{element.title}</h2>
              </div>
              <div className="descryption">
                <p> {element.descryption}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default InspiringFeature;
