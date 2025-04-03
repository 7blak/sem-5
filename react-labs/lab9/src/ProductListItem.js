import { useSelector, useDispatch } from "react-redux";
import { updateLikedProducts, updateBasketProducts } from "./redux/thunks";

const ProductListItem = ({ product }) => {
  const likedProducts = useSelector((state) => state.likedProducts);
  const dispatch = useDispatch();
  const isLiked = likedProducts.includes(product.id);

  const handleToggleLike = async (productId) => {
      dispatch(updateLikedProducts(productId));
    };
  
    const handleAddToBasket = async (productId) => {
      dispatch(updateBasketProducts(productId, "UPDATE_BASKET_ADD"));
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
        style={{ color: "blue" }}
        onClick={() => handleAddToBasket(product.id)}
      >
        <i className={`fas fa-cart-plus`} style={{ color: "blue" }}></i>
      </span>
    </li>
  );
};

export default ProductListItem;
