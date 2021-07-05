import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IImage } from '../models/IImage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) { }

  getImages(): Observable<IImage[]> {
    return this.http.get<IImage[]>(this.baseUrl)
  }
  getImage(id: number): Observable<IImage> {
    return this.http.get<IImage>(`${this.baseUrl}/${id}`)
  }
  deleteImage(imageId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${imageId}`)
  }
  updateImage(image: IImage): Observable<IImage> {
    let options = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    }
    return this.http.put<IImage>(`${this.baseUrl}/${image.id}`, image, options)
  }
  uploadImage(image: IImage): Observable<IImage> {
    let options = { headers: new HttpHeaders({ 'Content-type': 'application/json;' }) }
    return this.http.post<IImage>(this.baseUrl, image, options)
  }
}
