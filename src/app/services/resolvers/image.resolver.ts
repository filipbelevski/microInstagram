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
export class ImageResolver implements Resolve<any> {
  constructor(private apiService: ApiService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<IImage> {
    return this.apiService.getImage(route.params['id']);
  }
}
