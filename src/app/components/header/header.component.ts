import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as fromActions from 'src/app/store/actions';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { select, Store } from '@ngrx/store';

import { cartProducts, cartProductsCount } from '../../store/selectors/cart-selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  public sidenavToggle: EventEmitter<any> = new EventEmitter();

  public searchbar: FormControl = new FormControl('');
  public search$: Observable<string>;
  public fakeSearchItems = ['bike', 'ipod', 'kindle'];
  public cart$: Observable<any>;
  // public cartCount$: Observable<number>;
  constructor(
    private store: Store,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'cart',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/shopping-cart.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/menu-symbol-of-three-parallel-lines.svg'
      )
    );
  }

  ngOnInit(): void {
    this.search$ = this.searchbar.valueChanges.pipe(debounceTime(500));
    this.search$.subscribe(console.log);
    this.cart$ = this.store.select(cartProducts);
    // this.cart$ = this.store.pipe(select(cartProducts));
    // this.cart$ = this.store.select((state) => state);
    this.cart$.subscribe((cart) => console.log('cart', cart));
    this.store.dispatch(fromActions.loadCart());
    // this.cartCount$ = this.store.select(cartProductsCount);
    // this.cartCount$.subscribe(console.log);
  }

  public onSidenavClick() {
    this.sidenavToggle.emit(undefined);
  }

  public onCartClick() {
    console.log('cart clicked');
  }
}
