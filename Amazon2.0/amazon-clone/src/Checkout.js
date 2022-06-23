import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://th.bing.com/th/id/R.762f550bdfba8e888127a25d0bf8c891?rik=yzj8x5jeOVREvQ&riu=http%3a%2f%2fwww.custompcreview.com%2fwp-content%2fuploads%2f2016%2f07%2famazon-prime-day-banner.jpg&ehk=UPiqAYAPlbYdmtZlq2%2bjx27tsqL1wcWdWNsL8XlZ114%3d&risl=&pid=ImgRaw&r=0"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
