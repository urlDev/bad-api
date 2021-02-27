import axios from 'axios';

export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_AVAILABLE_SUCCESS = 'FETCH_AVAILABLE_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';
export const LOAD_MORE = 'LOAD_MORE';
export const CHANGE_PRODUCT = 'CHANGE_PRODUCT';
export const CLEAR_PRODUCT_STATE = 'CLEAR_PRODUCT_STATE';
export const CLEAR_LOAD_MORE_STATE = 'CLEAR_LOAD_MORE_STATE';

export const fetchProductSuccess = (product) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: product,
});

export const fetchAvailableSuccess = (available) => ({
  type: FETCH_AVAILABLE_SUCCESS,
  payload: available,
});

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});

export const loadingStart = () => ({
  type: LOADING_START,
});

export const loadingEnd = () => ({
  type: LOADING_END,
});

export const loadMore = () => ({
  type: LOAD_MORE,
});

export const changeProduct = (productName) => ({
  type: CHANGE_PRODUCT,
  payload: productName,
});

export const clearProductState = () => ({
  type: CLEAR_PRODUCT_STATE,
});

export const clearLoadMoreState = () => ({
  type: CLEAR_LOAD_MORE_STATE,
});

export const fetchProducts = (category) => async (dispatch) => {
  dispatch(clearProductState());
  dispatch(clearLoadMoreState());
  try {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/products/${category}`
    );
    const data = response.data;
    return [dispatch(fetchProductSuccess(data))];
  } catch (error) {
    return [dispatch(fetchError(error))];
  }
};

export const fetchAvailable = () => async (dispatch) => {
  const brands = ['hennex', 'okkau', 'niksleh', 'abiplos', 'umpante', 'laion'];
  let allAvailable = [];
  dispatch(loadingStart());
  try {
    const fetchBrands = brands.map(async (brand) => {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/availability/${brand}`
      );
      const data = response?.data?.response;
      allAvailable.push(data);
    });

    await Promise.all(fetchBrands);

    return [
      dispatch(fetchAvailableSuccess(allAvailable)),
      dispatch(loadingEnd()),
    ];
  } catch (error) {
    return [dispatch(fetchError(error)), dispatch(loadingEnd())];
  }
};
