import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-view',
  imports: [],
  templateUrl: './invoice-view.html',
})
export class InvoiceView {

  @Input() name!: string;
  @Input() id!: number;
}
