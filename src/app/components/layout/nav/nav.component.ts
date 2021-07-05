import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { UploadImageDialogComponent } from '../../upload-image-dialog/upload-image-dialog.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  mobile: boolean = false;

  constructor(private breakPointObserver: BreakpointObserver,public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.breakPointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((state: BreakpointState)=> {
        this.mobile = state.matches
      })
  }
  openUploadImageDialog (): void {
    this.dialog.open(UploadImageDialogComponent, {disableClose: true})
  }

}
