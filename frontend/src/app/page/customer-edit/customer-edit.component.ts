import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  customer$!: Observable<Customer>;

  constructor(
    private customerService: CustomerService,
    private aRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.customer$ = this.aRoute.params.pipe(
      switchMap((params) => {
        if (params['id'] === 'new') return of(new Customer());
        return this.customerService.get(params['id'])
      })
    );
  }

  onCreate(customer: Customer) {
    this.customerService
      .create(customer)
      .subscribe((customer) => this.router.navigate(['/', 'vasarlok']));
  }

  onUpdate(customer: Customer, form: NgForm) {
    this.customerService
      .update(customer)
      .subscribe({
        next: (customer) => this.router.navigate(['/', 'vasarlok']),
        error: (err) => console.error(err),
      });
  }

}
