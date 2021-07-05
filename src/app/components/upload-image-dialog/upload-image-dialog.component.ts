import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IImage } from 'src/app/models/IImage';
import { ApiService } from 'src/app/services/api.service';
import { SnackbarErrorService } from 'src/app/services/snackbar-error.service';
import { SnackbarSuccessService } from 'src/app/services/snackbar-success.service';


@Component({
  selector: 'app-upload-image-dialog',
  templateUrl: './upload-image-dialog.component.html',
  styleUrls: ['./upload-image-dialog.component.scss']
})
export class UploadImageDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<UploadImageDialogComponent>,
    private apiService: ApiService,
    private snackbarSuccess: SnackbarSuccessService,
    private snackbarError: SnackbarErrorService,
    private router: Router
    ) { }

  image!: IImage
  uploadNewImage!: FormGroup;
  albumId!: FormControl;
  title!: FormControl;
  url!: FormControl;
  thumbnailUrl!: FormControl;
  ngOnInit(): void {
    this.createControls();
    this.uploadNewImage =  new FormGroup({
      albumId: this.albumId,
      title: this.title,
      url: this.url,
      thumbnailUrl: this.thumbnailUrl
    })
  }

  createControls() {
    this.albumId = new FormControl('', [Validators.required, Validators.min(1)]),
    this.title = new FormControl('', [Validators.required]),
    this.url = new FormControl('', [Validators.required, Validators.pattern("(.*?)\.(gif|jpe?g|tiff?|png|img|webp|bmp)$")]),
    this.thumbnailUrl = new FormControl('', [Validators.required, Validators.pattern("(.*?)\.(gif|jpe?g|tiff?|png|img|webp|bmp)$")])
  }
  uploadImage(imageFormValues: IImage) {
    this.apiService.uploadImage(imageFormValues).subscribe(
      ()=> this.snackbarSuccess.openSnackBar('Sucessfuly uploaded image'),
      () => this.snackbarError.openSnackBar("Failed to upload image")
    );
    this.dialogRef.close();
    this.router.navigate(['home'])
  }
  dismiss() {
    this.dialogRef.close();
  }

}
