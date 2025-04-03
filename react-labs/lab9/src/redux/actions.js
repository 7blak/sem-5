export const TOGGLE_LIKED = "TOGGLE_LIKED";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_LIKED_PRODUCTS = "SET_LIKED_PRODUCTS";
export const SET_BASKET_PRODUCTS = "SET_BASKET_PRODUCTS";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";

export const toggleLiked = (productId) => ({
  type: TOGGLE_LIKED,
  payload: productId,
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setLikedProducts = (likedProducts) => ({
  type: SET_LIKED_PRODUCTS,
  payload: likedProducts,
});

export const setBasketProducts = (basketProducts) => ({
  type: SET_BASKET_PRODUCTS,
  payload: basketProducts,
});

export const addToBasket = (productId) => ({
  type: ADD_TO_BASKET,
  payload: productId,
});

export const removeFromBasket = (productId) => ({
  type: REMOVE_FROM_BASKET,
  payload: productId,
});