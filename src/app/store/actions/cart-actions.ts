import { createAction, props } from '@ngrx/store';

import { Product } from '../reducers/cart-reducers';

export const loadCart = createAction('[Cart] Load Cart');
export const cartLoaded = createAction(
  '[Cart] Cart Loaded',
  props<{ products: Product[] }>()
);
export const loadCartError = createAction('[Cart] Load Cart Error');
