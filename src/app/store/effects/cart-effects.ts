import { from, of } from 'rxjs';
import { exhaustMap, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromActions from '../actions';

@Injectable({
  providedIn: 'root',
})
export class CartEffects {
  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadCart),
      tap(() => console.log('tapped')),
      //   exhaustMap((actions) => [])
      map(() =>
        fromActions.cartLoaded({
          products: [
            {
              id: 1,
              name: 'book',
              description: 'some book',
              price: 1.22,
            },
          ],
        })
      )
    )
  );
  constructor(
    private actions$: Actions //put service for load call
  ) {}
}
