  import React, { useEffect, useRef, useState } from "react";
  import { useDispatchCart, useCart } from './ContextReducer'


  const Card = (props) => {

  let dispatch = useDispatchCart();  
  let data = useCart()
  const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("")
const [addedCount, setAddedCount] = useState(0);
    //------------------------------------------For The Cart----------------------------
  const handleAddToCart = async () => {
  let food = [];
  for (const item of data) {
    if (item.id === props.foodItem._id) {
      food = item;
      break;
    }
  }

  if (food !== []) {
    if (food.size === size) {
      await dispatch({
        type: "UPDATE",
        id: props.foodItem._id,
        price: finalPrice,
        qty: qty,
      });
        setAddedCount(prev => prev + 1);
        return;
      
    }
  } else if (food.size !== size) {
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
     // increment the count when new size added
    setAddedCount(prev => prev + 1);
  }

  // yaha se error tha – ye line loop ke bahar thi aur async block ke andar
  //   await dispatch async function ke andar hi rehna chahiye tha
  await dispatch({
    type: "ADD",
    id: props.foodItem._id,
    name: props.foodItem.name,
    price: finalPrice,
    qty: qty,
    size: size,
  });
 //  increment count for the ADD call
   setAddedCount(prev => prev + 1);
};

  

//--------------------------------------------For The Default Price--------------------------------
  let finalPrice = qty * parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])

//  Helper function to convert count → readable text

    const addedText = () => {
    if (addedCount === 1) return "Added once";
    if (addedCount === 2) return "Added twice";
    if (addedCount >= 3) return `Added ${addedCount} times`;
    return "";
  };

    return (
      // <div>
        <div>
          <div
            className="card mt-3  border-warning"
            style={{
                    width: "18rem",
                    height: "310px",        
                    overflow: "hidden",     
                    borderRadius: "5px",
                    }}>

              <img  src={props.foodItem.img} className="card-img-top"
              alt={props.foodName}
                style={{ height: "160px",objectFit: "fill",}}
  />

            <div className="card-body">
              <h5 className="card-title">{props.foodItem.name}</h5>
              {/* <p className="card-text">Card One pending</p> */}
              <div className=" w-80 text-start">
                <select className="m-2 h-100 bg-warning text-black" onChange={(e)=>setQty(e.target.value)}>
                  {Array.from({ length: 6 }, (_, i) => (<option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>

                <select className="m-2 h-100 text-black bg-warning rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                  {priceOptions.map((data)=>{
                    return <option key={data} value={data}>{data}</option>
                  })}

                </select>

                <div className="d-inline h-100 fs-4 ms-4">
                  ₹{ finalPrice}/-
                  </div>
              </div>
            {/* <hr className="my-0" /> */}
            {/* <button className="btn btn-success justify-center" onClick={handleAddToCart}>Add to Cart</button> */}
          
    <button
    className="btn btn-success text-black w-70 mt-0 ms-1" onClick={handleAddToCart}>ADD TO CART</button>
      {addedCount > 0 && (                           //conditionally show text only when something added
              <span className="ms-2 text-muted small">{addedText()}</span>)}  
            
        </div>
        </div>
      </div>
    );
  }

  export default Card;
