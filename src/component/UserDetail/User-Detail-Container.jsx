import React, { useState } from "react";
import "./User-Detail-Container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faPlus,
  faTrashCan,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

const UserDetailContainer = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [addCategory, setAddCategory] = useState(false);
  const [singleCategory, setSingleCategory] = useState({});

  const onHandleChange = (e) => {
    setSingleCategory({ id: 1, name: e.target.value });
    console.log("single", singleCategory);
  };

  const openInputModal = () => {
    setAddCategory(true);
  };
  const closeInputModal = () => {
    setAddCategory(false);
  };

  const AddCategory = (e) => {
    e.preventDefault();
    setCategoryList([...categoryList, singleCategory]);
    setAddCategory(false);
  };

  return (
    <div className="user-detail-container">
      <div className="user-status-container">
        <p>Ashraf</p>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
      <div className="category-container">
        <div className="head-container">
          <h4>CATEGORIES</h4>
          {!addCategory ? (
            <FontAwesomeIcon onClick={openInputModal} icon={faPlus} />
          ) : (
            <FontAwesomeIcon onClick={closeInputModal} icon={faMinus} />
          )}
        </div>
        {addCategory && (
          <form onSubmit={(e) => AddCategory(e)} className="add-category-form">
            <input type="text" onChange={(e) => onHandleChange(e)} />
          </form>
        )}
        {categoryList.map((e, index) => {
          return <div key={index}>{e.name}</div>;
        })}
      </div>
      <div className="reset-container">
        <FontAwesomeIcon icon={faTrashCan} />
        <p style={{ marginLeft: "10px" }}>Reset</p>
      </div>
    </div>
  );
};

export default UserDetailContainer;
