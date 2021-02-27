import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAvailable,
  fetchProducts,
  loadMore,
} from '../../redux/actions/product';

import {
  AllProducts,
  Loading,
  LoadMoreButton,
  ProductCard,
  ProductsContainer,
} from './ProductsDefault.styles';

const ProductsDefault = () => {
  const {
    available,
    arrayLoadEnd,
    products,
    productName,
    loading,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts(productName));
  }, [dispatch, productName]);

  React.useEffect(() => {
    dispatch(fetchAvailable());
  }, [dispatch]);

  return (
    <ProductsContainer>
      <AllProducts>
        {loading ? (
          <Loading>Loading...</Loading>
        ) : (
          products?.slice(0, arrayLoadEnd + 20).map((product) => {
            return available?.flat().map((data) =>
              data?.id === product?.id.toUpperCase() ? (
                <ProductCard key={product.id}>
                  <h1>{product.name}</h1>
                  <h3>{product.manufacturer}</h3>
                  <p dangerouslySetInnerHTML={{ __html: data.DATAPAYLOAD }}></p>
                </ProductCard>
              ) : null
            );
          })
        )}
      </AllProducts>
      <LoadMoreButton onClick={() => dispatch(loadMore())}>
        Load More
      </LoadMoreButton>
    </ProductsContainer>
  );
};

export default ProductsDefault;
