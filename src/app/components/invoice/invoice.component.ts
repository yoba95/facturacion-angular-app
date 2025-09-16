import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceView } from '../invoice-view/invoice-view';
import { ClientView } from '../client-view/client-view';
import { CompanyView } from '../company-view/company-view';
import { ListItems } from '../list-items/list-items';

@Component({
  selector: 'app-invoice',
  imports: [InvoiceView, ClientView, CompanyView, ListItems],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit{

  invoice!: Invoice;

  constructor(private service: InvoiceService) { }

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
}
export { Invoice };

