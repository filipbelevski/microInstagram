import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IImage } from 'src/app/models/IImage';
import { DeleteImageDialogComponent } from '../delete-image-dialog/delete-image-dialog.component';
import { EditImageDialogComponent } from '../edit-image-dialog/edit-image-dialog.component';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})
export class ImageDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  image!: IImage;

  ngOnInit(): void {
    this.route.data.forEach((data) => this.image = data['image']);
  }

  openDeleteImageDialog(): void {
      this.dialog.open(DeleteImageDialogComponent, {
      width: '250px',
      data: {id: this.image.id}
    });
  }
  openEditImageDialog(): void {
      const dialogRef = this.dialog.open(EditImageDialogComponent,{
      data: {image: this.image},
      disableClose: true,
    })
    dialogRef.afterClosed().subscribe( res => this.image = res.data)

  }
}
