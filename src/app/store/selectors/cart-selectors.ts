import { createSelector } from '@ngrx/store';

import { CartState } from '../reducers/cart-reducers';
import { cartState } from './feature-selectors';

export const cartProducts = createSelector(
  cartState,
  (state: CartState) => state.products
);

export const cartProductsCount = createSelector(
  cartProducts,
  (state) => state.length
);
