import React, { useState } from 'react';
import './produce.css';
import { useSelector, useDispatch } from 'react-redux';
import { click } from '@testing-library/user-event/dist/click';

function Produce() {
  // const [check, setCheck]= useState(true);
  const categoryArray = useSelector((state) => state.categoryArray);
  const dispatch = useDispatch();
  const item = useSelector((state) => state.item);
  console.log(item[0].productImg);
  // function cliked() {
  //   setCheck(!true)
  // }

  return (
    <div className="rightSideContainer">
      <ul>
        {categoryArray.map((data) => (
          <li key={data} className="productWithCategory" id={data}>
            <div className="categoryName">
              <span className="catName">{data}</span>
            </div>
            <div className="products">
              {item.map((ele) => (
                <li key={ele} className="product">
                  <div className="productImg">
                    <img src={ele.productImg} className="productImage" />

                    <span
                      className="addButton"
                      onClick={() => dispatch({ type: 'ADD'})}
                    >
                      <span className="plusButton">+</span>
                    </span>
                    <span
                      className="subButton"
                      onClick={() => dispatch({ type: 'REMOVE'})}
                    >
                      <span className="minButton">-</span>
                    </span>
                  </div>
                  <div className="productPrice">${ele.price}</div>
                  <div className="productName">{ele.name}</div>
                  <div className="productWeight">{ele.weight}</div>
                </li>
              ))}
            </div>
            <hr className='line'/>
          </li>
        ))}
      </ul>
      

    </div>
  );
}

export default Produce;
