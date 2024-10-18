import { Component } from '@angular/core';
import { FooService } from './foo.service';
import { ActivatedRoute } from '@angular/router';
import { IFoo } from './foo.model';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {
  foos: any;
  orderFilter: string = '';

  constructor(
    private fooSvc: FooService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.fooSvc.getFoos().subscribe((foos) => {
      this.foos = foos;
    });

    this.route.queryParams.subscribe((params) => {
      this.orderFilter = params['orderFilter'] ?? '';
    })

  }

  getFilteredFoos() {
    console.log('getFilteredFoos - ' + this.orderFilter);

    //case empty order by id asc
    //case 'A' order by property asc
    //case 'D' order by property desc

    if(this.foos == null){
      return null;
    }else{
      return this.orderFilter === ''
        ? this.foos.sort((f1: IFoo, f2: IFoo) => f1.id - f2.id) 
        : this.foos.sort(
          (f1: IFoo, f2: IFoo) => 
            this.orderFilter === 'A' 
              ? f1.fooProperty.localeCompare(f2.fooProperty) 
              : f2.fooProperty.localeCompare(f1.fooProperty)
        );
    }
  }
}
