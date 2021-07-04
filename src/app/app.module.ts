import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPaginationModule } from 'ngx-pagination';
//Angular Material
import { MatToolbarModule, } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


//Angular Flex/Grid
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';

//App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/layout/nav/nav.component';
import { ImageFeedComponent } from './components/image-feed/image-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { DeleteImageDialogComponent } from './components/delete-image-dialog/delete-image-dialog.component';
import { EditImageDialogComponent } from './components/edit-image-dialog/edit-image-dialog.component';
import { UploadImageDialogComponent } from './components/upload-image-dialog/upload-image-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ImageFeedComponent,
    ImageDetailsComponent,
    DeleteImageDialogComponent,
    EditImageDialogComponent,
    UploadImageDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    NgxPaginationModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
