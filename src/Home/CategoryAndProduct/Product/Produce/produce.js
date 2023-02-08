import React, { useState } from 'react';
import './produce.css';
import { useSelector, useDispatch } from 'react-redux';
import { click } from '@testing-library/user-event/dist/click';

function Produce() {
  // const [check, setCheck]= useState(true);
  const categoryArray = useSelector((state) => state.categoryArray);
  const dispatch = useDispatch();
  

    let item = useSelector((state) => state.item);
const [productCart,setProductCart]=useState([]);
function checkCart(prod){
  if(productCart.includes(prod))
  return true;

  return false;
}

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
                    {!checkCart(ele.name)?<div>
                {console.log(ele?.addToCart,"ndjndj")}

                      <span
                      className="addButton"
                      onClick={() => {setProductCart([...productCart,ele.name]); dispatch({ type: 'ADD'})}}
                    >
                      <span className="plusButton">+</span>
                    </span></div>:
                    <span
                      className="addButton"
                      onClick={() =>{let prodd=productCart?.filter(function(item){return item!=ele.name}); setProductCart(prodd); dispatch({ type: 'REMOVE'})}}
                    >
                      <span className="plusButton">-</span>
                    </span>}
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
