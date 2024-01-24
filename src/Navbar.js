import React from 'react'

function Navbar({cartItems}) {
  const cartCount = cartItems ? cartItems.length : 0;
  const totalCost = cartItems.reduce((total, item) => total + parseFloat(item.rate.replace('$', '')), 0).toFixed(2);
  
  return (
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary " >
  <div class="container-fluid " style={{marginLeft: "100px"}}>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand fs-4" href="#">Start Food</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>


        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          
          <ul class="dropdown-menu " style={{textAlign:"center"}}>
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    
        <button class="btn btn-outline-dark  " style={{fontSize:"20px", marginRight:"100px"}} type="submit">
        {/* <i class="bi bi-cart-fill"></i> Cart {cartLength}{' '} */}
        {/* <i className="bi bi-cart-fill"></i> Cart {cartCount} {cartCount !== 1 ? 'items' : 'item'} - ${totalCost}{' '} */}
        <i className="bi bi-cart-fill"> Cart <span style={{fontSize:"14px",textAlign:"center"}}  class="badge bg-dark badge rounded-pill">{cartCount} </span></i>  
        </button>
     
    </div>
  </div>
</nav>

  )
}

export default Navbar