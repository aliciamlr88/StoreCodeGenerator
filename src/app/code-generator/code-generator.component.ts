import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Subscription } from 'rxjs';
import { CodeGeneratorService } from '../services/code-generator.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Color } from '../models/color';
import { Size } from '../models/size';

@Component({
  selector: 'app-code-generator',
  templateUrl: './code-generator.component.html',
  styleUrls: ['./code-generator.component.css']
})
export class CodeGeneratorComponent implements OnInit, OnDestroy {

  public product: Product = new Product();
  public colors: Color[] = [];
  public sizes: Size[] = [];
  public isValidFormSubmitted: boolean = false;
  public submitted: boolean = false;
  public message: string ;
  
  /**
   * A subscription so we can unsubscribe
   */
  private getSubSize: Subscription;
  private getSubColor: Subscription;
  private createSub: Subscription;
  

  private subs: Subscription[];

  constructor(private codeGeneratorService: CodeGeneratorService) { }


  ngOnInit(): void {
    this.subs = [this.getSubSize, this.createSub, this.getSubColor];

  }


  ngOnDestroy(): void {
    for (const sub of this.subs) {
      sub?.unsubscribe();
    }
  }

  productForm: FormGroup = new FormGroup({
    department: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    style: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
    color: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required])
  });




  onSubmit() {
    this.isValidFormSubmitted = false;

    this.submitted = true;

    if (this.productForm.invalid){
      return;
    }
     
    this.productForm = this.productForm.value;

    // generate  barcode
  }

  get department() {
    return this.productForm.get('department');
  }
  get style() {
    return this.productForm.get('style');
  }
  get color() {
    return this.productForm.get('color');
  }
  get size() {
    return this.productForm.get('size');
  }

 

 
}
