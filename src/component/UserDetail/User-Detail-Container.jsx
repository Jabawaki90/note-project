import React from "react";
import "./User-Detail-Container.css";

const UserDetailContainer = () => {
  return (
    <div className="user-detail-container">
      <div className="user-status-container">
        <span>logo</span>
        <p>Ashraf</p>
        <span>logo</span>
      </div>
      <div className="category-container">
        <div className="head-container">
          <h4>CATEGORIES</h4>
          <p>+</p>
        </div>
        <div>category type</div>
        <div>category type</div>
        <div>category type</div>
        <div>category type</div>
        <div>category type</div>
        <div>category type</div>
        <div>category type</div>
        <div>category type</div>
      </div>
      <div className="reset-container">
        <span>logo</span>
        <p style={{ marginLeft: "10px" }}>Reset</p>
      </div>
    </div>
  );
};

export default UserDetailContainer;
