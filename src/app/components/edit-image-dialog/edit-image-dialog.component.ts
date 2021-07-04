import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { IImage } from 'src/app/models/IImage';
import { ApiService } from 'src/app/services/api.service';
import { SnackbarErrorService } from 'src/app/services/snackbar-error.service';
import { SnackbarSuccessService } from 'src/app/services/snackbar-success.service';

@Component({
  selector: 'app-edit-image-dialog',
  templateUrl: './edit-image-dialog.component.html',
  styleUrls: ['./edit-image-dialog.component.scss']
})
export class EditImageDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditImageDialogComponent>,
    private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: any ,
    private snackbarSuccess: SnackbarSuccessService,
    private snackbarError: SnackbarErrorService
    ) { }

  isLoading: boolean = false;
  image: IImage = this.data.image;
  editImageForm!: FormGroup;
  albumId!: FormControl;
  title!: FormControl;
  url!: FormControl;
  thumbnailUrl!: FormControl;

  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {
    this.createControls();
    this.editImageForm =  new FormGroup({
      albumId: this.albumId,
      title: this.title,
      url: this.url,
      thumbnailUrl: this.thumbnailUrl
    })
  }

  createControls() {
    this.albumId = new FormControl('', [Validators.required, Validators.min(1)]),
    this.title = new FormControl('', [Validators.required]),
    this.url = new FormControl('', [Validators.required]),
    this.thumbnailUrl = new FormControl('', [Validators.required])
  }

  editImage(formValues: IImage): void {
    formValues.id = this.image.id;
    this.apiService.updateImage(formValues).subscribe(
      ()=> {
        this.isLoading = true;
        this.snackbarSuccess.openSnackBar('Sucessfuly edited image')
      },
      () => this.snackbarError.openSnackBar("Failed to edit the image")
    )
    this.isLoading = !this.isLoading;
    this.dialogRef.close();
  }
  dismiss(): void {
    this.dialogRef.close(null);
  }
}
