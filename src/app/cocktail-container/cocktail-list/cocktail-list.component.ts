import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails?: Cocktail[];
  @Output() public changeCocktail: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(i: number): void {
    this.changeCocktail.emit(i);
  }
}
