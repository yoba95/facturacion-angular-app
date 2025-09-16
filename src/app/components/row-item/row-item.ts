import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[app-row-item]',
  imports: [],
  templateUrl: './row-item.html',
})
export class RowItem {
@Input() item!: Item;
}
