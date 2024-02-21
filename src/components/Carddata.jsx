import React, { useState } from "react";
import Cards from "./Cards";

function Carddata({ cart, setCart, carddata }) {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {carddata.map((item, index) => {
        return (
          <>
            <Cards setCart={setCart} item={item} cart={cart} />
          </>
        );
      })}
            </div>
        </div>
      </section>
    </>
  );
}

export default Carddata;
