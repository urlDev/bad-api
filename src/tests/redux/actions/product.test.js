import moxios from 'moxios';

import * as ProductActions from '../../../redux/actions/product';
import { error, gloves } from '../../fixtures/product';
import { store } from '../../store';

test('Should test fetch product successfully', () => {
  const action = ProductActions.fetchProductSuccess(gloves);

  expect(action).toEqual({
    type: ProductActions.FETCH_PRODUCT_SUCCESS,
    payload: gloves,
  });
});

test('Should change product name on click', () => {
  const action = ProductActions.changeProduct('beanies');

  expect(action).toEqual({
    type: ProductActions.CHANGE_PRODUCT,
    payload: 'beanies',
  });
});

describe('Testing fetchProduct async function', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });

  test('Should fetch the product', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: gloves,
      });
    });

    const expectedActions = [
      { type: ProductActions.CLEAR_PRODUCT_STATE },
      { type: ProductActions.CLEAR_LOAD_MORE_STATE },
      { type: ProductActions.FETCH_PRODUCT_SUCCESS, payload: gloves },
    ];

    await store.dispatch(ProductActions.fetchProducts('gloves'));

    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
  test('Should give error', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(error);
    });

    const expectedActions = [
      { type: ProductActions.CLEAR_PRODUCT_STATE },
      { type: ProductActions.CLEAR_LOAD_MORE_STATE },
      {
        type: ProductActions.FETCH_ERROR,
        payload: error,
      },
    ];

    await store.dispatch(ProductActions.fetchProducts('gloves'));

    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
});
