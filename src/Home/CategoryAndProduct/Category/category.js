import React from 'react'
import './category.css'
import {useSelector} from 'react-redux'
let i=0;
let y=200;

function Category() {
  window.addEventListener('scroll', ()=>{
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    // console.log(scrollable,"scrollable")
    

    const scrolled = window.scrollY;
    
    
    console.log(scrolled);
    console.log(window.scrollY)
    //0-200
    //200-480 280
    var elements = document.getElementsByClassName("listItem");
console.log(elements)
// elements[0].classList.add("activated");
let x = scrolled;
if(x<200){
elements[0].classList.add("activated");
}else if(x>y){
  i++;
  for(let a=0; a<elements.length; a++){
    elements[a].classList.remove("activated")
  }
  // elements.forEach((element)=>{
    
  // })
  elements[i].classList.add("activated");
  y+=280;
}
    // if(0<=scrolled <= 200)
    // {
    //   var elements = document.getElementsByClassName("listItem")[0];
    //   console.log(elements)
    //   var elem = document.querySelectorAll("li");
    //   console.log(elem);
    //   for(let i=0; i<elem.length; i++){
    //     elem[i].classList.remove("activated")
    //   }
    //   elements[0].classList.add("activated");
    //   // alert('you have reached Prepared Foods');
    // }
    // else if(200<scrolled <=480)
    // {
    //   var elements = document.getElementsByClassName("listItem")[1];
    //   console.log(elements)
    //   var elem = document.querySelectorAll("li");
    //   console.log(elem);
    //   for(let i=0; i<elem.length; i++){
    //     elem[i].classList.remove("activated")
    //   }
    //   elem[1].classList.add("activated");
    //   // alert('you have reached Prepared Foods');
    // }
    
  })
  
  
  
  const categoryArray = useSelector(state => state.categoryArray);

  const handleClickScroll = (data,i) => {
    // console.log(i);
    const element = document.getElementById(data);
    console.log(element)
    
    const lis = document.getElementsByTagName('li')
    console.log("list",lis)
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