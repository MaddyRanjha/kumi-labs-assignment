import React from 'react'
import './category.css'
import {useSelector} from 'react-redux'

function Category() {
  
  const categoryArray = useSelector(state => state.categoryArray);

  const handleClickScroll = (data) => {
    console.log(data);
    const element = document.getElementById(data);

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // function activeClass(){
  //   classList.add("active")
  // }
  // console.log(categoryArray)
  return (
    <div className='categoryContainer'>
        <div className="wrapper">
        <ul className='categoryList'>
      {categoryArray.map(data => (
        <li key={data} onClick={()=>handleClickScroll(data)} className='listItem'><span>{data}</span></li>
      ))}
    </ul>
    </div>
    </div>
  )
}

export default Category