export const TOGGLE_LIKED = "TOGGLE_LIKED";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";

export const toggleLiked = (productId) => ({
	type: TOGGLE_LIKED,
	payload: productId,
});

export const addToBasket = (productId) => ({
	type: ADD_TO_BASKET,
	payload: productId,
});

export const removeFromBasket = (productId) => ({
	type: REMOVE_FROM_BASKET,
	payload: productId,
});