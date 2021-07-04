import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IImage } from 'src/app/models/IImage';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesResolver implements Resolve<any> {
  constructor(private apiService: ApiService) {}

  resolve(): Observable<IImage[]>{
    return this.apiService.getImages();
  }
}
