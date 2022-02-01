import { Injectable } from '@angular/core';
import { News } from '../interfaces/news-select.interface';

@Injectable({
  providedIn: 'root'
})
export class DataSelectService {
  public news: News[] = [];
  constructor() { }

  public getDataNews(): News[]{
    this.news = [
      {
        name: 'Select your news',
        img: ''
      },
      {
        name: 'Angular',
        img: ''
      },
      {
        name: 'React',
        img: ''
      },
      {
        name: 'Vue',
        img: ''
      }
    ];
    return this.news;
  }
}
