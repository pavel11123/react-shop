import "./Header.scss";
import { ModalCart } from "../Modal/ModalCart";
import { useState } from "react";

const Header = () => {
  const [modalCartActive, setModalCartActive] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-main d-fl">
            <div className="header-left d-fl">
              <div className="header__logo d-fl">
                <div className="header__logo-text d-fl-col">
                  <h3>химчист</h3>
                  <span>Магазин бытовой химии</span>
                </div>
              </div>
              <button className="catalog__btn header-btn">В каталог</button>
            </div>
            <div className="header-right d-fl">
              <nav className="d-fl">
                <ul className="d-fl">
                  <li>
                    <a href="/">Контакты</a>
                  </li>
                  <li>
                    <a href="/">О компании</a>
                  </li>
                  <li>
                    <a href="/">
                      Доставка <span>и оплата</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">Возврат</a>
                  </li>
                </ul>
              </nav>
              <div
                className="basket-wrapper d-fl"
                onClick={() => setModalCartActive(true)}
              >
                <div className="basket">
                  <svg>
                    <use xlinkHref="/sprite.svg#basket"></use>
                  </svg>
                </div>
                <div className="basket-info d-fl-col">
                  <span>Корзина</span>
                  <span>12 478р</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ModalCart
          activeCart={modalCartActive}
          setActiveCart={setModalCartActive}
        ></ModalCart>
      </header>
    </>
  );
};

export { Header };
