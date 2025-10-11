import React from 'react'

const Carousel = () => {
  return (
    <div>
      <div>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" 
          style={{objectFit:"contain !important"}}>
    <div className="carousel-inner" id='carousel'>
      {/* Search Bar On Carousel... */}
      <div className="carousel-caption" style={{zIndex:"10"}}>
         <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-warning text-white" type="submit">Search</button>
    </form>
      </div>
      <div className="carousel-item active">
        <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=700&fit=crop"
        className="d-block w-100" style={{ filter: "brightness(30%)"}} alt="burger"/>
      </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&h=700&fit=crop"
       className="d-block w-100" style={{ filter: "brightness(30%)"}} alt="salad"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=900&h=700&fit=crop"
       className="d-block w-100" style={{ filter: "brightness(30%)"}} alt="sushi"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </div>
  )
}

export default Carousel





