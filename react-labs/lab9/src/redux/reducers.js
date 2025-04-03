import { TOGGLE_LIKED, SET_PRODUCTS, SET_LIKED_PRODUCTS, SET_BASKET_PRODUCTS, ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./actions";

const initialState = {
  products: {},
  likedProducts: [],
  productsInBasket: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKED:
      return {
        ...state,
        likedProducts: state.likedProducts.includes(action.payload)
          ? state.likedProducts.filter((id) => id !== action.payload)
          : [...state.likedProducts, action.payload],
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_LIKED_PRODUCTS:
      return {
        ...state,
        likedProducts: action.payload,
      };
    case SET_BASKET_PRODUCTS:
      return {
        ...state,
        productsInBasket: action.payload,
      };
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
          productsInBasket: productsInBasket,
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
