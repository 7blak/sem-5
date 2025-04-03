import { useSelector, useDispatch } from "react-redux";
import { toggleLiked, addToBasket, removeFromBasket } from "./redux/actions";

const BasketItem = ({ product }) => {
    const likedProducts = useSelector((state) => state.likedProducts);
    const productsInBasket = useSelector((state) => state.productsInBasket);
    const dispatch = useDispatch();
    const isLiked = likedProducts.includes(product.id);
    const count = productsInBasket.find((basketProduct) => basketProduct.id === product.id)?.count;

    const handleAddToBasket = (productId) => {
        dispatch(addToBasket(productId));
    };

    const handleRemoveFromBasket = (productId) => {
        dispatch(removeFromBasket(productId));
    };

    return (
        <li>
            <span style={{ marginRight: 5 }}>{product.title}</span>
            <span
                onClick={() => dispatch(toggleLiked(product.id))}
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
