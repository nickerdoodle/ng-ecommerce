import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public searchbar: FormControl = new FormControl('');
  public search$: Observable<string>;
  public fakeSearchItems = ['bike', 'ipod', 'kindle'];
  constructor() {}

  ngOnInit(): void {
    this.search$ = this.searchbar.valueChanges.pipe(debounceTime(500));
    this.search$.subscribe(console.log);
  }
}
