import { useSelector, useDispatch } from "react-redux";
import { updateLikedProducts, updateBasketProducts } from "./redux/thunks";

const BasketItem = ({ product }) => {
  const likedProducts = useSelector((state) => state.likedProducts);
  const productsInBasket = useSelector((state) => state.productsInBasket);
  const dispatch = useDispatch();
  const isLiked = likedProducts.includes(product.id);
  const count = productsInBasket.find((basketProduct) => basketProduct.id === product.id)?.count;

  const handleToggleLike = async (productId) => {
    dispatch(updateLikedProducts(productId));
  };

  const handleAddToBasket = async (productId) => {
    dispatch(updateBasketProducts(productId, "UPDATE_BASKET_ADD"));
  };

  const handleRemoveFromBasket = async (productId) => {
    dispatch(updateBasketProducts(productId, "UPDATE_BASKET_REMOVE"));
  };


  return (
    <li>
      <span style={{ marginRight: 5 }}>{product.title}</span>
      <span
        onClick={() => handleToggleLike(product.id)}
        style={{ cursor: "pointer", marginRight: 5 }}
      >
        <i
          className={`fa-heart ${isLiked ? "fas" : "far"}`}
          style={{ color: isLiked ? "green" : "grey" }}
        ></i>
      </span>

      <span
        style={{ cursor: "pointer", color: "blue", marginRight: 5 }}
        onClick={() => handleAddToBasket(product.id)}
      >
        <i className={`fas fa-plus`} style={{ color: "green" }}></i>
      </span>
      {count &&
        (
          <span
            style={{ cursor: "pointer", marginRight: 5 }}
            onClick={() => handleRemoveFromBasket(product.id)}
          >
            <i className={`fas fa-minus`} style={{ color: "red" }}></i>
          </span>
        )}
      {count}
    </li>
  );
};

export default BasketItem;
