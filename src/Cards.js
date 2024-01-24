import React, { useState } from 'react';
import "./Card.css"
let star = [<i style={{color:'yellow'}} class="bi bi-star-fill  "></i>]
function Cards({data,addToCart,removeFromCart}) {
let [inCart,setInCart] = useState(false)

 const handleToggle = () => {
  if(inCart){
    removeFromCart(data)
  }else{
    addToCart(data)
  }
  setInCart(!inCart);
 }

 let stars = Array.from({ length: 5 }, (_, index) => (
  <i key={index} className="bi bi-star-fill" style={{ color: '#FFBB64',fontSize:"20px" }}></i>
));
  return ( 
    <div className='col'>
    <div class="card" style={{width: "18rem",height:'24rem',marginTop:'50px'}}> 
   
  <img style={{height:'14rem'}} src={data.img} class="card-img-top" alt="..."></img>
  {/* <span  style={{width:'50px',marginTop:"20px",marginLeft:'250px',backgroundColor:'black'}} className="badge bg-dark position-absolute top-0    translate-middle">Sale</span>  */}
  {data.sale===true ? <span  style={{width:'50px',marginTop:"20px",marginLeft:'250px',backgroundColor:'black'}} className="badge bg-dark position-absolute top-0    translate-middle">Sale</span> :null}
  
  <div class="card-body">
    <h4 className='fw-bolder'>{data.name}</h4>
    <h4 > {data.stars === true ? stars :null } </h4>
   
    <p className="card-text">{data.sale === true ? <span><span  style={{color:'grey',textDecoration:"line-through"}}>  {data.linecross} </span>-{data.rate}</span>:(data.rate) }</p> 
   
    

    {data.stars === true ? (<button  onClick={handleToggle} className="btn btn-outline-dark custom  "
    style={inCart ? {backgroundColor:"#EF4040"}:{}}>
            {inCart ? " Remove from Cart" : 'Add to Cart'}
            
          </button> ):(<button onClick={handleToggle} className="btn btn-outline-dark mt-3"
    style={inCart ? {backgroundColor:"#EF4040"}:{}}>
            {inCart ? " Remove from Cart" : 'Add to Cart'}
            
          </button> )} 
     
    
  </div>
</div>
</div>
  )
}

export default Cards
