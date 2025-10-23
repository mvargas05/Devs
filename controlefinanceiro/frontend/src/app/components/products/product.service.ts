import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private snackBar: MatSnackBar) { }

  showSuccess(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

}
