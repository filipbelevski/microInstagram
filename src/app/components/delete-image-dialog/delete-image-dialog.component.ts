import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';
import { SnackbarErrorService } from 'src/app/services/snackbar-error.service';
import { SnackbarSuccessService } from 'src/app/services/snackbar-success.service';

@Component({
  selector: 'app-delete-image-dialog',
  templateUrl: './delete-image-dialog.component.html',
  styleUrls: ['./delete-image-dialog.component.scss']
})
export class DeleteImageDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteImageDialogComponent>,
     private apiService: ApiService,
     @Inject(MAT_DIALOG_DATA) public data: any,
     private snackbarSuccess: SnackbarSuccessService,
     private snackbarError: SnackbarErrorService,
     private router: Router
     ) { }

  isLoading: boolean = false;
  imageId!: number;

  ngOnInit(): void {
  }

  deleteImage(): void {
    this.apiService.deleteImage(this.data.id).subscribe(
      ()=> {
        this.snackbarSuccess.openSnackBar('Successfuly deleted image');
         this.isLoading=true},
      () => this.snackbarError.openSnackBar("Failed to delete image"),
      )
    this.isLoading = !this.isLoading
    this.dialogRef.close();
    this.router.navigate(['home']);
  }
  dismiss(): void {
    this.dialogRef.close(null);
  }

}
