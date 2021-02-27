import { useDispatch } from 'react-redux';

import { changeProduct, fetchProducts } from '../../redux/actions/product';
import { Brand, NavContainer, NavLinks, StyledLink } from './Nav.styles';

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <NavContainer>
        <div>
          <Brand to="/gloves" onClick={() => dispatch(fetchProducts('gloves'))}>
            <h1>Best Clothing</h1>
          </Brand>
        </div>
        <NavLinks>
          <StyledLink
            to="/gloves"
            activeStyle={{
              color: '#836e98',
            }}
            onClick={() => dispatch(changeProduct('gloves'))}
          >
            Gloves
          </StyledLink>
          <StyledLink
            to="/facemasks"
            activeStyle={{
              color: '#836e98',
            }}
            onClick={() => dispatch(changeProduct('facemasks'))}
          >
            Facemasks
          </StyledLink>
          <StyledLink
            to="/beanies"
            activeStyle={{
              color: '#836e98',
            }}
            onClick={() => dispatch(changeProduct('beanies'))}
          >
            Beanies
          </StyledLink>
        </NavLinks>
      </NavContainer>
    </header>
  );
};

export default Nav;
