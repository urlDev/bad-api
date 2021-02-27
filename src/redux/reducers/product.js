import * as ProductActions from '../actions/product';

const initialState = {
  loading: false,
  products: [],
  available: [],
  errorProducts: null,
  arrayLoadEnd: 0,
  productName: 'gloves',
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActions.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case ProductActions.FETCH_AVAILABLE_SUCCESS:
      return {
        ...state,
        available: action.payload,
      };
    case ProductActions.FETCH_ERROR:
      return {
        ...state,
        errorProducts: action.payload,
      };
    case ProductActions.LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case ProductActions.LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case ProductActions.LOAD_MORE:
      return {
        ...state,
        arrayLoadEnd: state.arrayLoadEnd + 20,
      };
    case ProductActions.CHANGE_PRODUCT:
      return {
        ...state,
        productName: action.payload,
      };
    case ProductActions.CLEAR_PRODUCT_STATE:
      return {
        ...state,
        products: [],
      };
    case ProductActions.CLEAR_LOAD_MORE_STATE:
      return {
        ...state,
        arrayLoadEnd: 0,
      };
    default:
      return state;
  }
};

export default productReducer;
