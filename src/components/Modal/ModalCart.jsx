import React from "react";
import "./ModalCart.scss";

const ModalCart = ({ activeCart, setActiveCart, children }) => {
  return (
    <div
      className={activeCart ? "shoping__cart active" : "shoping__cart"}
      onClick={() => setActiveCart(false)}
    >
      <div className="shoping__cart-modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export { ModalCart };
