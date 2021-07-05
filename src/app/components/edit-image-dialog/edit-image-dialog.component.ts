import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
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
    private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbarSuccess: SnackbarSuccessService,
    private snackbarError: SnackbarErrorService,
    private fb : FormBuilder,
    ) { }

  isLoading: boolean = false;
  image: IImage = this.data.image;

  editImageForm = this.fb.group({
      albumId: [this.image.albumId, [Validators.required, Validators.min(1)]],
      title: [this.image.title, [Validators.required]],
      url: [this.image.url, [Validators.required]],
      thumbnailUrl: [this.image.thumbnailUrl, [Validators.required]],
      // no regEx validator here since api img link doesnt have extension
  })

  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {
  }

  editImage(formValues: IImage): void {
    formValues.id = this.image.id;
    this.apiService.updateImage(formValues).subscribe(
      ()=> {
        // since api will return just an id on post method response, we can't handle parent data here and change it accordingly to the response,
        // instead we just pass the form values below in dialogRef and update the component
        this.isLoading = true;
        this.snackbarSuccess.openSnackBar('Sucessfuly edited image')
      },
      () => {
        this.snackbarError.openSnackBar("Failed to edit the image");
      }
    )
    this.isLoading = !this.isLoading;
    this.dialogRef.close({data : formValues});  //updates parent component data
  }
  dismiss(): void {
    this.dialogRef.close(null);
  }
}
