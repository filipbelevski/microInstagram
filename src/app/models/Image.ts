import { IImage } from "./IImage";

export class Image implements IImage{
  constructor(){

  }
  albumId: number = 0;
  id: number = 0;
  title: string = "";
  url: string = "";
  thumbnailUrl: string = "";
}
