import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  imports: [],
  templateUrl: './total.html',

})
export class Total {
@Input() total:number=0;
}
