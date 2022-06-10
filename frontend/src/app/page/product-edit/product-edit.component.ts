import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product$!: Observable<Product>;
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private aRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.product$ = this.aRoute.params.pipe(
      switchMap((params) => this.productService.get(params['id']))
    );
    this.product$.subscribe((data) => {
      if (data) this.product = data;
    });
  }

  onCreate(product: Product) {
    this.productService
      .create(product)
      .subscribe((product) => this.router.navigate(['/', 'termekek']));
  }

  onUpdate(product: Product, form: NgForm) {
    console.log(product);
    this.productService
      .update(product)
      .subscribe((product) => this.router.navigate(['/', 'termekek']));
  }

}
