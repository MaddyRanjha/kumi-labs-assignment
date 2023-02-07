import React from 'react'
import './category.css'
import {useSelector} from 'react-redux'

function Category() {
  
  
  const categoryArray = useSelector(state => state.categoryArray);

  const handleClickScroll = (data,i) => {
    // console.log(i);
    const element = document.getElementById(data);
    console.log(element)
    
    const lis = document.getElementsByTagName('li')
    console.log(lis)
    for(let i=0; i<lis.length; i++){
      lis[i].classList.remove("activated")
    }
    console.log(element)
    element.classList.add("activated")
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      window.scrollTo({top:i*(280),behavior: 'smooth'});
      
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
      {categoryArray.map((data,i) => (
        <li key={i} onClick={()=>handleClickScroll(data,i)} className={`${data} listItem`} id={data}><span className='item'>{data}</span></li>
      ))}
    </ul>
    </div>
    </div>
  )
}

export default Category