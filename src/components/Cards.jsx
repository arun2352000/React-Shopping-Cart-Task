import React, { useState } from 'react';

const Cards = ({setCart,item,cart}) => {
    let [toggle, setToggle] = useState(true);
    const addtocart = () => {
      setCart((cart = cart + 1));
      setToggle(false);
    };
    const removefromcart = () => {
      setCart((cart = cart - 1));
      setToggle(true);
    };
    return (
        <div>
            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{item.head}</h5>
                    <span className="text-muted text-decoration-line-through">
                      {item.price}
                    </span>
                    {item.priceok}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {toggle ? (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={addtocart}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={removefromcart}
                      >
                        Remove from Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
         
        </div>
    );
};

export default Cards;