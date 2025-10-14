import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MyOrder = () => {

  // 🔹 Changed default state from "" to [] (because we are storing arrays of orders, not a string)
  const [orderData, setOrderData] = useState([]);

  // 🔹 Rewritten function properly to handle correct endpoint and data extraction
  const fetchMyOrder = async () => {
    const email = localStorage.getItem('userEmail');
    console.log("Fetching orders for:", email);

    // 🔹 Fixed endpoint name from 'myorderData' → 'myOrderData'
    // const res = await fetch("https://vercel-backend-6e4o.vercel.app/api/myOrderData", {
    const res = await fetch("https://vercel-backend-taum.onrender.com/api/myOrderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    console.log("Response from backend:", data);

    // 🔹 Backend returns { orderData: { email: ..., order_data: [...] } }
    // So we extract only order_data from inside orderData
    if (data && data.orderData && data.orderData.order_data) {
      setOrderData(data.orderData.order_data);
    } else {
      setOrderData([]); // if empty, show "No orders found"
    }
  };

  // 🔹 useEffect calls fetchMyOrder only once on component mount
  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>

          {/* 🔹 Check if we actually have orders */}
          {orderData.length > 0 ? (

            // 🔹 Reverse orders so latest one appears first
            orderData.slice(0).reverse().map((orderArray, i) => (
              <div key={i}>

                {/* 🔹 Each orderArray contains [ {Order_date:...}, {...item1}, {...item2} ] */}
                {orderArray.map((item, j) =>
                  item.Order_date ? (
                    // 🔹 Show date heading for that order
                    <div key={j} className='m-auto mt-5'>
                      <h5>{item.Order_date}</h5>
                      <hr />
                    </div>
                  ) : (
                    // 🔹 Show each food item card under that date
                    <div key={j} className='col-12 col-md-6 col-lg-3'>
                      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                        {/* <img src={item.img} alt={item.name} style={{ height: "120px", objectFit: "fill" }} /> */}
                        <div className="card-body  bg-warning text-black">
                          <h5 className="card-title">{item.name}</h5>
                          <div className='container w-100 p-0' style={{ height: "38px" }}>
                            <span className='m-1'>{item.qty}</span>
                            <span className='m-1'>{item.size}</span>
                            <div className='d-inline ms-2 h-100 w-20 fs-5'>₹{item.price}/-</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ))

          ) : (
            // 🔹 Message if user has no orders
            <p className='text-center mt-5'>No orders found</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyOrder;
