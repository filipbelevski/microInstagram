import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarSuccessService {

  constructor(private snackBar: MatSnackBar) { }


  openSnackBar(message: string){
    this.snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: ['snackbar-success']
    })
  }
}
