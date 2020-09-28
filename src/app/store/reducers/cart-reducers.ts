import { Action, createReducer, on } from '@ngrx/store';

import * as fromActions from '../actions';

export interface CartState {
  // define state
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export const initialState = {
  //set initial state
  products: [
    {
      id: 4,
      name: 'onething',
      description: 'desc',
      price: 2.44,
    },
  ],
};

const featureReducer = createReducer(
  initialState,
  // on(fromActions.loadCart, state => ({ ...state, prop: newValue })),
  on(fromActions.cartLoaded, (state, { products }) => ({
    ...state,
    products: products,
  }))
);
export function cartReducer(state: CartState, action: Action) {
  return featureReducer(state, action);
}
