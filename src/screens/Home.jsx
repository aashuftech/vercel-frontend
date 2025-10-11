import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card"; 
// import images from '../assets/images'; 
// import images from "../Utils/images"; 
import { useEffect, useReducer } from "react";

// console.log(images)

export default function Home() {

  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async ()=>{
    let response = await fetch("http://localhost:5000/api/foodData",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    
    setFoodItem(response[0]);
    setFoodCat(response[1]);
//    console.log(response[0],response[1])
  }

  useEffect(()=>{
    loadData()
  },[])



  return (
    <div>
      <div><Navbar /></div>
      {/* <div><Carousel/></div>*/}
       {/* <CarouselComponent /> */}
      <div>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" 
          style={{objectFit:"contain !important"}}>
    <div className="carousel-inner" id='carousel'>
      {/* Search Bar On Carousel... */}
      <div className="carousel-caption" style={{zIndex:"10"}}>
       <div className="text-white fs-3"> Find Your Favourite Food 🍕</div>
         <div className="d-flex  justify-content-center">
      <input className="form-control me-2 border-success form-control w-50" type="search" placeholder="Search" aria-label="Search"
      value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      {/* <button className="btn btn-outline-success text-white" type="submit">Search</button> */}
    </div>
      </div>
      <div className="carousel-item active">
        <img src="https://img.freepik.com/premium-photo/carousel-burger-serve_1243330-641.jpg"
        className="d-block w-100 h-100 object-fit my-carousel" style={{ filter: "brightness(50%)"}} alt="burger"/>
      </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&h=700&fit=crop"
       className="d-block w-100 h-100 object-fit" style={{ filter: "brightness(50%)"}} alt="salad"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=900&h=700&fit=crop"
       className="d-block w-100 h-100 object-fit" style={{ filter: "brightness(50%)"}} alt="sushi"/>
    </div>
  </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <i className="bi bi-arrow-left-circle fs-1 text-white"></i>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <i className="bi bi-arrow-right-circle fs-1 text-white"></i>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>


      <div className="container">
{/*----------------------------Filter Category By Name-------------------  */}
      
      {foodItem !==[]
      ? foodCat.map((data) => {
        return ( <div key={data._id} className="row mb-3">
          <div className="fs-3 m-3">
            {data.CategoryName}
            </div>
            <hr/>
{/*-----------------------------Filter Items By Name --------------------  */}

        {foodItem !==[] ? foodItem.filter((item)=> item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
          .map(filterItems=>{
            return (
              <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
{/*----------------------------------------------------------sending data in props to card  */}
                
                {/* <Card foodName = {filterItems.name}
                options = {filterItems.options[0]}
                 imgSrc={filterItems.img}
                ></Card> */}
                <Card foodItem = {filterItems}
                options = {filterItems.options[0]}
                 
                ></Card>
              </div>
            )
          }) 
          : <div> No such data found.</div>}

        </div>
        
        )
      })
    : <div>No Categories</div>
}

        </div>
      <div><Footer /></div>
        
      
    </div>
  );
};

// export default Home;
