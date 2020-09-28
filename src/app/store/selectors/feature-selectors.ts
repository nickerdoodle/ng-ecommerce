import { createFeatureSelector } from '@ngrx/store';

import { CartState } from '../reducers/cart-reducers';

export const cartState = createFeatureSelector<CartState>('cart');
