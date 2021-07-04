import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { IImage } from 'src/app/models/IImage';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-image-feed',
  templateUrl: './image-feed.component.html',
  styleUrls: ['./image-feed.component.scss']
})
export class ImageFeedComponent implements OnInit {

  cols!: number;
  images: any= [];
  pageNumber: number =1;
  constructor(private breakPointObserver: BreakpointObserver, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //breakpoints grid
    // this.breakPointObserver.observe([
    //   Breakpoints.XSmall
    // ]).subscribe((state: BreakpointState)=> {
    //   if(state.matches) {this.cols = 1}
    // })
    // this.breakPointObserver.observe([
    //   Breakpoints.Small
    // ]).subscribe((state: BreakpointState)=> {
    //   if(state.matches) this.cols = 2
    //   else {this.cols = 4}
    // })
    //init data resolve
    let data = this.route.snapshot.data['home']
    this.images = data.sort((a: IImage, b: IImage)=> b.id - a.id); // by id desc, latest added.
  }

}
