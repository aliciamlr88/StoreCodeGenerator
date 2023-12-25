import { Injectable } from '@angular/core';
import { Size } from '../models/size';
import { Color } from '../models/color';
import { COLORS } from '../data/color';
import { SIZES } from '../data/size';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CodeGeneratorService {
 
  private sizes: Size[] = SIZES;
  private colors: Color[] = COLORS;

  constructor() { }


    /**
    * Gets all sizes
    * Using observable to implement asynchronous call
    * @returns Observable of a list of Sizes
  */
    public getSizes(): Observable<Size[]> {
      try {
        return of(this.sizes);
      } catch (error) {
        return of([]);
      }
    }


      /**
    * Gets all colors
    * Using observable to implement asynchronous call
    * @returns Observable of a list of Colors
  */
      public getColors(): Observable<Color[]> {
        try {
          return of(this.colors);
        } catch (error) {
          return of([]);
        }
      }
}
