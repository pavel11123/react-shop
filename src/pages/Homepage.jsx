import { Card } from "../components/Card/Card";
import "./Homepage.scss";

const cardProduct = [
  {
    cardImg: "/img/photo/product-1.png",
    cardTitle: "AOS Ср-во для мытья посуды Апельсин+мята",
    cardPrice: 1299,
  },
  {
    cardImg: "/img/photo/product-1.png",
    cardTitle: "AOS Ср-во для мытья посуды Апельсин+мята",
    cardPrice: 1399,
  },
  {
    cardImg: "/img/photo/product-1.png",
    cardTitle: "AOS Ср-во для мытья посуды Апельсин+мята",
    cardPrice: 1999,
  },
  {
    cardImg: "/img/photo/product-1.png",
    cardTitle: "AOS Ср-во для мытья посуды Апельсин+мята",
    cardPrice: 1999,
  },
  {
    cardImg: "/img/photo/product-1.png",
    cardTitle: "AOS Ср-во для мытья посуды Апельсин+мята",
    cardPrice: 1699,
  },
  {
    cardImg: "/img/photo/product-1.png",
    cardTitle: "AOS Ср-во для мытья посуды Апельсин+мята",
    cardPrice: 1299,
  },
  {
    cardImg: "/img/photo/product-1.png",
    cardTitle: "AOS Ср-во для мытья посуды Апельсин+мята",
    cardPrice: 1399,
  },
  {
    cardImg: "/img/photo/product-1.png",
    cardTitle: "AOS Ср-во для мытья посуды Апельсин+мята",
    cardPrice: 4999,
  },
  {
    cardImg: "/img/photo/product-1.png",
    cardTitle: "AOS Ср-во для мытья посуды Апельсин+мята",
    cardPrice: 159,
  },
  {
    cardImg: "/img/photo/product-1.png",
    cardTitle: "AOS Ср-во для мытья посуды Апельсин+мята",
    cardPrice: 1699,
  },
];

const Homepage = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <section className="start__section">
            <div className="start__banner">
              <div className="start__banner-img">
                <img
                  src="/img/background/banner-start.png"
                  alt="Магазин бытовой химии"
                />
              </div>
            </div>
          </section>

          <section className="sale__section section-mr--top">
            <h2 className="title__section">
              <span>Акционные</span> товары
            </h2>
            <div className="sale__product-grid">
              {cardProduct.map((props) => (
                <Card
                  cardImg={props.cardImg}
                  cardTitle={props.cardTitle}
                  cardPrice={props.cardPrice}
                  onPlus={props.cardPrice}
                  onFavorite={props.cardTitle}
                ></Card>
              ))}
            </div>
          </section>

          <section className="category__section section-mr--top">
            <h2 className="title__section">
              <span>категории</span> товаров
            </h2>
            <div className="category__grid">
              <div className="category__cart">
                <div className="category__cart-wrapper--img">
                  <div className="category__cart-img">
                    <img
                      src="/img/photo/category/category-1.png"
                      alt="category-1"
                    />
                  </div>
                </div>
                <h5>Бытовая химия</h5>
              </div>
              <div className="category__cart">
                <div className="category__cart-wrapper--img">
                  <div className="category__cart-img">
                    <img
                      src="/img/photo/category/category-2.png"
                      alt="category-1"
                    />
                  </div>
                </div>
                <h5>Косметика и гигиена</h5>
              </div>
              <div className="category__cart">
                <div className="category__cart-wrapper--img">
                  <div className="category__cart-img">
                    <img
                      src="/img/photo/category/category-3.png"
                      alt="category-1"
                    />
                  </div>
                </div>
                <h5>Товары для дома</h5>
              </div>
              <div className="category__cart">
                <div className="category__cart-wrapper--img">
                  <div className="category__cart-img">
                    <img
                      src="/img/photo/category/category-4.png"
                      alt="category-1"
                    />
                  </div>
                </div>
                <h5>Товары для детей и мам</h5>
              </div>
              <div className="category__cart">
                <div className="category__cart-wrapper--img">
                  <div className="category__cart-img">
                    <img
                      src="/img/photo/category/category-5.png"
                      alt="category-1"
                    />
                  </div>
                </div>
                <h5>Посуда</h5>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export { Homepage };
