import { toggleLiked, setProducts, setLikedProducts, setBasketProducts, addToBasket, removeFromBasket } from "./actions";

export const fetchData = () => async (dispatch) => {
    try {
        const [productsResponse, likedResponse, basketResponse] =
            await Promise.all([
                fetch("http://localhost:3001/products"),
                fetch("http://localhost:3001/likes/default"),
                fetch("http://localhost:3001/basket/default"),
            ]);

        const productsData = await productsResponse.json();
        const likedData = await likedResponse.json();
        const basketData = await basketResponse.json();

        dispatch(setProducts(productsData));
        dispatch(setLikedProducts(likedData.productIds));
        dispatch(setBasketProducts(basketData.productIds));
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const updateLikedProducts = (productId) => async (dispatch, getState) => {
    // First update the UI through Redux
    dispatch(toggleLiked(productId));
    const likedProducts = getState().likedProducts;

    try {
        await fetch("http://localhost:3001/likes/default", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                productIds: likedProducts,
            }),
        });
    } catch (error) {
        console.error("Error updating liked products:", error);
    }
};

export const updateBasketProducts = (productId, action) => async (dispatch, getState) => {
    switch (action) {
        case "UPDATE_BASKET_ADD": {
            dispatch(addToBasket(productId));
            break;
        }
        case "UPDATE_BASKET_REMOVE": {
            dispatch(removeFromBasket(productId));
            break;
        }
        default: {
            console.log("updateBasketProducts: Incorrect action specified");
            break;
        }
    }

    const basketProds = getState().productsInBasket;
    try {
        await fetch("http://localhost:3001/basket/default", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                productIds: basketProds,
            }),
        });
    } catch (error) {
        console.error("Error updating basket products:", error);
    }
};
