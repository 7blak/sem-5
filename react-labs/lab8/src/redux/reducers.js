import { TOGGLE_LIKED, ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./actions";
import productsData from "../data";

const initialState = {
	products: productsData,
	likedProducts: [],
	productsInBasket: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_LIKED:
			{
				const productId = action.payload;
				const isLiked = state.likedProducts.includes(productId);
				const likedProducts = isLiked
					? state.likedProducts.filter((id) => id !== productId) // remember - filter creates a new array
					: [...state.likedProducts, productId];
				return {
					...state,
					likedProducts,
				};
			}
		case ADD_TO_BASKET:
			{
				const productId = action.payload;
				const isInBasket = state.productsInBasket.find(
					(product) => product.id === productId
				) ? true : false;
				const productsInBasket = isInBasket
					? state.productsInBasket.map((product) =>
						product.id === productId
							? { ...product, count: product.count + 1 }
							: product
					)
					: [...state.productsInBasket, { id: productId, count: 1 }];
				return {
					...state,
					productsInBasket,
				};
			}
		case REMOVE_FROM_BASKET:
			{
				const productId = action.payload;
				const count = state.productsInBasket.find((basketProduct) => basketProduct.id === productId)?.count;
				const tempProductsInBasket = count > 1
					? state.productsInBasket.map((product) =>
						product.id === productId
							? { ...product, count: product.count - 1 }
							: product
					)
					: state.productsInBasket.filter((p) => p.id !== productId);
				return {
					...state,
					productsInBasket: tempProductsInBasket,
				};
			}
		default:
			return state;
	}
};

export default rootReducer;
