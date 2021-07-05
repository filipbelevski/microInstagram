import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/models/IImage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-feed',
  templateUrl: './image-feed.component.html',
  styleUrls: ['./image-feed.component.scss']
})
export class ImageFeedComponent implements OnInit {

  cols!: number;
  images!: IImage[];
  pageNumber: number =1;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    let data = this.route.snapshot.data['home']
    this.images = data.reverse();; // latest is first
  }

}
