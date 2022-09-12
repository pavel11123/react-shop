import React from "react";
import "./ModalCart.scss";

const ModalCart = ({ activeCart, setActiveCart }) => {
  return (
    <div
      className={activeCart ? "shoping__cart active" : "shoping__cart"}
      onClick={() => setActiveCart(false)}
    >
      <div
        className="shoping__cart-modal d-fl-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="basket-top d-fl">
          <h5>Корзина</h5>
          <div className="button-delete" onClick={() => setActiveCart(false)}>
            <svg>
              <use xlinkHref="/sprite.svg#close-delete"></use>
            </svg>
          </div>
        </div>
        <div className="basket__content d-fl-col">
          <div className="basket__cart d-fl">
            <div className="basket__cart-img">
              <img src="/img/photo/product-1.png" alt="Product-1" />
            </div>
            <div className="basket__cart-info d-fl-col">
              <h5 className="title__product">
                AOS Ср-во для мытья посуды Апельсин+мята
              </h5>
              <span>12 999 руб.</span>
            </div>
            <div className="button-delete">
              <svg>
                <use xlinkHref="/sprite.svg#close-delete"></use>
              </svg>
            </div>
          </div>
          <div className="basket__cart d-fl">
            <div className="basket__cart-img">
              <img src="/img/photo/product-1.png" alt="Product-1" />
            </div>
            <div className="basket__cart-info d-fl-col">
              <h5 className="title__product">
                AOS Ср-во для мытья посуды Апельсин+мята
              </h5>
              <span>12 999 руб.</span>
            </div>
            <div className="button-delete">
              <svg>
                <use xlinkHref="/sprite.svg#close-delete"></use>
              </svg>
            </div>
          </div>
          <div className="basket__cart d-fl">
            <div className="basket__cart-img">
              <img src="/img/photo/product-1.png" alt="Product-1" />
            </div>
            <div className="basket__cart-info d-fl-col">
              <h5 className="title__product">
                AOS Ср-во для мытья посуды Апельсин+мята
              </h5>
              <span>12 999 руб.</span>
            </div>
            <div className="button-delete">
              <svg>
                <use xlinkHref="/sprite.svg#close-delete"></use>
              </svg>
            </div>
          </div>
          <div className="basket__cart d-fl">
            <div className="basket__cart-img">
              <img src="/img/photo/product-1.png" alt="Product-1" />
            </div>
            <div className="basket__cart-info d-fl-col">
              <h5 className="title__product">
                AOS Ср-во для мытья посуды Апельсин+мята
              </h5>
              <span>12 999 руб.</span>
            </div>
            <div className="button-delete">
              <svg>
                <use xlinkHref="/sprite.svg#close-delete"></use>
              </svg>
            </div>
          </div>
          <div className="basket__cart d-fl">
            <div className="basket__cart-img">
              <img src="/img/photo/product-1.png" alt="Product-1" />
            </div>
            <div className="basket__cart-info d-fl-col">
              <h5 className="title__product">
                AOS Ср-во для мытья посуды Апельсин+мята
              </h5>
              <span>12 999 руб.</span>
            </div>
            <div className="button-delete">
              <svg>
                <use xlinkHref="/sprite.svg#close-delete"></use>
              </svg>
            </div>
          </div>
          <div className="basket__cart d-fl">
            <div className="basket__cart-img">
              <img src="/img/photo/product-1.png" alt="Product-1" />
            </div>
            <div className="basket__cart-info d-fl-col">
              <h5 className="title__product">
                AOS Ср-во для мытья посуды Апельсин+мята
              </h5>
              <span>12 999 руб.</span>
            </div>
            <div className="button-delete">
              <svg>
                <use xlinkHref="/sprite.svg#close-delete"></use>
              </svg>
            </div>
          </div>
        </div>

        <div className="basket__info d-fl-col">
          <div className="basket__info-wrapper d-fl">
            <span>Итого</span>
            <span></span>
            <span>21 498 руб.</span>
          </div>

          <div className="basket__info-wrapper d-fl">
            <span>Налог 5%: </span>
            <span></span>
            <span>1074 руб.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ModalCart };
